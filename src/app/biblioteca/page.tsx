'use client';

import { useState } from 'react';
import { documentosBiblioteca, tiposDocumento } from '@/data/biblioteca';

export default function BibliotecaPage() {
  const [filtroTipo, setFiltroTipo] = useState<string>('todos');
  const [termoBusca, setTermoBusca] = useState<string>('');

  const documentosFiltrados = documentosBiblioteca.filter(doc => {
    const matchTipo = filtroTipo === 'todos' || doc.tipo === filtroTipo;
    const matchBusca = termoBusca === '' || 
      doc.titulo.toLowerCase().includes(termoBusca.toLowerCase()) ||
      doc.descricao.toLowerCase().includes(termoBusca.toLowerCase()) ||
      doc.tags.some(tag => tag.toLowerCase().includes(termoBusca.toLowerCase()));
    
    return matchTipo && matchBusca;
  });

  const getIconeTipo = (tipo: string) => {
    switch (tipo) {
      case 'relatorio': return '📊';
      case 'materia': return '📰';
      case 'legislacao': return '⚖️';
      default: return '📄';
    }
  };

  const getCorTipo = (tipo: string) => {
    switch (tipo) {
      case 'relatorio': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'materia': return 'bg-green-100 text-green-800 border-green-200';
      case 'legislacao': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#1351B4] mb-4 flex items-center justify-center gap-3">
              📚 Biblioteca Digital
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Acervo completo de relatórios, matérias publicadas e legislação relacionada ao programa Mulheres que Transformam
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filtros e Busca */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Filtros por tipo */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Filtrar por Categoria</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {tiposDocumento.map(tipo => (
                  <button
                    key={tipo.key}
                    onClick={() => setFiltroTipo(tipo.key)}
                    className={`p-3 rounded-lg border-2 transition-all duration-200 text-sm font-medium ${
                      filtroTipo === tipo.key
                        ? 'border-[#1351B4] bg-[#1351B4] text-white'
                        : 'border-gray-200 hover:border-[#1351B4] hover:bg-blue-50'
                    }`}
                  >
                    <div>{tipo.label}</div>
                    <div className="text-xs opacity-80">({tipo.count})</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Busca */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Buscar Documentos</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar por título, descrição ou tags..."
                  value={termoBusca}
                  onChange={(e) => setTermoBusca(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1351B4] focus:border-[#1351B4] outline-none"
                />
                <div className="absolute right-3 top-3 text-gray-400">
                  🔍
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Resultados */}
        <div className="mb-6">
          <p className="text-gray-600">
            <span className="font-semibold">{documentosFiltrados.length}</span> documento{documentosFiltrados.length !== 1 ? 's' : ''} encontrado{documentosFiltrados.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Lista de documentos */}
        <div className="grid gap-6">
          {documentosFiltrados.map(documento => (
            <div
              key={documento.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-[#1351B4]/30"
            >
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">
                    {getIconeTipo(documento.tipo)}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCorTipo(documento.tipo)}`}>
                        {documento.tipo === 'relatorio' ? 'Relatório' : 
                         documento.tipo === 'materia' ? 'Matéria' : 'Legislação'}
                      </span>
                      <span className="text-sm text-gray-500">
                        {documento.dataPublicacao}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {documento.titulo}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {documento.descricao}
                    </p>
                    
                    {documento.autor && (
                      <p className="text-sm text-gray-500 mb-2">
                        <span className="font-medium">Autor:</span> {documento.autor}
                        {documento.orgao && ` - ${documento.orgao}`}
                      </p>
                    )}
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {documento.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <button className="px-4 py-2 bg-[#1351B4] text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                        📖 Visualizar
                      </button>
                      <button className="px-4 py-2 border border-[#1351B4] text-[#1351B4] rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium">
                        📥 Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {documentosFiltrados.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Nenhum documento encontrado
            </h3>
            <p className="text-gray-500">
              Tente ajustar os filtros ou termos de busca
            </p>
          </div>
        )}
      </div>
    </div>
  );
}