import { PROJECTS } from '../data'
import styles from './Work.module.css'

export default function Work() {
  return (
    <section id="work" className="section">
      <div className={styles.header}>
        <div>
          <p className="section-label">Selected Work</p>
          <h2 className={styles.headline}>
            The work,<br /><em>in context.</em>
          </h2>
        </div>
        <p className={styles.intro}>Live previews, the tools behind them, and a few of the real problems I solved along the way.</p>
      </div>

      <div className={styles.list}>
        {PROJECTS.map((project) => (
          <article key={project.num} className={styles.item}>
            <a
              className={styles.previewLink}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.name} website in a new tab`}
            >
              <span className={styles.browserBar} aria-hidden="true">
                <span className={styles.address}>{new URL(project.href).hostname}</span>
                <span className={styles.openMark}>↗</span>
              </span>
              <span className={`${styles.preview} ${styles[`preview${Number(project.num)}`]}`} aria-hidden="true">
                <iframe
                  src={project.href}
                  title={`${project.name} live preview`}
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin"
                  referrerPolicy="no-referrer"
                  tabIndex={-1}
                />
                <span className={styles.previewHint}>Open live site <span aria-hidden="true">↗</span></span>
              </span>
            </a>

            <div className={styles.info}>
              <div className={styles.cardHeading}>
                <div>
                  <p className={styles.type}>{project.type}</p>
                  <h3 className={styles.name}>{project.name}</h3>
                </div>
                <span className={styles.number}>{project.num}</span>
              </div>

              <p className={styles.desc}>{project.desc}</p>

              <div className={styles.workBlock}>
                <p className={styles.metaLabel}>What I built</p>
                <ul className={styles.workList}>
                  {project.work.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>

              <div className={styles.stackBlock}>
                <p className={styles.metaLabel}>Stack used</p>
                <dl className={styles.stackList}>
                  {project.stack.map(({ area, tools }) => (
                    <div className={styles.stackRow} key={area}>
                      <dt>{area}</dt>
                      <dd>{tools.join(' · ')}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className={styles.challenge}>
                <p className={styles.metaLabel}>A challenge I worked through</p>
                <p>{project.challenge}</p>
              </div>

              <a className={styles.visitLink} href={project.href} target="_blank" rel="noopener noreferrer">
                Visit project <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
