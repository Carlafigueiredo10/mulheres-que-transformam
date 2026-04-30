import Link from 'next/link';

const stats = [
  {
    valor: '51,5%',
    label: 'da população brasileira é mulher.'
  },
  {
    valor: '27%',
    label:
      'apenas — é o que mulheres ocupam nos altos cargos de decisão da administração pública.'
  },
  {
    valor: '11%',
    label:
      'apenas — é o que mulheres negras ocupam na alta liderança. O teto de vidro vira teto de concreto.'
  }
];

const porqueImporta = [
  {
    titulo: 'Diversidade de experiências',
    texto:
      'Cada vivência amplia o repertório de leitura dos problemas que o Estado precisa resolver.'
  },
  {
    titulo: 'Variedade de referências',
    texto:
      'Decisões públicas se beneficiam de pluralidade de modelos mentais e arcabouços analíticos.'
  },
  {
    titulo: 'Ampliação da leitura de problema',
    texto:
      'Equipes homogêneas enxergam menos. Equipes diversas detectam mais riscos — e mais oportunidades.'
  }
];

const limitacoes = [
  {
    n: '01',
    titulo: 'Formação técnica desconectada da decisão real',
    texto:
      'Capacita, mas não posiciona. Quem se forma raramente é quem decide.'
  },
  {
    n: '02',
    titulo: 'Acesso desigual a espaços de poder',
    texto:
      'A mera presença não se traduz em influência. Representação passiva não garante mudanças se a burocracia continua operando sob regras excludentes.'
  },
  {
    n: '03',
    titulo: 'Baixa conversão de diversidade em capacidade institucional',
    texto:
      'Diversidade existe — mulheres já são 45% do funcionalismo —, mas não é estruturada nem mobilizada para o alto escalão.'
  }
];

const posicao = [
  {
    estado: 'Sem diversidade',
    consequencia: 'o Estado enxerga menos.',
    nivel: 'baixo' as const
  },
  {
    estado: 'Com diversidade mal estruturada',
    consequencia: 'o Estado não aproveita o que tem.',
    nivel: 'medio' as const
  },
  {
    estado: 'Com diversidade estruturada',
    consequencia: 'o Estado decide melhor.',
    nivel: 'alto' as const
  }
];

const movimentos = [
  {
    n: '01',
    titulo: 'Formação orientada à decisão',
    texto:
      'Desenvolve competência prática para atuar em problemas reais do Estado e fomenta o patrocínio ativo (sponsorship) para a liderança.'
  },
  {
    n: '02',
    titulo: 'Inserção estratégica',
    texto:
      'Conecta formação com posicionamento em espaços de influência, rompendo o teto de vidro — e o teto de concreto.'
  },
  {
    n: '03',
    titulo: 'Estruturação institucional',
    texto:
      'Cria mecanismos normativos (portarias, decretos) para que essa capacidade seja absorvida pelo órgão — sem depender da gestão do momento.'
  }
];

const inversoes = [
  {
    nao: 'Não estamos apenas formando pessoas.',
    sim: 'Estamos ampliando a capacidade de decisão do Estado.'
  },
  {
    nao: 'Não estamos apenas aumentando a participação.',
    sim: 'Estamos qualificando quem decide.'
  },
  {
    nao: 'Não estamos apenas promovendo diversidade.',
    sim: 'Estamos tornando o Estado mais inteligente e inovador.'
  }
];

