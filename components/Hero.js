import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center z-10 w-full relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto flex flex-col items-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 border-white/20"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            <span className="text-gray-300 text-xs sm:text-sm font-semibold tracking-wider uppercase">
              Available for Internships & Freelance
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold tracking-tight mb-8 leading-[1.15] max-w-4xl mx-auto"
          >
            Engineering <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-500 animate-gradient-x font-semibold">Secure & Scalable</span> <br className="hidden md:block" />
            Digital Platforms.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Cybersecurity-driven Computer Engineering student from Gujarat. <br className="hidden md:block" /> Building real-world tech solutions in security, analytics & startup ecosystems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto"
          >
            <a href="#projects" className="w-full sm:w-auto bg-white text-black px-8 py-3.5 rounded-full font-semibold flex items-center justify-center gap-2 hover:brightness-110 hover:-translate-y-1 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)]">
              See What I've Built <ArrowRight size={18} />
            </a>
            <a href="#contact" className="w-full sm:w-auto glass-card px-8 py-3.5 rounded-full font-semibold text-gray-300 hover:text-white hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 border-white/5 hover:border-white/20">
              Let's Connect
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
