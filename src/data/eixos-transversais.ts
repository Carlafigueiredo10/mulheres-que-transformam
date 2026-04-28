import { EixoTransversal } from '@/types';

export const eixosTransversais: EixoTransversal[] = [
  {
    id: 'interseccionalidade',
    title: 'Interseccionalidade',
    shortTitle: 'Interseccionalidade',
    description:
      'A diversidade (raça, território, deficiência, orientação sexual) deve estar no centro do desenho de qualquer política de paridade — não como capítulo à parte.',
    icon: '🌈',
    tension:
      'Mulheres brancas nos cargos de chefia, mulheres negras na limpeza. Paridade sem recorte racial é privilégio reciclado.',
    actions: [
      'Desagregar todo indicador de liderança por raça, deficiência e território',
      'Metas específicas para mulheres negras, indígenas e PCDs em cargos de chefia',
      'Bancos de talentos com recorte racial obrigatório — não opcional'
    ],
    indicator: '% de mulheres negras em cargos DAS-5 ou superiores'
  },
  {
    id: 'enfrentamento-violencia',
    title: 'Enfrentamento ao Assédio e à Violência',
    shortTitle: 'Ambientes Seguros',
    description:
      'A liderança feminina não sobrevive em ambientes hostis. Criação de canais de denúncia, protocolos de apuração e cultura de tolerância zero.',
    icon: '🛡️',
    reference: 'Alinhado à Portaria 6.719/2024',
    tension:
      'Ninguém lidera onde sente medo. Ambiente hostil dissolve qualquer programa de paridade antes mesmo dele virar política.',
    actions: [
      'Canal de denúncia próprio, com sigilo garantido por norma',
      'Comissão de apuração com paridade de gênero e prazo de resposta',
      'Protocolo público de resposta em até 48h após denúncia formal'
    ],
    indicator: 'Tempo médio entre denúncia e início da apuração',
    normativeReference: 'Portaria 6.719/2024'
  },
  {
    id: 'letramento-digital',
    title: 'Letramento Digital e Capacitação',
    shortTitle: 'Capacitação',
    description:
      'Preparar mulheres para a transformação tecnológica e para identificar e combater vieses algorítmicos que reproduzem desigualdades de gênero e raça.',
    icon: '💻',
    tension:
      'Algoritmos de RH descartam currículos com nomes femininos antes do humano ver. Quem não entende a tecnologia é decidida por ela.',
    actions: [
      'Formação obrigatória em IA e viés algorítmico para lideranças',
      'Auditoria anual de sistemas automatizados de seleção e avaliação',
      'Letramento digital incluído nos planos de capacitação institucionais'
    ],
    indicator: '% de gestoras com formação certificada em letramento digital'
  },
  {
    id: 'monitoramento-dados',
    title: 'Monitoramento de Dados',
    shortTitle: 'Dados e Transparência',
    description:
      'Toda ação precisa ter meta, indicador e transparência pública. Sem dados desagregados não há política de paridade — só intenção.',
    icon: '📊',
    tension:
      'O que não se mede, se finge. Sem dado público desagregado, paridade vira slogan de gestão.',
    actions: [
      'Painel público trimestral com indicadores por gênero, raça e cargo',
      'Toda meta com data, responsável nominal e consequência declarada',
      'Auditoria externa anual dos dados publicados'
    ],
    indicator: 'Existência de painel público de paridade atualizado em até 90 dias'
  },
  {
    id: 'institucionalizacao-normativa',
    title: 'Institucionalização Normativa',
    shortTitle: 'Institucionalização',
    description:
      'A paridade precisa virar portaria, decreto e regra. Só assim sobrevive a mudanças de gestão e deixa de depender de boa vontade individual.',
    icon: '⚖️',
    tension:
      'Programa de gestão sai com gestor. Portaria fica. A diferença entre boa intenção e política pública é o nome no Diário Oficial.',
    actions: [
      'Transformar diretrizes em portaria com prazo, sanção e instância de cobrança',
      'Inclusão obrigatória da paridade no Plano Plurianual (PPA)',
      'Avaliação institucional do dirigente vinculada a metas de paridade'
    ],
    indicator: '% de órgãos com paridade institucionalizada via norma publicada'
  }
];
