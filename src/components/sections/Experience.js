'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoBriefcaseOutline, IoTrophyOutline, IoFlashOutline, IoChevronDownOutline } from 'react-icons/io5';
import SystemTag from '../ui/SystemTag';

const experiences = [
  {
    type: 'INTERNSHIP',
    id: 'oaisis',
    title: 'AICTE Oasis Infobyte',
    role: 'Python Engineering Intern',
    period: '2024 - PRESENT',
    desc: 'Translating tactical logic into secure, production-ready system tools. Focused on GUI development (PyQt6) and thread-safe API architectures.',
    details: ['Vizo Secure Voice System', 'Tactical Password Engine', 'API Audit Integration'],
    icon: IoBriefcaseOutline
  },
  {
    type: 'HACKATHON',
    id: 'railvision',
    title: 'RailVision AI',
    role: 'Top 6 Finalist — Hack Innovate 2026',
    period: 'FEB 2026',
    desc: 'Engineered a high-performance AI pipeline to restore motion-blurred train footage and accurately extract wagon numbers.',
    details: ['52 FPS on RTX 2050', '96.2% OCR Accuracy', 'NAFNet Deblurring'],
    icon: IoTrophyOutline
  },
  {
    type: 'HACKATHON',
    id: 'sahaay',
    title: 'SaHaay Emergency Grid',
    role: 'Top 10 Finalist — GDG Autonomous Hacks',
    period: 'JAN 2026',
    desc: 'Tactical, offline-first autonomous ambulance dispatch system with GSM failover layers for mission-critical reliability.',
    details: ['<200ms Dispatch Latency', 'Self-Healing Failover', 'GSM Disaster Layer'],
    icon: IoFlashOutline
  }
];

export default function Experience() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        
        <header className="mb-20">
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
                key={exp.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div 
                  className={`border transition-all duration-300 rounded-xl overflow-hidden cursor-pointer ${
                    isExpanded ? 'bg-muted border-border' : 'bg-background hover:bg-muted/50 border-border'
                  }`}
                  onClick={() => setExpanded(isExpanded ? null : exp.id)}
                >
                  <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    
                    <div className="flex items-center gap-6">
                      <div className={`text-2xl p-4 rounded-lg bg-background border transition-colors ${isExpanded ? 'border-border text-foreground' : 'border-transparent text-muted-foreground'}`}>
                        <Icon />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-[10px] font-mono font-bold tracking-widest text-foreground bg-background px-2 py-0.5 rounded border border-border">
                            {exp.type}
                          </span>
                          <span className="text-[10px] font-mono text-muted-foreground">
                            {exp.period}
                          </span>
                        </div>
                        <h3 className={`text-xl font-bold mb-1 transition-colors ${isExpanded ? 'text-foreground' : 'text-muted-foreground'}`}>
                          {exp.title}
                        </h3>
                        <p className="text-sm font-medium text-foreground">
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
                        <div className="px-6 pb-6 md:px-8 md:pb-8 border-t border-border mt-2 pt-6">
                          <p className="text-muted-foreground leading-relaxed md:w-2/3 mb-6">
                            {exp.desc}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {exp.details.map(detail => (
                              <span key={detail} className="px-3 py-1.5 rounded bg-background border border-border text-[10px] font-mono tracking-widest uppercase text-muted-foreground">
                                {detail}
                              </span>
                            ))}
                          </div>
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
