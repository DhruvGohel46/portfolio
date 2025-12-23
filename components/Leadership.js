import React from 'react';

export default function Leadership() {
  return (
    <section className="py-12 border-t border-white/5">
      <h2 className="text-2xl font-semibold">Leadership & Achievements</h2>
      <p className="mt-1 text-slate-300/80 max-w-3xl">
        Proven track record in hackathons, team leadership, and technical excellence through competitive programming
        and collaborative projects.
      </p>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {/* Featured: SIH 2025 */}
        <div className="rounded-xl border border-emerald-400/30 bg-gradient-to-br from-emerald-400/5 to-cyan-400/5 p-6 animate-fade-up backdrop-blur-sm relative overflow-hidden group hover:border-emerald-400/50 transition-all lg:col-span-2">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-400/10 rounded-bl-full blur-2xl"></div>
          <div className="relative flex items-start gap-4">
            <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 border border-emerald-400/30 flex items-center justify-center">
              <svg className="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                <h3 className="font-semibold text-xl text-emerald-300">Smart India Hackathon 2025 Participant</h3>
                <span className="inline-flex items-center text-xs px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 border border-emerald-400/30 font-semibold">
                  🏆 National Level
                </span>
              </div>
              <p className="text-slate-300/80 mb-3 leading-relaxed">
                Developed <span className="font-semibold text-emerald-300">RailQR</span>, a comprehensive full-stack
                railway asset management system featuring QR-based tracking and AI-powered maintenance record
                standardization for Indian Railways using Flask, React, Next.js, and Ollama AI.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Flask', 'React', 'QR Technology', 'AI/ML', '2025'].map(tag => (
                  <span key={tag} className="text-xs px-2 py-1 rounded-md bg-white/5 text-slate-400 border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Hackathon Winner */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 animate-fade-up [animation-delay:.05s] backdrop-blur-sm hover:border-indigo-400/30 transition-all">
          <div className="flex items-start gap-3 mb-3">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-400/20 to-purple-400/20 border border-indigo-400/30 flex items-center justify-center">
              <svg className="w-6 h-6 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg text-slate-100 mb-2">Odoo Hackathon 2025</h3>
              <p className="text-sm text-slate-300/80 mb-3">
                Led "Quantum Coders" to first place with a modular campus club management system built on Odoo ERP,
                automating events, payments, and analytics.
              </p>
              <span className="text-xs text-slate-400">Team Leader · 4 members</span>
            </div>
          </div>
        </div>

        {/* Web Dev Contest Winner */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 animate-fade-up [animation-delay:.1s] backdrop-blur-sm hover:border-cyan-400/30 transition-all">
          <div className="flex items-start gap-3 mb-3">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400/20 to-blue-400/20 border border-cyan-400/30 flex items-center justify-center">
              <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <div className="flex-1">
              <span className="inline-flex items-center text-xs px-2 py-1 rounded-full bg-cyan-400/20 text-cyan-300 border border-cyan-400/30 font-semibold mb-2">
                🏆 Winner
              </span>
              <h3 className="font-semibold text-lg text-slate-100 mb-2">Intercollegiate Web Dev Contest</h3>
              <p className="text-sm text-slate-300/80 mb-3">
                Won first prize in competitive web development challenge showcasing full-stack proficiency and creative
                problem-solving.
              </p>
              <span className="text-xs text-slate-400">College Level · 2024</span>
            </div>
          </div>
        </div>

        {/* Leadership Roles */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 animate-fade-up [animation-delay:.15s] backdrop-blur-sm hover:border-amber-400/30 transition-all">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-amber-400/20 to-orange-400/20 border border-amber-400/30 flex items-center justify-center">
              <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-lg text-slate-100">Leadership & Mentorship</h3>
          </div>
          <ul className="space-y-3 text-sm text-slate-300/80">
            {[
              'Team Leader for "Quantum Coders" hackathon team',
              'Volunteer Mentor for Peer Coding Workshops',
              'Active contributor to open-source projects',
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <svg className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technical Achievements */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 animate-fade-up [animation-delay:.2s] backdrop-blur-sm hover:border-fuchsia-400/30 transition-all">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-fuchsia-400/20 to-pink-400/20 border border-fuchsia-400/30 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-fuchsia-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-lg text-slate-100">Technical Excellence</h3>
          </div>
          <ul className="space-y-3 text-sm text-slate-300/80">
            {[
              'NPTEL Elite + Top 5% Topper in Python Computing (94%)',
              'Oracle Data Platform Foundations Associate Certified',
              'Built and deployed 5+ production-ready full-stack projects',
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <svg className="w-5 h-5 text-fuchsia-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Core Strengths Banner */}
      <div className="mt-6 rounded-xl border border-white/10 bg-gradient-to-r from-white/5 to-white/3 p-6 animate-fade-up [animation-delay:.25s] backdrop-blur-sm">
        <h3 className="font-semibold text-lg text-slate-100 mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Core Strengths
        </h3>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { title: 'Quick Learner', desc: 'Rapid adaptation to new technologies and frameworks', color: 'emerald' },
            { title: 'Team Collaboration', desc: 'Experienced in Agile workflows and pair programming', color: 'indigo' },
            { title: 'Problem Solver', desc: 'Strong analytical and debugging skills', color: 'cyan' },
          ].map((strength, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <div
                className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-${strength.color}-400`}
              ></div>
              <div>
                <p className="font-medium text-slate-200 text-sm">{strength.title}</p>
                <p className="text-xs text-slate-400">{strength.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
