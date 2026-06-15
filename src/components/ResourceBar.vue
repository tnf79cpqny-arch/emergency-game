<template>
  <div class="resource-bar">
    <div class="resource-item health">
      <span class="resource-icon">❤️</span>
      <span class="resource-label">生命值</span>
      <div class="resource-track">
        <div class="resource-fill" :style="{ width: health + '%' }"></div>
      </div>
      <span class="resource-value">{{ health }}%</span>
    </div>
    <div class="resource-item knowledge">
      <span class="resource-icon">📚</span>
      <span class="resource-label">知识积分</span>
      <div class="resource-track">
        <div class="resource-fill" :style="{ width: Math.min(100, knowledge) + '%' }"></div>
      </div>
      <span class="resource-value">{{ knowledge }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  health: { type: Number, default: 100 },
  knowledge: { type: Number, default: 0 }
})
</script>

<style scoped>
.resource-bar {
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.resource-item {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  min-width: 200px;
  padding: 10px 14px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.resource-icon {
  font-size: 18px;
}

.resource-label {
  font-size: 13px;
  color: #8899aa;
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
}

.resource-track {
  flex: 1;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
}

.resource-fill {
  height: 100%;
  border-radius: 4px;
  transition: width 0.5s ease;
}

.health .resource-fill {
  background: linear-gradient(90deg, #ff5252, #ff1744);
}

.knowledge .resource-fill {
  background: linear-gradient(90deg, #4fc3f7, #0288d1);
}

.resource-value {
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  min-width: 40px;
  text-align: right;
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
}
</style>
