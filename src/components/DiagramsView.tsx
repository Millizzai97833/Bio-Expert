import { useState, useMemo, useEffect } from 'react';
import { Bookmark, Eye, EyeOff, Layers, MessageSquareText } from 'lucide-react';
import { BIOLOGY_DIAGRAMS } from '../data/diagramsData';
import { BiologyDiagram, BookmarkCategory, DiagramHotspot } from '../types/biology';
import { InteractiveDiagramViewer } from './InteractiveDiagramViewer';

interface DiagramsViewProps {
  initialSelectedId?: string;
  isBookmarked: (id: string, category: BookmarkCategory) => boolean;
  onToggleBookmark: (item: { id: string; category: BookmarkCategory; title: string; subtitle: string }) => void;
  onExploreDiagram: (diagramId: string) => void;
  onConsultBioExpert: (context: string) => void;
}

export function DiagramsView({
  initialSelectedId,
  isBookmarked,
  onToggleBookmark,
  onExploreDiagram,
  onConsultBioExpert,
}: DiagramsViewProps) {
  const [selectedDiagramId, setSelectedDiagramId] = useState<string>(
    initialSelectedId || BIOLOGY_DIAGRAMS[0].id
  );
  const [hideLabels, setHideLabels] = useState(false);
  const [showPlate, setShowPlate] = useState(false);

  const activeDiagram: BiologyDiagram = useMemo(
    () => BIOLOGY_DIAGRAMS.find((d) => d.id === selectedDiagramId) || BIOLOGY_DIAGRAMS[0],
    [selectedDiagramId]
  );

  const [selectedHotspot, setSelectedHotspot] = useState<DiagramHotspot>(
    activeDiagram.hotspots[0]
  );

  useEffect(() => {
    if (initialSelectedId && BIOLOGY_DIAGRAMS.some((d) => d.id === initialSelectedId)) {
      setSelectedDiagramId(initialSelectedId);
    }
  }, [initialSelectedId]);

  useEffect(() => {
    setSelectedHotspot(activeDiagram.hotspots[0]);
    setShowPlate(false);
    onExploreDiagram(activeDiagram.id);
  }, [activeDiagram, onExploreDiagram]);

  const bookmarked = isBookmarked(activeDiagram.id, 'diagram');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Visual Biology Atlas · Interactive Anatomical &amp; Cellular Schematics
          </p>
          <h1 className="font-display text-2xl sm:text-3xl font-semibold text-slate-950 dark:text-white mt-1">
            Interactive Biological Diagrams
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setHideLabels((prev) => !prev)}
            className={`min-h-[44px] px-4 py-2 rounded-xl border text-xs font-semibold inline-flex items-center gap-2 transition-colors cursor-pointer whitespace-nowrap ${
              hideLabels
                ? 'border-teal-700 bg-teal-800 text-white dark:border-teal-400 dark:bg-teal-500 dark:text-slate-950'
                : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-[#131C26] text-slate-800 dark:text-slate-100'
            }`}
          >
            {hideLabels ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            <span>{hideLabels ? 'Recall Mode: Labels Hidden' : 'Study Mode: Labels Visible'}</span>
          </button>

          {activeDiagram.plateImage && (
            <button
              type="button"
              onClick={() => setShowPlate((prev) => !prev)}
              className="min-h-[44px] px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#131C26] text-xs font-semibold text-slate-800 dark:text-slate-100 inline-flex items-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <Layers className="w-4 h-4 text-teal-700 dark:text-teal-400" />
              <span>{showPlate ? 'Interactive Vector' : 'Textbook Plate'}</span>
            </button>
          )}
        </div>
      </div>

      {/* Diagram Selector Strip */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {BIOLOGY_DIAGRAMS.map((diag) => (
          <button
            key={diag.id}
            type="button"
            onClick={() => setSelectedDiagramId(diag.id)}
            className={`min-h-[40px] px-3.5 py-2 rounded-xl text-xs font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              diag.id === activeDiagram.id
                ? 'bg-teal-800 text-white dark:bg-teal-500 dark:text-slate-950'
                : 'bg-slate-200/70 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-300/70 dark:hover:bg-slate-700'
            }`}
          >
            {diag.title}
          </button>
        ))}
      </div>

      {/* Two-Zone Sandbox Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Interactive Stage */}
        <div className="lg:col-span-8 space-y-3">
          {showPlate && activeDiagram.plateImage ? (
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131C26] p-4 space-y-3">
              <div className="aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-900">
                <img
                  src={activeDiagram.plateImage}
                  alt={activeDiagram.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain bg-white"
                />
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Archival Illustration Plate · Switch back to Interactive Vector to inspect numbered hotspots.
              </p>
            </div>
          ) : (
            <InteractiveDiagramViewer
              diagram={activeDiagram}
              selectedHotspotId={selectedHotspot.id}
              onSelectHotspot={setSelectedHotspot}
              hideLabels={hideLabels}
            />
          )}

          <div className="flex flex-wrap items-center justify-between gap-3 px-1">
            <div>
              <h2 className="font-display text-xl font-semibold text-slate-950 dark:text-white">
                {activeDiagram.title}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {activeDiagram.discipline} · {activeDiagram.subtitle}
              </p>
            </div>
            <button
              type="button"
              onClick={() =>
                onToggleBookmark({
                  id: activeDiagram.id,
                  category: 'diagram',
                  title: activeDiagram.title,
                  subtitle: activeDiagram.discipline,
                })
              }
              className={`min-h-[44px] px-4 py-2 rounded-xl border text-xs font-semibold inline-flex items-center gap-2 transition-colors cursor-pointer ${
                bookmarked
                  ? 'border-teal-700 bg-teal-50 text-teal-800 dark:border-teal-400 dark:bg-teal-950/60 dark:text-teal-300'
                  : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-[#131C26] text-slate-700 dark:text-slate-200'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-current' : ''}`} />
              <span>{bookmarked ? 'Diagram Saved' : 'Bookmark Diagram'}</span>
            </button>
          </div>
        </div>

        {/* Control & Structure Concept Deck */}
        <aside className="lg:col-span-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131C26] p-5 sm:p-6 space-y-5">
          <div className="space-y-1.5">
            <div className="text-xs font-mono text-teal-800 dark:text-teal-400">
              Structure {selectedHotspot.number} of {activeDiagram.hotspots.length}
            </div>
            <h3 className="font-display text-xl font-semibold text-slate-950 dark:text-white">
              {selectedHotspot.label}
            </h3>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
              {selectedHotspot.role}
            </p>
          </div>

          <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
            {selectedHotspot.structureDetail}
          </p>

          {/* Structure Index Pills as Functional Selectors */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              All Labeled Structures
            </div>
            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              {activeDiagram.hotspots.map((spot) => {
                const isActive = spot.id === selectedHotspot.id;
                return (
                  <button
                    key={spot.id}
                    type="button"
                    onClick={() => setSelectedHotspot(spot)}
                    className={`w-full min-h-[44px] py-2.5 px-2 text-left flex items-center gap-3 text-xs transition-colors cursor-pointer rounded-lg ${
                      isActive
                        ? 'bg-teal-50/80 dark:bg-teal-950/40 text-teal-900 dark:text-teal-200 font-semibold'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                    }`}
                  >
                    <span className="font-mono w-5 text-center shrink-0">{spot.number}.</span>
                    <span className="truncate">
                      {hideLabels && !isActive ? 'Tap to reveal structure' : spot.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            onClick={() =>
              onConsultBioExpert(
                `Explain the structural-functional relationship of ${selectedHotspot.label} within ${activeDiagram.title}, including relevant biochemical pathways.`
              )
            }
            className="w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-teal-800 hover:bg-teal-900 dark:bg-teal-500 dark:hover:bg-teal-400 text-white dark:text-slate-950 text-xs font-semibold inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <MessageSquareText className="w-4 h-4" />
            <span>Ask Bio Expert About Structure</span>
          </button>
        </aside>
      </div>
    </div>
  );
}
