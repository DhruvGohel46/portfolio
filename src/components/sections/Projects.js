'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { IoArrowForwardOutline, IoLogoGithub } from 'react-icons/io5';
import SystemTag from '../ui/SystemTag';
import { projects } from '@/utils/portfolioData';

export const getProjectLinks = (project) => {
  return {
    github: project.github && project.github !== '#' ? project.github : null,
    deployment: project.link && project.link !== '#' ? project.link : null,
    youtubeWin10: project.youtubeWin10 || null,
    youtubeWin11: project.youtubeWin11 || null,
  };
};

export default function Projects() {
  const [highlightedId, setHighlightedId] = useState(null);

  useEffect(() => {
    const handleHighlight = (e) => {
      if (e.detail && e.detail.id) {
        setHighlightedId(e.detail.id);
        
        setTimeout(() => {
          const isMobile = window.innerWidth < 768;
          const targetId = isMobile ? `mob-${e.detail.id}` : `desk-${e.detail.id}`;
          const el = document.getElementById(targetId) || document.getElementById(e.detail.id);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 100);

        const timer = setTimeout(() => {
          setHighlightedId(null);
        }, 3000);
        return () => clearTimeout(timer);
      }
    };
    window.addEventListener('highlight-project', handleHighlight);
    return () => window.removeEventListener('highlight-project', handleHighlight);
  }, []);

  const renderCard = (project, index, isDuplicate = false, isMobile = false) => {
    const isHighlighted = !isDuplicate && highlightedId === project.id;
    const { github, deployment, youtubeWin10, youtubeWin11 } = getProjectLinks(project);
    
    const CardContent = (
      <>
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
        
        <div className="p-5 sm:p-6 md:p-8 flex flex-col flex-grow">
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

          <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-border">
            {deployment && (
              <a href={deployment} className="flex items-center gap-2 text-sm font-semibold hover:text-accent transition-colors group/link">
                Deployment <IoArrowForwardOutline className="group-hover/link:translate-x-0.5 transition-transform" />
              </a>
            )}
            {github && (
              <a href={github} className="flex items-center gap-2 text-sm font-semibold hover:text-accent transition-colors">
                <IoLogoGithub className="text-lg" /> Repository
              </a>
            )}
            {youtubeWin10 && (
              <a href={youtubeWin10} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold hover:text-accent transition-colors group/link">
                Win 10 Demo <IoArrowForwardOutline className="group-hover/link:translate-x-0.5 transition-transform" />
              </a>
            )}
            {youtubeWin11 && (
              <a href={youtubeWin11} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold hover:text-accent transition-colors group/link">
                Win 11 Demo <IoArrowForwardOutline className="group-hover/link:translate-x-0.5 transition-transform" />
              </a>
            )}
            {project.experienceMatch && (
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  window.dispatchEvent(new CustomEvent('highlight-experience', { detail: { id: project.experienceMatch } }));
                }}
                className="flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover transition-colors cursor-pointer bg-transparent border-0 p-0 outline-none group/link"
              >
                Hackathon Details <IoArrowForwardOutline className="group-hover/link:translate-x-0.5 transition-transform" />
              </button>
            )}
            {!deployment && !github && !youtubeWin10 && !youtubeWin11 && !project.experienceMatch && (
              <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">
                [CLASSIFIED_INTERNAL]
              </span>
            )}
          </div>
        </div>
      </>
    );

    if (isMobile) {
      if (isDuplicate) {
        return (
          <div
            key={`${project.title}-dup-${index}`}
            className={`group flex flex-col border rounded-xl overflow-hidden hover:border-muted-foreground/30 flex-shrink-0 w-[80vw] sm:w-[450px] transition-all duration-500 border-border bg-background`}
          >
            {CardContent}
          </div>
        );
      }
      return (
        <motion.div
          id={`mob-${project.id}`}
          key={`${project.title}-mob-${index}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className={`group flex flex-col border rounded-xl overflow-hidden hover:border-muted-foreground/30 flex-shrink-0 w-[80vw] sm:w-[450px] transition-all duration-500 scroll-mt-28 ${
            isHighlighted 
              ? 'border-accent ring-2 ring-accent/50 shadow-[0_0_25px_rgba(99,102,241,0.4)] bg-accent/5 scale-[1.02]' 
              : 'border-border bg-background'
          }`}
        >
          {CardContent}
        </motion.div>
      );
    }

    return (
      <motion.div
        id={`desk-${project.id}`}
        key={`${project.title}-desk-${index}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        className={`group flex flex-col border rounded-xl overflow-hidden hover:border-muted-foreground/30 w-full transition-all duration-500 scroll-mt-28 ${
          isHighlighted 
            ? 'border-accent ring-2 ring-accent/50 shadow-[0_0_25px_rgba(99,102,241,0.4)] bg-accent/5 scale-[1.02]' 
            : 'border-border bg-background'
        }`}
      >
        {CardContent}
      </motion.div>
    );
  };

  return (
    <section id="projects" className="py-16 sm:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        
        <header className="mb-12 sm:mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8 border-b border-border pb-8 md:pb-12">
          <div>
            <div className="mb-6">
              <SystemTag label="DIRECTORY" value="RESEARCH_OUTPUT" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Featured <br /> Systems.
            </h2>
          </div>
          <div className="max-w-xs text-left md:text-right">
            <p className="text-muted-foreground text-sm leading-relaxed">
              Tactical engineering and defensive setups engineered for resilience.
            </p>
          </div>
        </header>

        {/* Mobile: Infinite Loop Marquee Slider */}
        <div className="md:hidden relative w-full overflow-hidden -mx-6 px-6">
          <div className="animate-marquee flex gap-6 pb-8">
            <div className="flex gap-6 flex-shrink-0">
              {projects.map((project, index) => renderCard(project, index, false, true))}
            </div>
            <div className="flex gap-6 flex-shrink-0" aria-hidden="true">
              {projects.map((project, index) => renderCard(project, index, true, true))}
            </div>
          </div>
        </div>

        {/* Desktop: Static 2-Column Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => renderCard(project, index, false, false))}
        </div>
        
      </div>
    </section>
  );
}
