import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, Server, Database, Shield } from 'lucide-react';

const skills = [
    {
        title: 'Security & Research',
        icon: <Shield size={32} className="text-red-400" />,
        items: ['Ethical Hacking', 'OS Security', 'Penetration Testing', 'Network Security', 'Vulnerability Research'],
        color: 'from-red-500/20'
    },
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
        items: ['PostgreSQL / SQLite', 'Git / GitHub', 'Odoo ERP', 'Docker Basics', 'Ollama / LLMs'],
        color: 'from-purple-500/20'
    }
];

export default function Skills() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isInView, setIsInView] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        if (!isInView || isPaused) return;

        const interval = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % skills.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [isInView, isPaused]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                } else {
                    setIsInView(false);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleMouseEnter = () => setIsPaused(true);
    const handleMouseLeave = () => setIsPaused(false);

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 500 : -500,
            opacity: 0,
            scale: 0.9
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 500 : -500,
            opacity: 0,
            scale: 0.9
        })
    };

    return (
        <section id="skills" ref={sectionRef} className="py-24 px-6 relative z-10 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Core Expertise</h2>
                    <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full"></div>
                    <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
                        Focused on tactical security research and scalable digital architecture.
                    </p>
                </motion.div>

                <div className="relative max-w-2xl mx-auto min-h-[500px] flex items-center" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <div className="w-full relative h-[450px]">
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.3 }
                                }}
                                className="absolute w-full"
                            >
                                <div className="relative p-[1px] rounded-[2.5rem] overflow-hidden group cursor-default shadow-2xl">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${skills[currentIndex].color} to-white/5 blur-[2px]`}></div>

                                    <div className="relative h-full bg-[#0B0F19]/90 backdrop-blur-3xl p-10 md:p-12 rounded-[2.5rem] border border-white/10 flex flex-col z-10">
                                        <div className={`absolute -right-20 -top-20 w-80 h-80 bg-gradient-to-bl ${skills[currentIndex].color} to-transparent rounded-full opacity-30 blur-[80px]`}></div>
                                        
                                        <div className="relative flex items-center justify-center w-20 h-20 bg-white/5 rounded-full border border-white/10 mb-8 shadow-inner">
                                            <div className={`absolute inset-0 bg-gradient-to-br ${skills[currentIndex].color} to-transparent opacity-20 rounded-full blur-md`}></div>
                                            <div className="relative z-10">{skills[currentIndex].icon}</div>
                                        </div>

                                        <h3 className="text-3xl md:text-4xl font-bold mb-8 text-white">{skills[currentIndex].title}</h3>

                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
                                            {skills[currentIndex].items.map((item, idx) => (
                                                <li key={idx} className="text-gray-300 text-lg font-medium flex items-center gap-3">
                                                    <span className="w-2 h-2 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-3 mt-12">
                    {skills.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setDirection(index > currentIndex ? 1 : -1);
                                setCurrentIndex(index);
                            }}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-indigo-500 w-8' : 'bg-white/20 hover:bg-white/40'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
