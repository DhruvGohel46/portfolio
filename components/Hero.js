import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--bg)',
        textAlign: 'center',
      }}
    >
      {/* Radial glow — top center */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-5%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="container"
        style={{ paddingTop: '7rem', paddingBottom: '5rem', position: 'relative', zIndex: 1 }}
      >
        {/* ── Profile Image — centered ── */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '2rem',
          position: 'relative',
        }}>
          {/* Purple glow orb */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              width: '320px',
              height: '320px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(99,102,241,0.5) 0%, rgba(99,102,241,0.12) 50%, transparent 72%)',
              filter: 'blur(36px)',
            }}
          />
          {/* Circular image */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            <Image
              src="/profile/profile.png"
              alt="Dhruv Gohel — Full-Stack Developer"
              width={200}
              height={200}
              priority
              style={{
                borderRadius: '50%',
                objectFit: 'cover',
                objectPosition: 'center top',
                border: '2px solid rgba(99,102,241,0.3)',
                display: 'block',
              }}
            />
          </div>
        </div>

        {/* ── Availability badge ── */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          marginBottom: '1.5rem',
        }}>
          <span style={{
            width: '8px', height: '8px', borderRadius: '50%',
            background: 'var(--green)', flexShrink: 0,
            boxShadow: '0 0 8px var(--green)',
            animation: 'pulse-dot 2s ease-in-out infinite',
          }} />
          <span style={{ fontSize: '0.82rem', fontWeight: 500, color: 'var(--text-2)' }}>
            Available for internships &amp; freelance
          </span>
        </div>

        {/* ── Main headline ── */}
        <h1 style={{
          fontSize: 'clamp(2.4rem, 6vw, 4.2rem)',
          fontWeight: 900,
          lineHeight: 1.07,
          letterSpacing: '-0.04em',
          color: 'var(--text-1)',
          marginBottom: '1.25rem',
          maxWidth: '760px',
          margin: '0 auto 1.25rem',
        }}>
          Hi, I&apos;m{' '}
          <span style={{
            background: 'linear-gradient(135deg, #f4f4f6 0%, #818cf8 50%, #6366f1 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Dhruv Gohel.
          </span>
          <br />
          I build web apps that solve real problems.
        </h1>

        {/* ── Subheadline ── */}
        <p style={{
          fontSize: 'clamp(0.9rem, 1.8vw, 1.05rem)',
          color: 'var(--text-2)',
          lineHeight: 1.75,
          maxWidth: '500px',
          margin: '0 auto 1.75rem',
        }}>
          Computer Engineering student with a track record of shipping
          full-stack products — from hackathon projects to real client
          deployments. I turn business problems into clean, working software.
        </p>

        {/* ── Trust line ── */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.9rem',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '2rem',
          fontSize: '0.78rem',
          color: 'var(--text-3)',
        }}>
          <span>🏅 Hackathon Finalist</span>
          <span style={{ color: 'var(--border-hover)' }}>·</span>
          <span>💼 Freelance Developer</span>
          <span style={{ color: 'var(--border-hover)' }}>·</span>
          <span>⭐ NPTEL Top 5%</span>
          <span style={{ color: 'var(--border-hover)' }}>·</span>
          <span>📍 Ahmedabad, India</span>
        </div>

        {/* ── CTAs ── */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem', justifyContent: 'center' }}>
          <a href="#work" className="btn btn-primary" style={{ padding: '0.65rem 1.4rem' }}>
            View My Work
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ marginLeft: '0.3rem' }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="#contact" className="btn btn-ghost" style={{ padding: '0.65rem 1.2rem' }}>
            Contact Me
          </a>
          <a
            href="https://www.linkedin.com/in/dhruv-gohel-220194322"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
            style={{ padding: '0.65rem 1.2rem', gap: '0.4rem' }}
          >
            <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 110-4.124 2.062 2.062 0 010 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '100px',
        background: 'linear-gradient(to top, var(--bg), transparent)',
        pointerEvents: 'none',
      }} />
    </section>
  );
}
