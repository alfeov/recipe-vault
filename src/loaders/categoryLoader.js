const API_URL = import.meta.env.VITE_API_URL
const API_KEY = import.meta.env.VITE_API_KEY

async function getCategory(categoryName) {
  try {
    const res = await fetch(
      `${API_URL}/${API_KEY}/filter.php?c=${categoryName}`,
    )
    if (!res.ok) {
      if (res.status === 404) {
        throw new Error(`Category ${categoryName} not found (404)`)
      } else {
        throw new Error('HTTP: ' + res.status)
      }
    }
    const category = await res.json()
    if (!category || !category.meals) {
      throw new Error(`Category ${categoryName} not found (404)`)
    }
    return category
  } catch (error) {
    if (error instanceof TypeError && error.message === 'Failed to fetch') {
      throw new Error('Check Ethernet connection: ' + error.message, {
        cause: error,
      })
    }
    throw error
  }
}

export function categoryLoader({ params }) {
  return { category: getCategory(params.category) }
}
