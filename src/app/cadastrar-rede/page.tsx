'use client';

import { useState } from 'react';

export default function CadastrarRedePage() {
  const [formData, setFormData] = useState({
    name: '',
    institution: '',
    mission: '',
    category: '',
    themes: [] as string[],
    contact: '',
    website: '',
    established: '',
    members: '',
    functioning: ''
  });

  const categories = [
    { id: 'formal', name: 'Rede Formal Interinstitucional' },
    { id: 'informal', name: 'Coletivo Informal' },
    { id: 'program', name: 'Programa de Capacitação' },
    { id: 'association', name: 'Associação Profissional' }
  ];

  const themes = [
    'Equidade de Gênero', 'Diversidade Racial', 'Liderança', 'Orçamento Público',
    'Gestão Pública', 'Governança', 'Capacitação', 'Mentoria', 'Networking',
    'Políticas Públicas', 'Carreira Pública', 'Empoderamento'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui seria implementada a lógica de envio
    alert('Cadastro enviado com sucesso! Entraremos em contato para validação.');
  };

  const handleThemeChange = (theme: string) => {
    setFormData(prev => ({
      ...prev,
      themes: prev.themes.includes(theme)
        ? prev.themes.filter(t => t !== theme)
        : [...prev.themes, theme]
    }));
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Cadastrar Minha Rede
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Registre sua iniciativa e amplie o alcance da sua rede no ecossistema nacional
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nome da Rede */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Nome da Rede *
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Ex: Rede de Mulheres Líderes em Tecnologia"
              />
            </div>

            {/* Instituições */}
            <div>
              <label htmlFor="institution" className="block text-sm font-medium text-gray-700 mb-2">
                Instituições Envolvidas *
              </label>
              <textarea
                id="institution"
                required
                rows={3}
                value={formData.institution}
                onChange={(e) => setFormData(prev => ({ ...prev, institution: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Liste as principais instituições participantes ou apoiadoras"
              />
            </div>

            {/* Missão */}
            <div>
              <label htmlFor="mission" className="block text-sm font-medium text-gray-700 mb-2">
                Missão e Objetivos *
              </label>
              <textarea
                id="mission"
                required
                rows={4}
                value={formData.mission}
                onChange={(e) => setFormData(prev => ({ ...prev, mission: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Descreva a missão, objetivos e propósito da rede"
              />
            </div>

            {/* Categoria */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Categoria da Rede *
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {categories.map((category) => (
                  <label key={category.id} className="flex items-center">
                    <input
                      type="radio"
                      name="category"
                      value={category.id}
                      checked={formData.category === category.id}
                      onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                      className="mr-3 text-blue-600"
                    />
                    <span>{category.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Temas */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Temas de Atuação (selecione até 5)
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {themes.map((theme) => (
                  <label key={theme} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.themes.includes(theme)}
                      onChange={() => handleThemeChange(theme)}
                      disabled={formData.themes.length >= 5 && !formData.themes.includes(theme)}
                      className="mr-2 text-blue-600"
                    />
                    <span className="text-sm">{theme}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Detalhes adicionais */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="established" className="block text-sm font-medium text-gray-700 mb-2">
                  Ano de Criação
                </label>
                <input
                  type="number"
                  id="established"
                  min="1900"
                  max="2025"
                  value={formData.established}
                  onChange={(e) => setFormData(prev => ({ ...prev, established: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="members" className="block text-sm font-medium text-gray-700 mb-2">
                  Número de Participantes
                </label>
                <input
                  type="text"
                  id="members"
                  value={formData.members}
                  onChange={(e) => setFormData(prev => ({ ...prev, members: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Ex: 50+ participantes, ~200 membros"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-2">
                  Contato *
                </label>
                <input
                  type="text"
                  id="contact"
                  required
                  value={formData.contact}
                  onChange={(e) => setFormData(prev => ({ ...prev, contact: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Email, telefone ou rede social"
                />
              </div>

              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                  Website ou Página
                </label>
                <input
                  type="url"
                  id="website"
                  value={formData.website}
                  onChange={(e) => setFormData(prev => ({ ...prev, website: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://..."
                />
              </div>
            </div>

            {/* Como funciona */}
            <div>
              <label htmlFor="functioning" className="block text-sm font-medium text-gray-700 mb-2">
                Como a rede funciona?
              </label>
              <textarea
                id="functioning"
                rows={3}
                value={formData.functioning}
                onChange={(e) => setFormData(prev => ({ ...prev, functioning: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Descreva reuniões, eventos, comunicação, projetos, etc."
              />
            </div>

            {/* Botões */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                type="submit"
                className="flex-1 px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Cadastrar Rede
              </button>
              <a
                href="/catalogo-redes"
                className="flex-1 px-8 py-4 border-2 border-blue-600 text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors text-center"
              >
                Ver Redes Existentes
              </a>
            </div>
          </form>
        </div>

        {/* Informações adicionais */}
        <div className="mt-12 bg-blue-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-blue-800 mb-4">Próximos Passos</h3>
          <div className="space-y-4 text-blue-700">
            <div className="flex items-start">
              <span className="font-bold mr-2">1.</span>
              <p>Após o envio, nossa equipe fará a validação das informações em até 5 dias úteis</p>
            </div>
            <div className="flex items-start">
              <span className="font-bold mr-2">2.</span>
              <p>Você receberá uma confirmação por email com o status do cadastro</p>
            </div>
            <div className="flex items-start">
              <span className="font-bold mr-2">3.</span>
              <p>Sua rede será incluída no catálogo e poderá participar de eventos e iniciativas conjuntas</p>
            </div>
            <div className="flex items-start">
              <span className="font-bold mr-2">4.</span>
              <p>Acesso a recursos exclusivos, networking e oportunidades de colaboração</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}