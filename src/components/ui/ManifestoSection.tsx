import Link from 'next/link';

const stats = [
  {
    valor: '27%',
    label:
      'dos cargos mais altos da administração pública (Natureza Especial) são ocupados por mulheres.'
  },
  {
    valor: '11%',
    label:
      'apenas — é o que mulheres negras ocupam na alta liderança do Executivo federal. O teto de vidro vira teto de concreto.'
  },
  {
    valor: '38% / 66%',
    label:
      'das líderes mulheres são mães de filhos menores. Entre líderes homens, 66% são pais. A penalidade da maternidade é estrutural.'
  },
  {
    valor: '71,4%',
    label:
      'dos diagnósticos de Síndrome de Burnout no serviço público são de mulheres.'
  }
];

const modulos = [
  {
    n: '01',
    titulo: 'Legitimidade da Liderança Atual',
    exigencia:
      'Exigimos o fortalecimento e a proteção das mulheres que já estão no topo, combatendo a invisibilidade, a deslegitimação e a cobrança excessiva e desigual.'
  },
  {
    n: '02',
    titulo: 'Ampliação da Representação',
    exigencia:
      'Reivindicamos metas quantitativas de paridade e a criação de bancos de talentos femininos auditáveis para romper o funil de entrada e promoção.'
  },
  {
    n: '03',
    titulo: 'Estímulo para Liderar',
    chamada: 'patrocínio ativo',
    exigencia:
      'Não queremos apenas conselhos; exigimos sponsorship. Queremos que o capital político seja mobilizado para nos colocar nas mesas de decisão.'
  },
  {
    n: '04',
    titulo: 'Infraestrutura e Cuidado',
    exigencia:
      'A maternidade não pode ser um impeditivo para a liderança. Exigimos políticas reais de conciliação: horários flexíveis, creches, salas de amamentação e a desconstrução da lógica de disponibilidade ininterrupta.'
  },
  {
    n: '05',
    titulo: 'Corresponsabilidade Institucional',
    exigencia:
      'Os homens devem ser engajados ativamente como aliados. A paridade não é um problema das mulheres — é um imperativo de eficiência e justiça do Estado.'
  },
  {
    n: '06',
    titulo: 'Diversidade e Interseccionalidade',
    exigencia:
      'A nossa luta não será silenciada pela homogeneidade. Mulheres negras, indígenas, periféricas, LBTQIA+ e com deficiência devem estar no centro da estratégia de ascensão.'
  }
];

const regras = [
  {
    n: '01',
    titulo: 'Interseccionalidade',
    texto:
      'Reconhecemos que raça, classe, deficiência e território estruturam nossas desigualdades de forma sobreposta. A diversidade não será um anexo — será a lente principal.'
  },
  {
    n: '02',
    titulo: 'Tolerância Zero ao Assédio e à Violência',
    texto:
      'A liderança feminina não sobrevive em ambientes tóxicos. Exigimos protocolos humanizados e enfrentamento transversal a todas as formas de assédio, conforme a Portaria MGI nº 6.719/2024.'
  },
  {
    n: '03',
    titulo: 'Letramento Digital e Capacitação',
    texto:
      'Exigimos formação contínua e domínio das inovações tecnológicas para garantir que não reproduziremos os mesmos vieses sexistas e racistas no Estado do futuro.'
  },
  {
    n: '04',
    titulo: 'Monitoramento e Transparência',
    texto:
      'O que não tem indicador não existe na gestão pública. Exigimos painéis de dados abertos para prestação de contas à sociedade e acompanhamento de metas.'
  },
  {
    n: '05',
    titulo: 'Apoio Normativo Institucional',
    texto:
      'Queremos que a igualdade vire lei, portaria e decreto. Nossos avanços devem ser blindados juridicamente contra as trocas de gestão.'
  }
];

