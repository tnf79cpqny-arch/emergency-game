<template>
  <div class="home-view">
    <div class="home-content">
      <div class="title-section">
        <h1 class="game-title">🛡️ 综合应急科普游戏</h1>
        <p class="game-subtitle">学习应急知识，提升避险能力</p>
      </div>

      <div class="intro-section">
        <p class="intro-text">
          这是一款结合<span class="highlight">知识问答</span>、<span class="highlight">文字冒险</span>和<span class="highlight">决策模拟</span>的综合应急科普游戏。
        </p>
        <p class="intro-text">
          选择不同的应急场景，学习正确的应对方法。每一个决定都会影响你的生命值和知识积分。
        </p>
      </div>

      <h2 class="section-title">📚 选择场景</h2>

      <div class="scenarios-grid">
        <div
          v-for="scenario in scenarioList"
          :key="scenario.id"
          class="scenario-card"
          :style="{ '--card-color': scenario.color }"
          @click="selectScenario(scenario.id)"
        >
          <div class="scenario-icon">{{ scenario.icon }}</div>
          <h3 class="scenario-name">{{ scenario.name }}</h3>
          <p class="scenario-desc">{{ scenario.description }}</p>
          <div class="scenario-play">
            <span>开始挑战</span>
            <span class="arrow">→</span>
          </div>
        </div>
      </div>

      <div class="features">
        <div class="feature-item">
          <span class="feature-icon">❤️</span>
          <span class="feature-text">生命值</span>
        </div>
        <div class="feature-item">
          <span class="feature-icon">📚</span>
          <span class="feature-text">知识积分</span>
        </div>
        <div class="feature-item">
          <span class="feature-icon">🏅</span>
          <span class="feature-text">成就系统</span>
        </div>
      </div>

      <div class="tips">
        <h4>💡 游戏提示</h4>
        <ul>
          <li>仔细阅读每个场景描述，做出最佳决策</li>
          <li>遇到知识问答时，认真思考后再作答</li>
          <li>保护好自己的生命值和学习更多知识同样重要</li>
          <li>部分场景包含计时决策和模拟操作环节</li>
        </ul>
      </div>

      <button class="refresh-btn" @click="refreshPage">
        <span>🔄</span> 刷新页面
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useGameStore } from '../stores/gameStore'
import { scenarioList } from '../scenarios/index'

const router = useRouter()
const gameStore = useGameStore()

function selectScenario(scenarioId) {
  gameStore.setScenario(scenarioId)
  router.push('/game')
}

function refreshPage() {
  window.location.reload()
}
</script>

<style scoped>
.home-view {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
  padding: 40px 20px;
}

.home-content {
  max-width: 900px;
  width: 100%;
  text-align: center;
}

.title-section {
  margin-bottom: 32px;
}

.game-title {
  font-size: 38px;
  color: #fff;
  margin: 0 0 12px 0;
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
  text-shadow: 0 4px 20px rgba(79, 195, 247, 0.3);
}

.game-subtitle {
  font-size: 18px;
  color: #4fc3f7;
  margin: 0;
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
}

.intro-section {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 32px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.intro-text {
  font-size: 16px;
  color: #b8d4e8;
  line-height: 1.8;
  margin: 0 0 12px 0;
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
}

.intro-text:last-child {
  margin-bottom: 0;
}

.highlight {
  color: #4fc3f7;
  font-weight: bold;
}

.section-title {
  font-size: 20px;
  color: #fff;
  margin: 0 0 24px 0;
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
}

.scenarios-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  margin-bottom: 32px;
}

.scenario-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 24px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.scenario-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--card-color);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.scenario-card:hover {
  transform: translateY(-4px);
  border-color: var(--card-color);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.scenario-card:hover::before {
  opacity: 1;
}

.scenario-icon {
  font-size: 48px;
  margin-bottom: 12px;
}

.scenario-name {
  font-size: 18px;
  color: #fff;
  margin: 0 0 8px 0;
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
}

.scenario-desc {
  font-size: 13px;
  color: #8899aa;
  margin: 0 0 16px 0;
  line-height: 1.5;
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
}

.scenario-play {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  font-size: 14px;
  color: var(--card-color);
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
  transition: all 0.3s ease;
}

.scenario-card:hover .scenario-play {
  background: var(--card-color);
  color: #fff;
}

.arrow {
  transition: transform 0.3s ease;
}

.scenario-card:hover .arrow {
  transform: translateX(4px);
}

.features {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-bottom: 32px;
  flex-wrap: wrap;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.feature-icon {
  font-size: 20px;
}

.feature-text {
  font-size: 14px;
  color: #e0e6ed;
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
}

.tips {
  margin-top: 32px;
  padding: 20px;
  background: rgba(79, 195, 247, 0.1);
  border-radius: 12px;
  border: 1px solid rgba(79, 195, 247, 0.3);
  text-align: left;
}

.tips h4 {
  margin: 0 0 12px 0;
  color: #4fc3f7;
  font-size: 16px;
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
}

.tips ul {
  margin: 0;
  padding-left: 20px;
}

.tips li {
  font-size: 14px;
  color: #b8d4e8;
  line-height: 1.8;
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
}

.refresh-btn {
  margin-top: 24px;
  padding: 14px 32px;
  background: linear-gradient(135deg, #4fc3f7 0%, #0288d1 100%);
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
}

.refresh-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(79, 195, 247, 0.4);
}

@media (max-width: 600px) {
  .scenarios-grid {
    grid-template-columns: 1fr;
  }

  .features {
    flex-wrap: wrap;
  }

  .game-title {
    font-size: 28px;
  }
}
</style>
