'use client';

const barreiras = [
  {
    titulo: 'O "Clube dos Homens"',
    texto:
      'Relações interpessoais, acordos informais e networking que ocorrem fora do horário comercial, excluindo mulheres dos espaços onde decisões reais são tomadas.'
  },
  {
    titulo: 'Estereótipos de Gênero',
    texto:
      'A cobrança desproporcional por perfeição e a percepção de que mulheres são "menos adequadas" para posições de comando pragmático.'
  },
  {
    titulo: 'Paredes de Vidro',
    texto:
      'A segregação em áreas associadas ao cuidado, mantendo as mulheres longe dos núcleos estratégicos e econômicos do Estado.'
  }
];

export default function DiagnosticoSection() {
  return (
    <section className="relative py-24 md:py-32 px-6" style={{ background: 'var(--rede-roxo)' }}>
      <div className="max-w-6xl mx-auto space-y-32">

        {/* Paradoxo da Meritocracia — 27% */}
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <h2
              className="font-display text-[clamp(2.2rem,4.6vw,3.8rem)] font-medium mb-8"
              style={{ color: 'var(--rede-cream)', lineHeight: 1.05, letterSpacing: '-0.015em' }}
            >
              O Paradoxo da Meritocracia
            </h2>
            <div
              className="font-display select-none rede-number"
              style={{
                fontSize: 'clamp(7rem, 18vw, 16rem)',
                fontWeight: 500,
                lineHeight: 0.9,
                letterSpacing: '-0.04em',
                color: 'var(--rede-cream)'
              }}
            >
              27%
            </div>
          </div>
          <div className="md:col-span-5 space-y-5 font-body" style={{ color: 'var(--rede-cream-soft)' }}>
            <p className="text-base md:text-lg leading-relaxed">
              No setor público, o concurso cria a ilusão de igualdade. A realidade é estruturalmente
              diferente. Apesar de apresentarem qualificações técnicas iguais ou superiores, as
              mulheres esbarram em uma barreira invisível na hora da ascensão profissional.
            </p>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--rede-cream)' }}>
              Apenas <strong style={{ color: 'var(--rede-cobre-soft)' }}>27% das lideranças</strong> de
              alto escalão na administração pública federal são ocupadas por mulheres.
            </p>
          </div>
        </div>

        {/* O Preço Invisível do Topo */}
        <div>
          <h2
            className="font-display text-[clamp(2.2rem,4.6vw,3.8rem)] font-medium mb-6"
            style={{ color: 'var(--rede-cream)', lineHeight: 1.05, letterSpacing: '-0.015em' }}
          >
            O Preço Invisível do Topo
          </h2>
          <p
            className="font-body text-base md:text-lg leading-relaxed max-w-3xl mb-12"
            style={{ color: 'var(--rede-cream-soft)' }}
          >
            A ascensão feminina não exige apenas competência técnica; ela cobra um pedágio físico
            e emocional. A dificuldade de conciliar o trabalho de cuidado com as exigências de
            liderança gera um abismo de oportunidades e saúde.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <StatCard
              titulo="Maternidade Penalizada"
              numero="38%"
              descricao="das mulheres em posição de liderança são mães de filhos menores, contra 66% dos líderes homens."
            />
            <StatCard
              titulo="Exaustão e Burnout"
              numero="71,4%"
              descricao="dos casos diagnosticados de Síndrome de Burnout no serviço público são mulheres."
            />
          </div>
        </div>

        {/* O Labirinto e o Teto de Vidro */}
        <div>
          <h2
            className="font-display text-[clamp(2.2rem,4.6vw,3.8rem)] font-medium mb-6"
            style={{ color: 'var(--rede-cream)', lineHeight: 1.05, letterSpacing: '-0.015em' }}
          >
            O Labirinto e o Teto de Vidro
          </h2>
          <blockquote
            className="font-display text-[clamp(1.15rem,1.8vw,1.5rem)] leading-relaxed max-w-3xl mb-12 italic"
            style={{ color: 'var(--rede-cream)' }}
          >
            &ldquo;O que impede a ascensão não está escrito no Diário Oficial. São os vieses
            inconscientes e as dinâmicas não ditas do poder.&rdquo;
          </blockquote>

          <div className="grid md:grid-cols-3 gap-8">
            {barreiras.map((b) => (
              <div
                key={b.titulo}
                className="border-t pt-6"
                style={{ borderColor: 'var(--rede-line)' }}
              >
                <h3
                  className="font-display text-xl md:text-2xl font-medium mb-3"
                  style={{ color: 'var(--rede-cobre-soft)' }}
                >
                  {b.titulo}
                </h3>
                <p
                  className="font-body text-sm md:text-base leading-relaxed"
                  style={{ color: 'var(--rede-cream-soft)' }}
                >
                  {b.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ titulo, numero, descricao }: { titulo: string; numero: string; descricao: string }) {
  return (
    <div
      className="rounded-2xl p-8 md:p-10 border"
      style={{
        background: 'rgba(15, 6, 35, 0.4)',
        borderColor: 'var(--rede-line)'
      }}
    >
      <h3 className="font-display text-2xl md:text-3xl font-medium mb-3" style={{ color: 'var(--rede-cream)' }}>
        {titulo}
      </h3>
      <div
        className="font-display mb-4"
        style={{
          fontSize: 'clamp(3.5rem, 8vw, 5.5rem)',
          fontWeight: 500,
          lineHeight: 1,
          color: 'var(--rede-cobre-soft)',
          letterSpacing: '-0.03em'
        }}
      >
        {numero}
      </div>
      <p className="font-body text-base leading-relaxed" style={{ color: 'var(--rede-cream-soft)' }}>
        {descricao}
      </p>
    </div>
  );
}
