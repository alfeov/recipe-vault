const API_URL = import.meta.env.VITE_API_URL
const API_KEY = import.meta.env.VITE_API_KEY

async function getMeal(mealId) {
  try {
    const res = await fetch(`${API_URL}/${API_KEY}/lookup.php?i=${mealId}`)
    if (!res.ok) {
      if (res.status === 404) {
        throw new Error(`Meal with this id not found (404)`)
      } else {
        throw new Error(`HTTP: ${res.status}`)
      }
    }
    const meal = await res.json()
    if (!meal || !meal.meals) {
      throw new Error(`Meal with this id not found (404)`)
    }
    return meal
  } catch (error) {
    if (error instanceof TypeError && error.message === 'Failed to fetch') {
      throw new Error('Check Ethernet connection: ' + error.message, {
        cause: error,
      })
    }
    throw error
  }
}

export function mealLoader({ params }) {
  return { meal: getMeal(params.mealId) }
}
