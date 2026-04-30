const passos = [
  {
    n: '01',
    titulo: 'Diagnóstico',
    descricao:
      'A gente te ajuda a mapear sua realidade institucional — barreiras, gargalos e oportunidades específicas do seu órgão.'
  },
  {
    n: '02',
    titulo: 'Módulos à la carte',
    descricao:
      'Você escolhe quais dos 6 módulos quer implementar. Sem pacote fechado, sem imposição.'
  },
  {
    n: '03',
    titulo: 'Ordem e ritmo',
    descricao:
      'Você define a sequência e o cronograma que cabem no seu órgão e na sua gestão.'
  },
  {
    n: '04',
    titulo: 'Indicadores parametrizáveis',
    descricao:
      'Você seleciona, dentre uma lista pronta, os indicadores que fazem sentido pro seu plano.'
  },
  {
    n: '05',
    titulo: 'Kit completo',
    descricao:
      'Roteiros, modelos, formulários e templates já prontos. Você só precisa adaptar à sua realidade.'
  }
];

export default function ComoFuncionaSection() {
  return (
    <section className="py-32 md:py-40 px-6 relative">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(201,168,106,0.05), transparent 60%)'
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
            Como funciona no seu órgão
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
            Você não constrói do zero.{' '}
            <span style={{ color: 'var(--eixo-ouro)' }}>
              A gente entrega o método pronto.
            </span>
          </h2>
          <p className="font-body text-base md:text-[1.05rem] leading-relaxed text-[var(--eixo-off-white-soft)]">
            O programa não impõe um caminho único. Cada órgão desenha o seu — e
            recebe um kit completo de implementação como ponto de partida.
          </p>
        </div>

        <ol
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
          aria-label="Passos para implementar o programa"
        >
          {passos.map((passo) => (
            <li
              key={passo.n}
              className="rounded-2xl p-6 border h-full flex flex-col"
              style={{
                background: 'rgba(21, 22, 29, 0.55)',
                borderColor: 'rgba(242, 234, 217, 0.08)'
              }}
            >
              <div
                className="font-display mb-4"
                style={{
                  fontSize: '2rem',
                  color: 'var(--eixo-ouro)',
                  fontWeight: 500,
                  letterSpacing: '-0.02em',
                  lineHeight: 1
                }}
              >
                {passo.n}
              </div>
              <h3
                className="font-display font-medium mb-3 leading-tight"
                style={{
                  fontSize: '1.1rem',
                  color: 'var(--eixo-off-white)'
                }}
              >
                {passo.titulo}
              </h3>
              <p className="font-body text-sm leading-relaxed text-[var(--eixo-off-white-soft)] flex-1">
                {passo.descricao}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
