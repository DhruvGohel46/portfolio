'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  IoStarOutline, 
  IoRibbonOutline, 
  IoCodeSlashOutline, 
  IoCloudOutline, 
  IoCloseOutline, 
  IoEyeOutline 
} from 'react-icons/io5';
import SystemTag from '../ui/SystemTag';

const achievements = [
  {
    title: 'NPTEL Python — Top 5%',
    institution: 'IIT Madras',
    score: '94% ELITE',
    image: '/Achivments/joy of python.png',
    icon: IoStarOutline
  },
  {
    title: 'Oracle Data Platform',
    institution: 'ORACLE CERTIFIED',
    score: 'ASSOCIATE',
    image: '/Achivments/Oracle Foundation Associate.jpg',
    icon: IoRibbonOutline
  },
  {
    title: 'NPTEL Cloud Computing',
    institution: 'IIT KHARAGPUR',
    score: '87% ELITE + SILVER',
    image: '/Achivments/NPTEL Cloud Computing.png',
    icon: IoCloudOutline
  },
  {
    title: 'NPTEL Java',
    institution: 'IIT KHARAGPUR',
    score: '85% ELITE',
    image: '/Achivments/nptel_Java.jpg',
    icon: IoCodeSlashOutline
  }
];

export default function Achievements() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="achievements" className="py-32 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <div className="mb-6">
            <SystemTag label="RECORDS" value="CERTIFICATIONS" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Qualifications.
          </h2>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div 
                  onClick={() => setSelectedImage(item.image)}
                  className="p-8 h-full flex flex-col bg-background border border-border rounded-xl group hover:border-muted-foreground/30 hover:shadow-lg cursor-pointer transition-all duration-300 relative overflow-hidden"
                >
                  {/* Subtle Background Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center text-xl text-muted-foreground group-hover:text-foreground group-hover:bg-border transition-all duration-300 mb-6">
                    <Icon />
                  </div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors duration-300">{item.title}</h3>
                  <div className="text-[10px] font-mono text-muted-foreground tracking-widest uppercase mb-6">
                    {item.institution}
                  </div>
                  
                  {/* Hover Eye Overlay Indicator */}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-muted-foreground flex items-center gap-1.5 text-xs font-mono">
                    <IoEyeOutline className="text-base" /> VIEW
                  </div>

                  <div className="mt-auto pt-4 border-t border-border w-full flex items-center justify-between z-10">
                    <span className="text-[10px] font-mono text-muted-foreground uppercase">SCORE_OUTPUT</span>
                    <span className="text-xs font-bold text-foreground">
                      {item.score}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Certificate Image Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-10 cursor-zoom-out"
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white hover:text-accent transition-colors p-2 bg-white/10 hover:bg-white/20 rounded-full z-50 cursor-pointer"
              aria-label="Close modal"
            >
              <IoCloseOutline className="text-3xl" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[80vh] w-full flex flex-col items-center justify-center p-2 rounded-2xl bg-muted/20 border border-white/10 overflow-hidden cursor-default"
            >
              <img 
                src={selectedImage} 
                alt="Certificate View" 
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl selection:bg-transparent"
              />
            </motion.div>

            <motion.a 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.2 }}
              href={selectedImage} 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={(e) => e.stopPropagation()}
              className="mt-6 px-6 py-3 rounded-lg bg-white text-black hover:bg-accent hover:text-white transition-all font-mono text-xs font-bold tracking-widest uppercase flex items-center gap-2 cursor-pointer shadow-lg"
            >
              <IoEyeOutline className="text-base" /> Open in New Tab
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
