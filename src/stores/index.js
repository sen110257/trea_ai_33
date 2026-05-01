import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useMainStore = defineStore('main', () => {
  const favorites = ref([])
  const history = ref([])

  const loadFromStorage = () => {
    try {
      const savedFavorites = localStorage.getItem('favorites')
      const savedHistory = localStorage.getItem('history')
      
      if (savedFavorites) {
        favorites.value = JSON.parse(savedFavorites)
      }
      if (savedHistory) {
        history.value = JSON.parse(savedHistory)
      }
    } catch (e) {
      console.error('Failed to load from storage:', e)
    }
  }

  const saveToStorage = () => {
    try {
      localStorage.setItem('favorites', JSON.stringify(favorites.value))
      localStorage.setItem('history', JSON.stringify(history.value))
    } catch (e) {
      console.error('Failed to save to storage:', e)
    }
  }

  const toggleFavorite = (item, type) => {
    const index = favorites.value.findIndex(f => f.id === item.id && f.type === type)
    
    if (index > -1) {
      favorites.value.splice(index, 1)
    } else {
      favorites.value.unshift({
        ...item,
        type,
        favoritedAt: Date.now()
      })
    }
  }

  const isFavorited = (id, type) => {
    return favorites.value.some(f => f.id === id && f.type === type)
  }

  const addToHistory = (item, type) => {
    const existingIndex = history.value.findIndex(h => h.id === item.id && h.type === type)
    
    if (existingIndex > -1) {
      history.value.splice(existingIndex, 1)
    }
    
    history.value.unshift({
      ...item,
      type,
      viewedAt: Date.now()
    })

    if (history.value.length > 100) {
      history.value = history.value.slice(0, 100)
    }
  }

  const clearHistory = () => {
    history.value = []
  }

  loadFromStorage()

  watch([favorites, history], () => {
    saveToStorage()
  }, { deep: true })

  return {
    favorites,
    history,
    toggleFavorite,
    isFavorited,
    addToHistory,
    clearHistory
  }
})
