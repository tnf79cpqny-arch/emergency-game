<template>
  <div v-if="show" class="qa-component">
    <div class="qa-header">
      <span class="qa-icon">?</span>
      <h3>知识问答{{ isMultipleChoice ? '(多选)' : '' }}</h3>
      <div v-if="!showResult" class="countdown-timer">
        <span class="countdown-number" :class="{ 'warning': countdown <= 5 }">
          {{ countdown }}
        </span>
        <span class="countdown-label">秒</span>
      </div>
    </div>

    <div class="qa-content">
      <p class="question-text">{{ question?.question }}</p>

      <div class="options-list">
        <button
          v-for="(option, index) in question?.options"
          :key="index"
          class="option-button"
          :class="{
            'selected': isSelected(index),
            'correct': showResult && isCorrectOption(index),
            'wrong': showResult && isSelected(index) && !isCorrectOption(index)
          }"
          :disabled="showResult"
          @click="toggleAnswer(index)"
        >
          <span class="option-checkbox">
            <span v-if="isSelected(index)" class="checkbox-checked">✓</span>
          </span>
          <span class="option-letter">{{ optionLetters[index] }}</span>
          <span class="option-text">{{ option }}</span>
        </button>
      </div>

      <div v-if="showResult" class="result-section">
        <div class="result-badge" :class="isCorrect ? 'correct' : 'wrong'">
          {{ isCorrect ? '✅ 回答正确！' : (isTimeout ? '⏰ 时间到，未作答' : '❌ 回答错误') }}
        </div>
        <p v-if="!isCorrect" class="correct-answer">
          <strong>正确答案：</strong>{{ getCorrectAnswerText() }}
        </p>
        <p class="explanation">
          <strong>解析：</strong>{{ question?.explanation }}
        </p>
      </div>

      <button
        v-if="!showResult"
        class="submit-button"
        :disabled="selectedAnswers.length === 0"
        @click="submitAnswer"
      >
        确认答案
      </button>

      <button
        v-else
        class="continue-button"
        @click="$emit('answer', { isCorrect, knowledgeChange: isCorrect ? 10 : 0 })"
      >
        继续
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onUnmounted } from 'vue'

const props = defineProps({
  show: { type: Boolean, default: false },
  question: { type: Object, default: null }
})

const emit = defineEmits(['answer', 'timeout'])

const optionLetters = ['A', 'B', 'C', 'D']
const selectedAnswers = ref([])
const showResult = ref(false)
const isTimeout = ref(false)
const countdown = ref(20)
let countdownTimer = null

// 启动倒计时
function startCountdown() {
  stopCountdown()
  countdown.value = 20
  countdownTimer = setInterval(() => {
    countdown.value--
    if (countdown.value <= 0) {
      stopCountdown()
      // 倒计时结束，自动提交（如果还没提交）
      if (!showResult.value) {
        handleTimeout()
      }
    }
  }, 1000)
}

// 停止倒计时
function stopCountdown() {
  if (countdownTimer) {
    clearInterval(countdownTimer)
    countdownTimer = null
  }
}

// 处理超时
function handleTimeout() {
  isTimeout.value = true
  emit('timeout')
  // 超时时强制提交，即使没有选择任何答案
  showResult.value = true
  stopCountdown()
}

// 监听show变化来启动/停止倒计时
watch(() => props.show, (newVal) => {
  if (newVal) {
    isTimeout.value = false
    startCountdown()
  } else {
    stopCountdown()
    selectedAnswers.value = []
    showResult.value = false
    isTimeout.value = false
    countdown.value = 20
  }
}, { immediate: true })

// 监听question变化来重启倒计时（当切换到新问题时）
watch(() => props.question, (newQuestion, oldQuestion) => {
  if (newQuestion && newQuestion !== oldQuestion) {
    // 重置状态并重新开始倒计时
    isTimeout.value = false
    showResult.value = false
    selectedAnswers.value = []
    countdown.value = 20
    startCountdown()
  }
})

onUnmounted(() => {
  stopCountdown()
})

// 判断是否为多选题
const isMultipleChoice = computed(() => {
  return props.question?.type === 'multiple_choice' || Array.isArray(props.question?.correctAnswer)
})

// 检查选项是否被选中
function isSelected(index) {
  return selectedAnswers.value.includes(index)
}

// 检查选项是否正确（显示结果时用）
function isCorrectOption(index) {
  if (Array.isArray(props.question?.correctAnswer)) {
    return props.question.correctAnswer.includes(index)
  }
  return index === props.question?.correctAnswer
}

// 切换答案选择
function toggleAnswer(index) {
  if (showResult.value) return

  if (isMultipleChoice.value) {
    // 多选：切换选择状态
    const idx = selectedAnswers.value.indexOf(index)
    if (idx > -1) {
      selectedAnswers.value.splice(idx, 1)
    } else {
      selectedAnswers.value.push(index)
    }
  } else {
    // 单选：直接选中
    selectedAnswers.value = [index]
  }
}

// 提交答案
function submitAnswer() {
  if (selectedAnswers.value.length === 0) return
  showResult.value = true
  stopCountdown()
}

