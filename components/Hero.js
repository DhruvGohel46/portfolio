import React from 'react';

export default function Hero() {
  return (
    <section className="py-16 sm:py-40">
      <div className="grid gap-10 md:grid-cols-2 items-center">
        {/* Profile Image */}
        <div className="order-2 md:order-1 animate-fade-up">
          <div className="relative w-[350px] h-[350px] mx-auto md:mx-0">
            <div className="clip-hex overflow-hidden">
              <img
                src="/profile.jpg"
                alt="Dhruv Gohel"
                className="w-full h-full object-cover border-4 border-emerald-400/20 shadow-glow"
              />
            </div>
            <div className="absolute -inset-0.5 clip-hex bg-gradient-to-br from-emerald-400 to-cyan-400 opacity-20 blur"></div>
          </div>
        </div>

        {/* Text Content */}
        <div className="order-1 md:order-2 animate-fade-up">
          <span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300 shadow-glow">
            Computer Science Student
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold leading-tight">
            Aspiring Computer Science Engineer focused on Data Science
          </h1>
          <p className="mt-3 text-slate-300/80 max-w-prose">
            Advanced Python skills with libraries for analysis. Proficient in Java, C, and web development. Leadership
            experience in event coordination and team projects.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center rounded-lg bg-emerald-400 text-black font-semibold px-5 py-3 hover:brightness-95 active:brightness-90 transition focus:outline-none focus:ring-2 focus:ring-emerald-300"
            >
              Contact Me
            </a>
            <a
              href="#work"
              className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-slate-100 hover:bg-white/10 transition"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
