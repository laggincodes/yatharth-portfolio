# Portfolio Credibility & Engineering Audit Report

**Candidate / Engineer:** Yatharth Saini  
**Role Positioning:** CSE Student · Developer · AI Builder  
**Location:** Delhi, India  
**Audit Date:** October 2026  
**Auditor:** Senior Frontend Engineer & Technical Auditor  
**Primary Objective:** Eliminate exaggerated claims, marketing buzzwords, and unsupported representations across the developer portfolio while preserving genuine engineering contributions, high-fidelity editorial aesthetic, and interview defensibility.

---

## 1. Executive Summary & Audit Methodology

Every technical claim, project representation, metric, and architectural description across the portfolio codebase (`yatharth-portfolio`) was cross-referenced directly against actual implementation codebases located on disk:
- `voicebench/` (Python 3.10+ / ElevenLabs Evaluation Harness)
- `echotutor/` (Next.js 16 / Agora SD-RTN / React 19)
- `caresphere-backend/` & `caresphere-ai/` (FastAPI / Agora RTC / Pinecone)
- `ai-privacy-risk-simulator/` (React / TypeScript / Flask / MediaPipe / EasyOCR)
- `3d-cadastral-intelligence/` (STHARA — Next.js / Three.js / Shapely / GeoPandas)
- `bayora-shield/` (FastAPI / Argon2id / SHA-256 Audit Trail)

### Standard Credibility Classifications
- **`VERIFIED`**: Source code, test suites, and reproducible executions confirm the capability on disk.
- **`PARTIALLY VERIFIED`**: Core implementation exists, but third-party cloud credentials or external network services are required for complete multi-party operation, or previous marketing claims overstated real-world deployment scale.
- **`UNVERIFIED`**: Feature is specified or planned in documentation, but cannot be proven from current runnable code.
- **`MISLEADING`**: Text implies production-scale users, custom-trained proprietary LLMs, medical certification, or commercial deployment that does not exist.
- **`BROKEN`**: Dead link, 404 document target, or missing runtime asset.

---

## 2. Project Claim Verification Ledger

### 2.1 VoiceBench (Real-Time Voice Evaluation Framework)
*Evaluating real-time multi-agent conversational voice systems for interruption handling, role adherence, and latency regressions (FOSS FORGE 2.0 / Build with ElevenLabs).*

| Item / Claim | Classification | Evidence & Inspection Details | Remediation Action |
| :--- | :--- | :--- | :--- |
| **Automated Test Suite** | `VERIFIED` | Ran `python -m pytest tests/` in `voicebench/`. **195 passed** in 21.74s across 18 test modules. | Prominently feature verified test count (195+) in portfolio stats. |
| **Deterministic Scenario Engine** | `VERIFIED` | 6 benchmark YAML scenarios parsed (`SCEN-INT-01` to `SCEN-REC-02`) with deterministic assertion matching. | Accurately highlight scenario architecture in case study. |
| **Regression Diff Lab** | `VERIFIED` | `voicebench/demo/diff.json` and visual diff report accurately show the `+1,130ms` barge-in regression delta on `SCEN-INT-02`. | Highlight differential analysis and provenance tracking. |
| **ElevenLabs & HTTP Adapters** | `VERIFIED` | Completed conversation adapter with API key redaction and Generic HTTP adapter implemented in `voicebench/adapters/`. | Retain verified architectural role without exaggerating production multi-tenant cloud hosting. |
| **Local Web Workbench** | `VERIFIED` | `python -m voicebench.demo_app` serves self-contained interactive dashboard on `127.0.0.1:8765` using precompiled Tailwind CSS. | Document exact local execution command for recruiters. |

**Assigned Standard Status:** `Verified locally`

---

### 2.2 EchoTutor (AI Voice Co-Teacher for Classrooms)
*Synchronous conversational AI co-teacher concept operating over Agora SD-RTN for live digital classrooms.*

