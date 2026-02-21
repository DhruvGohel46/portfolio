import { useEffect, useRef } from 'react';

const CURRENT_PROJECTS = [
    {
        name: 'ReBill',
        tagline: 'Smart billing & POS platform for small restaurants',
        stage: 'In Development',
        stageColor: '#22c55e',
        desc: 'A full-featured billing system — live orders, daily reports, Excel exports, and role-based access. Built with React, Flask, and SQLite.',
        tech: ['React', 'Flask', 'SQLite', 'Electron'],
    },
    {
        name: 'Fredro',
        tagline: 'Franchise expansion & management platform',
        stage: 'Building MVP',
        stageColor: '#6366f1',
        desc: 'Helping franchise brands manage multiple outlets, standardize operations, and track performance across locations from one dashboard.',
        tech: ['Next.js', 'Django', 'PostgreSQL'],
    },
];

export default function CurrentlyBuilding() {
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
        <section id="building" className="section-sm" style={{ background: 'var(--bg-elevated)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
            <div className="container">
                <div ref={ref} className="stagger">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.75rem', flexWrap: 'wrap' }}>
                        <span className="building-badge">
                            <span className="pulse-dot" style={{ background: 'var(--green)', width: '6px', height: '6px' }} />
                            Currently Building
                        </span>
                        <p style={{ color: 'var(--text-3)', fontSize: '0.82rem', margin: 0 }}>
                            Active projects I'm shipping in 2026
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
                        {CURRENT_PROJECTS.map((p, i) => (
                            <div key={i} className="card" style={{
                                padding: '1.5rem',
                                background: 'var(--bg-surface)',
                                display: 'flex', flexWrap: 'wrap',
                                alignItems: 'flex-start', gap: '1rem',
                            }}>
                                {/* Left dot line */}
                                <div style={{
                                    width: '2px', alignSelf: 'stretch', minHeight: '60px',
                                    background: `linear-gradient(to bottom, ${p.stageColor}, transparent)`,
                                    borderRadius: '2px', flexShrink: 0,
                                }} />

                                <div style={{ flex: 1, minWidth: '200px' }}>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.6rem', marginBottom: '0.35rem' }}>
                                        <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-1)' }}>
                                            {p.name}
                                        </h3>
                                        <span style={{
                                            fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.08em',
                                            textTransform: 'uppercase', color: p.stageColor,
                                            background: `${p.stageColor}15`, border: `1px solid ${p.stageColor}30`,
                                            padding: '0.15rem 0.5rem', borderRadius: '4px',
                                        }}>
                                            {p.stage}
                                        </span>
                                    </div>
                                    <p style={{ fontSize: '0.8rem', color: p.stageColor, fontWeight: 600, margin: '0 0 0.5rem 0' }}>
                                        {p.tagline}
                                    </p>
                                    <p style={{ fontSize: '0.82rem', color: 'var(--text-2)', lineHeight: 1.6, margin: '0 0 0.75rem 0' }}>
                                        {p.desc}
                                    </p>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                                        {p.tech.map((t, j) => <span key={j} className="tag">{t}</span>)}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
        @media (min-width: 768px) {
          div[style*="grid-template-columns: 1fr"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
        </section>
    );
}
