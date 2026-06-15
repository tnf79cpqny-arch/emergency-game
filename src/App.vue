<template>
  <router-view />
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useGameStore } from './stores/gameStore'

const router = useRouter()
const gameStore = useGameStore()

onMounted(() => {
  // 清除本地存储，重置游戏状态
  localStorage.clear()
  gameStore.resetGame()
  if (router.currentRoute.value.name !== 'home') {
    router.push('/')
  }
})
</script>

<style>
/* Global styles handled in style.css */
</style>
