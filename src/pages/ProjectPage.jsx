import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { projects } from '../data/projects'
import Navbar from '../components/Navbar'
import ScrollProgress from '../components/ScrollProgress'
import { usePageTransition } from '../context/TransitionContext'
import { useSEO } from '../hooks/useSEO'

export default function ProjectPage({ darkMode, onToggleDark }) {
  const { slug } = useParams()
  const { go } = usePageTransition()
  const index = projects.findIndex((p) => p.slug === slug)
  const project = projects[index]
  const prev = projects[index - 1]
  const next = projects[index + 1]

  useSEO({
    title: project ? `${project.title} — ${project.category}` : 'Project',
    description: project ? project.overview.slice(0, 155).trimEnd() + '…' : undefined,
    path: `/work/${slug}`,
    image: project?.image,
  })

  useEffect(() => { window.scrollTo(0, 0) }, [slug])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [slug])

  if (!project) return (
    <div style={{ padding: '120px 60px', textAlign: 'center' }}>
      <p>Project not found.</p>
      <button onClick={() => go('/')}>← Back home</button>
    </div>
  )

  return (
    <>
      <Navbar darkMode={darkMode} onToggleDark={onToggleDark} />
      <main className="pp-wrap">
        <div className="pp-back-row reveal">
          <button onClick={() => go('/')} className="pp-back">← Work</button>
        </div>

        <div className="pp-header reveal">
          <div className="pp-meta">
            <span className="pp-category">{project.category}</span>
            <span className="pp-year">{project.year}</span>
          </div>
          <h1 className="pp-title">{project.title}</h1>
          {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer" className="pp-live-link">
              Visit site ↗
            </a>
          )}
        </div>

        <div className="pp-image-wrap reveal">
          <img src={project.image} alt={project.title} className="pp-image" />
        </div>

        <div className="pp-content">
          <div className="pp-section pp-section--full reveal">
            <h2 className="pp-section-title">Overview</h2>
            <p className="pp-text">{project.overview}</p>
          </div>

          <div className="pp-section reveal">
            <h2 className="pp-section-title">What I did</h2>
            <p className="pp-text">{project.what}</p>
          </div>

          {project.outcome && (
            <div className="pp-section reveal">
              <h2 className="pp-section-title">Outcome</h2>
              <p className="pp-text">{project.outcome}</p>
            </div>
          )}

          <div className="pp-section reveal">
            <h2 className="pp-section-title">Services</h2>
            <div className="pp-tags">
              {project.services.map((s) => <span key={s} className="pp-tag">{s}</span>)}
            </div>
          </div>

          <div className="pp-section reveal">
            <h2 className="pp-section-title">Tech stack</h2>
            <div className="pp-tags">
              {project.tech.map((t) => <span key={t} className="pp-tag">{t}</span>)}
            </div>
          </div>
        </div>

        <div className="pp-nav">
          {prev ? (
            <button onClick={() => go(`/work/${prev.slug}`)} className="pp-nav-link">
              <span className="pp-nav-dir">← Previous</span>
              <span className="pp-nav-name">{prev.title}</span>
            </button>
          ) : <span />}
          {next ? (
            <button onClick={() => go(`/work/${next.slug}`)} className="pp-nav-link pp-nav-link--right">
              <span className="pp-nav-dir">Next →</span>
              <span className="pp-nav-name">{next.title}</span>
            </button>
          ) : <span />}
        </div>
      </main>
      <ScrollProgress />
    </>
  )
}
