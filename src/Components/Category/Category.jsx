import { useAsyncValue, useNavigate } from 'react-router'

import { Card } from '@/Components/Card/Card'
import { Cards } from '@/Components/Cards/Cards'

import styles from './Category.module.scss'

export function Category() {
  const category = useAsyncValue()
  const navigate = useNavigate()

  function goToRecipe({ id }) {
    navigate(`/Meal/${id}`)
  }

  function goToCategories() {
    navigate('/')
  }

  return (
    <div className={styles.category}>
      <button onClick={goToCategories} className={styles.button}>
        Go to categories
      </button>
      <Cards>
        {category?.meals?.map((meal) => (
          <Card
            key={meal.idMeal}
            id={meal.idMeal}
            title={meal.strMeal}
            image={meal.strMealThumb}
            desc={'Cuisine of ' + meal.strCountry}
            buttonText='recipe'
            onClick={goToRecipe}
          />
        ))}
      </Cards>
    </div>
  )
}
