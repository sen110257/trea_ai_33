<template>
  <div class="page-container">
    <div class="page-header">
      <div class="search-box">
        <span class="search-icon">🔍</span>
        <input 
          type="text" 
          class="search-input" 
          placeholder="搜索食材、菜谱..."
          v-model="keyword"
          @input="handleSearch"
          ref="searchInput"
        >
        <span v-if="keyword" @click="clearSearch" style="cursor: pointer; color: var(--text-light);">✕</span>
      </div>
    </div>

    <div v-if="!keyword" class="section">
      <h3 class="section-title">🔥 热门搜索</h3>
      <div style="display: flex; flex-wrap: wrap; gap: 8px; padding: 0 4px;">
        <span 
          v-for="tag in hotTags" 
          :key="tag" 
          class="tag" 
          style="cursor: pointer; padding: 8px 16px;"
          @click="searchTag(tag)"
        >
          {{ tag }}
        </span>
      </div>
    </div>

    <div v-if="keyword && searchResults.ingredients.length === 0 && searchResults.recipes.length === 0" class="empty-state">
      <span class="empty-state-icon">🔍</span>
      <span class="empty-state-text">未找到相关内容</span>
    </div>

    <div v-if="searchResults.ingredients.length > 0" class="section">
      <h3 class="section-title">🥬 食材</h3>
      <div class="grid-2">
        <div 
          v-for="item in searchResults.ingredients" 
          :key="item.id" 
          class="card"
          @click="goIngredientDetail(item)"
        >
          <img :src="item.image" :alt="item.name" class="card-image" @error="handleImageError($event)">
          <div class="card-content">
            <h4 class="card-title">{{ item.name }}</h4>
            <div class="card-desc">
              <span v-for="tag in item.tags.slice(0, 2)" :key="tag" class="tag tag-primary" style="margin-right: 4px; margin-bottom: 4px; display: inline-block;">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="searchResults.recipes.length > 0" class="section">
      <h3 class="section-title">🍳 菜谱</h3>
      <div class="grid-2">
        <div 
          v-for="item in searchResults.recipes" 
          :key="item.id" 
          class="card"
          @click="goRecipeDetail(item)"
        >
          <img :src="item.image" :alt="item.name" class="card-image" @error="handleImageError($event)">
          <div class="card-content">
            <h4 class="card-title">{{ item.name }}</h4>
            <p class="card-desc">{{ item.description }}</p>
            <div class="recipe-card-meta" style="margin-top: 8px;">
              <span class="recipe-meta-item">
                <span class="recipe-meta-icon">⏱️</span>
                {{ item.time }}
              </span>
              <span class="recipe-meta-item">
                <span class="recipe-meta-icon">📊</span>
                {{ item.difficulty }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div style="height: 20px;"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { searchAll } from '@/data'

const router = useRouter()

const keyword = ref('')
const searchResults = ref({ ingredients: [], recipes: [] })
const searchInput = ref(null)

const hotTags = ['西红柿', '鸡蛋', '西兰花', '牛肉', '鸡肉', '清蒸', '糖醋', '快手菜']

onMounted(() => {
  setTimeout(() => {
    searchInput.value && searchInput.value.focus()
  }, 100)
})

const handleSearch = () => {
  if (keyword.value.trim()) {
    searchResults.value = searchAll(keyword.value.trim())
  } else {
    searchResults.value = { ingredients: [], recipes: [] }
  }
}

const clearSearch = () => {
  keyword.value = ''
  searchResults.value = { ingredients: [], recipes: [] }
}

const searchTag = (tag) => {
  keyword.value = tag
  handleSearch()
}

const goIngredientDetail = (item) => {
  router.push(`/ingredient/${item.id}`)
}

const goRecipeDetail = (item) => {
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
