'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { orgaosAderentes, estatisticasAdesao } from '@/data/orgaos-aderentes';
import Selo from '@/components/ui/Selo';

type Nucleo = 'federal' | 'federativo' | 'local';

// Mapa de cores estático para Tailwind (JIT precisa de classes completas)
const colorMap = {
  blue: {
    border: 'border-blue-500',
    borderActive: 'border-blue-500',
    bg: 'bg-blue-50',
    text: 'text-blue-700',
    textMedium: 'text-blue-600',
  },
  green: {
    border: 'border-green-500',
    borderActive: 'border-green-500',
    bg: 'bg-green-50',
    text: 'text-green-700',
    textMedium: 'text-green-600',
  },
  purple: {
    border: 'border-purple-500',
    borderActive: 'border-purple-500',
    bg: 'bg-purple-50',
    text: 'text-purple-700',
    textMedium: 'text-purple-600',
  },
} as const;

export default function DashboardPrincipal() {
  const [isVisible, setIsVisible] = useState(false);
  const [nucleoAtivo, setNucleoAtivo] = useState<Nucleo>('federal');
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

  // Organizando órgãos por núcleo
  const nucleos = {
    federal: {
      titulo: 'Núcleo Federal',
      icone: '🏛️',
      cor: 'blue',
      descricao: 'Ministérios, autarquias e entidades federais',
      orgaos: orgaosAderentes.filter(o => o.tipo === 'federal' || o.tipo === 'controle' || o.tipo === 'escola-governo')
    },
    federativo: {
      titulo: 'Núcleo Federativo',
      icone: '🗺️', 
      cor: 'green',
      descricao: 'Estados, DF e secretarias estaduais',
      orgaos: orgaosAderentes.filter(o => o.tipo === 'estadual')
    },
    local: {
      titulo: 'Núcleo Local',
      icone: '🏢',
      cor: 'purple',
      descricao: 'Municípios e prefeituras',
      orgaos: orgaosAderentes.filter(o => o.tipo === 'municipal')
    }
  };

  const nucleoSelecionado = nucleos[nucleoAtivo];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              O Poder da
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
              Transformação
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Cada órgão que faz parte dessa rede se compromete em buscar o aumento da participação feminina 
            nos espaços de poder. Quando mulheres lideram, políticas públicas se tornam mais inclusivas, 
            representativas e eficazes para toda a sociedade.
          </p>
          
          {/* Indicadores de Impacto */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-blue-500">
              <div className="text-4xl font-bold text-blue-600 mb-2">51%</div>
              <div className="text-gray-800 font-semibold mb-2">Das mulheres brasileiras</div>
              <div className="text-gray-600 text-sm">Representam a maioria da população, mas apenas 27% ocupam cargos de liderança no governo</div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-purple-500">
              <div className="text-4xl font-bold text-purple-600 mb-2">90%</div>
              <div className="text-gray-800 font-semibold mb-2">Acreditam no potencial</div>
              <div className="text-gray-600 text-sm">Da população brasileira acredita que mais mulheres na liderança melhoraria o serviço público</div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-cyan-500">
              <div className="text-4xl font-bold text-cyan-600 mb-2">50%</div>
              <div className="text-gray-800 font-semibold mb-2">Nossa meta ambiciosa</div>
              <div className="text-gray-600 text-sm">Alcançar paridade de gênero em cargos de liderança até 2030 - uma revolução silenciosa</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 rounded-3xl p-8 text-white max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Compromisso Institucional</h3>
            <p className="text-white/90 leading-relaxed">
              Estudos comprovam que organizações com mais mulheres em posições de liderança apresentam 
              <strong className="text-white"> 25% mais lucratividade</strong>, <strong className="text-white">21% maior rentabilidade</strong> e 
              <strong className="text-white"> políticas mais inclusivas</strong>. No setor público, isso se traduz em serviços mais eficientes 
              e políticas que atendem melhor às necessidades de toda a população.
            </p>
          </div>
        </div>

        {/* Métricas Gerais */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500">
            <div className="text-3xl font-bold text-blue-600 mb-2">{nucleos.federal.orgaos.length}</div>
            <div className="text-gray-600 text-sm">Órgãos Federais</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500">
            <div className="text-3xl font-bold text-green-600 mb-2">{nucleos.federativo.orgaos.length}</div>
            <div className="text-gray-600 text-sm">Estados</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg border-l-4 border-purple-500">
            <div className="text-3xl font-bold text-purple-600 mb-2">{nucleos.local.orgaos.length}</div>
            <div className="text-gray-600 text-sm">Municípios</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg border-l-4 border-indigo-500">
            <div className="text-3xl font-bold text-indigo-600 mb-2">{estatisticasAdesao.total}</div>
            <div className="text-gray-600 text-sm">Total Aderentes</div>
          </div>
        </div>

        {/* Seletor de Núcleos */}
        <div className={`mb-8 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
              Selecione um Núcleo para Explorar
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Object.entries(nucleos).map(([key, nucleo]) => {
                const colors = colorMap[nucleo.cor as keyof typeof colorMap];
                const isActive = nucleoAtivo === key;

                return (
                  <button
                    key={key}
                    onClick={() => setNucleoAtivo(key as Nucleo)}
                    className={`p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                      isActive
                        ? `${colors.borderActive} ${colors.bg}`
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center mb-3">
                      <span className="text-3xl mr-3">{nucleo.icone}</span>
                      <h4 className={`text-xl font-bold ${
                        isActive ? colors.text : 'text-gray-800'
                      }`}>
                        {nucleo.titulo}
                      </h4>
                    </div>
                    <p className={`text-sm ${
                      isActive ? colors.textMedium : 'text-gray-600'
                    }`}>
                      {nucleo.descricao}
                    </p>
                    <div className={`text-2xl font-bold mt-3 ${
                      isActive ? colors.text : 'text-gray-700'
                    }`}>
                      {nucleo.orgaos.length} órgãos
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Detalhes do Núcleo Selecionado */}
        <div className={`transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-8">
              <span className="text-4xl mr-4">{nucleoSelecionado.icone}</span>
              <div>
                <h3 className={`text-3xl font-bold mb-2 ${colorMap[nucleoSelecionado.cor as keyof typeof colorMap].text}`}>
                  {nucleoSelecionado.titulo}
                </h3>
                <p className="text-gray-600">{nucleoSelecionado.descricao}</p>
              </div>
            </div>

            {/* Estrutura de Adesão por Núcleo */}
            {nucleoAtivo === 'federal' && (
              <div className="bg-blue-50 rounded-xl p-6 mb-8">
                <h4 className="text-xl font-bold text-blue-800 mb-4">Como Participar - Núcleo Federal</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-700">
                  <div>
                    <strong>Quem pode aderir:</strong>
                    <ul className="mt-2 space-y-1 ml-4">
                      <li>• Todos os ministérios e autarquias</li>
                      <li>• Órgãos de controle (TCU, CGU, AGU)</li>
                      <li>• Escolas de governo (ENAP, ESAF)</li>
                      <li>• Institutos e fundações (IPEA, IBGE)</li>
                    </ul>
                  </div>
                  <div>
                    <strong>Como aderir:</strong>
                    <ul className="mt-2 space-y-1 ml-4">
                      <li>• Adesão institucional via ofício</li>
                      <li>• Indicação de ponto focal de gênero</li>
                      <li>• Publicação no catálogo oficial</li>
                      <li>• Conexão com eventos e mentorias</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {nucleoAtivo === 'federativo' && (
              <div className="bg-green-50 rounded-xl p-6 mb-8">
                <h4 className="text-xl font-bold text-green-800 mb-4">Como Participar - Núcleo Federativo</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-green-700">
                  <div>
                    <strong>Quem pode aderir:</strong>
                    <ul className="mt-2 space-y-1 ml-4">
                      <li>• Secretarias estaduais de Administração</li>
                      <li>• Secretarias de Mulheres e Igualdade</li>
                      <li>• Escolas de governo estaduais</li>
                      <li>• Redes de inovação (GOINOVA, LabGES)</li>
                    </ul>
                  </div>
                  <div>
                    <strong>Como aderir:</strong>
                    <ul className="mt-2 space-y-1 ml-4">
                      <li>• Adesão via PNGI ou carta de pactuação</li>
                      <li>• Coordenação de rede estadual</li>
                      <li>• Modelo leve e replicável</li>
                      <li>• Cadastramento de sub-redes municipais</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {nucleoAtivo === 'local' && (
              <div className="bg-purple-50 rounded-xl p-6 mb-8">
                <h4 className="text-xl font-bold text-purple-800 mb-4">Como Participar - Núcleo Local</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-purple-700">
                  <div>
                    <strong>Quem pode aderir:</strong>
                    <ul className="mt-2 space-y-1 ml-4">
                      <li>• Prefeituras municipais</li>
                      <li>• Procuradorias municipais</li>
                      <li>• Escolas de governo locais</li>
                      <li>• Redes temáticas municipais</li>
                    </ul>
                  </div>
                  <div>
                    <strong>Como aderir:</strong>
                    <ul className="mt-2 space-y-1 ml-4">
                      <li>• Cadastramento via portal público</li>
                      <li>• Validação pela rede estadual ou MGI</li>
                      <li>• Página no catálogo com dados básicos</li>
                      <li>• Links para plataformas próprias</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Lista de Órgãos do Núcleo */}
            {nucleoSelecionado.orgaos.length > 0 ? (
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-6">
                  Órgãos Aderentes ({nucleoSelecionado.orgaos.length})
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {nucleoSelecionado.orgaos.map((orgao) => (
                    <Link key={orgao.id} href={`/orgao/${orgao.id}`}>
                      <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h5 className="font-bold text-gray-800 mb-2">{orgao.nome}</h5>
                            <Selo nivel={orgao.nivel} size="sm" />
                          </div>
                        </div>
                        
                        <div className="text-sm text-gray-600 mb-3">
                          📍 {orgao.endereco.cidade}, {orgao.endereco.estado}
                        </div>
                        
                        {orgao.redeInterna && (
                          <div className="text-xs text-blue-600">
                            👥 {orgao.redeInterna.nome} ({orgao.redeInterna.membros} membros)
                          </div>
                        )}
                        
                        <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                          <span className="text-xs text-gray-500">
                            Desde {new Date(orgao.dataAdesao).getFullYear()}
                          </span>
                          <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">{nucleoSelecionado.icone}</div>
                <h4 className="text-2xl font-bold text-gray-800 mb-4">
                  Nenhum órgão ainda no {nucleoSelecionado.titulo}
                </h4>
                <p className="text-gray-600 mb-6">
                  Seja o primeiro a aderir e lidere a transformação!
                </p>
                <Link
                  href="/aderir"
                  className={`inline-flex items-center px-6 py-3 bg-${nucleoSelecionado.cor}-600 text-white rounded-lg hover:bg-${nucleoSelecionado.cor}-700 transition-colors`}
                >
                  Solicitar Adesão
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* CTA Institucional */}
        <div className={`mt-16 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{ 
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', 
                backgroundSize: '30px 30px' 
              }}></div>
            </div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-4xl font-bold mb-6">
                Faça parte desta transformação institucional
              </h3>
              <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-4xl mx-auto">
                Seu órgão pode ser protagonista na construção de um serviço público mais representativo e eficaz. 
                Juntos, podemos acelerar a paridade de gênero e construir políticas públicas que atendam melhor 
                às necessidades de toda a população brasileira.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">Compromisso</div>
                  <div className="text-white/80 text-sm">Adesão formal com metas claras</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">Ação</div>
                  <div className="text-white/80 text-sm">Implementação de políticas inclusivas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">Impacto</div>
                  <div className="text-white/80 text-sm">Transformação mensurável até 2030</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/aderir"
                  className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Aderir ao Programa
                </Link>
                <Link
                  href="/como-aderir"
                  className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105"
                >
                  Como Aderir
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}