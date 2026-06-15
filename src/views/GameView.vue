<template>
  <div class="game-view">
    <div class="game-container">
      <!-- 资源栏 -->
      <ResourceBar
        :health="gameStore.health"
        :knowledge="gameStore.knowledgePoints"
      />

      <!-- 场景显示 -->
      <SceneDisplay :scene="gameStore.currentNode?.scene" />

      <!-- 游戏文本 -->
      <GameText :text="gameStore.currentNode?.text" />

      <!-- 选择按钮 -->
      <div v-if="!gameStore.isSimulationActive && !showQuestion && !pendingEnding" class="choices-section">
        <ChoiceButton
          v-for="(choice, index) in gameStore.currentNode?.choices"
          :key="index"
          :text="choice.text"
          :index="index"
          :disabled="isWaitingForQuestion"
          @select="handleChoice"
        />
      </div>

      <!-- 问答组件 -->
      <QAComponent
        v-if="showQuestion"
        :show="showQuestion"
        :question="currentQuestion"
        @answer="handleQuestionAnswer"
      />

      <!-- CPR模拟面板 -->
      <CPRSimulationPanel
        v-if="showCPRSimulation"
        :config="currentSimulationConfig"
        @complete="handleSimulationComplete"
        @close="handleSimulationClose"
      />

      <!-- AED模拟面板 -->
      <AEDSimulationPanel
        v-if="showAEDSimulation"
        :config="currentSimulationConfig"
        @complete="handleSimulationComplete"
        @close="handleSimulationClose"
      />
    </div>

    <!-- 游戏结束操作栏 -->
    <div v-if="(gameStore.isGameOver || gameStore.gameWon) && !pendingEnding" class="game-over-action-bar">
      <div class="game-over-result">
        <h2 :class="gameStore.gameWon ? 'win' : 'lose'">
          {{ gameStore.gameWon ? '🎉 恭喜通关！' : '💀 游戏结束' }}
        </h2>
        <p class="ending-message">{{ endingMessage }}</p>
        <div class="final-stats">
          <span class="stat-item">📚 知识积分: {{ gameStore.knowledgePoints }}</span>
          <span class="stat-item">❤️ 生命值: {{ gameStore.health }}%</span>
        </div>
      </div>
      <div class="action-buttons">
        <button class="action-btn home-btn" @click="goHome">返回首页</button>
        <button class="action-btn retry-btn" @click="retryGame">再玩一次</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useGameStore } from '../stores/gameStore'
import ResourceBar from '../components/ResourceBar.vue'
import SceneDisplay from '../components/SceneDisplay.vue'
import GameText from '../components/GameText.vue'
import ChoiceButton from '../components/ChoiceButton.vue'
import QAComponent from '../components/QAComponent.vue'
import CPRSimulationPanel from '../components/CPR/CPRSimulationPanel.vue'
import AEDSimulationPanel from '../components/AED/AEDSimulationPanel.vue'

const router = useRouter()
const gameStore = useGameStore()

// QA状态
const showQuestion = ref(false)
const isWaitingForQuestion = ref(false)
const pendingChoice = ref(null)
const currentQuestion = ref(null)
const pendingEnding = ref(false) // 是否在等待问答完成后显示结局
const endingQuestionCount = ref(0) // 已回答的结局问答数量
const maxEndingQuestions = 10 // 结局时最多回答的问题数

// 计算属性
const scenarioMeta = computed(() => gameStore.scenarioMeta || {})

const currentSimulationConfig = computed(() => {
  return gameStore.currentNode?.simulationConfig || {}
})

const showCPRSimulation = computed(() => {
  return gameStore.currentNode?.simulationType === 'cpr' && gameStore.isSimulationActive
})

const showAEDSimulation = computed(() => {
  return gameStore.currentNode?.simulationType === 'aed' && gameStore.isSimulationActive
})

const endingMessage = computed(() => {
  const scenarioName = scenarioMeta.value.name || '逃生'
  const endingWord = scenarioMeta.value.endingTitle || '逃生'

  // 游戏失败（生命值为0）
  if (gameStore.gameOver && gameStore.health <= 0) {
    return `你没能成功${endingWord}...请记住${scenarioName}的关键知识，下次更加冷静应对。`
  }

  // 游戏胜利，根据评价显示不同消息
  if (gameStore.gameWon) {
    if (gameStore.endingRating === '完美通关') {
      return `🎉 完美通关！你对${scenarioName}知识的掌握非常扎实，是真正的应急达人！继续保持，再接再厉！`
    } else if (gameStore.endingRating === '普通通关') {
      return `✨ 恭喜通关！你展现了不错的${scenarioName}应对能力，但还有进步空间。建议复习相关知识，争取下次完美通关！`
    } else {
      return `💪 通关成功！${scenarioName}的知识还有很多需要学习的地方，不要气馁，多练习几次你一定能做得更好！`
    }
  }

  // 默认消息
  return `请继续学习更多应急知识吧！`
})

// 监听节点变化
watch(() => gameStore.currentNodeId, (newNodeId) => {
  showQuestion.value = false
  isWaitingForQuestion.value = false
  pendingChoice.value = null
  endingQuestionCount.value = 0

  const node = gameStore.currentNode
  if (!node) return

  // 检查是否有模拟类型
  if (node.simulationType) {
    gameStore.isSimulationActive = true
    gameStore.activeSimulationType = node.simulationType
  }

  // 检查是否是结局节点，触发最终问答
  if (node.isEnding) {
    triggerEndingQuestion()
  }
})

