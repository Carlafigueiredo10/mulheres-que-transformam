// Dados da biblioteca - relatórios, matérias e legislação

export interface DocumentoBiblioteca {
  id: string;
  titulo: string;
  tipo: 'relatorio' | 'materia' | 'legislacao';
  descricao: string;
  dataPublicacao: string;
  autor?: string;
  orgao?: string;
  link?: string;
  arquivo?: string;
  tags: string[];
}

export const documentosBiblioteca: DocumentoBiblioteca[] = [
  // RELATÓRIOS
  {
    id: '1',
    titulo: 'Relatório Anual de Gênero e Raça no Serviço Público Federal - 2024',
    tipo: 'relatorio',
    descricao: 'Análise completa da representatividade de mulheres e pessoas negras nos cargos públicos federais, com dados estatísticos e recomendações.',
    dataPublicacao: '15/03/2024',
    autor: 'Ministério da Gestão e Inovação',
    orgao: 'MGI',
    tags: ['gênero', 'raça', 'serviço público', 'estatísticas']
  },
  {
    id: '2',
    titulo: 'Diagnóstico de Equidade de Gênero nas Empresas Estatais',
    tipo: 'relatorio',
    descricao: 'Levantamento sobre políticas de equidade de gênero implementadas pelas empresas estatais federais.',
    dataPublicacao: '22/01/2024',
    autor: 'Ministério das Mulheres',
    orgao: 'Ministério das Mulheres',
    tags: ['empresas estatais', 'equidade', 'políticas públicas']
  },
  {
    id: '3',
    titulo: 'Relatório de Acompanhamento das Redes de Mulheres no Governo Federal',
    tipo: 'relatorio',
    descricao: 'Mapeamento e análise das redes de mulheres ativas no governo federal, suas ações e impactos.',
    dataPublicacao: '08/11/2024',
    autor: 'Enap - Escola Nacional de Administração Pública',
    orgao: 'ENAP',
    tags: ['redes', 'governo federal', 'impacto social']
  },

  // MATÉRIAS PUBLICADAS
  {
    id: '4',
    titulo: 'Mulheres Negras Líderes: Trajetórias Inspiradoras no Setor Público',
    tipo: 'materia',
    descricao: 'Série de entrevistas com servidoras negras em posições de liderança, destacando suas trajetórias e contribuições.',
    dataPublicacao: '05/09/2024',
    autor: 'Portal Gov.br',
    tags: ['liderança', 'mulheres negras', 'trajetórias', 'inspiração']
  },
  {
    id: '5',
    titulo: 'Programa Mães Servidoras: Conciliando Maternidade e Carreira Pública',
    tipo: 'materia',
    descricao: 'Reportagem sobre iniciativas para apoiar servidoras mães, incluindo licenças, creches e flexibilidade no trabalho.',
    dataPublicacao: '12/05/2024',
    autor: 'Revista Servidor Público',
    tags: ['maternidade', 'conciliação', 'direitos', 'trabalho']
  },
  {
    id: '6',
    titulo: 'Rede Equidade em Ação: Transformando o Ambiente Organizacional',
    tipo: 'materia',
    descricao: 'Cobertura das ações da Rede Equidade e seu impacto na cultura organizacional dos órgãos federais.',
    dataPublicacao: '20/08/2024',
    autor: 'Blog Gestão Pública',
    tags: ['rede equidade', 'cultura organizacional', 'transformação']
  },

  // LEGISLAÇÃO
  {
    id: '7',
    titulo: 'Decreto nº 11.187/2022 - Política Nacional de Equidade de Gênero',
    tipo: 'legislacao',
    descricao: 'Institui a Política Nacional de Equidade de Gênero e Raça na Administração Pública Federal.',
    dataPublicacao: '15/08/2022',
    orgao: 'Casa Civil',
    tags: ['decreto', 'equidade', 'política nacional', 'administração pública']
  },
  {
    id: '8',
    titulo: 'Portaria MGI nº 983/2023 - Diretrizes para Adesão Institucional',
    tipo: 'legislacao',
    descricao: 'Estabelece diretrizes e critérios para adesão dos órgãos ao programa Mulheres que Transformam.',
    dataPublicacao: '10/03/2023',
    orgao: 'MGI',
    tags: ['portaria', 'adesão', 'critérios', 'órgãos públicos']
  },
  {
    id: '9',
    titulo: 'Lei nº 14.457/2022 - Proteção à Mulher no Ambiente de Trabalho',
    tipo: 'legislacao',
    descricao: 'Lei que estabelece medidas de proteção à mulher contra assédio e discriminação no ambiente de trabalho público.',
    dataPublicacao: '22/09/2022',
    orgao: 'Congresso Nacional',
    tags: ['lei', 'proteção', 'assédio', 'discriminação', 'trabalho']
  },
  {
    id: '10',
    titulo: 'Resolução CNJ nº 492/2023 - Equidade de Gênero no Poder Judiciário',
    tipo: 'legislacao',
    descricao: 'Estabelece diretrizes para promoção da equidade de gênero e enfrentamento à violência contra a mulher no âmbito do Poder Judiciário.',
    dataPublicacao: '05/06/2023',
    orgao: 'CNJ',
    tags: ['resolução', 'poder judiciário', 'violência', 'diretrizes']
  },

  // RELATÓRIOS TÉCNICOS ADICIONAIS
  {
    id: '11',
    titulo: 'Estudo sobre Licenças Parentais no Serviço Público Federal',
    tipo: 'relatorio',
    descricao: 'Análise comparativa das políticas de licenças parentais entre diferentes órgãos federais e suas efetividades.',
    dataPublicacao: '30/06/2024',
    autor: 'IPEA - Instituto de Pesquisa Econômica Aplicada',
    orgao: 'IPEA',
    tags: ['licenças parentais', 'políticas públicas', 'análise comparativa']
  },
  {
    id: '12',
    titulo: 'Mapeamento de Boas Práticas em Equidade de Gênero',
    tipo: 'relatorio',
    descricao: 'Compilação das melhores práticas implementadas pelos órgãos federais para promoção da equidade de gênero.',
    dataPublicacao: '18/07/2024',
    autor: 'Ministério das Mulheres',
    orgao: 'Ministério das Mulheres',
    tags: ['boas práticas', 'compilação', 'implementação']
  }
];

export const tiposDocumento = [
  { key: 'todos', label: 'Todos os Documentos', count: documentosBiblioteca.length },
  { key: 'relatorio', label: 'Relatórios', count: documentosBiblioteca.filter(d => d.tipo === 'relatorio').length },
  { key: 'materia', label: 'Matérias Publicadas', count: documentosBiblioteca.filter(d => d.tipo === 'materia').length },
  { key: 'legislacao', label: 'Legislação', count: documentosBiblioteca.filter(d => d.tipo === 'legislacao').length }
];