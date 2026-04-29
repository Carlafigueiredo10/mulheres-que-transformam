'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import ParticleField from '@/components/eixos/ParticleField';
import CinematicTitle from '@/components/eixos/CinematicTitle';
import { orgaosAderentes } from '@/data/orgaos-aderentes';

export default function HomeHero() {
  const [armed, setArmed] = useState(false);
  const totalOrgaos = orgaosAderentes.length;

  useEffect(() => {
    const t = setTimeout(() => setArmed(true), 100);
    return () => clearTimeout(t);
  }, []);

  const pillBaseClass =
    'px-3 py-1.5 rounded-full border text-[10px] font-body font-semibold uppercase tracking-[0.18em] whitespace-nowrap';

  return (
    <section className="relative min-h-[100svh] py-32 flex items-center justify-center overflow-hidden">
      <ParticleField
        intensity="home"
        className="absolute inset-0 w-full h-full"
      />

      {/* Colunas institucionais sutis (referência arquitetônica) */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none flex justify-between px-[8%] opacity-[0.035]"
      >
        {Array.from({ length: 7 }).map((_, i) => (
          <span
            key={i}
            className="block w-px h-full"
            style={{ background: 'var(--eixo-off-white)' }}
          />
        ))}
      </div>

      {/* Brilho radial central */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 38%, rgba(201,168,106,0.07), transparent 55%)'
        }}
      />

      {/* Halo dourado inferior */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[42%] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 100% at 50% 100%, rgba(201,168,106,0.18) 0%, rgba(201,168,106,0.08) 30%, rgba(15,16,20,0) 70%)'
        }}
      />

      {/* Vinheta superior (peso institucional) */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-40 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(15,16,20,0.6) 0%, rgba(15,16,20,0) 100%)'
        }}
      />

      <div className="relative z-10 px-6 max-w-5xl mx-auto text-center">
        {/* Âncora institucional — quem assina */}
        <div
          className="mb-8 flex flex-col items-center gap-3"
          style={{
            opacity: armed ? 1 : 0,
            transition: 'opacity 1000ms ease-out 100ms'
          }}
        >
          <span
            aria-hidden
            className="block w-px h-10"
            style={{
              background:
                'linear-gradient(to bottom, transparent, rgba(201,168,106,0.45))'
            }}
          />
          <div className="text-[10px] uppercase tracking-[0.4em] font-body text-[var(--eixo-off-white-soft)]">
            Ministério da Gestão e da Inovação
          </div>
        </div>

        {/* Eyebrow */}
        <div
          className="mb-10 flex items-center justify-center gap-4 text-[10px] uppercase tracking-[0.32em] font-body font-semibold text-[var(--eixo-ouro)]"
          style={{
            opacity: armed ? 1 : 0,
            transition: 'opacity 800ms ease-out 400ms'
          }}
        >
          <span
            aria-hidden
            className="inline-block w-10 h-px"
            style={{ background: 'var(--eixo-ouro)' }}
          />
          Iniciativa Federal pela Paridade
          <span
            aria-hidden
            className="inline-block w-10 h-px"
            style={{ background: 'var(--eixo-ouro)' }}
          />
        </div>

        <CinematicTitle
          primary="Mulheres que"
          accent="transformam."
          subtitle="Programa federal pela paridade de gênero na liderança da administração pública."
          softSweep
          energyDelay={1900}
        />

        {/* Segunda linha - declarativa, dá gravitas */}
        <p
          className="font-body eixo-sharpen mt-5 max-w-xl mx-auto text-sm md:text-base text-[var(--eixo-off-white-dim)] leading-relaxed italic"
          style={{ animationDelay: '2100ms' }}
        >
          &ldquo;Para que a metade da população não fique de fora da metade
          da decisão.&rdquo;
        </p>

        {/* Pílulas-prova: substância concreta do programa */}
        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-2"
          style={{
            opacity: armed ? 1 : 0,
            transition: 'opacity 900ms ease-out 2400ms'
          }}
        >
          <span
            className={`${pillBaseClass} text-[var(--eixo-off-white-soft)]`}
            style={{ borderColor: 'rgba(201, 168, 106, 0.25)' }}
          >
            6 módulos estratégicos
          </span>
          <span
            className={`${pillBaseClass} text-[var(--eixo-off-white-soft)]`}
            style={{ borderColor: 'rgba(201, 168, 106, 0.25)' }}
          >
            5 eixos transversais
          </span>
          <span
            className={`${pillBaseClass} text-[var(--eixo-off-white-soft)]`}
            style={{ borderColor: 'rgba(201, 168, 106, 0.25)' }}
          >
            {totalOrgaos} órgãos aderentes
          </span>
          <span
            className={pillBaseClass}
            style={{
              borderColor: 'rgba(201, 168, 106, 0.55)',
              background: 'rgba(201, 168, 106, 0.10)',
              color: 'var(--eixo-ouro)'
            }}
          >
            Meta de paridade até 2027
          </span>
        </div>

        {/* CTA único */}
        <div
          className="mt-12 flex justify-center"
          style={{
            opacity: armed ? 1 : 0,
            transform: armed ? 'translateY(0)' : 'translateY(8px)',
            transition:
              'opacity 700ms ease-out 2900ms, transform 700ms ease-out 2900ms'
          }}
        >
          <Link href="/como-aderir" className="btn-primary">
            Iniciar adesão institucional
          </Link>
        </div>
      </div>

      {/* Rodapé do hero — assinatura institucional + scroll cue */}
      <div
        className="absolute left-1/2 -translate-x-1/2 bottom-8 flex flex-col items-center gap-3 pointer-events-none"
        style={{
          opacity: armed ? 1 : 0,
          transition: 'opacity 1200ms ease-out 3500ms'
        }}
        aria-hidden
      >
        <span className="text-[10px] uppercase tracking-[0.4em] font-body text-[var(--eixo-off-white-dim)]">
          Brasília &middot; 2024 – 2027
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
    </section>
  );
}
