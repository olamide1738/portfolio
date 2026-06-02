import { useEffect, useRef } from 'react'

export default function CursorEffect() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    // Only on pointer devices
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mouseX = -100, mouseY = -100
    let ringX = -100, ringY = -100
    let hovering = false
    let rafId

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.left = mouseX + 'px'
      dot.style.top = mouseY + 'px'
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.1
      ringY += (mouseY - ringY) * 0.1
      ring.style.left = ringX + 'px'
      ring.style.top = ringY + 'px'
      rafId = requestAnimationFrame(animate)
    }

    const onEnter = () => {
      hovering = true
      dot.classList.add('cursor--hover')
      ring.classList.add('cursor--hover')
    }
    const onLeave = () => {
      hovering = false
      dot.classList.remove('cursor--hover')
      ring.classList.remove('cursor--hover')
    }

    const attachListeners = () => {
      document.querySelectorAll('a, button, [role="button"]').forEach((el) => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }

    document.addEventListener('mousemove', onMove)
    attachListeners()
    animate()

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
