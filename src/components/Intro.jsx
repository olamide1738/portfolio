import { useState, useEffect } from 'react'

export default function Intro({ onDone }) {
  const [out, setOut] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => {
      setOut(true)
      setTimeout(onDone, 750)
    }, 1600)
    return () => clearTimeout(t)
  }, [onDone])

  return (
    <div className={`intro${out ? ' intro--out' : ''}`}>
      <span className="intro-initials">OO</span>
    </div>
  )
}
