<template>
  <div class="page-container">
    <div class="page-header">
      <h1 class="page-title">菜谱大全</h1>
      <div class="search-box" @click="goSearch">
        <span class="search-icon">🔍</span>
        <input 
          type="text" 
          class="search-input" 
          placeholder="搜索菜谱..."
          readonly
        >
      </div>
    </div>

    <div class="section">
      <h3 class="section-title">菜谱分类</h3>
      <div class="category-scroll">
        <div 
          v-for="cat in recipeCategories" 
          :key="cat.id" 
          class="category-item"
          :class="{ active: activeCategory === cat.id }"
          @click="selectCategory(cat.id)"
        >
          <span class="category-icon">{{ cat.icon }}</span>
          <span class="category-name">{{ cat.name }}</span>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="grid-2">
        <div 
          v-for="item in filteredRecipes" 
          :key="item.id" 
          class="card"
          @click="goDetail(item)"
        >
          <div class="recipe-card-header">
            <img :src="item.image" :alt="item.name" class="card-image" @error="handleImageError($event)">
          </div>
          <div class="card-content" style="padding-bottom: 12px;">
            <h4 class="card-title">{{ item.name }}</h4>
            <p class="card-desc" style="margin-bottom: 8px;">{{ item.description }}</p>
            <div class="recipe-card-footer">
              <div class="recipe-card-meta-left">
                <span class="recipe-card-meta-item">
                  <span class="recipe-card-meta-icon">⏱️</span>
                  <span>{{ item.time }}</span>
                </span>
                <span class="recipe-card-meta-item">
                  <span class="recipe-card-meta-icon">📊</span>
                  <span>{{ item.difficulty }}</span>
                </span>
              </div>
              <span class="recipe-card-likes">
                <span class="recipe-card-likes-icon">👍</span>
                <span>{{ item.likes }}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="filteredRecipes.length === 0" class="empty-state">
      <span class="empty-state-icon">🍳</span>
      <span class="empty-state-text">暂无菜谱数据</span>
    </div>

    <div style="height: 20px;"></div>

    <BottomTabBar />
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import BottomTabBar from '@/components/BottomTabBar.vue'
import { recipeCategories, getRecipesByCategory, recipes } from '@/data'

const router = useRouter()

const activeCategory = ref(null)
const filteredRecipes = ref([])

const loadRecipes = () => {
  if (activeCategory.value) {
    filteredRecipes.value = getRecipesByCategory(activeCategory.value)
  } else {
    filteredRecipes.value = recipes
  }
}

onMounted(() => {
  loadRecipes()
})

watch(activeCategory, () => {
  loadRecipes()
})

const selectCategory = (categoryId) => {
  activeCategory.value = activeCategory.value === categoryId ? null : categoryId
}

const goSearch = () => {
  router.push('/search')
}

const goDetail = (item) => {
  router.push(`/recipe/${item.id}`)
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
