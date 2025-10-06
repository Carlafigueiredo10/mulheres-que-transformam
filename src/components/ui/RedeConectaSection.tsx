'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function RedeConectaSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

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
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-100/40 to-cyan-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-r from-indigo-100/40 to-blue-200/40 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-200">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            Plataforma Oficial
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Rede Conecta
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Mulheres que Transformam
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4 leading-relaxed">
            Um ponto de encontro entre redes, coletivos e iniciativas de mulheres no serviço público.
          </p>
          
          <p className="text-lg font-medium text-blue-700 max-w-2xl mx-auto mb-8">
            Aqui, <span className="font-semibold">cada conexão fortalece a paridade, a liderança e a diversidade.</span>
          </p>

          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-medium text-lg shadow-lg">
            <span className="text-2xl">🌟</span>
            "Conectando redes. Ampliando vozes. Transformando o serviço público."
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Link
              key={feature.id}
              href={feature.link}
              className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 150}ms` : '0ms'
              }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-6 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300 group-hover:scale-110">
                <span className="text-3xl">{feature.icon}</span>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {feature.stats}
                  </span>
                  <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                    <span className="text-sm">Explorar</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Hover effect border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-all duration-300"></div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
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
                href="/cadastrar-rede"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span className="text-xl mr-2">🚀</span>
                Cadastrar Minha Rede
              </Link>
              <Link
                href="/catalogo-redes"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl border-2 border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 transform hover:scale-105"
              >
                <span className="text-xl mr-2">🔍</span>
                Explorar Redes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}