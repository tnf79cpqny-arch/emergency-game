<template>
  <div class="game-text">
    <p>{{ text }}</p>
  </div>
</template>

<script setup>
defineProps({
  text: { type: String, default: '' }
})
</script>

<style scoped>
.game-text {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.game-text p {
  color: #e0e6ed;
  font-size: 16px;
  line-height: 1.8;
  margin: 0;
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
}
</style>
