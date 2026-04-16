'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { IoChevronForwardOutline } from 'react-icons/io5';
import MagneticButton from '../ui/MagneticButton';
import SystemTag from '../ui/SystemTag';
import { useScramble } from '../../hooks/useScramble';

export default function Hero() {
  const { displayText, trigger } = useScramble("COMPLEX");

  // 3D Parallax Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);
  const translateX = useTransform(mouseXSpring, [-0.5, 0.5], ["-40px", "40px"]);
  const translateY = useTransform(mouseYSpring, [-0.5, 0.5], ["-40px", "40px"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[100svh] lg:h-screen flex items-center pt-32 pb-24 lg:pt-0 lg:pb-0 px-6 overflow-hidden perspective-[1200px]"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_60%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_60%)]" />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-2 lg:gap-10 xl:gap-0 items-center min-h-[70vh]">
        
        {/* Core Foreground Content (Left aligned/spanning) */}
        <motion.div
           initial={{ opacity: 0, x: -40 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="relative z-20 pointer-events-none lg:pointer-events-auto"
        >
          <div className="mb-6 pointer-events-auto">
            <SystemTag label="CAPABILITY" value="CORE_STACK" />
          </div>

          <h1 className="text-[3.5rem] sm:text-7xl md:text-[6rem] lg:text-[7rem] xl:text-[8rem] font-bold tracking-tighter leading-[1] md:leading-[0.95] mb-8 text-foreground uppercase relative z-20">
            Securing <br />
            <span 
              onMouseEnter={trigger}
              className="text-accent font-mono cursor-crosshair pointer-events-auto mix-blend-difference hover:text-white transition-colors"
            >
              {displayText}
            </span> <br />
            Systems.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-10 md:mb-14 leading-relaxed pointer-events-auto backdrop-blur-sm bg-background/30 p-2 sm:p-0 rounded-xl sm:rounded-none border border-transparent hover:border-border sm:border-none transition-colors">
            I am <span className="font-semibold text-foreground">Dhruv Gohel</span>, an OS Security Researcher and Engineer focused on tactical defense, kernel-level exploit research, and highly resilient architecture.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-stretch sm:items-center w-full mt-2 pointer-events-auto">
            <MagneticButton primary className="px-6 py-4 sm:py-3.5 rounded-xl sm:rounded-lg group w-full sm:w-auto flex justify-center items-center shadow-lg shadow-accent/20">
              <span className="flex items-center gap-2">
                Deploy Payload <IoChevronForwardOutline className="group-hover:translate-x-1 transition-transform" />
              </span>
            </MagneticButton>
            <MagneticButton className="px-6 py-4 sm:py-3.5 rounded-xl sm:rounded-lg w-full sm:w-auto text-center flex justify-center items-center bg-background/50 backdrop-blur-md">
              Establish Uplink
            </MagneticButton>
          </div>
        </motion.div>

        {/* 3D Floating OS Process Card (Stacks on Mobile, Overlaps on Desktop) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          style={{
            rotateX,
            rotateY,
            x: translateX,
            y: translateY,
            transformStyle: "preserve-3d"
          }}
          className="relative flex w-full justify-center lg:justify-end max-w-[320px] sm:max-w-[450px] mx-auto lg:ml-auto h-[50svh] sm:h-[65vh] mt-12 lg:mt-0 xl:absolute xl:right-0 xl:-translate-y-1/2 z-10 pointer-events-none"
        >
          {/* Main Card */}
          <div className="absolute inset-0 bg-background/50 backdrop-blur-2xl rounded-2xl overflow-hidden border border-border shadow-2xl flex items-center justify-center group" style={{ transform: "translateZ(30px)" }}>
            <img 
              src="/profile/profile.png" 
              alt="Dhruv Gohel" 
              className="w-full h-full object-cover object-top filter grayscale contrast-125 brightness-90 group-hover:grayscale-0 transition-all duration-1000"
            />
            {/* Structural overlays */}
            <div className="absolute inset-0 border-[10px] sm:border-[20px] border-background/20 mix-blend-overlay" />
            
            {/* HUD Status Bar floating inside card */}
            <div className="absolute bottom-6 left-6 right-6" style={{ transform: "translateZ(60px)" }}>
              <div className="bg-background/90 backdrop-blur-xl p-4 rounded-lg border border-border shadow-2xl font-mono text-[10px] space-y-1.5 text-muted-foreground group-hover:border-accent/40 transition-colors">
                <div className="flex justify-between items-center text-foreground mb-2 pb-2 border-b border-border">
                  <span className="tracking-widest">SYS_ROOT: DHRUV_GOHEL</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.8)] dark:shadow-[0_0_8px_var(--accent)]" />
                </div>
                <div className="flex justify-between text-[9px] uppercase"><span className="opacity-70">Uptime</span> <span className="text-foreground">2+ YRS</span></div>
                <div className="flex justify-between text-[9px] uppercase"><span className="opacity-70">Sec_Clearance</span> <span className="text-foreground">Lvl 4 (Kernel)</span></div>
                <div className="flex justify-between text-[9px] uppercase"><span className="opacity-70">Target_Aquired</span> <span className="text-foreground">12+ Nodes</span></div>
              </div>
            </div>
          </div>
          
          {/* Decorative floating minimal elements matching 3D space */}
          <motion.div 
            style={{ transform: "translateZ(100px)" }}
            className="absolute -top-4 -left-4 w-12 h-12 bg-background/80 backdrop-blur border border-border rounded shadow flex items-center justify-center text-muted-foreground"
          >
            <div className="w-1.5 h-1.5 bg-accent rounded-full animate-ping" />
          </motion.div>

          <motion.div 
            style={{ transform: "translateZ(80px)" }}
            className="absolute -bottom-8 -right-4 bg-background/90 backdrop-blur-md border border-border px-3 py-1.5 text-[9px] font-mono tracking-widest rounded uppercase shadow-lg shadow-black/40"
          >
            [ SECURE / ENCRYPTED ]
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
