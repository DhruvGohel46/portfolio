import { motion } from 'framer-motion';
import { Briefcase, Terminal, Shield, CloudLightning, ArrowRight, ExternalLink } from 'lucide-react';

const projects = [
    {
        title: 'Vizo — Secure Voice System',
        tech: 'Python + PyQt6',
        desc: 'Advanced voice system with thread-safe signal handling and secure API integration for real-time speech processing.',
        icon: <Terminal size={24} className="text-indigo-400" />,
        color: 'from-indigo-500/20'
    },
    {
        title: 'Tactical Password Engine',
        tech: 'PyQt6 Secure Application',
        desc: 'High-entropy password generation with strong input validation, encrypted clipboard handling, and secure entropy pools.',
        icon: <Shield size={24} className="text-emerald-400" />,
        color: 'from-emerald-500/20'
    },
    {
        title: 'Weather Audit Tool',
        tech: 'Tkinter Data Integration',
        desc: 'Real-time environmental data auditing with robust error handling and secure remote API communication.',
        icon: <CloudLightning size={24} className="text-cyan-400" />,
        color: 'from-cyan-500/20'
    }
];

export default function InternshipSection() {
    return (
        <section id="internship" className="py-24 px-6 relative z-10">
            <div className="max-w-6xl mx-auto relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
                        <Briefcase size={16} className="text-indigo-400" />
                        <span className="text-gray-300 text-xs sm:text-sm font-semibold tracking-wider uppercase">
                            Internship Experience
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                        AICTE Oasis Infobyte <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Internship</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-400 mb-6 max-w-3xl mx-auto leading-relaxed">
                        Translating tactical logic into secure, production-ready system tools.
                    </p>
                </motion.div>

                {/* Overview Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-8 md:p-10 mb-16 relative overflow-hidden group shadow-xl max-w-4xl mx-auto border-white/10"
                >
                    <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -ml-20 -mt-20"></div>
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                                <Briefcase size={16} />
                            </span>
                            Internship Overview
                        </h3>
                        <div className="space-y-4">
                            <p className="text-gray-300 text-lg flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                                Successfully completed AICTE Oasis Infobyte Python Internship
                            </p>
                            <p className="text-gray-300 text-lg flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                                Focus on GUI development (PyQt6, Tkinter)
                            </p>
                            <p className="text-gray-300 text-lg flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                                API integration & Thread-safe architecture
                            </p>
                            <p className="text-gray-300 text-lg flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                                Automation-driven productivity tools
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                            className="relative p-[1px] rounded-[2.5rem] overflow-hidden group cursor-default"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[2px]`}></div>

                            <div className="relative h-full bg-[#0B0F19]/80 backdrop-blur-2xl p-8 rounded-[2.5rem] border border-white/10 group-hover:border-white/20 transition-all duration-500 overflow-hidden flex flex-col z-10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_40px_rgba(255,255,255,0.05)] hover:-translate-y-1">

                                <div className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-bl ${project.color} to-transparent rounded-full opacity-20 group-hover:opacity-50 transition-all duration-700 blur-[60px] group-hover:scale-150`}></div>
                                <div className={`absolute -left-20 -bottom-20 w-64 h-64 bg-gradient-to-tr ${project.color} to-transparent rounded-full opacity-0 group-hover:opacity-30 transition-all duration-700 blur-[60px] group-hover:scale-150`}></div>

                                <div className="relative flex items-center justify-center w-14 h-14 bg-white/5 rounded-full border border-white/10 group-hover:bg-white/10 transition-all duration-500 group-hover:scale-110 shadow-inner mb-6">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} to-transparent opacity-20 rounded-full blur-md`}></div>
                                    <div className="relative z-10">{project.icon}</div>
                                </div>

                                <h4 className="text-xl font-bold text-white mb-2 relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-500">{project.title}</h4>
                                <p className="text-indigo-300 text-sm font-semibold mb-4 relative z-10 tracking-wide uppercase px-3 py-1 bg-indigo-500/10 rounded-full border border-indigo-500/20 inline-block w-fit">{project.tech}</p>
                                <p className="text-gray-400 text-sm leading-relaxed relative z-10 flex-1 group-hover:text-gray-300 transition-colors duration-500">{project.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <a
                        href="https://github.com/DhruvGohel46/OIBSIB"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-semibold hover:brightness-110 transition-all hover:-translate-y-1 shadow-[0_0_20px_rgba(255,255,255,0.15)] duration-300"
                    >
                        View the Systems I’ve Engineered <ExternalLink size={18} />
                    </a>
                </motion.div>

            </div>
        </section>
    );
}
