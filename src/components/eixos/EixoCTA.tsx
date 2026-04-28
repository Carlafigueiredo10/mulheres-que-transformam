'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function EixoCTA() {
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
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-40 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p
          className="font-display text-[clamp(1.5rem,3vw,2.4rem)] leading-[1.25] text-[var(--eixo-off-white)] mb-12"
          style={{
            opacity: active ? 1 : 0,
            transform: active ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 700ms cubic-bezier(0.2,0.7,0.1,1), transform 700ms cubic-bezier(0.2,0.7,0.1,1)'
          }}
        >
          Sua instituição sustenta essa transformação
          <span style={{ color: 'var(--eixo-ouro)' }}> — </span>
          ou depende de quem está no cargo?
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          style={{
            opacity: active ? 1 : 0,
            transform: active ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 700ms cubic-bezier(0.2,0.7,0.1,1) 200ms, transform 700ms cubic-bezier(0.2,0.7,0.1,1) 200ms'
          }}
        >
          <Link
            href="/tereza"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 font-body font-semibold text-sm tracking-wide rounded-full transition-all duration-300"
            style={{
              background: 'var(--eixo-ouro)',
              color: 'var(--eixo-grafite)'
            }}
          >
            Diagnostique com a Tereza
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>

          <Link
            href="/#modulos"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 font-body font-semibold text-sm tracking-wide rounded-full transition-all duration-300 border eixo-cta-ghost"
            style={{
              borderColor: 'rgba(242,234,217,0.25)',
              color: 'var(--eixo-off-white)'
            }}
          >
            Conheça os 6 módulos
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
