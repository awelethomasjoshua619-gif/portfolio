import { SKILLS } from '../data'
import TechIcon from './TechIcons'
import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className="section">
      <p className="section-label">About</p>

      <div className={styles.grid}>
        <div>
          <h2 className={styles.headline}>
            Focusing on<br />
            code clarity and<br />
            <em>usability.</em>
          </h2>
        </div>

        <div className={styles.textContent}>
          <p className={styles.body}>
            I build web applications across the stack, from responsive React interfaces to APIs and data-backed features. I care about the details people feel: clear navigation, dependable interactions, and pages that work well on every screen.
          </p>
          <p className={styles.body}>
            My projects span online stores, nonprofit platforms, restaurant websites, and useful everyday tools. I aim to make every experience feel straightforward for the people using it and maintainable for the people behind it.
          </p>
          <div className={styles.skillsGrid}>
            {SKILLS.map((s) => (
              <div key={s.name} className={styles.skillCard}>
                <TechIcon name={s.icon} className={styles.skillIcon} aria-hidden="true" />
                <span>{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
