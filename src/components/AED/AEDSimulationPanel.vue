<template>
  <div class="aed-panel">
    <div class="panel-header">
      <h3>⚡ AED(自动体外除颤仪)模拟</h3>
      <p class="panel-subtitle">{{ aedStore.voicePrompt || '按照步骤操作AED' }}</p>
    </div>

    <!-- 步骤指示器 -->
    <div class="steps-indicator">
      <div
        v-for="(step, index) in aedStore.aedSteps"
        :key="step.id"
        class="step-item"
        :class="{
          'completed': step.completed,
          'active': index === aedStore.currentStep,
          'analyzing': index === 3 && aedStore.isAnalyzing
        }"
      >
        <div class="step-icon">{{ step.icon }}</div>
        <div class="step-name">{{ step.name }}</div>
      </div>
    </div>

    <!-- 当前步骤内容 -->
    <div class="step-content">
      <!-- 步骤0: 打开电源 -->
      <div v-if="aedStore.currentStep === 0" class="step-action">
        <div class="aed-device">
          <div class="device-body">
            <div class="power-btn" @click="turnOnPower">
              <span class="power-icon">🔋</span>
              <span>电源</span>
            </div>
            <div class="screen" :class="{ 'on': isPowerOn }">
              <span v-if="!isPowerOn">AED待机</span>
              <span v-else>就绪</span>
            </div>
          </div>
        </div>
        <p class="step-hint">点击电源按钮开启AED</p>
      </div>

      <!-- 步骤1: 贴电极片 -->
      <div v-if="aedStore.currentStep === 1" class="step-action">
        <div class="electrode-placement">
          <div class="body-outline">
            <div
              v-for="pos in electrodePositions"
              :key="pos.id"
              class="electrode-spot"
              :class="{ 'placed': placedElectrodes.includes(pos.id) }"
              :style="pos.style"
              @click="placeElectrode(pos.id)"
            >
              <span class="electrode-icon">🩹</span>
            </div>
            <div class="head"></div>
            <div class="torso"></div>
            <div class="arms"></div>
            <div class="legs"></div>
          </div>
        </div>
        <p class="step-hint">点击身体正确位置贴上电极片（右上方和左下方）</p>
      </div>

      <!-- 步骤2: 连接导线 -->
      <div v-if="aedStore.currentStep === 2" class="step-action">
        <div class="connector">
          <div class="aed-ports">
            <div class="port" :class="{ 'connected': isConnected }" @click="connectCable">
              <span class="port-icon">🔌</span>
              <span>连接</span>
            </div>
          </div>
        </div>
        <p class="step-hint">将导线插入AED主机接口</p>
      </div>

      <!-- 步骤3: 分析心律 -->
      <div v-if="aedStore.currentStep === 3" class="step-action">
        <div class="analysis-area">
          <div class="analysis-icon" :class="{ 'analyzing': aedStore.isAnalyzing }">
            <span>❤️</span>
          </div>
          <p v-if="!aedStore.isAnalyzing && !aedStore.aedSteps[3].completed">
            点击开始分析心律
          </p>
          <p v-else-if="aedStore.isAnalyzing">正在分析中，请确保无人触碰患者...</p>
          <p v-else-if="aedStore.shockAdvised" class="shock-warning">⚠️ 建议电击！</p>
          <p v-else>不需要电击，继续CPR</p>
        </div>
        <button
          v-if="!aedStore.isAnalyzing && !aedStore.aedSteps[3].completed"
          class="action-btn"
          @click="startAnalysis"
        >
          开始分析
        </button>
      </div>

      <!-- 步骤4: 放电除颤 -->
      <div v-if="aedStore.currentStep === 4" class="step-action">
        <div class="shock-area">
          <div class="shock-button" :class="{ 'ready': canShock }" @click="deliverShock">
            <span class="shock-icon">⚡</span>
            <span>电击</span>
          </div>
        </div>
        <p class="step-hint warning">确保无人触碰患者后按下电击按钮</p>
      </div>

      <!-- 步骤5: 继续CPR -->
      <div v-if="aedStore.currentStep === 5" class="step-action">
        <div class="cpr-continue">
          <div class="cpr-icon">💓</div>
          <p>电击完成，请继续进行胸外按压</p>
        </div>
        <button class="action-btn complete" @click="finishAED">
          完成AED使用
        </button>
      </div>
    </div>

    <!-- 进度条 -->
    <div class="progress-section">
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: aedStore.progress + '%' }"></div>
      </div>
      <span class="progress-text">进度: {{ aedStore.progress }}%</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useAEDStore } from '../../stores/aedStore'

