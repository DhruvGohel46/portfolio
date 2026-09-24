'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';

export default function ParticleOrb({ size = 100, className = '' }) {
  const canvasRef = useRef(null);
  const { resolvedTheme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const animFrameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;
    const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;

    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    // Number of latitude and longitude divisions matching the point mesh in reference image
    const latCount = 38;
    const lonCount = 52;
    const baseRadius = size * 0.38;

    const render = () => {
      time += isHovered ? 0.024 : 0.015;

      // Smooth mouse tilt interpolation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

      ctx.clearRect(0, 0, size, size);

      const centerX = size / 2;
      const centerY = size / 2;

      // 3D rotation angles
      const rotX = 0.35 + Math.sin(time * 0.6) * 0.15 + mouseRef.current.y * 0.4;
      const rotY = time * 0.8 + mouseRef.current.x * 0.6;
      const rotZ = Math.cos(time * 0.5) * 0.18;

      const cosRx = Math.cos(rotX);
      const sinRx = Math.sin(rotX);
      const cosRy = Math.cos(rotY);
      const sinRy = Math.sin(rotY);
      const cosRz = Math.cos(rotZ);
      const sinRz = Math.sin(rotZ);

      const isDark = resolvedTheme !== 'light';
      const points = [];

      // Generate deformed 3D lattice points
      for (let i = 0; i < latCount; i++) {
        // u goes from -pi/2 to pi/2
        const u = -Math.PI / 2 + (Math.PI * (i + 0.5)) / latCount;
        const cosU = Math.cos(u);
        const sinU = Math.sin(u);

        for (let j = 0; j < lonCount; j++) {
          // v goes from 0 to 2*pi
          const v = (2 * Math.PI * j) / lonCount;
          const cosV = Math.cos(v);
          const sinV = Math.sin(v);

          // Organic squarish/lobed morphology matching the reference image
          // The reference has 4 rounded corners/bulges like a soft rounded cube/pillow
          const lobePinch = 0.16 * (Math.cos(4 * v) * Math.pow(cosU, 2) + Math.cos(4 * u));
          
          // Harmonic wave perturbations rippling through the surface
          const wave1 = 0.14 * Math.sin(3 * u + time * 2.0) * Math.cos(3 * v + time * 1.6);
          const wave2 = 0.09 * Math.cos(5 * v - time * 2.4) * Math.sin(2 * u + time * 1.2);
          const wave3 = 0.05 * Math.sin(6 * (u + v) + time * 3.0);
          
          const warp = 1 + lobePinch + wave1 + wave2 + wave3;
          const r = baseRadius * warp;

          const px = r * cosU * cosV;
          const py = r * sinU;
          const pz = r * cosU * sinV;

          // 3D Rotation Matrix (Euler ZYX)
          // 1. Rotate around X
          const y1 = py * cosRx - pz * sinRx;
          const z1 = py * sinRx + pz * cosRx;

          // 2. Rotate around Y
          const x2 = px * cosRy + z1 * sinRy;
          const z2 = -px * sinRy + z1 * cosRy;

          // 3. Rotate around Z
          const x3 = x2 * cosRz - y1 * sinRz;
          const y3 = x2 * sinRz + y1 * cosRz;

          // Perspective projection
          const fov = 170;
          const projScale = fov / (fov + z2 + 50);
          const screenX = centerX + x3 * projScale;
          const screenY = centerY + y3 * projScale;

          points.push({
            x: screenX,
            y: screenY,
            z: z2,
            scale: projScale,
          });
        }
      }

      // Sort points by z-depth (back-to-front rendering)
      points.sort((a, b) => a.z - b.z);

      // Render dots with depth shading
      for (let k = 0; k < points.length; k++) {
        const pt = points[k];
        
        // Depth-based opacity and radius
        // z2 ranges approximately from -baseRadius to +baseRadius
        const depthNorm = (pt.z + baseRadius * 1.3) / (baseRadius * 2.6);
        const clampedDepth = Math.max(0, Math.min(1, depthNorm));

        // Front points are closer, brighter, larger; back points are dimmer, smaller
        const alpha = isDark 
          ? 0.15 + clampedDepth * 0.85
          : 0.12 + clampedDepth * 0.82;

        const dotRadius = Math.max(0.6, (0.7 + clampedDepth * 1.1) * pt.scale);

        ctx.beginPath();
        ctx.arc(pt.x, pt.y, dotRadius, 0, Math.PI * 2);

        if (isDark) {
          // In dark mode: crisp luminous dots with slight accent tint on the nearest highlights
          if (clampedDepth > 0.85 && isHovered) {
            ctx.fillStyle = `rgba(165, 180, 252, ${alpha})`;
          } else {
            ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
          }
        } else {
          // In light mode: crisp dark dots with accent highlights
          if (clampedDepth > 0.85 && isHovered) {
            ctx.fillStyle = `rgba(79, 70, 229, ${alpha})`;
          } else {
            ctx.fillStyle = `rgba(15, 15, 20, ${alpha})`;
          }
        }

        ctx.fill();
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [size, resolvedTheme, isHovered]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseRef.current.targetX = x;
    mouseRef.current.targetY = y;
  };

  const handleMouseLeave = () => {
    mouseRef.current.targetX = 0;
    mouseRef.current.targetY = 0;
    setIsHovered(false);
  };

  return (
    <div 
      className={`relative inline-flex items-center justify-center ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ width: size, height: size }}
    >
      <canvas
        ref={canvasRef}
        style={{ width: size, height: size }}
        className="block transition-transform duration-300 pointer-events-none"
      />
    </div>
  );
}
