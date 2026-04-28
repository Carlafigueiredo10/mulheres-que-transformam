'use client';

import { EixoTransversal } from '@/types';

interface EixoSlideProps {
  eixo: EixoTransversal;
  index: number;
}

export default function EixoSlide({ eixo, index }: EixoSlideProps) {
  const number = String(index + 1).padStart(2, '0');

  return (
    <div className="w-full h-full flex items-center justify-center px-6 md:px-12 py-20">
      <div className="relative w-full max-w-3xl">
        <div
          className="font-display absolute -top-20 -left-2 md:-left-12 text-[8rem] md:text-[14rem] leading-none font-medium select-none pointer-events-none"
          style={{
            color: 'var(--eixo-ouro)',
            opacity: 0.18,
            letterSpacing: '-0.04em'
          }}
          aria-hidden
        >
          {number}
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6 text-[10px] uppercase tracking-[0.28em] font-body font-semibold text-[var(--eixo-ouro)]">
            <span
              aria-hidden
              className="inline-block w-8 h-px"
              style={{ background: 'var(--eixo-ouro)' }}
            />
            Eixo {number}
          </div>

          <h2 className="font-display text-[clamp(2rem,4.5vw,3.6rem)] leading-[1.05] font-medium text-[var(--eixo-off-white)] mb-10 tracking-tight">
            {eixo.title}
          </h2>

          <p className="font-display text-[clamp(1.1rem,2vw,1.6rem)] leading-[1.4] text-[var(--eixo-off-white)] mb-14 max-w-2xl italic">
            {eixo.tension}
          </p>

          <div className="mb-10">
            <div className="text-[10px] uppercase tracking-[0.28em] font-body font-semibold text-[var(--eixo-off-white-dim)] mb-5">
              O que isso significa na prática
            </div>
            <ul className="space-y-3.5">
              {eixo.actions.map((action, i) => (
                <li
                  key={i}
                  className="font-body flex gap-4 text-[var(--eixo-off-white-soft)] text-base md:text-[1.05rem] leading-relaxed"
                >
                  <span
                    aria-hidden
                    className="font-display flex-shrink-0 mt-0.5"
                    style={{ color: 'var(--eixo-ouro)' }}
                  >
                    →
                  </span>
                  <span>{action}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-l-2 pl-5 py-1" style={{ borderColor: 'var(--eixo-ouro)' }}>
            <div className="text-[10px] uppercase tracking-[0.28em] font-body font-semibold text-[var(--eixo-off-white-dim)] mb-2">
              Indicador-chave
            </div>
            <div className="font-body text-[var(--eixo-off-white)] text-base md:text-[1.05rem] leading-snug">
              {eixo.indicator}
            </div>
          </div>

          {eixo.normativeReference && (
            <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full font-body text-xs"
              style={{
                background: 'var(--eixo-ouro-soft)',
                color: 'var(--eixo-ouro)',
                border: '1px solid rgba(201,168,106,0.3)'
              }}
            >
              <span aria-hidden>§</span>
              {eixo.normativeReference}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
