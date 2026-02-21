import { useEffect, useRef, useState } from 'react';

export default function Contact() {
  const ref = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data).toString(),
      });
      if (res.ok) { setStatus('success'); form.reset(); }
      else setStatus('error');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <div ref={ref} className="stagger">
          <span className="section-label">Contact</span>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', marginTop: '2rem', alignItems: 'start' }}>
            {/* Left: headline + socials */}
            <div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', fontWeight: 900, letterSpacing: '-0.03em', color: 'var(--text-1)', marginBottom: '1rem', lineHeight: 1.15 }}>
                Let's work<br />
                <span className="gradient-text">together.</span>
              </h2>
              <p style={{ color: 'var(--text-2)', lineHeight: 1.75, marginBottom: '2rem', maxWidth: '380px' }}>
                Have a project idea, a job opening, or just want to say hi? I respond within 24 hours.
              </p>

              {/* Contact links */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  {
                    icon: (
                      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                    label: 'Email',
                    value: 'Dhruvgohel460@gmail.com',
                    href: 'mailto:Dhruvgohel460@gmail.com',
                    color: 'var(--accent)',
                  },
                  {
                    icon: (
                      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    ),
                    label: 'WhatsApp',
                    value: '+91 99248 85705',
                    href: 'https://wa.me/919924885705?text=Hi%20Dhruv%2C%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect.',
                    color: '#22c55e',
                  },
                  {
                    icon: (
                      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 110-4.124 2.062 2.062 0 010 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    ),
                    label: 'LinkedIn',
                    value: 'dhruv-gohel-220194322',
                    href: 'https://www.linkedin.com/in/dhruv-gohel-220194322',
                    color: '#0a66c2',
                  },
                  {
                    icon: (
                      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                      </svg>
                    ),
                    label: 'GitHub',
                    value: 'DhruvGohel46',
                    href: 'https://github.com/DhruvGohel46',
                    color: '#f4f4f6',
                  },
                ].map((c, i) => (
                  <a key={i} href={c.href} target={c.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex', alignItems: 'center', gap: '1rem',
                      padding: '0.85rem 1.1rem',
                      background: 'var(--bg-surface)', border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-sm)', textDecoration: 'none',
                      transition: 'border-color 0.2s, background 0.2s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = c.color + '55'; e.currentTarget.style.background = 'var(--bg-elevated)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--bg-surface)'; }}
                  >
                    <span style={{ color: c.color, flexShrink: 0 }}>{c.icon}</span>
                    <div>
                      <p style={{ fontSize: '0.7rem', color: 'var(--text-3)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 0.1rem 0' }}>
                        {c.label}
                      </p>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-1)', margin: 0, fontWeight: 500 }}>{c.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-1)', marginBottom: '1.5rem' }}>
                Send a Message
              </h3>

              {status === 'success' ? (
                <div style={{
                  background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)',
                  borderRadius: 'var(--radius-sm)', padding: '1.5rem', textAlign: 'center',
                }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>✅</div>
                  <p style={{ fontWeight: 600, color: 'var(--green)', margin: '0 0 0.3rem 0' }}>Message sent!</p>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-2)', margin: 0 }}>I'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <input type="hidden" name="form-name" value="contact" />

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-2)', marginBottom: '0.4rem', letterSpacing: '0.04em' }}>
                        NAME *
                      </label>
                      <input name="name" required placeholder="Your name"
                        style={{
                          width: '100%', background: 'var(--bg-elevated)', border: '1px solid var(--border)',
                          borderRadius: 'var(--radius-sm)', padding: '0.65rem 0.9rem',
                          color: 'var(--text-1)', fontSize: '0.9rem', outline: 'none',
                          fontFamily: 'inherit', boxSizing: 'border-box',
                        }}
                        onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                        onBlur={e => e.target.style.borderColor = 'var(--border)'}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-2)', marginBottom: '0.4rem', letterSpacing: '0.04em' }}>
                        EMAIL *
                      </label>
                      <input type="email" name="email" required placeholder="you@email.com"
                        style={{
                          width: '100%', background: 'var(--bg-elevated)', border: '1px solid var(--border)',
                          borderRadius: 'var(--radius-sm)', padding: '0.65rem 0.9rem',
                          color: 'var(--text-1)', fontSize: '0.9rem', outline: 'none',
                          fontFamily: 'inherit', boxSizing: 'border-box',
                        }}
                        onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                        onBlur={e => e.target.style.borderColor = 'var(--border)'}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-2)', marginBottom: '0.4rem', letterSpacing: '0.04em' }}>
                      MESSAGE *
                    </label>
                    <textarea name="message" required rows={5} placeholder="Tell me about your project or just say hi…"
                      style={{
                        width: '100%', background: 'var(--bg-elevated)', border: '1px solid var(--border)',
                        borderRadius: 'var(--radius-sm)', padding: '0.65rem 0.9rem',
                        color: 'var(--text-1)', fontSize: '0.9rem', outline: 'none',
                        fontFamily: 'inherit', resize: 'vertical', boxSizing: 'border-box',
                      }}
                      onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'}
                    />
                  </div>

                  {status === 'error' && (
                    <p style={{ fontSize: '0.8rem', color: '#ef4444', margin: 0 }}>
                      Something went wrong. Try emailing me directly at Dhruvgohel460@gmail.com
                    </p>
                  )}

                  <button type="submit" className="btn btn-primary" disabled={status === 'loading'}
                    style={{ alignSelf: 'flex-start', opacity: status === 'loading' ? 0.7 : 1, cursor: status === 'loading' ? 'not-allowed' : 'pointer' }}>
                    {status === 'loading' ? 'Sending…' : 'Send Message →'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 768px) {
          div[style*="grid-template-columns: 1fr"]:not([style*="grid-template-columns: 1fr 1fr"]) {
            grid-template-columns: 1fr 1.2fr !important;
          }
        }
        input::placeholder, textarea::placeholder { color: var(--text-3); }
      `}</style>
    </section>
  );
}
