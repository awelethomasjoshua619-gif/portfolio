import ProjectPlanner from './ProjectPlanner'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className={styles.inner}>
        <div>
          <p className="section-label">Let's Connect</p>
          <h2 className={styles.headline}>
            Got a project<br />or just want to<br />
            <em>talk shop?</em>
          </h2>
        </div>

        <div>
          <p className={styles.body}>
            Have something in mind? Use the quick project starter and choose the options that fit. Your answers will be ready in one WhatsApp message, so we can take it from there.
          </p>
          <a className={styles.startLink} href="#project-planner">Start with a few quick choices <span aria-hidden="true">↓</span></a>
        </div>
      </div>
      <div className={styles.plannerWrap}>
        <ProjectPlanner />
      </div>
    </section>
  )
}
