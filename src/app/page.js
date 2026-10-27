'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Internships from '@/components/sections/Internships';
import Hackathons from '@/components/sections/Hackathons';
import Projects from '@/components/sections/Projects';
import Achievements from '@/components/sections/Achievements';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import AIAssistant from '@/components/ui/AIAssistant';

export default function Home() {
  return (
    <motion.main 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative flex min-h-screen flex-col items-center justify-between selection:bg-accent selection:text-white"
    >
      <Navbar />
      <div className="w-full">
        <Hero />
        <About />
        <Skills />
        <Internships />
        <Hackathons />
        <Projects />
        <Achievements />
        <Contact />
        <Footer />
        <AIAssistant />
      </div>
    </motion.main>
  );
}
