import { useEffect, useRef } from 'react';

const ACHIEVEMENTS = [
    {
        icon: '🏆',
        color: '#f59e0b',
        bg: 'rgba(245,158,11,0.1)',
        border: 'rgba(245,158,11,0.2)',
        title: 'Odoo Hackathon 2025 — 1st Place',
        sub: 'Team Lead · "Quantum Coders" · 4-member team',
        desc: 'Led team to first place with a modular campus club management system built on Odoo ERP, automating events, membership, payments, and analytics.',
    },
    {
        icon: '🥇',
        color: '#6366f1',
        bg: 'rgba(99,102,241,0.08)',
        border: 'rgba(99,102,241,0.18)',
        title: 'Intercollegiate Web Dev Contest — Winner',
        sub: 'College Level · 2024',
        desc: 'Won first prize in a competitive web development challenge showcasing full-stack proficiency and creative problem-solving under time pressure.',
    },
    {
        icon: '🏅',
        color: '#a78bfa',
        bg: 'rgba(167,139,250,0.08)',
        border: 'rgba(167,139,250,0.18)',
        title: 'Smart India Hackathon 2025 — National Participant',
        sub: 'Full-Stack Developer · Government of India Initiative',
        desc: 'Selected to represent our institution at SIH 2025. Developed RailQR — an AI-powered railway asset management system for Indian Railways.',
    },
    {
        icon: '⭐',
        color: '#22c55e',
        bg: 'rgba(34,197,94,0.08)',
        border: 'rgba(34,197,94,0.18)',
        title: 'NPTEL Python — Elite + Top 5% Topper',
        sub: 'IIT Madras · 94% Score · 12 Weeks',
        desc: 'Achieved Elite certification with Top 5% distinction in "The Joy of Computing using Python" — a competitive national-level online course.',
    },
    {
        icon: '☁️',
        color: '#38bdf8',
        bg: 'rgba(56,189,248,0.08)',
        border: 'rgba(56,189,248,0.18)',
        title: 'Oracle Data Platform Foundations Associate',
        sub: 'Oracle Certification · Cloud Professional',
        desc: 'Certified in cloud data management, analytics foundations, and Oracle\'s data platform ecosystem.',
    },
    {
        icon: '🎓',
        color: '#f59e0b',
        bg: 'rgba(245,158,11,0.08)',
        border: 'rgba(245,158,11,0.15)',
        title: 'NPTEL Java — Certified',
        sub: 'NPTEL Swayam · 85% Score',
        desc: 'Completed "Programming in Java" certification through the national SWAYAM platform.',
    },
];

export default function Achievements() {
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
        <section id="achievements" className="section" style={{ background: 'var(--bg-surface)' }}>
            <div className="container">
                <div ref={ref} className="stagger">
                    <span className="section-label">Achievements</span>
                    <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', marginTop: '0.5rem', marginBottom: '2.5rem', color: 'var(--text-1)' }}>
                        Recognition & Wins
                    </h2>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
                        {ACHIEVEMENTS.map((a, i) => (
                            <div key={i} className="card" style={{
                                padding: '1.4rem 1.5rem',
                                display: 'flex', alignItems: 'flex-start', gap: '1rem',
                                borderColor: a.border,
                                background: `linear-gradient(135deg, ${a.bg} 0%, var(--bg-surface) 100%)`,
                            }}>
                                {/* Icon */}
                                <div style={{
                                    flexShrink: 0, width: '44px', height: '44px',
                                    background: a.bg, border: `1px solid ${a.border}`,
                                    borderRadius: '10px', display: 'flex', alignItems: 'center',
                                    justifyContent: 'center', fontSize: '1.3rem',
                                }}>
                                    {a.icon}
                                </div>
                                {/* Text */}
                                <div style={{ flex: 1 }}>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.6rem', marginBottom: '0.2rem' }}>
                                        <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-1)' }}>
                                            {a.title}
                                        </h3>
                                    </div>
                                    <p style={{ fontSize: '0.72rem', color: a.color, fontWeight: 600, margin: '0 0 0.4rem 0', letterSpacing: '0.01em' }}>
                                        {a.sub}
                                    </p>
                                    <p style={{ fontSize: '0.82rem', color: 'var(--text-2)', lineHeight: 1.6, margin: 0 }}>
                                        {a.desc}
                                    </p>
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
