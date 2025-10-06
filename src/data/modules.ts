import { Module, NewsItem, Statistic } from '@/types';

export const modules: Module[] = [
  {
    id: 'legitimidade',
    title: 'Legitimidade da Liderança Atual',
    description: 'Fortalecimento simbólico e institucional das mulheres já em posições de liderança, atuando sobre invisibilidade e deslegitimação.',
    icon: '👑',
    path: '/modulos/legitimidade',
    objectives: [
      'Criar mecanismos de reconhecimento público das líderes atuais',
      'Desenvolver estratégias para combater o questionamento constante da competência',
      'Estabelecer protocolos de apoio institucional às mulheres em cargos de liderança',
      'Promover a visibilidade das conquistas e resultados obtidos por líderes mulheres',
      'Implementar ações de fortalecimento da autoridade simbólica',
      'Criar redes de apoio entre mulheres líderes'
    ],
    strategies: [
      'Campanhas de Visibilidade: Destacar as conquistas e liderança feminina em comunicações oficiais',
      'Protocolos de Reunião: Estabelecer normas que garantam participação equitativa em discussões',
      'Mentoria Reversa: Programas onde líderes mulheres compartilham experiências com colegas',
      'Reconhecimento Formal: Cerimônias e premiações que destacam a liderança feminina',
      'Treinamento Organizacional: Capacitação sobre viés inconsciente e liderança inclusiva'
    ],
    indicators: [
      'Aumento da participação feminina em reuniões de alto nível',
      'Redução de interrupções e questionamentos direcionados às líderes mulheres',
      'Maior tempo de fala das mulheres em fóruns decisórios',
      'Aumento na cobertura midiática positiva sobre liderança feminina',
      'Crescimento nas avaliações de satisfação das líderes atuais'
    ]
  },
  {
    id: 'ampliacao',
    title: 'Ampliação da Representação',
    description: 'Foco na superação de barreiras de entrada, com definição de metas e desenho de políticas de nomeação e promoção.',
    icon: '📊',
    path: '/modulos/ampliacao',
    objectives: [
      'Estabelecer metas quantitativas para paridade de gênero em cargos de liderança',
      'Criar políticas estruturadas de nomeação e promoção com perspectiva de gênero',
      'Implementar processos seletivos mais inclusivos e equitativos',
      'Desenvolver bancos de talentos com foco na diversidade de gênero',
      'Monitorar e acompanhar a progressão de carreira das mulheres',
      'Estabelecer critérios objetivos para avaliação de competências de liderança'
    ],
    strategies: [
      'Metas Graduais: Estabelecimento de marcos percentuais anuais até atingir 50% até 2027',
      'Revisão de Processos: Análise e reformulação dos critérios de seleção e nomeação',
      'Banco de Talentos: Identificação proativa de mulheres qualificadas em todos os órgãos',
      'Comitês de Diversidade: Criação de grupos para acompanhar nomeações e promoções',
      'Transparência: Publicação regular de dados sobre representatividade por órgão'
    ],
    indicators: [
      'Percentual de mulheres nomeadas para cargos de natureza especial',
      'Tempo médio para promoção por gênero em cada órgão',
      'Diversidade de perfis nos processos seletivos',
      'Número de mulheres no banco de talentos por área',
      'Taxa de permanência em cargos de liderança por gênero'
    ],
    barriers: [
      'Redes Informais: Acesso limitado às redes de indicação e influência',
      'Critérios Subjetivos: Processos baseados em afinidade pessoal ou política',
      'Falta de Visibilidade: Mulheres qualificadas não identificadas pelos tomadores de decisão',
      'Viés Inconsciente: Preferência automática por perfis tradicionalmente masculinos',
      'Dupla Jornada: Dificuldades para aceitar cargos com alta demanda de tempo'
    ]
  },
  {
    id: 'estimulo',
    title: 'Estímulo ao Interesse para Liderar',
    description: 'Ações para aumentar o desejo e preparação de mulheres para assumir funções de gestão, incluindo formação e redes de apoio.',
    icon: '🎯',
    path: '/modulos/estimulo',
    objectives: [
      'Desenvolver programas de formação em liderança específicos para mulheres',
      'Criar redes de mentoria e apoio entre mulheres servidoras',
      'Promover experiências de liderança em projetos e comissões',
      'Oferecer coaching e desenvolvimento de habilidades de gestão',
      'Estabelecer grupos de discussão e troca de experiências',
      'Identificar e desenvolver potenciais líderes em todos os níveis hierárquicos'
    ],
    strategies: [
      'Liderança Feminina: Cursos específicos sobre desafios e oportunidades da liderança feminina',
      'Mentoria Estratégica: Pareamento entre líderes experientes e potenciais líderes',
      'Projetos-Piloto: Oportunidades de liderar iniciativas com apoio e acompanhamento',
      'Networking Interno: Eventos e fóruns para construção de redes profissionais',
      'Desenvolvimento Pessoal: Workshops sobre autoconfiança e comunicação assertiva'
    ],
    indicators: [
      'Número de mulheres participando em programas de desenvolvimento',
      'Taxa de mulheres que se candidatam a posições de liderança',
      'Avaliação de confiança e interesse em liderar (pesquisas)',
      'Número de redes de mentoria ativas',
      'Progressão de carreira das participantes dos programas'
    ],
    barriers: [
      'Síndrome da Impostora: Falta de confiança nas próprias capacidades',
      'Sobrecarga Familiar: Dificuldade de conciliar liderança com responsabilidades domésticas',
      'Falta de Referências: Poucos modelos de liderança feminina para se inspirar',
      'Cultura Organizacional: Ambiente percebido como hostil ou competitivo',
      'Perfeccionismo: Sensação de não estar "pronta o suficiente" para liderar'
    ]
  },
  {
    id: 'normativo',
    title: 'Apoio Normativo e Regulação',
    description: 'Aprimoramento ou criação de normas e dispositivos legais que sustentem a paridade como compromisso de gestão.',
    icon: '⚖️',
    path: '/modulos/normativo',
    objectives: [
      'Elaborar marcos normativos para paridade em cargos de liderança',
      'Regulamentar critérios objetivos para nomeações e promoções',
      'Estabelecer mecanismos de monitoramento e controle',
      'Criar sanções e incentivos para cumprimento das metas',
      'Definir responsabilidades institucionais claras',
      'Garantir alinhamento com legislação existente sobre equidade'
    ],
    strategies: [
      'Decreto Presidencial: Estabelecimento formal da política de paridade',
      'Portarias Ministeriais: Regulamentação específica por órgão',
      'Instruções Normativas: Procedimentos operacionais detalhados',
      'Resoluções de Comitês: Diretrizes para comitês de seleção',
      'Manuais e Guias: Orientações práticas para gestores'
    ],
    indicators: [
      'Número de normas publicadas sobre paridade de gênero',
      'Percentual de órgãos com regulamentação interna',
      'Taxa de cumprimento das metas estabelecidas',
      'Número de gestores capacitados nas novas normas',
      'Redução de contestações judiciais sobre nomeações'
    ]
  },
  {
    id: 'infraestrutura',
    title: 'Infraestrutura de Sustentação',
    description: 'Medidas estruturais para garantir permanência e desempenho das mulheres, como horários flexíveis e formatos de trabalho remoto.',
    icon: '🏗️',
    path: '/modulos/infraestrutura',
    objectives: [
      'Implementar modalidades flexíveis de trabalho e horários',
      'Criar infraestrutura de apoio à maternidade e cuidados familiares',
      'Estabelecer espaços e equipamentos adequados para todas as identidades',
      'Desenvolver tecnologias que facilitem o trabalho remoto e híbrido',
      'Oferecer serviços de apoio pessoal e familiar',
      'Garantir segurança e acessibilidade nos ambientes de trabalho'
    ],
    strategies: [
      'Trabalho Remoto: Possibilidade de exercer funções de liderança à distância',
      'Horário Flexível: Adaptação de jornada para necessidades pessoais',
      'Jornada Compactada: Concentração da carga horária em menos dias',
      'Reuniões Híbridas: Participação presencial e virtual simultânea',
      'Pausas para Cuidados: Intervalos para responsabilidades familiares'
    ],
    indicators: [
      'Taxa de permanência de mulheres em cargos de liderança',
      'Índice de satisfação com condições de trabalho',
      'Utilização de modalidades flexíveis por gênero',
      'Redução de licenças médicas e afastamentos',
      'Avaliação da conciliação trabalho-família'
    ]
  },
  {
    id: 'corresponsabilidade',
    title: 'Corresponsabilidade Institucional',
    description: 'Ações voltadas à sensibilização, pactuação e formação de gestores homens com poder decisório.',
    icon: '🤝',
    path: '/modulos/corresponsabilidade',
    objectives: [
      'Sensibilizar líderes masculinos sobre a importância da paridade de gênero',
      'Capacitar gestores sobre viés inconsciente e liderança inclusiva',
      'Estabelecer compromissos formais com metas de diversidade',
      'Criar redes de líderes comprometidos com a equidade',
      'Implementar sistemas de reconhecimento para gestões inclusivas',
      'Desenvolver métricas de avaliação da liderança inclusiva'
    ],
    strategies: [
      'Liderança pelo Exemplo: Engajamento dos mais altos níveis hierárquicos',
      'Narrativa de Negócios: Apresentação dos benefícios organizacionais da diversidade',
      'Dados e Evidências: Uso de pesquisas e estudos sobre performance de equipes diversas',
      'Pactos e Compromissos: Assinatura formal de termos de compromisso',
      'Reconhecimento Público: Destacar líderes que promovem a inclusão'
    ],
    indicators: [
      'Percentual de líderes masculinos capacitados em diversidade',
      'Número de compromissos formais assinados',
      'Avaliação da cultura organizacional inclusiva',
      'Taxa de nomeações diversas por gestor',
      'Índice de satisfação das equipes com liderança inclusiva'
    ],
    barriers: [
      'Meritocracia Mal Compreendida: Visão de que paridade prejudica a competência',
      'Ameaça ao Status: Percepção de perda de poder ou privilégios',
      'Desconhecimento: Falta de informação sobre desigualdades estruturais',
      'Cultura Organizacional: Tradições e práticas enraizadas',
      'Pressão de Pares: Influência negativa de grupos conservadores'
    ]
  }
];

