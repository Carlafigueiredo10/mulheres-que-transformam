// Centralização da estrutura de navegação do site
// Usado em Header.tsx, Footer.tsx e outros componentes

export interface NavigationLink {
  name: string;
  href: string;
  description?: string;
  featured?: boolean;
}

export interface NavigationSection {
  title: string;
  links: NavigationLink[];
}

// Links principais do menu
export const mainNavigation: NavigationLink[] = [
  {
    name: 'Início',
    href: '/',
    description: 'Página inicial',
  },
  {
    name: 'Módulos',
    href: '/#modulos',
    description: 'Os 6 módulos estratégicos',
  },
  {
    name: 'Órgãos Participantes',
    href: '/orgaos-participantes',
    description: 'Órgãos que aderiram à iniciativa',
  },
  {
    name: 'Dashboard',
    href: '/dashboard',
    description: 'Painel de adesão institucional',
  },
  {
    name: 'Biblioteca',
    href: '/biblioteca',
    description: 'Recursos e documentos',
  },
  {
    name: 'Boas Práticas',
    href: '/boas-praticas',
    description: 'Experiências de sucesso',
  },
  {
    name: 'Conheça Tereza',
    href: '/tereza',
    description: 'Chat com IA assistente',
    featured: true,
  },
];

// Links do rodapé organizados por seção
export const footerNavigation: NavigationSection[] = [
  {
    title: 'Sobre a Iniciativa',
    links: [
      { name: 'Sobre o Projeto', href: '/#sobre' },
      { name: 'Objetivos', href: '/#objetivos' },
      { name: 'Como Participar', href: '/dashboard#como-participar' },
      { name: 'Órgãos Aderentes', href: '/orgaos-participantes' },
    ],
  },
  {
    title: 'Recursos',
    links: [
      { name: 'Biblioteca Digital', href: '/biblioteca' },
      { name: 'Boas Práticas', href: '/boas-praticas' },
      { name: 'Observatório de Paridade', href: '/#observatorio' },
      { name: 'ASPADs', href: '/aspads' },
    ],
  },
  {
    title: 'Rede Conecta',
    links: [
      { name: 'Sobre a Rede', href: '/#rede-conecta' },
      { name: 'Catálogo de Redes', href: '/catalogo-redes' },
      { name: 'Mapa de Redes', href: '/mapa-redes' },
      { name: 'Cadastrar Rede', href: '/cadastrar-rede' },
    ],
  },
  {
    title: 'Suporte',
    links: [
      { name: 'Tereza (IA)', href: '/tereza' },
      { name: 'Contato', href: '/#contato' },
      { name: 'FAQ', href: '/#faq' },
    ],
  },
];

// Links rápidos para CTAs
export const ctaLinks = {
  comece: '/dashboard#como-participar',
  tereza: '/tereza',
  biblioteca: '/biblioteca',
  cadastro: '/cadastrar-rede',
} as const;

// Links sociais (quando houver)
export const socialLinks = [
  // { name: 'LinkedIn', href: '#', icon: 'linkedin' },
  // { name: 'Instagram', href: '#', icon: 'instagram' },
  // { name: 'Twitter', href: '#', icon: 'twitter' },
];

// Links institucionais
export const institutionalLinks: NavigationLink[] = [
  {
    name: 'Ministério da Gestão e Inovação',
    href: 'https://www.gov.br/mgi',
  },
  {
    name: 'Governo Federal',
    href: 'https://www.gov.br',
  },
];
