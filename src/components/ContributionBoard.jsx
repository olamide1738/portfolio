import { useGitHubContributions } from '../hooks/useGitHubContributions'

// GitHub dark-mode contribution colours
const LEVEL_COLORS = ['#1e2227', '#0e4429', '#006d32', '#26a641', '#39d353']

// Build a placeholder skeleton (26 weeks of empty cells)
const SKELETON = Array.from({ length: 26 }, () => Array.from({ length: 7 }, () => ({ level: 0, count: 0, date: '' })))

export default function ContributionBoard() {
  const { contributions, total, loading } = useGitHubContributions('olamide1738')

  // Group into week columns of 7 days, show last 26 weeks
  const weeks = (() => {
    const days = loading || !contributions ? SKELETON.flat() : contributions.slice(-182)
    const cols = []
    for (let i = 0; i < days.length; i += 7) cols.push(days.slice(i, i + 7))
    return cols
  })()

  return (
    <div className="contrib-board">
      <div className="contrib-header">
        <span className="contrib-title">GitHub activity</span>
        {!loading && total != null && (
          <span className="contrib-total">{total.toLocaleString()} contributions this year</span>
        )}
      </div>

      <div className="contrib-grid" style={{ opacity: loading ? 0.3 : 1, transition: 'opacity 0.4s' }}>
        {weeks.map((week, wi) => (
          <div key={wi} className="contrib-col">
            {week.map((day, di) => (
              <div
                key={di}
                className="contrib-cell"
                style={{ background: LEVEL_COLORS[day.level ?? 0] }}
                title={day.date ? `${day.count} contributions on ${day.date}` : ''}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="contrib-legend">
        <span className="contrib-legend-label">Less</span>
        {LEVEL_COLORS.map((c, i) => (
          <div key={i} className="contrib-cell contrib-cell--sm" style={{ background: c }} />
        ))}
        <span className="contrib-legend-label">More</span>
      </div>
    </div>
  )
}
