'use client';

import { OrgaoAderente } from '@/data/orgaos-aderentes';
import Selo from '@/components/ui/Selo';
import Link from 'next/link';

interface PaginaOrgaoProps {
  orgao: OrgaoAderente;
}

export default function PaginaOrgao({ orgao }: PaginaOrgaoProps) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'aderido': return '✅';
      case 'em-implantacao': return '⚙️';
      case 'em-articulacao': return '🔄';
      default: return '📋';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'aderido': return 'text-green-700 bg-green-50';
      case 'em-implantacao': return 'text-amber-700 bg-amber-50';
      case 'em-articulacao': return 'text-blue-700 bg-blue-50';
      default: return 'text-gray-700 bg-gray-50';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center gap-4 mb-4">
            <Link
              href="/orgaos-participantes"
              className="text-blue-100 hover:text-white flex items-center gap-2 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              Voltar aos Órgãos Participantes
            </Link>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Mulheres que Transformam
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-blue-100">
            {orgao.nome} ({orgao.sigla})
          </h2>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Identificação do Órgão */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">🏛️</span>
            <h2 className="text-2xl font-bold text-gray-900">Identificação do Órgão</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <span className="font-semibold text-gray-700">Órgão:</span>
                <p className="text-gray-900">{orgao.nome} ({orgao.sigla})</p>
              </div>
              <div>
                <span className="font-semibold text-gray-700">Ponto Focal:</span>
                <p className="text-gray-900">{orgao.pontoFocal.nome} ({orgao.pontoFocal.cargo})</p>
              </div>
              <div>
                <span className="font-semibold text-gray-700">Nível Federativo:</span>
                <p className="text-gray-900 capitalize">
                  {orgao.tipo === 'federal' ? 'Administração Pública Federal' : 
                   orgao.tipo === 'estadual' ? 'Administração Pública Estadual' :
                   orgao.tipo === 'municipal' ? 'Administração Pública Municipal' :
                   orgao.tipo === 'controle' ? 'Órgão de Controle' :
                   'Escola de Governo'}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <span className="font-semibold text-gray-700">Adesão à Rede:</span>
                <p className="text-gray-900">
                  {new Date(orgao.dataAdesao).toLocaleDateString('pt-BR', { 
                    year: 'numeric', 
                    month: 'long' 
                  })}
                </p>
              </div>
              <div>
                <span className="font-semibold text-gray-700">Selo:</span>
                <div className="mt-2">
                  <Selo nivel={orgao.nivel} />
                </div>
              </div>
              {orgao.website && (
                <div>
                  <span className="font-semibold text-gray-700">Website:</span>
                  <p>
                    <a 
                      href={orgao.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      {orgao.website}
                    </a>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Observatório */}
        {orgao.observatorio && (
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🔍</span>
              <h2 className="text-2xl font-bold text-gray-900">{orgao.observatorio.nome}</h2>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">
              {orgao.observatorio.descricao}
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-4">Objetivos:</h3>
                <ul className="space-y-3">
                  {orgao.observatorio.objetivos.map((objetivo, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold">•</span>
                      <span className="text-gray-700">{objetivo}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-4">Primeiras entregas (2025-2026):</h3>
                <ul className="space-y-3">
                  {orgao.observatorio.entregas.map((entrega, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-green-600 font-bold">✓</span>
                      <span className="text-gray-700">{entrega}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Plano de Ação */}
        {orgao.planoAcao && (
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🗺️</span>
              <h2 className="text-2xl font-bold text-gray-900">
                Plano de Ação do {orgao.sigla} na Rede Conecta Mulheres que Transformam
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-4 font-bold text-gray-900">Módulo</th>
                    <th className="text-left py-3 px-4 font-bold text-gray-900">Status</th>
                    <th className="text-left py-3 px-4 font-bold text-gray-900">Observações</th>
                  </tr>
                </thead>
                <tbody>
                  {orgao.planoAcao.map((item, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium text-gray-900">{item.modulo}</td>
                      <td className="py-3 px-4">
                        <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(item.status)}`}>
                          {getStatusIcon(item.status)}
                          {item.status === 'aderido' ? 'Aderido' :
                           item.status === 'em-implantacao' ? 'Em implantação' :
                           'Em articulação'}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-gray-700">{item.observacoes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Programas Internos */}
        {orgao.programasInternos && (
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">💼</span>
              <h2 className="text-2xl font-bold text-gray-900">
                Programas Internos do {orgao.nome}
              </h2>
            </div>

            <div className="space-y-8">
              {orgao.programasInternos.map((programa, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{programa.nome}</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">{programa.descricao}</p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Metas:</h4>
                    <ul className="space-y-2">
                      {programa.metas.map((meta, metaIndex) => (
                        <li key={metaIndex} className="flex items-start gap-3">
                          <span className="text-blue-600 font-bold">→</span>
                          <span className="text-gray-700">{meta}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Políticas para Sociedade Civil */}
        {orgao.politicasSociedade && (
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🌎</span>
              <h2 className="text-2xl font-bold text-gray-900">
                Políticas do {orgao.nome} para a Sociedade Civil no Eixo de Gênero
              </h2>
            </div>

            <p className="text-gray-700 mb-6">
              O {orgao.nome} também atua na promoção da igualdade de gênero em suas políticas públicas voltadas à sociedade.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-4 font-bold text-gray-900">Iniciativa</th>
                    <th className="text-left py-3 px-4 font-bold text-gray-900">O que é / finalidade</th>
                    <th className="text-left py-3 px-4 font-bold text-gray-900">Comentários relevantes</th>
                    <th className="text-left py-3 px-4 font-bold text-gray-900">Link</th>
                  </tr>
                </thead>
                <tbody>
                  {orgao.politicasSociedade.map((politica, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium text-gray-900">{politica.nome}</td>
                      <td className="py-3 px-4 text-gray-700">{politica.descricao}</td>
                      <td className="py-3 px-4 text-gray-700">{politica.comentarios}</td>
                      <td className="py-3 px-4">
                        {politica.link && (
                          <a
                            href={politica.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 underline"
                          >
                            Acessar
                          </a>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Monitoramento e Avaliação */}
        {orgao.indicadores && (
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">📈</span>
              <h2 className="text-2xl font-bold text-gray-900">Monitoramento e Avaliação</h2>
            </div>

            <p className="text-gray-700 mb-6">
              O {orgao.sigla} monitorará seus compromissos de forma integrada ao sistema da Rede Conecta Mulheres que Transformam, 
              com indicadores próprios e relatórios anuais públicos:
            </p>

            <ul className="space-y-3">
              {orgao.indicadores.map((indicador, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">📊</span>
                  <div>
                    <span className="font-semibold text-gray-900">{indicador.nome}</span>
                    {indicador.descricao && (
                      <p className="text-gray-700 mt-1">{indicador.descricao}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Parcerias Estratégicas */}
        {orgao.parcerias && (
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🤝</span>
              <h2 className="text-2xl font-bold text-gray-900">Parcerias Estratégicas</h2>
            </div>

            <ul className="space-y-3">
              {orgao.parcerias.map((parceria, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-gray-700">{parceria}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Contato Institucional */}
        {orgao.contato && (
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">📬</span>
              <h2 className="text-2xl font-bold text-gray-900">Contato Institucional</h2>
            </div>

            <div className="space-y-3">
              <p className="text-gray-900 font-semibold">{orgao.contato.coordenacao}</p>
              <p className="text-gray-700">
                📧 <a href={`mailto:${orgao.contato.email}`} className="text-blue-600 hover:text-blue-800 underline">
                  {orgao.contato.email}
                </a>
              </p>
              <p className="text-gray-700">
                📍 {orgao.contato.endereco}
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-blue-200">
              <p className="text-sm text-gray-600">
                📅 <strong>Última atualização:</strong> Outubro de 2025
              </p>
              <p className="text-sm text-gray-600">
                <strong>Situação:</strong> Plano em fase de execução inicial
              </p>
              <p className="text-sm text-gray-600">
                <strong>Responsável pela página:</strong> Rede Conecta Mulheres que Transformam / MGI
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}