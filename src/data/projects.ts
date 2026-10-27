export type ProjectStatus =
  | 'Working demo'
  | 'Verified locally'
  | 'Integration partially verified'
  | 'Prototype'
  | 'In development';

export interface ProjectEvidence {
  repoUrl?: string;
  testCmd?: string;
  demoUrl?: string;
  inspectionNotes?: string;
}

export interface CaseStudyData {
  overview: string;
  problem: string;
  howItWorks: string;
  contributions: string[];
  evidence: ProjectEvidence;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  problem: string;
  implementation: string[];
  evidence: ProjectEvidence;
  technologies: string[];
  role?: string;
  status: ProjectStatus;
  image: string;
  github?: string;
  demo?: string;
  featured: boolean;
  gridSpan: string;
  caseStudy?: CaseStudyData;
}

export const PROJECTS: Project[] = [
  {
    id: 'voicebench',
    title: 'VoiceBench',
    category: 'AI · EVALUATION · VOICE SYSTEMS',
    description: 'An open-source evaluation and regression-testing framework for real-time multi-agent conversational voice systems.',
    problem: 'Real-time voice agents often experience severe behavioral regressions during multi-turn turn-taking, barge-in interruptions, and persona handoffs that standard unit tests cannot detect.',
    implementation: [
      'Engineered deterministic YAML scenario execution engine and assertion checker',
      'Built completed-conversation ElevenLabs adapter with timing provenance & credential redaction',
      'Developed differential regression lab tracking barge-in yield deltas (+1,130ms on SCEN-INT-02)',
      'Created standalone local evaluation dashboard on 127.0.0.1:8765 with zero external runtime dependencies'
    ],
    evidence: {
      repoUrl: 'https://github.com/laggincodes/voicebench',
      testCmd: 'python -m pytest tests/ (195 passed in 21.7s)',
      inspectionNotes: '195 automated unit and integration tests passing; 6 canonical benchmark scenarios with auditable trace logs'
    },
    technologies: ['Python', 'ElevenLabs SDK', 'Pytest', 'PyYAML', 'Tailwind CSS'],
    role: 'Framework Author',
    status: 'Verified locally',
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=1200&q=80',
    github: 'https://github.com/laggincodes/voicebench',
    featured: true,
    gridSpan: 'md:col-span-6',
    caseStudy: {
      overview: 'VoiceBench is an independent, reproducible evaluation and regression-testing framework engineered for real-time conversational voice agents, developed for FOSS FORGE 2.0 (Build with ElevenLabs).',
      problem: 'Conversational voice systems frequently fail edge cases during live speech: dropping expert personas, stalling tool executions, failing to yield on user barge-in, or corrupting conversational context after detours.',
      howItWorks: 'VoiceBench feeds structured scenario turns through dedicated adapters (ElevenLabs completed-conversation adapter or Generic HTTP adapter), executing deterministic multi-field assertions and recording turn-by-turn timing provenance.',
      contributions: [
        'Deterministic assertion checking across tool invocations and nested parameters',
        'Visual regression differential lab isolating yield latencies and error regressions',
        'Credential redaction and strict timing provenance separation',
        'Pre-compiled self-contained local dashboard interface running without npm runtime dependencies'
      ],
      evidence: {
        repoUrl: 'https://github.com/laggincodes/voicebench',
        testCmd: 'python -m pytest tests/',
        inspectionNotes: 'Verified locally with 195 passing tests across 18 modules'
      }
    }
  },
  {
    id: 'echotutor',
    title: 'EchoTutor',
    category: 'AI · VOICE · EDUCATION',
    description: 'A synchronous AI voice co-teacher prototype for live digital classrooms operating over Agora SD-RTN.',
    problem: 'Synchronous online classes struggle with real-time participation and early detection of student learning gaps without burdening the human lead teacher.',
    implementation: [
      'Implemented server-side Agora RTC token generation keeping app certificates secure',
      'Engineered dual-tier UID role partitioning (teachers 1000–1999 vs students 2000–8999)',
      'Integrated Next.js 16 with Agora audio streaming and Supabase profile auth',
      'Structured teacher-in-the-loop control authority and pedagogical context state machines'
    ],
    evidence: {
      repoUrl: 'https://github.com/laggincodes/EchoTutor.git',
      inspectionNotes: 'Next.js 16 App Router architecture; server-side secret isolation; Supabase RLS migrations'
    },
    technologies: ['Next.js', 'React', 'TypeScript', 'Agora RTC', 'Supabase', 'Deepgram STT'],
    role: 'Creator & Developer',
    status: 'Prototype',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    github: 'https://github.com/laggincodes/EchoTutor.git',
    featured: true,
    gridSpan: 'md:col-span-6',
    caseStudy: {
      overview: 'An AI voice co-teacher concept designed for live digital classrooms, using real-time conversational interaction to support classroom participation under lead teacher control.',
      problem: 'In large hybrid and online classrooms, instructors cannot simultaneously lecture and provide one-on-one clarifications for struggling students in real time.',
      howItWorks: 'EchoTutor connects into the Agora audio channel alongside students and teachers, listening for student clarification queries and intervening with adapted explanations only when permitted by teacher authority commands.',
      contributions: [
        'Integrated Agora RTC SDK for low-latency multi-participant audio streaming',
        'Isolated Agora app certificate within server-side token generation routes',
        'Implemented teacher authority overrides (pause, resume, mute) via UID partitioning',
        'Architected rolling pedagogical context engine and spoken pop-quiz logic'
      ],
      evidence: {
        repoUrl: 'https://github.com/laggincodes/EchoTutor.git',
        inspectionNotes: 'Next.js 16 App Router architecture with secure token generation endpoints'
      }
    }
  },
  {
    id: 'agora-medicare-ai',
    title: 'Agora Medicare AI',
    category: 'AI · VOICE · HEALTHCARE',
    description: 'A voice-first healthcare triage assistant prototype exploring low-latency streaming and strict non-diagnostic guardrails.',
    problem: 'Patients needing quick clinic navigation and symptom check guidance require immediate conversational responses, but AI voice systems must strictly enforce non-diagnostic safety guardrails.',
    implementation: [
      'Built FastAPI Agora token service and WebSocket audio gateway (/ws/voice)',
      'Integrated keyword and semantic emergency bypass protocol for acute conditions',
      'Implemented strict prompt guardrails enforcing non-diagnostic informational guidance (max 40 words)',
      'Connected Pinecone vector knowledge base schema for symptom FAQs and clinic directories'
    ],
    evidence: {
      repoUrl: 'https://github.com/laggincodes/caresphere',
      inspectionNotes: 'FastAPI backend with emergency triage interceptor and Agora RTC token server'
    },
    technologies: ['FastAPI', 'Python', 'Agora RTC', 'Pinecone', 'WebSocket', 'React'],
    role: 'Creator & Developer',
    status: 'Prototype',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    github: 'https://github.com/laggincodes/caresphere',
    featured: true,
    gridSpan: 'md:col-span-6',
    caseStudy: {
      overview: 'Agora Medicare AI (CareSphere) is an experimental voice-first healthcare assistant prototype exploring low-latency audio interaction, real-time conversational triage, and strict safety guardrails.',
      problem: 'Clinical phone triage suffers from long hold times, but conversational bots must never provide unqualified medical diagnoses or fail to escalate life-threatening symptoms.',
      howItWorks: 'The application provisions Agora WebRTC audio tokens server-side, streams speech through streaming STT into an LLM bound by medical disclaimer guardrails, and immediately escalates emergency keywords (e.g., chest pain, shortness of breath).',
      contributions: [
        'Engineered real-time audio loop architecture and WebRTC token exchange',
        'Designed emergency bypass protocol with immediate keyword escalation',
        'Enforced non-diagnostic prompt guardrails with maximum 40-word concise responses',
        'Structured Pinecone vector search integration schema for verified clinic FAQ retrieval'
      ],
      evidence: {
        repoUrl: 'https://github.com/laggincodes/caresphere',
        inspectionNotes: 'FastAPI server with modular audio router and safety interceptors'
      }
    }
  },
  {
    id: 'ai-privacy-risk-simulator',
    title: 'AI Privacy Risk Simulator',
    category: 'AI · PRIVACY · COMPUTER VISION',
    description: 'A full-stack privacy vulnerability analyzer scanning uploaded images for PII, biometric faces, and QR exposure.',
    problem: 'Users frequently upload photos and document scans to public platforms unaware of the sensitive biometric data, exposed PII text, or hidden geolocation metadata embedded within them.',
    implementation: [
      'Engineered React & TypeScript interface with dynamic Canvas coordinate overlays',
      'Built asynchronous Flask REST backend with non-blocking thread execution and progress polling',
      'Integrated multi-stage scanning pipeline: Pillow (EXIF), EasyOCR + regex (PII text), MediaPipe (faces), OpenCV (QR)',
      'Implemented structured AI summary generation with graceful fallback for resilient scans'
    ],
    evidence: {
      repoUrl: 'https://github.com/laggincodes/ai-privacy-risk-simulator',
      inspectionNotes: 'Runnable full-stack MVP with SQLite report caching and Canvas visual risk highlights'
    },
    technologies: ['React', 'TypeScript', 'Flask', 'Python', 'EasyOCR', 'MediaPipe', 'OpenCV'],
    role: 'Full-Stack Developer',
    status: 'Working demo',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    github: 'https://github.com/laggincodes/ai-privacy-risk-simulator',
    featured: true,
    gridSpan: 'md:col-span-6',
    caseStudy: {
      overview: 'An interactive full-stack privacy analysis system that highlights sensitive OCR text, face masks, and PII exposure vectors within uploaded user images.',
      problem: 'Document scans and photos frequently leak personally identifiable information, biometric markers, and geolocation coordinates without user awareness.',
      howItWorks: 'The React frontend uploads images to a Python Flask backend. The server runs non-blocking background workers executing EXIF extraction, EasyOCR PII scanning, MediaPipe face detection, and QR code parsing, returning bounding coordinates for Canvas visual overlay.',
      contributions: [
        'Designed and developed the React/TypeScript frontend with live progress polling',
        'Implemented Canvas coordinate highlighting for detected sensitive regions',
        'Built asynchronous background thread worker architecture in Flask',
        'Integrated third-party vision libraries (MediaPipe, EasyOCR, Pillow, OpenCV) with error fallbacks'
      ],
      evidence: {
        repoUrl: 'https://github.com/laggincodes/ai-privacy-risk-simulator',
        inspectionNotes: 'Verified full-stack application with SQLite scan caching and Canvas overlay rendering'
      }
    }
  }
];