const emit = defineEmits(['complete', 'close'])

const aedStore = useAEDStore()

const isPowerOn = ref(false)
const placedElectrodes = ref([])
const isConnected = ref(false)
const canShock = ref(false)

const electrodePositions = [
  { id: 'upper_right', style: { top: '15%', right: '25%' } },
  { id: 'upper_left', style: { top: '15%', left: '25%' } },
  { id: 'lower_right', style: { top: '55%', right: '20%' } },
  { id: 'lower_left', style: { top: '55%', left: '20%' } }
]

function turnOnPower() {
  isPowerOn.value = true
  aedStore.updateVoicePrompt('电源已开启，请贴电极片')
  aedStore.completeStep(0, true)
}

function placeElectrode(posId) {
  if (placedElectrodes.value.includes(posId)) return

  placedElectrodes.value.push(posId)
  aedStore.checkElectrodePlacement(posId)

  if (placedElectrodes.value.length >= 2) {
    aedStore.updateVoicePrompt('电极片已贴好，请连接导线')
    aedStore.completeStep(1, true)
  }
}

function connectCable() {
  isConnected.value = true
  aedStore.updateVoicePrompt('导线已连接，等待分析心律')
  aedStore.completeStep(2, true)
}

function startAnalysis() {
  aedStore.startAnalysis()

  // 模拟分析完成
  setTimeout(() => {
    if (aedStore.shockAdvised) {
      canShock.value = true
    }
    aedStore.completeStep(3, true)
  }, 3500)
}

function deliverShock() {
  if (!canShock.value) return
  aedStore.deliverShock()
  aedStore.completeStep(4, true)
}

function finishAED() {
  const score = aedStore.calculateScore()
  aedStore.endAED()
  emit('complete', {
    score: score,
    healthChange: score >= 60 ? 10 : -10,
    passed: score >= 60
  })
}
</script>

<style scoped>
.aed-panel {
  background: linear-gradient(135deg, rgba(255, 193, 7, 0.15) 0%, rgba(255, 152, 0, 0.15) 100%);
  border: 2px solid rgba(255, 193, 7, 0.5);
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
  color: #ffeb3b;
  font-size: 14px;
  margin: 0;
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
  min-height: 20px;
}

.steps-indicator {
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  padding: 0 8px;
}

.step-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  opacity: 0.5;
  transition: all 0.3s ease;
}

.step-item.active {
  opacity: 1;
  transform: scale(1.1);
}

.step-item.completed {
  opacity: 1;
}

