'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoShieldCheckmarkOutline, IoCodeSlashOutline, IoTerminalOutline } from 'react-icons/io5';
import SystemTag from '../ui/SystemTag';

const categories = [
  {
    id: 'sec',
    title: 'Security Research',
    icon: IoShieldCheckmarkOutline,
    skills: ['OS Security', 'Kernel Exploitation', 'Penetration Testing', 'Digital Forensics', 'Binary Analysis'],
  },
  {
    id: 'web',
    title: 'Systems & Web',
    icon: IoCodeSlashOutline,
    skills: ['React / Next.js', 'Python / Django', 'PostgreSQL', 'Node.js', 'API Architecture'],
  },
  {
    id: 'tools',
    title: 'Tactical Tooling',
    icon: IoTerminalOutline,
    skills: ['Metasploit', 'Wireshark', 'Burp Suite', 'GDB / OllyDbg', 'PowerShell'],
  }
];

export default function Skills() {
  const [active, setActive] = useState(categories[0].id);

  return (
    <section id="skills" className="py-32 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16">
          <div className="mb-6">
            <SystemTag label="CAPABILITY" value="CORE_STACK" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Technical Arsenal.
          </h2>
        </header>

        <div className="grid lg:grid-cols-[1fr_2fr] gap-12">
          {/* Tabs */}
          <div className="flex flex-col gap-2">
            {categories.map((cat, index) => {
              const isActive = active === cat.id;
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActive(cat.id)}
                  className={`flex flex-col items-start text-left p-6 rounded-xl border transition-all duration-300 ${
                    isActive 
                      ? 'bg-background border-border shadow-sm shadow-black/5' 
                      : 'bg-transparent border-transparent hover:bg-muted'
                  }`}
                >
                  <div className="flex items-center gap-4 w-full">
                    <Icon className={`text-2xl ${isActive ? 'text-accent' : 'text-muted-foreground'}`} />
                    <span className={`font-semibold ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {cat.title}
                    </span>
                    {isActive && (
                      <motion.div layoutId="activeTab" className="ml-auto w-1.5 h-1.5 rounded-full bg-accent" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Content */}
          <div className="bg-background border border-border rounded-xl p-8 md:p-12 shadow-sm shadow-black/5">
            <AnimatePresence mode="wait">
              {categories.map((cat) => {
                if (cat.id !== active) return null;
                return (
                  <motion.div
                    key={cat.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="h-full flex flex-col"
                  >
                    <div className="mb-8 pb-4 border-b border-border flex justify-between items-end">
                      <h3 className="text-2xl font-bold">{cat.title}</h3>
                      <span className="text-xs font-mono text-muted-foreground uppercase">MODULE_READY</span>
                    </div>
                    
                    <ul className="space-y-4 flex-grow">
                      {cat.skills.map((skill, index) => (
                        <li key={skill} className="flex items-center gap-4 group">
                          <span className="text-[10px] font-mono text-muted-foreground w-6 text-right group-hover:text-foreground transition-colors">
                            0{index + 1}
                          </span>
                          <span className="w-px h-4 bg-border group-hover:bg-accent transition-colors" />
                          <span className="font-medium text-lg text-muted-foreground group-hover:text-foreground transition-colors transform group-hover:translate-x-2 transition-transform duration-300">
                            {skill}
                          </span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-12 bg-muted rounded p-4 border border-border">
                      <SystemTag label="ANALYSIS" value="Focus on deep OS-level integration and robust backend systems." />
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
