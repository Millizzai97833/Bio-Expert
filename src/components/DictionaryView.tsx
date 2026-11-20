import { useState, useMemo, useEffect } from 'react';
import {
  Bookmark,
  Check,
  ExternalLink,
  MessageSquareText,
  Search,
} from 'lucide-react';
import { DICTIONARY_TERMS } from '../data/dictionaryData';
import { BookmarkCategory, DictionaryTerm, Discipline } from '../types/biology';

interface DictionaryViewProps {
  initialSelectedId?: string;
  studiedTermIds: string[];
  isBookmarked: (id: string, category: BookmarkCategory) => boolean;
  onToggleBookmark: (item: { id: string; category: BookmarkCategory; title: string; subtitle: string }) => void;
  onMarkStudied: (termId: string) => void;
  onOpenDiagram: (diagramId: string) => void;
  onConsultBioExpert: (context: string) => void;
}

const DISCIPLINES: Array<'All' | Discipline> = [
  'All',
  'Cell Biology',
  'Molecular Genetics',
  'Virology',
  'Microbiology',
  'Human Physiology',
  'Botany',
  'Immunology',
  'Biochemistry',
];

export function DictionaryView({
  initialSelectedId,
  studiedTermIds,
  isBookmarked,
  onToggleBookmark,
  onMarkStudied,
  onOpenDiagram,
  onConsultBioExpert,
}: DictionaryViewProps) {
  const [search, setSearch] = useState('');
  const [selectedDiscipline, setSelectedDiscipline] = useState<'All' | Discipline>('All');
  const [selectedLetter, setSelectedLetter] = useState<string>('All');
  const [selectedId, setSelectedId] = useState<string>(
    initialSelectedId || DICTIONARY_TERMS[0].id
  );

  useEffect(() => {
    if (initialSelectedId && DICTIONARY_TERMS.some((t) => t.id === initialSelectedId)) {
      setSelectedId(initialSelectedId);
      setSelectedDiscipline('All');
      setSelectedLetter('All');
      setSearch('');
    }
  }, [initialSelectedId]);

  const sortedTerms = useMemo(
    () => [...DICTIONARY_TERMS].sort((a, b) => a.term.localeCompare(b.term)),
    []
  );

  const availableLetters = useMemo(() => {
    const letters = new Set(sortedTerms.map((t) => t.term[0].toUpperCase()));
    return ['All', ...Array.from(letters).sort()];
  }, [sortedTerms]);

  const filteredTerms = useMemo(() => {
    const q = search.trim().toLowerCase();
    return sortedTerms.filter((t) => {
      if (selectedDiscipline !== 'All' && t.discipline !== selectedDiscipline) return false;
      if (selectedLetter !== 'All' && t.term[0].toUpperCase() !== selectedLetter) return false;
      if (!q) return true;
      return (
        t.term.toLowerCase().includes(q) ||
        t.definition.toLowerCase().includes(q) ||
        t.etymology.toLowerCase().includes(q) ||
        t.discipline.toLowerCase().includes(q)
      );
    });
  }, [sortedTerms, selectedDiscipline, selectedLetter, search]);

  const activeTerm: DictionaryTerm = useMemo(() => {
    return (
      DICTIONARY_TERMS.find((t) => t.id === selectedId) ||
      filteredTerms[0] ||
      sortedTerms[0]
    );
  }, [selectedId, filteredTerms, sortedTerms]);

  useEffect(() => {
    if (activeTerm) {
      onMarkStudied(activeTerm.id);
    }
  }, [activeTerm, onMarkStudied]);

  const handleJumpRelated = (relatedLabel: string) => {
    const match = DICTIONARY_TERMS.find(
      (t) =>
        t.term.toLowerCase().includes(relatedLabel.toLowerCase()) ||
        relatedLabel.toLowerCase().includes(t.term.toLowerCase())
    );
    if (match) {
      setSelectedId(match.id);
      setSearch('');
      setSelectedDiscipline('All');
      setSelectedLetter('All');
    } else {
      setSearch(relatedLabel);
    }
  };

  const bookmarked = activeTerm ? isBookmarked(activeTerm.id, 'dictionary') : false;

  return (
    <div className="space-y-6">
      {/* Header & Controls */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Comprehensive Academic Glossary · {DICTIONARY_TERMS.length} Curated Entries
            </p>
            <h1 className="font-display text-2xl sm:text-3xl font-semibold text-slate-950 dark:text-white mt-1">
              Biology Dictionary
            </h1>
          </div>
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Filter terms, roots, or mechanisms..."
              aria-label="Filter biology dictionary"
              className="w-full min-h-[44px] pl-10 pr-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#131C26] text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-700 dark:focus:ring-teal-400"
            />
          </div>
        </div>

        {/* Discipline Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
          {DISCIPLINES.map((disc) => (
            <button
              key={disc}
              type="button"
              onClick={() => setSelectedDiscipline(disc)}
              className={`min-h-[38px] px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                selectedDiscipline === disc
                  ? 'bg-teal-800 text-white dark:bg-teal-500 dark:text-slate-950'
                  : 'bg-slate-200/70 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-300/70 dark:hover:bg-slate-700'
              }`}
            >
              {disc}
            </button>
          ))}
        </div>

        {/* Alphabetical Index Bar */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1">
          {availableLetters.map((letter) => (
            <button
              key={letter}
              type="button"
              onClick={() => setSelectedLetter(letter)}
              className={`min-w-[34px] min-h-[34px] px-2 rounded-md text-xs font-mono font-medium shrink-0 transition-colors cursor-pointer ${
                selectedLetter === letter
                  ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-950'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200/70 dark:hover:bg-slate-800'
              }`}
            >
              {letter}
            </button>
          ))}
        </div>
      </div>

      {/* Master-Detail Reader */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Term List */}
        <div className="lg:col-span-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131C26] divide-y divide-slate-100 dark:divide-slate-800 max-h-[540px] overflow-y-auto">
          {filteredTerms.length === 0 ? (
            <div className="p-6 text-sm text-slate-500 dark:text-slate-400">
              No dictionary terms match the active filter criteria.
            </div>
          ) : (
            filteredTerms.map((item) => {
              const isSelected = item.id === activeTerm.id;
              const isStudied = studiedTermIds.includes(item.id);
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedId(item.id)}
                  className={`w-full min-h-[56px] px-4 py-3 text-left flex items-center justify-between gap-3 transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-teal-50/80 dark:bg-teal-950/40'
                      : 'hover:bg-slate-50 dark:hover:bg-slate-800/50'
                  }`}
                >
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-slate-950 dark:text-white truncate">
                      {item.term}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 truncate">
                      {item.discipline}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {isStudied && (
                      <Check
                        className="w-3.5 h-3.5 text-teal-700 dark:text-teal-400"
                        aria-label="Studied"
                      />
                    )}
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Term Monograph Detail */}
        {activeTerm && (
          <article className="lg:col-span-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131C26] p-6 sm:p-8 space-y-6">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1.5">
                <div className="text-xs text-slate-500 dark:text-slate-400 flex flex-wrap items-center gap-2">
                  <span className="font-medium text-teal-800 dark:text-teal-400">
                    {activeTerm.discipline}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono">/{activeTerm.pronunciation}/</span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-slate-950 dark:text-white">
                  {activeTerm.term}
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                  Etymology: {activeTerm.etymology}
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  onToggleBookmark({
                    id: activeTerm.id,
                    category: 'dictionary',
                    title: activeTerm.term,
                    subtitle: activeTerm.discipline,
                  })
                }
                aria-label={bookmarked ? 'Remove bookmark' : 'Bookmark definition'}
                className={`min-h-[44px] min-w-[44px] px-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-medium transition-colors cursor-pointer shrink-0 ${
                  bookmarked
                    ? 'border-teal-700 bg-teal-50 text-teal-800 dark:border-teal-400 dark:bg-teal-950/60 dark:text-teal-300'
                    : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-slate-300'
                }`}
              >
                <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-current' : ''}`} />
                <span className="hidden sm:inline">{bookmarked ? 'Saved' : 'Save'}</span>
              </button>
            </div>

            <div className="space-y-5 pt-4 border-t border-slate-100 dark:border-slate-800">
              <section className="space-y-1.5">
                <h3 className="text-xs font-semibold tracking-wide text-slate-500 dark:text-slate-400">
                  Formal Definition
                </h3>
                <p className="text-base text-slate-800 dark:text-slate-100 leading-relaxed">
                  {activeTerm.definition}
                </p>
              </section>

              <section className="space-y-1.5">
                <h3 className="text-xs font-semibold tracking-wide text-slate-500 dark:text-slate-400">
                  Molecular &amp; Physiological Mechanism
                </h3>
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                  {activeTerm.mechanism}
                </p>
              </section>

              <section className="space-y-1.5">
                <h3 className="text-xs font-semibold tracking-wide text-slate-500 dark:text-slate-400">
                  Biological &amp; Clinical Significance
                </h3>
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                  {activeTerm.significance}
                </p>
              </section>
            </div>

            {/* Related Cross-References */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2.5">
              <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                Cross-Referenced Concepts
              </div>
              <div className="flex flex-wrap gap-2">
                {activeTerm.relatedTerms.map((rel) => (
                  <button
                    key={rel}
                    type="button"
                    onClick={() => handleJumpRelated(rel)}
                    className="min-h-[36px] px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-200 hover:border-teal-700 dark:hover:border-teal-400 transition-colors cursor-pointer"
                  >
                    {rel}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-3">
              {activeTerm.diagramId && (
                <button
                  type="button"
                  onClick={() => onOpenDiagram(activeTerm.diagramId!)}
                  className="min-h-[44px] px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors inline-flex items-center gap-2 cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4 text-teal-700 dark:text-teal-400" />
                  <span>Inspect Associated Diagram</span>
                </button>
              )}

              <button
                type="button"
                onClick={() =>
                  onConsultBioExpert(
                    `Provide a comprehensive scholarly exposition of "${activeTerm.term}" (${activeTerm.discipline}), detailing its biochemical/physiological mechanism and experimental significance.`
                  )
                }
                className="min-h-[44px] px-4 py-2 rounded-xl bg-teal-800 hover:bg-teal-900 dark:bg-teal-500 dark:hover:bg-teal-400 text-white dark:text-slate-950 text-xs font-semibold transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                <MessageSquareText className="w-4 h-4" />
                <span>Consult Bio Expert</span>
              </button>
            </div>
          </article>
        )}
      </div>
    </div>
  );
}
