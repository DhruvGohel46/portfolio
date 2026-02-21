import Image from 'next/image';
import { useEffect, useRef } from 'react';

const PROJECTS = [
  {
    num: '01',
    title: 'ReBill — Smart Billing Platform',
    role: 'Designer & Frontend Developer · 2025',
    badge: '⚡ Active Project',
    badgeColor: '#22c55e',
    badgeBg: 'rgba(34,197,94,0.1)',
    coverImg: '/projects/rebill/rebill-cover.webp',
    problem: 'Small restaurant owners tracked bills on paper or WhatsApp — losing data, wasting time, and having no financial visibility.',
    solution: 'Designed and built ReBill — a modern billing platform with a dashboard, real-time invoice creation, daily reports, and Excel export. Focused on usability and performance for non-technical users.',
    outcome: 'Active daily use by a real restaurant. Mobile-friendly interface, role-based access, and Electron desktop app packaging for offline-first operation.',
    tech: ['Next.js', 'Tailwind CSS', 'Firebase', 'JavaScript', 'Electron'],
    github: 'https://github.com/DhruvGohel46',
  },
  {
    num: '02',
    title: 'Quantum Coders — Odoo Hackathon Winner',
    role: 'Team Lead · Hackathon · 2025',
    badge: '🏆 1st Place',
    badgeColor: '#f59e0b',
    badgeBg: 'rgba(245,158,11,0.12)',
    problem: 'Campus clubs lacked centralized tools for managing events, membership payments, and real-time notifications inside the university ERP ecosystem.',
    solution: 'Built custom Odoo ERP modules in Python to automate event scheduling, membership payments, and notifications — reducing manual admin effort by 70%. Added REST + Webhook endpoints for real-time sync.',
    outcome: '1st Place finish. Analytics dashboards surfaced budget, participation trends & ROI for club admins.',
    tech: ['Odoo ERP', 'Python', 'PostgreSQL', 'REST API', 'Webhooks'],
    github: 'https://github.com/DhruvGohel46/Quantum-coders-Odoo-hackathon25-',
  },
  {
    num: '03',
    title: 'RailQR — Railway Asset Management',
    role: 'Full-Stack Developer · SIH 2025',
    badge: '🏅 National Level',
    badgeColor: '#6366f1',
    badgeBg: 'rgba(99,102,241,0.12)',
    problem: 'Indian Railways had no efficient way for field staff to log and standardize asset maintenance records — leading to inconsistent data and manual overhead.',
    solution: 'Developed a QR-code-based tracking platform using Flask + React/Next.js. Integrated Ollama AI (local LLM) to auto-clean and standardize user-entered maintenance descriptions into structured fault records.',
    outcome: 'Dual XML/SQL database support. Clean RESTful API layer. Selected as SIH 2025 project representing our institution.',
    tech: ['Flask', 'React', 'Next.js', 'Python', 'Ollama AI', 'QR Generation', 'XML/SQL'],
    github: 'https://github.com/DhruvGohel46/QRail-3',
  },
  {
    num: '04',
    title: 'Autonomous Knowledge Extractor + Quiz Builder',
    role: 'Frontend Developer · GDG Autonomous Hacks 26',
    badge: '⚡ AI-Powered',
    badgeColor: '#22c55e',
    badgeBg: 'rgba(34,197,94,0.1)',
    problem: 'Educators and students waste hours manually extracting key concepts from long texts and creating quiz questions.',
    solution: 'Built an AI system that takes any educational content, performs multi-step reasoning to extract hierarchical concepts, then generates validated quiz questions with self-checking mechanisms. Led the frontend interface.',
    outcome: 'Automated content → quiz pipeline. End-to-end from raw text to ready-to-use quiz in seconds.',
    tech: ['React', 'Next.js', 'AI/ML', 'NLP', 'Agentic AI'],
    github: 'https://github.com/varun-ai69/Agentic---AI-',
  },
  {
    num: '05',
    title: 'COSO — College Social Platform',
    role: 'Full-Stack Developer · Campus Project · 2024',
    badge: '🌐 Full-Stack',
    badgeColor: '#a78bfa',
    badgeBg: 'rgba(167,139,250,0.1)',
    problem: 'Students at our college had no dedicated platform for sharing campus updates, discovering events, or connecting with peers.',
    solution: 'Engineered a full-stack Django app with role-based access (student / admin), secure email signup with admin approval, RESTful JSON APIs via Django REST Framework, and responsive Tailwind CSS UI.',
    outcome: 'Deployed to Render with PostgreSQL. Supports file uploads, CORS, and mobile-first responsive design.',
    tech: ['Django', 'Python', 'Django REST Framework', 'PostgreSQL', 'Tailwind CSS'],
    github: 'https://github.com/DhruvGohel46/COSO',
    live: 'https://coso-backend.onrender.com',
  },
  {
    num: '06',
    title: 'Falak Al Buraimi Beauty Salon',
    role: 'Freelance · Client Project · 2024',
    badge: '💼 Freelance',
    badgeColor: '#f59e0b',
    badgeBg: 'rgba(245,158,11,0.08)',
    problem: 'A beauty salon in Oman had zero online presence, losing potential bookings to competitors with websites.',
    solution: 'Designed and built a responsive 4-page marketing website using pure HTML5/CSS3/JS. Added animated countdown offers, card-style service sections, Google Maps embed, and client-side form validation.',
    outcome: '90+ Lighthouse score. Professional online presence delivered on time and within budget.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Google Maps API'],
    github: 'https://github.com/DhruvGohel46/falak-al-buraimi-beauty-saloon',
  },
];

