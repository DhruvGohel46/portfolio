import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Code, Shield } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="glass-card p-8 md:p-10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl -mr-10 -mt-10 transition-all duration-700 group-hover:bg-indigo-500/20 group-hover:scale-150"></div>

            <div className="mb-10 border-l-2 border-indigo-500/40 pl-5 relative">
              <div className="absolute -left-px top-0 w-[2px] h-1/3 bg-indigo-400 shadow-[0_0_10px_rgba(129,140,248,0.8)]"></div>
              <p className="text-xl md:text-2xl italic text-gray-300 font-medium tracking-tight leading-relaxed">
                “I don’t just build systems — I research how to break them to make them unbreakable.”
              </p>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed mb-6 font-normal">
              I'm a second-year Computer Engineering student at Gujarat Technological University, Ahmedabad — specializing in <span className="text-indigo-400 font-semibold">Cybersecurity & OS Research</span>. I focus on bridging the gap between scalable digital infrastructure and robust tactical defense.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-10 font-normal">
              From leading winning hackathon teams to building AI-powered asset trackers, my work is driven by a security-first mindset. I research persistent attack vectors, silent privilege escalation, and defensive strategies to build software that is resilient by design.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <GraduationCap size={20} />
                </div>
                <span>GTU BE Computer Engineering · 2028</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                  <Shield size={20} />
                </div>
                <span>Security Researcher & Penetration Tester</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <MapPin size={20} />
                </div>
                <span>Based in Ahmedabad, India</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-full min-h-[300px] rounded-2xl overflow-hidden glass-card flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10"></div>
            {/* Abstract tech representation */}
            <div className="w-48 h-48 border border-white/10 rounded-full flex items-center justify-center relative animate-[spin_8s_linear_infinite]">
              <div className="w-32 h-32 border border-indigo-400/30 rounded-full border-t-indigo-400 absolute"></div>
              <div className="w-40 h-40 border border-purple-400/20 rounded-full border-b-purple-400 absolute"></div>
            </div>
            <div className="absolute text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-indigo-400 text-center">
              Research <br /> & <br /> Defense
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
