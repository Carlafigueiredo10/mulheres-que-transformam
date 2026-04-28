'use client';

import { useEffect, useRef, useState } from 'react';

interface ModuleHeroProps {
  number: string;
  title: string;
  description: string;
}

export default function ModuleHero({ number, title, description }: ModuleHeroProps) {
  const [parallaxY, setParallaxY] = useState(0);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    let raf = 0;
    const update = () => {
      const el = ref.current;
      if (!el) {
        raf = 0;
        return;
      }
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const progress = Math.max(0, Math.min(1, 1 - rect.top / viewportH));
      const inverse = 1 - progress;
      setParallaxY(inverse * 8);
      raf = 0;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={ref}
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 w-1/2 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 80% 50%, rgba(201,168,106,0.10), transparent 60%)'
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        <div
          aria-hidden
          className="font-display absolute -top-6 right-0 md:-right-4 text-[10rem] md:text-[18rem] leading-none font-medium select-none pointer-events-none"
          style={{
            color: 'var(--eixo-ouro)',
            opacity: 0.14,
            letterSpacing: '-0.04em',
            transform: `translate3d(0, ${parallaxY.toFixed(2)}px, 0)`,
            transition: 'transform 200ms linear'
          }}
        >
          {number}
        </div>

        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-3 mb-7 text-[10px] uppercase tracking-[0.28em] font-body font-semibold text-[var(--eixo-ouro)]">
            <span aria-hidden className="inline-block w-10 h-px" style={{ background: 'var(--eixo-ouro)' }} />
            Módulo {number}
          </div>

          <h1
            className="font-display text-[clamp(2.4rem,5.4vw,4.4rem)] font-medium text-[var(--eixo-off-white)] mb-8"
            style={{
              lineHeight: 1.02,
              letterSpacing: '-0.015em'
            }}
          >
            {title}
          </h1>

          <p className="font-body text-[clamp(1rem,1.4vw,1.15rem)] leading-relaxed text-[var(--eixo-off-white-soft)] max-w-2xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