// 触发结局前的问答
function triggerEndingQuestion() {
  pendingEnding.value = true
  endingQuestionCount.value = 0
  showNextEndingQuestion()
}

// 显示下一道结局问答
function showNextEndingQuestion() {
  currentQuestion.value = gameStore.getRandomUnansweredQuestion()
  if (currentQuestion.value && endingQuestionCount.value < maxEndingQuestions) {
    showQuestion.value = true
    isWaitingForQuestion.value = true
  } else {
    // 问题用完了或已达数量上限，直接显示结局
    finalizeEnding()
  }
}

// 完成结局
function finalizeEnding() {
  pendingEnding.value = false
  const node = gameStore.currentNode
  if (node && node.isEnding) {
    if (node.endingType === 'win') {
      gameStore.gameWon = true
      gameStore.gameOver = false
    } else {
      gameStore.gameOver = true
      gameStore.gameWon = false
    }
  }
}

function handleChoice(index) {
  if (gameStore.isGameOver || gameStore.gameWon) return
  if (isWaitingForQuestion.value) return
  if (gameStore.isSimulationActive) return

  const node = gameStore.currentNode
  if (!node) return

  // 如果节点有模拟类型，激活模拟模式
  if (node.simulationType) {
    gameStore.isSimulationActive = true
    gameStore.activeSimulationType = node.simulationType
    return
  }

  // 直接做出选择
  makeChoice(index)
}

function makeChoice(index) {
  gameStore.makeChoice(gameStore.currentNodeId, index)
  // 只有在不在等待问答时才重置问答状态
  // 如果在等待问答（handleChoice已设置），showQuestion应由watch处理
  if (!isWaitingForQuestion.value) {
    showQuestion.value = false
    pendingChoice.value = null
  }
}

function handleQuestionAnswer(result) {
  if (result.isCorrect) {
    gameStore.updateKnowledge(result.knowledgeChange)
  }
  showQuestion.value = false
  isWaitingForQuestion.value = false

  // 如果是结局前的问答，继续显示下一道
  if (pendingEnding.value) {
    endingQuestionCount.value++
    if (endingQuestionCount.value < maxEndingQuestions) {
      setTimeout(() => {
        showNextEndingQuestion()
      }, 300)
    } else {
      finalizeEnding()
    }
    return
  }

  // 如果已经在处理选择（handleChoice已设置pendingChoice），不重复调用makeChoice
  if (pendingChoice.value) {
    const choiceToMake = pendingChoice.value.index
    pendingChoice.value = null
    setTimeout(() => {
      makeChoice(choiceToMake)
    }, 300)
  }
}

function handleSimulationComplete(result) {
  // 应用模拟结果
  if (result.score) {
    gameStore.updateKnowledge(Math.round(result.score / 10))
  }
  if (result.healthChange) {
    gameStore.updateHealth(result.healthChange)
  }

  gameStore.isSimulationActive = false
  gameStore.activeSimulationType = null

  // 只有在游戏未结束时才移动到下一节点
  if (gameStore.isGameOver || gameStore.gameWon) {
    return
  }

  // 移动到下一节点
  const node = gameStore.currentNode
  if (node?.choices?.[0]?.nextNode) {
    gameStore.makeChoice(gameStore.currentNodeId, 0)
  }
}

function handleSimulationClose() {
  gameStore.isSimulationActive = false
  gameStore.activeSimulationType = null
}

function retryGame() {
  showQuestion.value = false
  isWaitingForQuestion.value = false
  pendingChoice.value = null
  pendingEnding.value = false
  endingQuestionCount.value = 0
  gameStore.resetGame()
  router.push('/')
}

function goToResult() {
  router.push('/result')
}

function goHome() {
  showQuestion.value = false
  isWaitingForQuestion.value = false
  pendingChoice.value = null
  pendingEnding.value = false
  endingQuestionCount.value = 0
  gameStore.resetGame()
  router.push('/')
}
</script>

<style scoped>
.game-view {
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
  padding: 20px;
}

.game-container {
  max-width: 700px;
  margin: 0 auto;
}

.choices-section {
  margin-top: 24px;
}

/* 游戏结束操作栏 */
.game-over-action-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(180deg, rgba(15, 15, 35, 0.95) 0%, rgba(10, 10, 25, 0.98) 100%);
  border-top: 2px solid #3d5a80;
  padding: 20px;
  z-index: 100;
  animation: slideUp 0.3s ease;
}

@keyframes slideUp {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.game-over-result {
  text-align: center;
  margin-bottom: 16px;
}

.game-over-result h2 {
  font-size: 24px;
  margin: 0 0 8px 0;
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
}

.game-over-result h2.win {
  color: #4fc3f7;
}

.game-over-result h2.lose {
  color: #ff6b6b;
}

.game-over-result .ending-message {
  color: #b8d4e8;
  font-size: 14px;
  margin: 0 0 12px 0;
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
}

.final-stats {
  display: flex;
  justify-content: center;
  gap: 24px;
}

.stat-item {
  color: #4fc3f7;
  font-size: 14px;
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
}

.action-buttons {
  display: flex;
  justify-content: center;
  gap: 16px;
}

.action-btn {
  padding: 12px 32px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
}

.home-btn {
  background: linear-gradient(135deg, #66bb6a 0%, #388e3c 100%);
  color: #fff;
}

.retry-btn {
  background: linear-gradient(135deg, #4fc3f7 0%, #0288d1 100%);
  color: #fff;
}

.action-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(79, 195, 247, 0.3);
}

.home-btn:hover {
  box-shadow: 0 4px 15px rgba(102, 187, 106, 0.4);
}
</style>
