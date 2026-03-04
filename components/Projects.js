import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'ReBill — Production-Grade Offline POS',
    role: 'Founder & Full-Stack Developer',
    desc: 'Actively used in my own fast food shop. A modern offline-first POS & billing system built from scratch to handle real-time billing, inventory, automated reporting, and high-speed thermal receipt printing with zero downtime.',
    tech: ['React', 'Flask', 'SQLite', 'Offline-First', 'REST APIs'],
    link: '#',
    github: 'https://github.com/DhruvGohel46/Rebill'
  },
  {
    title: 'Quantum Coders — Odoo Hackathon 2025',
    role: 'Team Lead',
    desc: 'Led a 4-member team with custom Odoo ERP modules for campus club management — automating events, membership payments, and analytics dashboards.',
    tech: ['Python', 'Odoo ERP', 'PostgreSQL', 'REST API', 'Webhooks'],
    link: '#',
    github: '#'
  },
  {
    title: 'RailQR — Railway Asset Management',
    role: 'Full-Stack Developer · Smart India Hackathon 2025',
    desc: 'QR-code based asset tracking for Indian Railways. Integrated local Ollama AI to auto-standardize maintenance records into structured fault data.',
    tech: ['Flask', 'React', 'Ollama AI', 'XML/SQL', 'QR Generation'],
    link: '#',
    github: '#'
  },
  {
    title: 'COSO — College Social Platform',
    role: 'Full-Stack Developer · Campus Project',
    desc: 'Full-stack campus social platform with role-based access, secure email signup, REST APIs, file uploads, and mobile-first responsive UI.',
    tech: ['Django', 'Python', 'PostgreSQL', 'Tailwind', 'DRF'],
    link: '#',
    github: '#'
  },
  {
    title: 'Falak Al Buraimi Beauty Salon',
    role: 'Freelance Developer',
    desc: 'Responsive 4-page salon website for a client in Oman — animated offers, service cards, Google Maps embed, and client-side form validation. 90+ Lighthouse.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind'],
    link: '#',
    github: '#'
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
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`glass-card p-0 overflow-hidden group flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(79,70,229,0.1)] 
                ${index % 2 !== 0 ? 'md:mt-12' : ''} 
                ${index === 0 ? 'border-indigo-500/30 ring-1 ring-indigo-500/10' : 'border-white/10 hover:border-white/20'}`}
            >
              {index === 0 && (
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-indigo-500/5 to-transparent pointer-events-none z-0"></div>
              )}
              <div className="h-48 bg-white/5 relative flex items-center justify-center border-b border-white/10 overflow-hidden z-10 transition-colors duration-500 group-hover:bg-white/10">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] to-transparent z-10 w-full"></div>
                <div className="text-white/20 font-bold text-2xl md:text-3xl transform group-hover:scale-110 transition-transform duration-700 ease-out px-6 text-center w-full z-0">
                  {project.title.split('—')[0]}
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col z-20 -mt-10">
                <div className="bg-[#0B0F19] p-4 rounded-xl border border-white/10 shadow-xl mb-4">
                  <h3 className="text-xl font-bold group-hover:text-indigo-400 transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-indigo-300 text-sm mt-2 font-semibold">{project.role}</p>
                </div>

                <p className="text-gray-400 mb-6 flex-1 text-sm md:text-base leading-relaxed">{project.desc}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-semibold px-3 py-1 bg-white/10 rounded-full text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6 mt-auto">
                  <a href={project.link} className="flex items-center gap-2 text-sm font-semibold text-white hover:text-indigo-400 transition-colors">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a href={project.github} className="flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-white transition-colors">
                    <Github size={16} /> Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
