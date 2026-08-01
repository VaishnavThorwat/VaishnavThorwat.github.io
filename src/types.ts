export interface Project {
  id: string;
  title: string;
  category: 'Agents' | 'RAG' | 'Eval & Testing' | 'Deep Learning';
  subtitle: string;
  description: string;
  techStack: string[];
  highlights: string[];
  githubUrl: string;
  demoUrl?: string;
  imageUrl?: string;
  architectureDetails?: string;
  featured: boolean;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: { name: string; level?: 'Expert' | 'Advanced' | 'Proficient'; tag?: string }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score?: string;
  details: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  verifyUrl?: string;
}