export default function ManifestoSection() {
  return (
    <section id="manifesto" className="relative">
      {/* ====================================================
          MOVIMENTO I — ABERTURA / DECLARAÇÃO
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

        <div className="max-w-4xl mx-auto relative">
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
            className="font-display text-center font-medium mb-14"
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
            className="font-display text-center mb-12 max-w-3xl mx-auto"
            style={{
              fontSize: 'clamp(1.4rem, 2.4vw, 2rem)',
              color: 'var(--eixo-off-white)',
              lineHeight: 1.35,
              letterSpacing: '-0.005em'
            }}
          >
            Nós, mulheres trabalhadoras e servidoras da administração
            pública, organizadas em coletivo, declaramos:{' '}
            <em
              style={{ color: 'var(--eixo-ouro)', fontStyle: 'italic' }}
            >
              o tempo do mero diagnóstico acabou.
            </em>
          </p>

          <div className="flex justify-center mb-12">
            <span
              aria-hidden
              className="block w-24 h-px"
              style={{ background: 'rgba(201, 168, 106, 0.4)' }}
            />
          </div>

          <div className="space-y-7 max-w-3xl mx-auto font-body text-lg md:text-xl leading-relaxed text-[var(--eixo-off-white-soft)]">
            <p>
              Conhecemos a realidade porque a vivemos em nossos corpos
              todos os dias. Sabemos que a desigualdade de gênero e raça
              no Estado brasileiro não é um acidente —{' '}
              <strong style={{ color: 'var(--eixo-off-white)' }}>
                é um projeto
              </strong>{' '}
              desenhado para nos manter na base e nos excluir das mesas
              de decisão.
            </p>
            <p>
              Hoje, rompemos com a ideia de que a mudança virá apenas por
              uma evolução cultural natural. Nós exigimos uma{' '}
              <strong style={{ color: 'var(--eixo-ouro)' }}>
                engenharia institucional
              </strong>{' '}
              que desmonte as estruturas de exclusão e reconstrua a
              administração pública com base na paridade, na justiça e na
              interseccionalidade.
            </p>
          </div>
        </div>
      </div>

      {/* ====================================================
          MOVIMENTO II — DIAGNÓSTICO É VIVÊNCIA
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
            className="font-display font-medium mb-8 max-w-3xl"
            style={{
              fontSize: 'clamp(2rem, 4.4vw, 3.4rem)',
              color: 'var(--eixo-off-white)',
              lineHeight: 1.05,
              letterSpacing: '-0.015em'
            }}
          >
            O nosso diagnóstico é a nossa vivência.
          </h3>
          <p className="font-body text-lg md:text-xl text-[var(--eixo-off-white-soft)] max-w-3xl mb-16 leading-relaxed">
            Somos a maioria da força de trabalho no serviço público, mas
            somos sistematicamente bloqueadas na ascensão. Os números
            abaixo não são abstrações — são o teto, as paredes e o chão
            da nossa rotina.
          </p>

          <ul
            className="grid grid-cols-1 md:grid-cols-2 gap-px"
            style={{ background: 'rgba(242, 234, 217, 0.08)' }}
          >
            {stats.map((stat, i) => (
              <li
                key={i}
                className="p-8 md:p-10 lg:p-12 flex flex-col gap-6"
                style={{ background: 'var(--eixo-grafite)' }}
              >
                <div
                  className="font-display"
                  style={{
                    fontSize: 'clamp(3.5rem, 8vw, 6rem)',
                    color: 'var(--eixo-ouro)',
                    lineHeight: 0.9,
                    letterSpacing: '-0.04em',
                    fontWeight: 500
                  }}
                >
                  {stat.valor}
                </div>
                <p className="font-body text-base md:text-lg leading-relaxed text-[var(--eixo-off-white-soft)]">
                  {stat.label}
                </p>
              </li>
            ))}
          </ul>

          <p
            className="font-display italic mt-14 max-w-3xl"
            style={{
              fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)',
              color: 'rgba(242, 234, 217, 0.55)',
              lineHeight: 1.4
            }}
          >
            O custo dessa sobrecarga, somado aos ambientes hostis e às
            violências de gênero, é o nosso adoecimento.
          </p>
        </div>
      </div>

      {/* ====================================================
          MOVIMENTO III — A PRATELEIRA DE SOLUÇÕES (6 módulos)
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
            A nossa prateleira de soluções.
          </h3>
          <p className="font-body text-lg md:text-xl text-[var(--eixo-off-white-soft)] max-w-3xl mb-16 leading-relaxed">
            Não aceitamos mais políticas de fachada ou o tokenismo
            institucional. Seis módulos de intervenção estruturantes que
            exigimos ver aplicados em todas as esferas de poder:
          </p>

          <ol
            className="space-y-px"
            style={{ background: 'rgba(242, 234, 217, 0.06)' }}
          >
            {modulos.map((m) => (
              <li
                key={m.n}
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
                    {m.n}
                  </span>
                </div>
                <div className="md:col-span-4">
                  <h4
                    className="font-display font-medium mb-1"
                    style={{
                      fontSize: 'clamp(1.4rem, 2.4vw, 1.9rem)',
                      color: 'var(--eixo-off-white)',
                      lineHeight: 1.15,
                      letterSpacing: '-0.01em'
                    }}
                  >
                    {m.titulo}
                  </h4>
                  {m.chamada && (
                    <p
                      className="font-display italic text-sm md:text-base mt-1"
                      style={{ color: 'var(--eixo-ouro)' }}
                    >
                      {m.chamada}
                    </p>
                  )}
                </div>
                <p className="md:col-span-7 font-body text-base md:text-lg text-[var(--eixo-off-white-soft)] leading-relaxed">
                  {m.exigencia}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* ====================================================
          MOVIMENTO IV — 5 REGRAS DE OURO
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
            Capítulo III
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
            As nossas{' '}
            <span style={{ color: 'var(--eixo-ouro)' }}>5 regras</span> de
            ouro.
          </h3>
          <p className="font-body text-lg md:text-xl text-[var(--eixo-off-white-soft)] max-w-3xl mb-16 leading-relaxed">
            Qualquer instituição que se comprometa com este manifesto
            deverá ser transversalmente atravessada por cinco premissas
            inegociáveis:
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {regras.map((r) => (
              <li
                key={r.n}
                className="rounded-2xl p-6 border h-full flex flex-col"
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
                  {r.n}
                </div>
                <h4
                  className="font-display font-medium mb-3"
                  style={{
                    fontSize: '1.1rem',
                    color: 'var(--eixo-off-white)',
                    lineHeight: 1.2
                  }}
                >
                  {r.titulo}
                </h4>
                <p className="font-body text-sm leading-relaxed text-[var(--eixo-off-white-soft)] flex-1">
                  {r.texto}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ====================================================
          MOVIMENTO V — O CHAMADO
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
            O nosso chamado
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
            A diversidade não é um favor que nos prestam. É um{' '}
            <span style={{ color: 'var(--eixo-ouro)' }}>direito nosso</span>{' '}
            e uma exigência para a legitimidade, inovação e excelência
            das políticas públicas.
          </p>

          <p className="font-body text-lg md:text-xl text-[var(--eixo-off-white-soft)] max-w-2xl mx-auto mb-20 leading-relaxed">
            Convidamos todas as mulheres, gestoras públicas, ativistas e
            trabalhadoras a se unirem a essa rede. O sistema não muda
            sozinho.
          </p>

          <h3
            className="font-display font-medium mb-12"
            style={{
              fontSize: 'clamp(2.2rem, 5.6vw, 4.6rem)',
              color: 'var(--eixo-off-white)',
              lineHeight: 1.0,
              letterSpacing: '-0.02em'
            }}
          >
            Chegou a hora de mudarmos
            <br />
            <span style={{ color: 'var(--eixo-ouro)' }}>por dentro.</span>
          </h3>

          <p
            className="font-display italic mb-16"
            style={{
              fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)',
              color: 'rgba(242, 234, 217, 0.55)',
              lineHeight: 1.4
            }}
          >
            E nós, juntas, somos a força dessa transformação.
          </p>

          <Link href="/como-aderir" className="btn-primary">
            Aderir ao manifesto
          </Link>
        </div>
      </div>
    </section>
  );
}