export default function ManifestoSection() {
  return (
    <section id="manifesto" className="relative">
      {/* ====================================================
          MOVIMENTO I — ABERTURA / O PROBLEMA + STATS
          ==================================================== */}
      <div className="relative px-6 py-32 md:py-48 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 50% 30%, rgba(217,70,239,0.06), transparent 55%)'
          }}
        />

        <div className="max-w-5xl mx-auto relative">
          <div
            className="flex items-center justify-center gap-4 mb-12 text-[10px] uppercase font-body font-semibold"
            style={{ color: 'var(--eixo-ouro)', letterSpacing: '0.5em' }}
          >
            <span
              aria-hidden
              className="block w-12 h-px"
              style={{ background: 'var(--eixo-ouro)' }}
            />
            Manifesto
            <span
              aria-hidden
              className="block w-12 h-px"
              style={{ background: 'var(--eixo-ouro)' }}
            />
          </div>

          <h2
            className="font-display text-center font-medium mb-10"
            style={{
              fontSize: 'clamp(2.4rem, 6vw, 5rem)',
              color: 'var(--eixo-off-white)',
              lineHeight: 1.0,
              letterSpacing: '-0.02em'
            }}
          >
            Por uma{' '}
            <span style={{ color: 'var(--eixo-ouro)' }}>engenharia</span>
            <br />
            da paridade.
          </h2>

          <p
            className="font-display text-center mb-16 max-w-3xl mx-auto italic"
            style={{
              fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
              color: 'var(--eixo-off-white-soft)',
              lineHeight: 1.4
            }}
          >
            Diversidade não é fim.{' '}
            <span style={{ color: 'var(--eixo-ouro)', fontStyle: 'normal' }}>
              É como o Estado decide melhor.
            </span>
          </p>

          <div className="space-y-7 max-w-3xl mx-auto font-body text-lg md:text-xl leading-relaxed text-[var(--eixo-off-white-soft)] mb-20">
            <p>
              O Estado brasileiro enfrenta um problema silencioso: ele decide
              com base em perspectivas limitadas. Mesmo com avanços
              institucionais, os espaços de poder continuam concentrados — e
              isso reduz a qualidade das decisões públicas.
            </p>
            <p
              style={{
                color: 'var(--eixo-off-white)',
                fontWeight: 500
              }}
            >
              Não é apenas um problema de equidade.{' '}
              <span style={{ color: 'var(--eixo-ouro)' }}>
                É um problema de capacidade estatal.
              </span>
            </p>
          </div>

          <ul
            className="grid grid-cols-1 md:grid-cols-3 gap-px"
            style={{ background: 'rgba(242, 234, 217, 0.08)' }}
          >
            {stats.map((stat, i) => (
              <li
                key={i}
                className="p-8 md:p-10 flex flex-col gap-5"
                style={{ background: 'var(--eixo-grafite)' }}
              >
                <div
                  className="font-display"
                  style={{
                    fontSize: 'clamp(3rem, 6vw, 5rem)',
                    color: 'var(--eixo-ouro)',
                    lineHeight: 0.9,
                    letterSpacing: '-0.04em',
                    fontWeight: 500
                  }}
                >
                  {stat.valor}
                </div>
                <p className="font-body text-base leading-relaxed text-[var(--eixo-off-white-soft)]">
                  {stat.label}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ====================================================
          MOVIMENTO II — POR QUE DIVERSIDADE IMPORTA
          ==================================================== */}
      <div
        className="relative px-6 py-32 md:py-40"
        style={{
          background: 'rgba(15, 16, 20, 0.55)',
          borderTop: '1px solid rgba(242, 234, 217, 0.05)',
          borderBottom: '1px solid rgba(242, 234, 217, 0.05)'
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div
            className="flex items-center gap-4 mb-8 text-[10px] uppercase font-body font-semibold"
            style={{ color: 'var(--eixo-ouro)', letterSpacing: '0.4em' }}
          >
            <span
              aria-hidden
              className="block w-12 h-px"
              style={{ background: 'var(--eixo-ouro)' }}
            />
            Capítulo I
          </div>
          <h3
            className="font-display font-medium mb-6 max-w-3xl"
            style={{
              fontSize: 'clamp(2rem, 4.4vw, 3.4rem)',
              color: 'var(--eixo-off-white)',
              lineHeight: 1.05,
              letterSpacing: '-0.015em'
            }}
          >
            Capacidade não é só técnica.{' '}
            <span style={{ color: 'var(--eixo-ouro)' }}>É perspectiva.</span>
          </h3>
          <p className="font-body text-lg md:text-xl text-[var(--eixo-off-white-soft)] max-w-3xl mb-14 leading-relaxed">
            Políticas públicas são decisões sob incerteza. E decisões melhores
            dependem de:
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
            {porqueImporta.map((p, i) => (
              <li
                key={p.titulo}
                className="rounded-2xl p-7 border h-full flex flex-col"
                style={{
                  background: 'rgba(21, 22, 29, 0.55)',
                  borderColor: 'rgba(242, 234, 217, 0.08)'
                }}
              >
                <div
                  className="font-display mb-4"
                  style={{
                    fontSize: '1.5rem',
                    color: 'var(--eixo-ouro)',
                    fontWeight: 500
                  }}
                >
                  0{i + 1}
                </div>
                <h4
                  className="font-display font-medium mb-3 leading-tight"
                  style={{
                    fontSize: '1.2rem',
                    color: 'var(--eixo-off-white)'
                  }}
                >
                  {p.titulo}
                </h4>
                <p className="font-body text-sm leading-relaxed text-[var(--eixo-off-white-soft)] flex-1">
                  {p.texto}
                </p>
              </li>
            ))}
          </ul>

          <p
            className="font-display max-w-4xl"
            style={{
              fontSize: 'clamp(1.3rem, 2.4vw, 1.9rem)',
              color: 'var(--eixo-off-white)',
              lineHeight: 1.3,
              letterSpacing: '-0.005em'
            }}
          >
            Um Estado homogêneo é um{' '}
            <span style={{ color: 'var(--eixo-ouro)' }}>Estado menos capaz</span>.
          </p>
        </div>
      </div>

      {/* ====================================================
          MOVIMENTO III — O MODELO DOMINANTE (3 LIMITAÇÕES)
          ==================================================== */}
      <div className="relative px-6 py-32 md:py-40">
        <div className="max-w-6xl mx-auto">
          <div
            className="flex items-center gap-4 mb-8 text-[10px] uppercase font-body font-semibold"
            style={{ color: 'var(--eixo-ouro)', letterSpacing: '0.4em' }}
          >
            <span
              aria-hidden
              className="block w-12 h-px"
              style={{ background: 'var(--eixo-ouro)' }}
            />
            Capítulo II
          </div>
          <h3
            className="font-display font-medium mb-6 max-w-3xl"
            style={{
              fontSize: 'clamp(2rem, 4.4vw, 3.4rem)',
              color: 'var(--eixo-off-white)',
              lineHeight: 1.05,
              letterSpacing: '-0.015em'
            }}
          >
            O modelo dominante{' '}
            <span style={{ color: 'var(--eixo-ouro)' }}>
              ainda opera com três limitações.
            </span>
          </h3>
          <p className="font-body text-lg md:text-xl text-[var(--eixo-off-white-soft)] max-w-3xl mb-16 leading-relaxed">
            E o resultado é direto: perda de qualidade decisória, políticas menos
            eficazes, menor legitimidade.
          </p>

          <ol
            className="space-y-px"
            style={{ background: 'rgba(242, 234, 217, 0.06)' }}
          >
            {limitacoes.map((l) => (
              <li
                key={l.n}
                className="px-6 py-10 md:px-8 md:py-12 grid md:grid-cols-12 gap-6 md:gap-10"
                style={{ background: 'var(--eixo-grafite)' }}
              >
                <div className="md:col-span-1">
                  <span
                    className="font-display"
                    style={{
                      fontSize: 'clamp(1.8rem, 2.6vw, 2.4rem)',
                      color: 'var(--eixo-ouro)',
                      letterSpacing: '-0.02em',
                      fontWeight: 500
                    }}
                  >
                    {l.n}
                  </span>
                </div>
                <h4
                  className="md:col-span-4 font-display font-medium leading-tight"
                  style={{
                    fontSize: 'clamp(1.4rem, 2.4vw, 1.9rem)',
                    color: 'var(--eixo-off-white)',
                    letterSpacing: '-0.01em'
                  }}
                >
                  {l.titulo}
                </h4>
                <p className="md:col-span-7 font-body text-base md:text-lg text-[var(--eixo-off-white-soft)] leading-relaxed">
                  {l.texto}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* ====================================================
          MOVIMENTO IV — NOSSA POSIÇÃO (3 PROGRESSÕES)
          ==================================================== */}
      <div
        className="relative px-6 py-32 md:py-40"
        style={{
          background: 'rgba(15, 16, 20, 0.55)',
          borderTop: '1px solid rgba(242, 234, 217, 0.05)',
          borderBottom: '1px solid rgba(242, 234, 217, 0.05)'
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div
            className="flex items-center gap-4 mb-8 text-[10px] uppercase font-body font-semibold"
            style={{ color: 'var(--eixo-ouro)', letterSpacing: '0.4em' }}
          >
            <span
              aria-hidden
              className="block w-12 h-px"
              style={{ background: 'var(--eixo-ouro)' }}
            />
            Nossa posição
          </div>
          <h3
            className="font-display font-medium mb-14 max-w-4xl"
            style={{
              fontSize: 'clamp(2rem, 4.4vw, 3.4rem)',
              color: 'var(--eixo-off-white)',
              lineHeight: 1.05,
              letterSpacing: '-0.015em'
            }}
          >
            Diversidade não é um fim. É um{' '}
            <span style={{ color: 'var(--eixo-ouro)' }}>
              meio para aumentar a capacidade
            </span>{' '}
            do Estado.
          </h3>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: 'rgba(242, 234, 217, 0.08)' }}>
            {posicao.map((p, i) => {
              const isAlto = p.nivel === 'alto';
              const isBaixo = p.nivel === 'baixo';
              return (
                <li
                  key={i}
                  className="p-8 md:p-10 flex flex-col gap-5"
                  style={{
                    background: isAlto
                      ? 'rgba(201, 168, 106, 0.08)'
                      : 'var(--eixo-grafite)'
                  }}
                >
                  <span
                    className="font-display"
                    style={{
                      fontSize: '1.4rem',
                      color: isAlto
                        ? 'var(--eixo-ouro)'
                        : 'rgba(201, 168, 106, 0.5)',
                      fontWeight: 500
                    }}
                  >
                    0{i + 1}
                  </span>
                  <p
                    className="font-display"
                    style={{
                      fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)',
                      color: isBaixo
                        ? 'rgba(242, 234, 217, 0.5)'
                        : 'var(--eixo-off-white-soft)',
                      lineHeight: 1.3
                    }}
                  >
                    {p.estado},
                  </p>
                  <p
                    className="font-display font-medium"
                    style={{
                      fontSize: 'clamp(1.4rem, 2.4vw, 1.9rem)',
                      color: isAlto
                        ? 'var(--eixo-ouro)'
                        : 'var(--eixo-off-white)',
                      lineHeight: 1.2,
                      letterSpacing: '-0.01em'
                    }}
                  >
                    {p.consequencia}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* ====================================================
          MOVIMENTO V — O QUE FAZEMOS + INVERSÕES
          ==================================================== */}
      <div className="relative px-6 py-32 md:py-40">
        <div className="max-w-6xl mx-auto">
          <div
            className="flex items-center gap-4 mb-8 text-[10px] uppercase font-body font-semibold"
            style={{ color: 'var(--eixo-ouro)', letterSpacing: '0.4em' }}
          >
            <span
              aria-hidden
              className="block w-12 h-px"
              style={{ background: 'var(--eixo-ouro)' }}
            />
            O que fazemos
          </div>
          <h3
            className="font-display font-medium mb-6 max-w-4xl"
            style={{
              fontSize: 'clamp(2rem, 4.4vw, 3.4rem)',
              color: 'var(--eixo-off-white)',
              lineHeight: 1.05,
              letterSpacing: '-0.015em'
            }}
          >
            Transformar diversidade em{' '}
            <span style={{ color: 'var(--eixo-ouro)' }}>
              capacidade estatal.
            </span>
          </h3>
          <p className="font-body text-lg md:text-xl text-[var(--eixo-off-white-soft)] max-w-3xl mb-16 leading-relaxed">
            Por meio de três movimentos integrados — fugindo da armadilha do
            mero diagnóstico para promover uma verdadeira engenharia
            institucional:
          </p>

          <ol className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
            {movimentos.map((m) => (
              <li
                key={m.n}
                className="rounded-2xl p-7 border h-full flex flex-col"
                style={{
                  background: 'rgba(21, 22, 29, 0.55)',
                  borderColor: 'rgba(242, 234, 217, 0.08)'
                }}
              >
                <div
                  className="font-display mb-4"
                  style={{
                    fontSize: '1.8rem',
                    color: 'var(--eixo-ouro)',
                    fontWeight: 500,
                    letterSpacing: '-0.02em'
                  }}
                >
                  {m.n}
                </div>
                <h4
                  className="font-display font-medium mb-3 leading-tight"
                  style={{
                    fontSize: '1.3rem',
                    color: 'var(--eixo-off-white)'
                  }}
                >
                  {m.titulo}
                </h4>
                <p className="font-body text-sm md:text-base leading-relaxed text-[var(--eixo-off-white-soft)] flex-1">
                  {m.texto}
                </p>
              </li>
            ))}
          </ol>

          {/* INVERSÕES */}
          <div className="border-t pt-12" style={{ borderColor: 'rgba(242, 234, 217, 0.08)' }}>
            <div
              className="text-[10px] uppercase tracking-[0.4em] font-body font-semibold mb-10"
              style={{ color: 'var(--eixo-ouro)' }}
            >
              O que muda
            </div>

            <ul className="space-y-8 max-w-4xl">
              {inversoes.map((inv, i) => (
                <li key={i} className="grid md:grid-cols-12 gap-4 md:gap-8 items-baseline">
                  <p
                    className="md:col-span-5 font-body text-base md:text-lg leading-relaxed line-through"
                    style={{ color: 'var(--eixo-off-white-dim)' }}
                  >
                    {inv.nao}
                  </p>
                  <div className="md:col-span-1 hidden md:block">
                    <span
                      aria-hidden
                      className="block w-full h-px"
                      style={{ background: 'var(--eixo-ouro)' }}
                    />
                  </div>
                  <p
                    className="md:col-span-6 font-display font-medium leading-tight"
                    style={{
                      fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                      color: 'var(--eixo-off-white)',
                      letterSpacing: '-0.005em'
                    }}
                  >
                    {inv.sim}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ====================================================
          MOVIMENTO VI — O CHAMADO
          ==================================================== */}
      <div className="relative px-6 py-32 md:py-48 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 50% 50%, rgba(201, 168, 106, 0.12), transparent 55%)'
          }}
        />

        <div className="max-w-4xl mx-auto relative text-center">
          <div
            className="flex items-center justify-center gap-4 mb-14 text-[10px] uppercase font-body font-semibold"
            style={{ color: 'var(--eixo-ouro)', letterSpacing: '0.4em' }}
          >
            <span
              aria-hidden
              className="block w-12 h-px"
              style={{ background: 'var(--eixo-ouro)' }}
            />
            O chamado
            <span
              aria-hidden
              className="block w-12 h-px"
              style={{ background: 'var(--eixo-ouro)' }}
            />
          </div>

          <p
            className="font-display mb-14"
            style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
              color: 'var(--eixo-off-white)',
              lineHeight: 1.3,
              letterSpacing: '-0.005em'
            }}
          >
            Se o Estado quer responder a problemas complexos, ele precisa{' '}
            <span style={{ color: 'var(--eixo-ouro)' }}>decidir melhor</span>. E
            decidir melhor exige ampliar quem decide e como decide.
          </p>

          <div className="flex justify-center mb-14">
            <span
              aria-hidden
              className="block w-24 h-px"
              style={{ background: 'rgba(201, 168, 106, 0.4)' }}
            />
          </div>

          <h3
            className="font-display font-medium mb-12"
            style={{
              fontSize: 'clamp(1.8rem, 4.4vw, 3.4rem)',
              color: 'var(--eixo-off-white)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em'
            }}
          >
            Capacidade estatal não se constrói apenas com tecnologia.
            <br />
            <span style={{ color: 'var(--eixo-ouro)' }}>
              Constrói-se com pessoas preparadas, diversas e posicionadas.
            </span>
          </h3>

          <Link href="/como-aderir" className="btn-primary">
            Aderir ao projeto
          </Link>
        </div>
      </div>
    </section>
  );
}
