<template>
  <div class="bottom-nav safe-area-bottom">
    <router-link 
      v-for="item in navItems" 
      :key="item.path" 
      :to="item.path" 
      class="nav-item"
      :class="{ active: isActive(item.path) }"
    >
      <span class="nav-icon">{{ item.icon }}</span>
      <span class="nav-text">{{ item.name }}</span>
    </router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const navItems = [
  { name: '首页', icon: '🏠', path: '/home' },
  { name: '食材', icon: '🥬', path: '/ingredients' },
  { name: '菜谱', icon: '🍳', path: '/recipes' },
  { name: '收藏', icon: '❤️', path: '/favorites' },
  { name: '我的', icon: '👤', path: '/profile' }
]

const isActive = (path) => {
  return route.path === path || (path === '/home' && route.path === '/')
}
</script>

<style scoped>
</style>
