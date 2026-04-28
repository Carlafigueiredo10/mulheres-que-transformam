export interface Module {
  id: string;
  title: string;
  description: string;
  icon: string;
  path: string;
  objectives: string[];
  strategies: string[];
  indicators: string[];
  barriers?: string[];
}

export interface EixoTransversal {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  reference?: string;
  tension: string;
  actions: string[];
  indicator: string;
  normativeReference?: string;
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  description: string;
  url?: string;
}

export interface Statistic {
  value: string;
  label: string;
  description?: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}