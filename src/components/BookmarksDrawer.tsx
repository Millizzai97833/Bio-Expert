import { Bookmark, Trash2, X } from 'lucide-react';
import { AppTab, BookmarkCategory, BookmarkItem } from '../types/biology';

interface BookmarksDrawerProps {
  isOpen: boolean;
  bookmarks: BookmarkItem[];
  onClose: () => void;
  onNavigateItem: (tab: AppTab, id: string) => void;
  onRemoveBookmark: (id: string, category: BookmarkCategory) => void;
}

const CATEGORY_TO_TAB: Record<BookmarkCategory, AppTab> = {
  dictionary: 'dictionary',
  virus: 'viruses',
  lecture: 'lectures',
  diagram: 'diagrams',
};

const CATEGORY_LABELS: Record<BookmarkCategory, string> = {
  dictionary: 'Dictionary Term',
  virus: 'Virology Monograph',
  lecture: 'Lecture Note',
  diagram: 'Biological Diagram',
};

export function BookmarksDrawer({
  isOpen,
  bookmarks,
  onClose,
  onNavigateItem,
  onRemoveBookmark,
}: BookmarksDrawerProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-label="Saved Bookmarks"
    >
      <div className="w-full max-w-md h-full bg-white dark:bg-[#131C26] border-l border-slate-200 dark:border-slate-800 flex flex-col">
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Bookmark className="w-4 h-4 text-teal-700 dark:text-teal-400" />
            <h2 className="font-display text-lg font-semibold text-slate-950 dark:text-white">
              Saved Study Bookmarks ({bookmarks.length})
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close bookmarks"
            className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3">
          {bookmarks.length === 0 ? (
            <div className="py-16 text-center space-y-2">
              <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
                No bookmarked study items yet.
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs mx-auto leading-relaxed">
                Save lecture notes, biological diagrams, viral monographs, or dictionary definitions for rapid late-night review.
              </p>
            </div>
          ) : (
            bookmarks.map((item) => (
              <div
                key={`${item.category}-${item.id}`}
                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-[#0B1117] p-3.5 flex items-center justify-between gap-3"
              >
                <button
                  type="button"
                  onClick={() => {
                    onNavigateItem(CATEGORY_TO_TAB[item.category], item.id);
                    onClose();
                  }}
                  className="flex-1 text-left min-w-0 cursor-pointer"
                >
                  <div className="text-[11px] font-medium text-teal-800 dark:text-teal-400">
                    {CATEGORY_LABELS[item.category]}
                  </div>
                  <div className="text-sm font-semibold text-slate-950 dark:text-white truncate mt-0.5">
                    {item.title}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5">
                    {item.subtitle}
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => onRemoveBookmark(item.id, item.category)}
                  aria-label={`Remove ${item.title} from bookmarks`}
                  className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 cursor-pointer shrink-0"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
