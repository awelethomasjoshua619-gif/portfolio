import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>

      <div className={styles.content}>
        <p className={styles.eyebrow}>Frontend Developer · Open to Work</p>
        <h1 className={styles.title}>
          Frontend developer<br />
          building clean and<br />
          functional <em>user</em><br />
          interfaces.
        </h1>
        <p className={styles.sub}>
          I'm Awele, a developer focused on crafting responsive web experiences with React, semantic code, and robust layout systems. I focus on clean structure and reliable interactive states.
        </p>
      </div>

      <div className={styles.bottom}>
        <a href="#work" className={styles.cta}>
          View My Work
          <span className={styles.arrow}>→</span>
        </a>
        <span className={styles.scrollHint}>
          <span className={styles.scrollLine} />
          Scroll
        </span>
      </div>
    </section>
  )
}
