import { ArrowRight, BookOpen, Dna, Microscope } from 'lucide-react';

interface SplashIntroProps {
  onEnter: () => void;
}

export function SplashIntro({ onEnter }: SplashIntroProps) {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-50 dark:bg-[#0B1117] text-slate-900 dark:text-slate-100 px-6 py-10 sm:px-12 lg:px-20 transition-colors">
      <div className="max-w-5xl mx-auto w-full flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
        <span>Academic Compendium · Biological Sciences &amp; Virology</span>
        <span className="font-mono">Edition 2026</span>
      </div>

      <main className="max-w-5xl mx-auto w-full my-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <p className="text-sm font-medium text-teal-800 dark:text-teal-300 tracking-wide">
              Comprehensive Study Atlas &amp; Reference Platform
            </p>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-slate-950 dark:text-white leading-[1.06]">
              Expert Biology
            </h1>

            <div className="pt-2 space-y-1.5 border-t border-slate-200 dark:border-slate-800">
              <p className="text-xl sm:text-2xl font-display font-medium text-slate-800 dark:text-slate-100">
                Built by Imran Khan (Shah Saib)
              </p>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
                Biology Teacher · Graduate from Russia
              </p>
            </div>

            <p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              An academic reference uniting a biological dictionary, a Baltimore-classified virology research database, interactive cellular and physiological diagrams, structured lecture notes, active-recall quizzes, and the scholarly Bio Expert research assistant.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onEnter}
                className="min-h-[48px] px-7 py-3 bg-teal-800 hover:bg-teal-900 dark:bg-teal-500 dark:hover:bg-teal-400 text-white dark:text-slate-950 font-semibold text-base rounded-xl transition-colors inline-flex items-center gap-3 shadow-sm cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
              >
                <span>Enter Expert Biology</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="pt-4 grid grid-cols-3 gap-4 max-w-lg text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-teal-700 dark:text-teal-400 shrink-0" />
                <span>36+ Core Definitions</span>
              </div>
              <div className="flex items-center gap-2">
                <Microscope className="w-4 h-4 text-teal-700 dark:text-teal-400 shrink-0" />
                <span>12 Virus Monographs</span>
              </div>
              <div className="flex items-center gap-2">
                <Dna className="w-4 h-4 text-teal-700 dark:text-teal-400 shrink-0" />
                <span>6 Interactive Diagrams</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131C26] p-3">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-900 flex items-center justify-center">
                <img
                  src="/src/assets/images/atlas_virology_plate_1795162823313.jpg"
                  alt="Scientific plate of Bacteriophage T4 and enveloped virion ultrastructure"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-3 px-1 pb-1 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>Plate I · Viral Ultrastructure</span>
                <span className="font-mono">T4 / Virion</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="max-w-5xl mx-auto w-full pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400">
        <span>Prepared for University &amp; Pre-Medical Biological Study</span>
        <span>Imran Khan (Shah Saib) · Biology Educator</span>
      </footer>
    </div>
  );
}
