import { useState, useEffect } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

export function useScramble(target, duration = 1400, delay = 300) {
  const [text, setText] = useState(target)

  useEffect(() => {
    let startTime = null
    let rafId

    const animate = (time) => {
      if (!startTime) startTime = time
      const elapsed = time - startTime

      if (elapsed < delay) {
        rafId = requestAnimationFrame(animate)
        return
      }

      const progress = Math.min((elapsed - delay) / duration, 1)
      const settled = Math.floor(progress * target.length)

      let result = ''
      for (let i = 0; i < target.length; i++) {
        if (i < settled || target[i] === ' ' || target[i] === "'") {
          result += target[i]
        } else {
          result += CHARS[Math.floor(Math.random() * CHARS.length)]
        }
      }
      setText(result)

      if (progress < 1) {
        rafId = requestAnimationFrame(animate)
      } else {
        setText(target)
      }
    }

    rafId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafId)
  }, [target, duration, delay])

  return text
}
