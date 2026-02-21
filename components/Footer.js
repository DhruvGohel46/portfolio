export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer style={{
            borderTop: '1px solid var(--border)',
            background: 'var(--bg-surface)',
            padding: '2.5rem 0',
        }}>
            <div className="container">
                <div style={{
                    display: 'flex', flexWrap: 'wrap',
                    justifyContent: 'space-between', alignItems: 'center',
                    gap: '1.25rem',
                }}>
                    {/* Left */}
                    <div>
                        <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-1)', marginBottom: '0.25rem', letterSpacing: '-0.02em' }}>
                            Dhruv Gohel
                        </div>
                        <p style={{ fontSize: '0.78rem', color: 'var(--text-3)', margin: 0 }}>
                            Ahmedabad, India · Computer Engineering Student
                        </p>
                    </div>

                    {/* Center: tagline */}
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-3)', textAlign: 'center' }}>
                        Building the web, one problem at a time.
                    </p>

                    {/* Right: icons */}
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                        {[
                            {
                                href: 'https://github.com/DhruvGohel46',
                                label: 'GitHub',
                                icon: <path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />,
                            },
                            {
                                href: 'https://www.linkedin.com/in/dhruv-gohel-220194322',
                                label: 'LinkedIn',
                                icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 110-4.124 2.062 2.062 0 010 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />,
                            },
                            {
                                href: 'mailto:Dhruvgohel460@gmail.com',
                                label: 'Email',
                                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
                                stroke: true,
                            },
                        ].map((link, i) => (
                            <a
                                key={i}
                                href={link.href}
                                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                                rel="noopener noreferrer"
                                aria-label={link.label}
                                style={{
                                    width: '38px', height: '38px', borderRadius: '8px',
                                    background: 'var(--bg-elevated)', border: '1px solid var(--border)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: 'var(--text-2)', textDecoration: 'none', transition: 'all 0.2s',
                                }}
                                onMouseEnter={e => { e.currentTarget.style.color = 'var(--text-1)'; e.currentTarget.style.borderColor = 'var(--border-hover)'; e.currentTarget.style.background = 'var(--bg)'; }}
                                onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-2)'; e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--bg-elevated)'; }}
                            >
                                <svg width="16" height="16" fill={link.stroke ? 'none' : 'currentColor'} stroke={link.stroke ? 'currentColor' : undefined} strokeWidth={link.stroke ? '2' : undefined} viewBox="0 0 24 24">
                                    {link.icon}
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Bottom bar */}
                <div style={{
                    borderTop: '1px solid var(--border)',
                    marginTop: '1.75rem', paddingTop: '1.25rem',
                    display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '0.5rem',
                }}>
                    <p style={{ fontSize: '0.72rem', color: 'var(--text-3)', margin: 0 }}>
                        © {year} Dhruv Gohel. Designed & built by hand.
                    </p>
                    <p style={{ fontSize: '0.72rem', color: 'var(--text-3)', margin: 0 }}>
                        Next.js · Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
}
