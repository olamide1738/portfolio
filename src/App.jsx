import { useEffect, useState } from 'react'
import { useSEO } from './hooks/useSEO'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Marquee from './components/Marquee'
import ScrollProgress from './components/ScrollProgress'
import CursorEffect from './components/CursorEffect'
import Intro from './components/Intro'
import NoiseOverlay from './components/NoiseOverlay'
import SpotlightCursor from './components/SpotlightCursor'
import Process from './components/Process'
import Notes from './components/Notes'
import ProjectPage from './pages/ProjectPage'
import { TransitionProvider } from './context/TransitionContext'
import './App.css'

function HomePage({ darkMode, onToggleDark }) {
  useSEO({ path: '/' })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar darkMode={darkMode} onToggleDark={onToggleDark} />
      <main>
        <Hero />
        <Projects />
        <Marquee />
        <About />
        <Experience />
        <Skills />
        <Process />
        <Notes />
        <Testimonials />
        <Contact />
      </main>
      <footer className="footer">
        <span className="footer-left">© {new Date().getFullYear()} Olamide Owolabi</span>
        <span className="footer-right">Lagos, Nigeria</span>
      </footer>
      <ScrollProgress />
    </>
  )
}

function AppInner() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark')
  const [showIntro, setShowIntro] = useState(() => !sessionStorage.getItem('intro-shown'))

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light')
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  // Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })
    let rafId
    const raf = (time) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)
    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  const toggle = () => setDarkMode((d) => !d)

  return (
    <TransitionProvider>
      <CursorEffect />
      <SpotlightCursor />
      <NoiseOverlay />
      {showIntro && (
        <Intro onDone={() => {
          sessionStorage.setItem('intro-shown', '1')
          setShowIntro(false)
        }} />
      )}
      <Routes>
        <Route path="/" element={<HomePage darkMode={darkMode} onToggleDark={toggle} />} />
        <Route path="/work/:slug" element={<ProjectPage darkMode={darkMode} onToggleDark={toggle} />} />
      </Routes>
    </TransitionProvider>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  )
}
