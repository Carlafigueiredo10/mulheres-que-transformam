export interface Network {
  id: string;
  name: string;
  institution: string;
  mission: string;
  profile: string;
  functioning: string;
  contact: string;
  website?: string;
  category: 'formal' | 'informal' | 'program' | 'association';
  themes: string[];
  established: string;
  members?: string;
  status: 'active' | 'developing';
}

export const activeNetworks: Network[] = [
  {
    id: 'rede-equidade',
    name: 'Rede Equidade',
    institution: 'Senado Federal, TCU, Câmara dos Deputados, CNJ, CNMP, diversos ministérios (50+ instituições)',
    mission: 'Promover diversidade, equidade e inclusão na gestão pública com foco em gênero e raça. Compartilha boas práticas e implementa ações conjuntas para construir uma sociedade justa e sustentável.',
    profile: 'Foco em equidade de gênero e raça na administração pública, com abordagem interseccional.',
    functioning: 'Possui comitê de coordenação, calendário de ações, reuniões regulares, desenvolvimento de planos de ação, campanhas e capacitações.',
    contact: 'rede.equidade@senado.leg.br',
    website: 'https://www.congressonacional.leg.br',
    category: 'formal',
    themes: ['Equidade de Gênero', 'Diversidade Racial', 'Inclusão', 'Gestão Pública'],
    established: '2022',
    members: '50+ instituições públicas',
    status: 'active'
  },
  {
    id: 'rede-orcamento-mulher',
    name: 'Rede Orçamento Mulher',
    institution: 'Câmara dos Deputados, ONU Mulheres, Ministério das Mulheres, SOF, UnB, FGV, Instituto Alziras',
    mission: 'Incentivar a adoção de práticas de orçamento sensíveis a gênero e raça em todos os níveis de governo, formar comunidade de treinamento e troca entre profissionais.',
    profile: 'Atua em políticas orçamentárias com foco em igualdade de gênero e raça.',
    functioning: 'Reuniões virtuais, eventos, seminários, produção de guias e notas técnicas, articulação com legisladoras.',
    contact: 'Secretaria da Mulher da Câmara',
    category: 'formal',
    themes: ['Orçamento Público', 'Políticas de Gênero', 'Legislativo'],
    established: '2022',
    status: 'active'
  },
  {
    id: 'mulheres-negras-lideres',
    name: 'Rede de Mulheres Negras Líderes no Setor Público',
    institution: 'Enap, Ministério da Igualdade Racial, Fundação Lemann, ONU Mulheres',
    mission: 'Criar vínculos, desenvolver habilidades de liderança e fortalecer ações integradas para que mais mulheres negras ocupem e permaneçam em posições de liderança.',
    profile: 'Foco em liderança de mulheres negras, com ênfase em raça e gênero; inclui formação em cuidados, identidade e desenvolvimento profissional.',
    functioning: 'Eventos, cursos, mentoria e banco de talentos. Associada aos programas Enap (FIF e Fiar).',
    contact: 'Enap/MIR',
    category: 'program',
    themes: ['Liderança Negra', 'Empoderamento', 'Mentoria', 'Identidade'],
    established: '2024',
    status: 'active'
  },
  {
    id: 'programa-mulheres-lideranca-tcu',
    name: 'Programa Mulheres na Liderança – TCU (INTOSAI)',
    institution: 'Tribunal de Contas da União, INTOSAI',
    mission: 'Capacitar mulheres que ocupam ou buscam ocupar cargos de liderança em órgãos de controle, com ênfase em transversalização de gênero.',
    profile: 'Foco em liderança e equidade de gênero em órgãos de auditoria e controle.',
    functioning: 'Turmas anuais com capacitações presenciais e virtuais, oficinas e trocas de experiências.',
    contact: 'imprensa@tcu.gov.br',
    website: 'https://portal.tcu.gov.br',
    category: 'program',
    themes: ['Controle Público', 'Auditoria', 'Liderança'],
    established: '2023',
    status: 'active'
  },
  {
    id: 'lideragov',
    name: 'LideraGOV',
    institution: 'Escola Nacional de Administração Pública (Enap), MGI',
    mission: 'Desenvolver novas lideranças na administração pública com compromisso de diversidade, garantindo paridade de gênero.',
    profile: 'Formação de líderes públicos com foco em diversidade (gênero, raça e demais grupos).',
    functioning: 'Curso intensivo com mentorias, laboratórios e turmas específicas (ex.: edição "Vozes Negras").',
    contact: 'Enap',
    category: 'program',
    themes: ['Liderança Pública', 'Diversidade', 'Capacitação'],
    established: '2020',
    status: 'active'
  },
  {
    id: 'comite-mulheres-governanca',
    name: 'Rede Governança Brasil – Comitê Mulheres da Governança',
    institution: 'Rede Governança Brasil (RGB), TCU, CGU, Instituto Latino-Americano de Governança',
    mission: 'Disseminar e fortalecer a cultura de governança para mulheres e promover protagonismo feminino na governança pública e corporativa.',
    profile: 'Foca em governança e liderança, promovendo participação de mulheres em conselhos e instâncias de decisão.',
    functioning: 'Atua através de comissões temáticas, eventos, cursos e produção de artigos.',
    contact: 'RGB',
    website: 'https://rgb.org.br',
    category: 'formal',
    themes: ['Governança', 'Conselhos', 'Participação'],
    established: '2020',
    status: 'active'
  },
  {
    id: 'rede-mulheres-publicas',
    name: 'Rede Mulheres Públicas',
    institution: 'Rede independente - servidoras, ex-servidoras, setor privado e sociedade civil',
    mission: 'Valorizar e motivar mulheres em funções públicas, promover debates sobre gênero na gestão pública e apoiar a participação feminina.',
    profile: 'Atua em liderança, carreira e gestão, com debates sobre equidade de gênero.',
    functioning: 'Webinars, rodas de conversa, conteúdos em blog, grupos de WhatsApp e parcerias com escolas de governo.',
    contact: 'mulherespublicas@gmail.com',
    category: 'informal',
    themes: ['Carreira Pública', 'Networking', 'Debates'],
    established: '2020',
    status: 'active'
  },
  {
    id: 'columbia-womens-network',
    name: 'Columbia Women\'s Leadership Network in Brazil',
    institution: 'Universidade Columbia - Global Center Rio de Janeiro',
    mission: 'Desenvolver uma rede de mulheres que transformem o serviço público no Brasil por meio de workshops, seminários, coaching e networking internacional.',
    profile: 'Foco em formação de liderança feminina e networking internacional.',
    functioning: 'Programa anual com oficinas no Brasil e nos EUA; rede permanente de ex-alunas.',
    contact: 'Columbia Global Centers – Rio de Janeiro',
    category: 'program',
    themes: ['Liderança Internacional', 'Networking', 'Capacitação'],
    established: '2018',
    members: 'Até 20 mulheres por ano',
    status: 'active'
  },
  {
    id: 'amdb',
    name: 'AMDB – Associação de Mulheres Diplomatas do Brasil',
    institution: 'Itamaraty - Diplomatas brasileiras',
    mission: 'Defender direitos e carreira das mulheres diplomatas, combater discriminação e promover igualdade de gênero no serviço exterior.',
    profile: 'Carreira diplomática, combate ao assédio e inclusão.',
    functioning: 'Advocacy no Itamaraty e Congresso, estudos demográficos, podcasts, eventos e mentorias.',
    contact: 'Via site',
    website: 'https://mulheresdiplomatas.org',
    category: 'association',
    themes: ['Diplomacia', 'Relações Exteriores', 'Anti-assédio'],
    established: '2019',
    status: 'active'
  },
  {
    id: 'gpublicas',
    name: 'GPúblicas (Rede de Mulheres na Gestão Pública)',
    institution: 'Instituto Alziras',
    mission: 'Apoiar e conectar mulheres em política e gestão pública para fortalecer a democracia e desenvolver soluções para desafios coletivos.',
    profile: 'Justiça climática, orçamento, cuidado, cultura, participação e governo aberto.',
    functioning: 'Biblioteca de recursos, cursos, mentorias, produção técnica, eventos e comunidade online gratuita.',
    contact: 'Via site',
    website: 'https://gpublicas.org.br',
    category: 'formal',
    themes: ['Gestão Pública', 'Políticas Públicas', 'Governo Aberto'],
    established: '2020',
    status: 'active'
  },
  {
    id: 'hubmulher',
    name: 'HubMulher',
    institution: 'Coletivo de executivas e acadêmicas voluntárias',
    mission: 'Empoderar e conectar mulheres de diferentes áreas, compartilhando conhecimento, promovendo mentoria e networking.',
    profile: 'Carreira, governança, inovação, STEM, raça e diversidade. Grupos Maturi (50+) e Black Hubers.',
    functioning: 'Grupos de trabalho horizontais, HubAcademy para formação, eventos e mentorias.',
    contact: 'Via formulário no site',
    website: 'https://hubmulher.com',
    category: 'informal',
    themes: ['Empoderamento', 'STEM', 'Diversidade', 'Mentoria'],
    established: '2017',
    status: 'active'
  },
  {
    id: 'servidoras-negras',
    name: 'Coletivo de Mulheres Negras Servidoras e Empregadas Públicas',
    institution: 'Coletivo informal - Governo Federal',
    mission: 'Combater a invisibilidade das servidoras negras, oferecer apoio mútuo e inspirar novas lideranças.',
    profile: 'Foco em raça, representação e valorização.',
    functioning: 'Rede social Instagram (@servidorasnegras), networking e eventos simbólicos.',
    contact: '@servidorasnegras (Instagram DM)',
    category: 'informal',
    themes: ['Representação Negra', 'Valorização', 'Apoio Mútuo'],
    established: '2023',
    members: '~170 servidoras negras',
    status: 'active'
  },
  {
    id: 'elas-no-orcamento',
    name: 'Elas no Orçamento',
    institution: 'Economistas e especialistas em orçamento (diversas regiões)',
    mission: 'Produzir conhecimentos e ações para qualificar o orçamento público a partir de perspectiva feminista e racial.',
    profile: 'Foco em políticas públicas, orçamento e raça.',
    functioning: 'Rede voluntária de especialistas; produz listas de profissionais, artigos e debates.',
    contact: 'Via participantes e redes sociais',
    category: 'informal',
    themes: ['Orçamento Feminista', 'Economia', 'Políticas Raciais'],
    established: '2023',
    status: 'active'
  },
  {
    id: 'mulheres-carreiras-estado',
    name: 'Rede de Mulheres de Carreiras de Estado',
    institution: '18 entidades associativas, Enap, AMDB',
    mission: 'Discutir representação feminina nas carreiras do serviço público, promover agenda de paridade e articular ações afirmativas.',
    profile: 'Foco em liderança e equidade de gênero.',
    functioning: 'Encontros presenciais, painéis; busca criar rede permanente com apoio institucional.',
    contact: 'Via Enap ou entidades associativas',
    category: 'formal',
    themes: ['Carreiras de Estado', 'Paridade', 'Ações Afirmativas'],
    established: '2023',
    status: 'developing'
  }
];

export const networkCategories = [
  { id: 'formal', name: 'Redes Formais', color: 'blue' },
  { id: 'informal', name: 'Coletivos Informais', color: 'green' },
  { id: 'program', name: 'Programas de Capacitação', color: 'purple' },
  { id: 'association', name: 'Associações Profissionais', color: 'orange' }
];

export const networkThemes = [
  'Equidade de Gênero',
  'Diversidade Racial', 
  'Liderança',
  'Orçamento Público',
  'Gestão Pública',
  'Governança',
  'Capacitação',
  'Mentoria',
  'Networking',
  'Políticas Públicas',
  'Carreira Pública',
  'Empoderamento'
];