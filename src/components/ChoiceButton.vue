<template>
  <button
    class="choice-button"
    :class="{ disabled }"
    :disabled="disabled"
    @click="$emit('select', index)"
  >
    <span class="choice-index">{{ index + 1 }}</span>
    <span class="choice-text">{{ text }}</span>
  </button>
</template>

<script setup>
defineProps({
  text: { type: String, required: true },
  index: { type: Number, required: true },
  disabled: { type: Boolean, default: false }
})

defineEmits(['select'])
</script>

<style scoped>
.choice-button {
  width: 100%;
  padding: 16px 20px;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: #fff;
  font-size: 15px;
  text-align: left;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
}

.choice-button:hover:not(.disabled) {
  background: rgba(79, 195, 247, 0.15);
  border-color: #4fc3f7;
  transform: translateX(4px);
}

.choice-button.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.choice-index {
  width: 28px;
  height: 28px;
  background: rgba(79, 195, 247, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  color: #4fc3f7;
  flex-shrink: 0;
}

.choice-button:hover:not(.disabled) .choice-index {
  background: #4fc3f7;
  color: #fff;
}

.choice-text {
  flex: 1;
}
</style>
