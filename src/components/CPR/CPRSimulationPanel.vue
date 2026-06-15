<template>
  <div class="cpr-panel">
    <div class="panel-header">
      <h3>♥ 心肺复苏(CPR)模拟</h3>
      <p class="panel-subtitle">请按照步骤进行操作</p>
    </div>

    <!-- 步骤指示器 -->
    <div class="steps-indicator">
      <div
        v-for="(step, index) in cprStore.steps"
        :key="step.id"
        class="step-item"
        :class="{
          'completed': step.completed,
          'active': index === cprStore.currentStep
        }"
      >
        <div class="step-number">{{ step.completed ? '✓' : index + 1 }}</div>
        <div class="step-name">{{ step.name }}</div>
      </div>
    </div>

    <!-- 当前步骤内容 -->
    <div class="step-content">
      <div class="current-step-info">
        <h4>第{{ cprStore.currentStep + 1 }}步：{{ currentStepData?.name }}</h4>
        <p>{{ currentStepData?.description }}</p>
      </div>

      <!-- 胸外按压交互区 -->
      <div v-if="cprStore.currentStep === 4" class="compression-area">
        <div class="compression-visual">
          <div
            class="chest-model"
            :class="{ 'compressed': isCompressing }"
            @mousedown="startCompression"
            @mouseup="endCompression"
            @touchstart.prevent="startCompression"
            @touchend.prevent="endCompression"
          >
            <div class="chest-outline">
              <div class="compression-indicator" :style="{ transform: `scaleY(${compressionScale})` }"></div>
            </div>
          </div>
          <p class="compression-hint">点击模拟按压</p>
        </div>

        <div class="compression-stats">
          <div class="stat-item">
            <span class="stat-label">按压次数</span>
            <span class="stat-value">{{ cprStore.compressionCount }} / {{ cprStore.requiredCount }}</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">目标频率</span>
            <span class="stat-value">{{ cprStore.bpmTarget }} BPM</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">节奏评分</span>
            <span class="stat-value" :class="rhythmClass">{{ cprStore.rhythmScore }}%</span>
          </div>
        </div>

        <!-- 节拍器 -->
        <div class="metronome" :class="{ 'beating': isCompressing }">
          <span class="beat-icon">💓</span>
        </div>
      </div>

      <!-- 人工呼吸交互区 -->
      <div v-if="cprStore.currentStep === 5" class="breathing-area">
        <div class="breathing-visual">
          <div
            class="lung-model"
            :class="{ 'inflating': isBreathing }"
            @mousedown="startBreathing"
            @mouseup="endBreathing"
            @touchstart.prevent="startBreathing"
            @touchend.prevent="endBreathing"
          >
            <div class="lung-icon">💨</div>
          </div>
          <p class="breathing-hint">长按模拟吹气</p>
        </div>

        <div class="breathing-stats">
          <div class="stat-item">
            <span class="stat-label">呼吸次数</span>
            <span class="stat-value">{{ cprStore.breathingCount }} / 2</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">吹气评分</span>
            <span class="stat-value" :class="breathingClass">{{ cprStore.breathingScore }}%</span>
          </div>
        </div>
      </div>

      <!-- 其他步骤按钮 -->
      <button
        v-if="cprStore.currentStep < 4"
        class="action-btn"
        @click="completeCurrentStep"
      >
        我已完成此步骤
      </button>

      <button
        v-if="cprStore.currentStep === 6"
        class="action-btn complete"
        @click="finishCPR"
      >
        完成CPR模拟
      </button>
    </div>

    <!-- 进度条 -->
    <div class="progress-section">
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: cprStore.progress + '%' }"></div>
      </div>
      <span class="progress-text">进度: {{ cprStore.progress }}%</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onUnmounted } from 'vue'
import { useCPRStore } from '../../stores/cprStore'

const emit = defineEmits(['complete', 'close'])

const cprStore = useCPRStore()

const isCompressing = ref(false)
const compressionStartTime = ref(0)
const compressionScale = ref(1)
const isBreathing = ref(false)

const currentStepData = computed(() => {
  return cprStore.steps[cprStore.currentStep]
})

const rhythmClass = computed(() => {
  if (cprStore.rhythmScore >= 80) return 'good'
  if (cprStore.rhythmScore >= 60) return 'medium'
  return 'poor'
})

const breathingClass = computed(() => {
  if (cprStore.breathingScore >= 80) return 'good'
  if (cprStore.breathingScore >= 60) return 'medium'
  return 'poor'
})

function completeCurrentStep() {
  cprStore.completeStep(cprStore.currentStep)
}

function startCompression(event) {
  if (cprStore.currentStep !== 4) return
  isCompressing.value = true
  compressionStartTime.value = Date.now()
}

function endCompression(event) {
  if (!isCompressing.value) return
  isCompressing.value = false

  const duration = Date.now() - compressionStartTime.value

  // 估算按压深度（根据按压时间和释放时间）
  const depth = Math.min(100, Math.max(60, 100 - Math.abs(duration - 500) / 5))

  cprStore.recordCompression(Date.now(), depth)
}

function startBreathing(event) {
  if (cprStore.currentStep !== 5) return
  isBreathing.value = true
  cprStore.breathingStartTime = Date.now()
}

