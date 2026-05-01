<template>
  <div class="detail-page" v-if="ingredient">
    <div class="detail-header">
      <img :src="ingredient.image" :alt="ingredient.name" class="detail-image" @error="handleImageError($event)">
      <div class="detail-back" @click="goBack">
        <span>←</span>
      </div>
      <div class="detail-favorite favorite-btn" :class="{ favorited: isFavorited }" @click="toggleFavorite">
        <span>{{ isFavorited ? '❤️' : '🤍' }}</span>
      </div>
    </div>

    <div class="detail-content">
      <h1 class="detail-title">{{ ingredient.name }}</h1>
      <div class="detail-meta">
        <span v-for="tag in ingredient.tags" :key="tag" class="tag tag-primary">
          {{ tag }}
        </span>
      </div>

      <div class="detail-section">
        <h3 class="detail-section-title">💫 功效与作用</h3>
        <p class="detail-text">{{ ingredient.effects }}</p>
      </div>

      <div class="detail-section">
        <h3 class="detail-section-title">⚠️ 食用禁忌</h3>
        <p class="detail-text" style="white-space: pre-line;">{{ ingredient.taboos }}</p>
      </div>

      <div class="detail-section">
        <h3 class="detail-section-title">🥣 搭配建议</h3>
        <p class="detail-text" style="white-space: pre-line;">{{ ingredient.suggestions }}</p>
      </div>

      <div class="detail-section">
        <h3 class="detail-section-title">📋 食用须知</h3>
        <p class="detail-text" style="white-space: pre-line;">{{ ingredient.notices }}</p>
      </div>

      <div class="detail-section" v-if="ingredient.compatible.length > 0">
        <h3 class="detail-section-title">✅ 相宜食材</h3>
        <div v-for="item in ingredient.compatible" :key="item.name" class="compatible-item">
          <span class="compatible-icon compatible-good">✅</span>
          <div class="compatible-content">
            <h4 class="compatible-name">{{ item.name }}</h4>
            <p class="compatible-desc">{{ item.desc }}</p>
          </div>
        </div>
      </div>

      <div class="detail-section" v-if="ingredient.incompatible.length > 0">
        <h3 class="detail-section-title">❌ 相克食材</h3>
        <div v-for="item in ingredient.incompatible" :key="item.name" class="compatible-item">
          <span class="compatible-icon compatible-bad">❌</span>
          <div class="compatible-content">
            <h4 class="compatible-name">{{ item.name }}</h4>
            <p class="compatible-desc">{{ item.desc }}</p>
          </div>
        </div>
      </div>

      <div style="height: 100px;"></div>
    </div>

    <div class="detail-bottom-bar safe-area-bottom">
      <div class="bottom-action" :class="{ active: isFavorited }" @click="toggleFavorite">
        <span class="bottom-action-icon">{{ isFavorited ? '❤️' : '🤍' }}</span>
        <span class="bottom-action-text">收藏</span>
      </div>
      <button class="btn btn-primary bottom-btn" @click="goBack">
        返回
      </button>
    </div>
  </div>

  <div v-else class="empty-state" style="height: 100vh;">
    <span class="empty-state-icon">🔍</span>
    <span class="empty-state-text">食材不存在</span>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { getIngredientById } from '@/data'
import { useMainStore } from '@/stores'

const router = useRouter()
const route = useRoute()
const store = useMainStore()

const ingredient = ref(null)
const isFavorited = computed(() => {
  return store.isFavorited(parseInt(route.params.id), 'ingredient')
})

onMounted(() => {
  const id = route.params.id
  ingredient.value = getIngredientById(id)
  
  if (ingredient.value) {
    store.addToHistory(ingredient.value, 'ingredient')
  }
})

const goBack = () => {
  router.back()
}

const toggleFavorite = () => {
  if (ingredient.value) {
    store.toggleFavorite(ingredient.value, 'ingredient')
  }
}

const handleImageError = (e) => {
  e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect fill="%23F5F5F0" width="100" height="100"/><text x="50" y="60" font-size="40" text-anchor="middle">🥗</text></svg>'
}
</script>

<style scoped>
</style>
