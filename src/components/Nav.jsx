import { useState, useEffect } from 'react'
import styles from './Nav.module.css'

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
  }, [isMenuOpen])

  const toggleMenu = () => setMenuOpen((prev) => !prev)

  return (
    <nav
      className={`${styles.nav} ${scrolled ? styles.scrolled : ''} ${
        isMenuOpen ? styles.open : ''
      }`}
    >
      <a href="#" className={styles.logo} onClick={() => setMenuOpen(false)}>
        Awele T.J.I.
      </a>

      <button
        className={styles.menuButton}
        onClick={toggleMenu}
        aria-label="Toggle Menu"
        aria-expanded={isMenuOpen}
      >
        <span className={styles.menuIcon} />
      </button>

      <div className={styles.menu}>
        <ul className={styles.links}>
          {LINKS.map(({ label, href }) => (
            <li key={label}>
              <a href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
