export interface CaseStudyData {
  overview: string;
  howItWorks: string;
  contributions: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  role?: string;
  status?: string;
  image: string;
  github?: string;
  demo?: string;
  featured: boolean;
  gridSpan: string;
  caseStudy?: CaseStudyData;
}

export const PROJECTS: Project[] = [
  {
    id: 'agora-medicare-ai',
    title: 'Agora Medicare AI',
    category: 'AI · VOICE · HEALTHCARE',
    description: 'A voice-first healthcare AI assistant built around real-time conversational interaction using Agora and Gemini.',
    technologies: ['React', 'Agora', 'Gemini', 'Voice AI'],
    role: 'Creator & Developer',
    status: 'Prototype / Voice Assistant',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    github: 'https://github.com/laggincodes/caresphere',
    featured: true,
    gridSpan: 'md:col-span-7',
    caseStudy: {
      overview: 'Agora Medicare AI is a voice-first healthcare assistant exploring low-latency audio interaction, real-time conversational triage, and contextual prompt processing.',
      howItWorks: 'The application opens WebRTC audio channels via the Agora RTC SDK, streaming user speech directly into Gemini multimodal language models and returning immediate audio/text responses.',
      contributions: [
        'Designed and implemented the responsive React voice interface',
        'Integrated Agora RTC SDK for low-latency streaming audio',
        'Connected Gemini multimodal AI model APIs',
        'Engineered real-time audio interaction loops and visual status renderers'
      ]
    }
  },
  {
    id: 'ai-privacy-risk-simulator',
    title: 'AI Privacy Risk Simulator',
    category: 'AI · PRIVACY · COMPUTER VISION',
    description: 'A full-stack privacy analysis platform that processes uploaded images through an AI-powered scanning pipeline and presents detected privacy risks through a modern interactive interface.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Python', 'Flask', 'AI / Computer Vision', 'REST APIs'],
    role: 'Full-Stack Developer',
    status: 'Interactive MVP',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    github: 'https://github.com/laggincodes/ai-privacy-risk-simulator',
    featured: true,
    gridSpan: 'md:col-span-5',
    caseStudy: {
      overview: 'An interactive full-stack privacy analysis system that highlights sensitive OCR text, face masks, and PII exposure vectors within uploaded user images.',
      howItWorks: 'The React frontend communicates with a Python Flask REST API server. Uploaded images are passed through computer vision detection modules, returning bounding box coordinates and risk metrics rendered on dynamic Canvas overlays.',
      contributions: [
        'Designed and developed the React/TypeScript frontend',
        'Built and integrated backend APIs',
        'Implemented the image scanning workflow',
        'Connected frontend and backend processing',
        'Integrated the privacy-analysis pipeline',
        'Built the interface for displaying detected privacy risks and analysis results'
      ]
    }
  }
];
