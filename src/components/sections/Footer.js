'use client';

import { motion } from 'framer-motion';
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5';
import SystemTag from '../ui/SystemTag';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 border-t border-border mt-32">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        
        <div className="flex flex-col">
          <div className="text-xl font-bold tracking-tight text-foreground mb-1">
            Dhruv<span className="text-accent">.</span>
          </div>
          <p className="text-muted-foreground text-[10px] font-mono tracking-widest uppercase">
            SEC_ENGINEER // RESEARCHER
          </p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-xl">
            <IoLogoGithub />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-xl">
            <IoLogoLinkedin />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-xl">
            <IoLogoTwitter />
          </a>
        </div>

        <div className="text-left md:text-right flex flex-col items-start md:items-end gap-2">
          <SystemTag label="SESSION" value="ACTIVE" />
          <div className="text-xs text-muted-foreground">
            © {currentYear} ALL_RIGHTS_RESERVED.
          </div>
        </div>
        
      </div>
    </footer>
  );
}
