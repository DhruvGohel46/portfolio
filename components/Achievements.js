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
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-6 relative overflow-hidden group hover:border-white/20 transition-all flex flex-col"
                        >
                            <div className={`absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-bl ${item.color} to-transparent rounded-full opacity-30 group-hover:opacity-60 transition-opacity blur-2xl`}></div>

                            <div className="flex items-start justify-between mb-4 relative z-10">
                                <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:bg-white/10 transition-colors">
                                    {item.icon}
                                </div>
                                <span className="text-xs font-bold px-3 py-1 bg-white/5 rounded-full text-gray-300 border border-white/10">{item.year}</span>
                            </div>

                            <h3 className="text-xl font-bold mb-3 text-white relative z-10">{item.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed relative z-10 flex-1">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
