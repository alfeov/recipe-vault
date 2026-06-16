const API_URL = import.meta.env.VITE_API_URL
const API_KEY = import.meta.env.VITE_API_KEY

async function getCategories() {
  try {
    const res = await fetch(`${API_URL}/${API_KEY}/categories.php`)
    if (!res.ok) {
      if (res.status === 404) {
        throw new Error('Page not found (404)')
      } else {
        throw new Error('HTTP: ' + res.status)
      }
    }
    const categories = await res.json()
    return categories
  } catch (error) {
    if (error instanceof TypeError && error.message === 'Failed to fetch') {
      throw new Error('Check Ethernet connection: ' + error.message, {
        cause: error,
      })
    }
    throw error
  }
}

export function categoriesLoader() {
  return { categories: getCategories() }
}