.step-item.analyzing .step-icon {
  animation: blink 0.5s ease infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

.step-icon {
  font-size: 24px;
}

.step-item.active .step-icon {
  background: #ff9800;
  border-radius: 50%;
  padding: 4px;
}

.step-item.completed .step-icon {
  background: #4caf50;
  border-radius: 50%;
  padding: 2px;
}

.step-name {
  font-size: 10px;
  color: #b8d4e8;
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
  text-align: center;
}

.step-content {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 16px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.step-action {
  width: 100%;
  text-align: center;
}

.aed-device {
  margin-bottom: 16px;
}

.device-body {
  width: 120px;
  height: 150px;
  background: linear-gradient(135deg, #424242 0%, #212121 100%);
  border-radius: 12px;
  margin: 0 auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  border: 2px solid #616161;
}

.power-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.power-btn:hover {
  background: rgba(255, 255, 255, 0.2);
}

.power-icon {
  font-size: 24px;
}

.power-btn span:last-child {
  font-size: 10px;
  color: #fff;
}

.screen {
  width: 80px;
  height: 40px;
  background: #1a1a1a;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  color: #4caf50;
  border: 1px solid #333;
}

.screen.on {
  background: #0a0a0a;
  color: #4caf50;
  box-shadow: 0 0 10px rgba(76, 175, 80, 0.5);
}

.body-outline {
  position: relative;
  width: 150px;
  height: 200px;
  margin: 0 auto;
}

.head {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 50px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.4);
}

.torso {
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 80px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.arms {
  position: absolute;
  top: 55px;
  left: 50%;
  transform: translateX(-50%);
  width: 140px;
  height: 30px;
  background: transparent;
}

.arms::before,
.arms::after {
  content: '';
  position: absolute;
  width: 50px;
  height: 20px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.arms::before { left: 0; }
.arms::after { right: 0; }

.legs {
  position: absolute;
  top: 130px;
  left: 50%;
  transform: translateX(-50%);
  width: 70px;
  height: 70px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  border: 2px solid rgba(255, 255, 255, 0.25);
}

.electrode-spot {
  position: absolute;
  width: 36px;
  height: 36px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px dashed rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
}

.electrode-spot:hover {
  background: rgba(255, 193, 7, 0.3);
  border-color: #ffeb3b;
}

.electrode-spot.placed {
  background: #ffeb3b;
  border: 2px solid #ffc107;
}

.electrode-icon {
  font-size: 18px;
}

.electrode-spot.placed .electrode-icon {
  filter: grayscale(0);
}

.connector {
  margin-bottom: 16px;
}

.aed-ports {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.port {
  width: 80px;
  height: 60px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px dashed rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.port:hover {
  background: rgba(255, 193, 7, 0.3);
  border-color: #ffeb3b;
}

.port.connected {
  background: #ffeb3b;
  border-color: #ffc107;
}

.port-icon {
  font-size: 20px;
}

.port span:last-child {
  font-size: 10px;
  color: #fff;
}

.analysis-area,
.shock-area {
  text-align: center;
}

.analysis-icon {
  font-size: 60px;
  margin-bottom: 16px;
}

.analysis-icon.analyzing {
  animation: pulse 0.8s ease infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.7; }
}

.shock-warning {
  color: #f44336 !important;
  font-size: 18px;
  font-weight: bold;
}

.shock-button {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, #757575 0%, #424242 100%);
  border: 4px solid #616161;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 0 auto 16px;
  cursor: not-allowed;
  transition: all 0.3s ease;
}

.shock-button.ready {
  background: linear-gradient(135deg, #f44336 0%, #b71c1c 100%);
  border-color: #ff5252;
  cursor: pointer;
  animation: glow 1s ease infinite;
}

@keyframes glow {
  0%, 100% { box-shadow: 0 0 20px rgba(244, 67, 54, 0.5); }
  50% { box-shadow: 0 0 40px rgba(244, 67, 54, 0.8); }
}

.shock-icon {
  font-size: 36px;
}

.shock-button span:last-child {
  font-size: 14px;
  color: #fff;
  font-weight: bold;
}

.cpr-continue {
  text-align: center;
}

.cpr-icon {
  font-size: 60px;
  margin-bottom: 12px;
  animation: heartbeat 1s ease infinite;
}

@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  25% { transform: scale(1.1); }
  50% { transform: scale(1); }
  75% { transform: scale(1.05); }
}

.cpr-continue p {
  color: #b8d4e8;
  font-size: 14px;
  margin: 0;
}

.step-hint {
  color: #8899aa;
  font-size: 13px;
  margin: 12px 0 0 0;
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
}

.step-hint.warning {
  color: #f44336;
}

.action-btn {
  padding: 12px 32px;
  background: linear-gradient(135deg, #ff9800 0%, #f57c00 100%);
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
  margin-top: 16px;
}

.action-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(255, 152, 0, 0.4);
}

.action-btn.complete {
  background: linear-gradient(135deg, #4caf50 0%, #388e3c 100%);
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
  background: linear-gradient(90deg, #ff9800, #ffc107);
  border-radius: 4px;
  transition: width 0.3s ease;
}

.progress-text {
  font-size: 12px;
  color: #8899aa;
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
}
</style>
