const steps = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'We align on the problem before anything else: goals, users, constraints, and what success looks like. I ask a lot of questions upfront so there are no surprises later.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      "Wireframes and UI in Figma, working iteratively. I share early and often so you can redirect before we're deep into implementation.",
  },
  {
    number: '03',
    title: 'Build',
    description:
      'Clean, component-driven code with regular deploys to a preview URL. You can follow along in real time and give feedback on the actual product, not a mock.',
  },
  {
    number: '04',
    title: 'Polish',
    description:
      'Interactions, performance, responsiveness, edge cases. This is where good becomes finished. The details most people skip.',
  },
  {
    number: '05',
    title: 'Handoff',
    description:
      'Deployed, documented, and ready for your team. I stay available after launch for questions and follow-on work.',
  },
]

export default function Process() {
  return (
    <div id="process" className="section-wrap">
      <hr className="section-divider" />
      <div className="section">
        <p className="section-label">Process</p>
        <div className="process-list">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="process-row reveal"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <span className="process-number">{step.number}</span>
              <span className="process-title">{step.title}</span>
              <p className="process-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
