import { motion } from 'framer-motion';
import { Mail, Send, Github, Linkedin, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto glass-card p-8 md:p-16 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-3xl rounded-full pointer-events-none"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail size={32} className="text-indigo-400" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            I respond within 24 hours — have an idea, internship opportunity, or freelance job? Let's talk.
          </p>

          <a href="mailto:Dhruvgohel460@gmail.com" className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)] mb-8">
            Send a Message <Send size={18} />
          </a>

          {/* Social Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <a href="mailto:Dhruvgohel460@gmail.com" className="glass-card p-4 flex flex-col items-center justify-center hover:bg-white/10 transition-colors group">
              <Mail className="text-gray-400 group-hover:text-white mb-2" />
              <span className="text-xs text-gray-400 group-hover:text-white font-medium">Email</span>
            </a>
            <a href="https://wa.me/919924885705?text=Hi%20Dhruv%2C%20I%20saw%20your%20portfolio." target="_blank" rel="noopener noreferrer" className="glass-card p-4 flex flex-col items-center justify-center hover:bg-white/10 transition-colors group">
              <MessageCircle className="text-green-400 group-hover:text-green-300 mb-2" />
              <span className="text-xs text-gray-400 group-hover:text-white font-medium">WhatsApp</span>
            </a>
            <a href="https://www.linkedin.com/in/dhruv-gohel-220194322" target="_blank" rel="noopener noreferrer" className="glass-card p-4 flex flex-col items-center justify-center hover:bg-white/10 transition-colors group">
              <Linkedin className="text-blue-400 group-hover:text-blue-300 mb-2" />
              <span className="text-xs text-gray-400 group-hover:text-white font-medium">LinkedIn</span>
            </a>
            <a href="https://github.com/DhruvGohel46" target="_blank" rel="noopener noreferrer" className="glass-card p-4 flex flex-col items-center justify-center hover:bg-white/10 transition-colors group">
              <Github className="text-gray-300 group-hover:text-white mb-2" />
              <span className="text-xs text-gray-400 group-hover:text-white font-medium">GitHub</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
