'use client';

import { useEffect, useRef } from 'react';

type ParticleHue = 'off' | 'gold' | 'magenta';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseVy: number;
  size: number;
  opacity: number;
  hue: ParticleHue;
}

type Intensity = 'home' | 'manifesto';

interface ParticleFieldProps {
  density?: number;
  ascendSpeed?: number;
  className?: string;
  intensity?: Intensity;
}

const PRESETS: Record<Intensity, { density: number; ascendSpeed: number; mouseForce: number; sizeMin: number; sizeRange: number }> = {
  home: { density: 0.025, ascendSpeed: 0.10, mouseForce: 0.4, sizeMin: 0.85, sizeRange: 0.4 },
  manifesto: { density: 0.05, ascendSpeed: 0.18, mouseForce: 0.7, sizeMin: 0.4, sizeRange: 1.3 }
};

export default function ParticleField({
  density,
  ascendSpeed,
  className,
  intensity = 'manifesto'
}: ParticleFieldProps) {
  const preset = PRESETS[intensity];
  const finalDensity = density ?? preset.density;
  const finalSpeed = ascendSpeed ?? preset.ascendSpeed;
  const finalMouseForce = preset.mouseForce;
  const sizeMin = preset.sizeMin;
  const sizeRange = preset.sizeRange;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let particles: Particle[] = [];
    let raf = 0;
    let width = 0;
    let height = 0;

    const initParticle = (w: number, h: number, randomY = true): Particle => {
      const baseVy = -(finalSpeed + Math.random() * 0.32);
      const r = Math.random();
      const hue: ParticleHue =
        r < 0.93 ? 'off' : r < 0.985 ? 'gold' : 'magenta';
      return {
        x: Math.random() * w,
        y: randomY ? Math.random() * h : h + Math.random() * 40,
        vx: (Math.random() - 0.5) * 0.06,
        vy: baseVy,
        baseVy,
        size: Math.random() * sizeRange + sizeMin,
        opacity: Math.random() * 0.55 + 0.18,
        hue
      };
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const isMobile = width < 768;
      const area = width * height;
      const target = Math.floor((area / 1000) * finalDensity * (isMobile ? 0.45 : 1));
      particles = Array.from({ length: target }, () => initParticle(width, height));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const mouseActive = mouseRef.current.active && !reduce;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const radius = 150;
      const radiusSq = radius * radius;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (mouseActive) {
          const dx = p.x - mx;
          const dy = p.y - my;
          const distSq = dx * dx + dy * dy;
          if (distSq < radiusSq && distSq > 0.5) {
            const dist = Math.sqrt(distSq);
            const force = (1 - dist / radius) * finalMouseForce;
            p.vx += (dx / dist) * force;
            p.vy += (dy / dist) * force * 0.6;
          }
        }

        p.vx = p.vx * 0.93 + (Math.random() - 0.5) * 0.006;
        p.vy = p.vy * 0.93 + p.baseVy * 0.07;

        p.x += p.vx;
        p.y += p.vy;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
          p.vx = (Math.random() - 0.5) * 0.06;
          p.vy = p.baseVy;
        }
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;

        ctx.beginPath();
        if (p.hue === 'gold') {
          ctx.fillStyle = `rgba(201, 168, 106, ${p.opacity})`;
        } else if (p.hue === 'magenta') {
          ctx.fillStyle = `rgba(217, 70, 239, ${p.opacity * 0.85})`;
        } else {
          ctx.fillStyle = `rgba(242, 234, 217, ${p.opacity})`;
        }
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    };
    const onLeave = () => {
      mouseRef.current.active = false;
    };

    resize();
    if (!reduce) {
      raf = requestAnimationFrame(draw);
    } else {
      draw();
    }

    window.addEventListener('resize', resize);
    canvas.addEventListener('pointermove', onMove);
    canvas.addEventListener('pointerleave', onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('pointermove', onMove);
      canvas.removeEventListener('pointerleave', onLeave);
    };
  }, [finalDensity, finalSpeed, finalMouseForce, sizeMin, sizeRange]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden
    />
  );
}
