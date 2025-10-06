'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { orgaosAderentes, estatisticasAdesao, selosInfo, TipoOrgao, SeloNivel } from '@/data/orgaos-aderentes';
import Selo, { SeloDetalhes } from '@/components/ui/Selo';

export default function OrgaosAderentesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [filtroTipo, setFiltroTipo] = useState<TipoOrgao | 'todos'>('todos');
  const [filtroNivel, setFiltroNivel] = useState<SeloNivel | 'todos'>('todos');
  const [seloSelecionado, setSeloSelecionado] = useState<SeloNivel | null>(null);
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

  const orgaosFiltrados = orgaosAderentes.filter(orgao => {
    const matchTipo = filtroTipo === 'todos' || orgao.tipo === filtroTipo;
    const matchNivel = filtroNivel === 'todos' || orgao.nivel === filtroNivel;
    return matchTipo && matchNivel;
  });

  const tiposOrgao = [
    { id: 'todos', nome: 'Todos os Tipos' },
    { id: 'federal', nome: 'Órgãos Federais' },
    { id: 'controle', nome: 'Órgãos de Controle' },
    { id: 'escola-governo', nome: 'Escolas de Governo' },
    { id: 'estadual', nome: 'Estados' },
    { id: 'municipal', nome: 'Municípios' }
  ];

  const getTipoLabel = (tipo: TipoOrgao) => {
    const labels = {
      federal: 'Federal',
      estadual: 'Estadual', 
      municipal: 'Municipal',
      controle: 'Controle',
      'escola-governo': 'Escola Gov.'
    };
    return labels[tipo];
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Órgãos Aderentes
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Instituições comprometidas com a transformação da liderança feminina no serviço público
          </p>
        </div>

        {/* Estatísticas Resumidas */}
        <div className={`grid grid-cols-2 md:grid-cols-5 gap-6 mb-12 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">{estatisticasAdesao.total}</div>
            <div className="text-gray-600 text-sm">Total de Órgãos</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">{estatisticasAdesao.porNivel.participante}</div>
            <div className="text-gray-600 text-sm">🟢 Participantes</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">{estatisticasAdesao.porNivel.ativa}</div>
            <div className="text-gray-600 text-sm">🟣 Ativas</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-yellow-600 mb-2">{estatisticasAdesao.porNivel.inspiradora}</div>
            <div className="text-gray-600 text-sm">🟡 Inspiradoras</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-indigo-600 mb-2">
              {Object.values(estatisticasAdesao.porRegiao).reduce((a, b) => a + b, 0)}
            </div>
            <div className="text-gray-600 text-sm">Regiões Ativas</div>
          </div>
        </div>

        {/* Sistema de Selos */}
        <div className={`mb-12 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white mb-8">
            <h3 className="text-3xl font-bold mb-4 text-center">Sistema de Reconhecimento</h3>
            <p className="text-center text-white/90 mb-8 max-w-3xl mx-auto">
              Cada órgão aderente recebe um selo que reconhece seu nível de implementação e compromisso
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {selosInfo.map((selo) => (
                <button
                  key={selo.nivel}
                  onClick={() => setSeloSelecionado(seloSelecionado === selo.nivel ? null : selo.nivel)}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-left"
                >
                  <div className="flex items-center mb-3">
                    <span className="text-3xl mr-3">{selo.icone}</span>
                    <h4 className="text-xl font-bold">{selo.nome}</h4>
                  </div>
                  <p className="text-white/80 text-sm mb-4">
                    {selo.requisitos[0]}
                  </p>
                  <div className="text-xs text-white/60">
                    Clique para ver detalhes
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Detalhes do Selo Selecionado */}
          {seloSelecionado && (
            <div className="transition-all duration-300">
              <SeloDetalhes nivel={seloSelecionado} />
            </div>
          )}
        </div>

        {/* Filtros */}
        <div className={`mb-8 transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Filtrar por Tipo
                </label>
                <select
                  value={filtroTipo}
                  onChange={(e) => setFiltroTipo(e.target.value as TipoOrgao | 'todos')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  {tiposOrgao.map(tipo => (
                    <option key={tipo.id} value={tipo.id}>{tipo.nome}</option>
                  ))}
                </select>
              </div>

              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Filtrar por Nível de Selo
                </label>
                <select
                  value={filtroNivel}
                  onChange={(e) => setFiltroNivel(e.target.value as SeloNivel | 'todos')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="todos">Todos os Níveis</option>
                  <option value="participante">🟢 Participante</option>
                  <option value="ativa">🟣 Ativa</option>
                  <option value="inspiradora">🟡 Inspiradora</option>
                </select>
              </div>
            </div>

            <div className="mt-4 text-sm text-gray-600">
              Mostrando {orgaosFiltrados.length} de {orgaosAderentes.length} órgãos
            </div>
          </div>
        </div>

        {/* Grid de Órgãos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {orgaosFiltrados.map((orgao, index) => (
            <Link key={orgao.id} href={`/orgao/${orgao.id}`}>
              <div className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 h-full ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
              style={{ transitionDelay: `${500 + index * 100}ms` }}>
                
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 leading-tight">
                      {orgao.nome}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <Selo nivel={orgao.nivel} size="sm" />
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {getTipoLabel(orgao.tipo)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Localização */}
                <div className="mb-4">
                  <div className="text-sm text-gray-600">
                    📍 {orgao.endereco.cidade}, {orgao.endereco.estado}
                  </div>
                  {orgao.redeInterna && (
                    <div className="text-sm text-blue-600 mt-1">
                      👥 {orgao.redeInterna.nome} ({orgao.redeInterna.membros} membros)
                    </div>
                  )}
                </div>

                {/* Ponto Focal */}
                {orgao.pontoFocal.publico && (
                  <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                    <div className="text-sm font-medium text-gray-800">{orgao.pontoFocal.nome}</div>
                    <div className="text-xs text-gray-600">{orgao.pontoFocal.cargo}</div>
                  </div>
                )}

                {/* Iniciativas */}
                {orgao.iniciativas.length > 0 && (
                  <div className="mb-4">
                    <div className="text-sm font-medium text-gray-700 mb-2">Iniciativas:</div>
                    <div className="flex flex-wrap gap-1">
                      {orgao.iniciativas.slice(0, 2).map((iniciativa, idx) => (
                        <span key={idx} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                          {iniciativa}
                        </span>
                      ))}
                      {orgao.iniciativas.length > 2 && (
                        <span className="text-xs text-gray-500">+{orgao.iniciativas.length - 2}</span>
                      )}
                    </div>
                  </div>
                )}

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="text-xs text-gray-500">
                    Desde {new Date(orgao.dataAdesao).getFullYear()}
                  </div>
                  <div className="text-blue-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA para Adesão */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-white rounded-2xl p-12 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Seu órgão ainda não aderiu?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Faça parte da transformação da liderança feminina no serviço público brasileiro
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/aderir"
                className="px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors"
              >
                Solicitar Adesão
              </Link>
              <Link
                href="/como-aderir"
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-bold rounded-full hover:bg-blue-50 transition-colors"
              >
                Como Aderir
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}