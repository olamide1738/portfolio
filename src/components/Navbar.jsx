import { useState, useEffect } from 'react'
import Magnetic from './Magnetic'

const SunIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
)

const MoonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
)

const SECTIONS = ['hero', 'work', 'about', 'experience', 'skills', 'testimonials', 'contact']
const NAV_MAP = { work: 'work', about: 'about', experience: 'about', skills: 'about', testimonials: 'about', contact: 'contact' }

export default function Navbar({ darkMode, onToggleDark }) {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    let lastY = window.scrollY

    const onScroll = () => {
      const y = window.scrollY

      setScrolled(y > 24)
      if (y > lastY && y > 80) setHidden(true)
      else if (y < lastY) setHidden(false)
      lastY = y
      setMenuOpen(false)

      const offset = y + 120
      let current = ''
      for (const id of SECTIONS) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= offset) current = id
      }
      setActiveSection(NAV_MAP[current] || '')
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}${hidden ? ' navbar--hidden' : ''}`}>
      <a href="#hero" className="nav-logo" onClick={close}>Olamide</a>
      <div className="nav-right">
        <ul className="nav-links">
          {['Work', 'About', 'Contact'].map((label) => (
            <li key={label}>
              <Magnetic strength={0.4}>
                <a
                  href={`#${label.toLowerCase()}`}
                  className={activeSection === label.toLowerCase() ? 'nav-link--active' : ''}
                >
                  {label}
                </a>
              </Magnetic>
            </li>
          ))}
        </ul>
        <Magnetic strength={0.25}>
          <a href="/cv.pdf" download className="nav-cv-btn">Download CV</a>
        </Magnetic>
        <Magnetic strength={0.4}>
          <button className="dark-toggle" onClick={onToggleDark} aria-label="Toggle dark mode">
            {darkMode ? <SunIcon /> : <MoonIcon />}
          </button>
        </Magnetic>
        <button
          className={`nav-hamburger${menuOpen ? ' nav-hamburger--open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
      <div className={`nav-mobile-menu${menuOpen ? ' nav-mobile-menu--open' : ''}`}>
        {['Work', 'About', 'Contact'].map((label) => (
          <a
            key={label}
            href={`#${label.toLowerCase()}`}
            className="nav-mobile-link"
            onClick={close}
          >
            {label}
          </a>
        ))}
        <a href="/cv.pdf" download className="nav-mobile-cv" onClick={close}>
          Download CV
        </a>
      </div>
    </nav>
  )
}
