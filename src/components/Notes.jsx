import { notes } from '../data/notes'

export default function Notes() {
  return (
    <div id="notes" className="section-wrap">
      <hr className="section-divider" />
      <div className="section">
        <p className="section-label">Notes</p>
        <div className="notes-grid">
          {notes.map((note, i) => (
            <article
              key={note.slug}
              className="note-card reveal"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="note-card-top">
                <span className="note-category">{note.category}</span>
                <span className="note-meta">{note.date} · {note.readTime}</span>
              </div>
              <h3 className="note-title">{note.title}</h3>
              <p className="note-excerpt">{note.excerpt}</p>
              <span className="note-read-link">Read &rarr;</span>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
