'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { IoSearchOutline, IoCloseOutline, IoArrowForwardOutline } from 'react-icons/io5';
import SystemTag from './SystemTag';

export default function CommandPalette({ isOpen, onClose }) {
  const links = [
    { label: 'Home', href: '#home', id: '01' },
    { label: 'About', href: '#about', id: '02' },
    { label: 'Skills', href: '#skills', id: '03' },
    { label: 'Experience', href: '#experience', id: '04' },
    { label: 'Projects', href: '#projects', id: '05' },
    { label: 'Contact', href: '#contact', id: '06' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[90%] max-w-2xl z-50 bg-background border border-border rounded-xl shadow-2xl overflow-hidden shadow-black/10"
          >
            {/* Header */}
            <div className="flex items-center gap-3 p-4 border-b border-border">
              <IoSearchOutline className="text-muted-foreground text-xl" />
              <input 
                type="text" 
                placeholder="Type a command or search..."
                className="w-full bg-transparent focus:outline-none placeholder:text-muted-foreground font-mono text-sm"
                autoFocus
              />
              <button 
                onClick={onClose}
                className="p-1 rounded bg-muted hover:bg-border text-muted-foreground transition-colors"
              >
                <IoCloseOutline className="text-lg" />
              </button>
            </div>

            {/* Content list */}
            <div className="p-2 h-80 overflow-y-auto">
              <div className="px-2 py-2 mb-1">
                <SystemTag label="MENU_SELECTION" value="NAVIGATION" />
              </div>
              
              <div className="flex flex-col gap-1">
                {links.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={onClose}
                    className="flex items-center justify-between p-4 rounded-lg hover:bg-muted group transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-mono text-muted-foreground">{link.id}</span>
                      <span className="font-semibold">{link.label}</span>
                    </div>
                    <IoArrowForwardOutline className="opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-border bg-muted/50 flex items-center justify-between">
              <div className="flex gap-4">
                <span className="flex items-center gap-1 text-xs text-muted-foreground font-mono"><kbd className="bg-background border border-border rounded px-1.5 py-0.5">↑</kbd><kbd className="bg-background border border-border rounded px-1.5 py-0.5">↓</kbd> to navigate</span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground font-mono"><kbd className="bg-background border border-border rounded px-1.5 py-0.5">esc</kbd> to close</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