function endBreathing(event) {
  if (!isBreathing.value) return
  isBreathing.value = false

  const duration = Date.now() - cprStore.breathingStartTime

  // 估算吹气量（根据吹气时间）
  const volume = Math.min(100, Math.max(60, 100 - Math.abs(duration - 1000) / 10))

  cprStore.recordBreathing(Date.now(), volume)
}

function finishCPR() {
  const score = cprStore.calculateScore()
  cprStore.endCPR()
  emit('complete', {
    score: score,
    healthChange: score >= 60 ? 10 : -10,
    passed: score >= 60
  })
}

onUnmounted(() => {
  cprStore.resetCPR()
})
</script>

<style scoped>
.cpr-panel {
  background: linear-gradient(135deg, rgba(220, 53, 69, 0.15) 0%, rgba(161, 45, 45, 0.15) 100%);
  border: 2px solid rgba(220, 53, 69, 0.5);
  border-radius: 16px;
  padding: 24px;
  margin: 16px 0;
}

.panel-header {
  text-align: center;
  margin-bottom: 20px;
}

.panel-header h3 {
  color: #fff;
  font-size: 20px;
  margin: 0 0 8px 0;
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
}

.panel-subtitle {
  color: #b8d4e8;
  font-size: 14px;
  margin: 0;
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
}

.steps-indicator {
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  padding: 0 8px;
  overflow-x: auto;
  flex-wrap: nowrap;
  gap: 4px;
}

.step-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  opacity: 0.5;
  transition: all 0.3s ease;
  min-width: 40px;
  flex-shrink: 0;
}

.step-item.active {
  opacity: 1;
  transform: scale(1.1);
}

.step-item.completed {
  opacity: 1;
}

.step-number {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #fff;
  font-weight: bold;
}

.step-item.completed .step-number {
  background: #4caf50;
  border-color: #4caf50;
}

.step-item.active .step-number {
  background: #f44336;
  border-color: #f44336;
  animation: pulse 1s ease infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.step-name {
  font-size: 9px;
  color: #b8d4e8;
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
  text-align: center;
}

.step-content {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 16px;
}

.current-step-info h4 {
  color: #fff;
  font-size: 16px;
  margin: 0 0 8px 0;
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
}

.current-step-info p {
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
  text-shadow: 0 0 10px rgba(244, 67, 54, 0.5);
  background: rgba(244, 67, 54, 0.15);
  padding: 12px 16px;
  border-radius: 8px;
  border: 2px solid rgba(244, 67, 54, 0.4);
}

.compression-area {
  text-align: center;
}

.compression-visual {
  margin-bottom: 20px;
}

.chest-model {
  width: 150px;
  height: 150px;
  margin: 0 auto 12px;
  cursor: pointer;
  transition: transform 0.1s ease;
}

.chest-model:active,
.chest-model.compressed {
  transform: scaleY(0.8);
}

.chest-outline {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #ff8a80 0%, #ff5252 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #b71c1c;
}

.compression-indicator {
  width: 60%;
  height: 60%;
  background: rgba(183, 28, 28, 0.5);
  border-radius: 50%;
  transition: transform 0.1s ease;
}

.compression-hint {
  color: #8899aa;
  font-size: 12px;
  margin: 0;
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
}

.breathing-area {
  text-align: center;
}

.breathing-visual {
  margin-bottom: 20px;
}

.lung-model {
  width: 150px;
  height: 150px;
  margin: 0 auto 12px;
  cursor: pointer;
  transition: transform 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lung-model.inflating {
  transform: scale(1.2);
}

.lung-icon {
  font-size: 80px;
  transition: transform 0.3s ease;
}

.lung-model.inflating .lung-icon {
  transform: scale(1.1);
}

.breathing-hint {
  color: #8899aa;
  font-size: 12px;
  margin: 0;
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
}

.breathing-stats {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-bottom: 16px;
}

.compression-stats {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-bottom: 16px;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.stat-label {
  font-size: 11px;
  color: #8899aa;
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
}

.stat-value {
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
}

.stat-value.good { color: #4caf50; }
.stat-value.medium { color: #ff9800; }
.stat-value.poor { color: #f44336; }

.metronome {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  margin: 0 auto;
  background: rgba(220, 53, 69, 0.2);
  border-radius: 50%;
  border: 2px solid rgba(220, 53, 69, 0.5);
}

.metronome.beating {
  animation: beat 0.5s ease infinite;
}

@keyframes beat {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}

.beat-icon {
  font-size: 28px;
}

.action-btn {
  width: 100%;
  padding: 14px 24px;
  background: linear-gradient(135deg, #f44336 0%, #b71c1c 100%);
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
}

.action-btn:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 15px rgba(244, 67, 54, 0.4);
}

.action-btn.complete {
  background: linear-gradient(135deg, #4caf50 0%, #2e7d32 100%);
}

.progress-section {
  display: flex;
  align-items: center;
  gap: 12px;
}

.progress-bar {
  flex: 1;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #f44336, #ff5252);
  border-radius: 4px;
  transition: width 0.3s ease;
}

.progress-text {
  font-size: 12px;
  color: #8899aa;
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
}
</style>