// Fallback gradient cover for projects without a real image yet
function ProjectCover({ src, num, badgeColor }) {
  if (src) {
    return (
      <div style={{ position: 'relative', width: '100%', height: '180px', overflow: 'hidden', borderRadius: '10px 10px 0 0' }}>
        <Image
          src={src}
          alt="Project cover"
          fill
          sizes="(max-width: 768px) 100vw, 640px"
          style={{ objectFit: 'cover' }}
          onError={e => { e.currentTarget.style.display = 'none'; }}
        />
      </div>
    );
  }
  return null;
}

export default function Projects() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.disconnect(); } },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="work" className="section">
      <div className="container">
        <div ref={ref} className="stagger">
          <span className="section-label">Featured Projects</span>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', marginTop: '0.5rem', marginBottom: '0.5rem', color: 'var(--text-1)' }}>
            Work That Shipped
          </h2>
          <p style={{ color: 'var(--text-2)', marginBottom: '3rem', maxWidth: '520px', fontSize: '0.95rem' }}>
            Each project started with a real problem. Here&apos;s what I built, why, and what it achieved.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {PROJECTS.map((p, i) => (
              <article key={i} className="card project-card" style={{ overflow: 'hidden' }}>
                {/* Cover image (ReBill only for now) */}
                {p.coverImg && <ProjectCover src={p.coverImg} num={p.num} badgeColor={p.badgeColor} />}

                <div style={{ padding: '1.75rem 2rem 2rem' }}>
                  {/* Top row */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                      <span style={{
                        fontSize: 'clamp(2rem, 6vw, 3rem)', fontWeight: 900,
                        color: 'rgba(255,255,255,0.06)', letterSpacing: '-0.04em',
                        lineHeight: 1, fontVariantNumeric: 'tabular-nums',
                        userSelect: 'none',
                      }}>
                        {p.num}
                      </span>
                      <div>
                        <h3 style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', fontWeight: 700, color: 'var(--text-1)', marginBottom: '0.2rem' }}>
                          {p.title}
                        </h3>
                        <p style={{ fontSize: '0.78rem', color: 'var(--text-3)', margin: 0 }}>{p.role}</p>
                      </div>
                    </div>
                    <span style={{
                      fontSize: '0.72rem', fontWeight: 700,
                      color: p.badgeColor, background: p.badgeBg,
                      border: `1px solid ${p.badgeColor}33`,
                      padding: '0.25rem 0.65rem', borderRadius: '6px',
                      whiteSpace: 'nowrap', alignSelf: 'flex-start',
                    }}>
                      {p.badge}
                    </span>
                  </div>

                  {/* Problem / Solution / Outcome */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.75rem', marginBottom: '1.25rem' }}>
                    {[
                      { label: 'Problem', text: p.problem, accent: '#ef4444' },
                      { label: 'Solution', text: p.solution, accent: 'var(--accent)' },
                      { label: 'Outcome', text: p.outcome, accent: 'var(--green)' },
                    ].map((block, j) => (
                      <div key={j} style={{
                        background: 'rgba(255,255,255,0.02)',
                        border: '1px solid var(--border)',
                        borderRadius: '10px',
                        padding: '0.85rem 1rem',
                        borderLeft: `3px solid ${block.accent}`,
                      }}>
                        <span style={{ fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: block.accent }}>
                          {block.label}
                        </span>
                        <p style={{ fontSize: '0.84rem', color: 'var(--text-2)', lineHeight: 1.65, margin: '0.3rem 0 0 0' }}>
                          {block.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Bottom row — tech + links */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {p.tech.map((t, k) => <span key={k} className="tag">{t}</span>)}
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem', flexShrink: 0 }}>
                      {p.live && (
                        <a href={p.live} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.4rem 0.85rem', fontSize: '0.78rem' }}>
                          Live ↗
                        </a>
                      )}
                      <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ padding: '0.4rem 0.85rem', fontSize: '0.78rem', gap: '0.35rem' }}>
                        <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                        </svg>
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 768px) {
          div[style*="grid-template-columns: 1fr"]:not([class]) {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
