import { useEffect, useRef } from 'react';

const SKILL_GROUPS = [
    {
        category: 'Frontend',
        color: '#6366f1',
        bg: 'rgba(99,102,241,0.1)',
        icon: '⬡',
        skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Bootstrap'],
    },
    {
        category: 'Backend',
        color: '#22c55e',
        bg: 'rgba(34,197,94,0.08)',
        icon: '⚙️',
        skills: ['Python', 'Flask', 'Django', 'REST APIs', 'Odoo ERP', 'Node.js'],
    },
    {
        category: 'Database & Data',
        color: '#f59e0b',
        bg: 'rgba(245,158,11,0.08)',
        icon: '🗄️',
        skills: ['PostgreSQL', 'SQLite', 'SQL', 'XML', 'Oracle Cloud'],
    },
    {
        category: 'Tools & AI',
        color: '#a78bfa',
        bg: 'rgba(167,139,250,0.08)',
        icon: '🛠',
        skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma', 'Ollama AI', 'Hugging Face'],
    },
];

const CERT_BADGES = [
    { label: 'NPTEL Python — Elite + Top 5%', score: '94%', issuer: 'IIT Madras' },
    { label: 'Programming in Java', score: '85%', issuer: 'NPTEL Swayam' },
    { label: 'Oracle Data Platform Foundations', score: '✓', issuer: 'Oracle' },
];

export default function Skills() {
    const ref = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.disconnect(); } },
            { threshold: 0.12 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="skills" className="section" style={{ background: 'var(--bg-surface)' }}>
            <div className="container">
                <div ref={ref} className="stagger">
                    <span className="section-label">Skills & Certifications</span>

                    <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', marginTop: '0.5rem', marginBottom: '2.5rem', color: 'var(--text-1)' }}>
                        What I Work With
                    </h2>

                    {/* Skill groups */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem', marginBottom: '3rem' }}>
                        {SKILL_GROUPS.map((g, i) => (
                            <div key={i} className="card" style={{ padding: '1.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                                    <div style={{
                                        width: '36px', height: '36px', borderRadius: '8px',
                                        background: g.bg, display: 'flex', alignItems: 'center',
                                        justifyContent: 'center', fontSize: '1.1rem',
                                        border: `1px solid ${g.color}22`,
                                    }}>
                                        {g.icon}
                                    </div>
                                    <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: g.color, letterSpacing: '0.02em' }}>
                                        {g.category}
                                    </h3>
                                </div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                    {g.skills.map((s, j) => (
                                        <span key={j} className="skill-chip">{s}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Certifications */}
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-1)', marginBottom: '1rem' }}>
                        Certifications
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.75rem' }}>
                        {CERT_BADGES.map((c, i) => (
                            <div key={i} className="card" style={{
                                padding: '1rem 1.25rem',
                                display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem',
                            }}>
                                <div>
                                    <p style={{ fontWeight: 600, color: 'var(--text-1)', fontSize: '0.88rem', marginBottom: '0.15rem' }}>
                                        {c.label}
                                    </p>
                                    <p style={{ fontSize: '0.75rem', color: 'var(--text-3)', margin: 0 }}>{c.issuer}</p>
                                </div>
                                <span style={{
                                    fontSize: '0.82rem', fontWeight: 700, color: '#f59e0b',
                                    background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)',
                                    padding: '0.2rem 0.6rem', borderRadius: '6px',
                                }}>
                                    {c.score}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
        @media (min-width: 768px) {
          div[style*="grid-template-columns: 1fr"]:first-of-type {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          div[style*="grid-template-columns: 1fr"]:last-of-type {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
        </section>
    );
}
