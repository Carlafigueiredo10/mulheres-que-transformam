'use client';

import { useEffect, useRef, useState } from 'react';

interface CinematicTitleProps {
  primary: string;
  accent: string;
  subtitle?: string;
  softSweep?: boolean;
  energyDelay?: number;
  startDelay?: number;
}

export default function CinematicTitle({
  primary,
  accent,
  subtitle,
  softSweep = false,
  energyDelay = 1700,
  startDelay = 0
}: CinematicTitleProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [energyArmed, setEnergyArmed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setEnergyArmed(true), energyDelay + startDelay);
    return () => clearTimeout(t);
  }, [energyDelay, startDelay]);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const onMove = (e: MouseEvent) => {
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const nx = (e.clientX - cx) / rect.width;
      const ny = (e.clientY - cy) / rect.height;
      setParallax({ x: nx * -4, y: ny * -4 });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div
      ref={wrapRef}
      className="relative text-center"
      style={{
        transform: `translate3d(${parallax.x}px, ${parallax.y}px, 0)`,
        transition: 'transform 600ms cubic-bezier(0.2,0.7,0.1,1)'
      }}
    >
      <h1 className="font-display text-[clamp(2.4rem,6vw,5.2rem)] leading-[1.05] tracking-tight font-medium">
        <span
          className="block eixo-sharpen text-[var(--eixo-off-white)]"
          style={{ animationDelay: `${200 + startDelay}ms` }}
        >
          {primary}
        </span>
        <span
          className={`block eixo-sharpen eixo-energy-text ${softSweep ? 'eixo-energy-text--soft' : ''} mt-2 ${
            energyArmed ? 'eixo-energy-run' : ''
          }`}
          style={{ animationDelay: `${900 + startDelay}ms` }}
        >
          {accent}
        </span>
      </h1>
      {subtitle && (
        <p
          className="font-body eixo-sharpen mt-8 max-w-2xl mx-auto text-base md:text-lg text-[var(--eixo-off-white-soft)] leading-relaxed"
          style={{ animationDelay: `${1500 + startDelay}ms` }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
