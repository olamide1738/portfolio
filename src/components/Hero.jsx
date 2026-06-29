import { useEffect, useRef } from 'react'
import HeroVisual from './HeroVisual'
import { useScramble } from '../hooks/useScramble'

const SCROLL_WORDS = "a frontend & mobile developer with 5 years of experience, building clean, polished digital products for startups and businesses.".split(' ')

export default function Hero() {
  const sectionRef = useRef(null)
  const scrambled = useScramble("I'm Olamide", 1300, 400)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const words = section.querySelectorAll('.scroll-word')

    const onScroll = () => {
      const h = section.offsetHeight
      const progress = Math.min(window.scrollY / (h * 0.6), 1)
      words.forEach((word, i) => {
        word.classList.toggle('lit', progress >= i / words.length)
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="hero" className="hero" ref={sectionRef}>
      <div className="hero-left">
        <h1 className="hero-heading">
          <span className="hero-black">{scrambled}</span>
          {SCROLL_WORDS.map((word, i) => (
            <span key={i} className="scroll-word">{' '}{word}</span>
          ))}
        </h1>
      </div>
      <HeroVisual />
    </section>
  )
}