// 判断答案是否正确
const isCorrect = computed(() => {
  if (!props.question?.correctAnswer) return false

  const correct = props.question.correctAnswer
  const selected = selectedAnswers.value

  if (Array.isArray(correct)) {
    // 排序题：检查顺序是否完全一致
    if (props.question.type === 'sequence') {
      if (correct.length !== selected.length) return false
      return correct.every((val, idx) => val == selected[idx])
    }
    // 多选题：检查是否完全一致（元素相同，不关心顺序）- 使用松散比较兼容类型
    if (correct.length !== selected.length) return false
    const hasAllCorrect = correct.every(c => selected.some(s => s == c))
    const hasAllSelected = selected.every(s => correct.some(c => c == s))
    return hasAllCorrect && hasAllSelected
  } else {
    // 单选题/判断题（使用 == 进行松散比较，兼容字符串和数字类型）
    return selected.length === 1 && selected[0] == correct
  }
})

// 获取正确答案的文本
function getCorrectAnswerText() {
  if (!props.question?.correctAnswer) return ''
  const correct = props.question.correctAnswer
  const options = props.question.options || []

  if (Array.isArray(correct)) {
    if (props.question.type === 'sequence') {
      // 排序题：显示排序顺序
      return correct.map((idx, order) => `${order + 1}. ${options[idx]}`).join(' → ')
    }
    // 多选题：显示所有正确选项
    return correct.map(idx => optionLetters[idx]).join('、')
  } else {
    // 单选题/判断题
    return optionLetters[correct]
  }
}
</script>

<style scoped>
.qa-component {
  background: linear-gradient(135deg, rgba(79, 195, 247, 0.15) 0%, rgba(2, 136, 209, 0.15) 100%);
  border: 2px solid rgba(79, 195, 247, 0.5);
  border-radius: 16px;
  padding: 24px;
  margin: 20px 0;
}

.qa-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}

.qa-icon {
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #4fc3f7;
  border-radius: 50%;
}

.qa-header h3 {
  color: #4fc3f7;
  font-size: 18px;
  margin: 0;
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
}

.countdown-timer {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 4px;
  background: rgba(79, 195, 247, 0.15);
  padding: 6px 14px;
  border-radius: 20px;
  border: 2px solid rgba(79, 195, 247, 0.4);
}

.countdown-number {
  font-size: 22px;
  font-weight: bold;
  color: #4fc3f7;
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
  min-width: 28px;
  text-align: center;
}

.countdown-number.warning {
  color: #ff6b6b;
  animation: pulse 0.5s ease infinite;
}

.countdown-label {
  font-size: 14px;
  color: #b8d4e8;
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.qa-content {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  padding: 20px;
}

.question-text {
  color: #fff;
  font-size: 16px;
  line-height: 1.6;
  margin: 0 0 20px 0;
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
}

.options-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.option-button {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: #e0e6ed;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
}

.option-button:hover:not(:disabled) {
  background: rgba(79, 195, 247, 0.1);
  border-color: rgba(79, 195, 247, 0.5);
}

.option-button.selected {
  background: rgba(79, 195, 247, 0.2);
  border-color: #4fc3f7;
}

.option-button.correct {
  background: rgba(76, 175, 80, 0.2);
  border-color: #4caf50;
}

.option-button.wrong {
  background: rgba(244, 67, 54, 0.2);
  border-color: #f44336;
}

.option-checkbox {
  width: 22px;
  height: 22px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.2s ease;
}

.option-button.selected .option-checkbox {
  background: #4fc3f7;
  border-color: #4fc3f7;
}

.checkbox-checked {
  color: #fff;
  font-size: 14px;
  font-weight: bold;
}

.option-button.correct .option-checkbox {
  background: #4caf50;
  border-color: #4caf50;
}

.option-button.wrong .option-checkbox {
  background: #f44336;
  border-color: #f44336;
}

.option-letter {
  width: 28px;
  height: 28px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 13px;
  flex-shrink: 0;
}

.option-button.selected .option-letter {
  background: #4fc3f7;
  color: #fff;
}

.option-button.correct .option-letter {
  background: #4caf50;
  color: #fff;
}

.option-button.wrong .option-letter {
  background: #f44336;
  color: #fff;
}

.option-text {
  flex: 1;
}

.result-section {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.result-badge {
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 12px;
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
}

.result-badge.correct {
  background: rgba(76, 175, 80, 0.2);
  color: #4caf50;
}

.result-badge.wrong {
  background: rgba(244, 67, 54, 0.2);
  color: #f44336;
}

.explanation {
  color: #b8d4e8;
  font-size: 14px;
  line-height: 1.6;
  margin: 0;
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
}

.explanation strong {
  color: #4fc3f7;
}

.correct-answer {
  color: #4caf50;
  font-size: 14px;
  margin: 0 0 12px 0;
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
}

.correct-answer strong {
  color: #4caf50;
}

.submit-button,
.continue-button {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #4fc3f7 0%, #0288d1 100%);
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 16px;
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
}

.submit-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.submit-button:hover:not(:disabled),
.continue-button:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 15px rgba(79, 195, 247, 0.4);
}
</style>
