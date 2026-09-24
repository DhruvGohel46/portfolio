'use client';

export default function BackgroundGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Precision Micro-Dot Matrix with radial falloff */}
      <div 
        className="absolute inset-0 bg-dot-matrix [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_85%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_85%)] opacity-90 dark:opacity-70"
      />

      {/* Atmospheric Top Spotlight Aura */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.08),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.12),transparent_70%)] blur-3xl pointer-events-none"
      />

      {/* Edge Vignette */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,var(--background)_100%)] opacity-70 pointer-events-none"
      />
    </div>
  );
}
