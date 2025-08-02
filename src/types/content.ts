export interface TrendingContent {
  id: number;
  title: string;
  imageUrl: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: 'tv' | 'download' | 'device' | 'kids';
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface FooterLink {
  text: string;
  href: string;
}

export interface FooterColumn {
  links: FooterLink[];
}