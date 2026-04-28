import Link from 'next/link';
import { modules } from '@/data/modules';
import BlockHeader from './BlockHeader';

interface SystemGridProps {
  currentSlug: string;
}

export default function SystemGrid({ currentSlug }: SystemGridProps) {
  const others = modules
    .map((m, idx) => ({ module: m, index: idx }))
    .filter(({ module }) => module.id !== currentSlug);

  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <BlockHeader label="O sistema completo" />
        <p className="font-body text-[var(--eixo-off-white-dim)] text-sm mb-10 max-w-xl">
          Os outros pilares da transformação. Cada um é uma porta de entrada independente.
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {others.map(({ module, index }) => {
            const num = String(index + 1).padStart(2, '0');
            return (
              <li key={module.id}>
                <Link
                  href={module.path}
                  className="group relative block h-full rounded-2xl p-6 border overflow-hidden transition-all duration-300"
                  style={{
                    background: 'rgba(21, 22, 29, 0.55)',
                    borderColor: 'rgba(242, 234, 217, 0.08)'
                  }}
                >
                  <span
                    aria-hidden
                    className="absolute inset-0 rounded-2xl border opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ borderColor: 'rgba(201, 168, 106, 0.4)' }}
                  />

                  <div
                    aria-hidden
                    className="font-display absolute -top-2 -right-1 text-[5rem] leading-none font-medium select-none pointer-events-none"
                    style={{
                      color: 'var(--eixo-ouro)',
                      opacity: 0.14,
                      letterSpacing: '-0.04em'
                    }}
                  >
                    {num}
                  </div>

                  <div className="relative z-10">
                    <div className="text-[10px] uppercase tracking-[0.28em] font-body font-semibold mb-3" style={{ color: 'var(--eixo-ouro)' }}>
                      Módulo {num}
                    </div>
                    <h3 className="font-display text-[1.15rem] md:text-[1.25rem] font-medium text-[var(--eixo-off-white)] mb-3 leading-tight pr-6">
                      {module.title}
                    </h3>
                    <p className="font-body text-sm text-[var(--eixo-off-white-dim)] leading-relaxed mb-6">
                      {module.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm font-body font-medium text-[var(--eixo-off-white-soft)] group-hover:text-[var(--eixo-ouro)] transition-colors">
                      Ver módulo
                      <span
                        aria-hidden
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
