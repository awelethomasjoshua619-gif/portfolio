import styles from './Certificate.module.css'

const CERTIFICATE = {
  title: 'Introduction to Front-End Development',
  issuer: 'Meta · Coursera',
  date: 'October 9, 2026',
  credentialId: '9D7MZOXKHJWW',
  image: '/certificates/meta-introduction-to-front-end-development.webp',
  document: '/certificates/meta-introduction-to-front-end-development.pdf',
  verification: 'https://coursera.org/verify/9D7MZOXKHJWW',
}

export default function Certificate() {
  return (
    <section id="certificate" className={`section ${styles.section}`}>
      <p className="section-label">Certificate</p>

      <div className={styles.header}>
        <h2 className={styles.headline}>Learning,<br /><em>put to work.</em></h2>
        <p className={styles.intro}>
          A Meta course certificate with a public verification link, alongside the practical work in my portfolio.
        </p>
      </div>

      <article className={styles.card}>
        <a
          className={styles.certificatePreview}
          href={CERTIFICATE.document}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${CERTIFICATE.title} certificate PDF`}
        >
          <img src={CERTIFICATE.image} alt={`${CERTIFICATE.title} certificate issued by Meta through Coursera`} loading="lazy" />
          <span className={styles.openLabel}>View certificate <span aria-hidden="true">↗</span></span>
        </a>

        <div className={styles.details}>
          <p className={styles.issuer}>{CERTIFICATE.issuer}</p>
          <h3>{CERTIFICATE.title}</h3>
          <dl className={styles.metadata}>
            <div><dt>Issued</dt><dd>{CERTIFICATE.date}</dd></div>
            <div><dt>Credential ID</dt><dd>{CERTIFICATE.credentialId}</dd></div>
          </dl>
          <a className={styles.verifyLink} href={CERTIFICATE.verification} target="_blank" rel="noopener noreferrer">
            Verify credential <span aria-hidden="true">↗</span>
          </a>
        </div>
      </article>
    </section>
  )
}
