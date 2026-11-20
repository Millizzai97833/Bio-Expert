import { useState, useEffect, useCallback } from 'react';
import {
  BookmarkCategory,
  BookmarkItem,
  QuizAttemptRecord,
  StudyProgress,
} from '../types/biology';

const THEME_KEY = 'expert_biology_theme';
const BOOKMARKS_KEY = 'expert_biology_bookmarks_v1';
const PROGRESS_KEY = 'expert_biology_progress_v1';

const DEFAULT_PROGRESS: StudyProgress = {
  studiedTermIds: [],
  completedLectureIds: [],
  inspectedVirusIds: [],
  exploredDiagramIds: [],
  quizAttempts: [],
  masteredFlashcardIds: [],
  lastStudyDate: new Date().toISOString().slice(0, 10),
};

export function useAcademicStorage() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem(THEME_KEY);
      if (saved === 'dark') return true;
      if (saved === 'light') return false;
      return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
    } catch {
      return false;
    }
  });

  const [bookmarks, setBookmarks] = useState<BookmarkItem[]>(() => {
    try {
      const raw = localStorage.getItem(BOOKMARKS_KEY);
      return raw ? (JSON.parse(raw) as BookmarkItem[]) : [];
    } catch {
      return [];
    }
  });

  const [progress, setProgress] = useState<StudyProgress>(() => {
    try {
      const raw = localStorage.getItem(PROGRESS_KEY);
      return raw ? { ...DEFAULT_PROGRESS, ...(JSON.parse(raw) as Partial<StudyProgress>) } : DEFAULT_PROGRESS;
    } catch {
      return DEFAULT_PROGRESS;
    }
  });

  useEffect(() => {
    try {
      document.documentElement.classList.toggle('dark', isDark);
      localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light');
    } catch {
      // Ignore storage errors in restricted environments
    }
  }, [isDark]);

  useEffect(() => {
    try {
      localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks));
    } catch {
      // Ignore storage errors
    }
  }, [bookmarks]);

  useEffect(() => {
    try {
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
    } catch {
      // Ignore storage errors
    }
  }, [progress]);

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => !prev);
  }, []);

  const isBookmarked = useCallback(
    (id: string, category: BookmarkCategory) =>
      bookmarks.some((b) => b.id === id && b.category === category),
    [bookmarks]
  );

  const toggleBookmark = useCallback(
    (item: Omit<BookmarkItem, 'savedAt'>) => {
      setBookmarks((prev) => {
        const exists = prev.some((b) => b.id === item.id && b.category === item.category);
        if (exists) {
          return prev.filter((b) => !(b.id === item.id && b.category === item.category));
        }
        return [
          {
            ...item,
            savedAt: new Date().toISOString(),
          },
          ...prev,
        ];
      });
    },
    []
  );

  const removeBookmark = useCallback((id: string, category: BookmarkCategory) => {
    setBookmarks((prev) => prev.filter((b) => !(b.id === id && b.category === category)));
  }, []);

  const markTermStudied = useCallback((termId: string) => {
    setProgress((prev) => {
      if (prev.studiedTermIds.includes(termId)) return prev;
      return {
        ...prev,
        studiedTermIds: [...prev.studiedTermIds, termId],
        lastStudyDate: new Date().toISOString().slice(0, 10),
      };
    });
  }, []);

  const markVirusInspected = useCallback((virusId: string) => {
    setProgress((prev) => {
      if (prev.inspectedVirusIds.includes(virusId)) return prev;
      return {
        ...prev,
        inspectedVirusIds: [...prev.inspectedVirusIds, virusId],
        lastStudyDate: new Date().toISOString().slice(0, 10),
      };
    });
  }, []);

  const markDiagramExplored = useCallback((diagramId: string) => {
    setProgress((prev) => {
      if (prev.exploredDiagramIds.includes(diagramId)) return prev;
      return {
        ...prev,
        exploredDiagramIds: [...prev.exploredDiagramIds, diagramId],
        lastStudyDate: new Date().toISOString().slice(0, 10),
      };
    });
  }, []);

  const toggleLectureCompleted = useCallback((lectureId: string) => {
    setProgress((prev) => {
      const exists = prev.completedLectureIds.includes(lectureId);
      return {
        ...prev,
        completedLectureIds: exists
          ? prev.completedLectureIds.filter((id) => id !== lectureId)
          : [...prev.completedLectureIds, lectureId],
        lastStudyDate: new Date().toISOString().slice(0, 10),
      };
    });
  }, []);

  const recordQuizAttempt = useCallback((attempt: Omit<QuizAttemptRecord, 'id' | 'completedAt'>) => {
    const newAttempt: QuizAttemptRecord = {
      ...attempt,
      id: `attempt-${Date.now()}`,
      completedAt: new Date().toISOString(),
    };
    setProgress((prev) => ({
      ...prev,
      quizAttempts: [newAttempt, ...prev.quizAttempts].slice(0, 30),
      lastStudyDate: new Date().toISOString().slice(0, 10),
    }));
  }, []);

  const toggleFlashcardMastered = useCallback((termId: string) => {
    setProgress((prev) => {
      const exists = prev.masteredFlashcardIds.includes(termId);
      return {
        ...prev,
        masteredFlashcardIds: exists
          ? prev.masteredFlashcardIds.filter((id) => id !== termId)
          : [...prev.masteredFlashcardIds, termId],
        lastStudyDate: new Date().toISOString().slice(0, 10),
      };
    });
  }, []);

  const resetProgress = useCallback(() => {
    setProgress({
      ...DEFAULT_PROGRESS,
      lastStudyDate: new Date().toISOString().slice(0, 10),
    });
  }, []);

  return {
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
  };
}
