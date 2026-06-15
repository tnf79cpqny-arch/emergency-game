import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAEDStore = defineStore('aed', () => {
  // AED状态
  const isActive = ref(false)
  const currentStep = ref(0) // 0: 打开电源, 1: 贴电极片, 2: 连接导线, 3: 分析心律, 4: 放电除颤, 5: 继续CPR
  const totalScore = ref(0)
  const steps = ref([])

  // AED步骤定义
  const aedSteps = [
    { id: 0, name: '打开电源', description: '按下电源开关，开启AED', icon: '🔌', completed: false, correct: false },
    { id: 1, name: '贴电极片', description: '将电极片贴在裸露的胸部皮肤上', icon: '🩹', completed: false, correct: false },
    { id: 2, name: '连接导线', description: '将导线连接到AED主机', icon: '🔗', completed: false, correct: false },
    { id: 3, name: '分析心律', description: '等待AED分析心律，确保无人触碰患者', icon: '📊', completed: false, correct: false },
    { id: 4, name: '放电除颤', description: '按下电击按钮，确保无人触碰患者', icon: '⚡', completed: false, correct: false },
    { id: 5, name: '继续CPR', description: '电击后继续进行胸外按压', icon: '💓', completed: false, correct: false }
  ]

  // 电极片贴放位置选项
  const electrodeOptions = ref([
    { id: 'upper_right', label: '右上方', correct: false },
    { id: 'upper_left', label: '左上方', correct: false },
    { id: 'lower_right', label: '右下方', correct: true },
    { id: 'lower_left', label: '左下方', correct: true }
  ])

  // 当前选择的电极位置
  const selectedElectrodes = ref([])

  // 进度
  const progress = computed(() => {
    const completedSteps = aedSteps.filter(s => s.completed).length
    return Math.round((completedSteps / aedSteps.length) * 100)
  })

  // 是否正在分析
  const isAnalyzing = ref(false)

  // 是否建议电击
  const shockAdvised = ref(true)

  // 语音提示
  const voicePrompt = ref('')

  // 初始化AED
  function initAED(config = {}) {
    resetAED()
    isActive.value = true
    currentStep.value = 0
    updateVoicePrompt('发现可用AED，请按照指导操作')
  }

  // 完成步骤
  function completeStep(stepId, isCorrect = true) {
    const step = aedSteps.find(s => s.id === stepId)
    if (step) {
      step.completed = true
      step.correct = isCorrect
      currentStep.value = stepId + 1
    }
  }

  // 贴电极片 - 检查位置
  function checkElectrodePlacement(position) {
    selectedElectrodes.value.push(position)
    // 简化检查：只要选了就认为对
    return true
  }

  // 开启分析
  function startAnalysis() {
    isAnalyzing.value = true
    updateVoicePrompt('正在分析心律，请确保无人触碰患者')

    // 模拟分析过程
    setTimeout(() => {
      isAnalyzing.value = false
      if (shockAdvised.value) {
        updateVoicePrompt('建议电击，正在充电')
        setTimeout(() => {
          updateVoicePrompt('充电完成，请按下电击按钮')
        }, 1000)
      } else {
        updateVoicePrompt('不建议电击，继续心肺复苏')
        completeStep(3, true)
      }
    }, 3000)
  }

  // 执行电击
  function deliverShock() {
    updateVoicePrompt('电击已释放，请立即继续胸外按压')
    completeStep(4, true)
  }

  // 更新语音提示
  function updateVoicePrompt(message) {
    voicePrompt.value = message
  }

  // 计算总分
  function calculateScore() {
    const correctSteps = aedSteps.filter(s => s.correct).length
    totalScore.value = Math.round((correctSteps / aedSteps.length) * 100)
    return totalScore.value
  }

  // 评估结果
  const assessment = computed(() => {
    if (totalScore.value >= 90) return '优秀'
    if (totalScore.value >= 75) return '良好'
    if (totalScore.value >= 60) return '合格'
    return '不合格'
  })

  // 重置
  function resetAED() {
    isActive.value = false
    currentStep.value = 0
    totalScore.value = 0
    selectedElectrodes.value = []
    isAnalyzing.value = false
    shockAdvised.value = true
    voicePrompt.value = ''
    aedSteps.forEach(s => {
      s.completed = false
      s.correct = false
    })
  }

  // 结束AED
  function endAED() {
    isActive.value = false
    calculateScore()
  }

  return {
    isActive,
    currentStep,
    totalScore,
    steps,
    aedSteps,
    electrodeOptions,
    selectedElectrodes,
    progress,
    isAnalyzing,
    shockAdvised,
    voicePrompt,
    assessment,
    initAED,
    completeStep,
    checkElectrodePlacement,
    startAnalysis,
    deliverShock,
    updateVoicePrompt,
    calculateScore,
    resetAED,
    endAED
  }
})
