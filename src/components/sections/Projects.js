'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { IoArrowForwardOutline, IoLogoGithub } from 'react-icons/io5';
import SystemTag from '../ui/SystemTag';

const projects = [
  {
    id: 'project-shrink',
    title: 'Project Shrink',
    category: 'OS SECURITY',
    desc: 'Deep research into silent privilege escalation and persistence mechanisms on Windows 10/11 environments. Educational research only.',
    tech: ['C++', 'PowerShell', 'x64dbg', 'ASM'],
    image: '/projects/Shrink.png',
    link: '#',
    github: 'https://github.com/DhruvGohel46/Shrink'
  },
  {
    id: 'infoos-pos',
    title: 'InfoOS POS',
    category: 'SYS ARCHITECTURE',
    desc: 'High-performance, offline-first POS & inventory system with zero latency and thermal automation for retail environments.',
    tech: ['React', 'Flask', 'SQLite', 'RestAPI'],
    image: '/projects/InfoOS.png',
    link: '#',
    github: 'https://github.com/DhruvGohel46/Rebill'
  },
  {
    id: 'railqr-logistics',
    title: 'RailQR Logistics',
    category: 'AI / EMBEDDED',
    desc: 'Smart India Hackathon project for railway asset tracking utilizing local Ollama AI for fault data normalization and structuring.',
    tech: ['Python', 'Ollama', 'QR Metrics', 'React'],
    image: '/projects/RailQR.png',
    link: '#',
    github: '#'
  },
  {
    id: 'wofo-assistant',
    title: 'WOFO Enterprise Assistant',
    category: 'AI / RAG',
    desc: 'Axios Hackathon project. A powerful offline-capable RAG-based enterprise knowledge assistant designed to securely query internal documentation using Gemini and Qdrant DB.',
    tech: ['Gemini 3 Flash', 'Qdrant DB', 'React', 'Node.js'],
    image: '/projects/wofo.png',
    link: 'https://dune-perfume-42d.notion.site/WOFO-RAG-Based-Enterprise-Knowledge-Assistant-2d95191e15438004b3c2c9bd8ca441f2?source=copy_link',
    github: 'https://github.com/varun-ai69/Axios-hackathon'
  },
  {
    id: 'coso-platform',
    title: 'COSO Platform',
    category: 'FULLSTACK ENG',
    desc: 'Campus wide social infrastructure with Role-Based Access Control and multi-layered data encryption mechanisms natively.',
    tech: ['Django', 'PostgreSQL', 'Tailwind', 'DRF'],
    image: '/projects/COSO.png',
    link: '#',
    github: '#'
  },
  {
    id: 'falak-al-buraimi-salon',
    title: 'Falak Al Buraimi Salon',
    category: 'WEB DEV',
    desc: 'Freelance responsive salon website for a client in Oman — animated offers, service cards, Google Maps embed. 90+ Lighthouse score.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind'],
    image: '/projects/Falak Al Buraimi Beauty Salon.png',
    link: 'https://falak-al-buraimi-beauty-saloon.netlify.app/',
    github: '#'
  }
];

export default function Projects() {
  const [highlightedId, setHighlightedId] = useState(null);

  useEffect(() => {
    const handleHighlight = (e) => {
      if (e.detail && e.detail.id) {
        setHighlightedId(e.detail.id);
        const timer = setTimeout(() => {
          setHighlightedId(null);
        }, 3000);
        return () => clearTimeout(timer);
      }
    };
    window.addEventListener('highlight-project', handleHighlight);
    return () => window.removeEventListener('highlight-project', handleHighlight);
  }, []);

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        
        <header className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8 border-b border-border pb-12">
          <div>
            <div className="mb-6">
              <SystemTag label="DIRECTORY" value="RESEARCH_OUTPUT" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Featured <br /> Systems.
            </h2>
          </div>
          <div className="max-w-xs text-right">
            <p className="text-muted-foreground text-sm leading-relaxed">
              Tactical engineering and defensive setups engineered for resilience.
            </p>
          </div>
        </header>

        {/* Mobile Snap Carousel / Desktop Grid */}
        <div className="flex overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-2 gap-6 md:gap-8 pb-8 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0">
          {projects.map((project, index) => (
            <motion.div
              id={project.id}
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`group flex flex-col border rounded-xl overflow-hidden hover:border-muted-foreground/30 flex-shrink-0 w-[85vw] md:w-auto snap-center transition-all duration-500 scroll-mt-28 ${
                highlightedId === project.id 
                  ? 'border-accent ring-2 ring-accent/50 shadow-[0_0_25px_rgba(99,102,241,0.4)] bg-accent/5 scale-[1.02]' 
                  : 'border-border bg-background'
              }`}
            >
              <div className="relative aspect-[2/1] overflow-hidden bg-muted border-b border-border">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
                <div className="absolute top-4 left-4 bg-background border border-border px-3 py-1 rounded text-[10px] font-mono tracking-widest uppercase">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold tracking-tight mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map(t => (
                    <span key={t} className="px-2 py-1 bg-muted rounded text-xs font-mono text-muted-foreground border border-border">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6 pt-6 border-t border-border">
                  {project.link !== '#' && (
                    <a href={project.link} className="flex items-center gap-2 text-sm font-semibold hover:text-accent transition-colors group/link">
                      Deployment <IoArrowForwardOutline className="group-hover/link:translate-x-0.5 transition-transform" />
                    </a>
                  )}
                  {project.github !== '#' && (
                    <a href={project.github} className="flex items-center gap-2 text-sm font-semibold hover:text-accent transition-colors">
                      <IoLogoGithub className="text-lg" /> Repository
                    </a>
                  )}
                  {project.link === '#' && project.github === '#' && (
                    <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">
                      [CLASSIFIED_INTERNAL]
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
