'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { IoArrowForwardOutline } from 'react-icons/io5';

export default function Hero() {
  // 3D Parallax Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 90, damping: 28 });
  const mouseYSpring = useSpring(y, { stiffness: 90, damping: 28 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]);
  const translateX = useTransform(mouseXSpring, [-0.5, 0.5], ["-16px", "16px"]);
  const translateY = useTransform(mouseYSpring, [-0.5, 0.5], ["-16px", "16px"]);

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
      className="relative min-h-[100svh] flex flex-col justify-between pt-24 sm:pt-28 pb-10 sm:pb-14 px-6 overflow-hidden perspective-[1200px]"
    >
      {/* Background Subtle Radial Decor */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_60%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex-1 flex flex-col justify-between items-center text-center">

        {/* Center Stage: Layered Overlay Composition */}
        <div className="relative w-full flex-1 flex flex-col items-center justify-center my-auto min-h-[560px] sm:min-h-[640px] lg:min-h-[720px]">

          {/* Layer 1 (Background Typography): Editorial Outline + Soft Fill */}
          <h1 className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-0">
            <span
              className="text-[14vw] sm:text-[12vw] font-black uppercase tracking-[-0.04em] leading-[0.84] text-foreground/20 dark:text-foreground/25 [-webkit-text-stroke:1px_rgba(0,0,0,0.2)] dark:[-webkit-text-stroke:1.5px_rgba(255,255,255,0.35)] whitespace-nowrap transition-all duration-300"
            >
              SECURING
            </span>
            <span
              className="text-[14vw] sm:text-[12vw] font-black uppercase tracking-[-0.04em] leading-[0.84] text-foreground/20 dark:text-foreground/25 [-webkit-text-stroke:1px_rgba(0,0,0,0.2)] dark:[-webkit-text-stroke:1.5px_rgba(255,255,255,0.35)] whitespace-nowrap transition-all duration-300"
            >
              SYSTEMS.
            </span>
          </h1>

          {/* Layer 2: Atmospheric Depth Chamber (Dark vignette separates text behind Dhruv) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] sm:w-[780px] h-[560px] sm:h-[780px] bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.72)_25%,transparent_75%)] pointer-events-none z-[1]" />

          {/* Soft indigo rim-light aura directly behind his head/shoulders */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] sm:w-[540px] h-[380px] sm:h-[540px] rounded-full bg-accent/25 dark:bg-accent/30 blur-3xl pointer-events-none z-[2]" />

          {/* Layer 3: Centered 3D Cutout Portrait (Enlarged Heroic Scale) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            style={{
              rotateX,
              rotateY,
              x: translateX,
              y: translateY,
              transformStyle: "preserve-3d"
            }}
            className="relative z-10 flex items-end justify-center h-[520px] sm:h-[620px] lg:h-[700px] max-w-[480px] sm:max-w-[580px] w-full cursor-pointer group"
          >
            {/* Cutout Image with seamless bottom fade and rich contact drop-shadow */}
            <img
              src="/profile/profile.png"
              alt="Dhruv Gohel"
              className="relative z-10 max-h-full w-auto object-contain filter grayscale contrast-120 brightness-95 group-hover:grayscale-0 transition-all duration-1000 [mask-image:linear-gradient(to_bottom,black_75%,transparent_98%)] drop-shadow-[0_25px_50px_rgba(0,0,0,0.9)] drop-shadow-[0_0_35px_rgba(99,102,241,0.25)]"
            />
          </motion.div>

          {/* Layer 4: Foreground Bio & Action Buttons */}
          <div className="relative z-20 -mt-6 sm:-mt-10 flex flex-col items-center">

            {/* Bio Narrative */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed"
            >
              I am <span className="font-semibold text-foreground">Dhruv Gohel</span>, an OS Security Researcher and Engineer focused on tactical defense, kernel-level exploit research, and highly resilient architecture.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex items-center justify-center gap-4 mt-6"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-mono text-xs font-bold tracking-widest uppercase hover:bg-accent hover:text-white transition-all shadow-lg cursor-pointer group"
              >
                <span>Explore Systems</span>
                <IoArrowForwardOutline className="text-sm group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border hover:border-foreground/50 font-mono text-xs font-bold tracking-widest uppercase text-muted-foreground hover:text-foreground transition-all cursor-pointer"
              >
                <span>Mission Dossier</span>
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
