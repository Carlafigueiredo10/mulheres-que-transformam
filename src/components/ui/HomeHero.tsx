'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import ParticleField from '@/components/eixos/ParticleField';
import CinematicTitle from '@/components/eixos/CinematicTitle';

export default function HomeHero() {
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setArmed(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[680px] flex items-center justify-center overflow-hidden">
      <ParticleField
        intensity="home"
        className="absolute inset-0 w-full h-full"
      />

      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 38%, rgba(201,168,106,0.07), transparent 55%)'
        }}
      />

      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[42%] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 100% at 50% 100%, rgba(201,168,106,0.18) 0%, rgba(201,168,106,0.08) 30%, rgba(15,16,20,0) 70%)'
        }}
      />

      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(15,16,20,0) 0%, rgba(245,241,234,0.10) 100%)'
        }}
      />

      <div className="relative z-10 px-6 max-w-5xl mx-auto text-center">
        <div
          className="mb-12 flex items-center justify-center gap-4 text-[10px] uppercase tracking-[0.32em] font-body font-semibold text-[var(--eixo-ouro)]"
          style={{
            opacity: armed ? 1 : 0,
            transition: 'opacity 800ms ease-out 200ms'
          }}
        >
          <span aria-hidden className="inline-block w-10 h-px" style={{ background: 'var(--eixo-ouro)' }} />
          Iniciativa Federal
          <span aria-hidden className="inline-block w-10 h-px" style={{ background: 'var(--eixo-ouro)' }} />
        </div>

        <CinematicTitle
          primary="Mulheres que"
          accent="transformam."
          subtitle="Programa federal pela paridade de gênero na liderança pública."
          softSweep
          energyDelay={1900}
        />

        <div
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
          style={{
            opacity: armed ? 1 : 0,
            transform: armed ? 'translateY(0)' : 'translateY(8px)',
            transition: 'opacity 700ms ease-out 2700ms, transform 700ms ease-out 2700ms'
          }}
        >
          <Link
            href="/#modulos"
            className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 font-body font-semibold text-sm tracking-wide rounded-full transition-all duration-300 hover:scale-[1.02]"
            style={{
              background: 'var(--eixo-ouro)',
              color: 'var(--eixo-grafite)',
              boxShadow: '0 0 0 0 rgba(201,168,106,0.35)'
            }}
          >
            Ver como aplicar na sua instituição
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>

          <Link
            href="/tereza"
            className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 font-body font-medium text-sm tracking-wide rounded-full border transition-all duration-300"
            style={{
              borderColor: 'rgba(201, 168, 106, 0.35)',
              color: 'var(--eixo-off-white)'
            }}
          >
            Diagnosticar minha realidade
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div
          className="absolute left-1/2 -translate-x-1/2 bottom-10 flex flex-col items-center gap-2 pointer-events-none"
          style={{
            opacity: armed ? 0.25 : 0,
            transition: 'opacity 1200ms ease-out 3500ms'
          }}
          aria-hidden
        >
          <span className="text-[10px] uppercase tracking-[0.28em] font-body text-[var(--eixo-off-white)]">
            continue
          </span>
          <span
            className="block w-px h-8"
            style={{
              background:
                'linear-gradient(to bottom, var(--eixo-ouro), transparent)',
              animation: 'eixoScrollCue 2.4s ease-in-out infinite'
            }}
          />
        </div>
      </div>
    </section>
  );
}
