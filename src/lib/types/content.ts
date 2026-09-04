export interface TimelineItem {
  marker: string;
  title: string;
  description: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  description: string;
  technologies: string[];
  achievements: string[];
  color: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  technologies: string[];
  responsibilities: string[];
  results: string[];
  github: string | null;
  live: string | null;
  gradient: string;
  accent: string;
  image?: string;
  gallery?: string[];
  links?: { label: string; href: string }[];
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  id: string;
  label: string;
  skills: Skill[];
}

export interface LanguageItem {
  name: string;
  level: string;
  proficiency: number;
}

export interface RecommendationItem {
  id: string;
  name: string;
  role: string;
  quote: string;
  linkedin: string;
  image: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
