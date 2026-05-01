<template>
  <div class="detail-page" v-if="recipe">
    <div class="detail-header">
      <img :src="recipe.image" :alt="recipe.name" class="detail-image" @error="handleImageError($event)">
      <div class="detail-back" @click="goBack">
        <span>←</span>
      </div>
      <div class="detail-favorite favorite-btn" :class="{ favorited: isFavorited }" @click="toggleFavorite">
        <span>{{ isFavorited ? '❤️' : '🤍' }}</span>
      </div>
    </div>

    <div class="detail-content">
      <h1 class="detail-title">{{ recipe.name }}</h1>
      <div class="detail-meta">
        <span class="tag">{{ recipe.difficulty }}</span>
        <span class="tag">⏱️ {{ recipe.time }}</span>
        <span class="tag">👍 {{ recipe.likes }}</span>
        <span v-for="tag in recipe.tags" :key="tag" class="tag tag-primary">
          {{ tag }}
        </span>
      </div>

      <div class="divider-light" style="margin: 0 -16px 24px;"></div>

      <div class="detail-section">
        <div class="detail-section-header">
          <span class="detail-section-icon">📝</span>
          <h3 class="detail-section-title">菜品简介</h3>
          <div class="detail-section-line"></div>
        </div>
        <div class="detail-text-block">
          <p class="detail-text">{{ recipe.description }}</p>
        </div>
      </div>

      <div class="detail-section">
        <div class="detail-section-header">
          <span class="detail-section-icon">👥</span>
          <h3 class="detail-section-title">适合人群</h3>
          <div class="detail-section-line"></div>
        </div>
        <div class="detail-text-block">
          <p class="detail-text">{{ recipe.suitableFor }}</p>
        </div>
      </div>

      <div class="detail-section">
        <div class="detail-section-header">
          <span class="detail-section-icon">🛒</span>
          <h3 class="detail-section-title">食材准备</h3>
          <div class="detail-section-line"></div>
        </div>
        <div class="ingredients-section">
          <div v-for="item in recipe.ingredients" :key="item.name" class="ingredient-item">
            <span class="ingredient-name">{{ item.name }}</span>
            <span class="ingredient-amount">{{ item.amount }}</span>
          </div>
        </div>
      </div>

      <div class="detail-section">
        <div class="detail-section-header">
          <span class="detail-section-icon">👨‍🍳</span>
          <h3 class="detail-section-title">制作步骤</h3>
          <div class="detail-section-line"></div>
        </div>
        <div class="step-section">
          <div v-for="step in recipe.steps" :key="step.order" class="step-item">
            <div class="step-number">{{ step.order }}</div>
            <div class="step-content">
              <img v-if="step.image" :src="step.image" class="step-image" @error="handleImageError($event)">
              <p class="step-text">{{ step.text }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="detail-section">
        <div class="detail-section-header">
          <span class="detail-section-icon">💡</span>
          <h3 class="detail-section-title">烹饪小贴士</h3>
          <div class="detail-section-line"></div>
        </div>
        <div class="tip-box">
          <h4 class="tip-title">
            <span>💡</span>
            <span>小贴士</span>
          </h4>
          <p class="tip-content" style="white-space: pre-line;">{{ recipe.tips }}</p>
        </div>
      </div>

      <div style="height: 100px;"></div>
    </div>

    <div class="detail-bottom-bar safe-area-bottom">
      <div class="bottom-action" :class="{ active: isFavorited }" @click="toggleFavorite">
        <span class="bottom-action-icon">{{ isFavorited ? '❤️' : '🤍' }}</span>
        <span class="bottom-action-text">收藏</span>
      </div>
      <div class="bottom-action" @click="likeRecipe">
        <span class="bottom-action-icon">👍</span>
        <span class="bottom-action-text">点赞</span>
      </div>
      <button class="btn btn-primary bottom-btn" @click="goBack">
        返回
      </button>
    </div>
  </div>

  <div v-else class="empty-state" style="height: 100vh;">
    <span class="empty-state-icon">🔍</span>
    <span class="empty-state-text">菜谱不存在</span>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { getRecipeById } from '@/data'
import { useMainStore } from '@/stores'

const router = useRouter()
const route = useRoute()
const store = useMainStore()

const recipe = ref(null)
const isFavorited = computed(() => {
  return store.isFavorited(parseInt(route.params.id), 'recipe')
})

onMounted(() => {
  const id = route.params.id
  recipe.value = getRecipeById(id)
  
  if (recipe.value) {
    store.addToHistory(recipe.value, 'recipe')
  }
})

const goBack = () => {
  router.back()
}

const toggleFavorite = () => {
  if (recipe.value) {
    store.toggleFavorite(recipe.value, 'recipe')
  }
}

const likeRecipe = () => {
  if (recipe.value) {
    recipe.value.likes++
  }
}

const handleImageError = (e) => {
  e.target.style.display = 'none'
}
</script>

<style scoped>
</style>
