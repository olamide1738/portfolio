import { useState, useEffect } from 'react'

function LiveClock() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString('en-US', {
          timeZone: 'Africa/Lagos',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
      )
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])
  return <>{time}</>
}

const STACK = ['React', 'React Native', 'Flutter', 'TypeScript', 'Dart']

export default function HeroVisual() {
  return (
    <div className="hv-root" aria-hidden="true">

      {/* Main profile card */}
      <div className="hv-card hv-profile">
        <div className="hv-glow" />
        <div className="hv-avatar">OO</div>
        <p className="hv-name">Olamide Owolabi</p>
        <p className="hv-role">Web &amp; Mobile Developer</p>
        <div className="hv-location-row">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{opacity:0.5}}>
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
          </svg>
          <span>Lagos, Nigeria</span>
        </div>
        <div className="hv-status-row">
          <span className="hv-dot" />
          <span>Available for work</span>
        </div>
      </div>

      {/* Live clock card */}
      <div className="hv-card hv-clock">
        <p className="hv-card-label">Local time</p>
        <p className="hv-clock-value"><LiveClock /></p>
        <p className="hv-card-sub">Africa/Lagos · UTC+1</p>
      </div>

      {/* Tech stack card */}
      <div className="hv-card hv-stack">
        <p className="hv-card-label">Stack</p>
        <div className="hv-tags">
          {STACK.map((s) => (
            <span key={s} className="hv-tag">{s}</span>
          ))}
        </div>
      </div>

    </div>
  )
}
