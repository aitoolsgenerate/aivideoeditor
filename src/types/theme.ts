export interface ThemeConfig {
  brandName: string;
  brandSubtitle: string;
  primaryCrimson: string;
  secondaryIndigo: string;
  accentEmerald: string;
  actionBlue: string;
  heroCategory: string;
  heroTitle: string;
  heroExcerpt: string;
  heroAuthor: string;
  heroDate: string;
  projectsTitle: string;
  projectsDescription: string;
  solutionsTitle: string;
  solutionsDescription: string;
  itServicesTitle: string;
  itServicesDescription: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: 'Business' | 'Design' | 'Engineering' | 'SEO';
  excerpt: string;
  content: string[];
  author: string;
  date: string;
  readTime: string;
  image: string;
}

export interface ServiceTile {
  id: string;
  title: string;
  subtitle: string;
  iconName: 'smartphone' | 'monitor' | 'code' | 'layers';
}

export interface StatCounter {
  id: string;
  value: number;
  label: string;
  iconName: 'briefcase' | 'coffee' | 'globe' | 'building';
}

export interface CapabilityCard {
  id: string;
  title: string;
  description: string;
  iconName: 'layers' | 'network' | 'bug' | 'shield';
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  outcome: string;
}
