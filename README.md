# Yatharth Saini — Developer Portfolio

A personal developer portfolio showcasing engineering work in **software engineering, full-stack web applications, AI systems, and automated evaluation frameworks**.

The portfolio is built with a cohesive editorial aesthetic combining **warm blush pink (light mode) and dimly lit rose-plum (dark mode)**, featuring an interactive dusk/sunset animated video background, a live developer activity dashboard, responsive typography, and subtle discoverable feline details designed exclusively for desktop pointers.

---

## Key Highlights

- **Dual Editorial Theme System:**
  - **Light Mode:** Warm blush pink surfaces (`#F3DCE5` / `#F8E6ED` / `#D98BA8`) providing a soft, velvety feel with crisp plum typography.
  - **Dark Mode:** Warm plum and muted rose surfaces (`#211820` / `#30212C` / `#E8A0BA`) replacing harsh near-black with an intimate, dimly lit atmosphere.
- **Local Hero Background Video:**
  - Uses the local video file at `public/hero-background.mp4` (`/hero-background.mp4`) depicting an animated dusk/sunset scene with a cat sitting on a fence under glowing clouds, sun, and flying birds.
  - Video is rendered with high contrast and natural opacity (`opacity-85` light / `opacity-65` dark) with localized frosted glass cards (`backdrop-blur-md`) for pristine readability.
- **Slide 2 — Developer Activity Dashboard:**
  - Real-time GitHub and LeetCode activity dashboard positioned immediately after the Hero.
  - Interactive pink-scaled GitHub contribution graph (Past 365 days) and verified metrics (commits, repositories, accepted submissions).
- **Desktop-Only Cat Interactions:**
  - **Upper-Left Ginger Cat:** Cursor-following companion activated on demand via top-left trigger.
  - **Bottom-Right Cat Paw Launcher:** Floating button opening a compact social-links panel.
  - **Discoverable Easter Eggs:** Secret paw visitor dossier in footer, curious cat 5-click toast on logo, and Konami constellation animation (`↑ ↑ ↓ ↓ ← → ← → B A`).
  - **Mobile Suppression:** All cat triggers, floating buttons, cursor followers, and animation loops are completely hidden on mobile phones and touchscreens using CSS media queries (`(hover: hover) and (pointer: fine) and (min-width: 1024px)`) and runtime capability hooks. Standard navigation and contact channels remain 100% accessible.
- **Credibility-Audited Engineering Work:**
  - Honest representations with zero exaggerated claims, supported by test suites and public GitHub repositories. Detailed audit findings in [`docs/PORTFOLIO_CREDIBILITY_AUDIT.md`](docs/PORTFOLIO_CREDIBILITY_AUDIT.md).

---

## Featured Projects (5-Part Engineering Breakdown)

