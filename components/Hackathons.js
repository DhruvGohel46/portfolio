import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Trophy, Brain, Server, Activity, ArrowRight, Github, ExternalLink, ShieldAlert } from 'lucide-react';

const hackathons = [
    {
        id: 1,
        title: 'RailVision AI',
        badge: 'Top 6 Finalist — Hack Innovate 2026',
        icon: <Activity className="text-cyan-400" size={24} />,
        color: 'from-cyan-500/20',
        problem: 'Standard OCR fails at 100km/h due to severe motion blur.',
        solution: 'We engineered a high-performance AI pipeline to restore motion-blurred train footage and accurately extract wagon numbers.',
        architecture: [
            'NAFNet for motion deblurring',
            'Real-ESRGAN for super-resolution',
            'Strategic OCR Sampling (every 5th frame)',
            '52 FPS on RTX 2050',
            '96.2% OCR accuracy'
        ],
        metrics: ['52 FPS', '96.2% Accuracy', 'Optimized Frame Sampling', 'Real-time inference'],
        ctaText: 'View Code',
        ctaLink: 'https://github.com/DhruvGohel46/hack-innovate-2026'
    },
    {
        id: 2,
        title: 'SaHaay — Autonomous Emergency Grid',
        badge: 'Top 10 Finalist — GDG Autonomous Hacks 26',
        icon: <ShieldAlert className="text-rose-400" size={24} />,
        color: 'from-rose-500/20',
        problem: 'Emergency systems fail during poor connectivity and rely heavily on manual coordination.',
        solution: 'Cloud-native, offline-first autonomous ambulance dispatch system with sub-200ms response time.',
        architecture: [
            'Node.js event-driven architecture',
            'MongoDB geo-spatial indexing',
            '<200ms dispatch latency',
            'GSM/SMS Disaster Layer',
            'Clockless State Machine',
            'Ripple Search Algorithm (2km → 5km → 10km)',
            'Self-Healing Failover',
            'Traffic Signal API Integration'
        ],
        metrics: ['700+ teams competed', 'Top 10 Finalist', 'Offline GSM recovery system', 'Autonomous failover'],
        ctaText: 'View Architecture',
        ctaLink: 'https://github.com/DhruvGohel46/emergency-dispatch-system'
    },
    {
        id: 3,
        title: 'Autonomous Knowledge Extractor',
        badge: 'GDG Pre-Phase Selection Round',
        icon: <Brain className="text-purple-400" size={24} />,
        color: 'from-purple-500/20',
        problem: 'Manual concept extraction and test generation is time-consuming and non-adaptive.',
        solution: 'Agentic AI system that extracts key concepts, builds hierarchical structure, generates 10 quiz questions, and self-validates difficulty logic.',
        roleInfo: 'Led Frontend Architecture & Knowledge Visualization UI.',
        tech: ['Agentic AI', 'Knowledge Graphs', 'React', 'Data Visualization'],
        metrics: ['Concept Extraction', 'Hierarchical Structuring', 'Automated Quizzes', 'Self-validation Logic'],
        ctaText: 'View Code',
        ctaLink: 'https://github.com/varun-ai69/Agentic---AI-'
    },
    {
        id: 4,
        title: 'WOFO — RAG Enterprise Knowledge Assistant',
        badge: 'Axios Hackathon (36 Hours Build)',
        icon: <Server className="text-emerald-400" size={24} />,
        color: 'from-emerald-500/20',
        problem: 'Enterprise data silos prevent fast, secure offline-capable knowledge retrieval.',
        solution: 'Offline-capable Retrieval-Augmented Generation (RAG) assistant built from scratch within 36 hours.',
        stack: [
            'Gemini 3 Flash',
            'HuggingFace Sentence Transformers',
            'Qdrant Vector DB',
            'Node.js + Express',
            'React',
            'MongoDB'
        ],
        metrics: ['36 Hour Delivery', 'Offline-capable RAG', 'Vector Embedded Search', 'Enterprise Scalability'],
        links: [
            { text: 'GitHub', url: 'https://github.com/varun-ai69/Axios-hackathon' },
            { text: 'Blog', url: '#' },
            { text: 'Docs', url: '#' },
            { text: 'Demo', url: '#' }
        ]
    }
];

