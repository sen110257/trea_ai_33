<template>
  <div class="page-container">
    <div class="page-header">
      <h1 class="page-title">食材分类</h1>
      <div class="search-box" @click="goSearch">
        <span class="search-icon">🔍</span>
        <input 
          type="text" 
          class="search-input" 
          placeholder="搜索食材..."
          readonly
        >
      </div>
    </div>

    <div class="section">
      <div class="category-scroll">
        <div 
          v-for="cat in ingredientCategories" 
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
          v-for="item in filteredIngredients" 
          :key="item.id" 
          class="card"
          @click="goDetail(item)"
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

    <div v-if="filteredIngredients.length === 0" class="empty-state">
      <span class="empty-state-icon">🥗</span>
      <span class="empty-state-text">暂无食材数据</span>
    </div>

    <div style="height: 20px;"></div>

    <BottomTabBar />
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import BottomTabBar from '@/components/BottomTabBar.vue'
import { ingredientCategories, getIngredientsByCategory } from '@/data'

const router = useRouter()
const route = useRoute()

const activeCategory = ref(null)
const filteredIngredients = ref([])

const loadIngredients = () => {
  filteredIngredients.value = getIngredientsByCategory(activeCategory.value)
}

onMounted(() => {
  if (route.query.category) {
    activeCategory.value = route.query.category
  }
  loadIngredients()
})

watch(activeCategory, () => {
  loadIngredients()
})

const selectCategory = (categoryId) => {
  activeCategory.value = activeCategory.value === categoryId ? null : categoryId
}

const goSearch = () => {
  router.push('/search')
}

const goDetail = (item) => {
  router.push(`/ingredient/${item.id}`)
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
