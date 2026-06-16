import { useAsyncValue, useNavigate } from 'react-router'
import styles from './Meal.module.scss'

export function Meal() {
  const meal = useAsyncValue()
  const navigate = useNavigate()
  const recipe = meal.meals[0]

  const {
    strMeal: title,
    strCategory,
    strArea,
    strCountry,
    strTags,
    strInstructions,
    strMealThumb: image,
    strYoutube,
  } = recipe

  function goToCategory() {
    navigate(`/Category/${strCategory}`)
  }

  return (
    <div className={styles.meal}>
      <button className={styles.button} onClick={goToCategory}>
        Go to category
      </button>
      <div className={styles.stage}>
        <img src={image} alt={title} />
        <div className={styles.stage__text}>
          <h1 className={styles.title}>{title}</h1>
          <div>
            <h2>Info: </h2>
            <p>Category: {strCategory}</p>
            <p>Country: {strCountry}</p>
            {strArea && <p>Area: {strArea}</p>}
            {strTags && <p>Tags: {strTags}</p>}
          </div>
        </div>
      </div>
      <div>
        <h2>Instruction</h2>
        <p>{strInstructions}</p>
      </div>
      <div>
        <h2>Ingredients</h2>
        <div className={styles.table}>
          <div className={styles.table__row}>
            <p>
              <strong>Ingredients</strong>
            </p>
            <p>
              <strong>Measure</strong>
            </p>
          </div>
          {Object.keys(recipe).map((key, index) => {
            if (key.includes('strIngredient') && recipe[key])
              return (
                <div className={styles.table__row} key={index}>
                  <p>{recipe[key]}</p>
                  <p>{recipe[`strMeasure${key.slice(13)}`]}</p>
                </div>
              )
          })}
        </div>
      </div>

      {strYoutube && (
        <div className={styles.iframeContainer}>
          <iframe
            title='YouTube video player'
            src={'https://www.youtube.com/embed/' + strYoutube.slice(-11)}
            allowFullScreen
            referrerPolicy='strict-origin-when-cross-origin'
          ></iframe>
        </div>
      )}
    </div>
  )
}