| Item / Claim | Classification | Evidence & Inspection Details | Remediation Action |
| :--- | :--- | :--- | :--- |
| **Agora Audio Streaming Architecture** | `VERIFIED` | Server-side RTC token generation (`app/api/generate-agora-token/route.ts`) isolates certificate secrets; client integrates `agora-rtc-sdk-ng` & `agora-rtc-react`. | Highlight genuine RTC integration and token boundary. |
| **Teacher-in-the-Loop Authority** | `VERIFIED` | UID partition logic implemented (Teacher UIDs 1000–1999, Student UIDs 2000–8999) with authority mute/hold state. | Clearly state co-teacher architecture where human teacher maintains authority. |
| **Pedagogical State Machines** | `PARTIALLY VERIFIED` | TypeScript engines exist for rolling context, quiz generation, and gap detection; however, end-to-end multi-speaker live speech requires active external Agora and LLM keys. | Replaced claims of "autonomous classroom instructor" with "synchronous AI co-teacher prototype". |
| **Production Classroom Scale** | `MISLEADING` | Previous copy hinted at active multi-school adoption. No live institutional deployment exists. | Removed all implied institutional metrics; clearly stated as an architectural prototype. |

**Assigned Standard Status:** `Prototype`

---

### 2.3 Agora Medicare AI / CareSphere (Conversational Medical Assistant)
*Voice-first clinical triage and patient query assistant exploring low-latency streaming and guardrails.*

| Item / Claim | Classification | Evidence & Inspection Details | Remediation Action |
| :--- | :--- | :--- | :--- |
| **RTC Token & WebSocket Audio Stream** | `VERIFIED` | `caresphere-backend` includes FastAPI Agora token endpoint (`POST /api/agora/token`) and WebSocket audio route (`/ws/voice`). | Emphasize real-time audio pipeline and low-latency protocol design. |
| **Emergency Escalation Protocol** | `VERIFIED` | Immediate keyword & semantic detection triggers emergency bypass for acute conditions (chest pain, breathing distress, stroke symptoms). | Highlight safety-first triage logic in engineering breakdown. |
| **RAG Knowledge Base & Prompt Bounds** | `PARTIALLY VERIFIED` | Pinecone vector search schemas and strict prompt restrictions (no diagnosis, max 40-word responses) are defined. | Explicitly note that this is an experimental triage prototype, NOT a certified clinical diagnostic system. |
| **Medical Device Claims** | `MISLEADING` | Any phrasing suggesting clinical certification or diagnostic authority is impermissible. | Enforced clear disclaimers that system is non-diagnostic and informational. |

**Assigned Standard Status:** `Prototype`

---

### 2.4 AI Privacy Risk Simulator
*Full-stack visual privacy assessment dashboard scanning images for PII, biometric faces, and QR code exposure.*

| Item / Claim | Classification | Evidence & Inspection Details | Remediation Action |
| :--- | :--- | :--- | :--- |
| **React + TypeScript Frontend** | `VERIFIED` | Clean UI with interactive Canvas overlays displaying bounding boxes for detected risk regions. | Highlight full-stack UI engineering and coordinate mapping. |
| **Asynchronous Scan Pipeline** | `VERIFIED` | Flask backend (`app.py`) processes uploads in non-blocking background threads with real-time status polling (0–100%). | Document the asynchronous lifecycle and status polling API. |
| **Computer Vision Integration** | `VERIFIED` | Integrates Pillow (EXIF), EasyOCR + regex (PII text), MediaPipe / Haar cascade (faces), and OpenCV / pyzbar (QR codes). | Distinguish between model integration and custom model training: explicitly state models were integrated, not trained from scratch. |
| **Gemini Summary Failsafe** | `VERIFIED` | Failsafe exception handler ensures automated structured summary fallback if API key or network fails. | Highlight defensive resilience in pipeline architecture. |

**Assigned Standard Status:** `Working demo`

---

## 3. Site-Wide Credibility & Infrastructure Audit

### 3.1 Dead Links & 404 Targets
- **Target:** `/resume.pdf` referenced in `Navbar.tsx` and `CommandMenu.tsx`.
- **Finding:** `BROKEN` (404 Not Found — file did not exist in `public/`).
- **Remediation:** Routed resume actions to a clean, transparent contact request mechanism (`mailto:yathusaini10@gmail.com?subject=Resume%20Request%20-%20Yatharth%20Saini`) with explicit label indicator, eliminating 404 errors for recruiters.

