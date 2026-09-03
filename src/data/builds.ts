export interface BuildEntry {
  id: string;
  date: string;
  title: string;
  description: string;
  category: string;
  role: string;
  technologies: string[];
  image?: string;
  href?: string;
}

export const BUILDS: BuildEntry[] = [
  {
    id: 'build-agora-medicare',
    date: 'AUG 2026',
    title: 'Agora Medicare AI — Voice Healthcare Assistant',
    category: 'Voice AI & Healthcare',
    role: 'Creator & Developer',
    description: 'Engineered a low-latency voice interaction loop for healthcare assistance, utilizing Agora streaming audio WebSockets and Gemini multimodal intelligence.',
    technologies: ['React', 'Agora SDK', 'Gemini AI', 'Voice AI'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    href: 'https://github.com/laggincodes/caresphere'
  },
  {
    id: 'build-privacy-sim',
    date: 'AUG 2026',
    title: 'AI Privacy Risk Simulator — Full-Stack Architecture',
    category: 'Computer Vision & Privacy UI',
    role: 'Full-Stack Developer',
    description: 'Designed and developed the full-stack privacy visualizer displaying detected sensitive image regions, risk scores, and Flask API integration.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Python', 'Flask', 'AI'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    href: 'https://github.com/laggincodes/ai-privacy-risk-simulator'
  }
];
