import { notFound } from 'next/navigation';
import { modules } from '@/data/modules';
import Link from 'next/link';

interface ModulePageProps {
  params: Promise<{ slug: string }>;
}

export default async function ModulePage({ params }: ModulePageProps) {
  const { slug } = await params;
  const moduleData = modules.find(m => m.slug === slug); // ← Aqui usar 'slug' ao invés de 'params.slug'

  if (!moduleData) {
    notFound();
  }

  const currentIndex = modules.findIndex(m => m.slug === slug);
  const previousModule = currentIndex > 0 ? modules[currentIndex - 1] : null;
  const nextModule = currentIndex < modules.length - 1 ? modules[currentIndex + 1] : null;

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-6">{moduleData.icon}</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                {moduleData.title.split(' ')[0]}
              </span>{' '}
              {moduleData.title.split(' ').slice(1).join(' ')}
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              {moduleData.description}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 relative overflow-hidden">
            {/* Left accent border */}
            <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-blue-600 to-blue-800"></div>
            
            <div className="pl-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl flex items-center justify-center mb-8">
                <span className="text-3xl">{moduleData.icon}</span>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {moduleData.title}
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {moduleData.description}
              </p>

              {/* Objectives */}
              <div className="bg-gray-50 p-8 rounded-2xl mb-8">
                <h3 className="text-xl font-bold text-blue-600 mb-4 flex items-center">
                  🎯 Objetivos Específicos
                </h3>
                <ul className="space-y-3">
                  {moduleData.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold mt-1">✓</span>
                      <span className="text-gray-700">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Strategies */}
              <div className="bg-gray-50 p-8 rounded-2xl mb-8">
                <h3 className="text-xl font-bold text-blue-600 mb-4 flex items-center">
                  🚀 Estratégias de Implementação
                </h3>
                <ul className="space-y-4">
                  {moduleData.strategies.map((strategy, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold mt-1">→</span>
                      <span className="text-gray-700">{strategy}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Barriers (if available) */}
              {moduleData.barriers && (
                <div className="bg-orange-50 p-8 rounded-2xl mb-8">
                  <h3 className="text-xl font-bold text-orange-600 mb-4 flex items-center">
                    ⚠️ Barreiras Identificadas
                  </h3>
                  <ul className="space-y-3">
                    {moduleData.barriers.map((barrier, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-orange-600 font-bold mt-1">!</span>
                        <span className="text-gray-700">{barrier}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Indicators */}
              <div className="bg-green-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center">
                  📊 Indicadores de Sucesso
                </h3>
                <ul className="space-y-3">
                  {moduleData.indicators.map((indicator, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-green-600 font-bold mt-1">📈</span>
                      <span className="text-gray-700">{indicator}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 p-8 bg-gray-50 rounded-2xl">
            <div>
              {previousModule ? (
                <Link
                  href={previousModule.path}
                  className="flex items-center gap-3 text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  ← Anterior: {previousModule.title}
                </Link>
              ) : (
                <Link
                  href="/"
                  className="flex items-center gap-3 text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  ← Voltar ao Início
                </Link>
              )}
            </div>
            
            <span className="text-gray-500 font-medium">
              Módulo {currentIndex + 1} de {modules.length}
            </span>
            
            <div>
              {nextModule ? (
                <Link
                  href={nextModule.path}
                  className="flex items-center gap-3 text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  Próximo: {nextModule.title} →
                </Link>
              ) : (
                <Link
                  href="/"
                  className="flex items-center gap-3 text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  Voltar ao Início →
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  return modules.map((module) => ({
    slug: module.slug, // ← Trocar 'module.id' por 'module.slug'
  }));
}