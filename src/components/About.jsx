import GitHubStats from './GitHubStats'
import ContributionBoard from './ContributionBoard'

export default function About() {
  return (
    <div id="about" className="section-wrap">
      <hr className="section-divider" />
      <div className="section">
        <div className="about-grid">
          <h2 className="about-heading reveal">About me</h2>
          <div className="about-content">
            <p className="about-text-large reveal">
              I'm a front-end and mobile developer with 5 years of experience building
              responsive web and mobile applications. I specialise in React, Next.js,
              and Tailwind CSS on the web, and Flutter and React Native on mobile —
              translating designs into polished, performant products.
            </p>
            <p className="about-text-small reveal">
              My approach is grounded in clean code and close collaboration. I've worked
              across the full project lifecycle — from concept to deployment — on
              everything from marketing websites and dashboards to cross-platform mobile
              apps. I care about the details: performance, accessibility, and code that
              others can actually maintain.
            </p>
            <p className="about-text-small reveal">
              I'm currently studying Computer Science at the University of Lagos while
              keeping my practice sharp by staying current with the latest frameworks,
              tools, and industry best practices.
            </p>
            <GitHubStats />
            <ContributionBoard />
          </div>
        </div>
      </div>
    </div>
  )
}
