<template>
  <div class="timer-bar" :class="urgencyClass">
    <div class="timer-info">
      <span class="timer-icon">⏱️</span>
      <span class="timer-time">{{ formattedTime }}</span>
    </div>
    <div class="timer-track">
      <div
        class="timer-fill"
        :style="{ width: percentage + '%' }"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  timeRemaining: { type: Number, default: 0 },
  urgency: { type: String, default: 'normal' }, // 'low', 'normal', 'high', 'critical'
  percentage: { type: Number, default: 100 },
  formattedTime: { type: String, default: '0秒' }
})

const urgencyClass = computed(() => {
  return `urgency-${props.urgency}`
})
</script>

<style scoped>
.timer-bar {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border: 2px solid transparent;
  transition: all 0.3s ease;
}

.timer-bar.urgency-low {
  border-color: rgba(76, 175, 80, 0.5);
}

.timer-bar.urgency-normal {
  border-color: rgba(79, 195, 247, 0.5);
}

.timer-bar.urgency-high {
  border-color: rgba(255, 152, 0, 0.5);
}

.timer-bar.urgency-critical {
  border-color: rgba(244, 67, 54, 0.8);
  animation: pulse 0.5s ease infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

.timer-info {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 80px;
}

.timer-icon {
  font-size: 18px;
}

.timer-time {
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
}

.urgency-low .timer-time { color: #4caf50; }
.urgency-normal .timer-time { color: #4fc3f7; }
.urgency-high .timer-time { color: #ff9800; }
.urgency-critical .timer-time { color: #f44336; }

.timer-track {
  flex: 1;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
}

.timer-fill {
  height: 100%;
  border-radius: 4px;
  transition: width 0.1s linear, background 0.3s ease;
}

.urgency-low .timer-fill { background: linear-gradient(90deg, #4caf50, #8bc34a); }
.urgency-normal .timer-fill { background: linear-gradient(90deg, #4fc3f7, #0288d1); }
.urgency-high .timer-fill { background: linear-gradient(90deg, #ff9800, #f44336); }
.urgency-critical .timer-fill { background: linear-gradient(90deg, #f44336, #b71c1c); }
</style>
