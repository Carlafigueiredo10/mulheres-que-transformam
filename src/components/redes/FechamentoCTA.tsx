'use client';

import Link from 'next/link';

const inteligencia = [
  {
    titulo: 'Inovação e Resiliência',
    texto: 'Redes geram soluções inovadoras para problemas complexos (wicked problems).'
  },
  {
    titulo: 'Representatividade Ativa',
    texto:
      'Lideranças femininas imprimem uma visão mais inclusiva, empática e plural na formulação de políticas públicas.'
  },
  {
    titulo: 'Legitimidade',
    texto: 'Onde há diversidade, há diálogo e maior confiança pública nas instituições.'
  }
];

const acoes = [
  {
    verbo: 'Conecte-se',
    chamada: 'Fortaleça ou crie redes de apoio no seu órgão.',
    href: '/cadastrar-rede'
  },
  {
    verbo: 'Patrocine',
    chamada: 'Use seu capital político para indicar, promover e dar visibilidade a uma mulher.',
    href: '/boas-praticas'
  },
  {
    verbo: 'Institucionalize',
    chamada: 'Transforme a paridade de gênero em regra, não em exceção.',
    href: '/dashboard#como-participar'
  }
];

export default function FechamentoCTA() {
  return (
    <>
      {/* Inteligência Institucional */}
      <section className="relative py-24 md:py-32 px-6" style={{ background: 'var(--rede-roxo-deep)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-7 text-[10px] uppercase tracking-[0.32em] font-body font-semibold" style={{ color: 'var(--rede-cobre-soft)' }}>
            <span aria-hidden className="inline-block w-12 h-px" style={{ background: 'var(--rede-cobre-soft)' }} />
            Por que isso importa para o Estado
          </div>

          <h2
            className="font-display text-[clamp(2.2rem,4.6vw,3.8rem)] font-medium mb-6 max-w-4xl"
            style={{ color: 'var(--rede-cream)', lineHeight: 1.05, letterSpacing: '-0.015em' }}
          >
            Liderança Feminina é Inteligência Institucional.
          </h2>
          <p
            className="font-body text-base md:text-lg leading-relaxed max-w-3xl mb-14"
            style={{ color: 'var(--rede-cream-soft)' }}
          >
            Eliminar o teto de vidro não é apenas uma questão de justiça histórica;
            é vital para o funcionamento eficaz do Estado.
          </p>

          <div className="grid md:grid-cols-3 gap-10 md:gap-8">
            {inteligencia.map((item) => (
              <div key={item.titulo} className="border-t pt-6" style={{ borderColor: 'var(--rede-line)' }}>
                <h3
                  className="font-display text-xl md:text-2xl font-medium mb-3"
                  style={{ color: 'var(--rede-cobre-soft)' }}
                >
                  {item.titulo}
                </h3>
                <p
                  className="font-body text-sm md:text-base leading-relaxed"
                  style={{ color: 'var(--rede-cream-soft)' }}
                >
                  {item.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final — Conecte-se / Patrocine / Institucionalize */}
      <section
        className="relative py-28 md:py-40 px-6 overflow-hidden"
        style={{
          background:
            'linear-gradient(180deg, var(--rede-roxo-deep) 0%, #1A0B36 100%)'
        }}
      >
        <div className="max-w-6xl mx-auto relative z-10">
          <h2
            className="font-display text-[clamp(2.6rem,6vw,5rem)] font-medium mb-6 max-w-4xl"
            style={{ color: 'var(--rede-cream)', lineHeight: 1.0, letterSpacing: '-0.02em' }}
          >
            Transforme o Estado. Comece agora.
          </h2>
          <p
            className="font-body text-base md:text-lg leading-relaxed max-w-3xl mb-16"
            style={{ color: 'var(--rede-cream-soft)' }}
          >
            A construção de um serviço público inclusivo e efetivo exige intencionalidade.
            A mudança estrutural depende da ação de quem já ocupa espaços de poder hoje.
          </p>

          <div className="space-y-8">
            {acoes.map((a, i) => (
              <Link
                key={a.verbo}
                href={a.href}
                className="group block border-t py-8 md:py-10 transition-all duration-300"
                style={{ borderColor: 'var(--rede-line)' }}
              >
                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div
                    className="md:col-span-1 font-display text-sm"
                    style={{ color: 'var(--rede-cobre-soft)' }}
                  >
                    0{i + 1}
                  </div>
                  <h3
                    className="md:col-span-4 font-display font-medium tracking-tight transition-transform duration-300 group-hover:translate-x-2"
                    style={{
                      fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
                      color: 'var(--rede-cream)',
                      lineHeight: 1,
                      letterSpacing: '-0.02em'
                    }}
                  >
                    {a.verbo}
                  </h3>
                  <p
                    className="md:col-span-6 font-body text-base md:text-lg leading-relaxed"
                    style={{ color: 'var(--rede-cream-soft)' }}
                  >
                    {a.chamada}
                  </p>
                  <div
                    className="md:col-span-1 flex md:justify-end transition-transform duration-300 group-hover:translate-x-2"
                    style={{ color: 'var(--rede-cobre-soft)' }}
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}

            <div className="border-t" style={{ borderColor: 'var(--rede-line)' }} />
          </div>

          <p
            className="font-display text-center mt-20 italic"
            style={{
              fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
              color: 'var(--rede-cobre-soft)',
              lineHeight: 1.4
            }}
          >
            Conectando redes. Ampliando vozes. Transformando o serviço público.
          </p>
        </div>
      </section>
    </>
  );
}
