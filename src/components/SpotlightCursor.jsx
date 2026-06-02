import { useEffect, useRef } from 'react'

export default function SpotlightCursor() {
  const spotRef = useRef(null)

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    const spot = spotRef.current
    if (!spot) return

    let x = -999, y = -999
    let cx = -999, cy = -999
    let rafId

    const onMove = (e) => {
      x = e.clientX
      y = e.clientY
    }

    const animate = () => {
      cx += (x - cx) * 0.06
      cy += (y - cy) * 0.06
      spot.style.transform = `translate(${cx}px, ${cy}px)`
      rafId = requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', onMove)
    rafId = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return <div ref={spotRef} className="spotlight-cursor" aria-hidden="true" />
}
