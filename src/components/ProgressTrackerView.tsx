import { useMemo } from 'react';
import { RotateCcw } from 'lucide-react';
import { StudyProgress } from '../types/biology';
import { DICTIONARY_TERMS } from '../data/dictionaryData';
import { VIRUS_MONOGRAPHS } from '../data/virusData';
import { LECTURE_MODULES } from '../data/lecturesData';
import { BIOLOGY_DIAGRAMS } from '../data/diagramsData';

interface ProgressTrackerViewProps {
  progress: StudyProgress;
  onResetProgress: () => void;
}

export function ProgressTrackerView({
  progress,
  onResetProgress,
}: ProgressTrackerViewProps) {
  const averageScore = useMemo(() => {
    if (progress.quizAttempts.length === 0) return 0;
    const sum = progress.quizAttempts.reduce((acc, item) => acc + item.percentage, 0);
    return Math.round(sum / progress.quizAttempts.length);
  }, [progress.quizAttempts]);

  const orderedAttempts = useMemo(
    () => [...progress.quizAttempts].reverse(),
    [progress.quizAttempts]
  );

  const coverageBars = [
    {
      label: 'Biology Dictionary Terms Studied',
      done: progress.studiedTermIds.length,
      total: DICTIONARY_TERMS.length,
    },
    {
      label: 'Flashcard Terms Mastered',
      done: progress.masteredFlashcardIds.length,
      total: DICTIONARY_TERMS.length,
    },
    {
      label: 'Virology Monographs Inspected',
      done: progress.inspectedVirusIds.length,
      total: VIRUS_MONOGRAPHS.length,
    },
    {
      label: 'Interactive Diagrams Explored',
      done: progress.exploredDiagramIds.length,
      total: BIOLOGY_DIAGRAMS.length,
    },
    {
      label: 'University Lectures Completed',
      done: progress.completedLectureIds.length,
      total: LECTURE_MODULES.length,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Academic Mastery &amp; Longitudinal Assessment Analytics
          </p>
          <h1 className="font-display text-2xl sm:text-3xl font-semibold text-slate-950 dark:text-white mt-1">
            Study Progress Tracker
          </h1>
        </div>

        <button
          type="button"
          onClick={onResetProgress}
          className="min-h-[40px] px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 inline-flex items-center gap-2 self-start cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Records</span>
        </button>
      </div>

      {/* KPI Strip */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131C26] p-5">
          <div className="text-xs text-slate-500 dark:text-slate-400">Mean Quiz Accuracy</div>
          <div className="font-mono text-3xl font-semibold text-teal-800 dark:text-teal-400 mt-2 tabular-nums">
            {progress.quizAttempts.length > 0 ? `${averageScore}%` : '—'}
          </div>
          <div className="text-xs text-slate-400 mt-1">
            {progress.quizAttempts.length} assessments recorded
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131C26] p-5">
          <div className="text-xs text-slate-500 dark:text-slate-400">Terms Studied</div>
          <div className="font-mono text-3xl font-semibold text-slate-950 dark:text-white mt-2 tabular-nums">
            {progress.studiedTermIds.length}/{DICTIONARY_TERMS.length}
          </div>
          <div className="text-xs text-slate-400 mt-1">
            {Math.round((progress.studiedTermIds.length / DICTIONARY_TERMS.length) * 100)}% dictionary coverage
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131C26] p-5">
          <div className="text-xs text-slate-500 dark:text-slate-400">Lectures Completed</div>
          <div className="font-mono text-3xl font-semibold text-slate-950 dark:text-white mt-2 tabular-nums">
            {progress.completedLectureIds.length}/{LECTURE_MODULES.length}
          </div>
          <div className="text-xs text-slate-400 mt-1">Core curriculum units</div>
        </div>

        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131C26] p-5">
          <div className="text-xs text-slate-500 dark:text-slate-400">Flashcards Mastered</div>
          <div className="font-mono text-3xl font-semibold text-slate-950 dark:text-white mt-2 tabular-nums">
            {progress.masteredFlashcardIds.length}/{DICTIONARY_TERMS.length}
          </div>
          <div className="text-xs text-slate-400 mt-1">Active recall mastery</div>
        </div>
      </div>

      {/* Mastery Bars & Quiz Performance Trend */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Curriculum Coverage */}
        <div className="lg:col-span-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131C26] p-6 space-y-5">
          <h2 className="font-display text-xl font-semibold text-slate-950 dark:text-white">
            Curriculum Completion Breakdown
          </h2>

          <div className="space-y-4">
            {coverageBars.map((bar) => {
              const pct = bar.total > 0 ? Math.round((bar.done / bar.total) * 100) : 0;
              return (
                <div key={bar.label} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-slate-700 dark:text-slate-200">
                      {bar.label}
                    </span>
                    <span className="font-mono text-slate-500 dark:text-slate-400 tabular-nums">
                      {bar.done}/{bar.total} ({pct}%)
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                    <div
                      className="h-full bg-teal-700 dark:bg-teal-400 rounded-full transition-all duration-300"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Performance Over Time Chart */}
        <div className="lg:col-span-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131C26] p-6 space-y-4">
          <h2 className="font-display text-xl font-semibold text-slate-950 dark:text-white">
            Quiz Performance Over Time
          </h2>

          {orderedAttempts.length === 0 ? (
            <div className="h-48 rounded-xl border border-dashed border-slate-200 dark:border-slate-800 flex items-center justify-center p-6 text-center text-sm text-slate-500 dark:text-slate-400">
              Complete any quiz deck to chart your longitudinal score trajectory.
            </div>
          ) : (
            <div className="space-y-3">
              <div className="h-48 w-full">
                <svg viewBox="0 0 420 160" className="w-full h-full overflow-visible">
                  {/* Horizontal Gridlines */}
                  {[0, 25, 50, 75, 100].map((val) => {
                    const y = 140 - (val / 100) * 120;
                    return (
                      <g key={val}>
                        <line
                          x1="36"
                          y1={y}
                          x2="408"
                          y2={y}
                          className="stroke-slate-200 dark:stroke-slate-800"
                          strokeWidth="1"
                        />
                        <text
                          x="0"
                          y={y + 4}
                          className="fill-slate-400 dark:fill-slate-500 text-[10px] font-mono"
                        >
                          {val}%
                        </text>
                      </g>
                    );
                  })}

                  {/* Polyline */}
                  {orderedAttempts.length > 1 && (
                    <polyline
                      fill="none"
                      className="stroke-teal-700 dark:stroke-teal-400"
                      strokeWidth="2.5"
                      points={orderedAttempts
                        .map((att, idx) => {
                          const x =
                            44 +
                            (idx / (orderedAttempts.length - 1)) * (400 - 44);
                          const y = 140 - (att.percentage / 100) * 120;
                          return `${x},${y}`;
                        })
                        .join(' ')}
                    />
                  )}

                  {/* Data Nodes */}
                  {orderedAttempts.map((att, idx) => {
                    const x =
                      orderedAttempts.length === 1
                        ? 220
                        : 44 + (idx / (orderedAttempts.length - 1)) * (400 - 44);
                    const y = 140 - (att.percentage / 100) * 120;
                    return (
                      <g key={att.id}>
                        <circle
                          cx={x}
                          cy={y}
                          r="5"
                          className="fill-teal-800 dark:fill-teal-400 stroke-white dark:stroke-[#131C26]"
                          strokeWidth="2"
                        />
                      </g>
                    );
                  })}
                </svg>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Chronological quiz accuracy across your latest {orderedAttempts.length} attempt(s).
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Assessment Log Table */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131C26] p-6 space-y-4">
        <h2 className="font-display text-xl font-semibold text-slate-950 dark:text-white">
          Assessment History Log
        </h2>

        {progress.quizAttempts.length === 0 ? (
          <p className="text-sm text-slate-500 dark:text-slate-400">
            No quizzes completed yet. Open the Quizzes tab to record your first assessment.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
                  <th className="py-2.5 pr-4 font-semibold">Assessment Deck</th>
                  <th className="py-2.5 px-4 font-semibold">Discipline</th>
                  <th className="py-2.5 px-4 font-semibold">Score</th>
                  <th className="py-2.5 px-4 font-semibold">Accuracy</th>
                  <th className="py-2.5 pl-4 font-semibold">Completed</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {progress.quizAttempts.map((att) => (
                  <tr key={att.id}>
                    <td className="py-3 pr-4 font-medium text-slate-900 dark:text-slate-100">
                      {att.deckTitle}
                    </td>
                    <td className="py-3 px-4 text-slate-600 dark:text-slate-300">
                      {att.discipline}
                    </td>
                    <td className="py-3 px-4 font-mono tabular-nums text-slate-800 dark:text-slate-200">
                      {att.score}/{att.total}
                    </td>
                    <td className="py-3 px-4 font-mono tabular-nums font-semibold text-teal-800 dark:text-teal-400">
                      {att.percentage}%
                    </td>
                    <td className="py-3 pl-4 font-mono text-xs text-slate-500 dark:text-slate-400 tabular-nums">
                      {new Date(att.completedAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
