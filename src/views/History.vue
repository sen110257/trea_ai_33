<template>
  <div class="page-container">
    <div class="page-header" style="display: flex; align-items: center; justify-content: space-between;">
      <h1 class="page-title" style="flex: 1;">浏览历史</h1>
      <button 
        v-if="history.length > 0" 
        class="clear-btn" 
        @click="showClearConfirm"
      >
        清空
      </button>
    </div>

    <div v-if="history.length === 0" class="empty-state">
      <span class="empty-state-icon">📜</span>
      <span class="empty-state-text">暂无浏览记录</span>
    </div>

    <div v-else class="section">
      <div v-for="item in history" :key="`${item.type}-${item.id}-${item.viewedAt}`" class="history-item" @click="goDetail(item)">
        <img :src="item.image" :alt="item.name" class="history-image" @error="handleImageError($event)">
        <div class="history-info">
          <div>
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
              <h4 class="history-title">{{ item.name }}</h4>
              <span class="history-type">{{ item.type === 'ingredient' ? '食材' : '菜谱' }}</span>
            </div>
            <p class="history-time">{{ formatTime(item.viewedAt) }}</p>
          </div>
          <div v-if="item.type === 'recipe'" class="recipe-card-meta">
            <span class="recipe-meta-item">
              <span class="recipe-meta-icon">⏱️</span>
              {{ item.time || '未知' }}
            </span>
            <span class="recipe-meta-item">
              <span class="recipe-meta-icon">📊</span>
              {{ item.difficulty || '未知' }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div style="height: 20px;"></div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useMainStore } from '@/stores'

const router = useRouter()
const store = useMainStore()

const history = computed(() => store.history)

const formatTime = (timestamp) => {
  const date = new Date(timestamp)
  const now = new Date()
  const diff = now - date
  
  if (diff < 60000) {
    return '刚刚'
  } else if (diff < 3600000) {
    return `${Math.floor(diff / 60000)}分钟前`
  } else if (diff < 86400000) {
    return `${Math.floor(diff / 3600000)}小时前`
  } else if (diff < 604800000) {
    return `${Math.floor(diff / 86400000)}天前`
  } else {
    return `${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`
  }
}

const goDetail = (item) => {
  if (item.type === 'ingredient') {
    router.push(`/ingredient/${item.id}`)
  } else {
    router.push(`/recipe/${item.id}`)
  }
}

const showClearConfirm = () => {
  if (confirm('确定要清空浏览历史吗？')) {
    store.clearHistory()
  }
}

const handleImageError = (e) => {
  e.target.style.display = 'none'
}
</script>

<style scoped>
</style>
