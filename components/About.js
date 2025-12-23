import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-12 border-t border-white/5">
      <h2 className="text-2xl font-semibold">About</h2>
      <p className="mt-1 text-slate-300/80 max-w-3xl">
        Computer Science student with strong programming skills and leadership experience, passionate about building
        scalable web applications and solving real-world problems through technology.
      </p>

      {/* Education & Bio */}
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {/* Education Card */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 animate-fade-up backdrop-blur-sm hover:border-emerald-400/30 transition-all">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-lg">Education</h3>
          </div>
          <div className="space-y-2">
            <p className="font-medium text-slate-200">B.Tech in Computer Engineering</p>
            <p className="text-sm text-slate-300/80">Gujarat Technological University</p>
            <div className="flex items-center gap-2 text-xs text-slate-400 mt-3">
              <span className="px-2 py-1 rounded-md bg-emerald-400/10 border border-emerald-400/20 text-emerald-300">
                3rd Semester
              </span>
              <span>•</span>
              <span>Graduating 2028</span>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 animate-fade-up [animation-delay:.05s] backdrop-blur-sm hover:border-indigo-400/30 transition-all">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-indigo-400/10 border border-indigo-400/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-lg">Highlights</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-300/80">Projects Built</span>
              <span className="font-bold text-indigo-400">5+</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-300/80">Certifications</span>
              <span className="font-bold text-indigo-400">3</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-300/80">Hackathons Won</span>
              <span className="font-bold text-indigo-400">1</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-300/80">Languages</span>
              <span className="font-bold text-indigo-400">5+</span>
            </div>
          </div>
        </div>

        {/* Location & Availability */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 animate-fade-up [animation-delay:.1s] backdrop-blur-sm hover:border-cyan-400/30 transition-all">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-lg">Availability</h3>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-slate-400 mb-1">Location</p>
              <p className="text-slate-200 font-medium">Ahmedabad, Gujarat</p>
            </div>
            <div>
              <p className="text-sm text-slate-400 mb-1">Open to</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 rounded-md bg-cyan-400/10 border border-cyan-400/20 text-cyan-300">
                  Internships
                </span>
                <span className="text-xs px-2 py-1 rounded-md bg-cyan-400/10 border border-cyan-400/20 text-cyan-300">
                  Freelance
                </span>
                <span className="text-xs px-2 py-1 rounded-md bg-cyan-400/10 border border-cyan-400/20 text-cyan-300">
                  Remote Work
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Skills */}
      <div className="mt-8">
        <h3 className="font-semibold text-xl mb-4">Technical Skills</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Frontend */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-5 animate-fade-up backdrop-blur-sm hover:border-emerald-400/30 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 border border-emerald-400/30 flex items-center justify-center">
                <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h4 className="font-semibold text-sm text-emerald-300">Frontend</h4>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Tailwind', 'Bootstrap'].map(skill => (
                <span key={skill} className="text-xs px-2 py-1 rounded bg-white/5 text-slate-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-5 animate-fade-up [animation-delay:.05s] backdrop-blur-sm hover:border-indigo-400/30 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-400/20 to-purple-400/20 border border-indigo-400/30 flex items-center justify-center">
                <svg className="w-4 h-4 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
                </svg>
              </div>
              <h4 className="font-semibold text-sm text-indigo-300">Backend</h4>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {['Python', 'Flask', 'Django', 'REST APIs', 'Odoo'].map(skill => (
                <span key={skill} className="text-xs px-2 py-1 rounded bg-white/5 text-slate-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Database */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-5 animate-fade-up [animation-delay:.1s] backdrop-blur-sm hover:border-cyan-400/30 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400/20 to-blue-400/20 border border-cyan-400/30 flex items-center justify-center">
                <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4zM4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4zm0 5v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4s-8-1.79-8-4z" />
                </svg>
              </div>
              <h4 className="font-semibold text-sm text-cyan-300">Database</h4>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {['PostgreSQL', 'SQLite', 'SQL', 'XML'].map(skill => (
                <span key={skill} className="text-xs px-2 py-1 rounded bg-white/5 text-slate-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools & Others */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-5 animate-fade-up [animation-delay:.15s] backdrop-blur-sm hover:border-amber-400/30 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400/20 to-orange-400/20 border border-amber-400/30 flex items-center justify-center">
                <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
                </svg>
              </div>
              <h4 className="font-semibold text-sm text-amber-300">Tools & More</h4>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {['Git', 'GitHub', 'VS Code', 'Postman', 'Ollama AI'].map(skill => (
                <span key={skill} className="text-xs px-2 py-1 rounded bg-white/5 text-slate-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
