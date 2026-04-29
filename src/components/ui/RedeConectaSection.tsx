'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const pilares = [
  {
    titulo: 'Acesso à Informação',
    texto: 'Circulação de oportunidades e vagas que não passam pelos canais oficiais.'
  },
  {
    titulo: 'Segurança Psicológica',
    texto: 'Apoio mútuo como blindagem contra assédio, hostilidade e isolamento institucional.'
  },
  {
    titulo: 'Alianças Estratégicas',
    texto: 'Propostas transversais e influência em mudanças institucionais a partir de uma base coletiva.'
  }
];

export default function RedeConectaSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1, rootMargin: '50px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const features = [
    {
      id: 'catalogo',
      title: 'Catálogo de Redes Ativas',
      description: 'Explore todas as redes, coletivos e iniciativas de mulheres no serviço público brasileiro.',
      icon: '📚',
      link: '/catalogo-redes',
      stats: '14+ redes mapeadas'
    },
    {
      id: 'mapa',
      title: 'Mapa Interativo',
      description: 'Visualize geograficamente as redes e conecte-se com iniciativas próximas a você.',
      icon: '🗺️',
      link: '/mapa-redes',
      stats: 'Cobertura nacional'
    },
    {
      id: 'cadastro',
      title: 'Como Cadastrar sua Rede',
      description: 'Registre sua iniciativa e amplie o alcance da sua rede no ecossistema nacional.',
      icon: '➕',
      link: '/cadastrar-rede',
      stats: 'Processo simplificado'
    },
    {
      id: 'boas-praticas',
      title: 'Boas Práticas e Iniciativas',
      description: 'Conheça casos de sucesso, metodologias e recursos compartilhados pelas redes.',
      icon: '⭐',
      link: '/boas-praticas',
      stats: 'Recursos gratuitos'
    }
  ];

  return (
    <section ref={sectionRef} id="rede-conecta">
      {/* Bloco 1 — Hook editorial (dark, paleta roxo+cobre) */}
      <div
        className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          background:
            'linear-gradient(180deg, #2A1454 0%, #3D1F73 100%)'
        }}
      >
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none opacity-60"
          style={{
            background:
              'radial-gradient(ellipse at 80% 20%, rgba(201,123,90,0.18), transparent 55%), radial-gradient(ellipse at 10% 90%, rgba(139,92,246,0.18), transparent 55%)'
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 mb-6 text-[10px] uppercase tracking-[0.32em] font-semibold" style={{ color: '#D9926E' }}>
              <span aria-hidden className="inline-block w-12 h-px" style={{ background: '#D9926E' }} />
              Rede Conecta · Mulheres que Transformam
            </div>

            <h2
              className="font-display font-medium mb-6"
              style={{
                fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
                color: '#F4EFE6',
                lineHeight: 1.02,
                letterSpacing: '-0.02em'
              }}
            >
              O Poder do Coletivo.
            </h2>
            <p
              className="font-body text-base md:text-lg leading-relaxed mb-8 max-w-2xl"
              style={{ color: 'rgba(244,239,230,0.78)' }}
            >
              Apesar de qualificações técnicas iguais ou superiores, apenas{' '}
              <strong style={{ color: '#D9926E' }}>27% das lideranças</strong> de alto escalão na
              administração pública federal são ocupadas por mulheres. Redes de apoio
              transformam a exaustão individual em poder coletivo, resiliência e visibilidade.
            </p>

            <Link
              href="/poder-do-coletivo"
              className="group inline-flex items-center gap-3 font-display text-lg md:text-xl border-b pb-1 transition-colors"
              style={{ color: '#F4EFE6', borderColor: '#D9926E' }}
            >
              Ler o artigo completo
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="transition-transform duration-300 group-hover:translate-x-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>

          <div className="md:col-span-5">
            <NumeroParadoxo />
          </div>
        </div>
      </div>

      {/* Bloco 2 — Por quê: 3 pilares do que a rede entrega */}
      <div className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/40">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-14">
            <p className="text-sm uppercase tracking-[0.28em] font-semibold text-blue-700 mb-4">
              Por que formar uma rede
            </p>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight">
              Redes femininas funcionam como <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">infraestruturas ocultas de avanço profissional</span>.
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Compensam a exclusão histórica das redes de influência tradicionais, gerando
              capital social e proteção institucional para suas integrantes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pilares.map((p, i) => (
              <div
                key={p.titulo}
                className={`relative bg-white rounded-2xl p-8 border border-blue-100 shadow-sm hover:shadow-lg transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: isVisible ? `${i * 120}ms` : '0ms' }}
              >
                <div className="text-sm font-bold text-blue-700 tracking-[0.2em] mb-4">
                  0{i + 1}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{p.titulo}</h4>
                <p className="text-gray-600 leading-relaxed">{p.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bloco 3 — Como formar / agir agora: 4 cards operacionais */}
      <div className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-100/40 to-cyan-100/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-r from-indigo-100/40 to-blue-200/40 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-[0.28em] font-semibold text-blue-700 mb-4">
              Como formar e fortalecer a sua
            </p>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Quatro caminhos para começar agora.
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Link
                key={feature.id}
                href={feature.link}
                className={`group bg-white rounded-2xl p-7 shadow-md hover:shadow-2xl border border-gray-100 transition-all duration-500 hover:-translate-y-1 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: isVisible ? `${index * 120}ms` : '0ms' }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">{feature.icon}</span>
                </div>

                <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                  {feature.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
                    {feature.stats}
                  </span>
                  <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-1 transition-transform duration-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA final */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Faça Parte da Transformação
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Conecte sua iniciativa ao maior ecossistema de mulheres no serviço público brasileiro.
                Juntas, multiplicamos impactos e construímos um futuro mais inclusivo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/poder-do-coletivo"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span className="text-xl mr-2">📖</span>
                  Entender o Poder do Coletivo
                </Link>
                <Link
                  href="/cadastrar-rede"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl border-2 border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="text-xl mr-2">🚀</span>
                  Cadastrar Minha Rede
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NumeroParadoxo() {
  return (
    <div className="relative">
      <div
        className="font-display select-none"
        style={{
          fontSize: 'clamp(7rem, 16vw, 14rem)',
          fontWeight: 500,
          lineHeight: 0.9,
          letterSpacing: '-0.04em',
          color: '#F4EFE6',
          textAlign: 'right'
        }}
      >
        27%
      </div>
      <p
        className="font-body text-sm md:text-base leading-relaxed text-right max-w-xs ml-auto mt-4"
        style={{ color: 'rgba(244,239,230,0.6)' }}
      >
        das lideranças de alto escalão na administração pública federal são mulheres.
      </p>
    </div>
  );
}
