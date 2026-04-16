'use client';

import { useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function MagneticButton({ children, className = "", onClick, primary = false }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    
    // Subtle magnetic effect
    const intensity = 0.2;
    setPosition({ x: x * intensity, y: y * intensity });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyle = "relative inline-flex items-center justify-center font-semibold transition-all duration-300";
  const variantStyle = primary 
    ? "bg-foreground text-background hover:bg-accent hover:text-white border border-transparent shadow shadow-black/5" 
    : "bg-transparent text-foreground border border-border hover:bg-muted shadow-sm shadow-black/5";

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      onClick={onClick}
      className={`${baseStyle} ${variantStyle} ${className}`}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
