'use client';

import { useEffect, useRef, useState } from 'react';

export default function RedesHero() {
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
      setParallaxY((1 - progress) * 14);
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
      className="relative pt-32 pb-24 md:pt-40 md:pb-36 px-6 overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, var(--rede-roxo-deep) 0%, var(--rede-roxo) 100%)'
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-70"
        style={{
          background:
            'radial-gradient(ellipse at 80% 30%, rgba(201,123,90,0.18), transparent 60%), radial-gradient(ellipse at 10% 80%, rgba(139,92,246,0.18), transparent 55%)'
        }}
      />

      <RedeMesh parallaxY={parallaxY} />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-7 text-[10px] uppercase tracking-[0.32em] font-body font-semibold" style={{ color: 'var(--rede-cobre-soft)' }}>
          <span aria-hidden className="inline-block w-12 h-px" style={{ background: 'var(--rede-cobre-soft)' }} />
          O Poder do Coletivo
        </div>

        <h1
          className="font-display text-[clamp(2.6rem,6.4vw,5.6rem)] font-medium mb-8 max-w-4xl"
          style={{
            color: 'var(--rede-cream)',
            lineHeight: 1.0,
            letterSpacing: '-0.02em'
          }}
        >
          Redes de apoio e a transformação da liderança no setor público brasileiro.
        </h1>

        <p
          className="font-body text-[clamp(1rem,1.4vw,1.2rem)] leading-relaxed max-w-2xl"
          style={{ color: 'var(--rede-cream-soft)' }}
        >
          Por que formar uma rede, como formar a sua, e o que ela transforma — para você,
          para sua instituição e para o Estado brasileiro.
        </p>
      </div>
    </section>
  );
}

function RedeMesh({ parallaxY }: { parallaxY: number }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 800 600"
      className="absolute -right-20 -top-10 md:right-0 md:top-0 w-[720px] md:w-[920px] h-auto opacity-60 pointer-events-none"
      style={{ transform: `translate3d(0, ${parallaxY.toFixed(2)}px, 0)`, transition: 'transform 200ms linear' }}
    >
      <defs>
        <linearGradient id="redeStroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#C97B5A" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      {[
        [200, 520, 720, 80],
        [200, 520, 600, 200],
        [200, 520, 580, 360],
        [200, 520, 480, 460],
        [480, 460, 720, 80],
        [580, 360, 720, 80],
        [600, 200, 720, 80],
        [580, 360, 720, 280],
        [480, 460, 660, 540],
        [600, 200, 720, 280],
        [380, 320, 580, 360],
        [380, 320, 480, 460],
        [380, 320, 600, 200],
        [200, 520, 380, 320]
      ].map(([x1, y1, x2, y2], i) => (
        <path
          key={i}
          d={`M${x1},${y1} Q ${(x1 + x2) / 2 + (i % 2 ? 30 : -30)},${(y1 + y2) / 2 - 60} ${x2},${y2}`}
          stroke="url(#redeStroke)"
          strokeWidth={i % 3 === 0 ? 1.6 : 0.9}
          fill="none"
          opacity={0.55 + (i % 3) * 0.12}
        />
      ))}
      {[
        [200, 520, 7, '#1F1233'],
        [380, 320, 9, '#C97B5A'],
        [480, 460, 7, '#8B5CF6'],
        [580, 360, 11, '#C97B5A'],
        [600, 200, 7, '#8B5CF6'],
        [660, 540, 5, '#C97B5A'],
        [720, 80, 9, '#C97B5A'],
        [720, 280, 7, '#8B5CF6']
      ].map(([cx, cy, r, fill], i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill={fill as string} opacity={0.85} />
      ))}
    </svg>
  );
}
