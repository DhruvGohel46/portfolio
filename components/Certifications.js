import React from 'react';

export default function Certifications() {
  const certifications = [
    {
      id: 'nptel-python',
      title: 'The Joy of Computing using Python',
      issuer: 'NPTEL Online Certification (IIT Madras)',
      score: '94%',
      duration: 'Jul–Oct 2025',
      tags: ['Python', 'IIT Madras', '12 weeks'],
      featured: true,
      badge: '⭐ Elite + Top 5%',
    },
    {
      id: 'nptel-java',
      title: 'Programming in Java',
      issuer: 'NPTEL Swayam Certification',
      score: '85%',
      tags: ['Java', 'NPTEL'],
    },
    {
      id: 'oracle',
      title: 'Oracle Data Platform Foundations Associate',
      issuer: 'Oracle Certification',
      description: 'Cloud data management and analytics foundations',
      tags: ['Oracle Cloud', 'Data Platform'],
    },
  ];

  return (
    <section className="py-12 border-t border-white/5">
      <h3 className="font-semibold text-xl mb-4">Certifications</h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map(cert => (
          <div
            key={cert.id}
            className={`rounded-xl backdrop-blur-sm p-5 animate-fade-up transition-all ${
              cert.featured
                ? 'border border-emerald-400/30 bg-gradient-to-br from-emerald-400/5 to-cyan-400/5 relative overflow-hidden group hover:border-emerald-400/50'
                : 'border border-white/10 bg-white/5 hover:border-cyan-400/30'
            }`}
          >
            {cert.featured && (
              <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-400/10 rounded-bl-full blur-xl"></div>
            )}
            <div className={cert.featured ? 'relative' : ''}>
              {cert.featured && (
                <span className="inline-flex items-center text-xs px-2 py-1 rounded-full bg-emerald-400/20 text-emerald-300 border border-emerald-400/30 font-semibold mb-2">
                  {cert.badge}
                </span>
              )}
              <h4 className="font-semibold text-slate-100 mb-1">{cert.title}</h4>
              <p className="text-xs text-slate-400 mb-2">{cert.issuer}</p>
              {cert.description && <p className="text-sm text-slate-300/70 mb-3">{cert.description}</p>}
              {cert.score && (
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <span className="text-sm font-bold text-emerald-300">{cert.score}</span>
                  </div>
                  {cert.duration && <span className="text-xs text-slate-400">{cert.duration}</span>}
                </div>
              )}
              <div className="flex flex-wrap gap-1.5">
                {cert.tags.map(tag => (
                  <span key={tag} className="text-xs px-2 py-0.5 rounded bg-white/5 text-slate-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
