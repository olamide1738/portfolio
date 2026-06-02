import { useState, useEffect } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0)
      setVisible(scrollTop > 300)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const size = 46
  const stroke = 2.5
  const r = (size - stroke) / 2
  const circumference = 2 * Math.PI * r
  const filled = circumference * progress

  return (
    <button
      className={`scroll-fab${visible ? ' visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
    >
      <svg className="scroll-fab-ring" width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="var(--border)" strokeWidth={stroke} />
        <circle
          cx={size/2} cy={size/2} r={r}
          fill="none" stroke="var(--text)" strokeWidth={stroke}
          strokeDasharray={`${filled} ${circumference}`}
          strokeLinecap="round"
          transform={`rotate(-90 ${size/2} ${size/2})`}
        />
      </svg>
      <svg className="scroll-fab-arrow" viewBox="0 0 16 16" fill="none" width="14" height="14">
        <path d="M8 12V4M4 7l4-4 4 4" stroke="var(--text)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  )
}
