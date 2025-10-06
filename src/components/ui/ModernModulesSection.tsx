'use client';

import Link from 'next/link';
import { modules } from '@/data/modules';
import { useState, useRef, useEffect } from 'react';

export default function ModernModulesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredModule, setHoveredModule] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const moduleColors = [
    'from-pink-500 to-rose-500',
    'from-purple-500 to-indigo-500', 
    'from-blue-500 to-cyan-500',
    'from-emerald-500 to-teal-500',
    'from-amber-500 to-orange-500',
    'from-red-500 to-pink-500'
  ];

  return (
    <section ref={sectionRef} id="modulos" className="py-24 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-r from-purple-100/30 to-pink-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-gradient-to-r from-blue-100/30 to-indigo-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 rounded-full text-sm font-semibold mb-6 border border-purple-200">
              ✨ Estratégia Modular Inovadora
            </span>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Seis Pilares para a
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
                Transformação
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Uma abordagem sistêmica e cientificamente embasada para acelerar a paridade de gênero 
              na liderança pública brasileira através de ações coordenadas e mensuráveis.
            </p>
          </div>
        </div>

        {/* Modules grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <div
              key={module.id}
              className={`transition-all duration-700 delay-${index * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
              onMouseEnter={() => setHoveredModule(module.id)}
              onMouseLeave={() => setHoveredModule(null)}
            >
              <div className="group relative h-full">
                {/* Main card */}
                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 relative overflow-hidden h-full flex flex-col">
                  {/* Gradient accent */}
                  <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${moduleColors[index % moduleColors.length]} transition-all duration-500 ${
                    hoveredModule === module.id ? 'h-full opacity-5' : ''
                  }`}></div>
                  
                  {/* Module number */}
                  <div className="absolute top-4 right-6 text-6xl font-bold text-gray-100 group-hover:text-gray-200 transition-colors">
                    0{index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className={`relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${moduleColors[index % moduleColors.length]} group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                    <span className="text-3xl">{module.icon}</span>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors leading-tight">
                      {module.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed flex-1">
                      {module.description}
                    </p>

                    {/* Key objectives preview */}
                    <div className="mb-6">
                      <div className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wide">
                        Principais Objetivos:
                      </div>
                      <div className="space-y-2">
                        {module.objectives.slice(0, 2).map((objective, objIndex) => (
                          <div key={objIndex} className="flex items-start gap-3 text-sm text-gray-600">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${moduleColors[index % moduleColors.length]} mt-2 flex-shrink-0`}></div>
                            <span className="line-clamp-2">{objective}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <Link
                      href={module.path}
                      className={`inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${moduleColors[index % moduleColors.length]} text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 group/btn`}
                    >
                      Explorar Módulo
                      <svg className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>

                  {/* Hover overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${moduleColors[index % moduleColors.length]} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                </div>

                {/* Floating elements */}
                <div className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r ${moduleColors[index % moduleColors.length]} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100`}></div>
                <div className={`absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r ${moduleColors[index % moduleColors.length]} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-lg text-gray-600 mb-8">
            Cada módulo foi cuidadosamente desenvolvido com base em pesquisas e boas práticas internacionais
          </p>
          <Link
            href="/modulos/legitimidade"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Começar a Jornada
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}