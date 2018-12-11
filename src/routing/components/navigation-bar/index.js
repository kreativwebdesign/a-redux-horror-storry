import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import pages from '../../pages'
import styles from './index.scss'

const NavigationBar = () => (
  <nav className={styles.navbar}>
    <div className={styles.navContainer}>
      <h1 className={styles.title}>
        <Link to="/">Managu</Link>
      </h1>
      <ul>
        {pages.map(page => (
          <li key={page.url}>
            <NavLink
              className={styles.navEntry}
              activeClassName={styles.current}
              to={page.url}
            >
              {page.displayName}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className={styles.delimitter} />
    </div>
  </nav>
)

export default NavigationBar
