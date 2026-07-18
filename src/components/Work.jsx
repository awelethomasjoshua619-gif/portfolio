import { PROJECTS } from '../data'
import styles from './Work.module.css'

export default function Work() {
  return (
    <section id="work" className="section">
      <div className={styles.header}>
        <div>
          <p className="section-label">Selected Work</p>
          <h2 className={styles.headline}>
            Things I've<br /><em>built.</em>
          </h2>
        </div>
        <div className={styles.accent} aria-hidden="true">
          <span>React</span>
          <span>TypeScript</span>
          <span>CSS</span>
        </div>
      </div>

      <div className={styles.list}>
        {PROJECTS.map((p) => (
          <a key={p.num} href={p.href} className={styles.item} target="_blank" rel="noreferrer">
            <span className={styles.num}>{p.num}</span>
            <div className={styles.info}>
              <p className={styles.name}>{p.name}</p>
              <p className={styles.desc}>{p.desc}</p>
            </div>
            <div className={styles.tags}>
              {p.tags.map((t) => <span key={t}>{t}</span>)}
            </div>
            <span className={styles.arrow}>→</span>
          </a>
        ))}
      </div>
    </section>
  )
}
