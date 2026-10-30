import styles from './Certificate.module.css'

const COMPLETED_CERTIFICATES = [
  {
    id: 'meta-front-end',
    title: 'Introduction to Front-End Development',
    issuer: 'Meta · Coursera',
    date: 'Oct 9, 2026',
    credentialId: '9D7MZOXKHJWW',
    image: '/certificates/meta-introduction-to-front-end-development.webp',
    document: '/certificates/meta-introduction-to-front-end-development.pdf',
    verification: 'https://coursera.org/verify/9D7MZOXKHJWW',
  },
  {
    id: 'ibm-introduction-to-artificial-intelligence',
    title: 'Introduction to Artificial Intelligence (AI)',
    issuer: 'IBM · Coursera',
    date: 'Oct 30, 2026',
    credentialId: 'TNA3WN6IECOF',
    image: '/certificates/ibm-introduction-to-artificial-intelligence.jpg',
    document: '/certificates/ibm-introduction-to-artificial-intelligence.pdf',
    verification: 'https://coursera.org/verify/TNA3WN6IECOF',
  },
]

const UPCOMING_CERTIFICATES = [
  {
    title: 'Foundations of AI and Machine Learning',
    issuer: 'Microsoft',
    field: 'AI & Machine Learning',
    progress: 12,
    platform: 'Coursera',
  },
  {
    title: 'Generative AI: Introduction and Applications',
    issuer: 'IBM',
    field: 'Generative AI',
    progress: 42,
    platform: 'Coursera',
  },
  {
    title: 'Building Web Applications in PHP',
    issuer: 'University of Michigan',
    field: 'Backend Web Development',
    progress: 1,
    platform: 'Coursera',
  },
  {
    title: 'Ethical Hacking with Kali Linux',
    issuer: 'IBM',
    field: 'Cybersecurity',
    progress: 13,
    platform: 'Coursera',
  },
  {
    title: 'Introduction to Ethical Hacking Principles',
    issuer: 'SkillUp EdTech',
    field: 'Cybersecurity',
    progress: 42,
    platform: 'Coursera',
  },
  {
    title: 'Basic Robotic Behaviors and Odometry',
    issuer: 'University of Colorado Boulder',
    field: 'Robotics & Odometry',
    progress: 24,
    platform: 'Coursera',
  },
]

export default function Certificate() {
  return (
    <section id="certificate" className={`section ${styles.section}`}>
      <p className="section-label">Certificates</p>

      <div className={styles.header}>
        <div className={styles.headerText}>
          <h2 className={styles.headline}>Learning,<br /><em>put to work.</em></h2>
          <p className={styles.intro}>
            Verified credentials and active specializations advancing my engineering expertise.
          </p>
        </div>
      </div>

      {/* ─── Completed Certificates (Compact Grid to accommodate others) ─── */}
      <div className={styles.completedSection}>
        <div className={styles.sectionSubhead}>
          <span className={styles.statusPillVerified}>Verified</span>
          <h3>Completed Credentials</h3>
        </div>

        <div className={styles.completedGrid}>
          {COMPLETED_CERTIFICATES.map((cert) => (
            <article key={cert.id} className={styles.card}>
              <a
                className={styles.certificatePreview}
                href={cert.document}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${cert.title} certificate PDF`}
              >
                <img
                  src={cert.image}
                  alt={`${cert.title} certificate issued by ${cert.issuer}`}
                  loading="lazy"
                />
                <span className={styles.openLabel}>View PDF <span aria-hidden="true">↗</span></span>
              </a>

              <div className={styles.details}>
                <div>
                  <p className={styles.issuer}>{cert.issuer}</p>
                  <h4>{cert.title}</h4>
                </div>

                <dl className={styles.metadata}>
                  <div><dt>Issued</dt><dd>{cert.date}</dd></div>
                  <div><dt>Credential ID</dt><dd>{cert.credentialId}</dd></div>
                </dl>

                <a
                  className={styles.verifyLink}
                  href={cert.verification}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Verify credential <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ─── In-Progress & Upcoming Certificates ─── */}
      <div className={styles.upcomingSection}>
        <div className={styles.upcomingHeader}>
          <div className={styles.upcomingTitleWrap}>
            <div className={styles.upcomingBadge}>
              <span className={styles.upcomingBadgeDot} />
              In Progress
            </div>
            <h3 className={styles.upcomingTitle}>Upcoming Certificates</h3>
            <p className={styles.upcomingSubtitle}>
              Certifications currently in progress that will soon be added to my verified list:
            </p>
          </div>
          <span className={styles.upcomingCounter}>
            {UPCOMING_CERTIFICATES.length} Courses in Progress
          </span>
        </div>

        <div className={styles.upcomingGrid}>
          {UPCOMING_CERTIFICATES.map((cert) => (
            <div key={cert.title} className={styles.upcomingCard}>
              <div>
                <div className={styles.cardTop}>
                  <span className={styles.issuerTag}>{cert.issuer}</span>
                  <span className={styles.platformTag}>{cert.platform}</span>
                </div>
                <h5>{cert.title}</h5>
                <span className={styles.fieldTag}>{cert.field}</span>
              </div>

              <div className={styles.progressContainer}>
                <div className={styles.progressInfo}>
                  <span className={styles.progressStatus}>In Progress</span>
                  <span className={styles.progressPercent}>{cert.progress}%</span>
                </div>
                <div
                  className={styles.progressBar}
                  role="progressbar"
                  aria-valuenow={cert.progress}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className={styles.progressFill}
                    style={{ width: `${cert.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
