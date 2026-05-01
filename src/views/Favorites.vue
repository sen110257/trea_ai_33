<template>
  <div class="page-container">
    <div class="page-header">
      <h1 class="page-title">我的收藏</h1>
    </div>

    <div class="tabs" v-if="favorites.length > 0">
      <div 
        class="tab-item" :class="{ active: activeTab === 'all' }" @click="activeTab = 'all'">
        全部
      </div>
      <div 
        class="tab-item" :class="{ active: activeTab === 'ingredient' }" @click="activeTab = 'ingredient'">
        食材
      </div>
      <div 
        class="tab-item" :class="{ active: activeTab === 'recipe' }" @click="activeTab = 'recipe'">
        菜谱
      </div>
    </div>

    <div v-if="filteredFavorites.length === 0" class="empty-state">
      <span class="empty-state-icon">💔</span>
      <span class="empty-state-text">暂无收藏</span>
      <span style="font-size: 13px; color: var(--text-light); margin-top: 8px;">快去收藏喜欢的食材和菜谱吧</span>
    </div>

    <div v-else class="section">
      <div class="grid-2">
        <div 
          v-for="item in filteredFavorites" 
          :key="`${item.type}-${item.id}`" 
          class="card"
          @click="goDetail(item)"
        >
          <img :src="item.image" :alt="item.name" class="card-image" @error="handleImageError($event)">
          <div class="card-content">
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
              <h4 class="card-title" style="margin-bottom: 4px;">{{ item.name }}</h4>
              <span class="tag" :class="item.type === 'ingredient' ? 'tag-primary' : ''" style="font-size: 11px;">
                {{ item.type === 'ingredient' ? '食材' : '菜谱' }}
              </span>
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
            <div v-else class="card-desc">
              <span v-for="tag in (item.tags || []).slice(0, 2)" :key="tag" class="tag tag-primary" style="margin-right: 4px; margin-bottom: 4px; display: inline-block; font-size: 11px;">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div style="height: 20px;"></div>

    <BottomTabBar />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import BottomTabBar from '@/components/BottomTabBar.vue'
import { useMainStore } from '@/stores'

const router = useRouter()
const store = useMainStore()

const activeTab = ref('all')

const favorites = computed(() => store.favorites)

const filteredFavorites = computed(() => {
  if (activeTab.value === 'all') {
    return favorites.value
  }
  return favorites.value.filter(f => f.type === activeTab.value)
})

const goDetail = (item) => {
  if (item.type === 'ingredient') {
    router.push(`/ingredient/${item.id}`)
  } else {
    router.push(`/recipe/${item.id}`)
  }
}

const handleImageError = (e) => {
  e.target.style.display = 'none'
  const parent = e.target.parentElement
  const placeholder = document.createElement('div')
  placeholder.className = 'card-image-placeholder'
  placeholder.innerHTML = '🍽️ 加载失败'
  parent.insertBefore(placeholder, e.target)
}
</script>

<style scoped>
</style>
