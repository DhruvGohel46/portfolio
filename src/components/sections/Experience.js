'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  IoBriefcaseOutline, 
  IoTrophyOutline, 
  IoFlashOutline, 
  IoChevronDownOutline, 
  IoHardwareChipOutline, 
  IoChatbubblesOutline, 
  IoLogoGithub, 
  IoDocumentTextOutline, 
  IoVideocamOutline,
  IoMedalOutline,
  IoArrowForwardOutline
} from 'react-icons/io5';
import SystemTag from '../ui/SystemTag';

import { experiences } from '@/utils/portfolioData';

export default function Experience() {
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    const handleHighlight = (e) => {
      if (e.detail && e.detail.id) {
        setExpanded(e.detail.id);
        setTimeout(() => {
          const el = document.getElementById(e.detail.id);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 100);
      }
    };
    window.addEventListener('highlight-experience', handleHighlight);
    return () => window.removeEventListener('highlight-experience', handleHighlight);
  }, []);

  return (
    <section id="experience" className="py-16 sm:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        
        <header className="mb-12 sm:mb-20">
          <div className="mb-6">
            <SystemTag label="TIMELINE" value="FIELD_OPERATIONS" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Experience & Output.
          </h2>
        </header>
 
        <div className="flex flex-col gap-4">
          {experiences.map((exp, index) => {
            const isExpanded = expanded === exp.id;
            const Icon = exp.icon;

            return (
              <motion.div
                id={exp.id}
                key={exp.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="scroll-mt-28"
              >
                <div 
                  className={`border transition-all duration-300 rounded-xl overflow-hidden cursor-pointer ${
                    isExpanded ? 'bg-muted border-border' : 'bg-background hover:bg-muted/50 border-border'
                  }`}
                  onClick={() => setExpanded(isExpanded ? null : exp.id)}
                >
                  <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    
                    <div className="flex items-start gap-4 sm:gap-6 flex-1 min-w-0">
                      <div className={`text-xl sm:text-2xl p-3 sm:p-4 rounded-lg bg-background border transition-colors flex-shrink-0 ${isExpanded ? 'border-border text-foreground' : 'border-transparent text-muted-foreground'}`}>
                        <Icon />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                          <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-widest text-foreground bg-background px-2 py-0.5 rounded border border-border">
                            {exp.type}
                          </span>
                          <span className="text-[9px] sm:text-[10px] font-mono text-muted-foreground">
                            {exp.period}
                          </span>
                        </div>
                        <h3 className={`text-lg sm:text-xl font-bold mb-1 transition-colors ${isExpanded ? 'text-foreground' : 'text-muted-foreground'}`}>
                          {exp.title}
                        </h3>
                        <p className="text-xs sm:text-sm font-medium text-foreground">
                          {exp.role}
                        </p>
                      </div>
                    </div>

                    <IoChevronDownOutline className={`text-xl text-muted-foreground transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                  </div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 md:px-8 md:pb-8 border-t border-border mt-2 pt-6 cursor-default" onClick={(e) => e.stopPropagation()}>
                          <p className="text-muted-foreground leading-relaxed md:w-2/3 mb-6 text-sm sm:text-base">
                            {exp.desc}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-6">
                            {exp.details.map(detail => (
                              <span key={detail} className="px-2 py-1 sm:px-3 sm:py-1.5 rounded bg-background border border-border text-[9px] sm:text-[10px] font-mono tracking-widest uppercase text-muted-foreground">
                                {detail}
                              </span>
                            ))}
                          </div>
                          
                          {(exp.github || exp.blog || exp.docs || exp.youtube || exp.projectMatch) && (
                            <div className="flex flex-wrap gap-6 pt-6 border-t border-border">
                              {exp.github && (
                                <a href={exp.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold hover:text-accent transition-colors">
                                  <IoLogoGithub className="text-lg" /> GitHub
                                </a>
                              )}
                              {exp.blog && (
                                <a href={exp.blog} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold hover:text-accent transition-colors">
                                  <IoDocumentTextOutline className="text-lg" /> Blog Post
                                </a>
                              )}
                              {exp.docs && (
                                <a href={exp.docs} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold hover:text-accent transition-colors">
                                  <IoDocumentTextOutline className="text-lg" /> Notion Docs
                                </a>
                              )}
                              {exp.youtube && (
                                <a href={exp.youtube} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold hover:text-accent transition-colors">
                                  <IoVideocamOutline className="text-lg" /> YouTube Demo
                                </a>
                              )}
                              {exp.projectMatch && (
                                <button 
                                  onClick={(e) => {
                                    e.preventDefault();
                                    window.dispatchEvent(new CustomEvent('highlight-project', { detail: { id: exp.projectMatch } }));
                                    const isMobile = window.innerWidth < 768;
                                    const targetId = isMobile ? `mob-${exp.projectMatch}` : `desk-${exp.projectMatch}`;
                                    const el = document.getElementById(targetId) || document.getElementById(exp.projectMatch);
                                    if (el) {
                                      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                    }
                                  }}
                                  className="flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover transition-colors cursor-pointer bg-transparent border-0 p-0 outline-none"
                                >
                                  <IoArrowForwardOutline className="text-lg" /> View Project Details
                                </button>
                              )}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
