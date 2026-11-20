export type Discipline =
  | 'Cell Biology'
  | 'Molecular Genetics'
  | 'Virology'
  | 'Microbiology'
  | 'Human Physiology'
  | 'Botany'
  | 'Immunology'
  | 'Biochemistry';

export interface DictionaryTerm {
  id: string;
  term: string;
  pronunciation: string;
  etymology: string;
  discipline: Discipline;
  definition: string;
  mechanism: string;
  significance: string;
  relatedTerms: string[];
  diagramId?: string;
}

export type BaltimoreGroup =
  | 'Group I (dsDNA)'
  | 'Group II (ssDNA)'
  | 'Group III (dsRNA)'
  | 'Group IV ((+)ssRNA)'
  | 'Group V ((-)ssRNA)'
  | 'Group VI (ssRNA-RT)'
  | 'Group VII (dsDNA-RT)';

export interface VirusMonograph {
  id: string;
  name: string;
  scientificName: string;
  family: string;
  genus: string;
  baltimoreGroup: BaltimoreGroup;
  genomeType: string;
  genomeSizeKb: string;
  capsidSymmetry: string;
  enveloped: boolean;
  hostRange: string;
  entryReceptor: string;
  replicationSite: string;
  incubationPeriod: string;
  transmissionRoute: string;
  pathogenesis: string;
  clinicalPresentation: string;
  prophylaxisAndTherapy: string;
  researchLandmark: string;
}

export interface LectureSection {
  heading: string;
  prose: string;
  keyFormulaOrPathway?: string;
  clinicalOrLabPearl?: string;
}

export interface LectureModule {
  id: string;
  number: string;
  title: string;
  discipline: Discipline;
  readingMinutes: number;
  objectives: string[];
  summary: string;
  plateImage?: string;
  plateCaption?: string;
  sections: LectureSection[];
}

export interface DiagramHotspot {
  id: string;
  number: number;
  label: string;
  x: number; // SVG percentage 0-100
  y: number; // SVG percentage 0-100
  role: string;
  structureDetail: string;
}

export interface BiologyDiagram {
  id: string;
  title: string;
  discipline: Discipline;
  subtitle: string;
  svgType:
    | 'eukaryotic-cell'
    | 'virion-comparison'
    | 'chloroplast'
    | 'nephron'
    | 'dna-replication'
    | 'motor-neuron';
  plateImage?: string;
  description: string;
  hotspots: DiagramHotspot[];
}

export interface QuizQuestion {
  id: string;
  deckId: string;
  discipline: Discipline;
  prompt: string;
  options: string[];
  correctIndex: number;
  rationale: string;
}

export interface QuizDeck {
  id: string;
  title: string;
  discipline: Discipline | 'Comprehensive';
  description: string;
  estimatedMinutes: number;
}

export interface QuizAttemptRecord {
  id: string;
  deckId: string;
  deckTitle: string;
  discipline: string;
  score: number;
  total: number;
  percentage: number;
  completedAt: string;
}

export type BookmarkCategory = 'dictionary' | 'virus' | 'lecture' | 'diagram';

export interface BookmarkItem {
  id: string;
  category: BookmarkCategory;
  title: string;
  subtitle: string;
  savedAt: string;
}

export interface StudyProgress {
  studiedTermIds: string[];
  completedLectureIds: string[];
  inspectedVirusIds: string[];
  exploredDiagramIds: string[];
  quizAttempts: QuizAttemptRecord[];
  masteredFlashcardIds: string[];
  lastStudyDate: string;
}

export type AppTab =
  | 'atlas'
  | 'dictionary'
  | 'viruses'
  | 'diagrams'
  | 'lectures'
  | 'quizzes'
  | 'progress'
  | 'bio-expert';

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
}
