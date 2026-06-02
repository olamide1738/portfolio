const skills = [
  {
    label: 'Languages',
    items: 'JavaScript, TypeScript, Dart, PHP',
  },
  {
    label: 'Mobile',
    items: 'React Native, Flutter',
  },
  {
    label: 'Web',
    items: 'React, Next.js, HTML5, CSS3, Tailwind CSS, WordPress',
  },
  {
    label: 'Backend & APIs',
    items: 'Node.js, Firebase, REST APIs, Sanity CMS',
  },
  {
    label: 'Tools',
    items: 'Git, GitHub, Figma, VS Code, Xcode, Android Studio',
  },
  {
    label: 'Practices',
    items: 'Responsive Design, Component Architecture, UI/UX Principles, Version Control',
  },
]

export default function Skills() {
  return (
    <div id="skills" className="section-wrap">
      <hr className="section-divider" />
      <div className="section">
        <p className="section-label">Skills</p>
        <div className="skills-list">
          {skills.map((s, i) => (
            <div
              key={s.label}
              className="skill-row reveal"
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <span className="skill-label">{s.label}</span>
              <span className="skill-items">{s.items}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
