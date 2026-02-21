import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        height: '58px',
        background: scrolled ? 'rgba(9,9,11,0.88)' : 'rgba(9,9,11,0)',
        backdropFilter: scrolled ? 'blur(18px)' : 'blur(0px)',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'background 0.3s, backdrop-filter 0.3s, border-color 0.3s',
      }}>
        <div className="container" style={{
          height: '100%', display: 'flex',
          alignItems: 'center', justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <a href="#" style={{
            fontWeight: 800, fontSize: '1.05rem', letterSpacing: '-0.02em',
            color: 'var(--text-1)', textDecoration: 'none',
            transition: 'color 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-1)'}
          >
            Dhruv<span style={{ color: 'var(--accent)' }}>.</span>
          </a>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="desktop-nav">
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} className="nav-link" style={{ padding: '0.4rem 0.75rem' }}>
                {l.label}
              </a>
            ))}
            <a
              href="https://wa.me/919924885705?text=Hi%20Dhruv%2C%20I%20saw%20your%20portfolio."
              target="_blank" rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ padding: '0.45rem 1rem', fontSize: '0.82rem', marginLeft: '0.5rem' }}
            >
              Hire Me →
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              background: 'none', border: '1px solid var(--border)',
              color: 'var(--text-1)', cursor: 'pointer',
              width: '38px', height: '38px', borderRadius: '8px',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '5px',
              padding: '8px',
            }}
          >
            {menuOpen ? (
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile nav drawer */}
      <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        {NAV_LINKS.map(l => (
          <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
        ))}
        <a
          href="https://wa.me/919924885705?text=Hi%20Dhruv%2C%20I%20saw%20your%20portfolio."
          target="_blank" rel="noopener noreferrer"
          className="btn btn-primary"
          style={{ marginTop: '0.5rem', justifyContent: 'center' }}
          onClick={close}
        >
          Hire Me on WhatsApp →
        </a>
      </div>

      <style jsx>{`
        .desktop-nav { display: none; }
        .hamburger { display: flex; }
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .hamburger { display: none !important; }
        }
      `}</style>
    </>
  );
}
