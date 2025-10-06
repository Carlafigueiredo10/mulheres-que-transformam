export default function MapaRedesPage() {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Mapa Interativo das Redes
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Visualize geograficamente as redes de mulheres no serviço público brasileiro
          </p>
        </div>

        <div className="bg-white rounded-2xl p-12 shadow-lg text-center">
          <div className="text-6xl mb-6">🗺️</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Mapa Interativo em Desenvolvimento
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Esta funcionalidade permitirá visualizar a distribuição geográfica das redes, 
            identificar concentrações regionais e descobrir oportunidades de expansão.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl mb-3">📍</div>
              <h3 className="font-bold text-gray-800 mb-2">Localização das Redes</h3>
              <p className="text-gray-600">Identificar onde cada rede atua geograficamente</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl mb-3">🔗</div>
              <h3 className="font-bold text-gray-800 mb-2">Conexões Regionais</h3>
              <p className="text-gray-600">Visualizar parcerias e colaborações por região</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-bold text-gray-800 mb-2">Dados Estatísticos</h3>
              <p className="text-gray-600">Métricas de participação e alcance por estado</p>
            </div>
          </div>

          <div className="mt-12">
            <a
              href="/catalogo-redes"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors"
            >
              Ver Catálogo de Redes
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: 'Mapa Interativo | Mulheres que Transformam',
  description: 'Visualize geograficamente as redes de mulheres no serviço público brasileiro e descubra conexões regionais.',
};