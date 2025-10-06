export type SeloNivel = 'participante' | 'ativa' | 'inspiradora';

export type TipoOrgao = 'federal' | 'estadual' | 'municipal' | 'controle' | 'escola-governo';

export interface PontoFocal {
  nome: string;
  cargo: string;
  email: string;
  telefone?: string;
  publico: boolean; // Se os dados podem ser exibidos publicamente
}

export interface OrgaoAderente {
  id: string;
  nome: string;
  sigla: string;
  tipo: TipoOrgao;
  nivel: SeloNivel;
  dataAdesao: string;
  estado?: string; // Para estaduais e municipais
  municipio?: string; // Para municipais
  logo?: string;
  website?: string;
  pontoFocal: PontoFocal;
  redeInterna?: {
    nome: string;
    membros: number;
    ativa: boolean;
  };
  iniciativas: string[];
  boas_praticas: string[];
  endereco: {
    cidade: string;
    estado: string;
    regiao: string;
  };
  // Campos expandidos para página detalhada
  observatorio?: {
    nome: string;
    descricao: string;
    objetivos: string[];
    entregas: string[];
  };
  planoAcao?: {
    modulo: string;
    status: 'aderido' | 'em-implantacao' | 'em-articulacao';
    observacoes: string;
  }[];
  programasInternos?: {
    nome: string;
    descricao: string;
    metas: string[];
  }[];
  politicasSociedade?: {
    nome: string;
    descricao: string;
    comentarios: string;
    link?: string;
  }[];
  parcerias?: string[];
  contato?: {
    coordenacao: string;
    email: string;
    endereco: string;
  };
  indicadores?: {
    nome: string;
    descricao: string;
  }[];
}

export interface SeloInfo {
  nivel: SeloNivel;
  nome: string;
  cor: string;
  icone: string;
  requisitos: string[];
  beneficios: string[];
}

export const selosInfo: SeloInfo[] = [
  {
    nivel: 'participante',
    nome: 'Participante',
    cor: 'green',
    icone: '🟢',
    requisitos: [
      'Adesão formal ao programa',
      'Ponto focal nomeado',
      'Carta de compromisso assinada'
    ],
    beneficios: [
      'Acesso ao catálogo de redes',
      'Participação em eventos nacionais',
      'Uso do selo institucional',
      'Suporte para implementação'
    ]
  },
  {
    nivel: 'ativa',
    nome: 'Ativa',
    cor: 'purple',
    icone: '🟣',
    requisitos: [
      'Registro de ações implementadas',
      'Dados de participação atualizados',
      'Participação em pelo menos 2 eventos anuais',
      'Rede interna funcionando'
    ],
    beneficios: [
      'Todos os benefícios do nível Participante',
      'Destaque no mapa nacional',
      'Prioridade em capacitações',
      'Acesso a recursos exclusivos'
    ]
  },
  {
    nivel: 'inspiradora',
    nome: 'Inspiradora',
    cor: 'yellow',
    icone: '🟡',
    requisitos: [
      'Boas práticas documentadas e aprovadas',
      'Caso de sucesso replicado por outros órgãos',
      'Liderança em iniciativas nacionais',
      'Métricas de impacto comprovadas'
    ],
    beneficios: [
      'Todos os benefícios do nível Ativa',
      'Reconhecimento nacional',
      'Convite para palestras e eventos',
      'Participação em comitê consultivo',
      'Selo de excelência'
    ]
  }
];