### 3.2 Metrics & Stats Section (`Stats.tsx`)
- **Previous Claim:** `100% CODE TRANSPARENCY - Public repositories, complete documentation & live demos`.
- **Finding:** `MISLEADING`. Not every experimental prototype has production cloud hosting or exhaustive documentation.
- **Remediation:** Replaced with verifiable facts:
  - `04` Featured Builds (Curated full-stack & AI engineering projects).
  - `195+` Automated Tests Passed (Reproducible Pytest suite across active frameworks).
  - `100%` Open Codebase (Public GitHub repositories with inspectable architectures).

### 3.3 Technical Stack Ledger (`Stack.tsx`)
- **Previous Format:** Loose clusters with potential ambiguity regarding language proficiency.
- **Finding:** Arbitrary proficiency bars or ungrounded claims risk credibility in interviews.
- **Remediation:** Grouped strictly into functional engineering disciplines with zero arbitrary percentages:
  - **Languages:** Python, TypeScript, JavaScript, C, C++, SQL
  - **Frontend:** React, Next.js, Vite, Tailwind CSS, HTML5 / Canvas
  - **Backend:** FastAPI, Flask, Node.js, REST APIs
  - **Databases & Storage:** SQLite, PostgreSQL (Supabase), Pinecone (Vector)
  - **AI & Streaming:** Agora RTC / RTM, Gemini API, ElevenLabs SDK, Deepgram STT, MediaPipe, EasyOCR
  - **Tools & DevOps:** Git, GitHub, Docker, Pytest, Linux, Postman

### 3.4 Candidate Identity & Positioning
- **Audited Phrasing:** "AI Voice Specialist" / "Voice AI Architect".
- **Finding:** Over-indexing on Voice AI undercuts broad software engineering and full-stack capabilities.
- **Remediation:** Standardized across all headers, meta tags, and schema data:
  **`CSE STUDENT · DEVELOPER · AI BUILDER`**
  Emphasizing software development, AI systems, practical problem solving, and modern full-stack web applications.

---

## 4. Verification & Build Results

All local verifications executed clean with zero regressions:
```bash
# TypeScript compiler verification
npx tsc -b
# Result: 0 errors

# Linter verification
npm run lint (oxlint)
# Result: 0 warnings, 0 errors across 29 files

# Vite production build
npm run build
# Result: ✓ built in 1.21s (dist/assets/index-*.js, dist/assets/index-*.css)
```

---

## 5. Summary of Remediations & Recruiter Defensibility

1. **Defensible Project Scopes**: Every project card now clearly specifies the problem tackled, the candidate's exact contributions versus third-party libraries/APIs, inspectable evidence (repo links, test suites), and a single honest status tag (`Working demo`, `Verified locally`, `Prototype`).
2. **Zero Dead Links**: Removed broken `/resume.pdf` reference and replaced with a responsive direct inquiry route.
3. **No Fake Numbers**: Eliminated inflated user counts, uptime claims, or unverified performance benchmarks.
4. **Preserved Visual Fidelity**: Maintained the dark editorial aesthetic, Instrument Serif typography, Framer Motion transitions, and clean bento cards.


---

## 6. Discoverable Feline Easter Eggs Technical Documentation

Four discrete, non-intrusive easter eggs were implemented across the portfolio to reward curious visitors without distracting recruiters or compromising the professional editorial aesthetic:

| Easter Egg | Component / Location | Trigger Mechanism | Interactive Behavior | Dismissal & A11y |
| :--- | :--- | :--- | :--- | :--- |
| **1. The Sneaky Corner Cat** | `CornerCat` in [`CatEasterEggs.tsx`](file:///C:/Users/Yatha/.gemini/antigravity/scratch/yatharth-portfolio/src/components/CatEasterEggs.tsx) | Fixed bottom-right corner. Automatically peeks up for 4s every 35–50s, or on hover. | Clicking/tapping raises the cat and shows a compact speech bubble: *"Clean code spotted. 195/195 tests verified."* | Auto-tucks after 3.5s; click `X` to silence for current session. Keyboard accessible (`tabIndex={0}`, Space/Enter). |
| **2. The Secret Paw** | `SecretPawModal` in [`CatEasterEggs.tsx`](file:///C:/Users/Yatha/.gemini/antigravity/scratch/yatharth-portfolio/src/components/CatEasterEggs.tsx) & trigger in [`Footer.tsx`](file:///C:/Users/Yatha/.gemini/antigravity/scratch/yatharth-portfolio/src/components/Footer.tsx) | Discreet cat paw ornament button beside footer status indicator. | Opens a floating modal dossier with a sleeping feline line-art illustration and engineering note on precision & diligence. | Closes on `Escape` key, click outside backdrop, or close button (`X`). Body scroll locked while open. |
| **3. The Curious Cat** | `CuriousCatToast` in [`CatEasterEggs.tsx`](file:///C:/Users/Yatha/.gemini/antigravity/scratch/yatharth-portfolio/src/components/CatEasterEggs.tsx) & trigger in [`Navbar.tsx`](file:///C:/Users/Yatha/.gemini/antigravity/scratch/yatharth-portfolio/src/components/Navbar.tsx) | Clicking the "YS" logo in the Navbar 5 times in quick succession (< 2.5s). | Displays a top-right floating toast: *"🐾 Easter Egg Unlocked: 5/5 logo clicks. Inspection diligence +100!"* | Auto-fades after 4.5s or click `X`. Does not impede normal anchor link navigation. |
| **4. The Konami Constellation** | `KonamiCats` in [`CatEasterEggs.tsx`](file:///C:/Users/Yatha/.gemini/antigravity/scratch/yatharth-portfolio/src/components/CatEasterEggs.tsx) | Keyboard sequence: `↑ ↑ ↓ ↓ ← → ← → B A` | Six minimalist line-art cat silhouettes float upward in a soft rose glow constellation. | Auto-dismisses after 5.5s, or instantly on `Escape` or mouse click. Disabled when typing into inputs/forms. Strictly disabled if `prefers-reduced-motion` is active. |

---

## 7. Developer Activity Dashboard (GitHub + LeetCode) Technical Documentation

A dedicated activity dashboard section ([`DeveloperDashboard.tsx`](file:///C:/Users/Yatha/.gemini/antigravity/scratch/yatharth-portfolio/src/components/DeveloperDashboard.tsx)) was integrated at the bottom of the portfolio immediately prior to the footer, providing live, verifiable evidence of active open-source contribution and algorithmic problem-solving:

### 7.1 Data Sources & Endpoints
- **GitHub Identity & Repositories:** Direct GitHub REST API v3 (`https://api.github.com/users/laggincodes`). Returns verified public repository count (7), follower count, and creation date.
- **GitHub Contribution Calendar:** Real public contribution dataset retrieved via `https://github-contributions-api.jogruber.de/v4/laggincodes?y=last`. Returns exact day-by-day contribution counts (577 contributions in the past year) and activity levels across 53 weeks (367 days).
- **LeetCode Problem Solving Statistics:** Live public metrics retrieved via `https://leetcode-api-faisalshohag.vercel.app/laggincodes`. Returns 147 total solved problems (99 Easy, 43 Medium, 5 Hard), 81.0% acceptance rate, and global ranking (#1,227,999).

### 7.2 Pink Contribution Calendar Specification
The GitHub contribution calendar was implemented as an SVG grid styled in the portfolio's refined muted rose palette:
- **Level 0 (None):** `#241C25` (Dark) / `#EFE8EC` (Light)
- **Level 1 (Low):** `#633047` (Dark) / `#C9829A` (Light)
- **Level 2 (Moderate):** `#A64D70` (Dark) / `#B86882` (Light)
- **Level 3 (High):** `#D97FA0` (Dark) / `#9C4362` (Light)
- **Level 4 (Highest):** `#F2B6CC` (Dark) / `#7A2845` (Light)
- **Interactive Tooltip:** Hovering any day square dynamically shows the formatted date and verified contribution count.
- **Responsive Scroll:** The 53-week SVG grid is housed in an `overflow-x-auto` wrapper with smooth horizontal scrolling on mobile viewports.

### 7.3 Performance, Caching & Resilience
- **Zero Hardcoded Fabrications:** All numbers represent real profile metrics.
- **Session Caching (`sessionStorage`):** API responses are cached locally with a 30-minute TTL (`CACHE_TTL_MS = 1800000`). This completely eliminates redundant network calls and prevents rate limits during normal user browsing and page reloads.
- **Graceful Fallbacks:** In case of network disconnection or third-party API timeout (enforced with a 6-second `AbortController`), verified snapshot baselines are maintained and direct profile links allow immediate recruiter verification without broken UI states.

---

## 8. Visual Refinement — Soft Light-Pink Aesthetic & Restored Hero Video

### 8.1 GitHub Hero Background Video Restoration
- **Inspection & Forensic Audit:**
  - Prior local asset: `public/hero-background.mp4` was 9,085,964 bytes (the outdated initial commit `5786fd8` from August 2026).
  - Remote inspection: `git fetch origin` confirmed `origin/main` commit `a523826` updated the video asset to 11,409,651 bytes (ISO base media file `mp42/mp41` with fast-start `moov` atom).
  - Restoration method: Executed targeted checkout `git checkout origin/main -- public/hero-background.mp4` without resetting or touching any other files in the working directory.
  - Verification: Confirmed file size `11,409,651` bytes matching GitHub `origin/main` bit-for-bit. HEAD request on Vite server returned `200 OK` with `Content-Type: video/mp4` and `Content-Length: 11409651`.

### 8.2 Improved Hero Video Presentation
- Eliminated previous harsh `invert(1)` filter that was washing out video detail.
- Layered a delicate blush ambient overlay (`#FCEAF1/45`) with directional left-to-right gradient protection (`#FFF5F8/90` → transparent) to guarantee maximum contrast and readability for the hero headline and navbar.
- Autoplay, muted, loop, inline playback, and cover sizing remain fully active with zero layout shift.

### 8.3 Soft Light-Pink Editorial Palette (Design Tokens)
The application was re-architected around a soothing light-pink aesthetic as the primary visual identity:
- **Main background:** `#FFF5F8` (soft pink-white)
- **Secondary background:** `#FCEAF1` (gentle blush)
- **Card surfaces:** `#FFF9FB` (warm, nearly white pink)
- **Primary pink:** `#E9A1BC` (muted pastel rose)
- **Secondary pink:** `#D982A5` (dusty rose)
- **Deep rose:** `#A94F75` (emphasis and high-contrast accessible text)
- **Primary text:** `#30242D` (warm dark plum — 14.2:1 contrast ratio)
- **Secondary text:** `#766572` (muted mauve — 5.1:1 contrast ratio)
- **Borders:** `#F0D5E0` (subtle pink-gray)

All interactive surfaces (Navbar, Hero, Project Cards, Build Log, Stats, About, Stack, Contact, Developer Dashboard, Feline Easter Eggs, Case Study Modal, and Command Palette) now adhere strictly to these design tokens.

---

## 9. Final UI Correction — Two Distinct Feline Elements

### 9.1 Upper-Left Ginger Cursor Cat Companion (`GingerCursorCat.tsx`)
- **Trigger Location:** Fixed in the upper-left corner of the viewport (`fixed top-4 left-4 sm:top-5 sm:left-6 z-40`).
- **Initial State:** Hidden until user clicks the trigger.
- **Toggle Behavior:** Clicking toggles activation state (`isActive`). Clicking again completely dismisses the companion.
- **Motion & Tracking Mechanics:**
  - Employs smooth linear interpolation (`lerp`) via `requestAnimationFrame` with a trailing offset (`+18px, +18px`) so the follower never obscures the cursor hotspot or underlying text.
  - Directional awareness: dynamically mirrors orientation (`scaleX(1)` vs `scaleX(-1)`) based on mouse velocity vector `dx`.
  - Paws and tail animate softly while in motion; transitions to a relaxed resting state when the mouse pauses.
  - Strictly non-intrusive: marked with `pointer-events-none` and `will-change-transform` at `z-[99990]`, preserving complete interactivity of all links, cards, and buttons.
- **Accessibility & Mobile Support:**
  - Evaluates `prefers-reduced-motion: reduce` to disable rapid continuous tracking.
  - Evaluates `pointer: coarse` / touch devices: on mobile, provides a calm, resting companion badge in the corner with a friendly toast notification rather than an unresponsive mouse follower.

### 9.2 Bottom-Right Floating Social Launcher (`SocialLauncher.tsx`)
- **Trigger Location:** Fixed in the bottom-right corner of the viewport (`fixed bottom-5 right-5 sm:bottom-6 sm:right-8 z-40`), replacing the previous peeking cat icon.
- **Styling:** Soft blush circular backdrop (`w-11 h-11 sm:w-12 sm:h-12`) with subtle mauve border, hover scale/rotation animation, and an accessible label (`"Open social links"`).
- **Floating Panel:** Opens smoothly above the trigger within the viewport bounds (`bottom-14 right-0`, max-width bounded to prevent horizontal overflow).
- **Heading:** `"Find me elsewhere"` with subtitle `"Direct communication & profiles"`.
- **Verified Destination Links (5 Total):**
  1. **Email:** `mailto:yathusaini10@gmail.com`
  2. **GitHub:** `https://github.com/laggincodes`
  3. **LinkedIn:** `https://www.linkedin.com/in/yatharth-saini-6bb584389`
  4. **LeetCode:** `https://leetcode.com/u/laggincodes/`
  5. **Instagram:** `https://www.instagram.com/yatharthsaini1007/`
- **Dismissal Controls:**
  - Clicks outside the panel (via document listener).
  - Pressing `Escape` key.
  - Clicking the floating launcher trigger button again.

---

## 10. Layout Hierarchy Update — Activity & Practice to Slide 2

### 10.1 Slide Progression & Section Ordering
The section layout was reorganized to present the live engineering metrics immediately following the Hero introduction:
1. **Slide 1 — Hero:** Editorial cover spread, identity, focus metadata ledger, primary navigation, and scroll explore anchor.
2. **Slide 2 — Activity & Practice (`DeveloperDashboard.tsx`):** Two-column live dashboard containing the pink GitHub contribution calendar, verified commit/repo counters, LeetCode problem-solving breakdown, and feline motif. Framed with `min-h-[100svh] flex flex-col justify-center` on desktop for full-screen slide presentation while allowing natural vertical expansion on mobile screens.
3. **Slide 3 — Selected Work (`ProjectGrid.tsx`):** 4 audited featured builds (`VoiceBench`, `EchoTutor`, `Medicare AI`, `Privacy Simulator`).
4. **Slide 4 — Build Log (`BuildLog.tsx`):** Chronological milestone ledger.
5. **Slide 5 — About (`About.tsx`):** Engineering biography and verified credentials.
6. **Slide 6 — Technical Arsenal (`Stack.tsx`):** 4 categorised skill ledgers.
7. **Slide 7 — Contact (`Contact.tsx`):** Interactive communication channels and infinite marquee.
8. **Footer (`Footer.tsx`):** Closing editorial colophon and secret paw trigger.

### 10.2 Navigation & Section Renumbering
- **Navbar Integration:** Added `Activity` (`#activity`) to `NAV_ITEMS` (`Home`, `Activity`, `Work`, `About`). Added passive scroll-position observer to dynamically highlight the active section pill.
- **Hero Scroll Exploration:** Updated bottom editorial scroll anchor (`SCROLL TO EXPLORE`) to point directly to `#activity`.
- **Command Palette:** Elevated `View Developer Activity (GitHub & LeetCode)` to the top navigation tier.
- **Section Numbering:** Renumbered sequentially from `01` to `07` without collisions or duplicate section indices.

---

## 11. Light Mode Refinement — Warm, Intimate Blush Pink Atmosphere

### 11.1 Design Philosophy & Atmospheric Shift
The previous light mode was overly white, pale, and washed out. In this refinement, the light mode was upgraded to an intimate, velvety blush-pink environment that feels warm, romantic, and soothing while preserving sharp typography, editorial hierarchy, and technical rigor.

### 11.2 Core Design Tokens
- **Main Page Background:** `#F3DCE5` — warm, skin-like blush pink.
- **Alternate Section Background:** `#EFD0DC` — deeper, soft rose pink for subtle section separation.
- **Card Surfaces:** `#F8E6ED` — velvety pale blush creating soft depth.
- **Elevated Surfaces & Highlights:** `#FBEAF0` — warm pink for hover elevations and active states.
- **Primary Pink:** `#D98BA8` — muted rose for interactive accents and progress meters.
- **Secondary Pink:** `#C87998` — dusty rose for badges, borders, and secondary highlights.
- **Deep Rose:** `#9E526F` — emphasis, section indices, and interactive links.
- **Main Text:** `#30212A` — warm plum-charcoal offering strong, accessible contrast against `#F3DCE5`.
- **Secondary Text:** `#725965` — muted mauve for metadata, subtitles, and labels.
- **Borders & Dividers:** `#E3B9CA` — soft rose dividers that define space without harsh lines.
- **Ambient Shadows:** Plum-tinted low-opacity shadows (`rgba(48, 33, 42, 0.08)`).

### 11.3 Hero Video Blending & Atmospheric Depth
- Restored `/hero-background.mp4` video background integrated with `opacity-38 mix-blend-multiply contrast-[1.03] brightness-[1.01] saturate-[0.9]`.
- Ambient gradient veil (`from-[#F3DCE5]/92 via-[#F3DCE5]/60 to-[#EFD0DC]/35`) guarantees readable foreground typography while retaining video motion.
- Dual radial ambient blooms (`bg-[#D98BA8]/20` behind hero title, `bg-[#C87998]/16` in lower hero) provide subtle warm luminescent depth.

### 11.4 Component Coverage
- **`Navbar.tsx`:** Floating translucent capsule (`bg-[#F8E6ED]/90 backdrop-blur-md border-[#E3B9CA]`), active nav pill (`bg-[#D98BA8]/20 text-[#9E526F] border-[#D98BA8]/40`), dark plum CTA button (`bg-[#30212A] text-[#FBEAF0]`).
- **`DeveloperDashboard.tsx`:** 5-level warm pink contribution calendar (`#EFD0DC`, `#D98BA8`, `#C87998`, `#B26182`, `#9E526F`), blush stat boxes (`bg-[#EFD0DC]/70 border-[#E3B9CA]/70`), soft plum tooltip.
- **`ProjectCard.tsx` & `ProjectGrid.tsx`:** Velvety cards (`bg-[#F8E6ED] hover:bg-[#FBEAF0] border-[#E3B9CA] hover:border-[#D98BA8]`), muted rose technical pills (`bg-[#EFD0DC] border-[#E3B9CA] text-[#30212A]`), deep rose emphasis.
- **`CaseStudyModal.tsx`:** Full modal container (`bg-[#F8E6ED] border-[#E3B9CA]`), soft plum headings and implementation bullets.
- **`BuildLog.tsx` & `Stack.tsx`:** Alternate section tinting (`bg-[#EFD0DC]/40`), dividers (`border-[#E3B9CA]`), deep rose indices.
- **`Contact.tsx` & `Footer.tsx`:** Warm blush split editorial layout, action rows with plum text, muted pink social links, and footer colophon with resting cat mark.
- **`GingerCursorCat.tsx` & `SocialLauncher.tsx`:** Coordinated triggers and panels in blush pink with plum hover states.
- **`CommandMenu.tsx` & `LoadingScreen.tsx`:** Coordinated warm blush modals, input bars, keyboard badges, and pre-loader.

### 11.5 Strict Dark-Mode Preservation
All light mode refinements strictly target `:root`, light classes, and un-prefixed Tailwind rules. Dark mode remains completely untouched (`#181318` background, `#221A22` surfaces, `#FFF5F8` foreground text, `#3B2D38` borders), preserving user choice across both light and dark aesthetics.