export default function Hackathons() {
    const [expandedId, setExpandedId] = useState(null);

    return (
        <section id="hackathons" className="py-32 px-6 relative z-10">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-indigo-900/10 via-purple-900/10 to-transparent blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-6xl mx-auto relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 mb-8 border-indigo-500/20 backdrop-blur-md shadow-[0_0_30px_rgba(79,70,229,0.15)]">
                        <Trophy size={18} className="text-yellow-400" />
                        <span className="text-white text-xs sm:text-sm font-bold tracking-widest uppercase flex items-center gap-2">
                            Engineering Under Pressure
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
                        Hackathon <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Finalist Builds</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-400 font-medium mb-10 max-w-4xl mx-auto leading-relaxed">
                        National-level AI systems, offline-first architectures & real-time optimization challenges.
                    </p>

                    <div className="mt-8 border-l-4 border-l-indigo-500/50 bg-gradient-to-r from-indigo-900/20 to-transparent p-6 sm:p-8 rounded-r-2xl inline-block text-left relative overflow-hidden group">
                        <div className="absolute inset-0 bg-indigo-500/5 group-hover:bg-indigo-500/10 transition-colors duration-500"></div>
                        <p className="text-2xl sm:text-3xl font-bold italic text-indigo-100 relative z-10 tracking-tight">
                            “Build fast. Optimize hard. Ship under pressure.”
                        </p>
                    </div>
                </motion.div>

                {/* Expandable Grid Layout */}
                <div className="grid grid-cols-1 gap-6">
                    {hackathons.map((project, index) => {
                        const isExpanded = expandedId === project.id;

                        return (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`glass-card border overflow-hidden transition-all duration-500 relative bg-[#0B0F19]/60 backdrop-blur-xl
                  ${isExpanded ? 'border-white/30 shadow-[0_0_40px_rgba(79,70,229,0.15)]' : 'border-white/10 hover:border-white/20 hover:bg-white/5 cursor-pointer'}`}
                                onClick={() => !isExpanded && setExpandedId(project.id)}
                            >
                                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${project.color} to-transparent rounded-bl-full opacity-0 transition-opacity duration-700 blur-3xl ${isExpanded ? 'opacity-40' : 'group-hover:opacity-20'}`}></div>

                                {/* Header (Always Visible) */}
                                <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                                    <div className="flex items-start gap-5">
                                        <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 shadow-lg ${isExpanded ? 'bg-white/10 border-white/20' : ''}`}>
                                            {project.icon}
                                        </div>
                                        <div>
                                            <div className="flex flex-wrap items-center gap-3 mb-2">
                                                <h3 className="text-2xl font-bold text-white tracking-wide">{project.title}</h3>
                                                <span className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-indigo-300 text-xs font-bold tracking-wider uppercase backdrop-blur-sm">
                                                    {project.badge}
                                                </span>
                                            </div>
                                            <p className="text-gray-400 text-sm leading-relaxed max-w-3xl line-clamp-1 md:line-clamp-none">
                                                {isExpanded ? '' : project.problem}
                                            </p>
                                        </div>
                                    </div>

                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setExpandedId(isExpanded ? null : project.id);
                                        }}
                                        className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 hover:bg-white/10 transition-all ${isExpanded ? 'rotate-180 bg-white/10 border-white/30 text-white' : 'text-gray-400'}`}
                                    >
                                        <ChevronDown size={20} />
                                    </button>
                                </div>

                                {/* Expanded Details Content */}
                                <AnimatePresence>
                                    {isExpanded && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: "easeInOut" }}
                                            className="overflow-hidden border-t border-white/5"
                                        >
                                            <div className="p-6 md:p-8 md:pt-6 pt-0 relative z-10">
                                                <div className="grid lg:grid-cols-3 gap-10">

                                                    {/* Left Column: Problem & Solution */}
                                                    <div className="lg:col-span-2 space-y-8">
                                                        <div>
                                                            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-3">The Problem</h4>
                                                            <p className="text-gray-300 leading-relaxed text-lg">{project.problem}</p>
                                                        </div>
                                                        <div>
                                                            <h4 className="text-sm font-bold text-indigo-400 uppercase tracking-widest mb-3">Engineered Solution</h4>
                                                            <p className="text-white font-medium leading-relaxed text-lg bg-gradient-to-r from-indigo-500/10 to-transparent p-5 rounded-xl border border-indigo-500/20">
                                                                {project.solution}
                                                            </p>
                                                        </div>

                                                        {/* Architecture/Stack List */}
                                                        {(project.architecture || project.stack || project.tech) && (
                                                            <div>
                                                                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                                                                    <Server size={14} /> Core Architecture & Stack
                                                                </h4>
                                                                <div className="grid sm:grid-cols-2 gap-3">
                                                                    {(project.architecture || project.stack || project.tech).map((item, i) => (
                                                                        <div key={i} className="flex items-start gap-2 text-gray-300">
                                                                            <span className="text-indigo-500 mt-1">▹</span>
                                                                            <span className="text-sm md:text-base font-medium">{item}</span>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* My Contribution specific */}
                                                        {project.roleInfo && (
                                                            <div>
                                                                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-3">My Contribution</h4>
                                                                <p className="text-gray-300 leading-relaxed text-base border-l-2 border-indigo-500/50 pl-4">{project.roleInfo}</p>
                                                            </div>
                                                        )}
                                                    </div>

                                                    {/* Right Column: Metrics & CTA */}
                                                    <div className="flex flex-col gap-6">
                                                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                                                            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-5 flex items-center gap-2">
                                                                <Activity size={16} className="text-emerald-400" /> Impact Metrics
                                                            </h4>
                                                            <div className="flex flex-col gap-3">
                                                                {project.metrics.map((metric, i) => (
                                                                    <div key={i} className="flex items-center gap-3 bg-[#0B0F19] p-3 rounded-lg border border-white/5">
                                                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                                                                        <span className="text-gray-200 text-sm font-bold tracking-wide">{metric}</span>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>

                                                        {/* CTA Links */}
                                                        <div className="mt-auto pt-4 flex flex-col gap-3">
                                                            {project.ctaLink && (
                                                                <a href={project.ctaLink} target="_blank" rel="noopener noreferrer" className="w-full bg-white text-black px-6 py-4 rounded-xl font-bold flex items-center justify-between hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] group">
                                                                    <span className="flex items-center gap-2"><Github size={18} /> {project.ctaText}</span>
                                                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                                                </a>
                                                            )}

                                                            {project.links && (
                                                                <div className="grid grid-cols-2 gap-3">
                                                                    {project.links.map((link, i) => (
                                                                        <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="glass-card py-3 px-4 flex items-center justify-center gap-2 text-sm font-bold text-white hover:bg-white/10 transition-colors border-white/10">
                                                                            {link.text} {link.url !== '#' && <ExternalLink size={14} />}
                                                                        </a>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
