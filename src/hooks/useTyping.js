import { useState, useEffect } from 'react'

export function useTyping(words, speed = 90) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const current = words[wordIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.slice(0, text.length + 1))
        if (text.length + 1 === current.length) {
          setPaused(true)
          setTimeout(() => { setPaused(false); setIsDeleting(true) }, 1800)
        }
      } else {
        setText(current.slice(0, text.length - 1))
        if (text.length - 1 === 0) {
          setIsDeleting(false)
          setWordIndex((i) => (i + 1) % words.length)
        }
      }
    }, isDeleting ? speed * 0.5 : speed)
    return () => clearTimeout(timeout)
  }, [text, isDeleting, wordIndex, words, speed, paused])

  return text
}
