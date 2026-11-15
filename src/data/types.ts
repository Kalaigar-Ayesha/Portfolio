export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  role: string;
  category: 'DevOps & FinOps' | 'AI & Kubernetes' | 'DevSecOps & CI/CD' | 'Cloud & Systems';
  description: string;
  architectureHighlights: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  status: 'Production-Ready' | 'Open Source' | 'Enterprise Prototype';
  metricsPlaceholder?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  tools: string[];
  businessOutcome: string;
  iconName: string;
}

export interface ProblemSolutionItem {
  id: string;
  painPoint: string;
  costOfInaction: string;
  solution: string;
  engineeringExecution: string[];
  iconName: string;
}

export interface ExperienceItem {
  id: string;
  organization: string;
  role: string;
  period: string; // [Editable Placeholder]
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  verifiedStatus: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  title: string;
  company: string;
  context: string;
  avatarSeed: string;
}
