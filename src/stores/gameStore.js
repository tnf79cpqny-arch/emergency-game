import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { scenarioList, getScenarioData } from '../scenarios/index'

export const useGameStore = defineStore('game', () => {
  // 当前场景ID - 默认使用测试配置中的场景
  const currentScenarioId = ref('earthquake')

  // 游戏状态
  const currentNodeId = ref('start')
  const health = ref(100)
  const knowledgePoints = ref(0)
  const gameOver = ref(false)
  const gameWon = ref(false)
  const choicesMade = ref([])

  // 模拟状态
  const isSimulationActive = ref(false)
  const activeSimulationType = ref(null) // 'cpr' | 'aed'

  // 已回答的问题ID列表（用于避免重复）
  const answeredQuestionIds = ref([])

  // 获取当前场景数据
  const currentScenario = computed(() => {
    return getScenarioData(currentScenarioId.value)
  })

  // 获取当前场景元数据
  const scenarioMeta = computed(() => {
    return scenarioList.find(s => s.id === currentScenarioId.value)
  })

  // 获取当前节点
  const currentNode = computed(() => {
    return currentScenario.value?.nodes[currentNodeId.value] || currentScenario.value?.nodes['start']
  })

  // 检查是否游戏结束
  const isGameOver = computed(() => gameOver.value || health.value <= 0)

  // 更新生命值
  function updateHealth(delta) {
    health.value = Math.max(0, Math.min(100, health.value + delta))
    if (health.value <= 0) {
      gameOver.value = true
    }
  }

  // 更新知识积分
  function updateKnowledge(delta) {
    knowledgePoints.value = Math.max(0, knowledgePoints.value + delta)
  }

  // 做出选择
  function makeChoice(nodeId, choiceIndex) {
    choicesMade.value.push({
      nodeId,
      choiceIndex,
      timestamp: Date.now()
    })

    const node = currentScenario.value?.nodes[nodeId]
    if (!node) return

    const choice = node.choices?.[choiceIndex]
    if (!choice) return

    // 应用选择效果
    if (choice.healthChange) {
      updateHealth(choice.healthChange)
    }
    if (choice.knowledgeChange) {
      updateKnowledge(choice.knowledgeChange)
    }

    // 切换到下一节点
    currentNodeId.value = choice.nextNode

    // 检查是否到达终点
    const nextNode = currentScenario.value?.nodes[currentNodeId.value]
    if (nextNode && nextNode.isEnding) {
      if (nextNode.endingType === 'win') {
        gameWon.value = true
        gameOver.value = false
      } else {
        gameOver.value = true
        gameWon.value = false
      }
    }
  }

  // 设置当前场景
  function setScenario(scenarioId) {
    currentScenarioId.value = scenarioId
    resetGame()
  }

  // 重置游戏
  function resetGame() {
    currentNodeId.value = 'start'
    health.value = 100
    knowledgePoints.value = 0
    gameOver.value = false
    gameWon.value = false
    choicesMade.value = []
    isSimulationActive.value = false
    activeSimulationType.value = null
    answeredQuestionIds.value = []
  }

  // 获取一个随机的未回答问题
  function getRandomUnansweredQuestion() {
    const questions = currentScenario.value?.questions || []
    const unanswered = questions.filter(q => !answeredQuestionIds.value.includes(q.id))
    if (unanswered.length === 0) return null
    const randomIndex = Math.floor(Math.random() * unanswered.length)
    const selectedQuestion = unanswered[randomIndex]
    answeredQuestionIds.value.push(selectedQuestion.id)
    return selectedQuestion
  }

  // 标记问题为已回答
  function markQuestionAnswered(questionId) {
    if (!answeredQuestionIds.value.includes(questionId)) {
      answeredQuestionIds.value.push(questionId)
    }
  }

  // 获取结局评价
  const endingRating = computed(() => {
    if (knowledgePoints.value >= 80 && health.value >= 80) {
      return '完美通关'
    } else if (knowledgePoints.value >= 40 && health.value >= 40) {
      return '普通通关'
    } else {
      return '通关失败'
    }
  })

  return {
    currentScenarioId,
    currentNodeId,
    health,
    knowledgePoints,
    gameOver,
    gameWon,
    choicesMade,
    isSimulationActive,
    activeSimulationType,
    answeredQuestionIds,
    currentNode,
    currentScenario,
    scenarioMeta,
    isGameOver,
    endingRating,
    updateHealth,
    updateKnowledge,
    makeChoice,
    setScenario,
    resetGame,
    getRandomUnansweredQuestion,
    markQuestionAnswered
  }
})
