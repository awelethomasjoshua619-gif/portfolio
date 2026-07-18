import { useEffect } from 'react'
import { SKILLS } from '../data'
import avatar from '../avatar.png'
import TechIcon from './TechIcons'
import styles from './About.module.css'

export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.12 }
    )
    
    const elements = document.querySelectorAll('#about .reveal')
    elements.forEach((el) => observer.observe(el))
    
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="section">
      <p className="section-label">About</p>

      <div className={styles.grid}>
        <div className={styles.photoWrap}>
          <img src={avatar} alt="Awele Thomas Joshua" className={styles.photo} />
          <div className={styles.photoTag}>Awele Thomas Joshua</div>
        </div>

        <div className={styles.textContent}>
          <div className="reveal">
            <h2 className={styles.headline}>
              Focusing on<br />
              code clarity and<br />
              <em>usability.</em>
            </h2>
          </div>

          <div className="reveal">
            <p className={styles.body}>
              I'm a frontend developer who enjoys writing clean React components and structured styling. I focus on creating interfaces that load quickly, adapt cleanly to any device size, and respect web accessibility (a11y) standards.
            </p>
            <p className={styles.body}>
              Over the last three years, I've worked on web applications across menu sync services, weather dashboards, and ecommerce tools. I focus on building components that are easy to maintain, straightforward to test, and scale reliably.
            </p>
            <div className={styles.skillsGrid}>
              {SKILLS.map((s) => (
                <div key={s.name} className={styles.skillCard} aria-label={s.name}>
                  <TechIcon name={s.icon} className={styles.skillIcon} />
                  <span className={styles.skillTooltip}>{s.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
