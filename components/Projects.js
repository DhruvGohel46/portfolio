import { motion } from 'framer-motion';
import { Youtube, Shield, Code, Layout, Database, Smartphone, Github } from 'lucide-react';

const projects = [
  {
    title: 'Reverse Shell Simulation — Persistence & Privilege Escalation',
    role: 'Security Researcher',
    desc: 'Educational research project demonstrating silent privilege escalation, persistence using scheduled tasks & registry mechanisms, and remote command execution on Windows 10/11 systems. Authorized/consensual research only.',
    tech: ['CyberSecurity', 'Ethical Hacking', 'OS Security', 'Security Research', 'PowerShell'],
    link: 'https://www.youtube.com/watch?v=ztY4NmsZrxs',
    github: 'https://www.youtube.com/watch?v=zPHhtJglhHI',
    linkLabel: 'Win 11 Demo',
    githubLabel: 'Win 10 Demo',
    icon: <Shield size={48} className="text-indigo-500/20" />
  },
  {
    title: 'ReBill — Production-Grade Offline POS',
    role: 'Founder & Full-Stack Developer',
    desc: 'Actively used in my own fast food shop. A modern offline-first POS & billing system built from scratch to handle real-time billing, inventory, automated reporting, and high-speed thermal receipt printing with zero downtime.',
    tech: ['React', 'Flask', 'SQLite', 'Offline-First', 'REST APIs'],
    link: null,
    github: 'https://github.com/DhruvGohel46/Rebill',
    icon: <Database size={48} className="text-indigo-500/20" />
  },
  {
    title: 'Quantum Coders — Odoo Hackathon 2025',
    role: 'Team Lead',
    desc: 'Led a 4-member team with custom Odoo ERP modules for campus club management — automating events, membership payments, and analytics dashboards.',
    tech: ['Python', 'Odoo ERP', 'PostgreSQL', 'REST API', 'Webhooks'],
    link: null,
    github: null,
    icon: <Code size={48} className="text-indigo-500/20" />
  },
  {
    title: 'RailQR — Railway Asset Management',
    role: 'Full-Stack Developer · Smart India Hackathon 2025',
    desc: 'QR-code based asset tracking for Indian Railways. Integrated local Ollama AI to auto-standardize maintenance records into structured fault data.',
    tech: ['Flask', 'React', 'Ollama AI', 'XML/SQL', 'QR Generation'],
    link: null,
    github: null,
    icon: <Smartphone size={48} className="text-indigo-500/20" />
  },
  {
    title: 'COSO — College Social Platform',
    role: 'Full-Stack Developer · Campus Project',
    desc: 'Full-stack campus social platform with role-based access, secure email signup, REST APIs, file uploads, and mobile-first responsive UI.',
    tech: ['Django', 'Python', 'PostgreSQL', 'Tailwind', 'DRF'],
    link: null,
    github: null,
    icon: <Layout size={48} className="text-indigo-500/20" />
  },
  {
    title: 'Falak Al Buraimi Beauty Salon',
    role: 'Freelance Developer',
    desc: 'Responsive 4-page salon website for a client in Oman — animated offers, service cards, Google Maps embed, and client-side form validation. 90+ Lighthouse.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind'],
    link: null,
    github: null,
    icon: <Layout size={48} className="text-indigo-500/20" />
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Featured Work</h2>
          <div className="w-16 h-1 bg-indigo-500/50 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            Over the past year, I’ve been building tools that blend logic, automation, and thoughtful design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              className={`relative p-[1px] rounded-[2.5rem] overflow-hidden group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(79,70,229,0.1)] ${index % 2 !== 0 ? 'md:mt-12' : ''}`}
            >
              {/* Animated Border Gradient Wrapper */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[2px]"></div>

              <div className={`relative h-full bg-[#0B0F19]/80 backdrop-blur-2xl rounded-[2.5rem] border group-hover:border-indigo-500/30 transition-all duration-500 overflow-hidden flex flex-col z-10 shadow-[0_8px_30px_rgb(0,0,0,0.12)]
                ${index === 0 ? 'border-indigo-500/30 ring-1 ring-indigo-500/10' : 'border-white/10'}`}>

                {/* Deep Ambient Glow */}
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-bl from-indigo-500/20 to-transparent rounded-full opacity-20 group-hover:opacity-50 transition-all duration-700 blur-[60px] group-hover:scale-150"></div>
                <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-gradient-to-tr from-indigo-500/20 to-transparent rounded-full opacity-0 group-hover:opacity-30 transition-all duration-700 blur-[60px] group-hover:scale-150"></div>

                {index === 0 && (
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-indigo-500/5 to-transparent pointer-events-none z-0"></div>
                )}

                <div className="h-48 bg-white/5 relative flex items-center justify-center border-b border-white/10 overflow-hidden z-20 transition-colors duration-500 group-hover:bg-white/10">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] to-transparent z-10 w-full"></div>
                  <div className="relative z-0 transform group-hover:scale-110 transition-transform duration-700 ease-out">
                    {project.icon ? project.icon : (
                      <div className="text-white/20 font-bold text-2xl md:text-3xl px-6 text-center w-full">
                        {project.title.split('—')[0]}
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col z-20 -mt-10">
                  <div className="bg-[#0B0F19] p-4 rounded-3xl border border-white/10 shadow-xl mb-4 relative overflow-hidden group-hover:border-white/20 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <h3 className="text-xl font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-500 leading-tight relative z-10">
                      {project.title}
                    </h3>
                    <p className="text-indigo-300 text-sm mt-2 font-semibold relative z-10">{project.role}</p>
                  </div>

                  <p className="text-gray-400 mb-6 flex-1 text-sm md:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-500 relative z-10">{project.desc}</p>

                  <div className="flex flex-wrap gap-2 mb-8 relative z-10">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-xs font-semibold px-4 py-2 bg-white/5 rounded-full text-gray-300 border border-white/10 group-hover:bg-white/10 transition-colors duration-300">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-6 mt-auto relative z-10">
                    {project.link && project.link !== '#' && (
                      <a href={project.link} className="flex items-center gap-2 text-sm font-bold text-white hover:text-indigo-400 transition-colors group/link">
                        <Youtube size={16} className="group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" /> {project.linkLabel || 'Live Demo'}
                      </a>
                    )}
                    {project.github && project.github !== '#' && (
                      <a href={project.github} className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white transition-colors group/git">
                        {project.github.includes('youtube') ? (
                          <Youtube size={16} className="group-hover/git:-translate-y-0.5 transition-transform" />
                        ) : (
                          <Github size={16} className="group-hover/git:-translate-y-0.5 transition-transform" />
                        )}
                        {project.githubLabel || 'Source Code'}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
