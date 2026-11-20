import { useState, useMemo } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  RotateCcw,
  XCircle,
} from 'lucide-react';
import { QUIZ_DECKS, QUIZ_QUESTIONS } from '../data/quizData';
import { DICTIONARY_TERMS } from '../data/dictionaryData';
import { QuizAttemptRecord, QuizDeck } from '../types/biology';

interface QuizViewProps {
  masteredFlashcardIds: string[];
  onRecordAttempt: (attempt: Omit<QuizAttemptRecord, 'id' | 'completedAt'>) => void;
  onToggleFlashcardMastered: (termId: string) => void;
}

export function QuizView({
  masteredFlashcardIds,
  onRecordAttempt,
  onToggleFlashcardMastered,
}: QuizViewProps) {
  const [mode, setMode] = useState<'quiz' | 'flashcards'>('quiz');
  const [activeDeck, setActiveDeck] = useState<QuizDeck | null>(null);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  // Flashcards state
  const [flashIndex, setFlashIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const deckQuestions = useMemo(() => {
    if (!activeDeck) return [];
    return QUIZ_QUESTIONS.filter((q) => q.deckId === activeDeck.id);
  }, [activeDeck]);

  const currentQuestion = deckQuestions[currentIdx];

  const startDeck = (deck: QuizDeck) => {
    setActiveDeck(deck);
    setCurrentIdx(0);
    setSelectedOption(null);
    setCorrectCount(0);
    setIsFinished(false);
  };

  const handleSelectOption = (idx: number) => {
    if (selectedOption !== null || !currentQuestion) return;
    setSelectedOption(idx);
    if (idx === currentQuestion.correctIndex) {
      setCorrectCount((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (!activeDeck) return;
    if (currentIdx + 1 < deckQuestions.length) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      const total = deckQuestions.length;
      const percentage = Math.round((correctCount / total) * 100);
      setIsFinished(true);
      onRecordAttempt({
        deckId: activeDeck.id,
        deckTitle: activeDeck.title,
        discipline: activeDeck.discipline,
        score: correctCount,
        total,
        percentage,
      });
    }
  };

  const currentFlashcard = DICTIONARY_TERMS[flashIndex % DICTIONARY_TERMS.length];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Active Recall &amp; Memorization · Recorded to Progress Tracker
          </p>
          <h1 className="font-display text-2xl sm:text-3xl font-semibold text-slate-950 dark:text-white mt-1">
            Interactive Quizzes &amp; Flashcards
          </h1>
        </div>

        <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-200/70 dark:bg-slate-800/80 self-start">
          <button
            type="button"
            onClick={() => setMode('quiz')}
            className={`min-h-[38px] px-4 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
              mode === 'quiz'
                ? 'bg-white dark:bg-slate-900 text-slate-950 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-300'
            }`}
          >
            Assessment Quizzes
          </button>
          <button
            type="button"
            onClick={() => setMode('flashcards')}
            className={`min-h-[38px] px-4 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
              mode === 'flashcards'
                ? 'bg-white dark:bg-slate-900 text-slate-950 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-300'
            }`}
          >
            Term Flashcards ({masteredFlashcardIds.length}/{DICTIONARY_TERMS.length})
          </button>
        </div>
      </div>

      {mode === 'flashcards' ? (
        /* Active Recall Flashcards */
        <div className="max-w-2xl mx-auto space-y-5">
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <span className="font-mono">
              Card {flashIndex + 1} of {DICTIONARY_TERMS.length}
            </span>
            <span>{currentFlashcard.discipline}</span>
          </div>

          <button
            type="button"
            onClick={() => setFlipped((prev) => !prev)}
            className="w-full min-h-[280px] rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131C26] p-6 sm:p-8 text-left flex flex-col justify-between transition-colors hover:border-teal-700 dark:hover:border-teal-400 cursor-pointer"
          >
            <div className="text-xs font-medium text-teal-800 dark:text-teal-400">
              {flipped ? 'Formal Definition & Mechanism' : 'Biological Term (Tap to reveal definition)'}
            </div>

            {!flipped ? (
              <div className="my-auto py-6 text-center space-y-2">
                <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-950 dark:text-white">
                  {currentFlashcard.term}
                </h2>
                <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  /{currentFlashcard.pronunciation}/
                </p>
              </div>
            ) : (
              <div className="my-auto py-4 space-y-3">
                <p className="text-base text-slate-900 dark:text-slate-100 leading-relaxed">
                  {currentFlashcard.definition}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-2 border-t border-slate-100 dark:border-slate-800">
                  {currentFlashcard.mechanism}
                </p>
              </div>
            )}

            <div className="text-xs text-slate-400 dark:text-slate-500">
              Etymology: {currentFlashcard.etymology}
            </div>
          </button>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => {
                setFlashIndex((prev) => (prev - 1 + DICTIONARY_TERMS.length) % DICTIONARY_TERMS.length);
                setFlipped(false);
              }}
              className="min-h-[44px] px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-100 cursor-pointer"
            >
              Previous Card
            </button>

            <button
              type="button"
              onClick={() => onToggleFlashcardMastered(currentFlashcard.id)}
              className={`min-h-[44px] px-4 py-2 rounded-xl text-xs font-semibold inline-flex items-center gap-2 transition-colors cursor-pointer ${
                masteredFlashcardIds.includes(currentFlashcard.id)
                  ? 'bg-emerald-700 text-white dark:bg-emerald-500 dark:text-slate-950'
                  : 'border border-teal-700 text-teal-800 dark:border-teal-400 dark:text-teal-300'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>
                {masteredFlashcardIds.includes(currentFlashcard.id) ? 'Mastered' : 'Mark as Mastered'}
              </span>
            </button>

            <button
              type="button"
              onClick={() => {
                setFlashIndex((prev) => (prev + 1) % DICTIONARY_TERMS.length);
                setFlipped(false);
              }}
              className="min-h-[44px] px-4 py-2 rounded-xl bg-teal-800 hover:bg-teal-900 dark:bg-teal-500 dark:hover:bg-teal-400 text-white dark:text-slate-950 text-xs font-semibold cursor-pointer"
            >
              Next Card
            </button>
          </div>
        </div>
      ) : !activeDeck ? (
        /* Deck Selection Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {QUIZ_DECKS.map((deck) => {
            const count = QUIZ_QUESTIONS.filter((q) => q.deckId === deck.id).length;
            return (
              <div
                key={deck.id}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131C26] p-6 flex flex-col justify-between space-y-5"
              >
                <div className="space-y-2">
                  <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
                    <span className="font-medium text-teal-800 dark:text-teal-400">
                      {deck.discipline}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono">{count} questions</span>
                    <span aria-hidden="true">·</span>
                    <span>{deck.estimatedMinutes} min</span>
                  </div>
                  <h2 className="font-display text-xl font-semibold text-slate-950 dark:text-white">
                    {deck.title}
                  </h2>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {deck.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => startDeck(deck)}
                  className="w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-teal-800 hover:bg-teal-900 dark:bg-teal-500 dark:hover:bg-teal-400 text-white dark:text-slate-950 text-xs font-semibold inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <span>Begin Assessment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      ) : isFinished ? (
        /* Quiz Completion Summary */
        <div className="max-w-2xl mx-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131C26] p-6 sm:p-8 space-y-6">
          <div className="space-y-1">
            <div className="text-xs text-teal-800 dark:text-teal-400 font-medium">
              Assessment Recorded
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-slate-950 dark:text-white">
              {activeDeck.title}
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-slate-50 dark:bg-[#0B1117] border border-slate-200 dark:border-slate-800">
            <div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Correct</div>
              <div className="font-mono text-2xl font-semibold text-slate-950 dark:text-white mt-1 tabular-nums">
                {correctCount}/{deckQuestions.length}
              </div>
            </div>
            <div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Accuracy</div>
              <div className="font-mono text-2xl font-semibold text-teal-800 dark:text-teal-400 mt-1 tabular-nums">
                {Math.round((correctCount / deckQuestions.length) * 100)}%
              </div>
            </div>
            <div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Discipline</div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-200 mt-2">
                {activeDeck.discipline}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => startDeck(activeDeck)}
              className="min-h-[44px] px-4 py-2 rounded-xl bg-teal-800 hover:bg-teal-900 dark:bg-teal-500 dark:hover:bg-teal-400 text-white dark:text-slate-950 text-xs font-semibold inline-flex items-center gap-2 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retake Deck</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveDeck(null)}
              className="min-h-[44px] px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-100 cursor-pointer"
            >
              Choose Another Deck
            </button>
          </div>
        </div>
      ) : (
        /* Active Question Runner */
        <div className="max-w-3xl mx-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131C26] p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
            <button
              type="button"
              onClick={() => setActiveDeck(null)}
              className="hover:text-slate-900 dark:hover:text-white font-medium cursor-pointer"
            >
              ← All Decks
            </button>
            <span className="font-mono tabular-nums">
              Question {currentIdx + 1} / {deckQuestions.length}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-1.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
            <div
              className="h-full bg-teal-700 dark:bg-teal-400 transition-all duration-300"
              style={{ width: `${((currentIdx + 1) / deckQuestions.length) * 100}%` }}
            />
          </div>

          <div className="space-y-2">
            <div className="text-xs font-medium text-teal-800 dark:text-teal-400">
              {currentQuestion.discipline}
            </div>
            <h2 className="font-display text-xl sm:text-2xl font-semibold text-slate-950 dark:text-white leading-snug">
              {currentQuestion.prompt}
            </h2>
          </div>

          <div className="space-y-3">
            {currentQuestion.options.map((opt, idx) => {
              const isAnswered = selectedOption !== null;
              const isCorrect = idx === currentQuestion.correctIndex;
              const isChosen = idx === selectedOption;

              let styleClass =
                'border-slate-200 dark:border-slate-700 hover:border-teal-700 dark:hover:border-teal-400 bg-white dark:bg-[#0B1117] text-slate-800 dark:text-slate-100';

              if (isAnswered) {
                if (isCorrect) {
                  styleClass =
                    'border-emerald-600 bg-emerald-50/90 dark:border-emerald-500 dark:bg-emerald-950/40 text-emerald-950 dark:text-emerald-100';
                } else if (isChosen) {
                  styleClass =
                    'border-rose-600 bg-rose-50/90 dark:border-rose-500 dark:bg-rose-950/40 text-rose-950 dark:text-rose-100';
                } else {
                  styleClass =
                    'border-slate-200 dark:border-slate-800 opacity-60 text-slate-600 dark:text-slate-400';
                }
              }

              return (
                <button
                  key={opt}
                  type="button"
                  disabled={isAnswered}
                  onClick={() => handleSelectOption(idx)}
                  className={`w-full min-h-[52px] px-4 py-3.5 rounded-xl border text-left text-sm flex items-start justify-between gap-3 transition-colors cursor-pointer disabled:cursor-default ${styleClass}`}
                >
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-xs font-semibold mt-0.5 shrink-0">
                      {String.fromCharCode(65 + idx)}.
                    </span>
                    <span className="leading-relaxed">{opt}</span>
                  </div>
                  {isAnswered && isCorrect && (
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5" />
                  )}
                  {isAnswered && isChosen && !isCorrect && (
                    <XCircle className="w-4 h-4 text-rose-700 dark:text-rose-400 shrink-0 mt-0.5" />
                  )}
                </button>
              );
            })}
          </div>

          {selectedOption !== null && (
            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0B1117] border border-slate-200 dark:border-slate-800 space-y-1.5">
                <div className="text-xs font-semibold text-teal-800 dark:text-teal-400">
                  {selectedOption === currentQuestion.correctIndex
                    ? 'Correct · Scholarly Rationale'
                    : 'Incorrect · Scholarly Rationale'}
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {currentQuestion.rationale}
                </p>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleNext}
                  className="min-h-[44px] px-5 py-2.5 rounded-xl bg-teal-800 hover:bg-teal-900 dark:bg-teal-500 dark:hover:bg-teal-400 text-white dark:text-slate-950 text-xs font-semibold inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>
                    {currentIdx + 1 < deckQuestions.length ? 'Next Question' : 'Complete Assessment'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
