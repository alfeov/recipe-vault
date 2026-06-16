import styles from './Cards.module.scss'

export function Cards({ children }) {
  return <div className={styles.cards}>{children}</div>
}