### 1. VoiceBench
- **Category:** AI · Evaluation · Voice Systems
- **Status:** `Verified locally`
- **Role:** Framework Author
- **Problem:** Real-time conversational voice agents frequently suffer from interruption failures (barge-in latency regressions), persona drift, and context loss during multi-turn turn-taking that standard unit tests cannot detect.
- **Implementation:** Engineered deterministic YAML scenario execution engine and assertion checker; built ElevenLabs completed-conversation adapter with timing provenance and credential redaction; developed differential regression lab isolating barge-in yield latencies (+1,130ms on SCEN-INT-02); created standalone local dashboard on `127.0.0.1:8765` with zero external runtime dependencies.
- **Evidence:** `python -m pytest tests/` (195 passed in 21.7s across 18 modules); public repository at [github.com/laggincodes/voicebench](https://github.com/laggincodes/voicebench).
- **Stack:** Python, ElevenLabs SDK, Pytest, PyYAML, Tailwind CSS.

### 2. EchoTutor
- **Category:** AI · Voice · Education
- **Status:** `Prototype`
- **Role:** Creator & Developer
- **Problem:** Synchronous online classrooms struggle with real-time participation and early detection of student learning gaps without burdening the human lead teacher.
- **Implementation:** Implemented server-side Agora RTC token generation keeping app certificates secure; constructed dual-tier UID role partitioning (teachers 1000–1999 vs students 2000–8999); integrated Next.js 16 with Agora audio streaming and Supabase profile auth; structured teacher-in-the-loop control authority and pedagogical context state machines.
- **Evidence:** Next.js 16 App Router codebase with server-side token generation and Supabase RLS migrations; public repository at [github.com/laggincodes/EchoTutor](https://github.com/laggincodes/EchoTutor).
- **Stack:** Next.js, React, TypeScript, Agora RTC, Supabase, Deepgram STT.

### 3. Agora Medicare AI (CareSphere)
- **Category:** AI · Voice · Healthcare
- **Status:** `Prototype`
- **Role:** Creator & Developer
- **Problem:** Clinical phone triage suffers from long hold times, but conversational AI systems must strictly enforce non-diagnostic safety guardrails and immediately escalate acute life-threatening emergencies.
- **Implementation:** Built FastAPI Agora token service and WebSocket audio gateway (`/ws/voice`); integrated keyword and semantic emergency bypass protocol for acute conditions; implemented strict prompt guardrails enforcing non-diagnostic informational guidance (max 40 words); connected Pinecone vector knowledge base schema for clinic FAQ retrieval.
- **Evidence:** FastAPI backend with emergency triage interceptor and Agora RTC token server; public repository at [github.com/laggincodes/caresphere](https://github.com/laggincodes/caresphere).
- **Stack:** FastAPI, Python, Agora RTC, Pinecone, WebSocket, React.

### 4. AI Privacy Risk Simulator
- **Category:** AI · Privacy · Computer Vision
- **Status:** `Working demo`
- **Role:** Full-Stack Developer
- **Problem:** Users frequently upload photos and document scans to public platforms unaware of sensitive biometric markers, exposed PII text, or hidden geolocation metadata embedded within them.
- **Implementation:** Engineered React & TypeScript interface with dynamic Canvas coordinate overlays; built asynchronous Flask REST backend with non-blocking thread execution and progress polling; integrated multi-stage scanning pipeline: Pillow (EXIF), EasyOCR + regex (PII text), MediaPipe (faces), OpenCV (QR); implemented structured AI summary generation with graceful fallback for resilient scans.
- **Evidence:** Verified runnable full-stack MVP with SQLite report caching and Canvas visual risk highlights; public repository at [github.com/laggincodes/ai-privacy-risk-simulator](https://github.com/laggincodes/ai-privacy-risk-simulator).
- **Stack:** React, TypeScript, Flask, Python, EasyOCR, MediaPipe, OpenCV.

---

## Technical Stack & Competencies

- **Languages:** Python, TypeScript, JavaScript, C, C++, SQL
- **Frontend:** React 19, Next.js 16, Vite, Tailwind CSS, Framer Motion, GSAP, HTML5 Canvas
- **Backend:** FastAPI, Flask, Node.js, REST APIs, WebSockets
- **Databases & Storage:** SQLite, PostgreSQL (Supabase), Pinecone (Vector)
- **AI & Streaming APIs:** Agora RTC / RTM, ElevenLabs SDK, Gemini API, Deepgram STT, MediaPipe, EasyOCR
- **Tools & DevOps:** Git, GitHub, Docker, Pytest, Linux, Postman

---

## Getting Started

### Prerequisites
- Node.js 18+ (tested on Node.js 22 & 24)
- npm

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Runs the local Vite server at `http://localhost:5173/`.

### Typecheck & Lint
```bash
npx tsc -b
npx oxlint
```

### Production Build
```bash
npm run build
```
Generates production assets into `dist/`.

---

## Credibility & Verification Audit

A comprehensive credibility audit was executed across all claims, test suites, and project repositories. Full findings, evidence logs, and standard status classifications are detailed in:
[`docs/PORTFOLIO_CREDIBILITY_AUDIT.md`](docs/PORTFOLIO_CREDIBILITY_AUDIT.md)

---

## Contact & Links

**Yatharth Saini**
- Location: Delhi, India
- Email: [yathusaini10@gmail.com](mailto:yathusaini10@gmail.com)
- GitHub: [@laggincodes](https://github.com/laggincodes)
- LinkedIn: [Yatharth Saini](https://www.linkedin.com/in/yatharth-saini-6bb584389)
- LeetCode: [@laggincodes](https://leetcode.com/u/laggincodes/)
- Live Website: [yatharth-portfolio.vercel.app](https://yatharth-portfolio.vercel.app/)
