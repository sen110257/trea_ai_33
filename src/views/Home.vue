<template>
  <div class="page-container">
    <div class="page-header">
      <div class="search-box" @click="goSearch">
        <span class="search-icon">🔍</span>
        <input 
          type="text" 
          class="search-input" 
          placeholder="搜索食材、菜谱..."
          readonly
        >
      </div>
    </div>

    <div class="section">
      <h3 class="section-title">食材分类</h3>
      <div class="category-scroll">
        <div 
          v-for="cat in ingredientCategories" 
          :key="cat.id" 
          class="category-item"
          @click="goIngredientCategory(cat.id)"
        >
          <span class="category-icon">{{ cat.icon }}</span>
          <span class="category-name">{{ cat.name }}</span>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-header">
        <h3 class="section-title">热门食材</h3>
        <router-link to="/ingredients" class="section-more">查看更多 ›</router-link>
      </div>
      <div class="grid-2">
        <div 
          v-for="item in hotIngredients" 
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

    <div class="section">
      <div class="section-header">
        <h3 class="section-title">热门菜谱</h3>
        <router-link to="/recipes" class="section-more">查看更多 ›</router-link>
      </div>
      <div class="grid-2">
        <div 
          v-for="item in hotRecipes" 
          :key="item.id" 
          class="card"
          @click="goRecipeDetail(item)"
        >
          <img :src="item.image" :alt="item.name" class="card-image" @error="handleImageError($event)">
          <div class="card-content">
            <h4 class="card-title">{{ item.name }}</h4>
            <div class="recipe-card-meta">
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

    <BottomTabBar />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import BottomTabBar from '@/components/BottomTabBar.vue'
import { ingredientCategories, getHotIngredients, getHotRecipes } from '@/data'

const router = useRouter()

const hotIngredients = ref([])
const hotRecipes = ref([])

onMounted(() => {
  hotIngredients.value = getHotIngredients()
  hotRecipes.value = getHotRecipes()
})

const goSearch = () => {
  router.push('/search')
}

const goIngredientCategory = (categoryId) => {
  router.push({ path: '/ingredients', query: { category: categoryId } })
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
