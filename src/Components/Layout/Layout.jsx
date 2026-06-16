import { Link, NavLink, Outlet } from 'react-router'
import styles from './Layout.module.scss'

export function Layout() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div>
            <Link to='/' className={styles.logoLink}>
              Recipe Vault
            </Link>
          </div>
          <nav className={styles.navLinks}>
            <NavLink to='/' className={styles.navLink}>
              Home
            </NavLink>
          </nav>
        </div>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  )
}
