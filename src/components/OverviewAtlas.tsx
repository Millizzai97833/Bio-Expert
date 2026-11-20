import { useState, useMemo } from 'react';
import {
  ArrowRight,
  BookOpen,
  Bookmark,
  CheckCircle2,
  Dna,
  GraduationCap,
  Microscope,
  Search,
  TrendingUp,
} from 'lucide-react';
import { AppTab, StudyProgress } from '../types/biology';
import { DICTIONARY_TERMS } from '../data/dictionaryData';
import { VIRUS_MONOGRAPHS } from '../data/virusData';
import { LECTURE_MODULES } from '../data/lecturesData';
import { BIOLOGY_DIAGRAMS } from '../data/diagramsData';

interface OverviewAtlasProps {
  progress: StudyProgress;
  bookmarkCount: number;
  onNavigate: (tab: AppTab, itemId?: string) => void;
  onOpenBookmarks: () => void;
  onConsultBioExpert: (topic: string) => void;
}

export function OverviewAtlas({
  progress,
  bookmarkCount,
  onNavigate,
  onOpenBookmarks,
  onConsultBioExpert,
}: OverviewAtlasProps) {
  const [query, setQuery] = useState('');

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return null;

    return {
      terms: DICTIONARY_TERMS.filter(
        (t) =>
          t.term.toLowerCase().includes(q) ||
          t.discipline.toLowerCase().includes(q) ||
          t.definition.toLowerCase().includes(q)
      ).slice(0, 5),
      viruses: VIRUS_MONOGRAPHS.filter(
        (v) =>
          v.name.toLowerCase().includes(q) ||
          v.scientificName.toLowerCase().includes(q) ||
          v.family.toLowerCase().includes(q) ||
          v.baltimoreGroup.toLowerCase().includes(q)
      ).slice(0, 4),
      lectures: LECTURE_MODULES.filter(
        (l) =>
          l.title.toLowerCase().includes(q) ||
          l.discipline.toLowerCase().includes(q) ||
          l.summary.toLowerCase().includes(q)
      ).slice(0, 4),
      diagrams: BIOLOGY_DIAGRAMS.filter(
        (d) =>
          d.title.toLowerCase().includes(q) ||
          d.discipline.toLowerCase().includes(q)
      ).slice(0, 4),
    };
  }, [query]);

  const totalResultsCount = searchResults
    ? searchResults.terms.length +
      searchResults.viruses.length +
      searchResults.lectures.length +
      searchResults.diagrams.length
    : 0;

  const avgQuizScore = useMemo(() => {
    if (progress.quizAttempts.length === 0) return null;
    const sum = progress.quizAttempts.reduce((acc, a) => acc + a.percentage, 0);
    return Math.round(sum / progress.quizAttempts.length);
  }, [progress.quizAttempts]);

  return (
    <div className="space-y-10">
      {/* Hero & Global Academic Search */}
      <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131C26] p-6 sm:p-8 lg:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="text-xs text-slate-500 dark:text-slate-400 flex flex-wrap items-center gap-2">
              <span>Expert Biology</span>
              <span aria-hidden="true">·</span>
              <span>Imran Khan (Shah Saib), Biology Teacher · Graduate from Russia</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-tight text-slate-950 dark:text-white leading-[1.12]">
              Academic Biology Dictionary, Virology Database &amp; Visual Atlas
            </h1>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              Locate rigorous biological definitions, inspect Baltimore-classified viral monographs, explore interactive anatomical schematics, and test active recall with scholarly rationales.
            </p>

            {/* Unified Search Input */}
            <div className="relative max-w-xl pt-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search definitions, viruses (e.g. SARS-CoV-2, T4), lectures, or diagrams..."
                aria-label="Search across all biology resources"
                className="w-full min-h-[48px] pl-11 pr-4 py-3 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-[#0B1117] text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-700 dark:focus:ring-teal-400"
              />
            </div>

            {/* Search Results Dropdown Panel */}
            {searchResults && (
              <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#0B1117] p-4 space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span>
                    Search matches for &ldquo;{query.trim()}&rdquo; ({totalResultsCount})
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuery('')}
                    className="text-teal-700 dark:text-teal-400 hover:underline font-medium cursor-pointer"
                  >
                    Clear search
                  </button>
                </div>

                {totalResultsCount === 0 ? (
                  <div className="py-4 text-sm text-slate-600 dark:text-slate-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <span>No indexed entry matched that query directly.</span>
                    <button
                      type="button"
                      onClick={() => onConsultBioExpert(`Provide a formal biological explanation of: ${query.trim()}`)}
                      className="min-h-[40px] px-4 py-2 text-xs font-semibold rounded-lg bg-teal-800 text-white dark:bg-teal-500 dark:text-slate-950 hover:bg-teal-900 transition-colors cursor-pointer whitespace-nowrap"
                    >
                      Ask Bio Expert Instead
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {searchResults.terms.map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => onNavigate('dictionary', t.id)}
                        className="text-left p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131C26] hover:border-teal-600 dark:hover:border-teal-400 transition-colors cursor-pointer"
                      >
                        <div className="text-xs text-teal-700 dark:text-teal-400 font-medium">
                          Dictionary · {t.discipline}
                        </div>
                        <div className="text-sm font-semibold text-slate-900 dark:text-white mt-0.5">
                          {t.term}
                        </div>
                      </button>
                    ))}
                    {searchResults.viruses.map((v) => (
                      <button
                        key={v.id}
                        type="button"
                        onClick={() => onNavigate('viruses', v.id)}
                        className="text-left p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131C26] hover:border-teal-600 dark:hover:border-teal-400 transition-colors cursor-pointer"
                      >
                        <div className="text-xs text-sky-700 dark:text-sky-400 font-medium">
                          Virology · {v.baltimoreGroup}
                        </div>
                        <div className="text-sm font-semibold text-slate-900 dark:text-white mt-0.5">
                          {v.name}
                        </div>
                      </button>
                    ))}
                    {searchResults.lectures.map((l) => (
                      <button
                        key={l.id}
                        type="button"
                        onClick={() => onNavigate('lectures', l.id)}
                        className="text-left p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131C26] hover:border-teal-600 dark:hover:border-teal-400 transition-colors cursor-pointer"
                      >
                        <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                          Lecture {l.number} · {l.discipline}
                        </div>
                        <div className="text-sm font-semibold text-slate-900 dark:text-white mt-0.5">
                          {l.title}
                        </div>
                      </button>
                    ))}
                    {searchResults.diagrams.map((d) => (
                      <button
                        key={d.id}
                        type="button"
                        onClick={() => onNavigate('diagrams', d.id)}
                        className="text-left p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131C26] hover:border-teal-600 dark:hover:border-teal-400 transition-colors cursor-pointer"
                      >
                        <div className="text-xs text-emerald-700 dark:text-emerald-400 font-medium">
                          Diagram · {d.discipline}
                        </div>
                        <div className="text-sm font-semibold text-slate-900 dark:text-white mt-0.5">
                          {d.title}
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Study Metrics Summary Strip */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => onNavigate('progress')}
              className="text-left p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0B1117] hover:border-teal-700 dark:hover:border-teal-400 transition-colors cursor-pointer"
            >
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>Terms Studied</span>
                <BookOpen className="w-4 h-4 text-teal-700 dark:text-teal-400" />
              </div>
              <div className="mt-2 font-mono text-2xl font-semibold text-slate-950 dark:text-white tabular-nums">
                {progress.studiedTermIds.length}
                <span className="text-sm font-normal text-slate-400">/{DICTIONARY_TERMS.length}</span>
              </div>
            </button>

            <button
              type="button"
              onClick={() => onNavigate('progress')}
              className="text-left p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0B1117] hover:border-teal-700 dark:hover:border-teal-400 transition-colors cursor-pointer"
            >
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>Quiz Accuracy</span>
                <TrendingUp className="w-4 h-4 text-teal-700 dark:text-teal-400" />
              </div>
              <div className="mt-2 font-mono text-2xl font-semibold text-slate-950 dark:text-white tabular-nums">
                {avgQuizScore !== null ? `${avgQuizScore}%` : '—'}
              </div>
            </button>

            <button
              type="button"
              onClick={() => onNavigate('lectures')}
              className="text-left p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0B1117] hover:border-teal-700 dark:hover:border-teal-400 transition-colors cursor-pointer"
            >
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>Lectures Completed</span>
                <CheckCircle2 className="w-4 h-4 text-teal-700 dark:text-teal-400" />
              </div>
              <div className="mt-2 font-mono text-2xl font-semibold text-slate-950 dark:text-white tabular-nums">
                {progress.completedLectureIds.length}
                <span className="text-sm font-normal text-slate-400">/{LECTURE_MODULES.length}</span>
              </div>
            </button>

            <button
              type="button"
              onClick={onOpenBookmarks}
              className="text-left p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0B1117] hover:border-teal-700 dark:hover:border-teal-400 transition-colors cursor-pointer"
            >
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>Saved Bookmarks</span>
                <Bookmark className="w-4 h-4 text-teal-700 dark:text-teal-400" />
              </div>
              <div className="mt-2 font-mono text-2xl font-semibold text-slate-950 dark:text-white tabular-nums">
                {bookmarkCount}
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Featured Scientific Atlas Plates */}
      <section className="space-y-4">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="font-display text-2xl font-semibold text-slate-950 dark:text-white">
            Featured Scientific Plates &amp; Study Modules
          </h2>
          <button
            type="button"
            onClick={() => onNavigate('diagrams')}
            className="text-sm font-medium text-teal-800 dark:text-teal-400 hover:underline inline-flex items-center gap-1 cursor-pointer whitespace-nowrap"
          >
            <span>Open Diagram Atlas</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <button
            type="button"
            onClick={() => onNavigate('viruses')}
            className="group text-left rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131C26] overflow-hidden hover:border-teal-700 dark:hover:border-teal-400 transition-colors cursor-pointer flex flex-col"
          >
            <div className="aspect-[4/3] bg-slate-100 dark:bg-slate-900 overflow-hidden">
              <img
                src="/src/assets/images/atlas_virology_plate_1795162823313.jpg"
                alt="Bacteriophage T4 and enveloped virion plate"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
            <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
              <div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Virology Research Database · 12 Monographs
                </div>
                <h3 className="font-display text-lg font-semibold text-slate-950 dark:text-white mt-1">
                  Pathogen &amp; Viral Architecture Compendium
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-1.5 line-clamp-2">
                  Baltimore classes I–VII, host receptor tropism, replication compartments, and side-by-side comparison.
                </p>
              </div>
              <div className="pt-3 text-xs font-semibold text-teal-800 dark:text-teal-400 inline-flex items-center gap-1.5">
                <Microscope className="w-4 h-4" />
                <span>Inspect Viral Database</span>
              </div>
            </div>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('diagrams', 'eukaryotic-cell')}
            className="group text-left rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131C26] overflow-hidden hover:border-teal-700 dark:hover:border-teal-400 transition-colors cursor-pointer flex flex-col"
          >
            <div className="aspect-[4/3] bg-slate-100 dark:bg-slate-900 overflow-hidden">
              <img
                src="/src/assets/images/atlas_cell_plate_1795162823405.jpg"
                alt="Eukaryotic cell cross-section plate"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
            <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
              <div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Interactive Atlas · 6 Vector Schematics
                </div>
                <h3 className="font-display text-lg font-semibold text-slate-950 dark:text-white mt-1">
                  Cellular &amp; Physiological Diagrams
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-1.5 line-clamp-2">
                  Tap organellar structures, hide labels for blind self-testing, and study nephron and DNA fork topology.
                </p>
              </div>
              <div className="pt-3 text-xs font-semibold text-teal-800 dark:text-teal-400 inline-flex items-center gap-1.5">
                <Dna className="w-4 h-4" />
                <span>Explore Interactive Diagrams</span>
              </div>
            </div>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('lectures', 'lec-plant-vascular')}
            className="group text-left rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131C26] overflow-hidden hover:border-teal-700 dark:hover:border-teal-400 transition-colors cursor-pointer flex flex-col"
          >
            <div className="aspect-[4/3] bg-slate-100 dark:bg-slate-900 overflow-hidden">
              <img
                src="/src/assets/images/atlas_botany_plate_1795162823649.jpg"
                alt="Plant vascular tissue and chloroplast plate"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
            <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
              <div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Academic Syllabus · 6 Lecture Modules
                </div>
                <h3 className="font-display text-lg font-semibold text-slate-950 dark:text-white mt-1">
                  University Lecture Notes &amp; Active Recall
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-1.5 line-clamp-2">
                  Structured study modules covering chemiosmosis, vascular transport, central dogma, and immunology.
                </p>
              </div>
              <div className="pt-3 text-xs font-semibold text-teal-800 dark:text-teal-400 inline-flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4" />
                <span>Read Lecture Notes</span>
              </div>
            </div>
          </button>
        </div>
      </section>

      {/* Curriculum Navigation Row */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131C26] p-6 space-y-4">
          <h2 className="font-display text-xl font-semibold text-slate-950 dark:text-white">
            Core Study Sections
          </h2>
          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {[
              {
                title: 'Biology Academic Dictionary',
                meta: `${DICTIONARY_TERMS.length} terms · Etymology & mechanisms`,
                tab: 'dictionary' as AppTab,
              },
              {
                title: 'Interactive Quizzes & Flashcards',
                meta: '5 subject decks · Immediate scholarly rationales',
                tab: 'quizzes' as AppTab,
              },
              {
                title: 'Student Progress Tracker',
                meta: 'Performance trend, mastery bars & completed units',
                tab: 'progress' as AppTab,
              },
              {
                title: 'Bio Expert Assistant',
                meta: 'Formal scholarly biological consultation',
                tab: 'bio-expert' as AppTab,
              },
            ].map((item) => (
              <button
                key={item.tab}
                type="button"
                onClick={() => onNavigate(item.tab)}
                className="w-full py-3.5 min-h-[52px] flex items-center justify-between gap-4 text-left hover:text-teal-800 dark:hover:text-teal-300 transition-colors cursor-pointer"
              >
                <div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    {item.title}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {item.meta}
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
              </button>
            ))}
          </div>
        </div>

        {/* Author & Pedagogical Note */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131C26] p-6 flex flex-col justify-between space-y-5">
          <div className="space-y-3">
            <div className="text-xs font-medium text-teal-800 dark:text-teal-400">
              Author &amp; Academic Provenance
            </div>
            <h2 className="font-display text-xl font-semibold text-slate-950 dark:text-white">
              Imran Khan (Shah Saib)
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Biology Teacher and graduate from Russia. Expert Biology was designed as a distraction-free, textbook-rigorous mobile and desktop study companion—combining classical morphological nomenclature with contemporary molecular virology and active recall testing.
            </p>
          </div>
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
            <span>All definitions &amp; diagrams available offline</span>
            <button
              type="button"
              onClick={() => onConsultBioExpert('Summarize the high-yield principles connecting Baltimore viral taxonomy with host innate interferon responses.')}
              className="font-semibold text-teal-800 dark:text-teal-400 hover:underline cursor-pointer"
            >
              Consult Bio Expert
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
