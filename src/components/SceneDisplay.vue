<template>
  <div class="scene-display">
    <div class="scene-placeholder" :class="sceneClass">
      <span class="scene-emoji">{{ sceneEmoji }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  scene: { type: String, default: '' }
})

const sceneEmoji = computed(() => {
  const emojiMap = {
    'apartment_fire_start': '🏢',
    'kitchen_fire': '🔥',
    'fire_extinguished': '✅',
    'smoke_spreading': '💨',
    'evacuate': '🏃',
    'earthquake_start': '🌋',
    'office_earthquake': '🏛️',
    'under_table': '🪑',
    'flood_warning': '🌊',
    'park_elder_collapse': '🏥',
    'cpr_in_progress': '🫀',
    'kitchen_burn': '🩹',
    'bike_fall': '🚴',
    'car_accident': '🚗',
    'typhoon_warning': '⛈️',
    'flu_season': '😷',
    'default': '🎯'
  }
  return emojiMap[props.scene] || emojiMap['default']
})

const sceneClass = computed(() => {
  return props.scene ? `scene-${props.scene}` : ''
})
</script>

<style scoped>
.scene-display {
  margin-bottom: 16px;
}

.scene-placeholder {
  height: 120px;
  background: linear-gradient(135deg, rgba(79, 195, 247, 0.1) 0%, rgba(2, 136, 209, 0.1) 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid rgba(79, 195, 247, 0.3);
}

.scene-emoji {
  font-size: 64px;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
</style>
