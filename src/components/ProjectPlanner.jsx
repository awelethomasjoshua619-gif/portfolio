import { useState } from 'react'
import { CONTACT_LINKS } from '../data'
import styles from './ProjectPlanner.module.css'

const WHATSAPP_NUMBER = CONTACT_LINKS.find(({ label }) => label === 'WhatsApp').href.replace(/\D/g, '')

const PROJECT_TYPES = [
  'Business website',
  'Online store',
  'Portfolio',
  'Nonprofit website',
  'Landing page',
  'Web application',
  'Not sure yet',
]

const GOALS = [
  'Reach more customers',
  'Sell products or services',
  'Showcase my work',
  'Make my current site better',
  'Make a process easier',
]

const TIMELINES = ['As soon as possible', 'Within 1 month', 'In 1–3 months', 'Just exploring']

function Option({ selected, children, onClick, multiple = false }) {
  return (
    <button
      type="button"
      className={`${styles.option} ${selected ? styles.selected : ''}`}
      aria-pressed={selected}
      onClick={onClick}
    >
      <span className={styles.optionMark} aria-hidden="true">{selected ? '✓' : multiple ? '+' : '↗'}</span>
      {children}
    </button>
  )
}

export default function ProjectPlanner() {
  const [step, setStep] = useState(0)
  const [projectType, setProjectType] = useState('')
  const [goals, setGoals] = useState([])
  const [timeline, setTimeline] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [details, setDetails] = useState('')
  const [messageUrl, setMessageUrl] = useState('')

  const toggleGoal = (goal) => setGoals((current) =>
    current.includes(goal) ? current.filter((item) => item !== goal) : [...current, goal]
  )

  const submitBrief = (event) => {
    event.preventDefault()
    const message = [
      'Hi Awele! I’m interested in discussing a website project.',
      '',
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      `Interested in: ${projectType}`,
      `Goals: ${goals.length ? goals.join(', ') : 'Not sure yet'}`,
      `Timeline: ${timeline}`,
      details.trim() ? `A little more about it: ${details.trim()}` : '',
    ].filter(Boolean).join('\n')
    setMessageUrl(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`)
  }

  const start = (interested) => {
    if (interested) setStep(1)
    else setStep(-1)
  }

  return (
    <section id="project-planner" className={styles.planner} aria-labelledby="planner-title">
      <div className={styles.topline}>
        <span className={styles.eyebrow}>The project starter</span>
        <span className={styles.stepCount}>{step > 0 && step < 4 ? `0${step} / 03` : 'TAKES ABOUT A MINUTE'}</span>
      </div>

      {step === 0 && (
        <div className={styles.content}>
          <p className={styles.kicker}>A few quick questions</p>
          <h3 id="planner-title" className={styles.title}>Have a website<br /><em>in mind?</em></h3>
          <p className={styles.description}>Tell me what you’re thinking. No long email, no pressure to have every detail figured out.</p>
          <div className={styles.choiceRow}>
            <button className={styles.primaryButton} onClick={() => start(true)}>Yes, let’s talk <span aria-hidden="true">→</span></button>
            <button className={styles.quietButton} onClick={() => start(false)}>Just looking around</button>
          </div>
        </div>
      )}

      {step === -1 && (
        <div className={styles.content}>
          <p className={styles.kicker}>No rush</p>
          <h3 className={styles.title}>Have a look<br /><em>around.</em></h3>
          <p className={styles.description}>Whenever you’re ready, I’ll be here. You can explore my work or come back to this quick project starter.</p>
          <button className={styles.primaryButton} onClick={() => setStep(0)}>Back to the start <span aria-hidden="true">↗</span></button>
        </div>
      )}

      {step === 1 && (
        <div className={styles.content}>
          <p className={styles.kicker}>First, the big picture</p>
          <h3 id="planner-title" className={styles.title}>What kind of site<br /><em>do you need?</em></h3>
          <div className={styles.options}>
            {PROJECT_TYPES.map((type) => <Option key={type} selected={projectType === type} onClick={() => setProjectType(type)}>{type}</Option>)}
          </div>
          <div className={styles.controls}>
            <button className={styles.backButton} onClick={() => setStep(0)}>← Back</button>
            <button className={styles.primaryButton} disabled={!projectType} onClick={() => setStep(2)}>Next <span aria-hidden="true">→</span></button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className={styles.content}>
          <p className={styles.kicker}>Make it yours</p>
          <h3 id="planner-title" className={styles.title}>What should it<br /><em>help you do?</em></h3>
          <p className={styles.description}>Choose any that fit. You can skip this if you’re still figuring it out.</p>
          <div className={styles.options}>
            {GOALS.map((goal) => <Option key={goal} multiple selected={goals.includes(goal)} onClick={() => toggleGoal(goal)}>{goal}</Option>)}
          </div>
          <div className={styles.controls}>
            <button className={styles.backButton} onClick={() => setStep(1)}>← Back</button>
            <button className={styles.primaryButton} onClick={() => setStep(3)}>Next <span aria-hidden="true">→</span></button>
          </div>
        </div>
      )}

      {step === 3 && !messageUrl && (
        <form className={styles.content} onSubmit={submitBrief}>
          <p className={styles.kicker}>Nearly there</p>
          <h3 id="planner-title" className={styles.title}>When, and how<br /><em>can I reach you?</em></h3>
          <fieldset className={styles.timelineGroup}>
            <legend className={styles.fieldLabel}>When are you hoping to start?</legend>
            <div className={styles.options}>
              {TIMELINES.map((option) => <Option key={option} selected={timeline === option} onClick={() => setTimeline(option)}>{option}</Option>)}
            </div>
          </fieldset>
          <div className={styles.fields}>
            <label className={styles.fieldLabel}>Your name<input autoComplete="name" required value={name} onChange={(event) => setName(event.target.value)} placeholder="What should I call you?" /></label>
            <label className={styles.fieldLabel}>Email address<input type="email" autoComplete="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" /></label>
            <label className={`${styles.fieldLabel} ${styles.fullField}`}>Anything else I should know? <span className={styles.optional}>(optional)</span><textarea rows="3" value={details} onChange={(event) => setDetails(event.target.value)} placeholder="A short note is perfect. You can share more later." /></label>
          </div>
          <p className={styles.privacyNote}>Your details are only included in the WhatsApp message you choose to send.</p>
          <div className={styles.controls}>
            <button type="button" className={styles.backButton} onClick={() => setStep(2)}>← Back</button>
            <button type="submit" className={styles.primaryButton} disabled={!timeline}>Prepare my message <span aria-hidden="true">→</span></button>
          </div>
        </form>
      )}

      {step === 3 && messageUrl && (
        <div className={styles.content}>
          <p className={styles.kicker}>Your brief is ready</p>
          <h3 id="planner-title" className={styles.title}>One last<br /><em>little step.</em></h3>
          <p className={styles.description}>I’ve put your answers into a WhatsApp message. Open it and tap send to start our conversation.</p>
          <a className={styles.primaryButton} href={messageUrl} target="_blank" rel="noopener noreferrer">Open WhatsApp <span aria-hidden="true">↗</span></a>
          <button className={styles.backButton} onClick={() => setMessageUrl('')}>Edit my answers</button>
        </div>
      )}
    </section>
  )
}
