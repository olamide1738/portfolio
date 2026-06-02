const stats = [
  { value: '3+', label: 'Projects Shipped' },
  { value: '2+', label: 'Years Building' },
  { value: '3', label: 'Tech Stacks' },
]

export default function Stats() {
  return (
    <div className="stats-bar">
      <div className="container">
        <div className="stats-grid">
          {stats.map(({ value, label }, i) => (
            <div key={label} className="stat-item reveal" style={{ transitionDelay: `${i * 0.12}s` }}>
              <span className="stat-value">{value}</span>
              <span className="stat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
