import { useGitHubStats } from '../hooks/useGitHubStats'
import { useCountUp } from '../hooks/useCountUp'

function StatItem({ label, value }) {
  const { count, ref } = useCountUp(value ?? 0)
  return (
    <div className="gh-stat" ref={ref}>
      <span className="gh-stat-value">{value == null ? '–' : count}</span>
      <span className="gh-stat-label">{label}</span>
    </div>
  )
}

export default function GitHubStats() {
  const { stats, loading } = useGitHubStats('olamide1738')

  return (
    <div className={`gh-stats${loading ? ' gh-stats--loading' : ' gh-stats--loaded'}`}>
      <StatItem label="Public repos" value={stats?.repos ?? null} />
      <StatItem label="Followers"    value={stats?.followers ?? null} />
      <StatItem label="Following"    value={stats?.following ?? null} />
      <a href="https://github.com/olamide1738" className="gh-link" target="_blank" rel="noreferrer">
        View GitHub →
      </a>
    </div>
  )
}
