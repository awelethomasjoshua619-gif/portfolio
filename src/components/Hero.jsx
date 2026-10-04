import styles from './Hero.module.css'
import avatar from '../avatar.jpg'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>Full-stack developer <span className={styles.eyebrowDivider}>/</span> Open to work</p>
        <h1 className={styles.title}>
          Thoughtful<br />
          websites.<br />
          <em>Built for people.</em>
        </h1>
        <p className={styles.sub}>
          I’m Awele, a full-stack developer building useful web applications from the interface through to the server and data behind it.
        </p>
        <div className={styles.actions}>
          <a href="#work" className={styles.cta}>Explore my work <span className={styles.arrow} aria-hidden="true">↗</span></a>
          <a href="#project-planner" className={styles.textLink}>Have a project? <span aria-hidden="true">→</span></a>
        </div>
      </div>

      <div className={styles.portraitArea} aria-label="Portrait of Awele Thomas Joshua">
        <div className={styles.portraitFrame}>
          <img src={avatar} alt="Awele Thomas Joshua" className={styles.portrait} />
        </div>
      </div>

      <div className={styles.bottom}>
        <span className={styles.location}>Based in Nigeria <span aria-hidden="true">↗</span></span>
        <span className={styles.scrollHint}><span className={styles.scrollLine} /> Scroll to explore</span>
      </div>
    </section>
  )
}
