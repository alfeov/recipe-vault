import styles from './SearchBar.module.scss'

export function SearchBar({ value, onChange }) {
  const handleFocus = (e) => {
    e.target.parentElement.classList.toggle('active-form', true)
  }

  const handleBlur = (e) => {
    e.target.parentElement.classList.toggle('active-form', false)
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
      }}
      className={styles.form}
      role='search'
      autoComplete='off'
    >
      <input
        className={styles.field}
        name='search'
        type='search'
        placeholder='Search category'
        value={value}
        onChange={(e) => {
          onChange(e.target.value)
        }}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <input className={styles.button} type='submit' value='Search' />
    </form>
  )
}
