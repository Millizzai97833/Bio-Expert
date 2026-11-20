import { DictionaryTerm } from '../types/biology';

export const DICTIONARY_TERMS: DictionaryTerm[] = [
  {
    id: 'allosteric-regulation',
    term: 'Allosteric Regulation',
    pronunciation: 'al-uh-STER-ik reg-yuh-LAY-shun',
    etymology: 'Greek allos (other) + stereos (solid/shape)',
    discipline: 'Biochemistry',
    definition:
      'Modulation of an enzyme or regulatory protein activity through the non-covalent binding of an effector molecule at a site topographically distinct from the catalytic active site.',
    mechanism:
      'Binding of an allosteric activator or inhibitor induces a conformational transition between the low-affinity T (tense) state and high-affinity R (relaxed) state, altering substrate affinity (K0.5) or catalytic turnover (Vmax) and generating sigmoidal saturation kinetics.',
    significance:
      'Governs rate-limiting metabolic checkpoints such as phosphofructokinase-1 in glycolysis and hemoglobin oxygen cooperativity.',
    relatedTerms: ['Enzyme Kinetics', 'Chemiosmosis', 'Homeostasis'],
  },
  {
    id: 'apoptosis',
    term: 'Apoptosis',
    pronunciation: 'ap-op-TOH-sis',
    etymology: 'Greek apo (away from) + ptosis (falling)',
    discipline: 'Cell Biology',
    definition:
      'Genetically encoded, ATP-dependent programmed cell death executed without rupturing the plasma membrane or provoking an acute inflammatory cascade.',
    mechanism:
      'Triggered via the intrinsic mitochondrial pathway (cytochrome c release, Apaf-1 apoptosome assembly, caspase-9 activation) or the extrinsic death-receptor pathway (Fas/TNF-alpha, caspase-8). Executioner caspases-3 and -7 cleave nuclear lamins and activate CAD endonuclease, yielding oligonucleosomal DNA laddering and membrane blebbing.',
    significance:
      'Essential for embryonic digit morphogenesis, elimination of autoreactive lymphocytes, and suppression of neoplastic transformation.',
    relatedTerms: ['Autophagy', 'Mitochondrion', 'Cytotoxic T Lymphocyte'],
    diagramId: 'eukaryotic-cell',
  },
  {
    id: 'autophagy',
    term: 'Autophagy',
    pronunciation: 'aw-TOF-uh-jee',
    etymology: 'Greek auto (self) + phagein (to eat)',
    discipline: 'Cell Biology',
    definition:
      'A conserved catabolic lysosome-dependent degradation pathway wherein eukaryotic cells sequester damaged organelles, misfolded protein aggregates, or intracellular pathogens for macromolecular recycling.',
    mechanism:
      'Under nutrient deprivation (mTORC1 inhibition and AMPK activation), the ULK1 complex initiates phagophore nucleation involving Beclin-1 and LC3-II lipidation, forming a double-membraned autophagosome that fuses with acidic lysosomes.',
    significance:
      'Preserves bioenergetic homeostasis during starvation and restricts intracellular bacterial and viral replication (xenophagy).',
    relatedTerms: ['Apoptosis', 'Lysosome', 'Endoplasmic Reticulum'],
    diagramId: 'eukaryotic-cell',
  },
  {
    id: 'bacteriophage',
    term: 'Bacteriophage',
    pronunciation: 'bak-TEER-ee-oh-fayj',
    etymology: 'Greek bakterion (small rod) + phagein (to devour)',
    discipline: 'Virology',
    definition:
      'An obligate intracellular viral parasite that specifically infects and replicates within prokaryotic bacterial or archaeal hosts.',
    mechanism:
      'Complex tailed phages (Caudoviricetes) adsorb via receptor-binding tail fibers to bacterial lipopolysaccharides or outer-membrane porins, contract their tail sheath, and inject genomic DNA across the peptidoglycan wall. Replication proceeds via either lytic virion assembly or lysogenic prophage integration.',
    significance:
      'Foundational model systems for establishing DNA as hereditary material, elucidating genetic code triplets, and advancing phage therapy against multidrug-resistant bacteria.',
    relatedTerms: ['Capsid', 'Lysogeny', 'Horizontal Gene Transfer'],
    diagramId: 'virion-comparison',
  },
  {
    id: 'baltimore-classification',
    term: 'Baltimore Classification',
    pronunciation: 'BAWL-tih-mor klas-uh-fih-KAY-shun',
    etymology: 'Named after virologist David Baltimore (1971)',
    discipline: 'Virology',
    definition:
      'A mechanistic viral taxonomy grouping all viruses into seven classes based on nucleic acid chemistry (DNA vs. RNA), strandedness, sense polarity, and obligatory pathway to mRNA synthesis.',
    mechanism:
      'Classifies genomes into Group I (dsDNA), II (ssDNA), III (dsRNA), IV ((+)ssRNA), V ((-)ssRNA), VI (ssRNA-RT), and VII (dsDNA-RT), emphasizing that all viral genomes must ultimately generate positive-sense mRNA readable by host 80S or 70S ribosomes.',
    significance:
      'Predicts viral polymerase requirements (such as viral RNA-dependent RNA polymerase or reverse transcriptase) and informs rational antiviral drug targeting.',
    relatedTerms: ['Reverse Transcriptase', 'Capsid', 'Ribosome'],
    diagramId: 'virion-comparison',
  },
  {
    id: 'calvin-cycle',
    term: 'Calvin-Benson Cycle',
    pronunciation: 'KAL-vin BEN-sun SY-kul',
    etymology: 'Named after Melvin Calvin and Andrew Benson',
    discipline: 'Botany',
    definition:
      'The light-independent carbon fixation pathway occurring within the chloroplast stroma that reduces inorganic atmospheric CO2 into triose phosphates.',
    mechanism:
      'Comprises three phases: carboxylation of ribulose-1,5-bisphosphate (RuBP) catalyzed by RuBisCO, ATP/NADPH-driven reduction of 3-phosphoglycerate to glyceraldehyde-3-phosphate (G3P), and regeneration of RuBP.',
    significance:
      'Primary biosynthetic entry point for organic carbon into the terrestrial and marine biosphere.',
    relatedTerms: ['Chloroplast', 'Photosystem II', 'RuBisCO'],
    diagramId: 'chloroplast',
  },
  {
    id: 'capsid',
    term: 'Capsid',
    pronunciation: 'KAP-sid',
    etymology: 'Latin capsa (box or case)',
    discipline: 'Virology',
    definition:
      'The protective oligomeric protein shell enclosing the viral nucleic acid genome, assembled from repeating structural subunits termed capsomeres.',
    mechanism:
      'Self-assembles into thermodynamically stable icosahedral, helical, or complex morphologies, shielding fragile RNA/DNA from host nucleases, UV radiation, and shear stress while mediating host-receptor engagement in non-enveloped virions.',
    significance:
      'Key antigenic determinant recognized by neutralizing host antibodies and primary target for capsid-assembly inhibitor antivirals.',
    relatedTerms: ['Virion', 'Bacteriophage', 'Baltimore Classification'],
    diagramId: 'virion-comparison',
  },
  {
    id: 'chemiosmosis',
    term: 'Chemiosmosis',
    pronunciation: 'kem-ee-oz-MOH-sis',
    etymology: 'Greek chemeia (chemistry) + osmos (thrust/push)',
    discipline: 'Biochemistry',
    definition:
      'Coupling of transmembrane proton electrochemical potential (proton-motive force) across a semipermeable lipid bilayer to the endergonic phosphorylation of ADP to ATP.',
    mechanism:
      'Electron transport chains pump H+ ions across the inner mitochondrial membrane or thylakoid membrane, establishing both a pH gradient and membrane potential. Protons flow down their electrochemical gradient through the F0F1-ATP synthase rotor, driving conformational catalysis of ATP.',
    significance:
      'Formulated by Peter Mitchell; accounts for the vast majority of aerobic ATP yield in eukaryotes and photophosphorylation in plants.',
    relatedTerms: ['Mitochondrion', 'Chloroplast', 'Oxidative Phosphorylation'],
    diagramId: 'eukaryotic-cell',
  },
  {
    id: 'chloroplast',
    term: 'Chloroplast',
    pronunciation: 'KLOR-uh-plast',
    etymology: 'Greek chloros (pale green) + plastos (formed)',
    discipline: 'Botany',
    definition:
      'A double-membraned endosymbiotic plastid in plants and eukaryotic algae specialized for oxygenic photosynthesis.',
    mechanism:
      'Houses an internal thylakoid membrane network stacked into grana containing chlorophyll-protein photosystems for light harvesting, surrounded by the enzyme-rich stroma where the Calvin-Benson cycle operates. Retains circular 70S-ribosome-expressing plastid DNA.',
    significance:
      'Converts solar electromagnetic energy into chemical bond energy and generates atmospheric molecular oxygen.',
    relatedTerms: ['Calvin-Benson Cycle', 'Chemiosmosis', 'Endosymbiotic Theory'],
    diagramId: 'chloroplast',
  },
  {
    id: 'crispr-cas9',
    term: 'CRISPR-Cas9',
    pronunciation: 'KRIS-pur kas-NYN',
    etymology: 'Clustered Regularly Interspaced Short Palindromic Repeats',
    discipline: 'Molecular Genetics',
    definition:
      'An adaptive prokaryotic nucleic-acid immunity locus repurposed into a programmable RNA-guided endonuclease system for targeted genome editing.',
    mechanism:
      'A chimeric single-guide RNA (sgRNA) directs the Cas9 endonuclease to a complementary 20-nucleotide genomic target adjacent to a protospacer adjacent motif (PAM, 5\'-NGG-3\'), inducing a blunt double-strand break repaired by NHEJ or homology-directed repair.',
    significance:
      'Revolutionized functional genomics, agricultural trait engineering, and ex vivo gene therapy for monogenic hematologic disorders.',
    relatedTerms: ['DNA Polymerase', 'Transcription', 'Horizontal Gene Transfer'],
    diagramId: 'dna-replication',
  },
  {
    id: 'cytokinesis',
    term: 'Cytokinesis',
    pronunciation: 'sy-toh-kih-NEE-sis',
    etymology: 'Greek kytos (cell) + kinesis (movement)',
    discipline: 'Cell Biology',
    definition:
      'Physical partitioning of the parent cell cytoplasm and organelles into two daughter cells following karyokinesis (mitotic or meiotic nuclear division).',
    mechanism:
      'In animal cells, an actomyosin contractile ring anchored at the equatorial cortex constricts inward to form a cleavage furrow; in vascular plants, Golgi-derived vesicles coalesce along the phragmoplast to synthesize a rigid cell plate.',
    significance:
      'Failure of cytokinesis yields multinucleated polyploid cells linked to chromosomal instability and oncogenesis.',
    relatedTerms: ['Mitosis', 'Apoptosis', 'Golgi Apparatus'],
    diagramId: 'eukaryotic-cell',
  },
  {
    id: 'cytotoxic-t-lymphocyte',
    term: 'Cytotoxic T Lymphocyte',
    pronunciation: 'sy-toh-TOK-sik tee LIM-foh-syt',
    etymology: 'Greek kytos (cell) + toxikon (poison)',
    discipline: 'Immunology',
    definition:
      'A CD8+ effector adaptive immune lymphocyte specialized in recognizing and inducing apoptosis in virus-infected or neoplastically transformed host cells.',
    mechanism:
      'T-cell receptors engage endogenous antigenic peptides presented on Major Histocompatibility Complex Class I (MHC-I) molecules. Upon immunological synapse formation, the CTL exocytoses perforin (pore-forming protein) and granzymes, activating target-cell caspase cascades.',
    significance:
      'Primary cellular effector responsible for viral clearance during acute and chronic intracellular infections.',
    relatedTerms: ['Apoptosis', 'MHC Class I', 'Innate Immunity'],
  },
  {
    id: 'dna-polymerase',
    term: 'DNA Polymerase',
    pronunciation: 'DEE-en-AY pol-IM-er-ays',
    etymology: 'Polymer + -ase (enzyme suffix)',
    discipline: 'Molecular Genetics',
    definition:
      'A template-dependent nucleotidyltransferase enzyme that catalyzes phosphodiester bond formation during semiconservative DNA replication.',
    mechanism:
      'Requires a free 3\'-hydroxyl primer terminus and proceeds strictly in the 5\' to 3\' direction using deoxyribonucleoside triphosphates (dNTPs). Replicative polymerases possess intrinsic 3\'-to-5\' exonuclease proofreading activity to achieve error rates below 10^-9 per base pair.',
    significance:
      'Ensures high-fidelity transmission of genomic information across cellular generations and serves as the enzymatic basis of PCR.',
    relatedTerms: ['Okazaki Fragments', 'Helicase', 'CRISPR-Cas9'],
    diagramId: 'dna-replication',
  },
  {
    id: 'endoplasmic-reticulum',
    term: 'Endoplasmic Reticulum',
    pronunciation: 'en-doh-PLAZ-mik reh-TIK-yoo-lum',
    etymology: 'Greek endon (within) + plasma + Latin reticulum (little net)',
    discipline: 'Cell Biology',
    definition:
      'An interconnected endomembrane network of cisternae and tubules continuous with the outer nuclear envelope, partitioned into ribosome-studded rough ER and tubular smooth ER.',
    mechanism:
      'Rough ER mediates co-translational translocation, N-linked glycosylation, and disulfide folding of secretory and integral membrane proteins; smooth ER executes phospholipid/steroid biosynthesis, xenobiotic detoxification via cytochrome P450, and Ca2+ sequestration.',
    significance:
      'Perturbation of ER folding homeostasis triggers the Unfolded Protein Response (UPR), implicated in metabolic and neurodegenerative pathology.',
    relatedTerms: ['Golgi Apparatus', 'Ribosome', 'Autophagy'],
    diagramId: 'eukaryotic-cell',
  },
  {
    id: 'endosymbiotic-theory',
    term: 'Endosymbiotic Theory',
    pronunciation: 'en-doh-sim-bee-OT-ik THEER-ee',
    etymology: 'Greek endon (within) + symbiosis (living together)',
    discipline: 'Cell Biology',
    definition:
      'The evolutionary paradigm explaining the origin of eukaryotic mitochondria and plastids from ancestral free-living alpha-proteobacteria and cyanobacteria engulfed by an archaeal host.',
    mechanism:
      'Engulfed prokaryotes escaped phagolysosomal digestion, establishing mutualistic metabolic exchange (ATP and photosynthate for host protection). Over evolutionary time, endosymbiont genes underwent horizontal transfer to the host nucleus.',
    significance:
      'Substantiated by double organelle membranes, circular genomes lacking histones, 70S ribosomes, and binary fission division.',
    relatedTerms: ['Mitochondrion', 'Chloroplast', 'Horizontal Gene Transfer'],
    diagramId: 'eukaryotic-cell',
  },
  {
    id: 'enzyme-kinetics',
    term: 'Enzyme Kinetics (Michaelis-Menten)',
    pronunciation: 'EN-zym kih-NET-iks',
    etymology: 'Leonor Michaelis & Maud Menten (1913)',
    discipline: 'Biochemistry',
    definition:
      'Quantitative characterization of enzymatic reaction velocities as a function of substrate concentration, inhibitor presence, pH, and thermal energy.',
    mechanism:
      'Described by v = (Vmax [S]) / (Km + [S]), where Vmax reflects maximal velocity at enzyme saturation and Km (Michaelis constant) equals the substrate concentration yielding half-maximal velocity, serving as an inverse index of apparent substrate affinity.',
    significance:
      'Provides the mathematical framework for distinguishing competitive, non-competitive, and uncompetitive pharmacological inhibitors.',
    relatedTerms: ['Allosteric Regulation', 'Chemiosmosis'],
  },
  {
    id: 'epigenetics',
    term: 'Epigenetics',
    pronunciation: 'ep-ih-juh-NET-iks',
    etymology: 'Greek epi (over/above) + genesis (origin)',
    discipline: 'Molecular Genetics',
    definition:
      'Heritable modifications in chromatin architecture and gene expression potential that occur without altering the underlying nucleotide sequence of DNA.',
    mechanism:
      'Operates via DNA methylation at CpG islands (catalyzed by DNMTs), post-translational histone tail modifications (acetylation by HATs, deacetylation by HDACs, methylation), and non-coding RNA-mediated transcriptional silencing.',
    significance:
      'Enables cellular differentiation from a single diploid zygote and accounts for environmental modulation of disease susceptibility.',
    relatedTerms: ['Transcription', 'Nucleus', 'CRISPR-Cas9'],
    diagramId: 'eukaryotic-cell',
  },
  {
    id: 'glomerular-filtration',
    term: 'Glomerular Filtration',
    pronunciation: 'gloh-MER-yoo-ler fil-TRAY-shun',
    etymology: 'Latin glomus (ball of yarn)',
    discipline: 'Human Physiology',
    definition:
      'Passive, hydrostatic-pressure-driven ultrafiltration of plasma across the three-layered renal glomerular filtration barrier into Bowman\'s space.',
    mechanism:
      'Governed by Starling forces: glomerular capillary hydrostatic pressure (~55 mmHg) overcomes Bowman\'s capsular hydrostatic pressure and plasma colloid osmotic pressure, driving water and low-molecular-weight solutes through fenestrated endothelium, negatively charged basement membrane, and podocyte slit diaphragms.',
    significance:
      'Clinical Glomerular Filtration Rate (GFR, ~120 mL/min in healthy adults) serves as the gold-standard metric of renal excretory function.',
    relatedTerms: ['Nephron', 'Homeostasis', 'Osmoregulation'],
    diagramId: 'nephron',
  },
  {
    id: 'golgi-apparatus',
    term: 'Golgi Apparatus',
    pronunciation: 'GOL-jee ap-uh-RAY-tus',
    etymology: 'Named after Italian cytologist Camillo Golgi (1898)',
    discipline: 'Cell Biology',
    definition:
      'A polarized stack of membrane-bound cisternae responsible for post-translational modification, oligosaccharide trimming, and vesicular sorting of secretory and membrane cargo.',
    mechanism:
      'Receives COPII-coated transport vesicles from the ER at the cis-Golgi network, processes glycoproteins sequentially through medial cisternae, and packages sorted cargo at the trans-Golgi network via clathrin or constitutive secretory vesicles.',
    significance:
      'Tags lysosomal hydrolases with mannose-6-phosphate; defects in this tagging cause I-cell lysosomal storage disease.',
    relatedTerms: ['Endoplasmic Reticulum', 'Lysosome', 'Cytokinesis'],
    diagramId: 'eukaryotic-cell',
  },
  {
    id: 'helicase',
    term: 'DNA Helicase',
    pronunciation: 'HEL-ih-kays',
    etymology: 'Greek helix (spiral) + -ase',
    discipline: 'Molecular Genetics',
    definition:
      'An ATP-hydrolyzing motor enzyme that unwinds double-stranded nucleic acid helices into single-stranded templates ahead of replication or transcription complexes.',
    mechanism:
      'Forms a hexameric ring encircling one DNA strand and translocates unidirectionally, disrupting Watson-Crick hydrogen bonds between complementary base pairs while topoisomerases relieve upstream supercoiling torsion.',
    significance:
      'Essential for initiating the replication fork; helicase mutations underlie genomic instability syndromes such as Bloom and Werner syndromes.',
    relatedTerms: ['DNA Polymerase', 'Okazaki Fragments', 'Transcription'],
    diagramId: 'dna-replication',
  },
  {
    id: 'homeostasis',
    term: 'Homeostasis',
    pronunciation: 'hoh-mee-oh-STAY-sis',
    etymology: 'Greek homoios (similar) + stasis (standing still)',
    discipline: 'Human Physiology',
    definition:
      'Dynamic self-regulating maintenance of physiological internal milieu variables (pH, osmolarity, core temperature, glycemia) within narrow viable limits despite external perturbations.',
    mechanism:
      'Operates primarily through negative feedback loops comprising sensory receptors, neural or endocrine integrating centers (e.g., hypothalamus), and autonomic/humoral effectors that oppose deviation from a homeostatic set point.',
    significance:
      'Conceptualized by Walter Cannon following Claude Bernard\'s milieu intérieur; breakdown of homeostatic compensation defines systemic pathology.',
    relatedTerms: ['Glomerular Filtration', 'Allosteric Regulation', 'Action Potential'],
    diagramId: 'nephron',
  },
  {
    id: 'horizontal-gene-transfer',
    term: 'Horizontal Gene Transfer',
    pronunciation: 'hor-ih-ZON-tul jeen TRANS-fer',
    etymology: 'Lateral transfer across non-lineal organisms',
    discipline: 'Microbiology',
    definition:
      'Non-reproductive acquisition and stable integration of exogenous genetic material between organisms outside parent-to-offspring vertical inheritance.',
    mechanism:
      'Occurs via three principal prokaryotic mechanisms: transformation (uptake of naked environmental DNA), transduction (bacteriophage-mediated packaging and transfer), and conjugation (pilus-mediated plasmid transfer).',
    significance:
      'Primary driver of rapid dissemination of antimicrobial resistance determinants and virulence islands across bacterial pathogens.',
    relatedTerms: ['Bacteriophage', 'Peptidoglycan', 'CRISPR-Cas9'],
  },
  {
    id: 'innate-immunity',
    term: 'Innate Immunity',
    pronunciation: 'ih-NAYT ih-MYOO-nih-tee',
    etymology: 'Latin innatus (inborn)',
    discipline: 'Immunology',
    definition:
      'Rapid, germline-encoded host defense comprising physical epithelial barriers, complement cascades, phagocytic leukocytes, and pattern-recognition signaling without antigen-specific clonal memory.',
    mechanism:
      'Pattern recognition receptors (PRRs) such as Toll-like receptors (TLRs) detect conserved pathogen-associated molecular patterns (PAMPs) including LPS or viral dsRNA, triggering NF-kappaB activation, type I interferon secretion, and neutrophil recruitment.',
    significance:
      'Contains early pathogen proliferation and provides essential co-stimulatory signals to prime adaptive T and B lymphocyte responses.',
    relatedTerms: ['Cytotoxic T Lymphocyte', 'MHC Class I', 'Interferon'],
  },
  {
    id: 'lysogeny',
    term: 'Lysogenic Cycle',
    pronunciation: 'ly-soh-JEN-ik SY-kul',
    etymology: 'Greek lysis (loosening) + genesis (production)',
    discipline: 'Virology',
    definition:
      'A temperate bacteriophage replication strategy in which viral DNA integrates stably into the host bacterial chromosome as a silent prophage replicated passively alongside host division.',
    mechanism:
      'Phage integrase mediates site-specific recombination while a phage repressor (e.g., lambda cI) silences lytic promoters. DNA damage or SOS stress triggers RecA-mediated repressor cleavage and excision into the lytic cycle.',
    significance:
      'Prophages frequently confer lysogenic conversion phenotypes, encoding exotoxins such as diphtheria, cholera, and Shiga toxins.',
    relatedTerms: ['Bacteriophage', 'Horizontal Gene Transfer', 'Capsid'],
    diagramId: 'virion-comparison',
  },
  {
    id: 'lysosome',
    term: 'Lysosome',
    pronunciation: 'LY-soh-sohm',
    etymology: 'Greek lysis (dissolution) + soma (body)',
    discipline: 'Cell Biology',
    definition:
      'An acidic, single-membrane eukaryotic organelle (luminal pH 4.5–5.0) containing over 50 hydrolytic enzymes for intracellular macromolecular digestion.',
    mechanism:
      'Vacuolar-type H+-ATPase proton pumps acidify the lumen to activate acid hydrolases (proteases, nucleases, lipases, glycosidases), while heavily glycosylated LAMP membrane proteins protect the organelle boundary from autodigestion.',
    significance:
      'Terminal degradative compartment for endocytosis, phagocytosis, and autophagy.',
    relatedTerms: ['Autophagy', 'Golgi Apparatus', 'Endoplasmic Reticulum'],
    diagramId: 'eukaryotic-cell',
  },
  {
    id: 'mhc-class-i',
    term: 'MHC Class I Complex',
    pronunciation: 'em-aych-see klas wun',
    etymology: 'Major Histocompatibility Complex',
    discipline: 'Immunology',
    definition:
      'A polymorphic heterodimeric cell-surface glycoprotein expressed on virtually all nucleated somatic cells that presents cytosolic proteasome-derived peptides to CD8+ cytotoxic T lymphocytes.',
    mechanism:
      'Endogenous or viral proteins degraded by the immunoproteasome are translocated into the ER lumen via TAP transporters, loaded onto MHC-I alpha-chain/beta-2-microglobulin complexes, and exported to the plasma membrane.',
    significance:
      'Enables immune surveillance of intracellular viral replication; many herpesviruses and adenoviruses encode proteins that downregulate MHC-I.',
    relatedTerms: ['Cytotoxic T Lymphocyte', 'Innate Immunity', 'Endoplasmic Reticulum'],
  },
  {
    id: 'mitochondrion',
    term: 'Mitochondrion',
    pronunciation: 'my-toh-KON-dree-on',
    etymology: 'Greek mitos (thread) + chondrion (granule)',
    discipline: 'Cell Biology',
    definition:
      'A double-membraned semiautonomous eukaryotic organelle responsible for oxidative phosphorylation, the tricarboxylic acid cycle, beta-oxidation, and apoptotic regulation.',
    mechanism:
      'Smooth outer membrane porins permit small solute entry, while the deeply folded inner membrane (cristae) houses electron transport complexes I–IV and F0F1-ATP synthase surrounding the mitochondrial matrix.',
    significance:
      'Inherits circular mtDNA strictly maternally in mammals; mitochondrial dysfunction causes encephalomyopathies and contributes to cellular senescence.',
    relatedTerms: ['Chemiosmosis', 'Apoptosis', 'Endosymbiotic Theory'],
    diagramId: 'eukaryotic-cell',
  },
  {
    id: 'nephron',
    term: 'Nephron',
    pronunciation: 'NEF-ron',
    etymology: 'Greek nephros (kidney)',
    discipline: 'Human Physiology',
    definition:
      'The fundamental structural and functional filtration-reabsorption unit of the vertebrate kidney, numbering approximately one million per human kidney.',
    mechanism:
      'Integrates the renal corpuscle (glomerulus + Bowman\'s capsule) with the proximal convoluted tubule, countercurrent-multiplying Loop of Henle, distal convoluted tubule, and collecting duct to regulate fluid volume, electrolytes, and acid-base balance.',
    significance:
      'Orchestrates clearance of nitrogenous wastes (urea, creatinine) while reclaiming 99% of filtered water and essential solutes.',
    relatedTerms: ['Glomerular Filtration', 'Homeostasis'],
    diagramId: 'nephron',
  },
  {
    id: 'okazaki-fragments',
    term: 'Okazaki Fragments',
    pronunciation: 'oh-kuh-ZAH-kee FRAG-ments',
    etymology: 'Named after Reiji and Tsuneko Okazaki (1968)',
    discipline: 'Molecular Genetics',
    definition:
      'Short, discontinuously synthesized segments of nascent DNA produced along the lagging template strand during semiconservative replication.',
    mechanism:
      'Because DNA polymerases only elongate 5\' to 3\', lagging-strand synthesis proceeds away from the advancing replication fork. Primase lays down short RNA primers (later excised by RNase H / DNA Pol I) and DNA ligase seals adjacent fragments via phosphodiester linkage.',
    significance:
      'Resolves the antiparallel polarity paradox of double-helical DNA replication.',
    relatedTerms: ['DNA Polymerase', 'Helicase', 'CRISPR-Cas9'],
    diagramId: 'dna-replication',
  },
  {
    id: 'peptidoglycan',
    term: 'Peptidoglycan (Murein)',
    pronunciation: 'pep-tih-doh-GLY-kan',
    etymology: 'Peptide + Greek glykys (sweet)',
    discipline: 'Microbiology',
    definition:
      'A cross-linked macromolecular meshwork polymer forming the rigid structural cell wall surrounding nearly all bacteria, conferring resistance against osmotic turgor lysis.',
    mechanism:
      'Composed of alternating beta-(1,4)-linked N-acetylglucosamine (NAG) and N-acetylmuramic acid (NAM) glycan chains cross-linked by short tetrapeptide bridges catalyzed by transpeptidases (penicillin-binding proteins).',
    significance:
      'Absent in eukaryotes and archaea, making peptidoglycan synthesis the primary selective target of beta-lactam and glycopeptide antibiotics.',
    relatedTerms: ['Horizontal Gene Transfer', 'Bacteriophage'],
  },
  {
    id: 'phloem-translocation',
    term: 'Phloem Translocation',
    pronunciation: 'FLOH-em tranz-loh-KAY-shun',
    etymology: 'Greek phloios (bark)',
    discipline: 'Botany',
    definition:
      'Bidirectional, metabolically driven bulk flow of photoassimilates (principally sucrose), amino acids, and signaling RNAs from photosynthetic source tissues to growth or storage sink tissues.',
    mechanism:
      'Described by the Münch pressure-flow hypothesis: active sucrose loading into sieve-tube elements lowers water potential, drawing osmotic water from adjacent xylem to generate positive hydrostatic turgor pressure that propels sap toward unloading sinks.',
    significance:
      'Distributes carbon energy throughout vascular plants; contrasted with unidirectional, tension-driven xylem transpiration.',
    relatedTerms: ['Xylem Cohesion-Tension', 'Chloroplast', 'Calvin-Benson Cycle'],
  },
  {
    id: 'reverse-transcriptase',
    term: 'Reverse Transcriptase',
    pronunciation: 'ree-VERS tran-SKRIP-tays',
    etymology: 'Reversal of the Central Dogma transcription vector',
    discipline: 'Virology',
    definition:
      'An RNA-dependent DNA polymerase employed by retroviruses (Group VI), hepadnaviruses (Group VII), and retrotransposons to synthesize complementary DNA (cDNA) from an RNA template.',
    mechanism:
      'Combines RNA-dependent DNA polymerase, RNase H (degrading the original RNA template in RNA-DNA hybrids), and DNA-dependent DNA polymerase activities. Lacks 3\'-to-5\' proofreading, generating high viral quasispecies mutation rates.',
    significance:
      'Primary pharmacological target of nucleoside and non-nucleoside reverse transcriptase inhibitors (NRTIs/NNRTIs) in HIV-1 therapy and indispensable reagent in RT-qPCR diagnostics.',
    relatedTerms: ['Baltimore Classification', 'Transcription', 'DNA Polymerase'],
    diagramId: 'virion-comparison',
  },
  {
    id: 'ribosome',
    term: 'Ribosome',
    pronunciation: 'RY-buh-sohm',
    etymology: 'Ribonucleic acid + Greek soma (body)',
    discipline: 'Molecular Genetics',
    definition:
      'A universal ribonucleoprotein macromolecular machine (70S in prokaryotes/organelles; 80S in eukaryotic cytosol) that translates mRNA codons into polypeptide chains.',
    mechanism:
      'Consists of a small subunit (decoding center matching mRNA codons to aminoacyl-tRNA anticodons) and a large subunit whose ribosomal RNA peptidyl transferase ribozyme catalyzes peptide bond formation across A, P, and E tRNA binding sites.',
    significance:
      'Structural divergence between bacterial 70S and eukaryotic 80S ribosomes underlies selective inhibition by macrolides, tetracyclines, and aminoglycosides.',
    relatedTerms: ['Transcription', 'Endoplasmic Reticulum', 'Endosymbiotic Theory'],
    diagramId: 'eukaryotic-cell',
  },
  {
    id: 'synaptic-transmission',
    term: 'Chemical Synaptic Transmission',
    pronunciation: 'sih-NAP-tik tranz-MISH-un',
    etymology: 'Greek synapsis (conjunction)',
    discipline: 'Human Physiology',
    definition:
      'Unidirectional intercellular signaling across a 20–40 nm synaptic cleft wherein presynaptic electrical depolarization triggers Ca2+-dependent exocytosis of neurotransmitters onto postsynaptic receptors.',
    mechanism:
      'Arrival of an action potential opens voltage-gated Ca2+ channels at the active zone; synaptotagmin and SNARE proteins fuse synaptic vesicles with the presynaptic membrane, releasing transmitters (e.g., acetylcholine, glutamate, GABA) that bind ionotropic or metabotropic receptors.',
    significance:
      'Basis of neural computation, synaptic plasticity (long-term potentiation), and neuropharmacological therapeutics.',
    relatedTerms: ['Homeostasis', 'Action Potential'],
    diagramId: 'motor-neuron',
  },
  {
    id: 'transcription',
    term: 'Transcription',
    pronunciation: 'tran-SKRIP-shun',
    etymology: 'Latin transcribere (to write across)',
    discipline: 'Molecular Genetics',
    definition:
      'Enzymatic synthesis of a complementary single-stranded RNA transcript from a double-stranded DNA template by DNA-dependent RNA polymerase.',
    mechanism:
      'Initiates when general transcription factors and RNA polymerase II assemble at core promoter motifs (e.g., TATA box), melts the DNA duplex into a transcription bubble, elongates 5\' to 3\' using ribonucleoside triphosphates, and undergoes 5\'-capping, splicing, and 3\'-polyadenylation in eukaryotes.',
    significance:
      'Primary control point of differential gene expression across tissues and developmental stages.',
    relatedTerms: ['Ribosome', 'Epigenetics', 'Reverse Transcriptase'],
    diagramId: 'dna-replication',
  },
  {
    id: 'xylem-cohesion-tension',
    term: 'Xylem Cohesion-Tension Mechanism',
    pronunciation: 'ZY-lum koh-HEE-zhun TEN-shun',
    etymology: 'Greek xylon (wood)',
    discipline: 'Botany',
    definition:
      'The biophysical mechanism propelling passive upward transport of water and dissolved mineral ions through dead lignified xylem tracheids and vessel elements against gravity.',
    mechanism:
      'Solar-driven transpiration from stomatal pores creates negative matric water potential in leaf mesophyll cell walls, pulling a continuous hydrogen-bonded water column upward via intermolecular cohesion and hydrophilic adhesion to xylem walls.',
    significance:
      'Explains water ascent to heights exceeding 100 meters in *Sequoia sempervirens* without metabolic ATP expenditure in xylem conduits.',
    relatedTerms: ['Phloem Translocation', 'Chloroplast'],
  },
];
