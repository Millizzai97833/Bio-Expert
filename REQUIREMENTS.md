# Expert Biology — GitHub Build & Deployment Requirements

**Application:** Expert Biology (Academic Biology Dictionary, Virology Research Database, Interactive Diagrams, Lecture Atlas, Quizzes, and Bio Expert AI Assistant)  
**Author:** Imran Khan (Shah Saib) — Biology Teacher, Graduate from Russia  

This document specifies all runtime prerequisites, dependencies, environment configuration, and build steps required to clone, verify, and deploy **Expert Biology** via GitHub.

---

## 1. System & Runtime Prerequisites

| Requirement | Minimum Version | Recommended | Notes |
| :--- | :--- | :--- | :--- |
| **Node.js** | `>= 20.11.0` | `22.x LTS` | Required for native ESM and TypeScript execution |
| **npm** | `>= 10.0.0` | `10.x+` | Package management and lockfile resolution |
| **Git** | `>= 2.38.0` | Latest | Source control and GitHub Actions triggers |
| **Port** | `3000` | `3000` | Configurable via `PORT` environment variable |

---

## 2. Core Dependencies (`package.json`)

### Production Dependencies
- `react` (`^19.0.1`) & `react-dom` (`^19.0.1`) — UI rendering engine
- `express` (`^4.21.2`) — Backend HTTP server & static asset serving
- `@google/genai` (`^2.29.1` or `latest`) — Server-side Gemini API SDK powering **Bio Expert**
- `lucide-react` (`^0.546.0`) — Vector interface iconography
- `motion` (`^12.23.24`) — Smooth compositor-only UI transitions
- `dotenv` (`^17.2.3`) — Environment variable loading
- `vite` (`^8.3.0`), `@vitejs/plugin-react` (`^6.1.1`), `@tailwindcss/vite` (`^4.3.3`) — Bundler & Tailwind CSS v4 compiler

### Development Dependencies
- `typescript` (`^7.0.2`) — Static type verification
- `tsx` (`^4.21.0`) — Development TypeScript server runner
- `tailwindcss` (`^4.3.3`), `autoprefixer` (`^10.4.21`), `esbuild` (`^0.25.0`)
- `@types/node`, `@types/react`, `@types/react-dom`, `@types/express`

---

## 3. Environment Variables

Create a `.env` file locally (never commit `.env` to GitHub) or configure repository secrets in your hosting provider / GitHub Actions:

```env
# Required for Bio Expert AI scholarly assistant (/api/bio-expert)
GEMINI_API_KEY="your_gemini_api_key_here"

# Optional: Server port (defaults to 3000)
PORT=3000

# Optional: Set to production when serving compiled dist/ assets
NODE_ENV=production
```

---

## 4. Local Setup & Verification Commands

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/expert-biology.git
cd expert-biology

# 2. Install dependencies cleanly
npm ci

# 3. Type-check the codebase
npm run lint

# 4. Run development server (Express + Vite HMR middleware on port 3000)
npm run dev

# 5. Build production frontend bundle into dist/
npm run build

# 6. Start production server
NODE_ENV=production npm start
```

---

## 5. GitHub Actions CI Workflow (`.github/workflows/ci.yml`)

To automatically verify TypeScript compilation and Vite production builds on every push or pull request to `main`, create `.github/workflows/ci.yml`:

```yaml
name: Expert Biology CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-and-verify:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js 22
        uses: actions/setup-node@v4
        with:
          node-version: '22'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run TypeScript type check
        run: npm run lint

      - name: Build production bundle
        run: npm run build
```

---

## 6. Architecture Overview for Contributors

- `server.ts` — Express server handling `/api/bio-expert` (Gemini `gemini-4-hydrogen` with formal academic system instruction) and serving the Vite SPA.
- `src/data/` — Offline-capable academic datasets (`dictionaryData.ts`, `virusData.ts`, `lecturesData.ts`, `diagramsData.ts`, `quizData.ts`).
- `src/components/` — Modular views for Dictionary, Virology Research Database, Interactive SVG Diagrams, Lecture Reader, Quiz & Flashcard Runner, Progress Tracker, Bookmarks Manager, and Bio Expert Assistant.
- `src/assets/images/` — High-resolution scientific atlas plates copied automatically into `dist/` during `vite build`.
