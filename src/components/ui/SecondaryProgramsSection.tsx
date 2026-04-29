import Link from 'next/link';

const programas = [
  {
    eyebrow: 'Observatório de Paridade',
    title: 'Dados que sustentam decisões',
    description:
      'Indicadores, análises críticas e relatórios técnicos para transformar desigualdade em compromisso institucional baseado em evidências.',
    cta: 'Acessar dashboard',
    href: '/observatorio'
  },
  {
    eyebrow: 'Rede Conecta',
    title: 'Articulação entre redes e iniciativas',
    description:
      'Por que formar uma rede, como formar, e o que ela transforma. Mais catálogo, mapa, cadastro e boas práticas.',
    cta: 'Conhecer a rede',
    href: '/rede-conecta'
  }
];

export default function SecondaryProgramsSection() {
  return (
    <section className="py-32 md:py-40 px-6 relative">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(201,168,106,0.04), transparent 60%)'
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-6 text-[10px] uppercase tracking-[0.32em] font-body font-semibold text-[var(--eixo-ouro)]">
            <span
              aria-hidden
              className="inline-block w-10 h-px"
              style={{ background: 'var(--eixo-ouro)' }}
            />
            Frentes complementares
            <span
              aria-hidden
              className="inline-block w-10 h-px"
              style={{ background: 'var(--eixo-ouro)' }}
            />
          </div>
          <h2
            className="font-display text-[clamp(1.8rem,4vw,3rem)] leading-[1.1] font-medium text-[var(--eixo-off-white)] mb-6"
            style={{ letterSpacing: '-0.015em' }}
          >
            O programa não termina na adesão
          </h2>
          <p className="font-body text-base text-[var(--eixo-off-white-soft)] leading-relaxed">
            Dois braços continuam acompanhando o trabalho dos órgãos: dados públicos
            e articulação entre redes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programas.map((p) => (
            <article
              key={p.href}
              className="rounded-2xl p-8 md:p-10 border flex flex-col"
              style={{
                background: 'rgba(21, 22, 29, 0.55)',
                borderColor: 'rgba(242, 234, 217, 0.08)'
              }}
            >
              <div
                className="text-[10px] uppercase tracking-[0.28em] font-body font-semibold mb-4"
                style={{ color: 'var(--eixo-ouro)' }}
              >
                {p.eyebrow}
              </div>
              <h3
                className="font-display text-2xl md:text-[1.7rem] font-medium text-[var(--eixo-off-white)] mb-4 leading-tight"
                style={{ letterSpacing: '-0.01em' }}
              >
                {p.title}
              </h3>
              <p className="font-body text-sm md:text-[0.95rem] text-[var(--eixo-off-white-soft)] leading-relaxed mb-8 flex-1">
                {p.description}
              </p>
              <Link href={p.href} className="btn-secondary self-start">
                {p.cta}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
