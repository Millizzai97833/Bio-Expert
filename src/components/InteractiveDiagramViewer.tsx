import { BiologyDiagram, DiagramHotspot } from '../types/biology';

interface InteractiveDiagramViewerProps {
  diagram: BiologyDiagram;
  selectedHotspotId: string;
  onSelectHotspot: (hotspot: DiagramHotspot) => void;
  hideLabels: boolean;
}

export function InteractiveDiagramViewer({
  diagram,
  selectedHotspotId,
  onSelectHotspot,
  hideLabels,
}: InteractiveDiagramViewerProps) {
  const renderIllustration = () => {
    switch (diagram.svgType) {
      case 'eukaryotic-cell':
        return (
          <svg viewBox="0 0 800 500" className="w-full h-full" aria-label={diagram.title}>
            {/* Plasma Membrane */}
            <ellipse
              cx="400"
              cy="250"
              rx="320"
              ry="205"
              className="fill-teal-50/60 dark:fill-slate-900/90 stroke-teal-700 dark:stroke-teal-400"
              strokeWidth="8"
            />
            <ellipse
              cx="400"
              cy="250"
              rx="308"
              ry="193"
              className="fill-none stroke-teal-600/30 dark:stroke-teal-400/30"
              strokeWidth="2"
              strokeDasharray="6 4"
            />

            {/* Nucleus */}
            <circle
              cx="375"
              cy="225"
              r="82"
              className="fill-indigo-100/80 dark:fill-indigo-950/70 stroke-indigo-700 dark:stroke-indigo-400"
              strokeWidth="4"
            />
            <circle
              cx="375"
              cy="225"
              r="74"
              className="fill-none stroke-indigo-500/40 dark:stroke-indigo-400/40"
              strokeWidth="2"
              strokeDasharray="8 5"
            />
            {/* Nucleolus */}
            <circle
              cx="385"
              cy="218"
              r="26"
              className="fill-indigo-700/80 dark:fill-indigo-400/70"
            />

            {/* Rough ER folds */}
            <path
              d="M280,165 C240,165 235,205 268,215 C235,230 245,275 292,272"
              className="fill-none stroke-sky-700 dark:stroke-sky-400"
              strokeWidth="12"
              strokeLinecap="round"
            />
            <path
              d="M262,145 C215,155 215,215 245,235 C220,260 238,300 295,295"
              className="fill-none stroke-sky-600/80 dark:stroke-sky-400/70"
              strokeWidth="8"
              strokeLinecap="round"
            />

            {/* Mitochondrion 1 (upper right) */}
            <g transform="translate(585, 150) rotate(-18)">
              <ellipse
                cx="0"
                cy="0"
                rx="54"
                ry="26"
                className="fill-amber-100/90 dark:fill-amber-950/70 stroke-amber-700 dark:stroke-amber-400"
                strokeWidth="3"
              />
              <path
                d="M-40,0 Q-30,-16 -20,0 T0,0 T20,0 T40,0"
                className="fill-none stroke-amber-700 dark:stroke-amber-400"
                strokeWidth="3"
              />
            </g>

            {/* Mitochondrion 2 (lower left) */}
            <g transform="translate(230, 365) rotate(22)">
              <ellipse
                cx="0"
                cy="0"
                rx="46"
                ry="22"
                className="fill-amber-100/90 dark:fill-amber-950/70 stroke-amber-700 dark:stroke-amber-400"
                strokeWidth="3"
              />
              <path
                d="M-32,0 Q-22,-13 -12,0 T8,0 T28,0"
                className="fill-none stroke-amber-700 dark:stroke-amber-400"
                strokeWidth="2.5"
              />
            </g>

            {/* Golgi Apparatus */}
            <g transform="translate(545, 330) rotate(-12)">
              <path d="M-45,-25 Q0,-12 45,-25" className="fill-none stroke-emerald-700 dark:stroke-emerald-400" strokeWidth="9" strokeLinecap="round" />
              <path d="M-52,-6 Q0,8 52,-6" className="fill-none stroke-emerald-700 dark:stroke-emerald-400" strokeWidth="9" strokeLinecap="round" />
              <path d="M-48,14 Q0,27 48,14" className="fill-none stroke-emerald-700 dark:stroke-emerald-400" strokeWidth="9" strokeLinecap="round" />
              <path d="M-36,33 Q0,42 36,33" className="fill-none stroke-emerald-700 dark:stroke-emerald-400" strokeWidth="8" strokeLinecap="round" />
              <circle cx="58" cy="4" r="6" className="fill-emerald-600 dark:fill-emerald-400" />
              <circle cx="-58" cy="-14" r="5" className="fill-emerald-600 dark:fill-emerald-400" />
            </g>

            {/* Lysosome */}
            <circle
              cx="208"
              cy="330"
              r="24"
              className="fill-rose-100/90 dark:fill-rose-950/70 stroke-rose-700 dark:stroke-rose-400"
              strokeWidth="3"
            />
            <circle cx="202" cy="324" r="4" className="fill-rose-600 dark:fill-rose-400" />
            <circle cx="215" cy="336" r="3.5" className="fill-rose-600 dark:fill-rose-400" />

            {/* Centrosome */}
            <g transform="translate(448, 115)">
              <rect x="-12" y="-5" width="24" height="10" rx="2" className="fill-teal-700 dark:fill-teal-400" />
              <rect x="-5" y="10" width="10" height="22" rx="2" className="fill-teal-700 dark:fill-teal-400" />
            </g>
          </svg>
        );

      case 'virion-comparison':
        return (
          <svg viewBox="0 0 800 500" className="w-full h-full" aria-label={diagram.title}>
            {/* Left: Bacteriophage T4 */}
            <g>
              {/* Capsid Head */}
              <polygon
                points="216,42 276,82 276,154 216,194 156,154 156,82"
                className="fill-teal-100/90 dark:fill-teal-950/80 stroke-teal-800 dark:stroke-teal-400"
                strokeWidth="4"
              />
              {/* dsDNA inside head */}
              <path
                d="M196,88 C236,88 196,118 236,118 C196,118 236,148 196,148"
                className="fill-none stroke-sky-700 dark:stroke-sky-400"
                strokeWidth="4"
                strokeLinecap="round"
              />
              {/* Collar & Sheath */}
              <rect x="196" y="194" width="40" height="14" rx="2" className="fill-slate-400 dark:fill-slate-600" />
              <rect
                x="202"
                y="208"
                width="28"
                height="120"
                className="fill-slate-200 dark:fill-slate-800 stroke-teal-800 dark:stroke-teal-400"
                strokeWidth="3"
              />
              {[222, 240, 258, 276, 294, 312].map((yPos) => (
                <line
                  key={yPos}
                  x1="202"
                  y1={yPos}
                  x2="230"
                  y2={yPos}
                  className="stroke-teal-700/60 dark:stroke-teal-400/50"
                  strokeWidth="2"
                />
              ))}
              {/* Baseplate */}
              <polygon
                points="188,328 244,328 256,344 176,344"
                className="fill-teal-800 dark:fill-teal-500"
              />
              {/* Tail Fibers */}
              <polyline points="186,340 120,382 95,438" className="fill-none stroke-slate-700 dark:stroke-slate-300" strokeWidth="4" strokeLinecap="round" />
              <polyline points="196,344 148,396 135,448" className="fill-none stroke-slate-700 dark:stroke-slate-300" strokeWidth="4" strokeLinecap="round" />
              <polyline points="246,340 312,382 337,438" className="fill-none stroke-slate-700 dark:stroke-slate-300" strokeWidth="4" strokeLinecap="round" />
              <polyline points="236,344 284,396 297,448" className="fill-none stroke-slate-700 dark:stroke-slate-300" strokeWidth="4" strokeLinecap="round" />
            </g>

            {/* Center Divider */}
            <line
              x1="400"
              y1="40"
              x2="400"
              y2="460"
              className="stroke-slate-300 dark:stroke-slate-700"
              strokeWidth="1.5"
              strokeDasharray="6 6"
            />

            {/* Right: Enveloped RNA Virion */}
            <g transform="translate(585, 255)">
              {/* Spike glycoproteins */}
              {Array.from({ length: 16 }).map((_, idx) => {
                const angle = (idx * 360) / 16;
                return (
                  <g key={idx} transform={`rotate(${angle})`}>
                    <line x1="0" y1="-118" x2="0" y2="-152" className="stroke-sky-700 dark:stroke-sky-400" strokeWidth="5" />
                    <circle cx="0" cy="-156" r="10" className="fill-sky-700 dark:fill-sky-400" />
                  </g>
                );
              })}
              {/* Lipid Bilayer Envelope */}
              <circle
                cx="0"
                cy="0"
                r="118"
                className="fill-sky-50/80 dark:fill-slate-900 stroke-teal-700 dark:stroke-teal-400"
                strokeWidth="10"
              />
              {/* Capsid Core */}
              <polygon
                points="0,-74 64,-37 64,37 0,74 -64,37 -64,-37"
                className="fill-teal-100/80 dark:fill-teal-950/70 stroke-teal-800 dark:stroke-teal-400"
                strokeWidth="3"
              />
              {/* Helical RNA */}
              <path
                d="M-32,-28 C32,-28 -32,-4 32,-4 C-32,-4 32,20 -32,20 C32,20 -32,42 32,42"
                className="fill-none stroke-amber-600 dark:stroke-amber-400"
                strokeWidth="4.5"
                strokeLinecap="round"
              />
              <circle cx="0" cy="48" r="10" className="fill-indigo-600 dark:fill-indigo-400" />
            </g>
          </svg>
        );

      case 'chloroplast':
        return (
          <svg viewBox="0 0 800 500" className="w-full h-full" aria-label={diagram.title}>
            {/* Outer & Inner Envelope */}
            <ellipse
              cx="400"
              cy="250"
              rx="320"
              ry="175"
              className="fill-emerald-50/70 dark:fill-emerald-950/40 stroke-emerald-800 dark:stroke-emerald-400"
              strokeWidth="6"
            />
            <ellipse
              cx="400"
              cy="250"
              rx="302"
              ry="157"
              className="fill-emerald-100/40 dark:fill-slate-900/80 stroke-emerald-600 dark:stroke-emerald-500"
              strokeWidth="3"
            />

            {/* Stromal Lamellae bridges */}
            <line x1="250" y1="220" x2="555" y2="220" className="stroke-emerald-700 dark:stroke-emerald-400" strokeWidth="6" />
            <line x1="250" y1="275" x2="555" y2="275" className="stroke-emerald-700 dark:stroke-emerald-400" strokeWidth="6" />

            {/* Grana stacks */}
            {[235, 345, 485].map((gx, gi) => (
              <g key={gx} transform={`translate(${gx}, ${gi === 1 ? 235 : 250})`}>
                {[-48, -32, -16, 0, 16, 32, 48].map((dy) => (
                  <rect
                    key={dy}
                    x="-42"
                    y={dy}
                    width="84"
                    height="11"
                    rx="5"
                    className="fill-emerald-700 dark:fill-emerald-500 stroke-emerald-900 dark:stroke-emerald-300"
                    strokeWidth="1.5"
                  />
                ))}
              </g>
            ))}

            {/* Circular Plastid DNA & 70S Ribosomes */}
            <circle cx="600" cy="310" r="24" className="fill-none stroke-amber-600 dark:stroke-amber-400" strokeWidth="3.5" />
            <circle cx="635" cy="285" r="4.5" className="fill-slate-700 dark:fill-slate-300" />
            <circle cx="646" cy="300" r="4.5" className="fill-slate-700 dark:fill-slate-300" />
            <circle cx="565" cy="335" r="4.5" className="fill-slate-700 dark:fill-slate-300" />
          </svg>
        );

      case 'nephron':
        return (
          <svg viewBox="0 0 800 500" className="w-full h-full" aria-label={diagram.title}>
            {/* Cortex / Medulla divider */}
            <line x1="60" y1="240" x2="740" y2="240" className="stroke-slate-300 dark:stroke-slate-700" strokeWidth="1.5" strokeDasharray="8 6" />
            <text x="72" y="226" className="fill-slate-500 dark:fill-slate-400 text-[13px] font-mono">RENAL CORTEX</text>
            <text x="72" y="262" className="fill-slate-500 dark:fill-slate-400 text-[13px] font-mono">RENAL MEDULLA</text>

            {/* Bowman's Capsule & Glomerulus */}
            <path
              d="M195,115 A45,45 0 1,0 195,185"
              className="fill-teal-100/60 dark:fill-teal-950/60 stroke-teal-700 dark:stroke-teal-400"
              strokeWidth="6"
            />
            <path
              d="M115,130 Q165,130 168,150 Q172,170 115,170"
              className="fill-none stroke-rose-600 dark:stroke-rose-400"
              strokeWidth="6"
            />
            <circle cx="164" cy="150" r="18" className="fill-rose-500/30 stroke-rose-600 dark:stroke-rose-400" strokeWidth="3" />

            {/* PCT -> Loop of Henle -> DCT -> Collecting Duct */}
            <path
              d="M195,150 C245,95 290,195 340,130 C370,100 390,150 385,240 L385,375 C385,415 435,415 435,375 L435,240 C435,160 480,100 520,145 C560,185 600,115 655,155 L655,425"
              className="fill-none stroke-teal-700 dark:stroke-teal-400"
              strokeWidth="16"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Thick ascending limb emphasis */}
            <path
              d="M435,340 L435,240"
              className="fill-none stroke-sky-600 dark:stroke-sky-400"
              strokeWidth="22"
              strokeLinecap="round"
            />
            {/* Collecting duct branches */}
            <line x1="655" y1="260" x2="700" y2="235" className="stroke-teal-700 dark:stroke-teal-400" strokeWidth="10" strokeLinecap="round" />
            <line x1="655" y1="335" x2="700" y2="310" className="stroke-teal-700 dark:stroke-teal-400" strokeWidth="10" strokeLinecap="round" />
          </svg>
        );

      case 'dna-replication':
        return (
          <svg viewBox="0 0 800 500" className="w-full h-full" aria-label={diagram.title}>
            {/* Parental double helix left */}
            <path d="M80,235 Q130,200 180,250 T280,250 L335,250" className="fill-none stroke-slate-700 dark:stroke-slate-300" strokeWidth="6" />
            <path d="M80,265 Q130,300 180,250 T280,250 L335,250" className="fill-none stroke-teal-700 dark:stroke-teal-400" strokeWidth="6" />

            {/* Unwound Top Template (Leading) */}
            <path d="M335,250 Q400,145 500,140 L710,140" className="fill-none stroke-slate-700 dark:stroke-slate-300" strokeWidth="6" />
            {/* Continuous Leading Daughter Strand */}
            <path d="M700,164 L390,164" className="fill-none stroke-sky-600 dark:stroke-sky-400" strokeWidth="6" strokeLinecap="round" />
            <polygon points="390,154 370,164 390,174" className="fill-sky-600 dark:fill-sky-400" />

            {/* Unwound Bottom Template (Lagging) */}
            <path d="M335,250 Q400,355 500,360 L710,360" className="fill-none stroke-teal-700 dark:stroke-teal-400" strokeWidth="6" />
            {/* Discontinuous Okazaki Fragments */}
            <line x1="400" y1="336" x2="480" y2="336" className="stroke-amber-600 dark:stroke-amber-400" strokeWidth="6" strokeLinecap="round" />
            <line x1="505" y1="336" x2="590" y2="336" className="stroke-amber-600 dark:stroke-amber-400" strokeWidth="6" strokeLinecap="round" />
            <line x1="615" y1="336" x2="705" y2="336" className="stroke-amber-600 dark:stroke-amber-400" strokeWidth="6" strokeLinecap="round" />

            {/* Helicase Ring */}
            <polygon
              points="315,250 335,220 365,220 385,250 365,280 335,280"
              className="fill-teal-600/25 dark:fill-teal-400/25 stroke-teal-700 dark:stroke-teal-300"
              strokeWidth="3.5"
            />
            {/* Topoisomerase */}
            <circle cx="160" cy="250" r="22" className="fill-indigo-500/20 stroke-indigo-700 dark:stroke-indigo-400" strokeWidth="3" />
          </svg>
        );

      case 'motor-neuron':
        return (
          <svg viewBox="0 0 800 500" className="w-full h-full" aria-label={diagram.title}>
            {/* Dendrites */}
            <g className="stroke-teal-700 dark:stroke-teal-400" strokeWidth="4" fill="none" strokeLinecap="round">
              <path d="M145,235 L85,165 M145,235 L70,210 M145,255 L75,275 M145,265 L95,335 M165,215 L140,135" />
            </g>
            {/* Soma */}
            <circle cx="170" cy="250" r="46" className="fill-teal-100/80 dark:fill-teal-950/70 stroke-teal-700 dark:stroke-teal-400" strokeWidth="4" />
            <circle cx="170" cy="250" r="16" className="fill-indigo-600/70 dark:fill-indigo-400/70" />

            {/* Axon Hillock + Axon Shaft */}
            <path d="M214,238 Q245,248 275,250 L640,250" className="fill-none stroke-teal-700 dark:stroke-teal-400" strokeWidth="8" />

            {/* Myelin Sheaths */}
            {[295, 395, 495].map((mx) => (
              <rect
                key={mx}
                x={mx}
                y="224"
                width="82"
                height="52"
                rx="18"
                className="fill-sky-100 dark:fill-sky-950/80 stroke-sky-700 dark:stroke-sky-400"
                strokeWidth="3"
              />
            ))}

            {/* Axon Terminal & Synaptic Vesicles */}
            <path d="M640,250 L685,205 M640,250 L685,295" className="stroke-teal-700 dark:stroke-teal-400" strokeWidth="6" strokeLinecap="round" />
            <circle cx="695" cy="200" r="22" className="fill-amber-100 dark:fill-amber-950/70 stroke-amber-600 dark:stroke-amber-400" strokeWidth="3" />
            <circle cx="695" cy="300" r="22" className="fill-amber-100 dark:fill-amber-950/70 stroke-amber-600 dark:stroke-amber-400" strokeWidth="3" />
            <circle cx="690" cy="196" r="4" className="fill-amber-700 dark:fill-amber-300" />
            <circle cx="702" cy="205" r="4" className="fill-amber-700 dark:fill-amber-300" />
            <circle cx="692" cy="296" r="4" className="fill-amber-700 dark:fill-amber-300" />
          </svg>
        );
    }
  };

  return (
    <div className="relative w-full aspect-[16/10] rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0F1720] diagram-grid-bg overflow-hidden select-none">
      {renderIllustration()}

      {/* Interactive Numbered Hotspot Buttons */}
      {diagram.hotspots.map((spot) => {
        const isSelected = spot.id === selectedHotspotId;
        return (
          <button
            key={spot.id}
            type="button"
            onClick={() => onSelectHotspot(spot)}
            style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
            className={`absolute -translate-x-1/2 -translate-y-1/2 min-w-[36px] min-h-[36px] flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-semibold transition-transform cursor-pointer shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 ${
              isSelected
                ? 'bg-teal-800 text-white dark:bg-teal-400 dark:text-slate-950 scale-110 z-20 ring-4 ring-teal-700/20 dark:ring-teal-400/25'
                : 'bg-white/95 dark:bg-slate-800/95 text-slate-900 dark:text-slate-100 border border-slate-300 dark:border-slate-600 hover:border-teal-600 dark:hover:border-teal-400 z-10'
            }`}
            aria-label={`Inspect structure ${spot.number}: ${hideLabels ? 'Hidden label' : spot.label}`}
          >
            <span>{spot.number}</span>
            {!hideLabels && (
              <span className="hidden sm:inline font-sans font-medium whitespace-nowrap max-w-[130px] truncate">
                {spot.label.split('(')[0].trim()}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
