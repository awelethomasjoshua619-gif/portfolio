import { STATS } from '../data'
import styles from './Stats.module.css'

function StatItem({ num, suffix, label, desc }) {
  return (
    <div className={styles.item}>
      <span className={styles.number}>
        {num}<span>{suffix}</span>
      </span>
      <span className={styles.label}>{label}</span>
      {desc && <span className={styles.desc}>{desc}</span>}
    </div>
  )
}

export default function Stats() {
  return (
    <div className={styles.row}>
      {STATS.map(({ num, suffix, label, desc }) => (
        <StatItem key={label} num={num} suffix={suffix} label={label} desc={desc} />
      ))}
    </div>
  )
}
