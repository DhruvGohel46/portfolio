import { motion } from 'framer-motion';
import { Layout, Server, Database } from 'lucide-react';

const skills = [
    {
        title: 'Frontend Development',
        icon: <Layout size={32} className="text-indigo-400" />,
        items: ['HTML5 / CSS3', 'JavaScript (ES6+)', 'React / Next.js', 'Tailwind CSS', 'GSAP Animations'],
        color: 'from-indigo-500/20'
    },
    {
        title: 'Backend Engineering',
        icon: <Server size={32} className="text-emerald-400" />,
        items: ['Python', 'Django / Flask', 'Java', 'REST API Design', 'Node.js'],
        color: 'from-emerald-500/20'
    },
    {
        title: 'Databases & Tools',
        icon: <Database size={32} className="text-purple-400" />,
        items: ['PostgreSQL / SQLite', 'Git / GitHub', 'Odoo ERP', 'Ollama / LLMs', 'Docker Basics'],
        color: 'from-purple-500/20'
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Core Expertise</h2>
                    <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full"></div>
                    <p className="text-gray-400 mt-6 max-w-2xl mx-auto">Mastering the intersection of modern frontend, robust backend, and AI integrations.</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.title}
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5, ease: "easeOut" }}
                            className="relative p-[1px] rounded-[2.5rem] overflow-hidden group cursor-default"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[2px]`}></div>

                            <div className="relative h-full bg-[#0B0F19]/80 backdrop-blur-2xl p-8 rounded-[2.5rem] border border-white/10 group-hover:border-white/20 transition-all duration-500 overflow-hidden flex flex-col z-10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_40px_rgba(255,255,255,0.05)] hover:-translate-y-1">

                                <div className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-bl ${skill.color} to-transparent rounded-full opacity-20 group-hover:opacity-50 transition-all duration-700 blur-[60px] group-hover:scale-150`}></div>
                                <div className={`absolute -left-20 -bottom-20 w-64 h-64 bg-gradient-to-tr ${skill.color} to-transparent rounded-full opacity-0 group-hover:opacity-30 transition-all duration-700 blur-[60px] group-hover:scale-150`}></div>

                                <div className="relative flex items-center justify-center w-16 h-16 bg-white/5 rounded-full border border-white/10 group-hover:bg-white/10 transition-all duration-500 group-hover:scale-110 shadow-inner mb-6">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} to-transparent opacity-20 rounded-full blur-md`}></div>
                                    <div className="relative z-10">{skill.icon}</div>
                                </div>

                                <h3 className="text-2xl font-bold mb-6 text-white relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-500">{skill.title}</h3>

                                <ul className="space-y-4 relative z-10 flex-1">
                                    {skill.items.map((item, idx) => (
                                        <li key={idx} className="text-gray-400 font-medium flex items-center gap-3 transition-colors duration-300 group-hover:text-gray-200">
                                            <span className="w-1.5 h-1.5 rounded-full bg-gray-600 transition-colors duration-500 group-hover:bg-indigo-400 shadow-[0_0_10px_rgba(255,255,255,0)] group-hover:shadow-[0_0_10px_rgba(99,102,241,0.5)]"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
