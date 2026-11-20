# Expert Biology — GitHub Build & Android APK Requirements

**Application:** Expert Biology (Academic Biology Dictionary, Virology Research Database, Interactive Diagrams, Lecture Atlas, Quizzes, and Bio Expert Assistant)  
**Author:** Imran Khan (Shah Saib) — Biology Teacher, Graduate from Russia  

This document specifies all runtime prerequisites, dependencies, environment configuration, and GitHub Actions workflows required to build both the **web application** and the **Android APK** from GitHub.

---

## 1. System & Runtime Prerequisites

| Requirement | Minimum Version | Recommended | Notes |
| :--- | :--- | :--- | :--- |
| **Node.js** | `>= 20.11.0` | `22.x LTS` | Required for native ESM and TypeScript execution |
| **npm** | `>= 10.0.0` | `10.x+` | Package management and dependency resolution |
| **Java JDK** | `21` | `21 (Temurin)` | Required by Capacitor 8 / Android Gradle Plugin |
| **Android SDK** | API `35` / `36` | Installed in CI | Automatically provisioned by `android-actions/setup-android` |
| **Port (Web/API)** | `3000` | `3000` | Configurable via `PORT` environment variable |

---

## 2. Core Dependencies (`package.json`)

### Web, Server & Mobile Packaging Dependencies
- `react` (`^19.0.1`) & `react-dom` (`^19.0.1`) — UI rendering engine
- `@capacitor/core`, `@capacitor/cli`, `@capacitor/android` (`^8.x`) — Native Android WebView shell & Gradle project generator
- `express` (`^4.21.2`) — Backend HTTP server & static asset serving
- `@google/genai` (`^3.6.1`) — Server-side Gemini API SDK powering **Bio Expert Assistant**
- `lucide-react` (`^0.546.0`) — Vector interface iconography
- `motion` (`^12.23.24`) — Smooth UI transitions
- `dotenv` (`^17.2.3`) — Environment variable loading
- `vite` (`^8.3.0`), `@vitejs/plugin-react` (`^6.1.1`), `@tailwindcss/vite` (`^4.3.3`) — Bundler & Tailwind CSS v4 compiler

### Development Dependencies
- `typescript` (`^7.0.2`), `tsx` (`^4.21.0`)
- `tailwindcss` (`^4.3.3`), `autoprefixer` (`^10.4.21`), `esbuild` (`^0.25.0`)
- `@types/node`, `@types/react`, `@types/react-dom`, `@types/express`

---

## 3. Environment & GitHub Repository Configuration

### Web & Server `.env`
```env
# Required for Bio Expert Assistant (/api/bio-expert)
GEMINI_API_KEY="your_gemini_api_key_here"

# Optional: Server port (defaults to 3000)
PORT=3000

# Optional: Set to production when serving compiled dist/ assets
NODE_ENV=production
```

### Optional GitHub Variables / Secrets for Android APK
1. **Bio Expert Assistant inside APK (Optional)**:
   - Set a GitHub Actions **Variable** named `VITE_API_BASE_URL` pointing to your deployed Express backend URL (for example, `https://your-service.run.app`).
   - All offline study modules (Biology Dictionary, Virology Database, Interactive Diagrams, Lecture Notes, Quizzes, Flashcards, Bookmarks, Night Mode, and Progress Tracker) work 100% offline inside the APK even without a backend URL.
2. **Signed Release APK (Optional)**:
   - By default, `.github/workflows/build-apk.yml` builds both a directly installable **Debug APK** (`app-debug.apk`) and an unsigned **Release APK** (`app-release-unsigned.apk`).
   - If you also want a Play-Store-ready signed release APK, add these optional GitHub Secrets: `ANDROID_KEYSTORE_BASE64`, `ANDROID_KEYSTORE_PASSWORD`, `ANDROID_KEY_ALIAS`, `ANDROID_KEY_PASSWORD`.

---

## 4. Local Setup & Verification Commands

```bash
# 1. Install dependencies
npm install

# 2. Type-check TypeScript
npm run lint

# 3. Build web assets into dist/ and sync into android/
npm run android:sync

# 4. Build Debug APK locally (requires JDK 21 & Android SDK)
cd android && ./gradlew assembleDebug
# Output: android/app/build/outputs/apk/debug/app-debug.apk
```

---

## 5. GitHub Actions APK Build Workflow

The repository includes `.github/workflows/build-apk.yml`, which triggers automatically on pushes to `main` or manual dispatch (`workflow_dispatch`) from the **Actions** tab on GitHub:
1. Installs Node.js 22 and Java 21 (Temurin)
2. Sets up the Android SDK
3. Runs `npm install` and `npm run lint`
4. Runs `npm run build` and `npx cap sync android`
5. Compiles `app-debug.apk` (and `app-release-unsigned.apk` / signed `app-release.apk`) via Gradle
6. Uploads the compiled `.apk` files under **Artifacts** in the GitHub Actions run summary for direct download onto any Android device.
