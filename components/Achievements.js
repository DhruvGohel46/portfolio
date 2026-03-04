import { motion } from 'framer-motion';
import { Award, Trophy, Star } from 'lucide-react';

const achievements = [
    {
        year: '2025',
        title: 'Odoo Hackathon — Participant',
        desc: 'Led "Quantum Coders" team. Built campus club ERP modules in Python + Odoo.',
        icon: <Trophy size={24} className="text-yellow-400" />,
        color: 'from-yellow-400/20'
    },
    {
        year: '2025',
        title: 'Smart India Hackathon 2025',
        desc: 'Selected to represent GTU. Built RailQR — AI-powered asset tracker for Indian Railways.',
        icon: <Award size={24} className="text-indigo-400" />,
        color: 'from-indigo-400/20'
    },
    {
        year: '2025',
        title: 'NPTEL Python — Elite + Top 5%',
        desc: '94% score. Top 5% nationally in "The Joy of Computing using Python" — IIT Madras.',
        icon: <Star size={24} className="text-emerald-400" />,
        color: 'from-emerald-400/20'
    },
    {
        year: '2025',
        title: 'Oracle Data Platform Associate',
        desc: 'Certified in cloud data management and Oracle\'s data platform ecosystem.',
        icon: <Award size={24} className="text-blue-400" />,
        color: 'from-blue-400/20'
    },
    {
        year: '2024',
        title: 'Intercollegiate Web Dev Contest',
        desc: 'Won first prize in a competitive web development challenge at college level.',
        icon: <Trophy size={24} className="text-yellow-400" />,
        color: 'from-yellow-400/20'
    },
    {
        year: '2024',
        title: 'NPTEL Java — Certified',
        desc: '85% score in "Programming in Java" — SWAYAM / NPTEL national platform.',
        icon: <Award size={24} className="text-purple-400" />,
        color: 'from-purple-400/20'
    }
];

export default function Achievements() {
    return (
        <section id="achievements" className="py-24 px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Wins & Certifications</h2>
                    <div className="w-32 h-1 bg-yellow-500 mx-auto rounded-full"></div>
                    <p className="text-gray-400 mt-6 max-w-2xl mx-auto">Proven track record of competitive programming, hackathons, and certifications.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                            className="relative p-[1px] rounded-[2.5rem] overflow-hidden group"
                        >
                            {/* Animated Border Gradient Wrapper */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[2px]`}></div>

                            <div className="relative h-full bg-[#0B0F19]/80 backdrop-blur-2xl p-8 rounded-[2.5rem] border border-white/10 group-hover:border-white/20 transition-all duration-500 overflow-hidden flex flex-col z-10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_40px_rgba(255,255,255,0.05)]">

                                {/* Deep Ambient Glow */}
                                <div className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-bl ${item.color} to-transparent rounded-full opacity-20 group-hover:opacity-50 transition-all duration-700 blur-[60px] group-hover:scale-150`}></div>
                                <div className={`absolute -left-20 -bottom-20 w-64 h-64 bg-gradient-to-tr ${item.color} to-transparent rounded-full opacity-0 group-hover:opacity-30 transition-all duration-700 blur-[60px] group-hover:scale-150`}></div>

                                <div className="flex items-center justify-between mb-8 relative z-10">
                                    {/* Fully Round Icon */}
                                    <div className="relative flex items-center justify-center p-4 bg-white/5 rounded-full border border-white/10 group-hover:bg-white/10 transition-all duration-500 group-hover:scale-110 shadow-inner">
                                        <div className={`absolute inset-0 bg-gradient-to-br ${item.color} to-transparent opacity-20 rounded-full blur-md`}></div>
                                        <div className="relative z-10">{item.icon}</div>
                                    </div>

                                    {/* Fully Round Year Badge */}
                                    <span className="text-xs font-bold px-4 py-2 bg-white/5 rounded-full text-white/90 border border-white/10 shadow-sm backdrop-blur-md group-hover:border-white/20 group-hover:bg-white/10 transition-all duration-500 tracking-wide">
                                        {item.year}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-500 relative z-10 tracking-tight leading-snug">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed relative z-10 flex-1 group-hover:text-gray-300 transition-colors duration-500">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
