'use client';

const cases = [
  {
    numero: '01',
    titulo: 'Rede de Mulheres na Administração Pública',
    chamada: 'Iniciativa estruturante liderada pelo MGI',
    pontos: [
      'Conecta servidoras de diferentes carreiras e órgãos.',
      'Padroniza boas práticas de equidade e combate à violência institucional.',
      'Atua como hub de inteligência e articulação política dentro do Governo Federal para influenciar diretrizes de gestão de pessoas.'
    ],
    selo: 'Transversal · Institucional'
  },
  {
    numero: '02',
    titulo: '"Sim, elas existem" — Setor de Energia',
    chamada: 'Nascida em 2018 da iniciativa de duas servidoras',
    pontos: [
      'Listas de indicações intencionais de mulheres para cargos estratégicos e para falar em eventos.',
      'Programas de mentoria para mulheres jovens no setor.',
      'Abertura inédita para a pauta de igualdade de gênero dentro do Ministério da área.'
    ],
    selo: 'Indicações intencionais'
  },
  {
    numero: '03',
    titulo: '"Elas no Orçamento"',
    chamada: '250+ integrantes em 3 dias',
    pontos: [
      'Aumentar a representação passiva de gênero na área de finanças e influenciar a formulação de políticas e regras fiscais.',
      'Combate direto às "paredes de vidro" nos setores de alta decisão econômica.',
      'Crescimento orgânico explosivo demonstrando urgência da pauta no núcleo duro do Estado.'
    ],
    selo: 'Núcleo duro do Estado'
  }
];

export default function CasesSection() {
  return (
    <section
      className="relative py-24 md:py-32 px-6"
      style={{
        background:
          'linear-gradient(180deg, var(--rede-roxo) 0%, var(--rede-roxo-deep) 100%)'
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-7 text-[10px] uppercase tracking-[0.32em] font-body font-semibold" style={{ color: 'var(--rede-cobre-soft)' }}>
          <span aria-hidden className="inline-block w-12 h-px" style={{ background: 'var(--rede-cobre-soft)' }} />
          Cases que provam
        </div>

        <h2
          className="font-display text-[clamp(2.2rem,4.6vw,3.8rem)] font-medium mb-6 max-w-3xl"
          style={{ color: 'var(--rede-cream)', lineHeight: 1.05, letterSpacing: '-0.015em' }}
        >
          Redes que já estão transformando o Estado.
        </h2>
        <p
          className="font-body text-base md:text-lg leading-relaxed max-w-3xl mb-14"
          style={{ color: 'var(--rede-cream-soft)' }}
        >
          Três experiências reais de articulação feminina no serviço público brasileiro,
          cada uma atacando uma frente diferente do mesmo problema.
        </p>

        <div className="space-y-8">
          {cases.map((c) => (
            <article
              key={c.numero}
              className="rounded-2xl p-8 md:p-12 border grid md:grid-cols-12 gap-8"
              style={{
                background: 'rgba(15, 6, 35, 0.4)',
                borderColor: 'var(--rede-line)'
              }}
            >
              <div className="md:col-span-4">
                <div
                  className="font-display mb-4"
                  style={{
                    fontSize: 'clamp(3rem, 7vw, 5rem)',
                    fontWeight: 500,
                    lineHeight: 0.9,
                    color: 'var(--rede-cobre-soft)',
                    letterSpacing: '-0.03em'
                  }}
                >
                  {c.numero}
                </div>
                <h3
                  className="font-display text-xl md:text-2xl font-medium mb-3"
                  style={{ color: 'var(--rede-cream)' }}
                >
                  {c.titulo}
                </h3>
                <p
                  className="font-body text-sm italic mb-4"
                  style={{ color: 'var(--rede-cream-soft)' }}
                >
                  {c.chamada}
                </p>
                <span
                  className="inline-block text-[10px] uppercase tracking-[0.2em] font-body font-semibold px-3 py-1 rounded-full border"
                  style={{
                    color: 'var(--rede-cobre-soft)',
                    borderColor: 'var(--rede-cobre-deep)'
                  }}
                >
                  {c.selo}
                </span>
              </div>

              <ul className="md:col-span-8 space-y-4">
                {c.pontos.map((p, i) => (
                  <li
                    key={i}
                    className="flex gap-4 items-start font-body text-sm md:text-base leading-relaxed"
                    style={{ color: 'var(--rede-cream)' }}
                  >
                    <span
                      aria-hidden
                      className="mt-2 inline-block w-6 h-px shrink-0"
                      style={{ background: 'var(--rede-cobre-soft)' }}
                    />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
