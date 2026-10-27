'use client';

export default function BackgroundGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Precision Micro-Dot Matrix with radial falloff */}
      <div 
        className="absolute inset-0 bg-dot-matrix [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_85%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_85%)] opacity-90 dark:opacity-70"
      />

      {/* Atmospheric Top Spotlight Aura (Purple / Violet) */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[520px] bg-[radial-gradient(ellipse_at_top,rgba(147,51,234,0.16),rgba(124,109,248,0.12),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.20),rgba(124,109,248,0.15),transparent_70%)] blur-3xl pointer-events-none"
      />

      {/* Mid-Left Floating Purple Ambient Glow */}
      <div 
        className="absolute top-[32%] -left-[120px] w-[550px] h-[550px] rounded-full bg-purple-600/10 dark:bg-purple-600/16 blur-[130px] pointer-events-none"
      />

      {/* Mid-Right Floating Violet Ambient Glow */}
      <div 
        className="absolute top-[62%] -right-[120px] w-[600px] h-[600px] rounded-full bg-indigo-600/10 dark:bg-violet-600/16 blur-[140px] pointer-events-none"
      />

      {/* Bottom Ambient Glow */}
      <div 
        className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-[radial-gradient(ellipse_at_bottom,rgba(147,51,234,0.14),rgba(99,102,241,0.08),transparent_70%)] blur-3xl pointer-events-none"
      />

      {/* Edge Vignette blending smoothly into purple background */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,var(--background)_100%)] opacity-60 pointer-events-none"
      />
    </div>
  );
}
