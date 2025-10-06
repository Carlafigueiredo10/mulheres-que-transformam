import Link from 'next/link';

export default function ObservatorySection() {
  const features = [
    {
      icon: '📈',
      title: 'Monitoramento Contínuo',
      description: 'Indicadores de gênero, raça e ocupação de cargos com atualizações periódicas'
    },
    {
      icon: '🔍',
      title: 'Análise Crítica',
      description: 'Tendências, funis de progressão e disparidades institucionais'
    },
    {
      icon: '📋',
      title: 'Relatórios Técnicos',
      description: 'Documentos acessíveis com recomendações práticas'
    },
    {
      icon: '🎯',
      title: 'Pactuação de Metas',
      description: 'Subsídios para compromissos institucionais baseados em evidências'
    }
  ];

  return (
    <section id="observatorio" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Observatório de Paridade
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Ferramenta estratégica de articulação entre dados, diagnóstico e decisão política 
              para transformar desigualdade em compromisso institucional.
            </p>
            <Link
              href="#"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105"
            >
              Acessar Dashboard
            </Link>
          </div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-slate-900 font-bold flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-slate-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}