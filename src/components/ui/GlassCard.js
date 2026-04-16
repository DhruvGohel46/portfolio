'use client';

import { motion } from 'framer-motion';

export default function GlassCard({ 
  children, 
  className = "", 
  scanline = false,
  hover = true,
  animate = true
}) {
  return (
    <motion.div
      initial={animate ? { opacity: 0, y: 20 } : false}
      whileInView={animate ? { opacity: 1, y: 0 } : false}
      viewport={{ once: true }}
      whileHover={hover ? { y: -5, transition: { duration: 0.2 } } : {}}
      className={`glass-card relative overflow-hidden group ${className}`}
    >
      {/* Scanline Overlay */}
      {scanline && (
        <div className="scanline-overlay" />
      )}

      {/* Glossy Reflection Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>

      {/* Subtle Border Glow */}
      <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 transition-colors duration-500 rounded-[inherit]" />
    </motion.div>
  );
}
