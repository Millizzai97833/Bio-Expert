import { useState, useMemo, useEffect } from 'react';
import { Bookmark, CheckCircle2, Circle, MessageSquareText } from 'lucide-react';
import { LECTURE_MODULES } from '../data/lecturesData';
import { BookmarkCategory, LectureModule } from '../types/biology';

interface LecturesViewProps {
  initialSelectedId?: string;
  completedLectureIds: string[];
  isBookmarked: (id: string, category: BookmarkCategory) => boolean;
  onToggleBookmark: (item: { id: string; category: BookmarkCategory; title: string; subtitle: string }) => void;
  onToggleCompleted: (lectureId: string) => void;
  onConsultBioExpert: (context: string) => void;
}

export function LecturesView({
  initialSelectedId,
  completedLectureIds,
  isBookmarked,
  onToggleBookmark,
  onToggleCompleted,
  onConsultBioExpert,
}: LecturesViewProps) {
  const [selectedId, setSelectedId] = useState<string>(
    initialSelectedId || LECTURE_MODULES[0].id
  );

  useEffect(() => {
    if (initialSelectedId && LECTURE_MODULES.some((l) => l.id === initialSelectedId)) {
      setSelectedId(initialSelectedId);
    }
  }, [initialSelectedId]);

  const activeLecture: LectureModule = useMemo(
    () => LECTURE_MODULES.find((l) => l.id === selectedId) || LECTURE_MODULES[0],
    [selectedId]
  );

  const isCompleted = completedLectureIds.includes(activeLecture.id);
  const bookmarked = isBookmarked(activeLecture.id, 'lecture');

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Academic Reference Curriculum · {completedLectureIds.length} of {LECTURE_MODULES.length} Completed
        </p>
        <h1 className="font-display text-2xl sm:text-3xl font-semibold text-slate-950 dark:text-white mt-1">
          University Biology Lecture Notes
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Syllabus Sidebar */}
        <div className="lg:col-span-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131C26] divide-y divide-slate-100 dark:divide-slate-800">
          {LECTURE_MODULES.map((lec) => {
            const isSelected = lec.id === activeLecture.id;
            const done = completedLectureIds.includes(lec.id);
            return (
              <button
                key={lec.id}
                type="button"
                onClick={() => setSelectedId(lec.id)}
                className={`w-full min-h-[68px] px-4 py-3.5 text-left flex items-start justify-between gap-3 transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-teal-50/80 dark:bg-teal-950/40'
                    : 'hover:bg-slate-50 dark:hover:bg-slate-800/50'
                }`}
              >
                <div className="min-w-0">
                  <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <span className="font-mono font-semibold text-teal-800 dark:text-teal-400">
                      {lec.number}.
                    </span>
                    <span>{lec.discipline}</span>
                    <span aria-hidden="true">·</span>
                    <span>{lec.readingMinutes} min</span>
                  </div>
                  <div className="text-sm font-semibold text-slate-950 dark:text-white mt-1">
                    {lec.title}
                  </div>
                </div>
                {done ? (
                  <CheckCircle2 className="w-4 h-4 text-teal-700 dark:text-teal-400 shrink-0 mt-1" />
                ) : (
                  <Circle className="w-4 h-4 text-slate-300 dark:text-slate-600 shrink-0 mt-1" />
                )}
              </button>
            );
          })}
        </div>

        {/* Lecture Monograph Body */}
        <article className="lg:col-span-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131C26] p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div className="space-y-1.5">
              <div className="text-xs text-slate-500 dark:text-slate-400 flex flex-wrap items-center gap-2">
                <span className="font-mono font-semibold text-teal-800 dark:text-teal-400">
                  Lecture {activeLecture.number}
                </span>
                <span aria-hidden="true">·</span>
                <span>{activeLecture.discipline}</span>
                <span aria-hidden="true">·</span>
                <span>{activeLecture.readingMinutes} min study</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-slate-950 dark:text-white">
                {activeLecture.title}
              </h2>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() =>
                  onToggleBookmark({
                    id: activeLecture.id,
                    category: 'lecture',
                    title: activeLecture.title,
                    subtitle: `Lecture ${activeLecture.number} · ${activeLecture.discipline}`,
                  })
                }
                className={`min-h-[44px] px-3.5 py-2 rounded-xl border text-xs font-semibold inline-flex items-center gap-2 transition-colors cursor-pointer ${
                  bookmarked
                    ? 'border-teal-700 bg-teal-50 text-teal-800 dark:border-teal-400 dark:bg-teal-950/60 dark:text-teal-300'
                    : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200'
                }`}
              >
                <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-current' : ''}`} />
                <span>{bookmarked ? 'Saved' : 'Save Note'}</span>
              </button>
            </div>
          </div>

          <p className="text-base text-slate-700 dark:text-slate-200 leading-relaxed">
            {activeLecture.summary}
          </p>

          {/* Learning Objectives */}
          <div className="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-[#0B1117] border border-slate-200/70 dark:border-slate-800 space-y-2.5">
            <h3 className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              Learning Objectives
            </h3>
            <ul className="space-y-1.5 text-sm text-slate-700 dark:text-slate-300 list-disc list-inside">
              {activeLecture.objectives.map((obj) => (
                <li key={obj}>{obj}</li>
              ))}
            </ul>
          </div>

          {/* Optional Scientific Plate */}
          {activeLecture.plateImage && (
            <figure className="space-y-2">
              <div className="aspect-[16/9] rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900">
                <img
                  src={activeLecture.plateImage}
                  alt={activeLecture.plateCaption || activeLecture.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              {activeLecture.plateCaption && (
                <figcaption className="text-xs text-slate-500 dark:text-slate-400">
                  {activeLecture.plateCaption}
                </figcaption>
              )}
            </figure>
          )}

          {/* Structured Sections */}
          <div className="space-y-6 pt-2">
            {activeLecture.sections.map((sec) => (
              <section key={sec.heading} className="space-y-3">
                <h3 className="font-display text-xl font-semibold text-slate-950 dark:text-white">
                  {sec.heading}
                </h3>
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                  {sec.prose}
                </p>
                {sec.keyFormulaOrPathway && (
                  <div className="p-3.5 rounded-xl bg-slate-100/80 dark:bg-[#0B1117] border border-slate-200 dark:border-slate-800 font-mono text-xs sm:text-sm text-slate-900 dark:text-teal-300 overflow-x-auto">
                    {sec.keyFormulaOrPathway}
                  </div>
                )}
                {sec.clinicalOrLabPearl && (
                  <div className="p-3.5 rounded-xl border border-teal-200 dark:border-teal-900/60 bg-teal-50/50 dark:bg-teal-950/30 text-sm text-slate-800 dark:text-slate-200">
                    {sec.clinicalOrLabPearl}
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Footer Controls */}
          <div className="pt-5 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => onToggleCompleted(activeLecture.id)}
              className={`min-h-[44px] px-4 py-2 rounded-xl text-xs font-semibold inline-flex items-center gap-2 transition-colors cursor-pointer ${
                isCompleted
                  ? 'bg-emerald-700 text-white dark:bg-emerald-500 dark:text-slate-950'
                  : 'border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-100 hover:border-teal-700'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{isCompleted ? 'Lecture Completed' : 'Mark Lecture as Completed'}</span>
            </button>

            <button
              type="button"
              onClick={() =>
                onConsultBioExpert(
                  `Provide advanced seminar discussion questions and mechanistic answers based on the lecture: "${activeLecture.title}" (${activeLecture.discipline}).`
                )
              }
              className="min-h-[44px] px-4 py-2 rounded-xl bg-teal-800 hover:bg-teal-900 dark:bg-teal-500 dark:hover:bg-teal-400 text-white dark:text-slate-950 text-xs font-semibold inline-flex items-center gap-2 transition-colors cursor-pointer"
            >
              <MessageSquareText className="w-4 h-4" />
              <span>Discuss Lecture with Bio Expert</span>
            </button>
          </div>
        </article>
      </div>
    </div>
  );
}
