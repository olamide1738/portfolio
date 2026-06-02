import { useRef } from 'react'

export default function Magnetic({ children, strength = 0.3 }) {
  const ref = useRef(null)

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const dx = (e.clientX - (rect.left + rect.width / 2)) * strength
    const dy = (e.clientY - (rect.top + rect.height / 2)) * strength
    el.style.transition = 'transform 0.1s ease'
    el.style.transform = `translate(${dx}px, ${dy}px)`
  }

  const onLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transition = 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
    el.style.transform = 'translate(0, 0)'
  }

  return (
    <span ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} style={{ display: 'inline-flex' }}>
      {children}
    </span>
  )
}
