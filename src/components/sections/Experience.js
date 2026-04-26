'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoBriefcaseOutline, IoTrophyOutline, IoFlashOutline, IoChevronDownOutline, IoHardwareChipOutline, IoChatbubblesOutline, IoLogoGithub, IoDocumentTextOutline, IoVideocamOutline } from 'react-icons/io5';
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
    id: 'sahaay',
    title: 'SaHaay Emergency Grid',
    role: 'Top 10 Finalist — GDG Autonomous Hacks 26 (Offline)',
    period: 'JAN 2026',
    desc: 'Cloud-native, offline-first autonomous ambulance dispatch system designed to replace human guesswork with intelligent orchestration. Engineered custom GSM/SMS transport layer ("Clockless" state machine), Ripple Search Algorithm for progressive driver discovery, and Self-Healing Failover for race conditions. Integrated API for traffic signal pre-emption (Green Corridor).',
    details: ['<200ms Dispatch Latency', 'Node.js/Express', 'MongoDB', 'Ripple Search', 'GSM Failover'],
    github: 'https://github.com/DhruvGohel46/emergency-dispatch-system',
    icon: IoFlashOutline
  },
  {
    type: 'HACKATHON',
    id: 'agentic-quiz',
    title: 'Autonomous Knowledge Extractor',
    role: 'GDG Autonomous Hacks 26 (Online)',
    period: 'JAN 2026',
    desc: 'Developed an Agentic AI solution to transform educational content. Built an AI Agent that extracts key concepts automatically, organizes data hierarchically, generates unique quiz questions, and validates difficulty logic through self-checking mechanisms. Spearheaded the Frontend Architecture for intuitive knowledge visualization.',
    details: ['Agentic AI', 'React', 'Self-Checking Logic', 'Knowledge Visualization'],
    github: 'https://github.com/varun-ai69/Agentic---AI-',
    icon: IoHardwareChipOutline
  },
  {
    type: 'HACKATHON',
    id: 'railvision',
    title: 'RailVision AI',
    role: 'Top 6 Finalist — Hack Innovate 2026',
    period: 'FEB 2026',
    desc: 'Engineered a pipeline that ensures high visual fidelity while optimizing for computational efficiency for "Motion Blur Mitigation for High-Speed Wagon Monitoring". Utilized NAFNet (deblurring) and Real-ESRGAN (super-resolution). Optimized extraction logic to trigger OCR on every 5th frame.',
    details: ['52 FPS on RTX 2050', '96.2% OCR Accuracy', 'NAFNet & Real-ESRGAN', 'Strategic OCR Sampling'],
    github: 'https://github.com/DhruvGohel46/hack-innovate-2026',
    icon: IoTrophyOutline
  },
  {
    type: 'HACKATHON',
    id: 'wofo',
    title: 'WOFO Enterprise Assistant',
    role: 'Axios Hackathon',
    period: 'DEC 2025',
    desc: 'Built WOFO, a powerful RAG-based enterprise knowledge assistant. An offline-capable AI assistant designed to streamline enterprise knowledge management. Allows employees to instantly query internal documents and get accurate, context-aware answers without hallucination. Led the Frontend development and integrated secure Authentication.',
    details: ['RAG', 'Gemini 3 Flash', 'Qdrant Vector DB', 'React', 'Node.js'],
    github: 'https://github.com/varun-ai69/Axios-hackathon',
    blog: 'https://medium.com/@kushwahavarun988/wofo-rag-based-enterprise-knowledge-offline-assistant-302dc887933a',
    docs: 'https://dune-perfume-42d.notion.site/WOFO-RAG-Based-Enterprise-Knowledge-Assistant-2d95191e15438004b3c2c9bd8ca441f2?source=copy_link',
    youtube: 'https://youtu.be/T9rLANULhrg?si=7Q0lAvDePAo_sbBG',
    icon: IoChatbubblesOutline
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
                        <div className="px-6 pb-6 md:px-8 md:pb-8 border-t border-border mt-2 pt-6 cursor-default" onClick={(e) => e.stopPropagation()}>
                          <p className="text-muted-foreground leading-relaxed md:w-2/3 mb-6">
                            {exp.desc}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-6">
                            {exp.details.map(detail => (
                              <span key={detail} className="px-3 py-1.5 rounded bg-background border border-border text-[10px] font-mono tracking-widest uppercase text-muted-foreground">
                                {detail}
                              </span>
                            ))}
                          </div>
                          
                          {(exp.github || exp.blog || exp.docs || exp.youtube) && (
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
