<template>
  <div class="result-view">
    <div class="result-container">
      <!-- 头部区域 -->
      <div class="result-header">
        <div class="icon-container">
          <span class="result-icon" :class="{ 'bounce': true }">{{ resultIcon }}</span>
        </div>
        <h1 class="result-title">{{ resultTitle }}</h1>
        <p class="result-subtitle">{{ resultSubtitle }}</p>
      </div>

      <!-- 统计卡片 -->
      <div class="stats-card">
        <div class="stat-bar">
          <div class="stat-bar-header">
            <span class="stat-bar-icon">❤️</span>
            <span class="stat-bar-label">生命值</span>
            <span class="stat-bar-value">{{ gameStore.health }}%</span>
          </div>
          <div class="stat-bar-track">
            <div class="stat-bar-fill health-fill" :style="{ width: gameStore.health + '%' }"></div>
          </div>
        </div>
        <div class="stat-bar">
          <div class="stat-bar-header">
            <span class="stat-bar-icon">📚</span>
            <span class="stat-bar-label">知识积分</span>
            <span class="stat-bar-value">{{ gameStore.knowledgePoints }}</span>
          </div>
          <div class="stat-bar-track">
            <div class="stat-bar-fill knowledge-fill" :style="{ width: Math.min(100, gameStore.knowledgePoints) + '%' }"></div>
          </div>
        </div>
      </div>

      <!-- 成就徽章区域 -->
      <div class="achievements-section" v-if="achievements.length > 0">
        <h3 class="section-title">🏅 获得成就</h3>
        <div class="achievements-grid">
          <div
            v-for="achievement in achievements"
            :key="achievement.id"
            class="achievement-badge"
            :class="achievement.type"
          >
            <span class="achievement-icon">{{ achievement.icon }}</span>
            <span class="achievement-name">{{ achievement.name }}</span>
          </div>
        </div>
      </div>

      <!-- 结局评价 -->
      <div class="rating-card">
        <div class="rating-header">
          <span class="rating-icon">{{ ratingIcon }}</span>
          <div class="rating-info">
            <h3>结局评价</h3>
            <p class="rating-text" :class="ratingClass">{{ gameStore.endingRating }}</p>
          </div>
        </div>
        <div class="rating-progress">
          <div class="rating-progress-label">
            <span>综合评分</span>
            <span>{{ escapeEfficiency }}%</span>
          </div>
          <div class="rating-progress-track">
            <div class="rating-progress-fill" :style="{ width: escapeEfficiency + '%' }"></div>
          </div>
        </div>
      </div>

      <!-- 决策回顾 -->
      <div class="decisions-section" v-if="keyDecisions.length > 0">
        <h3 class="section-title">📋 关键决策</h3>
        <div class="decisions-timeline">
          <div
            v-for="(decision, index) in keyDecisions"
            :key="index"
            class="decision-item"
            :class="decision.type"
          >
            <div class="decision-marker">{{ index + 1 }}</div>
            <div class="decision-content">
              <p class="decision-choice">{{ decision.choice }}</p>
              <p class="decision-effect">
                <span v-if="decision.healthChange !== 0" :class="decision.healthChange > 0 ? 'positive' : 'negative'">
                  {{ decision.healthChange > 0 ? '+' : '' }}{{ decision.healthChange }}❤️
                </span>
                <span v-if="decision.knowledgeChange !== 0" :class="decision.knowledgeChange > 0 ? 'positive' : 'negative'">
                  {{ decision.knowledgeChange > 0 ? '+' : '' }}{{ decision.knowledgeChange }}📚
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- 学习要点 -->
      <div class="knowledge-section">
        <h3 class="section-title">📖 学习要点</h3>
        <div class="knowledge-cards">
          <div
            v-for="tip in relevantTips"
            :key="tip.id"
            class="knowledge-card"
          >
            <span class="knowledge-card-icon">{{ tip.icon }}</span>
            <div class="knowledge-card-content">
              <h4>{{ tip.title }}</h4>
              <p>{{ tip.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 行动按钮 -->
      <div class="action-buttons">
        <button class="btn-primary" @click="playAgain">
          <span class="btn-icon">🔄</span>
          再玩一次
        </button>
        <button class="btn-secondary" @click="shareResult">
          <span class="btn-icon">📤</span>
          分享结果
        </button>
        <button class="btn-secondary" @click="goHome">
          <span class="btn-icon">🏠</span>
          返回首页
        </button>
      </div>

      <!-- 页脚信息 -->
      <div class="footer-info">
        <p>综合应急科普游戏 · {{ scenarioTitle }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useGameStore } from '../stores/gameStore'

const router = useRouter()
const gameStore = useGameStore()

// 场景元数据
const scenarioMeta = computed(() => gameStore.currentScenario?.metadata || {})
const scenarioName = computed(() => scenarioMeta.value.name || '应急逃生')
const endingWord = computed(() => scenarioMeta.value.endingTitle || '逃生')
const scenarioTitle = computed(() => scenarioMeta.value.title || scenarioName.value)

// 结果图标和标题
const resultIcon = computed(() => {
  if (gameStore.health <= 0) return '💀'
  if (gameStore.endingRating === '完美通关') return '🏆'
  if (gameStore.endingRating === '普通通关') return '🌟'
  return '😅'
})

const resultTitle = computed(() => {
  if (gameStore.health <= 0) return `${endingWord.value}失败`
  if (gameStore.endingRating === '完美通关') return '完美通关！'
  if (gameStore.endingRating === '普通通关') return `成功${endingWord.value}`
  return '游戏结束'
})

const resultSubtitle = computed(() => {
  if (gameStore.health <= 0) {
    return `${scenarioName.value}需要冷静的判断和正确的知识，请继续学习提升`
  }
  if (gameStore.endingRating === '完美通关') {
    return `你展现了出色的${scenarioName.value}能力，完美的决策让你安全${endingWord.value}！`
  }
  if (gameStore.endingRating === '普通通关') {
    return `你成功${endingWord.value}了，但过程中损失较大。继续学习和练习，提高应急能力！`
  }
  return '继续加油'
})

// 结局评价图标
const ratingIcon = computed(() => {
  if (gameStore.endingRating === '完美通关') return '🌟'
  if (gameStore.endingRating === '普通通关') return '👍'
  return '💪'
})

const ratingClass = computed(() => {
  if (gameStore.endingRating === '完美通关') return 'rating-perfect'
  if (gameStore.endingRating === '普通通关') return 'rating-normal'
  return 'rating-fail'
})

// 综合评分计算
const escapeEfficiency = computed(() => {
  const healthWeight = gameStore.health * 0.4
  const knowledgeWeight = Math.min(100, gameStore.knowledgePoints) * 0.4
  const choiceWeight = Math.min(100, gameStore.choicesMade.length * 10) * 0.2
  return Math.round(healthWeight + knowledgeWeight + choiceWeight)
})

// 成就系统
const achievements = computed(() => {
  const metadata = gameStore.currentScenario?.metadata
  if (!metadata || !metadata.achievements) return []

  return metadata.achievements
    .filter(a => a.condition({
      endingRating: gameStore.endingRating,
      knowledgePoints: gameStore.knowledgePoints,
      health: gameStore.health,
      gameWon: gameStore.gameWon,
      choicesMade: gameStore.choicesMade
    }))
    .map(a => ({
      id: a.id,
      name: a.name,
      icon: a.icon,
      type: a.type
    }))
})

// 关键决策回顾
const keyDecisions = computed(() => {
  return gameStore.choicesMade.map(choice => {
    const node = gameStore.currentScenario?.nodes?.[choice.nodeId]
    if (!node) return null
    const choiceData = node.choices?.[choice.choiceIndex]
    if (!choiceData) return null

    return {
      nodeId: choice.nodeId,
      choice: choiceData.text,
      healthChange: choiceData.healthChange || 0,
      knowledgeChange: choiceData.knowledgeChange || 0,
      type: (choiceData.healthChange || 0) >= 0 && (choiceData.knowledgeChange || 0) >= 0 ? 'good' : 'risky'
    }
  }).filter(d => d !== null).slice(-5)
})

// 相关学习要点
const relevantTips = computed(() => {
  const metadata = gameStore.currentScenario?.metadata
  if (!metadata || !metadata.tips) return []

  const visitedNodes = gameStore.choicesMade.map(c => c.nodeId)
  const allTips = metadata.tips
    .filter(tip => tip.relevantWhen?.some(nodeId => visitedNodes.includes(nodeId)))

  if (allTips.length === 0) {
    return metadata.tips.slice(0, 6)
  }
  return allTips.slice(0, 6)
})

function playAgain() {
  gameStore.resetGame()
  router.push('/game')
}

function goHome() {
  gameStore.resetGame()
  router.push('/')
}

function shareResult() {
  const text = `我在${scenarioTitle.value}中获得了"${gameStore.endingRating}"评价！\n🏆 知识积分: ${gameStore.knowledgePoints}\n❤️ 生命值: ${gameStore.health}%\n🎯 成就: ${achievements.value.map(a => a.icon + a.name).join(' ')}\n\n#应急科普游戏 #${scenarioName.value}`

  if (navigator.share) {
    navigator.share({
      title: `${scenarioTitle.value}结果`,
      text: text
    })
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(text)
    alert('结果已复制到剪贴板！')
  }
}
</script>

<style scoped>
.result-view {
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
  padding: 40px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.result-container {
  max-width: 650px;
  width: 100%;
}

/* 头部区域 */
.result-header {
  text-align: center;
  margin-bottom: 32px;
}

.icon-container {
  margin-bottom: 16px;
}

.result-icon {
  font-size: 80px;
  display: inline-block;
}

.result-icon.bounce {
  animation: bounce 1s ease infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.result-title {
  font-size: 36px;
  color: #fff;
  margin: 0 0 8px 0;
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
}

.result-subtitle {
  font-size: 14px;
  color: #8899aa;
  margin: 0;
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
}

/* 统计卡片 */
.stats-card {
  background: linear-gradient(135deg, rgba(45, 58, 74, 0.9) 0%, rgba(26, 42, 58, 0.9) 100%);
  border-radius: 20px;
  padding: 24px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 24px;
}

.stat-bar {
  margin-bottom: 16px;
}

.stat-bar:last-child {
  margin-bottom: 0;
}

.stat-bar-header {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}

.stat-bar-icon {
  font-size: 18px;
  margin-right: 8px;
}

.stat-bar-label {
  font-size: 14px;
  color: #a0aec0;
  flex: 1;
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
}

.stat-bar-value {
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
}

.stat-bar-track {
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
}

.stat-bar-fill {
  height: 100%;
  border-radius: 4px;
  transition: width 1s ease-out;
}

.health-fill {
  background: linear-gradient(90deg, #ff5252, #ff1744);
}

.knowledge-fill {
  background: linear-gradient(90deg, #4fc3f7, #0288d1);
}

/* 成就区域 */
.achievements-section {
  margin-bottom: 24px;
}

.section-title {
  font-size: 16px;
  color: #fff;
  margin: 0 0 16px 0;
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
}

.achievements-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.achievement-badge {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.achievement-badge.gold {
  background: linear-gradient(135deg, rgba(255, 193, 7, 0.2), rgba(255, 152, 0, 0.2));
  border-color: rgba(255, 193, 7, 0.5);
}

.achievement-badge.blue {
  background: linear-gradient(135deg, rgba(33, 150, 243, 0.2), rgba(25, 118, 210, 0.2));
  border-color: rgba(33, 150, 243, 0.5);
}

.achievement-badge.green {
  background: linear-gradient(135deg, rgba(76, 175, 80, 0.2), rgba(56, 142, 60, 0.2));
  border-color: rgba(76, 175, 80, 0.5);
}

.achievement-badge.purple {
  background: linear-gradient(135deg, rgba(156, 39, 176, 0.2), rgba(123, 31, 162, 0.2));
  border-color: rgba(156, 39, 176, 0.5);
}

.achievement-badge.red {
  background: linear-gradient(135deg, rgba(244, 67, 54, 0.2), rgba(229, 57, 53, 0.2));
  border-color: rgba(244, 67, 54, 0.5);
}

.achievement-icon {
  font-size: 20px;
}

.achievement-name {
  font-size: 14px;
  color: #fff;
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
}

/* 评价卡片 */
.rating-card {
  background: linear-gradient(135deg, rgba(45, 58, 74, 0.9) 0%, rgba(26, 42, 58, 0.9) 100%);
  border-radius: 20px;
  padding: 24px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 24px;
}

.rating-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
}

.rating-icon {
  font-size: 48px;
}

.rating-info h3 {
  margin: 0 0 4px 0;
  color: #a0aec0;
  font-size: 14px;
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
}

.rating-text {
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
}

.rating-progress-label {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 12px;
  color: #a0aec0;
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
}

.rating-progress-track {
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
}

.rating-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #4caf50, #8bc34a);
  border-radius: 3px;
  transition: width 1s ease-out;
}

.rating-perfect { color: #4caf50; }
.rating-normal { color: #ff9800; }
.rating-fail { color: #f44336; }

/* 决策回顾 */
.decisions-section {
  margin-bottom: 24px;
}

.decisions-timeline {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.decision-item {
  display: flex;
  gap: 12px;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  border-left: 3px solid #4fc3f7;
}

.decision-item.good {
  border-left-color: #4caf50;
}

.decision-item.risky {
  border-left-color: #ff9800;
}

.decision-marker {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgba(79, 195, 247, 0.2);
  color: #4fc3f7;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  flex-shrink: 0;
}

.decision-content {
  flex: 1;
}

.decision-choice {
  font-size: 14px;
  color: #e0e6ed;
  margin: 0 0 4px 0;
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
}

.decision-effect {
  font-size: 12px;
  margin: 0;
}

.decision-effect .positive {
  color: #4caf50;
  margin-right: 12px;
}

.decision-effect .negative {
  color: #f44336;
}

/* 学习要点 */
.knowledge-section {
  margin-bottom: 24px;
}

.knowledge-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.knowledge-card {
  display: flex;
  gap: 12px;
  padding: 16px;
  background: rgba(79, 195, 247, 0.08);
  border-radius: 12px;
  border: 1px solid rgba(79, 195, 247, 0.2);
}

.knowledge-card-icon {
  font-size: 24px;
  flex-shrink: 0;
}

.knowledge-card-content h4 {
  font-size: 14px;
  color: #4fc3f7;
  margin: 0 0 4px 0;
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
}

.knowledge-card-content p {
  font-size: 12px;
  color: #8899aa;
  margin: 0;
  line-height: 1.5;
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
}

/* 行动按钮 */
.action-buttons {
  display: flex;
  gap: 12px;
  margin-bottom: 32px;
  flex-wrap: wrap;
}

.btn-primary,
.btn-secondary {
  flex: 1;
  min-width: 150px;
  padding: 14px 20px;
  border-radius: 12px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
}

.btn-icon {
  font-size: 16px;
}

.btn-primary {
  background: linear-gradient(135deg, #4fc3f7 0%, #0288d1 100%);
  border: none;
  color: #fff;
}

.btn-primary:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 20px rgba(79, 195, 247, 0.4);
}

.btn-secondary {
  background: transparent;
  border: 2px solid #3d5a80;
  color: #e0e6ed;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: #4fc3f7;
}

/* 页脚信息 */
.footer-info {
  text-align: center;
}

.footer-info p {
  font-size: 13px;
  color: #6b7280;
  margin: 4px 0;
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
}

/* 响应式适配 */
@media (max-width: 480px) {
  .knowledge-cards {
    grid-template-columns: 1fr;
  }

  .action-buttons {
    flex-direction: column;
  }

  .btn-primary,
  .btn-secondary {
    flex: 100%;
  }

  .result-title {
    font-size: 28px;
  }
}
</style>
