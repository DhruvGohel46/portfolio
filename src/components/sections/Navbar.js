'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { IoMoonOutline, IoSunnyOutline, IoGridOutline, IoPersonOutline, IoHardwareChipOutline, IoBriefcaseOutline, IoCodeSlashOutline } from 'react-icons/io5';
import CommandPalette from '../ui/CommandPalette';
import SystemTag from '../ui/SystemTag';

const navLinks = [
  { name: 'About', href: '#about', icon: IoPersonOutline },
  { name: 'Skills', href: '#skills', icon: IoHardwareChipOutline },
  { name: 'Exp', href: '#experience', icon: IoBriefcaseOutline },
  { name: 'Projects', href: '#projects', icon: IoCodeSlashOutline },
];

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${scrolled ? 'pt-4 bg-background/50 backdrop-blur-md pb-4 border-b border-border' : 'pt-6'}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-xl font-bold tracking-tight text-foreground">
              Dhruv<span className="text-accent">.</span>
            </a>
            <div className="hidden lg:block pl-4 border-l border-border hover:opacity-80 transition-opacity">
              <SystemTag label="STATUS" value="ONLINE" />
            </div>
          </div>

          {/* Center Floating Pill (Desktop Only) */}
          <div className="hidden md:flex items-center gap-1 bg-background/70 backdrop-blur-md border border-border rounded-full px-2 py-1.5 shadow-sm">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="px-4 py-1.5 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setIsCommandOpen(true)}
              className="p-2 border border-transparent rounded hover:bg-muted hover:border-border transition-all text-foreground"
              title="Open Command Palette (Cmd+K)"
            >
              <IoGridOutline className="text-xl" />
            </button>

            {mounted && (
              <button 
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 border border-transparent rounded hover:bg-muted hover:border-border transition-all"
                title="Toggle Theme"
              >
                {theme === 'dark' ? <IoSunnyOutline className="text-xl" /> : <IoMoonOutline className="text-xl" />}
              </button>
            )}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Bottom Navigation Dock */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] z-40">
        <div className="bg-background/80 backdrop-blur-xl border border-border rounded-2xl p-2 flex justify-between items-center shadow-2xl">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a 
                key={link.name} 
                href={link.href}
                className="flex flex-col items-center justify-center w-16 h-12 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-all active:scale-95"
              >
                <Icon className="text-xl mb-1" />
                <span className="text-[10px] font-medium tracking-tight">{link.name}</span>
              </a>
            );
          })}
        </div>
      </div>

      <CommandPalette isOpen={isCommandOpen} onClose={() => setIsCommandOpen(false)} />
    </>
  );
}