// Dados iniciais de exemplo
export const orgaosAderentes: OrgaoAderente[] = [
  {
    id: 'cgu',
    nome: 'Controladoria-Geral da União',
    sigla: 'CGU',
    tipo: 'controle',
    nivel: 'ativa',
    dataAdesao: '2024-03-15',
    logo: '/logos/cgu.png',
    website: 'https://www.gov.br/cgu',
    pontoFocal: {
      nome: 'Maria Silva Santos',
      cargo: 'Coordenadora de Diversidade e Inclusão',
      email: 'diversidade@cgu.gov.br',
      publico: true
    },
    redeInterna: {
      nome: 'Rede CGU Diversa',
      membros: 85,
      ativa: true
    },
    iniciativas: [
      'Programa de Mentoria Feminina',
      'Comitê de Equidade de Gênero',
      'Capacitação em Liderança Inclusiva'
    ],
    boas_praticas: [
      'Protocolo de Prevenção ao Assédio',
      'Licença-Paternidade Estendida'
    ],
    endereco: {
      cidade: 'Brasília',
      estado: 'DF',
      regiao: 'Centro-Oeste'
    }
  },
  {
    id: 'tcu',
    nome: 'Tribunal de Contas da União',
    sigla: 'TCU',
    tipo: 'controle',
    nivel: 'inspiradora',
    dataAdesao: '2022-01-10',
    logo: '/logos/tcu.png',
    website: 'https://portal.tcu.gov.br',
    pontoFocal: {
      nome: 'Ana Paula Rodrigues',
      cargo: 'Secretária de Gestão de Pessoas',
      email: 'gestao.pessoas@tcu.gov.br',
      publico: true
    },
    redeInterna: {
      nome: 'Mulheres na Liderança TCU',
      membros: 120,
      ativa: true
    },
    iniciativas: [
      'Programa INTOSAI de Mulheres Líderes',
      'Rede Equidade (coordenação)',
      'Observatório de Gênero no TCU'
    ],
    boas_praticas: [
      'Programa Internacional de Capacitação',
      'Política de Paridade em Comissões',
      'Banco de Talentos Femininos'
    ],
    endereco: {
      cidade: 'Brasília',
      estado: 'DF',
      regiao: 'Centro-Oeste'
    }
  },
  {
    id: 'enap',
    nome: 'Escola Nacional de Administração Pública',
    sigla: 'Enap',
    tipo: 'escola-governo',
    nivel: 'ativa',
    dataAdesao: '2023-08-20',
    logo: '/logos/enap.png',
    website: 'https://www.enap.gov.br',
    pontoFocal: {
      nome: 'Carla Fernanda Costa',
      cargo: 'Coordenadora de Diversidade',
      email: 'diversidade@enap.gov.br',
      publico: true
    },
    redeInterna: {
      nome: 'Enap Diversa',
      membros: 60,
      ativa: true
    },
    iniciativas: [
      'LideraGOV',
      'Rede de Mulheres Negras Líderes',
      'Formação de Iniciativas Feministas (FIF)'
    ],
    boas_praticas: [
      'Curso de Liderança com Paridade',
      'Programa de Mentoria Reversa'
    ],
    endereco: {
      cidade: 'Brasília',
      estado: 'DF',
      regiao: 'Centro-Oeste'
    }
  },
  {
    id: 'sp-admin',
    nome: 'Secretaria de Administração de São Paulo',
    sigla: 'SEAD-SP',
    tipo: 'estadual',
    nivel: 'participante',
    dataAdesao: '2024-09-10',
    estado: 'SP',
    pontoFocal: {
      nome: 'Juliana Santos Lima',
      cargo: 'Assessora de Diversidade',
      email: 'diversidade.sead@sp.gov.br',
      publico: false
    },
    iniciativas: [
      'Rede Estadual de Servidoras',
      'Programa SP + Diversa'
    ],
    boas_praticas: [],
    endereco: {
      cidade: 'São Paulo',
      estado: 'SP',
      regiao: 'Sudeste'
    }
  },
  {
    id: 'recife',
    nome: 'Prefeitura do Recife',
    sigla: 'PCR',
    tipo: 'municipal',
    nivel: 'participante',
    dataAdesao: '2024-10-01',
    estado: 'PE',
    municipio: 'Recife',
    pontoFocal: {
      nome: 'Fernanda Alves',
      cargo: 'Coordenadora de Políticas para Mulheres',
      email: 'mulheres@recife.pe.gov.br',
      publico: true
    },
    iniciativas: [
      'Coletivo Servidoras do Recife'
    ],
    boas_praticas: [],
    endereco: {
      cidade: 'Recife',
      estado: 'PE',
      regiao: 'Nordeste'
    }
  },
  {
    id: 'mtur',
    nome: 'Ministério do Turismo',
    sigla: 'MTur',
    tipo: 'federal',
    nivel: 'participante',
    dataAdesao: '2025-07-01',
    website: 'https://turismo.gov.br',
    pontoFocal: {
      nome: 'A confirmar',
      cargo: 'Indicação pela ASPADE',
      email: 'generoeturismo@turismo.gov.br',
      publico: false
    },
    observatorio: {
      nome: 'Observatório de Gênero no Turismo',
      descricao: 'O Observatório de Gênero no Turismo tem como objetivo monitorar, analisar e divulgar dados sobre a participação das mulheres no setor turístico e na força de trabalho do próprio ministério.',
      objetivos: [
        'Mapear a presença e os desafios das mulheres no turismo brasileiro',
        'Produzir relatórios anuais com recorte de gênero, raça e território sobre empregabilidade e liderança',
        'Integrar dados ao Observatório de Pessoal do MGI e ao Observatório de Paridade da Rede Conecta Mulheres que Transformam',
        'Promover cultura de dados abertos sobre igualdade de gênero e diversidade no turismo'
      ],
      entregas: [
        'Relatório "Mulheres no Turismo Brasileiro: diagnóstico 2025"',
        'Painel digital com dados sobre carreiras, liderança e empreendedorismo feminino no setor',
        'Publicação anual "Panorama de Gênero no Turismo"'
      ]
    },
    planoAcao: [
      {
        modulo: '1. Formação e Liderança Feminina',
        status: 'aderido',
        observacoes: 'Implantação dos programas "Turismo Mulher Líder" e "Rota da Liderança".'
      },
      {
        modulo: '2. Conciliação e Cuidado',
        status: 'aderido',
        observacoes: 'Execução da ação "MTur 360 Família".'
      },
      {
        modulo: '3. Ambientes Seguros e Inclusivos',
        status: 'em-implantacao',
        observacoes: 'Diagnóstico interno de prevenção ao assédio e criação de grupos de escuta.'
      },
      {
        modulo: '4. Equidade Institucional e Dados',
        status: 'aderido',
        observacoes: 'Estruturação do Observatório de Gênero no Turismo.'
      },
      {
        modulo: '5. Inovação e Sociedade Civil',
        status: 'aderido',
        observacoes: 'Edital "Turismo com Elas".'
      },
      {
        modulo: '6. Diversidade Estruturante',
        status: 'em-articulacao',
        observacoes: 'Parceria com Ministério da Igualdade Racial e setor de turismo comunitário.'
      },
      {
        modulo: '7. Comunicação e Visibilidade',
        status: 'aderido',
        observacoes: 'Campanha nacional "Mulheres que Transformam o Turismo".'
      }
    ],
    programasInternos: [
      {
        nome: 'Programa Turismo Mulher Líder',
        descricao: 'Programa de mentoria interna para ampliar a presença e o protagonismo das servidoras do Ministério do Turismo. Duração de 12 meses, com acompanhamento por mentoras de liderança pública e oficinas coletivas trimestrais.',
        metas: [
          '60% das participantes com promoção ou nova função em 2 anos',
          'Produção de guia interno de liderança feminina'
        ]
      },
      {
        nome: 'Rede Interna Mulheres em Movimento – MTur',
        descricao: 'Rede institucional permanente para escuta, diagnóstico e proposição de políticas voltadas às servidoras do MTur. Reúne grupos temáticos sobre carreira, assédio, diversidade, saúde e conciliação.',
        metas: [
          '4 encontros temáticos anuais',
          'Pauta de equidade de gênero integrada ao RH institucional'
        ]
      },
      {
        nome: 'Ação de Conciliação MTur 360 Família',
        descricao: 'Iniciativa de apoio à vida familiar das servidoras e servidores do MTur, incentivando permanência e qualidade de vida no trabalho. Inclui sala de amamentação, parcerias com creches e SESC, horários flexíveis e plantões de suporte.',
        metas: [
          'Reduzir afastamentos por responsabilidades familiares',
          'Implantar sala de amamentação até 2026'
        ]
      },
      {
        nome: 'Programa Rota da Liderança',
        descricao: 'Capacitação e articulação para que servidoras do MTur ocupem espaços de decisão em conselhos e comissões. Fortalece o protagonismo institucional das mulheres em instâncias do turismo nacional.',
        metas: [
          'Aumentar em 30% a participação de servidoras do MTur em colegiados e fóruns externos até 2027'
        ]
      },
      {
        nome: 'Edital Turismo com Elas',
        descricao: 'Fundo de apoio a projetos liderados por mulheres, internos e externos, que promovam inovação, cultura, desenvolvimento local e inclusão no turismo.',
        metas: [
          'Apoiar 20 projetos no primeiro ciclo (2025)',
          'Criar rede de premiadas e boas práticas'
        ]
      }
    ],
    politicasSociedade: [
      {
        nome: 'Descontos de 15% em hospedagens para mulheres que viajam sozinhas',
        descricao: 'Campanha em parceria com a ABIH oferecendo tarifa especial a mulheres viajantes solo',
        comentarios: 'Incentivo simbólico de mobilidade e visibilidade de gênero no turismo',
        link: 'https://www.gov.br/turismo'
      },
      {
        nome: 'Condições especiais de acesso ao Novo Fungetur para empreendedoras que foram mães recentemente',
        descricao: 'Linhas de crédito ou apoio adaptado para mulheres que se tornam mães recentemente e atuam no turismo',
        comentarios: 'Política que reconhece desafios de conciliação gênero/maternidade no setor empreendedor',
        link: 'https://www.gov.br/turismo'
      },
      {
        nome: 'Consulta pública / escuta para construção do "Guia para Mulheres que Viajam Sozinhas"',
        descricao: 'Escuta participativa com turistas, guias e coletivos femininos para criar guia de segurança, acolhimento e direitos',
        comentarios: 'Iniciativa participativa que incorpora vozes femininas na formulação de políticas públicas',
        link: 'https://www.gov.br/turismo'
      },
      {
        nome: 'Guia "Dicas para Atender Bem Turistas Mulheres"',
        descricao: 'Manual técnico para capacitar profissionais do turismo a oferecer acolhimento e segurança às mulheres',
        comentarios: 'Estratégia de normatização e formação do setor com perspectiva de gênero',
        link: 'https://www.gov.br/turismo'
      },
      {
        nome: 'Parceria MTur + ONU Mulheres',
        descricao: 'Cooperação internacional para promover empoderamento e segurança de mulheres no setor turístico',
        comentarios: 'Parceria estratégica que fortalece o papel institucional do MTur no combate à violência e desigualdade',
        link: 'https://www.gov.br/turismo'
      },
      {
        nome: 'Revisão do Código de Conduta do Turismo com diretrizes de gênero',
        descricao: 'Atualização normativa com foco em prevenção à violência e capacitação para atendimento humanizado',
        comentarios: 'Aborda segurança institucional e boas práticas no setor',
        link: 'https://www.gov.br/turismo'
      }
    ],
    parcerias: [
      'SESC Nacional: apoio ao programa de conciliação familiar (MTur 360 Família)',
      'ENAP: mentoria e formação em liderança pública',
      'ONU Mulheres: cooperação em segurança e empoderamento feminino',
      'Ministério das Mulheres e MIR: transversalização da pauta de gênero e raça no turismo'
    ],
    contato: {
      coordenacao: 'Coordenação de Gênero e Diversidade – MTur',
      email: 'generoeturismo@turismo.gov.br',
      endereco: 'Esplanada dos Ministérios, Bloco U – Brasília/DF'
    },
    indicadores: [
      {
        nome: 'Indicadores de paridade e ascensão interna',
        descricao: 'Monitoramento da participação feminina em cargos de liderança'
      },
      {
        nome: 'Número de mulheres beneficiadas por políticas públicas externas',
        descricao: 'Contabilização do alcance das políticas de gênero no turismo'
      },
      {
        nome: 'Relatórios de transparência sobre ações de gênero e diversidade',
        descricao: 'Publicação anual de resultados e impactos das ações'
      }
    ],
    iniciativas: [
      'Programa Turismo Mulher Líder',
      'Rede Interna Mulheres em Movimento – MTur',
      'MTur 360 Família',
      'Programa Rota da Liderança',
      'Edital Turismo com Elas'
    ],
    boas_praticas: [
      'Observatório de Gênero no Turismo',
      'Campanha nacional "Mulheres que Transformam o Turismo"',
      'Parcerias estratégicas com ONU Mulheres'
    ],
    endereco: {
      cidade: 'Brasília',
      estado: 'DF',
      regiao: 'Centro-Oeste'
    }
  }
];

export const estatisticasAdesao = {
  total: orgaosAderentes.length,
  porNivel: {
    participante: orgaosAderentes.filter(o => o.nivel === 'participante').length,
    ativa: orgaosAderentes.filter(o => o.nivel === 'ativa').length,
    inspiradora: orgaosAderentes.filter(o => o.nivel === 'inspiradora').length,
  },
  porTipo: {
    federal: orgaosAderentes.filter(o => o.tipo === 'federal').length,
    estadual: orgaosAderentes.filter(o => o.tipo === 'estadual').length,
    municipal: orgaosAderentes.filter(o => o.tipo === 'municipal').length,
    controle: orgaosAderentes.filter(o => o.tipo === 'controle').length,
    'escola-governo': orgaosAderentes.filter(o => o.tipo === 'escola-governo').length,
  },
  porRegiao: orgaosAderentes.reduce((acc, org) => {
    acc[org.endereco.regiao] = (acc[org.endereco.regiao] || 0) + 1;
    return acc;
  }, {} as Record<string, number>)
};