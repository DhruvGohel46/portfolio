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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-12 border-white/20"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            <span className="text-gray-300 text-xs sm:text-sm font-semibold tracking-wider uppercase">
              Available for Internships & Freelance
            </span>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-8 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative group cursor-pointer shrink-0"
            >
              {/* Deep Ambient Glow behind the photo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/40 via-purple-500/20 to-cyan-500/30 rounded-full blur-[40px] opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700"></div>

              <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full p-[3px] bg-gradient-to-br from-indigo-500 via-purple-500 to-transparent shadow-[0_0_40px_rgba(99,102,241,0.3)] group-hover:shadow-[0_0_60px_rgba(99,102,241,0.5)] transition-all duration-500 group-hover:scale-105 overflow-visible">

                {/* Spinning border effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/80 via-transparent to-cyan-500/80 [mask-image:linear-gradient(transparent,black)] animate-[spin_4s_linear_infinite] opacity-50 group-hover:opacity-100"></div>

                {/* Inner container */}
                <div className="w-full h-full rounded-full bg-[#0B0F19] overflow-hidden border-4 border-[#0B0F19] relative z-10 transition-transform duration-500 flex items-center justify-center">
                  <img
                    src="/profile/profile.png"
                    alt="Dhruv Gohel"
                    className="w-full h-full object-cover object-top scale-[1.15] transform group-hover:scale-[1.25] transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Decorative floating dot */}
                <div className="absolute bottom-4 right-2 w-4 h-4 rounded-full bg-green-500 border-2 border-[#0B0F19] z-20 shadow-[0_0_15px_rgba(34,197,94,0.6)] animate-pulse"></div>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-5xl lg:text-[60px] font-bold tracking-tight leading-[1.15] text-center md:text-left max-w-2xl"
            >
              Securing Digital <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-500 animate-gradient-x font-semibold">Infrastructures &</span> <br className="hidden md:block" />
              Tactical Defense.
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl text-center leading-relaxed"
          >
            Computer Engineering student specializing in <span className="text-indigo-400 font-semibold">Security Research</span>, <br className="hidden md:block" /> OS-Level Penetration Testing, and Vulnerability Mitigation.
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
