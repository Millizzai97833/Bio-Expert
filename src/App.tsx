import { useState, useCallback } from 'react';
import {
  BookOpen,
  Bookmark,
  Compass,
  Dna,
  GraduationCap,
  HelpCircle,
  Microscope,
  Moon,
  Sun,
  TrendingUp,
} from 'lucide-react';
import { AppTab } from './types/biology';
import { useAcademicStorage } from './hooks/useAcademicStorage';
import { SplashIntro } from './components/SplashIntro';
import { OverviewAtlas } from './components/OverviewAtlas';
import { DictionaryView } from './components/DictionaryView';
import { VirusDatabaseView } from './components/VirusDatabaseView';
import { DiagramsView } from './components/DiagramsView';
import { LecturesView } from './components/LecturesView';
import { QuizView } from './components/QuizView';
import { ProgressTrackerView } from './components/ProgressTrackerView';
import { BioExpertChat } from './components/BioExpertChat';
import { BookmarksDrawer } from './components/BookmarksDrawer';

export default function App() {
  const [showSplash, setShowSplash] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<AppTab>('atlas');
  const [selectedItemId, setSelectedItemId] = useState<string | undefined>(undefined);
  const [isBookmarksOpen, setIsBookmarksOpen] = useState(false);
  const [pendingBioExpertPrompt, setPendingBioExpertPrompt] = useState<string | null>(null);

  const {
    isDark,
    toggleTheme,
    bookmarks,
    isBookmarked,
    toggleBookmark,
    removeBookmark,
    progress,
    markTermStudied,
    markVirusInspected,
    markDiagramExplored,
    toggleLectureCompleted,
    recordQuizAttempt,
    toggleFlashcardMastered,
    resetProgress,
  } = useAcademicStorage();

  const handleNavigate = useCallback((tab: AppTab, itemId?: string) => {
    setActiveTab(tab);
    setSelectedItemId(itemId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleConsultBioExpert = useCallback((prompt: string) => {
    setPendingBioExpertPrompt(prompt);
    setActiveTab('bio-expert');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (showSplash) {
    return <SplashIntro onEnter={() => setShowSplash(false)} />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#0B1117] text-slate-900 dark:text-slate-100 transition-colors">
      {/* Desktop & Mobile Top Navigation Bar (Strict 3-Zone Contract) */}
      <header className="sticky top-0 z-30 h-12 lg:h-16 bg-white/90 dark:bg-[#0B1117]/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Single-line Brand Wordmark */}
          <button
            type="button"
            onClick={() => handleNavigate('atlas')}
            className="font-display text-lg lg:text-xl font-semibold tracking-tight text-slate-950 dark:text-white whitespace-nowrap shrink-0 cursor-pointer"
          >
            Expert Biology
          </button>

          {/* Zone 2: 5 Single-line Desktop Navigation Links */}
          <nav
            className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600 dark:text-slate-300"
            aria-label="Primary sections"
          >
            {(
              [
                ['atlas', 'Atlas'],
                ['dictionary', 'Dictionary'],
                ['viruses', 'Viruses'],
                ['diagrams', 'Diagrams'],
                ['quizzes', 'Quizzes'],
              ] as Array<[AppTab, string]>
            ).map(([tab, label]) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => handleNavigate(tab)}
                  className={`py-1 whitespace-nowrap shrink-0 transition-colors cursor-pointer border-b-2 ${
                    isActive
                      ? 'border-teal-700 text-slate-950 dark:border-teal-400 dark:text-white font-semibold'
                      : 'border-transparent hover:text-slate-950 dark:hover:text-white'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Single Primary Action CTA */}
          <div className="shrink-0">
            <button
              type="button"
              onClick={() => handleNavigate('bio-expert')}
              className={`min-h-[38px] lg:min-h-[40px] px-3.5 lg:px-4 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                activeTab === 'bio-expert'
                  ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-950'
                  : 'bg-teal-800 hover:bg-teal-900 text-white dark:bg-teal-500 dark:hover:bg-teal-400 dark:text-slate-950'
              }`}
            >
              Bio Expert
            </button>
          </div>
        </div>
      </header>

      {/* Scrollable Workspace Toolbar (Lectures, Progress, Bookmarks, Dark Mode) */}
      <div className="border-b border-slate-200/80 dark:border-slate-800/80 bg-white/60 dark:bg-[#131C26]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between gap-3 overflow-x-auto">
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              onClick={() => handleNavigate('lectures')}
              className={`min-h-[40px] px-3 py-1.5 rounded-lg text-xs font-medium inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                activeTab === 'lectures'
                  ? 'bg-teal-800 text-white dark:bg-teal-500 dark:text-slate-950'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200/60 dark:hover:bg-slate-800'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Lecture Notes</span>
            </button>

            <button
              type="button"
              onClick={() => handleNavigate('progress')}
              className={`min-h-[40px] px-3 py-1.5 rounded-lg text-xs font-medium inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                activeTab === 'progress'
                  ? 'bg-teal-800 text-white dark:bg-teal-500 dark:text-slate-950'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200/60 dark:hover:bg-slate-800'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Progress Tracker</span>
            </button>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setIsBookmarksOpen(true)}
              className="min-h-[40px] px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0B1117] text-xs font-medium text-slate-700 dark:text-slate-200 hover:border-teal-700 dark:hover:border-teal-400 inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Bookmark className="w-3.5 h-3.5 text-teal-700 dark:text-teal-400" />
              <span>Bookmarks ({bookmarks.length})</span>
            </button>

            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light study mode' : 'Switch to dark study mode'}
              className="min-h-[40px] px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0B1117] text-xs font-medium text-slate-700 dark:text-slate-200 hover:border-teal-700 dark:hover:border-teal-400 inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
            >
              {isDark ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span>Day Mode</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-slate-600" />
                  <span>Night Study</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 pb-24 lg:pb-12">
        {activeTab === 'atlas' && (
          <OverviewAtlas
            progress={progress}
            bookmarkCount={bookmarks.length}
            onNavigate={handleNavigate}
            onOpenBookmarks={() => setIsBookmarksOpen(true)}
            onConsultBioExpert={handleConsultBioExpert}
          />
        )}

        {activeTab === 'dictionary' && (
          <DictionaryView
            initialSelectedId={selectedItemId}
            studiedTermIds={progress.studiedTermIds}
            isBookmarked={isBookmarked}
            onToggleBookmark={toggleBookmark}
            onMarkStudied={markTermStudied}
            onOpenDiagram={(diagId) => handleNavigate('diagrams', diagId)}
            onConsultBioExpert={handleConsultBioExpert}
          />
        )}

        {activeTab === 'viruses' && (
          <VirusDatabaseView
            initialSelectedId={selectedItemId}
            isBookmarked={isBookmarked}
            onToggleBookmark={toggleBookmark}
            onInspectVirus={markVirusInspected}
            onConsultBioExpert={handleConsultBioExpert}
          />
        )}

        {activeTab === 'diagrams' && (
          <DiagramsView
            initialSelectedId={selectedItemId}
            isBookmarked={isBookmarked}
            onToggleBookmark={toggleBookmark}
            onExploreDiagram={markDiagramExplored}
            onConsultBioExpert={handleConsultBioExpert}
          />
        )}

        {activeTab === 'lectures' && (
          <LecturesView
            initialSelectedId={selectedItemId}
            completedLectureIds={progress.completedLectureIds}
            isBookmarked={isBookmarked}
            onToggleBookmark={toggleBookmark}
            onToggleCompleted={toggleLectureCompleted}
            onConsultBioExpert={handleConsultBioExpert}
          />
        )}

        {activeTab === 'quizzes' && (
          <QuizView
            masteredFlashcardIds={progress.masteredFlashcardIds}
            onRecordAttempt={recordQuizAttempt}
            onToggleFlashcardMastered={toggleFlashcardMastered}
          />
        )}

        {activeTab === 'progress' && (
          <ProgressTrackerView
            progress={progress}
            onResetProgress={resetProgress}
          />
        )}

        {activeTab === 'bio-expert' && (
          <BioExpertChat
            pendingPrompt={pendingBioExpertPrompt}
            onConsumePendingPrompt={() => setPendingBioExpertPrompt(null)}
          />
        )}
      </main>

      {/* Academic Footer */}
      <footer className="hidden lg:block border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B1117]">
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <span>
            Expert Biology · Built by Imran Khan (Shah Saib), Biology Teacher · Graduate from Russia
          </span>
          <button
            type="button"
            onClick={() => setShowSplash(true)}
            className="text-teal-800 dark:text-teal-400 hover:underline cursor-pointer"
          >
            View Title Cover
          </button>
        </div>
      </footer>

      {/* Mobile Bottom Thumb-Zone Tab Bar (56px height, <=15% combined sticky cap) */}
      <nav
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40 h-14 pb-safe bg-white/95 dark:bg-[#0B1117]/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 grid grid-cols-5 items-center"
        aria-label="Mobile navigation"
      >
        {(
          [
            ['atlas', 'Atlas', Compass],
            ['dictionary', 'Dictionary', BookOpen],
            ['viruses', 'Viruses', Microscope],
            ['diagrams', 'Diagrams', Dna],
            ['quizzes', 'Quizzes', HelpCircle],
          ] as Array<[AppTab, string, typeof Compass]>
        ).map(([tab, label, Icon]) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              type="button"
              onClick={() => handleNavigate(tab)}
              className={`min-h-[44px] flex flex-col items-center justify-center gap-0.5 cursor-pointer transition-colors ${
                isActive
                  ? 'text-teal-800 dark:text-teal-400 font-semibold'
                  : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              <Icon className="w-[20px] h-[20px]" />
              <span className="text-[10px] tracking-tight whitespace-nowrap">{label}</span>
            </button>
          );
        })}
      </nav>

      {/* Bookmarks Slide-over Drawer */}
      <BookmarksDrawer
        isOpen={isBookmarksOpen}
        bookmarks={bookmarks}
        onClose={() => setIsBookmarksOpen(false)}
        onNavigateItem={handleNavigate}
        onRemoveBookmark={removeBookmark}
      />
    </div>
  );
}
