import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTimerStore = defineStore('timer', () => {
  // 计时器状态
  const isRunning = ref(false)
  const timeRemaining = ref(0)
  const totalTime = ref(0)
  const urgencyLevel = ref('normal') // 'low', 'normal', 'high', 'critical'
  const currentNodeId = ref(null)
  const timeoutCallback = ref(null)

  // 定时器引用
  let timerInterval = null

  // 计算属性
  const percentage = computed(() => {
    if (totalTime.value === 0) return 0
    return (timeRemaining.value / totalTime.value) * 100
  })

  const formattedTime = computed(() => {
    const seconds = Math.ceil(timeRemaining.value)
    return `${seconds}秒`
  })

  // 格式化时间（分:秒）
  const formattedTimeMMSS = computed(() => {
    const totalSeconds = Math.ceil(timeRemaining.value)
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  })

  // 开始计时
  function startTimer(duration, nodeId, callback) {
    stopTimer()

    totalTime.value = duration
    timeRemaining.value = duration
    currentNodeId.value = nodeId
    timeoutCallback.value = callback
    isRunning.value = true

    timerInterval = setInterval(() => {
      timeRemaining.value -= 0.1

      // 更新紧迫度等级
      updateUrgencyLevel()

      if (timeRemaining.value <= 0) {
        timeRemaining.value = 0
        stopTimer()
        if (timeoutCallback.value) {
          timeoutCallback.value()
        }
      }
    }, 100)
  }

  // 更新紧迫度等级
  function updateUrgencyLevel() {
    const ratio = timeRemaining.value / totalTime.value
    if (ratio > 0.6) {
      urgencyLevel.value = 'low'
    } else if (ratio > 0.3) {
      urgencyLevel.value = 'normal'
    } else if (ratio > 0.1) {
      urgencyLevel.value = 'high'
    } else {
      urgencyLevel.value = 'critical'
    }
  }

  // 停止计时
  function stopTimer() {
    if (timerInterval) {
      clearInterval(timerInterval)
      timerInterval = null
    }
    isRunning.value = false
  }

  // 暂停计时
  function pauseTimer() {
    if (timerInterval) {
      clearInterval(timerInterval)
      timerInterval = null
    }
    isRunning.value = false
  }

  // 继续计时
  function resumeTimer() {
    if (isRunning.value || timeRemaining.value <= 0) return

    isRunning.value = true
    timerInterval = setInterval(() => {
      timeRemaining.value -= 0.1

      updateUrgencyLevel()

      if (timeRemaining.value <= 0) {
        timeRemaining.value = 0
        stopTimer()
        if (timeoutCallback.value) {
          timeoutCallback.value()
        }
      }
    }, 100)
  }

  // 重置计时器
  function resetTimer() {
    stopTimer()
    timeRemaining.value = 0
    totalTime.value = 0
    currentNodeId.value = null
    timeoutCallback.value = null
    urgencyLevel.value = 'normal'
  }

  // 添加时间
  function addTime(seconds) {
    timeRemaining.value = Math.min(totalTime.value, timeRemaining.value + seconds)
  }

  return {
    isRunning,
    timeRemaining,
    totalTime,
    urgencyLevel,
    currentNodeId,
    percentage,
    formattedTime,
    formattedTimeMMSS,
    startTimer,
    stopTimer,
    pauseTimer,
    resumeTimer,
    resetTimer,
    addTime
  }
})
