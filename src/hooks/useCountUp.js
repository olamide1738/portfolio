import { useState, useEffect, useRef } from 'react'

export function useCountUp(target, duration = 1400) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    if (!target) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          let startTime = null

          const tick = (time) => {
            if (!startTime) startTime = time
            const progress = Math.min((time - startTime) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * target))
            if (progress < 1) requestAnimationFrame(tick)
            else setCount(target)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, duration])

  return { count, ref }
}
