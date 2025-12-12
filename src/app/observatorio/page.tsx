'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ObservatorioPage() {
  const [orgaoSelecionado, setOrgaoSelecionado] = useState('federal');

  // Dados simulados para demonstração
  const dadosNacionais = {
    totalMulheres: 52.3,
    totalNegras: 28.7,
    cargosLideranca: 38.2,
    evolucaoAnual: '+4.2%'
  };

  const orgaos = {
    federal: {
      nome: 'Governo Federal',
      mulheres: 48.5,
      negras: 31.2,
      lideranca: 35.8,
      meta2025: 45
    },
    estadual: {
      nome: 'Média Estadual',
      mulheres: 51.2,
      negras: 26.8,
      lideranca: 32.4,
      meta2025: 40
    },
    municipal: {
      nome: 'Média Municipal',
      mulheres: 54.8,
      negras: 29.1,
      lideranca: 28.6,
      meta2025: 38
    }
  };

  const diagnosticos = [
    {
      titulo: 'Funil de Progressão',
      descricao: 'Análise da trajetória de mulheres e pessoas negras entre níveis hierárquicos',
      status: 'disponivel',
      icon: '📊'
    },
    {
      titulo: 'Mapa de Disparidades',
      descricao: 'Visualização georreferenciada das desigualdades por região e órgão',
      status: 'disponivel',
      icon: '🗺️'
    },
    {
      titulo: 'Série Histórica',
      descricao: 'Evolução temporal dos indicadores de paridade desde 2015',
      status: 'disponivel',
      icon: '📈'
    },
    {
      titulo: 'Benchmarking Institucional',
      descricao: 'Comparativo entre órgãos similares com melhores práticas',
      status: 'em_breve',
      icon: '🎯'
    }
  ];

  const relatorios = [
    { nome: 'Panorama Nacional 2024', tipo: 'PDF', tamanho: '2.4 MB' },
    { nome: 'Indicadores por UF', tipo: 'Excel', tamanho: '1.8 MB' },
    { nome: 'Recomendações Técnicas', tipo: 'PDF', tamanho: '890 KB' },
    { nome: 'Metodologia de Coleta', tipo: 'PDF', tamanho: '1.2 MB' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="bg-slate-900/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                <span className="text-slate-900 font-bold">MQT</span>
              </div>
              <div>
                <h1 className="text-white font-bold">Observatório de Paridade</h1>
                <p className="text-slate-400 text-xs">Mulheres que Transformam</p>
              </div>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#painel" className="text-slate-300 hover:text-yellow-400 transition-colors text-sm">Painel</a>
              <a href="#diagnosticos" className="text-slate-300 hover:text-yellow-400 transition-colors text-sm">Diagnósticos</a>
              <a href="#relatorios" className="text-slate-300 hover:text-yellow-400 transition-colors text-sm">Relatórios</a>
              <a href="#metas" className="text-slate-300 hover:text-yellow-400 transition-colors text-sm">Metas</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Eixo Técnico-Operacional do Projeto
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Observatório de Paridade
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Evidências confiáveis e atualizadas sobre a presença de mulheres e pessoas negras
            nos cargos de liderança, induzindo pactuações institucionais que transformam
            desigualdade em compromisso.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#painel" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold py-3 px-8 rounded-full transition-all hover:scale-105">
              Explorar Dados
            </a>
            <a href="#diagnosticos" className="border border-slate-500 hover:border-yellow-500 text-white font-medium py-3 px-8 rounded-full transition-all hover:scale-105">
              Ver Diagnósticos
            </a>
          </div>
        </div>
      </section>

      {/* Painel Nacional */}
      <section id="painel" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Painel Nacional</h2>
            <p className="text-slate-400">Indicadores consolidados do cenário brasileiro</p>
          </div>

          {/* Cards de Indicadores */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 border border-purple-500/30 rounded-2xl p-6">
              <div className="text-purple-400 text-sm font-medium mb-2">Mulheres no Serviço Público</div>
              <div className="text-4xl font-bold text-white mb-1">{dadosNacionais.totalMulheres}%</div>
              <div className="text-green-400 text-sm">{dadosNacionais.evolucaoAnual} vs 2023</div>
            </div>
            <div className="bg-gradient-to-br from-amber-600/20 to-amber-800/20 border border-amber-500/30 rounded-2xl p-6">
              <div className="text-amber-400 text-sm font-medium mb-2">Mulheres Negras</div>
              <div className="text-4xl font-bold text-white mb-1">{dadosNacionais.totalNegras}%</div>
              <div className="text-slate-400 text-sm">do total de servidoras</div>
            </div>
            <div className="bg-gradient-to-br from-cyan-600/20 to-cyan-800/20 border border-cyan-500/30 rounded-2xl p-6">
              <div className="text-cyan-400 text-sm font-medium mb-2">Cargos de Liderança</div>
              <div className="text-4xl font-bold text-white mb-1">{dadosNacionais.cargosLideranca}%</div>
              <div className="text-slate-400 text-sm">ocupados por mulheres</div>
            </div>
            <div className="bg-gradient-to-br from-emerald-600/20 to-emerald-800/20 border border-emerald-500/30 rounded-2xl p-6">
              <div className="text-emerald-400 text-sm font-medium mb-2">Órgãos Monitorados</div>
              <div className="text-4xl font-bold text-white mb-1">247</div>
              <div className="text-slate-400 text-sm">em todo o Brasil</div>
            </div>
          </div>

          {/* Comparativo por Esfera */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
            <div className="flex flex-wrap gap-4 mb-8">
              {Object.entries(orgaos).map(([key, orgao]) => (
                <button
                  key={key}
                  onClick={() => setOrgaoSelecionado(key)}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    orgaoSelecionado === key
                      ? 'bg-yellow-500 text-slate-900'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  {orgao.nome}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-slate-400 text-sm mb-2">Mulheres no Quadro</div>
                <div className="flex items-end gap-4">
                  <div className="text-3xl font-bold text-white">
                    {orgaos[orgaoSelecionado as keyof typeof orgaos].mulheres}%
                  </div>
                  <div className="flex-1 bg-slate-700 rounded-full h-4 overflow-hidden">
                    <div
                      className="bg-purple-500 h-full rounded-full transition-all duration-500"
                      style={{ width: `${orgaos[orgaoSelecionado as keyof typeof orgaos].mulheres}%` }}
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="text-slate-400 text-sm mb-2">Mulheres Negras</div>
                <div className="flex items-end gap-4">
                  <div className="text-3xl font-bold text-white">
                    {orgaos[orgaoSelecionado as keyof typeof orgaos].negras}%
                  </div>
                  <div className="flex-1 bg-slate-700 rounded-full h-4 overflow-hidden">
                    <div
                      className="bg-amber-500 h-full rounded-full transition-all duration-500"
                      style={{ width: `${orgaos[orgaoSelecionado as keyof typeof orgaos].negras}%` }}
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="text-slate-400 text-sm mb-2">Em Cargos de Liderança</div>
                <div className="flex items-end gap-4">
                  <div className="text-3xl font-bold text-white">
                    {orgaos[orgaoSelecionado as keyof typeof orgaos].lideranca}%
                  </div>
                  <div className="flex-1 bg-slate-700 rounded-full h-4 overflow-hidden">
                    <div
                      className="bg-cyan-500 h-full rounded-full transition-all duration-500"
                      style={{ width: `${orgaos[orgaoSelecionado as keyof typeof orgaos].lideranca}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-700">
              <div className="flex items-center justify-between">
                <div className="text-slate-400">
                  <span className="text-yellow-400 font-medium">Meta 2025:</span> {orgaos[orgaoSelecionado as keyof typeof orgaos].meta2025}% de mulheres em liderança
                </div>
                <div className="text-sm text-slate-500">
                  Dados atualizados em Dezembro/2024
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnósticos */}
      <section id="diagnosticos" className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Diagnósticos e Estudos</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Análises aprofundadas que orientam políticas e decisões estratégicas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {diagnosticos.map((diag, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-yellow-500/50 transition-all group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-yellow-500/20 rounded-xl flex items-center justify-center text-2xl group-hover:bg-yellow-500/30 transition-colors">
                    {diag.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-white">{diag.titulo}</h3>
                      {diag.status === 'em_breve' && (
                        <span className="bg-slate-600 text-slate-300 text-xs px-2 py-1 rounded-full">Em breve</span>
                      )}
                    </div>
                    <p className="text-slate-400">{diag.descricao}</p>
                  </div>
                  <div className="text-slate-500 group-hover:text-yellow-400 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recorte do Órgão */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-yellow-500/10 to-amber-500/10 border border-yellow-500/30 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Para Órgãos Aderentes
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Seu Recorte Específico
                </h2>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Cada órgão que aderir ao projeto terá acesso a um recorte específico de seus dados
                  no painel geral, permitindo comparar seus resultados com as estatísticas nacionais
                  e seus próprios indicadores internos.
                </p>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Dashboard personalizado do órgão
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Comparativo com médias nacionais
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Acompanhamento de metas pactuadas
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Relatórios exclusivos de evolução
                  </li>
                </ul>
              </div>
              <div className="bg-slate-800/80 border border-slate-600 rounded-xl p-6">
                <div className="text-center text-slate-400 mb-4">Prévia do Painel do Órgão</div>
                <div className="space-y-4">
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <div className="text-xs text-slate-400 mb-1">Seu Órgão</div>
                    <div className="flex items-center justify-between">
                      <span className="text-white font-medium">Mulheres em Liderança</span>
                      <span className="text-2xl font-bold text-yellow-400">42%</span>
                    </div>
                    <div className="bg-slate-600 rounded-full h-2 mt-2">
                      <div className="bg-yellow-500 h-full rounded-full" style={{ width: '42%' }} />
                    </div>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <div className="text-xs text-slate-400 mb-1">Média Nacional</div>
                    <div className="flex items-center justify-between">
                      <span className="text-white font-medium">Mulheres em Liderança</span>
                      <span className="text-2xl font-bold text-purple-400">38%</span>
                    </div>
                    <div className="bg-slate-600 rounded-full h-2 mt-2">
                      <div className="bg-purple-500 h-full rounded-full" style={{ width: '38%' }} />
                    </div>
                  </div>
                  <div className="text-center pt-4">
                    <span className="inline-flex items-center gap-2 text-green-400 text-sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                      </svg>
                      4% acima da média nacional
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Relatórios */}
      <section id="relatorios" className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Relatórios Técnicos</h2>
            <p className="text-slate-400">Documentos acessíveis com recomendações práticas</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatorios.map((rel, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 hover:border-yellow-500/50 transition-all cursor-pointer group"
              >
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-500/30 transition-colors">
                  <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-medium text-white mb-1">{rel.nome}</h3>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <span>{rel.tipo}</span>
                  <span>•</span>
                  <span>{rel.tamanho}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pactuação de Metas */}
      <section id="metas" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Pactuação de Metas</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Subsídios para compromissos institucionais baseados em evidências
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📋</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Diagnóstico Inicial</h3>
              <p className="text-slate-400">
                Levantamento completo da situação atual do órgão com indicadores de gênero e raça
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Definição de Metas</h3>
              <p className="text-slate-400">
                Estabelecimento de objetivos realistas e mensuráveis para avanço da paridade
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📈</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Monitoramento</h3>
              <p className="text-slate-400">
                Acompanhamento contínuo do progresso com relatórios periódicos de evolução
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Una-se ao compromisso pela paridade
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            O Observatório de Paridade é a base única para orientar políticas e decisões
            que transformam o cenário institucional brasileiro.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/orgaos-participantes"
              className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold py-4 px-8 rounded-full transition-all hover:scale-105"
            >
              Aderir ao Projeto
            </Link>
            <Link
              href="/"
              className="border border-slate-500 hover:border-white text-white font-medium py-4 px-8 rounded-full transition-all"
            >
              Conhecer o Programa
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-slate-400 text-sm">
          <p>Observatório de Paridade — Mulheres que Transformam</p>
          <p className="mt-2">Uma iniciativa para transformar desigualdade em compromisso institucional</p>
        </div>
      </footer>
    </div>
  );
}
