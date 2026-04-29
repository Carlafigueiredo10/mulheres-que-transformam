'use client';

const pilares = [
  {
    titulo: 'Diagnóstico',
    texto: 'Identificação baseada em dados das barreiras internas à nomeação de mulheres (visibilidade).'
  },
  {
    titulo: 'Formação',
    texto: 'Capacitação de novos quadros femininos aptos e legitimados.'
  },
  {
    titulo: 'Pactuação',
    texto: 'Acordos e metas paritárias estabelecidas diretamente com instâncias decisórias.'
  },
  {
    titulo: 'Transformação Cultural',
    texto: 'Alteração de valores, normas tácitas e discursos que sustentam práticas excludentes.'
  }
];

export default function ComoFormarSection() {
  return (
    <section className="relative py-24 md:py-32 px-6" style={{ background: 'var(--rede-roxo)' }}>
      <div className="max-w-6xl mx-auto space-y-32">

        {/* Mentoria vs Patrocínio */}
        <div>
          <div className="flex items-center gap-3 mb-7 text-[10px] uppercase tracking-[0.32em] font-body font-semibold" style={{ color: 'var(--rede-cobre-soft)' }}>
            <span aria-hidden className="inline-block w-12 h-px" style={{ background: 'var(--rede-cobre-soft)' }} />
            Como a rede age
          </div>

          <h2
            className="font-display text-[clamp(2.2rem,4.6vw,3.8rem)] font-medium mb-4"
            style={{ color: 'var(--rede-cream)', lineHeight: 1.05, letterSpacing: '-0.015em' }}
          >
            O Poder do Patrocínio
          </h2>
          <p
            className="font-display text-[clamp(1.05rem,1.5vw,1.3rem)] italic max-w-3xl mb-12"
            style={{ color: 'var(--rede-cobre-soft)' }}
          >
            O avanço real exige mais do que bons conselhos; exige capital político.
          </p>

          <div className="grid md:grid-cols-2 gap-px relative" style={{ background: 'var(--rede-line)' }}>
            <ComparativoCard
              numero="01"
              titulo="Mentoria"
              chamada="Ajuda a mulher a navegar no sistema."
              texto="Envolve orientação, conselhos e desenvolvimento de habilidades."
              variant="cool"
            />
            <ComparativoCard
              numero="02"
              titulo="Patrocínio (Sponsorship)"
              chamada="Usa influência para abrir portas institucionais."
              texto="Compromisso ativo de lideranças ao indicar para cargos estratégicos e defender mulheres nos espaços de decisão."
              variant="warm"
            />
          </div>
        </div>

        {/* Quatro Pilares */}
        <div>
          <h2
            className="font-display text-[clamp(2.2rem,4.6vw,3.8rem)] font-medium mb-6"
            style={{ color: 'var(--rede-cream)', lineHeight: 1.05, letterSpacing: '-0.015em' }}
          >
            Os Quatro Pilares da Transformação
          </h2>
          <p
            className="font-body text-base md:text-lg leading-relaxed max-w-3xl mb-14"
            style={{ color: 'var(--rede-cream-soft)' }}
          >
            Como formar e fortalecer uma rede que muda o Estado, e não apenas conecta pessoas.
          </p>

          <ol className="grid md:grid-cols-4 gap-6 md:gap-4 relative">
            {pilares.map((p, i) => (
              <li
                key={p.titulo}
                className="relative rounded-xl p-6 md:p-7 border"
                style={{
                  background: 'rgba(15, 6, 35, 0.45)',
                  borderColor: 'var(--rede-line)'
                }}
              >
                <div
                  className="font-display mb-4"
                  style={{
                    fontSize: '2.2rem',
                    fontWeight: 500,
                    lineHeight: 1,
                    color: 'var(--rede-cobre-soft)',
                    letterSpacing: '-0.03em'
                  }}
                >
                  0{i + 1}
                </div>
                <h3
                  className="font-display text-lg md:text-xl font-medium mb-3"
                  style={{ color: 'var(--rede-cream)' }}
                >
                  {p.titulo}
                </h3>
                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: 'var(--rede-cream-soft)' }}
                >
                  {p.texto}
                </p>
                {i < pilares.length - 1 && (
                  <span
                    aria-hidden
                    className="hidden md:block absolute top-1/2 -right-2 w-4 h-px"
                    style={{ background: 'var(--rede-cobre-soft)' }}
                  />
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function ComparativoCard({
  numero,
  titulo,
  chamada,
  texto,
  variant
}: {
  numero: string;
  titulo: string;
  chamada: string;
  texto: string;
  variant: 'cool' | 'warm';
}) {
  const accent = variant === 'warm' ? 'var(--rede-cobre-soft)' : 'var(--rede-violeta)';
  return (
    <div
      className="relative p-8 md:p-12"
      style={{ background: 'var(--rede-roxo)' }}
    >
      <div
        className="font-display mb-3 text-sm tracking-[0.2em]"
        style={{ color: accent }}
      >
        {numero}
      </div>
      <h3
        className="font-display text-2xl md:text-3xl font-medium mb-3"
        style={{ color: 'var(--rede-cream)' }}
      >
        {titulo}
      </h3>
      <p
        className="font-display text-lg md:text-xl italic mb-5"
        style={{ color: accent, lineHeight: 1.3 }}
      >
        {chamada}
      </p>
      <p
        className="font-body text-sm md:text-base leading-relaxed"
        style={{ color: 'var(--rede-cream-soft)' }}
      >
        {texto}
      </p>
    </div>
  );
}
