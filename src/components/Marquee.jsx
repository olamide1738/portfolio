const items = [
  'React', 'React Native', 'Flutter', 'TypeScript', 'JavaScript',
  'Dart', 'Node.js', 'Firebase', 'Tailwind CSS', 'Figma', 'Next.js', 'Sanity CMS',
]

const doubled = [...items, ...items]

export default function Marquee() {
  return (
    <div className="marquee-outer">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="marquee-sep">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
