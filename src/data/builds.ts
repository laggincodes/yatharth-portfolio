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
    id: 'build-voicebench',
    date: 'OCT 2026',
    title: 'VoiceBench — Voice Agent Evaluation Framework',
    category: 'Evaluation & Voice Systems',
    role: 'Framework Author',
    description: 'Engineered an automated evaluation framework for real-time conversational voice agents, with deterministic assertion checking, timing provenance, and 195 passing tests.',
    technologies: ['Python', 'ElevenLabs SDK', 'Pytest', 'PyYAML', 'Tailwind CSS'],
    href: 'https://github.com/laggincodes/voicebench'
  },
  {
    id: 'build-bayora-shield',
    date: 'OCT 2026',
    title: 'Bayora Shield — AI Red Teaming & Security Gateway',
    category: 'AI Security & Systems',
    role: 'Security Engineer',
    description: 'Developed an offensive/defensive cybersecurity MVP for AI model evaluation protection, featuring an append-only SHA-256 hash-chained audit trail and RBAC gateway.',
    technologies: ['Python', 'FastAPI', 'Argon2id', 'SQLite', 'React'],
    href: 'https://github.com/laggincodes'
  },
  {
    id: 'build-sthara-cadastral',
    date: 'SEP 2026',
    title: 'STHARA — 3D Cadastral Intelligence Platform',
    category: 'Geospatial & 3D Web',
    role: 'Geospatial Developer',
    description: 'Architected a 3D volumetric land rights modeling system fusing 2D cadastral data, LiDAR elevation, and building footprints to compute prototype 3D-ULPIN identifiers.',
    technologies: ['Python', 'FastAPI', 'Shapely', 'GeoPandas', 'Next.js', 'Three.js'],
    href: 'https://github.com/laggincodes'
  },
  {
    id: 'build-echotutor',
    date: 'SEP 2026',
    title: 'EchoTutor — AI Voice Co-Teacher',
    category: 'Voice AI & Education',
    role: 'Creator & Developer',
    description: 'Built a synchronous AI voice co-teacher prototype for live classrooms using Agora SD-RTN audio streaming, server-side token generation, and teacher authority controls.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Agora RTC', 'Supabase'],
    href: 'https://github.com/laggincodes/EchoTutor.git'
  },
  {
    id: 'build-agora-medicare',
    date: 'AUG 2026',
    title: 'Agora Medicare AI — Voice Healthcare Assistant',
    category: 'Voice AI & Healthcare',
    role: 'Creator & Developer',
    description: 'Engineered a real-time conversational audio prototype for patient clinic navigation with strict non-diagnostic prompt guardrails and emergency escalation.',
    technologies: ['FastAPI', 'Python', 'Agora RTC', 'Pinecone', 'React'],
    href: 'https://github.com/laggincodes/caresphere'
  },
  {
    id: 'build-privacy-sim',
    date: 'AUG 2026',
    title: 'AI Privacy Risk Simulator — Full-Stack Architecture',
    category: 'Computer Vision & Privacy UI',
    role: 'Full-Stack Developer',
    description: 'Designed and developed a full-stack image privacy scanner displaying detected sensitive biometric regions, OCR text, and risk scores on dynamic Canvas overlays.',
    technologies: ['React', 'TypeScript', 'Flask', 'Python', 'EasyOCR', 'MediaPipe'],
    href: 'https://github.com/laggincodes/ai-privacy-risk-simulator'
  }
];
