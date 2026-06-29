const jobs = [
  {
    company: 'Studio Sabi',
    role: 'CEO',
    period: '2025 to Present',
    description:
      'Founded and leading Studio Sabi, a creative development studio delivering web and mobile products for clients across various industries. Overseeing the full business from client relationships and project direction through to hands-on development and delivery.',
  },
  {
    company: 'Fusion23',
    role: 'Lead Frontend Engineer',
    period: '2025 to Present',
    description:
      'Leading frontend development on web and mobile products for clients across various industries. Responsible for the full development cycle on each engagement, from initial architecture decisions through to deployment and handoff. Delivering clean, performant applications using React on the web and React Native on mobile, with a consistent focus on code quality, responsiveness, and user experience across every project.',
  },
  {
    company: 'Mactavis Digital',
    role: 'Frontend & Mobile Developer',
    period: '2021 to 2025',
    description:
      'Developed and maintained responsive web and mobile applications across a wide range of client projects, working primarily with React, Next.js and Tailwind CSS on the web, and React Native and Flutter on mobile. Built and customised WordPress themes and plugins for clients who needed CMS-driven sites with bespoke functionality. Took ownership of performance across the portfolio, identifying and resolving bottlenecks that improved average page load times by 25%. Applied SEO best practices consistently across projects, covering semantic markup, metadata, page speed and crawlability.',
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
