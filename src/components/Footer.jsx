import { useState } from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  const [clicked, setClicked] = useState(false)

  return (
    <footer className={styles.footer}>
      <span className={styles.name}>Awele Thomas Joshua Ikechukwu</span>
      <span
        className={`${styles.copy} ${clicked ? styles.easter : ''}`}
        onClick={() => setClicked(!clicked)}
        role="button"
        tabIndex="0"
        onKeyDown={(e) => e.key === 'Enter' && setClicked(!clicked)}
      >
        © 2026 · Built with {clicked ? '❤️' : 'intention'}
      </span>
    </footer>
  )
}
