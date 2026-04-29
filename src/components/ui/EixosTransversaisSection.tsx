import Link from 'next/link';
import { eixosTransversais } from '@/data/eixos-transversais';

export default function EixosTransversaisSection() {
  return (
    <section
      id="eixos-transversais"
      className="py-32 md:py-40 px-6 relative"
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(201,168,106,0.05), transparent 60%)'
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-6 text-[10px] uppercase tracking-[0.32em] font-body font-semibold text-[var(--eixo-ouro)]">
            <span
              aria-hidden
              className="inline-block w-10 h-px"
              style={{ background: 'var(--eixo-ouro)' }}
            />
            Premissas Obrigatórias
            <span
              aria-hidden
              className="inline-block w-10 h-px"
              style={{ background: 'var(--eixo-ouro)' }}
            />
          </div>
          <h2
            className="font-display text-[clamp(2rem,4.5vw,3.6rem)] leading-[1.05] font-medium text-[var(--eixo-off-white)] mb-6"
            style={{ letterSpacing: '-0.015em' }}
          >
            Cinco eixos que <span style={{ color: 'var(--eixo-ouro)' }}>atravessam</span> todos os módulos
          </h2>
          <p className="font-body text-base md:text-[1.05rem] leading-relaxed text-[var(--eixo-off-white-soft)]">
            Qualquer caminho que sua instituição escolher precisa ser orientado por essas premissas.
            Não são opcionais — são as regras de ouro do programa.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {eixosTransversais.map((eixo) => (
            <li
              key={eixo.id}
              className="group rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'rgba(21, 22, 29, 0.55)',
                borderColor: 'rgba(242, 234, 217, 0.08)'
              }}
            >
              <div className="text-3xl mb-4" aria-hidden>
                {eixo.icon}
              </div>
              <h3 className="font-display text-base font-medium text-[var(--eixo-off-white)] mb-3 leading-tight">
                {eixo.shortTitle}
              </h3>
              <p className="font-body text-xs text-[var(--eixo-off-white-soft)] leading-relaxed">
                {eixo.description}
              </p>
              {eixo.reference && (
                <p
                  className="mt-3 text-[10px] font-body font-semibold"
                  style={{ color: 'var(--eixo-ouro)' }}
                >
                  {eixo.reference}
                </p>
              )}
            </li>
          ))}
        </ul>

        <div className="text-center">
          <Link href="/eixos-transversais" className="btn-secondary">
            Conhecer cada eixo em detalhe
          </Link>
        </div>
      </div>
    </section>
  );
}
