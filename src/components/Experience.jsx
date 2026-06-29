const jobs = [
  {
    company: 'Fusion23',
    role: 'Frontend & Mobile Developer',
    period: '2025 to Present',
    description:
      'Building web and mobile products for clients across various industries, delivering clean, performant applications using React and React Native.',
  },
  {
    company: 'Mactavis Digital',
    role: 'Frontend & Mobile Developer',
    period: '2021 to 2025',
    description:
      'Developed and maintained responsive web and mobile applications using React, Next.js, Tailwind CSS, React Native and Flutter. Built custom WordPress themes and plugins, optimised website performance (improving page load times by an average of 25%) and implemented SEO best practices across client projects.',
  },
]

export default function Experience() {
  return (
    <div id="experience" className="section-wrap">
      <hr className="section-divider" />
      <div className="section">
        <p className="section-label">Experience</p>
        <div className="exp-list">
          {jobs.map((job, i) => (
            <div key={job.company} className="exp-row reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="exp-left">
                <span className="exp-company">{job.company}</span>
                <span className="exp-role">{job.role}</span>
              </div>
              <div className="exp-center">
                <p className="exp-desc">{job.description}</p>
              </div>
              <span className="exp-period">{job.period}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