export const newsItems: NewsItem[] = [
  {
    id: '1',
    date: '05/10/2025',
    title: 'Rede Equidade integra mais de 50 instituições públicas para promover diversidade',
    description: 'Iniciativa criada em 2022 pelo Senado Federal e TCU já conta com a adesão de ministérios, tribunais e órgãos autônomos em agenda comum de equidade de gênero e raça'
  },
  {
    id: '2',
    date: '02/10/2025',
    title: 'Enap lança Rede de Mulheres Negras Líderes no Setor Público',
    description: 'Programa oferece espaço seguro para troca de experiências e desenvolvimento de liderança para servidoras negras em cargos de coordenação ou superiores'
  },
  {
    id: '3',
    date: '28/09/2025',
    title: 'Rede Orçamento Mulher promove práticas sensíveis a gênero e raça',
    description: 'Iniciativa da Câmara dos Deputados com ONU Mulheres e Ministério das Mulheres forma comunidade de profissionais para qualificar políticas orçamentárias'
  }
];

export const statistics: Statistic[] = [
  {
    value: '14+',
    label: 'Redes ativas de mulheres no serviço público mapeadas'
  },
  {
    value: '50+',
    label: 'Instituições públicas já integradas às redes existentes'
  },
  {
    value: '27%',
    label: 'Atual representação feminina em cargos de liderança'
  },
  {
    value: '50%',
    label: 'Meta de paridade de gênero até 2027'
  }
];