export interface Task {
  id: string;
  title: string;
  channel: 'Instagram' | 'LinkedIn' | 'Reels' | 'TikTok' | 'YouTube' | 'Blog';
  format: 'Reels' | 'Carrossel' | 'Texto' | 'Vídeo' | 'Imagens';
  date: string;
  status: 'ideia' | 'roteiro' | 'gravacao' | 'edicao' | 'pronto' | 'publicado';
  authorInitial: string;
  isStale?: boolean;
  staleDays?: number;
  metricLikes?: number;
  metricReach?: number;
  metricEngagement?: string;
  label?: string;
}

export interface Step {
  id: number;
  tag: string;
  title: string;
  painPoint: string;
  description: string;
  bullets: string[];
  mockupUrl: string;
}

export interface Feature {
  id: number;
  tag: string;
  title: string;
  description: string;
  result: string;
  isFeatured?: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge: string;
  users: string;
  features: string[];
  monthlyPrice: number;
  annualPrice: number;
  note: string;
  ctaText: string;
  isPopular?: boolean;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface AudienceProfile {
  emoji: string;
  name: string;
  description: string;
}
