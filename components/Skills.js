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
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="glass-card p-8 group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden"
                        >
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${skill.color} to-transparent rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity`}></div>

                            <div className="mb-6 p-4 bg-white/5 inline-block rounded-2xl border border-white/10 group-hover:border-white/20 transition-colors">
                                {skill.icon}
                            </div>

                            <h3 className="text-2xl font-bold mb-6 text-white">{skill.title}</h3>

                            <ul className="space-y-3">
                                {skill.items.map((item, idx) => (
                                    <li key={idx} className="text-gray-300 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-500 group-hover:bg-indigo-400 transition-colors"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
