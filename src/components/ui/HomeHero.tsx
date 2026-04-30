'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import NetworkField, {
  type NetworkFieldHandle
} from '@/components/eixos/NetworkField';
import CinematicTitle from '@/components/eixos/CinematicTitle';

export default function HomeHero() {
  const [armed, setArmed] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const networkRef = useRef<NetworkFieldHandle>(null);
  const ctaPosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Atraso intencional — a rede ganha vida primeiro, o título depois.
    // Cria entrada cinematográfica: seed pulsa sozinho 600ms antes do conteúdo.
    const t = setTimeout(() => setArmed(true), 600);
    return () => clearTimeout(t);
  }, []);

  // Calcula posição do CTA no canvas (relativa à section) para o magnet
  useEffect(() => {
    const updateCtaPos = () => {
      if (!ctaRef.current || !sectionRef.current) return;
      const ctaRect = ctaRef.current.getBoundingClientRect();
      const secRect = sectionRef.current.getBoundingClientRect();
      ctaPosRef.current = {
        x: ctaRect.left + ctaRect.width / 2 - secRect.left,
        y: ctaRect.top + ctaRect.height / 2 - secRect.top
      };
    };
    // Calcula depois que o layout assenta
    const t1 = setTimeout(updateCtaPos, 50);
    const t2 = setTimeout(updateCtaPos, 800);
    window.addEventListener('resize', updateCtaPos);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener('resize', updateCtaPos);
    };
  }, []);

  const onCtaEnter = () => {
    const { x, y } = ctaPosRef.current;
    networkRef.current?.setMagnet(x, y, 240, true);
  };
  const onCtaLeave = () => {
    const { x, y } = ctaPosRef.current;
    networkRef.current?.setMagnet(x, y, 240, false);
  };
  const onCtaClick = () => {
    const { x, y } = ctaPosRef.current;
    networkRef.current?.triggerRipple(x, y);
  };

  const pillBaseClass =
    'px-3 py-1 rounded-full border text-[9px] font-body font-semibold uppercase tracking-[0.22em] whitespace-nowrap';

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] py-32 flex items-center justify-center overflow-hidden"
    >
      <NetworkField
        ref={networkRef}
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
          softSweep
          energyDelay={1900}
          startDelay={600}
        />

        {/* PROTAGONISTA — linha funcional. Direta, clara, ancoradora.
            Contraste levemente reduzido (0.88) e mais espaço acima (mt-14)
            pra criar separação clara do título. */}
        <p
          className="font-body eixo-sharpen mt-14 max-w-3xl mx-auto leading-snug font-medium"
          style={{
            fontSize: 'clamp(1.05rem, 1.7vw, 1.4rem)',
            color: 'rgba(242, 234, 217, 0.88)',
            animationDelay: '2400ms'
          }}
        >
          Para instituições que lideram — ou querem liderar — a paridade de
          gênero no Brasil.
        </p>

        {/* LEGENDA — assinatura institucional rebaixada. Contexto, não protagonista. */}
        <p
          className="font-body eixo-sharpen mt-5 max-w-xl mx-auto text-xs md:text-sm leading-relaxed"
          style={{
            color: 'rgba(242, 234, 217, 0.42)',
            letterSpacing: '0.02em',
            animationDelay: '2900ms'
          }}
        >
          Articulada por servidoras e gestoras da administração pública.
        </p>

        {/* ECO — citação poética. Quase imperceptível, aparece bem depois. */}
        <p
          className="font-body eixo-sharpen mt-10 max-w-xl mx-auto text-xs leading-relaxed italic"
          style={{
            color: 'rgba(242, 234, 217, 0.18)',
            animationDelay: '4000ms'
          }}
        >
          &ldquo;Para que a metade da população não fique de fora da metade
          da decisão.&rdquo;
        </p>

        {/* Pílulas-HUD — coordenadas de sistema, orbitando a experiência */}
        <div
          className="mt-12 flex flex-wrap items-center justify-center gap-x-5 gap-y-3"
          style={{
            opacity: armed ? 0.75 : 0,
            transition: 'opacity 900ms ease-out 2500ms'
          }}
        >
          <span
            className={pillBaseClass}
            style={{
              borderColor: 'rgba(201, 168, 106, 0.16)',
              color: 'rgba(242, 234, 217, 0.55)'
            }}
          >
            6 módulos estratégicos
          </span>
          <span
            className={pillBaseClass}
            style={{
              borderColor: 'rgba(201, 168, 106, 0.16)',
              color: 'rgba(242, 234, 217, 0.55)'
            }}
          >
            5 eixos transversais
          </span>
          <span
            className={pillBaseClass}
            style={{
              borderColor: 'rgba(201, 168, 106, 0.32)',
              background: 'rgba(201, 168, 106, 0.05)',
              color: 'rgba(201, 168, 106, 0.85)'
            }}
          >
            Meta de paridade até 2030
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
          <Link
            ref={ctaRef}
            href="/como-aderir"
            className="btn-primary cta-magnetic"
            onMouseEnter={onCtaEnter}
            onMouseLeave={onCtaLeave}
            onClick={onCtaClick}
          >
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
          Brasília &middot; 2024 – 2030
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
