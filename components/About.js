import { useEffect, useRef } from 'react';

const STATS = [
  { value: '6+', label: 'Projects Built' },
  { value: '1st', label: 'Hackathon Win' },
  { value: '3', label: 'Certifications' },
  { value: '2+', label: 'Years Coding' },
];

export default function About() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section">
      <div className="container">
        <div ref={ref} className="stagger">
          {/* Label */}
          <span className="section-label">About Me</span>

          {/* Content grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            marginTop: '2rem',
            alignItems: 'start',
          }}>
            {/* Story */}
            <div>
              <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', marginBottom: '1.25rem', color: 'var(--text-1)' }}>
                Who I Am
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <p style={{ lineHeight: 1.8, color: 'var(--text-2)' }}>
                  I'm a <strong style={{ color: 'var(--text-1)' }}>Computer Engineering student</strong> at Gujarat
                  Technological University, passionate about building software that actually gets used. I don't just
                  write code — I solve problems.
                </p>
                <p style={{ lineHeight: 1.8, color: 'var(--text-2)' }}>
                  I've shipped a freelance salon website, led a team to win an Odoo Hackathon, built a full-stack
                  railway asset system for SIH 2025, and currently building <strong style={{ color: 'var(--text-1)' }}>ReBill</strong> —
                  a modern billing platform for small restaurants.
                </p>
                <p style={{ lineHeight: 1.8, color: 'var(--text-2)' }}>
                  I care about clean UI, real-world impact, and writing code that's easy to maintain. I pick up new
                  technologies fast and work well with teams or independently.
                </p>
              </div>

              {/* Info pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginTop: '1.75rem' }}>
                {[
                  { icon: '📍', text: 'Ahmedabad, Gujarat' },
                  { icon: '🎓', text: 'B.Tech CE · GTU · 2028' },
                  { icon: '💼', text: 'Open to Internships & Freelance' },
                  { icon: '🤝', text: 'Remote-friendly' },
                ].map((p, i) => (
                  <span key={i} style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                    fontSize: '0.78rem', fontWeight: 500,
                    background: 'var(--bg-elevated)', border: '1px solid var(--border)',
                    borderRadius: '8px', padding: '0.35rem 0.75rem', color: 'var(--text-2)',
                  }}>
                    <span>{p.icon}</span> {p.text}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
              {STATS.map((s, i) => (
                <div key={i} className="card" style={{
                  padding: '1.5rem 1.25rem', textAlign: 'center',
                }}>
                  <div style={{
                    fontSize: '2.2rem', fontWeight: 900, letterSpacing: '-0.04em',
                    color: 'var(--accent)', lineHeight: 1, marginBottom: '0.4rem',
                  }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-3)', fontWeight: 500 }}>
                    {s.label}
                  </div>
                </div>
              ))}

              {/* Availability card */}
              <div className="card" style={{
                padding: '1.25rem', gridColumn: 'span 2',
                background: 'linear-gradient(135deg, rgba(34,197,94,0.05) 0%, var(--bg-surface) 100%)',
                borderColor: 'rgba(34,197,94,0.15)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
                  <span className="pulse-dot" />
                  <span style={{ fontWeight: 600, color: 'var(--green)', fontSize: '0.85rem' }}>
                    Currently Available
                  </span>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-3)', margin: 0 }}>
                  Open to internships, freelance gigs, and collaborative projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 768px) {
          div[style*="grid-template-columns: 1fr"] { grid-template-columns: 1.2fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
