const testimonials = [
  {
    quote:
      'Olamide delivered a website that exceeded every expectation. He understood our brand deeply and brought it to life with precision,the result is polished, professional and exactly what we needed.',
    author: 'Client',
    company: 'Arabella Landscape Limited',
  },
  {
    quote:
      'Working with Olamide was seamless from start to finish. He took the brief, asked the right questions, and delivered clean, well-structured code on time. The Sanity integration in particular made our team\'s life so much easier.',
    author: 'Client',
    company: 'Building Design Workshop',
  },
  {
    quote:
      'Olamide has a rare combination of strong technical skills and an eye for design. He doesn\'t just build what you ask for,he thinks through the product and flags things you hadn\'t considered. A genuinely collaborative developer.',
    author: 'Colleague',
    company: 'Mactavis Digital',
  },
]

export default function Testimonials() {
  return (
    <div id="testimonials" className="section-wrap">
      <hr className="section-divider" />
      <div className="section">
        <p className="section-label">Testimonials</p>
        <div className="testi-list">
          {testimonials.map((t, i) => (
            <div key={i} className="testi-row reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <p className="testi-quote">"{t.quote}"</p>
              <div className="testi-author">
                <span className="testi-name">{t.author}</span>
                <span className="testi-company">{t.company}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
