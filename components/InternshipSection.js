import { motion } from 'framer-motion';
import { Briefcase, Terminal, Shield, CloudLightning, ArrowRight, ExternalLink } from 'lucide-react';

const projects = [
    {
        title: 'Vizo — Desktop Voice Assistant',
        tech: 'Python + PyQt6',
        desc: 'Chat-style UI with Dark/Light themes. Integrates Google Speech Recognition and Windows SAPI TTS with thread-safe signals.',
        icon: <Terminal size={24} className="text-indigo-400" />,
        color: 'from-indigo-500/20'
    },
    {
        title: 'Random Password Generator',
        tech: 'PyQt6 GUI Application',
        desc: 'Custom length and character sets with strong input validation, clipboard copy feature, and secure workflow design.',
        icon: <Shield size={24} className="text-emerald-400" />,
        color: 'from-emerald-500/20'
    },
    {
        title: 'Basic Weather App',
        tech: 'Tkinter GUI Integration',
        desc: 'Weather API integration fetching real-time temperature, humidity, and wind conditions with robust error handling.',
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
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 border-indigo-500/30">
                        <Briefcase size={16} className="text-indigo-400" />
                        <span className="text-gray-300 text-xs sm:text-sm font-semibold tracking-wider uppercase">
                            Internship Experience
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                        AICTE Oasis Infobyte <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Internship</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-400 mb-6 max-w-3xl mx-auto leading-relaxed">
                        An experience where I translated raw Python logic into tools people can actually use.
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
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-8 group hover:-translate-y-1 hover:border-white/20 transition-all duration-300 relative overflow-hidden flex flex-col h-full cursor-default"
                        >
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${project.color} to-transparent rounded-bl-full opacity-20 group-hover:opacity-40 transition-opacity blur-2xl`}></div>

                            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                                {project.icon}
                            </div>

                            <h4 className="text-xl font-bold text-white mb-2 relative z-10">{project.title}</h4>
                            <p className="text-indigo-300 text-sm font-semibold mb-4 relative z-10 tracking-wide uppercase">{project.tech}</p>
                            <p className="text-gray-400 text-sm leading-relaxed relative z-10 flex-1">{project.desc}</p>
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
