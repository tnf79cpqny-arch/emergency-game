import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCPRStore = defineStore('cpr', () => {
  // CPR状态
  const isActive = ref(false)
  const currentStep = ref(0) // 0: 检查反应, 1: 拨打120, 2: 摆正体位, 3: 胸外按压, 4: 人工呼吸, 5: 完成
  const bpmTarget = ref(110) // 目标按压频率 100-120
  const compressionCount = ref(0) // 当前按压次数
  const requiredCount = ref(30) // 需要完成的按压次数
  const compressionDepth = ref(0) // 按压深度 (0-100%)
  const rhythmScore = ref(0) // 节奏评分 0-100
  const isInhalePhase = ref(false) // 是否处于吸气阶段
  const totalScore = ref(0) // 总分
  const breathingCount = ref(0) // 呼吸次数
  const requiredBreathingCount = ref(2) // 需要完成的呼吸次数
  const breathingScore = ref(0) // 吹气评分
  const breathingStartTime = ref(0) // 吹气开始时间

  // 按压记录
  const compressionHistory = ref([])
  const breathingHistory = ref([])

  // 步骤定义
  const steps = [
    { id: 0, name: '检查反应', description: '轻拍双肩，在耳边呼喊', completed: false },
    { id: 1, name: '拨打120', description: '让周围人拨打急救电话', completed: false },
    { id: 2, name: '摆正体位', description: '将患者仰卧于硬平面上', completed: false },
    { id: 3, name: '检查呼吸道', description: '清理口腔异物，压额抬颏开放气道', completed: false },
    { id: 4, name: '胸外按压', description: '双手交叠，掌根置于胸骨中下1/3处', completed: false },
    { id: 5, name: '人工呼吸', description: '捏鼻吹气，观察胸部起伏', completed: false },
    { id: 6, name: '完成CPR', description: '按压与呼吸比例30:2，循环操作', completed: false }
  ]

  // 计算进度
  const progress = computed(() => {
    return Math.round((currentStep.value / steps.length) * 100)
  })

  // 按压是否达标
  const isCompressionValid = computed(() => {
    return compressionDepth.value >= 80 && rhythmScore.value >= 70
  })

  // 初始化CPR模拟
  function initCPR(config = {}) {
    bpmTarget.value = config.bpmTarget || 110
    requiredCount.value = config.compressionCount || 30
    resetCPR()
    isActive.value = true
    currentStep.value = 0
    steps.forEach(s => s.completed = false)
  }

  // 完成当前步骤
  function completeStep(stepId) {
    const step = steps.find(s => s.id === stepId)
    if (step) {
      step.completed = true
      currentStep.value = stepId + 1
    }
  }

  // 记录一次吹气
  function recordBreathing(timestamp, volume) {
    breathingCount.value++

    // 计算吹气评分（根据吹气时间）
    const expectedDuration = 1000 // 预期吹气时间1秒
    const deviation = Math.abs(timestamp - breathingStartTime.value - expectedDuration) / expectedDuration
    const score = Math.max(0, Math.round(100 - deviation * 50))

    breathingHistory.value.push({
      timestamp,
      volume,
      score
    })

    // 更新吹气评分（取平均值）
    breathingScore.value = Math.round(breathingHistory.value.reduce((sum, b) => sum + b.score, 0) / breathingHistory.value.length)

    // 检查是否完成（完成2次呼吸）
    if (breathingCount.value >= requiredBreathingCount.value) {
      completeStep(5) // 完成呼吸步骤
    }

    return { volume, score }
  }

  // 记录一次按压
  function recordCompression(timestamp, depth) {
    compressionCount.value++

    // 计算节奏评分
    const interval = timestamp - (compressionHistory.value[compressionHistory.value.length - 1]?.timestamp || timestamp)
    const expectedInterval = 60000 / bpmTarget.value // 目标间隔(ms)
    const deviation = Math.abs(interval - expectedInterval) / expectedInterval
    const score = Math.max(0, Math.round(100 - deviation * 100))

    compressionHistory.value.push({
      timestamp,
      depth,
      interval,
      score
    })

    // 更新深度评分
    compressionDepth.value = Math.min(100, depth)

    // 更新节奏评分（取最近10次的平均）
    if (compressionHistory.value.length > 1) {
      const recent = compressionHistory.value.slice(-10)
      rhythmScore.value = Math.round(recent.reduce((sum, c) => sum + c.score, 0) / recent.length)
    }

    // 检查是否完成
    if (compressionCount.value >= requiredCount.value) {
      completeStep(4) // 完成按压步骤
    }

    return { interval, deviation, score }
  }

  // 计算总分
  function calculateScore() {
    const depthScore = compressionDepth.value * 0.4
    const rhythmScoreFinal = rhythmScore.value * 0.4
    const countScore = Math.min(100, (compressionCount.value / requiredCount.value) * 100) * 0.2

    totalScore.value = Math.round(depthScore + rhythmScoreFinal + countScore)
    return totalScore.value
  }

  // 获取评估结果
  const assessment = computed(() => {
    if (totalScore.value >= 90) return '优秀'
    if (totalScore.value >= 75) return '良好'
    if (totalScore.value >= 60) return '合格'
    return '不合格'
  })

  // 重置CPR
  function resetCPR() {
    currentStep.value = 0
    compressionCount.value = 0
    compressionDepth.value = 0
    rhythmScore.value = 0
    totalScore.value = 0
    compressionHistory.value = []
    breathingCount.value = 0
    breathingScore.value = 0
    breathingHistory.value = []
    isInhalePhase.value = false
    isActive.value = false
    steps.forEach(s => s.completed = false)
  }

  // 结束CPR模拟
  function endCPR() {
    isActive.value = false
    calculateScore()
  }

  return {
    isActive,
    currentStep,
    bpmTarget,
    compressionCount,
    requiredCount,
    compressionDepth,
    rhythmScore,
    isInhalePhase,
    totalScore,
    compressionHistory,
    breathingCount,
    requiredBreathingCount,
    breathingScore,
    breathingStartTime,
    steps,
    progress,
    isCompressionValid,
    assessment,
    initCPR,
    completeStep,
    recordCompression,
    recordBreathing,
    calculateScore,
    resetCPR,
    endCPR
  }
})
