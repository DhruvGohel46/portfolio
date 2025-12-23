import React, { useEffect, useState } from 'react';

export default function Contact() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <section id="contact" className="py-12 border-t border-white/5">
      <h2 className="text-2xl font-semibold">Let's Connect</h2>
      <p className="mt-1 text-slate-300/80 max-w-3xl">
        Have a project in mind or want to collaborate? I'd love to hear from you. Feel free to reach out through any of
        the channels below.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {/* Contact Form */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm lg:col-span-2 animate-fade-up">
          <h3 className="font-semibold text-lg text-slate-100 mb-6">Send me a message</h3>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="space-y-5"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="hidden">
              <input name="bot-field" />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-slate-200 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-slate-100 placeholder-slate-400 transition-all focus:outline-none focus:border-emerald-400/50 focus:bg-white/10"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-200 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-slate-100 placeholder-slate-400 transition-all focus:outline-none focus:border-emerald-400/50 focus:bg-white/10"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-200 mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-slate-100 placeholder-slate-400 transition-all focus:outline-none focus:border-emerald-400/50 focus:bg-white/10"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-200 mb-2">Message</label>
              <textarea
                name="message"
                required
                rows="5"
                className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-slate-100 placeholder-slate-400 transition-all focus:outline-none focus:border-emerald-400/50 focus:bg-white/10 resize-none"
                placeholder="Tell me about your project or inquiry..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 border border-emerald-400/30 text-slate-100 font-semibold hover:from-emerald-400/30 hover:to-cyan-400/30 hover:border-emerald-400/50 transition-all flex items-center justify-center gap-2 group"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info Cards */}
        <div className="space-y-4 animate-fade-up [animation-delay:.05s]">
          {/* Email */}
          <a
            href="mailto:Dhruvgohel460@gmail.com"
            className="group rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm hover:border-emerald-400/30 hover:bg-white/10 transition-all block"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 border border-emerald-400/30 flex items-center justify-center flex-shrink-0 group-hover:border-emerald-400/50 transition-all">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-slate-400 uppercase tracking-wider">Email</p>
                <p className="text-sm font-medium text-slate-200 truncate group-hover:text-emerald-300 transition-colors">
                  Dhruvgohel460@gmail.com
                </p>
              </div>
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:+919924885705"
            className="group rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm hover:border-indigo-400/30 hover:bg-white/10 transition-all block"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-400/20 to-purple-400/20 border border-indigo-400/30 flex items-center justify-center flex-shrink-0 group-hover:border-indigo-400/50 transition-all">
                <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-slate-400 uppercase tracking-wider">Phone</p>
                <p className="text-sm font-medium text-slate-200 group-hover:text-indigo-300 transition-colors">
                  +91 99248 85705
                </p>
              </div>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/dhruv-gohel-220194322"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm hover:border-cyan-400/30 hover:bg-white/10 transition-all block"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400/20 to-blue-400/20 border border-cyan-400/30 flex items-center justify-center flex-shrink-0 group-hover:border-cyan-400/50 transition-all">
                <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-slate-400 uppercase tracking-wider">LinkedIn</p>
                <p className="text-sm font-medium text-slate-200 group-hover:text-cyan-300 transition-colors truncate">
                  dhruv-gohel-220194322
                </p>
              </div>
            </div>
          </a>

          {/* Location */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400/20 to-orange-400/20 border border-amber-400/30 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider">Location</p>
                <p className="text-sm font-medium text-slate-200">Ahmedabad, Gujarat, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-10 pt-10 border-t border-white/5">
        <p className="text-slate-400 text-sm mb-4">Find me on social platforms:</p>
        <div className="flex gap-3 flex-wrap">
          {[
            {
              name: 'GitHub',
              href: 'https://github.com',
              icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
            },
            {
              name: 'LinkedIn',
              href: 'https://linkedin.com/in/dhruv-gohel-220194322',
              icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
            },
            {
              name: 'Twitter',
              href: 'https://twitter.com',
              icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75-2.25 7-7 7-7z',
            },
          ].map(social => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-slate-100 hover:border-white/20 hover:bg-white/10 transition-all"
              title={social.name}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d={social.icon} />
              </svg>
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-10 pt-10 border-t border-white/5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-sm text-slate-400">
            © {year} Dhruv Gohel. All rights reserved.
          </p>
          <p className="text-sm text-slate-400">
            Built with Next.js, React, and Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
}
