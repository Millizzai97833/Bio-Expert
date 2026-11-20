import { useState, useMemo, useEffect } from 'react';
import {
  ArrowLeftRight,
  Bookmark,
  MessageSquareText,
  Search,
} from 'lucide-react';
import { VIRUS_MONOGRAPHS } from '../data/virusData';
import { BaltimoreGroup, BookmarkCategory, VirusMonograph } from '../types/biology';

interface VirusDatabaseViewProps {
  initialSelectedId?: string;
  isBookmarked: (id: string, category: BookmarkCategory) => boolean;
  onToggleBookmark: (item: { id: string; category: BookmarkCategory; title: string; subtitle: string }) => void;
  onInspectVirus: (virusId: string) => void;
  onConsultBioExpert: (context: string) => void;
}

const BALTIMORE_FILTERS: Array<'All' | BaltimoreGroup> = [
  'All',
  'Group I (dsDNA)',
  'Group IV ((+)ssRNA)',
  'Group V ((-)ssRNA)',
  'Group VI (ssRNA-RT)',
  'Group VII (dsDNA-RT)',
];

export function VirusDatabaseView({
  initialSelectedId,
  isBookmarked,
  onToggleBookmark,
  onInspectVirus,
  onConsultBioExpert,
}: VirusDatabaseViewProps) {
  const [search, setSearch] = useState('');
  const [groupFilter, setGroupFilter] = useState<'All' | BaltimoreGroup>('All');
  const [envelopeFilter, setEnvelopeFilter] = useState<'all' | 'enveloped' | 'non-enveloped'>('all');
  const [selectedId, setSelectedId] = useState<string>(
    initialSelectedId || VIRUS_MONOGRAPHS[0].id
  );
  const [compareMode, setCompareMode] = useState(false);
  const [compareId, setCompareId] = useState<string>(VIRUS_MONOGRAPHS[3].id);

  useEffect(() => {
    if (initialSelectedId && VIRUS_MONOGRAPHS.some((v) => v.id === initialSelectedId)) {
      setSelectedId(initialSelectedId);
      setGroupFilter('All');
      setEnvelopeFilter('all');
      setSearch('');
    }
  }, [initialSelectedId]);

  const filteredViruses = useMemo(() => {
    const q = search.trim().toLowerCase();
    return VIRUS_MONOGRAPHS.filter((v) => {
      if (groupFilter !== 'All' && v.baltimoreGroup !== groupFilter) return false;
      if (envelopeFilter === 'enveloped' && !v.enveloped) return false;
      if (envelopeFilter === 'non-enveloped' && v.enveloped) return false;
      if (!q) return true;
      return (
        v.name.toLowerCase().includes(q) ||
        v.scientificName.toLowerCase().includes(q) ||
        v.family.toLowerCase().includes(q) ||
        v.entryReceptor.toLowerCase().includes(q) ||
        v.pathogenesis.toLowerCase().includes(q)
      );
    });
  }, [search, groupFilter, envelopeFilter]);

  const activeVirus: VirusMonograph = useMemo(
    () =>
      VIRUS_MONOGRAPHS.find((v) => v.id === selectedId) ||
      filteredViruses[0] ||
      VIRUS_MONOGRAPHS[0],
    [selectedId, filteredViruses]
  );

  const secondaryVirus: VirusMonograph = useMemo(
    () => VIRUS_MONOGRAPHS.find((v) => v.id === compareId) || VIRUS_MONOGRAPHS[1],
    [compareId]
  );

  useEffect(() => {
    if (activeVirus) {
      onInspectVirus(activeVirus.id);
    }
  }, [activeVirus, onInspectVirus]);

  const bookmarked = isBookmarked(activeVirus.id, 'virus');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Virology Research Compendium · Baltimore Classes I–VII
          </p>
          <h1 className="font-display text-2xl sm:text-3xl font-semibold text-slate-950 dark:text-white mt-1">
            Viral &amp; Pathogen Research Database
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search virus, family, receptor..."
              aria-label="Search virus database"
              className="w-full min-h-[44px] pl-10 pr-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#131C26] text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-700 dark:focus:ring-teal-400"
            />
          </div>

          <button
            type="button"
            onClick={() => setCompareMode((prev) => !prev)}
            className={`min-h-[44px] px-4 py-2 rounded-xl border text-xs font-semibold inline-flex items-center gap-2 transition-colors cursor-pointer whitespace-nowrap ${
              compareMode
                ? 'border-teal-700 bg-teal-800 text-white dark:border-teal-400 dark:bg-teal-500 dark:text-slate-950'
                : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-[#131C26] text-slate-800 dark:text-slate-100 hover:border-teal-700'
            }`}
          >
            <ArrowLeftRight className="w-4 h-4" />
            <span>{compareMode ? 'Exit Comparison' : 'Compare Specimens'}</span>
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
          {BALTIMORE_FILTERS.map((grp) => (
            <button
              key={grp}
              type="button"
              onClick={() => setGroupFilter(grp)}
              className={`min-h-[38px] px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                groupFilter === grp
                  ? 'bg-teal-800 text-white dark:bg-teal-500 dark:text-slate-950'
                  : 'bg-slate-200/70 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-300/70 dark:hover:bg-slate-700'
              }`}
            >
              {grp}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-1 p-1 rounded-lg bg-slate-200/60 dark:bg-slate-800/80 self-start">
          {(['all', 'enveloped', 'non-enveloped'] as const).map((env) => (
            <button
              key={env}
              type="button"
              onClick={() => setEnvelopeFilter(env)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium capitalize whitespace-nowrap transition-colors cursor-pointer ${
                envelopeFilter === env
                  ? 'bg-white dark:bg-slate-900 text-slate-950 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              {env === 'all' ? 'All Capsids' : env}
            </button>
          ))}
        </div>
      </div>

      {compareMode ? (
        /* Side-by-Side Comparison View */
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131C26] p-6 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5">
                Primary Specimen
              </label>
              <select
                value={activeVirus.id}
                onChange={(e) => setSelectedId(e.target.value)}
                className="w-full min-h-[44px] px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-[#0B1117] text-sm font-medium text-slate-900 dark:text-slate-100"
              >
                {VIRUS_MONOGRAPHS.map((v) => (
                  <option key={v.id} value={v.id}>
                    {v.name} ({v.baltimoreGroup})
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5">
                Comparison Specimen
              </label>
              <select
                value={secondaryVirus.id}
                onChange={(e) => setCompareId(e.target.value)}
                className="w-full min-h-[44px] px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-[#0B1117] text-sm font-medium text-slate-900 dark:text-slate-100"
              >
                {VIRUS_MONOGRAPHS.map((v) => (
                  <option key={v.id} value={v.id}>
                    {v.name} ({v.baltimoreGroup})
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
                  <th className="py-3 pr-4 font-semibold w-44">Parameter</th>
                  <th className="py-3 px-4 font-semibold text-slate-950 dark:text-white">
                    {activeVirus.name}
                  </th>
                  <th className="py-3 pl-4 font-semibold text-slate-950 dark:text-white">
                    {secondaryVirus.name}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {[
                  ['Taxonomic Family', activeVirus.family, secondaryVirus.family],
                  ['Baltimore Group', activeVirus.baltimoreGroup, secondaryVirus.baltimoreGroup],
                  ['Genome Size', activeVirus.genomeSizeKb, secondaryVirus.genomeSizeKb],
                  ['Genome Structure', activeVirus.genomeType, secondaryVirus.genomeType],
                  [
                    'Lipid Envelope',
                    activeVirus.enveloped ? 'Enveloped (detergent-sensitive)' : 'Non-enveloped (naked capsid)',
                    secondaryVirus.enveloped ? 'Enveloped (detergent-sensitive)' : 'Non-enveloped (naked capsid)',
                  ],
                  ['Capsid Symmetry', activeVirus.capsidSymmetry, secondaryVirus.capsidSymmetry],
                  ['Entry Receptor', activeVirus.entryReceptor, secondaryVirus.entryReceptor],
                  ['Replication Site', activeVirus.replicationSite, secondaryVirus.replicationSite],
                  ['Host Range', activeVirus.hostRange, secondaryVirus.hostRange],
                ].map(([label, valA, valB]) => (
                  <tr key={label}>
                    <td className="py-3 pr-4 text-xs font-semibold text-slate-500 dark:text-slate-400 align-top">
                      {label}
                    </td>
                    <td className="py-3 px-4 text-slate-800 dark:text-slate-200 align-top">{valA}</td>
                    <td className="py-3 pl-4 text-slate-800 dark:text-slate-200 align-top">{valB}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* Master-Detail Database View */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Specimen List */}
          <div className="lg:col-span-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131C26] divide-y divide-slate-100 dark:divide-slate-800 max-h-[600px] overflow-y-auto">
            {filteredViruses.length === 0 ? (
              <div className="p-6 text-sm text-slate-500 dark:text-slate-400">
                No viral specimens match the selected filters.
              </div>
            ) : (
              filteredViruses.map((virus) => {
                const isSelected = virus.id === activeVirus.id;
                return (
                  <button
                    key={virus.id}
                    type="button"
                    onClick={() => setSelectedId(virus.id)}
                    className={`w-full min-h-[64px] px-4 py-3.5 text-left transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-teal-50/80 dark:bg-teal-950/40'
                        : 'hover:bg-slate-50 dark:hover:bg-slate-800/50'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-semibold text-slate-950 dark:text-white truncate">
                        {virus.name}
                      </span>
                      <span className="font-mono text-xs text-slate-500 dark:text-slate-400 shrink-0 tabular-nums">
                        {virus.genomeSizeKb}
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1.5 truncate">
                      <span>{virus.family}</span>
                      <span aria-hidden="true">·</span>
                      <span>{virus.baltimoreGroup}</span>
                    </div>
                  </button>
                );
              })
            )}
          </div>

          {/* Detailed Monograph */}
          <article className="lg:col-span-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131C26] p-6 sm:p-8 space-y-6">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <div className="text-xs text-slate-500 dark:text-slate-400 flex flex-wrap items-center gap-2">
                  <span className="font-medium text-teal-800 dark:text-teal-400">
                    {activeVirus.baltimoreGroup}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>Family {activeVirus.family}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeVirus.enveloped ? 'Enveloped' : 'Non-Enveloped'}</span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-slate-950 dark:text-white">
                  {activeVirus.name}
                </h2>
                <p className="text-sm italic text-slate-500 dark:text-slate-400">
                  {activeVirus.scientificName} (Genus {activeVirus.genus})
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  onToggleBookmark({
                    id: activeVirus.id,
                    category: 'virus',
                    title: activeVirus.name,
                    subtitle: `${activeVirus.family} · ${activeVirus.baltimoreGroup}`,
                  })
                }
                aria-label={bookmarked ? 'Remove bookmark' : 'Bookmark monograph'}
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

            {/* Structured Virological Spec Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-slate-50 dark:bg-[#0B1117] border border-slate-200/70 dark:border-slate-800">
              <div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Genome Architecture</div>
                <div className="text-sm font-medium text-slate-900 dark:text-slate-100 mt-0.5">
                  {activeVirus.genomeType}
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Genome Length &amp; Symmetry</div>
                <div className="text-sm font-medium text-slate-900 dark:text-slate-100 mt-0.5">
                  <span className="font-mono">{activeVirus.genomeSizeKb}</span> · {activeVirus.capsidSymmetry}
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Host Entry Receptor</div>
                <div className="text-sm font-medium text-slate-900 dark:text-slate-100 mt-0.5">
                  {activeVirus.entryReceptor}
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Replication Compartment</div>
                <div className="text-sm font-medium text-slate-900 dark:text-slate-100 mt-0.5">
                  {activeVirus.replicationSite}
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Host Tropism &amp; Reservoir</div>
                <div className="text-sm font-medium text-slate-900 dark:text-slate-100 mt-0.5">
                  {activeVirus.hostRange}
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Incubation &amp; Transmission</div>
                <div className="text-sm font-medium text-slate-900 dark:text-slate-100 mt-0.5">
                  {activeVirus.incubationPeriod} · {activeVirus.transmissionRoute}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <section className="space-y-1.5">
                <h3 className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  Molecular Pathogenesis
                </h3>
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed">
                  {activeVirus.pathogenesis}
                </p>
              </section>

              <section className="space-y-1.5">
                <h3 className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  Clinical Presentation &amp; Syndrome
                </h3>
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                  {activeVirus.clinicalPresentation}
                </p>
              </section>

              <section className="space-y-1.5">
                <h3 className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  Prophylaxis, Immunization &amp; Antivirals
                </h3>
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                  {activeVirus.prophylaxisAndTherapy}
                </p>
              </section>

              <section className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-[#0B1117]/70 space-y-1">
                <h3 className="text-xs font-semibold text-teal-800 dark:text-teal-400">
                  Landmark Research Significance
                </h3>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {activeVirus.researchLandmark}
                </p>
              </section>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  onConsultBioExpert(
                    `Provide a scholarly virological briefing on ${activeVirus.name} (${activeVirus.scientificName}, ${activeVirus.baltimoreGroup}), focusing on its replication cycle, host immune evasion, and therapeutic targets.`
                  )
                }
                className="min-h-[44px] px-4 py-2 rounded-xl bg-teal-800 hover:bg-teal-900 dark:bg-teal-500 dark:hover:bg-teal-400 text-white dark:text-slate-950 text-xs font-semibold transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                <MessageSquareText className="w-4 h-4" />
                <span>Consult Bio Expert on {activeVirus.name}</span>
              </button>
            </div>
          </article>
        </div>
      )}
    </div>
  );
}
