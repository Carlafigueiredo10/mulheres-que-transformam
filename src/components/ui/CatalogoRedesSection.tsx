'use client';

import { useState, useRef, useEffect } from 'react';
import { activeNetworks, networkCategories, networkThemes } from '@/data/networks';

export default function CatalogoRedesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTheme, setSelectedTheme] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredNetworks = activeNetworks.filter((network) => {
    const matchesCategory = selectedCategory === 'all' || network.category === selectedCategory;
    const matchesTheme = selectedTheme === 'all' || network.themes.includes(selectedTheme);
    const matchesSearch = searchTerm === '' || 
      network.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      network.mission.toLowerCase().includes(searchTerm.toLowerCase()) ||
      network.institution.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesTheme && matchesSearch;
  });

  const getCategoryColor = (category: string) => {
    const categoryData = networkCategories.find(cat => cat.id === category);
    return categoryData?.color || 'gray';
  };

  const getStatusBadge = (status: string) => {
    if (status === 'active') {
      return (
        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1"></span>
          Ativa
        </span>
      );
    }
    return (
      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
        <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-1"></span>
        Em Desenvolvimento
      </span>
    );
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Catálogo de Redes Ativas
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra e conecte-se com as principais redes de mulheres no serviço público brasileiro
          </p>
        </div>

        {/* Filters */}
        <div className={`mb-8 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                  Buscar redes
                </label>
                <input
                  type="text"
                  id="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Digite o nome da rede, instituição ou missão..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Category filter */}
              <div className="lg:w-64">
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                  Categoria
                </label>
                <select
                  id="category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">Todas as categorias</option>
                  {networkCategories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Theme filter */}
              <div className="lg:w-64">
                <label htmlFor="theme" className="block text-sm font-medium text-gray-700 mb-2">
                  Tema
                </label>
                <select
                  id="theme"
                  value={selectedTheme}
                  onChange={(e) => setSelectedTheme(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">Todos os temas</option>
                  {networkThemes.map((theme) => (
                    <option key={theme} value={theme}>
                      {theme}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results count */}
            <div className="mt-4 text-sm text-gray-600">
              Mostrando {filteredNetworks.length} de {activeNetworks.length} redes
            </div>
          </div>
        </div>

        {/* Networks Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredNetworks.map((network, index) => (
            <div
              key={network.id}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-gray-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 leading-tight">
                    {network.name}
                  </h3>
                  <div className="flex items-center gap-3 mb-3">
                    {getStatusBadge(network.status)}
                    <span className={`px-3 py-1 rounded-full text-xs font-medium bg-${getCategoryColor(network.category)}-100 text-${getCategoryColor(network.category)}-800`}>
                      {networkCategories.find(cat => cat.id === network.category)?.name}
                    </span>
                  </div>
                </div>
              </div>

              {/* Institution */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-1">Instituições Envolvidas:</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{network.institution}</p>
              </div>

              {/* Mission */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Missão:</h4>
                <p className="text-gray-600 leading-relaxed">{network.mission}</p>
              </div>

              {/* Themes */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Temas de Atuação:</h4>
                <div className="flex flex-wrap gap-2">
                  {network.themes.map((theme, themeIndex) => (
                    <span
                      key={themeIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
                    >
                      {theme}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="text-sm text-gray-500">
                  Desde {network.established}
                  {network.members && (
                    <span className="block">{network.members}</span>
                  )}
                </div>
                <div className="flex gap-3">
                  {network.website && (
                    <a
                      href={network.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                  <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
                    Saiba Mais
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredNetworks.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Nenhuma rede encontrada</h3>
            <p className="text-gray-600 mb-6">Tente ajustar os filtros ou termos de busca</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedTheme('all');
                setSearchTerm('');
              }}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Limpar Filtros
            </button>
          </div>
        )}
      </div>
    </section>
  );
}