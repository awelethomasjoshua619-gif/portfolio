import { useRef, useEffect, useState } from 'react'
import { STATS } from '../data'
import styles from './Stats.module.css'

function StatItem({ num, suffix, label, desc }) {
  const [displayNum, setDisplayNum] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef(null)
  const frameRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          animateCount()
        }
      },
      { threshold: 0.4 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [hasAnimated])

  const animateCount = () => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    const numValue = parseInt(num)
    const duration = prefersReducedMotion ? 0 : 1800 // ms

    if (duration === 0) {
      setDisplayNum(numValue)
      return
    }

    const startTime = performance.now()

    const easeOutQuad = (t) => t * (2 - t)

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = easeOutQuad(progress)
      const current = Math.floor(eased * numValue)

      setDisplayNum(current)

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate)
      }
    }

    frameRef.current = requestAnimationFrame(animate)

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }

  return (
    <div className={styles.item} ref={ref}>
      <span className={styles.number}>
        <span>{suffix}</span>{displayNum}
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
