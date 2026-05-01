<template>
  <div class="page-container">
    <div class="profile-header">
      <div class="profile-avatar">👤</div>
      <h2 class="profile-name">游客用户</h2>
      <p class="profile-desc">探索健康食材，享受美味生活</p>
    </div>

    <div class="stats-section">
      <div class="stats-item">
        <div class="stats-number">{{ favoriteCount }}</div>
        <div class="stats-label">我的收藏</div>
      </div>
      <div class="stats-item">
        <div class="stats-number">{{ historyCount }}</div>
        <div class="stats-label">浏览历史</div>
      </div>
    </div>

    <div class="menu-list" style="margin-top: 24px;">
      <div class="menu-item" @click="goFavorites">
        <div class="menu-left">
          <span class="menu-icon">❤️</span>
          <span class="menu-text">我的收藏</span>
        </div>
        <span class="menu-arrow">›</span>
      </div>
      <div class="menu-item" @click="goHistory">
        <div class="menu-left">
          <span class="menu-icon">📜</span>
          <span class="menu-text">浏览历史</span>
        </div>
        <span class="menu-arrow">›</span>
      </div>
    </div>

    <div class="menu-list">
      <div class="menu-item" @click="showAbout">
        <div class="menu-left">
          <span class="menu-icon">ℹ️</span>
          <span class="menu-text">关于我们</span>
        </div>
        <span class="menu-arrow">›</span>
      </div>
      <div class="menu-item" @click="showHelp">
        <div class="menu-left">
          <span class="menu-icon">❓</span>
          <span class="menu-text">使用帮助</span>
        </div>
        <span class="menu-arrow">›</span>
      </div>
    </div>

    <div style="text-align: center; padding: 20px; color: var(--text-light); font-size: 12px;">
      <p>版本 v1.0.0</p>
      <p style="margin-top: 4px;">健康生活，从了解食材开始</p>
    </div>

    <div style="height: 20px;"></div>

    <BottomTabBar />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import BottomTabBar from '@/components/BottomTabBar.vue'
import { useMainStore } from '@/stores'

const router = useRouter()
const store = useMainStore()

const favoriteCount = computed(() => store.favorites.length)
const historyCount = computed(() => store.history.length)

const goFavorites = () => {
  router.push('/favorites')
}

const goHistory = () => {
  router.push('/history')
}

const showAbout = () => {
  alert('日常食材功效查询大全 v1.0.0\n\n一款专注于食材功效查询和菜谱推荐的健康应用，帮助您了解食材的营养价值、食用禁忌和相宜相克知识，享受健康美味的生活。')
}

const showHelp = () => {
  alert('使用帮助：\n\n1. 首页：查看热门食材和菜谱，点击分类标签筛选\n2. 食材：按分类浏览食材，查看详细功效和宜忌\n3. 菜谱：按分类浏览菜谱，查看详细做法步骤\n4. 收藏：收藏喜欢的食材和菜谱，本地保存不丢失\n5. 我的：查看收藏和浏览历史\n\n提示：所有数据保存在本地，无需登录即可使用。')
}
</script>

<style scoped>
</style>
