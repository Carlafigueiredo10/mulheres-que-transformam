'use client';

import { useState, useRef, useEffect } from 'react';

export default function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
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

  const testimonials = [
    {
      id: 1,
      name: "Ana Luiza Santos",
      position: "Secretária-Executiva",
      ministry: "Ministério da Educação",
      quote: "Participar do programa 'Mulheres que Transformam' foi um divisor de águas na minha carreira. Aprendi não apenas sobre liderança técnica, mas sobre como inspirar outras mulheres a ocuparem seus espaços.",
      avatar: "👩🏽‍💼"
    },
    {
      id: 2,
      name: "Mariana Costa",
      position: "Diretora de Políticas Públicas",
      ministry: "Ministério da Saúde",
      quote: "O programa me deu ferramentas práticas para navegar os desafios únicos que enfrentamos como mulheres em posições de liderança. Hoje sou mentora de outras servidoras.",
      avatar: "👩🏻‍⚕️"
    },
    {
      id: 3,
      name: "Rafaela Oliveira",
      position: "Coordenadora-Geral",
      ministry: "Ministério da Justiça",
      quote: "Ver outras mulheres liderando projetos transformadores me motivou a buscar posições de maior responsabilidade. O networking criado foi fundamental para meu crescimento profissional.",
      avatar: "👩🏿‍💻"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-200/50 to-pink-200/50 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-200/50 to-indigo-200/50 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="inline-block px-6 py-3 bg-white/70 backdrop-blur-sm text-purple-800 rounded-full text-sm font-semibold mb-6 border border-purple-200/50">
              💜 Vozes que Inspiram
            </span>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-800 to-pink-600 bg-clip-text text-transparent">
                Histórias de
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-600 to-indigo-600 bg-clip-text text-transparent">
                Transformação
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Conheça as mulheres que estão liderando mudanças reais na administração pública 
              e descobrindo seu potencial através do nosso programa.
            </p>
          </div>
        </div>

        {/* Testimonials carousel */}
        <div className="relative">
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/50 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{ 
                backgroundImage: 'radial-gradient(circle, rgb(147 51 234) 1px, transparent 1px)', 
                backgroundSize: '40px 40px' 
              }}></div>
            </div>

            <div className="relative z-10">
              {/* Testimonial content */}
              <div className="text-center mb-8">
                <div className="text-8xl mb-6 animate-bounce">
                  {testimonials[currentTestimonial].avatar}
                </div>
                <blockquote className="text-2xl md:text-3xl text-gray-800 font-medium leading-relaxed mb-8 italic">
                  &quot;{testimonials[currentTestimonial].quote}&quot;
                </blockquote>
                <div>
                  <div className="text-xl font-bold text-gray-900 mb-1">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-purple-600 font-semibold mb-1">
                    {testimonials[currentTestimonial].position}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentTestimonial].ministry}
                  </div>
                </div>
              </div>

              {/* Navigation dots */}
              <div className="flex justify-center space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-125'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-xl hover:shadow-2xl flex items-center justify-center text-purple-600 hover:text-purple-700 transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-xl hover:shadow-2xl flex items-center justify-center text-purple-600 hover:text-purple-700 transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Stats section */}
        <div className={`mt-20 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: '500+', label: 'Mulheres Capacitadas', description: 'Já participaram dos nossos programas' },
              { number: '85%', label: 'Taxa de Promoção', description: 'Das participantes foram promovidas em 2 anos' },
              { number: '15', label: 'Ministérios Envolvidos', description: 'Implementando ações de paridade' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/50">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-gray-800 mb-2">
                    {stat.label}
                  </div>
                  <div className="text-gray-600">
                    {stat.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}