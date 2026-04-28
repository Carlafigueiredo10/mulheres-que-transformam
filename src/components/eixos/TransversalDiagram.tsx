'use client';

import { useEffect, useRef, useState } from 'react';
import { modules } from '@/data/modules';
import { eixosTransversais } from '@/data/eixos-transversais';

export default function TransversalDiagram() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const moduleShortLabels = modules.map((m) => m.title.split(/\s+/)[0]);

  return (
    <section
      ref={ref}
      className="relative py-32 md:py-40 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-5 text-[10px] uppercase tracking-[0.28em] font-body font-semibold text-[var(--eixo-ouro)]">
            <span aria-hidden className="inline-block w-8 h-px" style={{ background: 'var(--eixo-ouro)' }} />
            Síntese
          </div>
          <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] leading-tight font-medium text-[var(--eixo-off-white)] max-w-3xl mx-auto">
            Os 5 eixos atravessam, sem exceção, os 6 módulos.
          </h2>
        </div>

        <div className="overflow-x-auto">
          <div
            className="grid gap-x-2 gap-y-6 mx-auto min-w-[720px]"
            style={{
              gridTemplateColumns: `minmax(140px, 0.9fr) repeat(${modules.length}, minmax(72px, 1fr))`
            }}
          >
            <div />
            {moduleShortLabels.map((label, i) => (
              <div
                key={i}
                className="font-body text-[10px] uppercase tracking-[0.22em] text-[var(--eixo-off-white-soft)] text-center pb-3 border-b"
                style={{
                  borderColor: 'rgba(242,234,217,0.15)',
                  opacity: active ? 1 : 0,
                  transform: active ? 'translateY(0)' : 'translateY(-6px)',
                  transition: `opacity 400ms ease-out ${100 + i * 50}ms, transform 400ms ease-out ${100 + i * 50}ms`
                }}
              >
                {label}
              </div>
            ))}

            {eixosTransversais.map((eixo, rowIdx) => {
              const lineDelay = 600 + rowIdx * 220;
              return (
                <RowFragment
                  key={eixo.id}
                  rowIdx={rowIdx}
                  label={eixo.shortTitle}
                  cols={modules.length}
                  active={active}
                  lineDelay={lineDelay}
                />
              );
            })}
          </div>
        </div>

        <p className="mt-14 text-center font-body text-sm text-[var(--eixo-off-white-dim)] max-w-xl mx-auto">
          Cada interseção é um ponto onde o módulo só funciona se o eixo for honrado.
        </p>
      </div>
    </section>
  );
}

function RowFragment({
  rowIdx,
  label,
  cols,
  active,
  lineDelay
}: {
  rowIdx: number;
  label: string;
  cols: number;
  active: boolean;
  lineDelay: number;
}) {
  const number = String(rowIdx + 1).padStart(2, '0');

  return (
    <>
      <div
        className="flex items-center gap-3 font-body text-sm text-[var(--eixo-off-white)] pr-3"
        style={{
          opacity: active ? 1 : 0,
          transform: active ? 'translateX(0)' : 'translateX(-10px)',
          transition: `opacity 400ms ease-out ${lineDelay - 220}ms, transform 400ms ease-out ${lineDelay - 220}ms`
        }}
      >
        <span
          className="font-display text-xs"
          style={{ color: 'var(--eixo-ouro)' }}
        >
          {number}
        </span>
        <span className="leading-tight">{label}</span>
      </div>

      <div
        className="relative col-span-full flex items-center"
        style={{
          gridColumn: `2 / span ${cols}`,
          height: '34px'
        }}
      >
        <div
          className="absolute left-0 right-0 h-px"
          style={{
            background:
              'linear-gradient(90deg, rgba(201,168,106,0) 0%, rgba(201,168,106,0.55) 12%, rgba(201,168,106,0.55) 88%, rgba(201,168,106,0) 100%)',
            transform: active ? 'scaleX(1)' : 'scaleX(0)',
            transformOrigin: 'left center',
            transition: `transform 700ms cubic-bezier(0.65,0,0.35,1) ${lineDelay}ms`
          }}
        />
        <div className="relative w-full grid" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
          {Array.from({ length: cols }).map((_, i) => (
            <div key={i} className="flex justify-center">
              <span
                className="block w-1.5 h-1.5 rounded-full"
                style={{
                  background: 'var(--eixo-ouro)',
                  opacity: active ? 1 : 0,
                  transform: active ? 'scale(1)' : 'scale(0.4)',
                  transition: `opacity 250ms ease-out ${lineDelay + i * 70}ms, transform 250ms ease-out ${lineDelay + i * 70}ms`,
                  boxShadow: active ? '0 0 6px rgba(217,70,239,0.35)' : 'none'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
