'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from '@/components/motion/Reveal';
import MagneticButton from '@/components/motion/MagneticButton';

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
      titulo: 'Funil de Progressao',
      descricao: 'Analise da trajetoria de mulheres e pessoas negras entre niveis hierarquicos',
      status: 'disponivel',
      icon: '📊'
    },
    {
      titulo: 'Mapa de Disparidades',
      descricao: 'Visualizacao georreferenciada das desigualdades por regiao e orgao',
      status: 'disponivel',
      icon: '🗺️'
    },
    {
      titulo: 'Serie Historica',
      descricao: 'Evolucao temporal dos indicadores de paridade desde 2015',
      status: 'disponivel',
      icon: '📈'
    },
    {
      titulo: 'Benchmarking Institucional',
      descricao: 'Comparativo entre orgaos similares com melhores praticas',
      status: 'em_breve',
      icon: '🎯'
    }
  ];

  const relatorios = [
    { nome: 'Panorama Nacional 2024', tipo: 'PDF', tamanho: '2.4 MB' },
    { nome: 'Indicadores por UF', tipo: 'Excel', tamanho: '1.8 MB' },
    { nome: 'Recomendacoes Tecnicas', tipo: 'PDF', tamanho: '890 KB' },
    { nome: 'Metodologia de Coleta', tipo: 'PDF', tamanho: '1.2 MB' }
  ];

  const indicadores = [
    { label: 'Mulheres no Servico Publico', valor: dadosNacionais.totalMulheres, extra: `${dadosNacionais.evolucaoAnual} vs 2023`, extraColor: 'text-green-400', gradient: 'from-purple-600/20 to-purple-800/20', border: 'border-purple-500/30', labelColor: 'text-purple-400' },
    { label: 'Mulheres Negras', valor: dadosNacionais.totalNegras, extra: 'do total de servidoras', extraColor: 'text-slate-400', gradient: 'from-amber-600/20 to-amber-800/20', border: 'border-amber-500/30', labelColor: 'text-amber-400' },
    { label: 'Cargos de Lideranca', valor: dadosNacionais.cargosLideranca, extra: 'ocupados por mulheres', extraColor: 'text-slate-400', gradient: 'from-cyan-600/20 to-cyan-800/20', border: 'border-cyan-500/30', labelColor: 'text-cyan-400' },
    { label: 'Orgaos Monitorados', valor: 247, extra: 'em todo o Brasil', extraColor: 'text-slate-400', gradient: 'from-emerald-600/20 to-emerald-800/20', border: 'border-emerald-500/30', labelColor: 'text-emerald-400', noPercent: true },
  ];

  const orgaoAtual = orgaos[orgaoSelecionado as keyof typeof orgaos];

  const barras = [
    { label: 'Mulheres no Quadro', valor: orgaoAtual.mulheres, color: 'bg-purple-500' },
    { label: 'Mulheres Negras', valor: orgaoAtual.negras, color: 'bg-amber-500' },
    { label: 'Em Cargos de Lideranca', valor: orgaoAtual.lideranca, color: 'bg-cyan-500' },
  ];

  return (
    <div>
      {/* Header */}
      <header className="bg-slate-900/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                <span className="text-slate-900 font-bold">MQT</span>
              </div>
              <div>
                <h1 className="text-white font-bold">Observatorio de Paridade</h1>
                <p className="text-slate-400 text-xs">Mulheres que Transformam</p>
              </div>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#painel" className="text-slate-300 hover:text-yellow-400 transition-colors text-sm">Painel</a>
              <a href="#diagnosticos" className="text-slate-300 hover:text-yellow-400 transition-colors text-sm">Diagnosticos</a>
              <a href="#relatorios" className="text-slate-300 hover:text-yellow-400 transition-colors text-sm">Relatorios</a>
              <a href="#metas" className="text-slate-300 hover:text-yellow-400 transition-colors text-sm">Metas</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <Reveal>
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              Eixo Tecnico-Operacional do Projeto
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Observatorio de Paridade
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Evidencias confiaveis e atualizadas sobre a presenca de mulheres e pessoas negras
              nos cargos de lideranca, induzindo pactuacoes institucionais que transformam
              desigualdade em compromisso.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <MagneticButton className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold py-3 px-8 rounded-full transition-colors">
                <a href="#painel">Explorar Dados</a>
              </MagneticButton>
              <MagneticButton className="border border-slate-500 hover:border-yellow-500 text-white font-medium py-3 px-8 rounded-full transition-colors">
                <a href="#diagnosticos">Ver Diagnosticos</a>
              </MagneticButton>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Painel Nacional */}
      <section id="painel" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Painel Nacional</h2>
              <p className="text-slate-400">Indicadores consolidados do cenario brasileiro</p>
            </div>
          </Reveal>

          {/* Cards de Indicadores — staggered reveal */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {indicadores.map((ind, i) => (
              <Reveal key={ind.label} delay={i * 0.08}>
                <div className={`bg-gradient-to-br ${ind.gradient} border ${ind.border} rounded-2xl p-6`}>
                  <div className={`${ind.labelColor} text-sm font-medium mb-2`}>{ind.label}</div>
                  <div className="text-4xl font-bold text-white mb-1">
                    {ind.valor}{ind.noPercent ? '' : '%'}
                  </div>
                  <div className={`${ind.extraColor} text-sm`}>{ind.extra}</div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Comparativo por Esfera */}
          <Reveal delay={0.1}>
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
                <AnimatePresence mode="wait">
                  {barras.map((barra) => (
                    <motion.div
                      key={`${orgaoSelecionado}-${barra.label}`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.35 }}
                    >
                      <div className="text-slate-400 text-sm mb-2">{barra.label}</div>
                      <div className="flex items-end gap-4">
                        <div className="text-3xl font-bold text-white">
                          {barra.valor}%
                        </div>
                        <div className="flex-1 bg-slate-700 rounded-full h-4 overflow-hidden">
                          <motion.div
                            className={`${barra.color} h-full rounded-full`}
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.7, delay: 0.08 }}
                            style={{ originX: 0, width: `${barra.valor}%` }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-700">
                <div className="flex items-center justify-between">
                  <div className="text-slate-400">
                    <span className="text-yellow-400 font-medium">Meta 2025:</span> {orgaoAtual.meta2025}% de mulheres em lideranca
                  </div>
                  <div className="text-sm text-slate-500">
                    Dados atualizados em Dezembro/2024
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Diagnosticos */}
      <section id="diagnosticos" className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Diagnosticos e Estudos</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Analises aprofundadas que orientam politicas e decisoes estrategicas
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {diagnosticos.map((diag, index) => (
              <Reveal key={index} delay={index * 0.06}>
                <motion.div
                  className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-yellow-500/50 transition-colors group cursor-pointer"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
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
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Recorte do Orgao */}
      <Reveal>
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-yellow-500/10 to-amber-500/10 border border-yellow-500/30 rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-block bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-medium mb-4">
                    Para Orgaos Aderentes
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Seu Recorte Especifico
                  </h2>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    Cada orgao que aderir ao projeto tera acesso a um recorte especifico de seus dados
                    no painel geral, permitindo comparar seus resultados com as estatisticas nacionais
                    e seus proprios indicadores internos.
                  </p>
                  <ul className="space-y-3 text-slate-300">
                    {[
                      'Dashboard personalizado do orgao',
                      'Comparativo com medias nacionais',
                      'Acompanhamento de metas pactuadas',
                      'Relatorios exclusivos de evolucao',
                    ].map((item, i) => (
                      <Reveal key={i} delay={i * 0.05} y={10}>
                        <li className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          {item}
                        </li>
                      </Reveal>
                    ))}
                  </ul>
                </div>
                <div className="bg-slate-800/80 border border-slate-600 rounded-xl p-6">
                  <div className="text-center text-slate-400 mb-4">Previa do Painel do Orgao</div>
                  <div className="space-y-4">
                    <div className="bg-slate-700/50 rounded-lg p-4">
                      <div className="text-xs text-slate-400 mb-1">Seu Orgao</div>
                      <div className="flex items-center justify-between">
                        <span className="text-white font-medium">Mulheres em Lideranca</span>
                        <span className="text-2xl font-bold text-yellow-400">42%</span>
                      </div>
                      <div className="bg-slate-600 rounded-full h-2 mt-2">
                        <motion.div
                          className="bg-yellow-500 h-full rounded-full"
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          style={{ originX: 0, width: '42%' }}
                        />
                      </div>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-4">
                      <div className="text-xs text-slate-400 mb-1">Media Nacional</div>
                      <div className="flex items-center justify-between">
                        <span className="text-white font-medium">Mulheres em Lideranca</span>
                        <span className="text-2xl font-bold text-purple-400">38%</span>
                      </div>
                      <div className="bg-slate-600 rounded-full h-2 mt-2">
                        <motion.div
                          className="bg-purple-500 h-full rounded-full"
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.35 }}
                          style={{ originX: 0, width: '38%' }}
                        />
                      </div>
                    </div>
                    <div className="text-center pt-4">
                      <span className="inline-flex items-center gap-2 text-green-400 text-sm">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                        4% acima da media nacional
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Relatorios */}
      <section id="relatorios" className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Relatorios Tecnicos</h2>
              <p className="text-slate-400">Documentos acessiveis com recomendacoes praticas</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatorios.map((rel, index) => (
              <Reveal key={index} delay={index * 0.06}>
                <motion.div
                  className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 hover:border-yellow-500/50 transition-colors cursor-pointer group"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
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
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pactuacao de Metas */}
      <section id="metas" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Pactuacao de Metas</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Subsidios para compromissos institucionais baseados em evidencias
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '📋', title: 'Diagnostico Inicial', desc: 'Levantamento completo da situacao atual do orgao com indicadores de genero e raca', gradient: 'from-purple-500 to-purple-700' },
              { icon: '🎯', title: 'Definicao de Metas', desc: 'Estabelecimento de objetivos realistas e mensuraveis para avanco da paridade', gradient: 'from-yellow-500 to-amber-600' },
              { icon: '📈', title: 'Monitoramento', desc: 'Acompanhamento continuo do progresso com relatorios periodicos de evolucao', gradient: 'from-emerald-500 to-emerald-700' },
            ].map((meta, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="text-center">
                  <div className={`w-20 h-20 bg-gradient-to-br ${meta.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-3xl">{meta.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{meta.title}</h3>
                  <p className="text-slate-400">{meta.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <Reveal>
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Una-se ao compromisso pela paridade
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              O Observatorio de Paridade e a base unica para orientar politicas e decisoes
              que transformam o cenario institucional brasileiro.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <MagneticButton className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold py-4 px-8 rounded-full transition-colors">
                <Link href="/orgaos-participantes">Aderir ao Projeto</Link>
              </MagneticButton>
              <MagneticButton className="border border-slate-500 hover:border-white text-white font-medium py-4 px-8 rounded-full transition-colors">
                <Link href="/">Conhecer o Programa</Link>
              </MagneticButton>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Footer */}
      <footer className="border-t border-slate-700 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-slate-400 text-sm">
          <p>Observatorio de Paridade — Mulheres que Transformam</p>
          <p className="mt-2">Uma iniciativa para transformar desigualdade em compromisso institucional</p>
        </div>
      </footer>
    </div>
  );
}
