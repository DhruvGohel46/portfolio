import { useEffect, useRef } from 'react';

const SERVICES = [
    {
        icon: '🌐',
        title: 'Business Websites',
        desc: 'Fast, professional websites for salons, restaurants, agencies, and local businesses — mobile-first, SEO-ready, and designed to convert visitors.',
        bullets: ['Responsive design', 'Contact forms', 'Google Maps + Analytics', 'Lighthouse 90+'],
    },
    {
        icon: '⚡',
        title: 'Web App Development',
        desc: 'Full-stack web applications built with React/Next.js on the frontend and Python or Node.js on the backend — shipping real features, not just prototypes.',
        bullets: ['React / Next.js', 'REST APIs', 'Database design', 'Authentication'],
    },
    {
        icon: '🎨',
        title: 'UI Design & Prototyping',
        desc: 'Clean, modern interfaces designed with a developer\'s eye — no unnecessary complexity, just clear visual hierarchy and smooth interactions.',
        bullets: ['Component systems', 'Mobile-first', 'Smooth animations', 'Figma → Code'],
    },
    {
        icon: '🤖',
        title: 'AI Integration',
        desc: 'I can embed AI features into your product — chatbots, content summarizers, or smart automation — using local or cloud LLMs.',
        bullets: ['Ollama / HuggingFace', 'NLP pipelines', 'AI-powered UX', 'API wrapping'],
    },
];

export default function Services() {
    const ref = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.disconnect(); } },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="services" className="section">
            <div className="container">
                <div ref={ref} className="stagger">
                    <span className="section-label">Services</span>
                    <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', marginTop: '0.5rem', marginBottom: '0.5rem', color: 'var(--text-1)' }}>
                        What I Can Do For You
                    </h2>
                    <p style={{ color: 'var(--text-2)', marginBottom: '2.5rem', maxWidth: '480px', fontSize: '0.95rem' }}>
                        If you have an idea or a problem that needs solving digitally — let's talk.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem' }}>
                        {SERVICES.map((s, i) => (
                            <div key={i} className="card" style={{ padding: '1.75rem' }}>
                                <div style={{
                                    width: '48px', height: '48px', borderRadius: '12px',
                                    background: 'var(--bg-elevated)', border: '1px solid var(--border)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '1.4rem', marginBottom: '1rem',
                                }}>
                                    {s.icon}
                                </div>
                                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-1)', marginBottom: '0.6rem' }}>
                                    {s.title}
                                </h3>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-2)', lineHeight: 1.7, marginBottom: '1rem' }}>
                                    {s.desc}
                                </p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                                    {s.bullets.map((b, j) => (
                                        <span key={j} className="tag">✓ {b}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA under services */}
                    <div style={{
                        marginTop: '2.5rem', padding: '2rem',
                        background: 'linear-gradient(135deg, var(--accent-light) 0%, var(--bg-elevated) 100%)',
                        border: '1px solid rgba(99,102,241,0.2)', borderRadius: 'var(--radius)',
                        display: 'flex', flexWrap: 'wrap', alignItems: 'center',
                        justifyContent: 'space-between', gap: '1rem',
                    }}>
                        <div>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-1)', marginBottom: '0.3rem' }}>
                                Have a project in mind?
                            </h3>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-2)', margin: 0 }}>
                                I'm available for freelance work and internships. Let's build something great together.
                            </p>
                        </div>
                        <a href="#contact" className="btn btn-primary">
                            Hire Me →
                        </a>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @media (min-width: 640px) {
          div[style*="grid-template-columns: 1fr"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
        </section>
    );
}
