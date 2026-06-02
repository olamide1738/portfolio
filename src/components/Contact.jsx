import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      // Get your form ID from https://formspree.io and replace YOUR_FORM_ID
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div id="contact">
      <hr className="section-divider" style={{ maxWidth: 'calc(1160px + 120px)', margin: '0 auto' }} />
      <div className="contact-section">
        <h2 className="contact-heading reveal">
          <span className="hero-black">Have a project in mind? </span>
          <span className="hero-muted">Let's work together.</span>
        </h2>

        {status === 'sent' ? (
          <p className="contact-success reveal">Message sent — I'll be in touch soon.</p>
        ) : (
          <form className="contact-form reveal" onSubmit={handleSubmit} noValidate>
            <div className="contact-form-row">
              <div className="contact-field">
                <label className="contact-label">Name</label>
                <input
                  className="contact-input"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={set('name')}
                  required
                />
              </div>
              <div className="contact-field">
                <label className="contact-label">Email</label>
                <input
                  className="contact-input"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={set('email')}
                  required
                />
              </div>
            </div>
            <div className="contact-field">
              <label className="contact-label">Message</label>
              <textarea
                className="contact-input contact-textarea"
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={set('message')}
                required
                rows={5}
              />
            </div>
            {status === 'error' && (
              <p className="contact-error">Something went wrong — try emailing me directly.</p>
            )}
            <button
              type="submit"
              className="contact-submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send message'}
            </button>
          </form>
        )}

        <a href="mailto:olamz2005@gmail.com" className="contact-email-link reveal">
          olamz2005@gmail.com
        </a>

        <div className="contact-socials reveal">
          <a href="https://github.com/olamide1738" className="contact-social" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/olamide-owolabi-8a3a40236" className="contact-social" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:olamz2005@gmail.com" className="contact-social">
            Email
          </a>
        </div>
      </div>
    </div>
  )
}
