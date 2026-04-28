'use client';

import { useEffect, useRef, useState } from 'react';

export default function AderirCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-600 rounded-3xl p-12 text-white text-center overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                  backgroundSize: '30px 30px'
                }}
              />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
              <h3 className="text-4xl font-bold mb-6">Seu Órgão Pode Aderir</h3>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Transforme sua instituição em referência de equidade de gênero.
                Obtenha reconhecimento através dos nossos selos e faça parte da mudança.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg">
                  Como Aderir
                </button>
                <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105">
                  Ver Dashboard
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
