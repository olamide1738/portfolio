import { useEffect, useRef } from 'react'
import { usePageTransition } from '../context/TransitionContext'
import { projects } from '../data/projects'

export default function Projects() {
  const { go } = usePageTransition()
  const gridRef = useRef(null)

  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return
    const cards = Array.from(grid.querySelectorAll('.work-card'))
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cards.forEach((card, i) => {
            setTimeout(() => card.classList.add('work-card--visible'), i * 120)
          })
          observer.disconnect()
        }
      },
      { threshold: 0.05 }
    )
    observer.observe(grid)
    return () => observer.disconnect()
  }, [])

  const onTilt = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    e.currentTarget.style.transition = 'transform 0.1s ease'
    e.currentTarget.style.transform =
      `perspective(900px) rotateX(${-y * 7}deg) rotateY(${x * 7}deg) scale(1.02)`
  }

  const onTiltReset = (e) => {
    e.currentTarget.style.transition =
      'transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1)'
    e.currentTarget.style.transform =
      'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)'
  }

  return (
    <div id="work" className="section-wrap">
      <hr className="section-divider" />
      <div className="section">
        <div className="work-header reveal">
          <span className="work-header-bold">Featured work</span>
          <span className="work-header-muted"> · 2025</span>
        </div>
        <div className="work-grid" ref={gridRef}>
          {projects.map((p) => (
            <div
              key={p.slug}
              className="work-card"
              onClick={() => go(`/work/${p.slug}`)}
              onMouseMove={onTilt}
              onMouseLeave={onTiltReset}
              role="link"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && go(`/work/${p.slug}`)}
            >
              <div className="work-card-image-wrap" style={{ aspectRatio: p.ratio }}>
                <img src={p.image} alt={p.title} className="work-card-image" loading="lazy" />
                <div className="work-card-hover-label">
                  <span>View case study</span>
                  <span>↗</span>
                </div>
              </div>
              <div className="work-card-body">
                <p className="work-card-title">{p.title}</p>
                <p className="work-card-category">{p.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
