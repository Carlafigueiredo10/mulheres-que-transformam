import Link from 'next/link';
import { modules } from '@/data/modules';

export default function HomeModulesSection() {
  return (
    <section id="modulos" className="py-32 md:py-40 px-6 relative">
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
            <span aria-hidden className="inline-block w-10 h-px" style={{ background: 'var(--eixo-ouro)' }} />
            Estratégia Modular Inovadora
            <span aria-hidden className="inline-block w-10 h-px" style={{ background: 'var(--eixo-ouro)' }} />
          </div>
          <h2
            className="font-display text-[clamp(2rem,4.5vw,3.6rem)] leading-[1.05] font-medium text-[var(--eixo-off-white)] mb-6"
            style={{ letterSpacing: '-0.015em' }}
          >
            Seis Pilares para a
            <br />
            <span style={{ color: 'var(--eixo-ouro)' }}>Transformação</span>
          </h2>
          <p className="font-body text-base md:text-[1.05rem] leading-relaxed text-[var(--eixo-off-white-soft)]">
            Uma abordagem sistêmica e cientificamente embasada para acelerar a paridade de gênero
            na liderança pública brasileira através de ações coordenadas e mensuráveis.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {modules.map((module, index) => {
            const num = String(index + 1).padStart(2, '0');
            return (
              <li key={module.id}>
                <Link
                  href={module.path}
                  className="group relative block h-full rounded-2xl p-7 border overflow-hidden transition-all duration-300"
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

                  {/* Cortina dourada — desce do topo no hover */}
                  <span
                    aria-hidden
                    className="absolute top-0 left-0 right-0 h-0 group-hover:h-full transition-all duration-500 ease-out pointer-events-none"
                    style={{
                      background:
                        'linear-gradient(to bottom, rgba(201, 168, 106, 0.16), rgba(201, 168, 106, 0.04))'
                    }}
                  />

                  <div
                    aria-hidden
                    className="font-display absolute -top-2 -right-1 text-[6rem] leading-none font-medium select-none pointer-events-none"
                    style={{
                      color: 'var(--eixo-ouro)',
                      opacity: 0.13,
                      letterSpacing: '-0.04em'
                    }}
                  >
                    {num}
                  </div>

                  <div className="relative z-10 flex flex-col h-full">
                    <div
                      className="text-[10px] uppercase tracking-[0.28em] font-body font-semibold mb-4"
                      style={{ color: 'var(--eixo-ouro)' }}
                    >
                      Módulo {num}
                    </div>
                    <h3 className="font-display text-[1.3rem] md:text-[1.4rem] font-medium text-[var(--eixo-off-white)] mb-4 leading-tight pr-10">
                      {module.title}
                    </h3>
                    <p className="font-body text-sm text-[var(--eixo-off-white-soft)] leading-relaxed mb-6">
                      {module.description}
                    </p>

                    <div className="flex-1 mb-6">
                      <div
                        className="text-[10px] uppercase tracking-[0.22em] font-body font-semibold mb-3"
                        style={{ color: 'var(--eixo-off-white-dim)' }}
                      >
                        Principais Objetivos:
                      </div>
                      <ul className="space-y-2">
                        {module.objectives.slice(0, 2).map((objective, i) => (
                          <li
                            key={i}
                            className="font-body flex items-start gap-3 text-xs text-[var(--eixo-off-white-soft)] leading-relaxed"
                          >
                            <span
                              aria-hidden
                              className="block w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                              style={{ background: 'var(--eixo-ouro)' }}
                            />
                            <span className="line-clamp-2">{objective}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 font-body font-semibold text-xs tracking-wide rounded-full transition-transform duration-300 group-hover:scale-[1.02] self-start"
                      style={{
                        background: 'var(--eixo-ouro)',
                        color: 'var(--eixo-grafite)'
                      }}
                    >
                      Explorar Módulo
                      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="text-center">
          <p className="font-body text-sm text-[var(--eixo-off-white-dim)] mb-6 max-w-xl mx-auto">
            Cada módulo foi cuidadosamente desenvolvido com base em pesquisas e boas práticas internacionais
          </p>
          <Link
            href="/modulos/legitimidade"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 font-body font-semibold text-sm tracking-wide rounded-full transition-all duration-300 hover:scale-[1.02]"
            style={{
              background: 'var(--eixo-ouro)',
              color: 'var(--eixo-grafite)'
            }}
          >
            Começar a Jornada
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
