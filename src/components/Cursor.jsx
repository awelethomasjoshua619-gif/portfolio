import { useEffect, useState } from 'react'
import styles from './Cursor.module.css'

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [expanded, setExpanded] = useState(false)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setEnabled(finePointer && !reducedMotion)
  }, [])

  useEffect(() => {
    if (!enabled) return

    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY })
    const onOver = (e) => setExpanded(Boolean(e.target.closest('a, button')))

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <div
      className={`${styles.cursor} ${expanded ? styles.expanded : ''}`}
      style={{ left: pos.x, top: pos.y }}
    />
  )
}
