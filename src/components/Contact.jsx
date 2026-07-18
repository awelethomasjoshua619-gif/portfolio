import { useEffect, useRef } from 'react'
import { CONTACT_LINKS } from '../data'
import styles from './Contact.module.css'

export default function Contact() {
  const revealRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.12 }
    )
    revealRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const addRef = (el) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el)
  }

  return (
    <section id="contact" className="section">
      <div className={styles.inner}>
        <div className="reveal" ref={addRef}>
          <p className="section-label">Let's Connect</p>
          <h2 className={styles.headline}>
            Got a project<br />or just want to<br />
            <em>talk shop?</em>
          </h2>
          <div className={styles.accentDecor} aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className="reveal" ref={addRef}>
          <p className={styles.body}>
            I'm open to frontend developer opportunities and contract work. If you have an opening, want to discuss a project, or just want to connect over React and CSS—reach out.
          </p>
          <div className={styles.links}>
            {CONTACT_LINKS.map(({ label, href }) => {
              const isMail = href.startsWith('mailto:')
              return (
                <a
                  key={label}
                  href={href}
                  target={isMail ? undefined : '_blank'}
                  rel={isMail ? undefined : 'noopener noreferrer'}
                  className={styles.link}
                >
                  <span className={styles.linkLabel}>{label}</span>
                  <span className={styles.linkArrow} aria-hidden="true">→</span>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
