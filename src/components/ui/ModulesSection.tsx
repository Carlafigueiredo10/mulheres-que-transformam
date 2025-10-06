import Link from 'next/link';
import { modules } from '@/data/modules';

export default function ModulesSection() {
  return (
    <section id="modulos" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Módulos do Projeto
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estratégia modular e adaptativa para transformação institucional através de ações práticas e mensuráveis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <div
              key={module.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 relative overflow-hidden group"
            >
              {/* Left border accent */}
              <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-600 to-blue-800"></div>
              
              {/* Module icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">{module.icon}</span>
              </div>

              {/* Module content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {module.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {module.description}
              </p>

              <Link
                href={module.path}
                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105"
              >
                Saiba Mais
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}