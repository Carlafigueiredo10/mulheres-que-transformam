'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function ImpactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const impactStats = [
    {
      number: '5+',
      label: 'Órgãos Aderentes',
      description: 'Instituições públicas federais, estaduais e municipais comprometidas com a equidade de gênero',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: '3',
      label: 'Níveis de Reconhecimento',
      description: 'Sistema de selos Participante, Ativa e Inspiradora que reconhece o compromisso institucional',
      color: 'from-indigo-500 to-blue-600'
    },
    {
      number: '6',
      label: 'Módulos de Atuação',
      description: 'Eixos estratégicos para transformar a cultura organizacional e promover liderança feminina',
      color: 'from-cyan-500 to-teal-500'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/3 w-72 h-72 bg-gradient-to-br from-blue-100/30 to-cyan-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-br from-indigo-100/20 to-purple-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              O Poder da
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
              Transformação
            </span>
          </h2>
          
          <h3 className={`text-2xl md:text-3xl font-semibold text-center mb-6 transition-all duration-1000 delay-150 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="text-blue-600">Adesão Institucional</span>
          </h3>
          
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Órgãos públicos de todos os níveis federativos aderindo ao compromisso 
            com equidade de gênero através de um sistema estruturado de reconhecimento 
            e implementação de políticas transformadoras.
          </p>
        </div>

        {/* Impact statistics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {impactStats.map((stat, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-gray-100/50 transition-all duration-700 hover:-translate-y-2 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: isVisible ? `${400 + index * 200}ms` : '0ms'
              }}
            >
              <div className="text-center">
                {/* Animated number */}
                <div className={`text-6xl md:text-7xl font-black mb-4 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent transition-transform duration-500 group-hover:scale-110`}>
                  {stat.number}
                </div>
                
                {/* Label */}
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {stat.label}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {stat.description}
                </p>

                {/* Hover effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Cards de Adesão Institucional */}
        <div className={`mb-20 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Explore a Adesão Institucional</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descubra como seu órgão pode participar e ser reconhecido pelo compromisso com equidade de gênero
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <a
              href="/orgaos-participantes"
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-6 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300 group-hover:scale-110">
                <span className="text-3xl">🏛️</span>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                  Órgãos Participantes
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Conheça as instituições públicas que aderiram ao programa e seus níveis de reconhecimento.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    5+ órgãos aderentes
                  </span>
                  <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                    <span className="text-sm">Explorar</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </a>

            <a
              href="/dashboard"
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mb-6 group-hover:from-green-200 group-hover:to-green-300 transition-all duration-300 group-hover:scale-110">
                <span className="text-3xl">📊</span>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors duration-300">
                  Dashboard Institucional
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Visualize a estrutura de adesão por núcleos: Federal, Federativo e Local.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
                    3 núcleos organizacionais
                  </span>
                  <div className="flex items-center text-green-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                    <span className="text-sm">Acessar</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </a>

            <Link
              href="/orgao/mtur/"
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mb-6 group-hover:from-purple-200 group-hover:to-purple-300 transition-all duration-300 group-hover:scale-110">
                <span className="text-3xl">📋</span>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                  Modelo de Adesão
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Veja o exemplo completo do MTur: planos, programas e compromissos institucionais.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                    Template completo
                  </span>
                  <div className="flex items-center text-purple-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                    <span className="text-sm">Ver modelo</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Seção Flexibilidade do Programa */}
        <div className={`mb-20 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-12 border-2 border-green-100 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-green-100 to-transparent rounded-full -translate-y-32 translate-x-32 opacity-50"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-200 to-emerald-200 rounded-2xl mb-6">
                  <span className="text-4xl">🎯</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  O Grande Trunfo: Flexibilidade Total
                </h3>
                <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                  Cada órgão tem autonomia completa para desenhar seu próprio projeto de transformação
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl p-6 shadow-md border border-green-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-3">
                    Diagnóstico Próprio
                  </h4>
                  <p className="text-gray-600">
                    Cada órgão realiza seu próprio diagnóstico institucional e identifica suas necessidades específicas de equidade de gênero.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border border-green-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-2xl">🎲</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-3">
                    Escolha Livre do Módulo
                  </h4>
                  <p className="text-gray-600">
                    Decide por qual dos 6 módulos começar: Legitimidade, Ampliação, Estímulo, Infraestrutura e Cuidado, Corresponsabilidade ou Diversidade e Interseccionalidade.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border border-green-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-2xl">📋</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-3">
                    Plano de Ação Customizado
                  </h4>
                  <p className="text-gray-600">
                    Desenvolve seu plano de ação baseado nas suas prioridades, cronograma e recursos disponíveis. Zero imposição!
                  </p>
                </div>
              </div>

              <div className="mt-10 text-center">
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-6 text-white inline-block">
                  <div className="flex items-center gap-4 max-w-4xl">
                    <span className="text-3xl">💡</span>
                    <div className="text-left">
                      <h4 className="text-xl font-bold mb-2">Sem Receita de Bolo</h4>
                      <p className="text-green-100">
                        <strong>Cada órgão tem seu próprio projeto!</strong> Você decide onde quer começar, como quer implementar e qual ritmo seguir. A única regra é o compromisso com a transformação.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}