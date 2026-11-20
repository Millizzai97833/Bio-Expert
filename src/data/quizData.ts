import { QuizDeck, QuizQuestion } from '../types/biology';

export const QUIZ_DECKS: QuizDeck[] = [
  {
    id: 'deck-virology',
    title: 'Virology & Baltimore Taxonomy',
    discipline: 'Virology',
    description:
      'Replication polarity, viral polymerases, host receptor tropism, and bacteriophage morphogenesis.',
    estimatedMinutes: 6,
  },
  {
    id: 'deck-cell-bio',
    title: 'Cellular Ultrastructure & Bioenergetics',
    discipline: 'Cell Biology',
    description:
      'Endomembrane trafficking, chemiosmotic ATP synthesis, apoptosis, and organellar endosymbiosis.',
    estimatedMinutes: 6,
  },
  {
    id: 'deck-genetics',
    title: 'Molecular Genetics & Replication',
    discipline: 'Molecular Genetics',
    description:
      'Replication fork enzymology, Okazaki synthesis, CRISPR-Cas9, and epigenetic chromatin control.',
    estimatedMinutes: 5,
  },
  {
    id: 'deck-physiology',
    title: 'Human Physiology & Immunology',
    discipline: 'Human Physiology',
    description:
      'Glomerular Starling forces, saltatory conduction, MHC-I surveillance, and interferon signaling.',
    estimatedMinutes: 6,
  },
  {
    id: 'deck-comprehensive',
    title: 'Comprehensive University Biology Exam',
    discipline: 'Comprehensive',
    description:
      'Cumulative active-recall assessment integrating biochemistry, botany, virology, and physiology.',
    estimatedMinutes: 10,
  },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // Virology Deck
  {
    id: 'q-vir-1',
    deckId: 'deck-virology',
    discipline: 'Virology',
    prompt:
      'Why is purified naked genomic RNA from a Baltimore Group V ((-)ssRNA) virus such as Rabies Lyssavirus non-infectious when transfected alone into a permissive mammalian cell?',
    options: [
      'Host eukaryotic cells lack an RNA-dependent RNA polymerase to transcribe negative-sense RNA into (+)mRNA.',
      'Negative-sense RNA cannot pass through the nuclear pore complex without a lipid envelope.',
      'Host 80S ribosomes preferentially degrade uracil-rich negative-sense RNA templates.',
      'Group V genomes require reverse transcriptase to integrate into host chromatin prior to translation.',
    ],
    correctIndex: 0,
    rationale:
      'Host cells possess DNA-dependent RNA polymerases, not RNA-dependent RNA polymerases (RdRp). Therefore, Group V ((-)ssRNA) virions must co-package their own viral RdRp inside the nucleocapsid to initiate primary transcription upon uncoating.',
  },
  {
    id: 'q-vir-2',
    deckId: 'deck-virology',
    discipline: 'Virology',
    prompt:
      'Which viral pathogen uniquely replicates its negative-sense segmented RNA genome inside the host cell nucleus using a "cap-snatching" mechanism?',
    options: [
      'SARS-CoV-2',
      'Zaire Ebolavirus',
      'Influenza A Virus',
      'Tobacco Mosaic Virus',
    ],
    correctIndex: 2,
    rationale:
      'Influenza A (Orthomyxoviridae) replicates inside the host nucleus so its PB2/PA polymerase complex can cleave 5\'-m7G caps from nascent host pre-mRNAs to prime viral mRNA transcription.',
  },
  {
    id: 'q-vir-3',
    deckId: 'deck-virology',
    discipline: 'Virology',
    prompt:
      'What structural protein feature distinguishes SARS-CoV-2 among most positive-sense RNA viruses and allows stable maintenance of its ~29.9 kb genome?',
    options: [
      'A double-stranded DNA intermediate episome',
      'An nsp14 3\'-to-5\' exoribonuclease proofreading domain',
      'Host histone octamer nucleosome packaging',
      'A covalently linked 5\'-terminal protein primer',
    ],
    correctIndex: 1,
    rationale:
      'Coronaviruses encode nsp14-ExoN, a 3\'-to-5\' proofreading exoribonuclease that excises misincorporated nucleotides, preventing lethal error catastrophe in their unusually large RNA genome.',
  },
  {
    id: 'q-vir-4',
    deckId: 'deck-virology',
    discipline: 'Virology',
    prompt:
      'In Hepatitis B Virus (Group VII, dsDNA-RT), which viral nucleic acid intermediate serves as the persistent nuclear template for viral transcription in hepatocytes?',
    options: [
      'Single-stranded negative-sense cDNA',
      'Segmented double-stranded RNA',
      'Covalently closed circular DNA (cccDNA)',
      'Proviral DNA integrated exclusively via phage integrase',
    ],
    correctIndex: 2,
    rationale:
      'Upon hepatocyte entry via NTCP, HBV relaxed circular DNA (rcDNA) is repaired in the nucleus into chromatinized cccDNA, which persists as an episomal minichromosome.',
  },
  {
    id: 'q-vir-5',
    deckId: 'deck-virology',
    discipline: 'Virology',
    prompt:
      'Which intracellular endosomal host receptor is strictly required for Zaire Ebolavirus membrane fusion following cathepsin cleavage of the viral glycoprotein?',
    options: [
      'ACE2 metalloprotease',
      'Niemann-Pick C1 (NPC1) cholesterol transporter',
      'CCR5 chemokine co-receptor',
      'Coxsackievirus and Adenovirus Receptor (CAR)',
    ],
    correctIndex: 1,
    rationale:
      'After macropinocytosis, host endosomal cathepsins B and L cleave the Ebola GP1 cap, exposing the receptor-binding domain that engages the endosomal membrane protein NPC1 to trigger GP2-mediated fusion.',
  },
  {
    id: 'q-vir-6',
    deckId: 'deck-virology',
    discipline: 'Virology',
    prompt:
      'Which statement accurately characterizes Variola virus (Poxviridae) compared to almost all other eukaryotic DNA viruses?',
    options: [
      'It replicates exclusively in the host cytoplasm by encoding its own transcription and capping enzymes.',
      'It lacks an envelope and relies strictly on host nuclear DNA polymerase delta.',
      'It integrates into trigeminal sensory ganglia to establish lifelong latency.',
      'It possesses a single-stranded circular RNA genome.',
    ],
    correctIndex: 0,
    rationale:
      'Poxviruses are exceptionally large (~186 kb) dsDNA viruses that replicate entirely within cytoplasmic viral factories (Guarnieri bodies) because their genome encodes complete RNA polymerase, capping, and DNA replication machinery.',
  },

  // Cell Biology Deck
  {
    id: 'q-cell-1',
    deckId: 'deck-cell-bio',
    discipline: 'Cell Biology',
    prompt:
      'Which post-translational sorting signal added in the cis-Golgi directs newly synthesized soluble acid hydrolases to the lysosome?',
    options: [
      'KDEL C-terminal tetrapeptide',
      'Mannose-6-phosphate (M6P) tag',
      'Polyubiquitin K48 chain',
      'N-terminal mitochondrial targeting presequence',
    ],
    correctIndex: 1,
    rationale:
      'GlcNAc-1-phosphotransferase in the cis-Golgi phosphorylates mannose residues on lysosomal hydrolases to generate Mannose-6-phosphate, which binds M6P receptors in the trans-Golgi network for clathrin-mediated delivery to late endosomes.',
  },
  {
    id: 'q-cell-2',
    deckId: 'deck-cell-bio',
    discipline: 'Cell Biology',
    prompt:
      'In the intrinsic mitochondrial pathway of apoptosis, release of cytochrome c into the cytosol directly promotes assembly of which multiprotein complex?',
    options: [
      'The 26S proteasome',
      'The Apaf-1 apoptosome activating pro-caspase-9',
      'The ULK1-Beclin-1 autophagosome',
      'The COPII vesicle coat complex',
    ],
    correctIndex: 1,
    rationale:
      'Cytosolic cytochrome c binds Apaf-1 in the presence of dATP, inducing heptameric apoptosome assembly that recruits and activates initiator caspase-9, subsequently cleaving executioner caspases-3 and -7.',
  },
  {
    id: 'q-cell-3',
    deckId: 'deck-cell-bio',
    discipline: 'Biochemistry',
    prompt:
      'If a chemical protonophore such as 2,4-dinitrophenol (2,4-DNP) renders the inner mitochondrial membrane freely permeable to protons, what immediate metabolic change occurs?',
    options: [
      'Oxygen consumption ceases completely while ATP synthesis accelerates.',
      'Both electron transport and oxygen consumption increase while ATP synthesis via F0F1-ATP synthase collapses, releasing energy as heat.',
      'Glycolysis halts due to accumulation of intramitochondrial ATP.',
      'The proton-motive force doubles in magnitude.',
    ],
    correctIndex: 1,
    rationale:
      'Uncouplers collapse the proton electrochemical gradient (delta-pH and delta-psi). Without back-pressure from the proton gradient, Complexes I–IV oxidize NADH and consume O2 at maximal rate, yet F0F1-ATP synthase cannot phosphorylate ADP.',
  },
  {
    id: 'q-cell-4',
    deckId: 'deck-cell-bio',
    discipline: 'Cell Biology',
    prompt:
      'Which set of biochemical features provides direct evidence for the Endosymbiotic Theory of mitochondria and chloroplasts?',
    options: [
      'Linear histone-bound chromosomes, 80S ribosomes, and single phospholipid membranes',
      'Circular DNA lacking nucleosomal histones, 70S ribosomes, and double bounding membranes',
      'Peptidoglycan cell walls present in all mammalian mitochondria',
      'Absence of autonomous protein translation inside the organelle matrix',
    ],
    correctIndex: 1,
    rationale:
      'Mitochondria and plastids retain circular genomes without histones, bacteria-like 70S ribosomes sensitive to chloramphenicol, cardiolipin-rich inner membranes, and binary fission division.',
  },
  {
    id: 'q-cell-5',
    deckId: 'deck-cell-bio',
    discipline: 'Botany',
    prompt:
      'According to the Münch pressure-flow hypothesis, what directly drives bulk translocation of sucrose-rich sap from source leaves to sink roots in phloem sieve tubes?',
    options: [
      'Negative transpirational pull generated at leaf stomata',
      'Active sucrose loading followed by osmotic water influx from xylem, creating positive hydrostatic turgor pressure',
      'Capillary adhesion along dead lignified tracheid walls',
      'Peristaltic contraction of companion cell actin filaments',
    ],
    correctIndex: 1,
    rationale:
      'Active loading of sucrose into sieve-tube elements lowers solute potential, drawing water osmotically from adjacent xylem and generating high positive turgor pressure at the source relative to unloading sinks.',
  },
  {
    id: 'q-cell-6',
    deckId: 'deck-cell-bio',
    discipline: 'Cell Biology',
    prompt:
      'How does cytokinesis in higher vascular plants fundamentally differ from cytokinesis in animal somatic cells?',
    options: [
      'Plant cells utilize an actomyosin contractile cleavage furrow from the cortex inward.',
      'Plant cells fuse Golgi-derived vesicles along a microtubule phragmoplast outward to construct a cell plate.',
      'Plant cells undergo nuclear division without ever partitioning cytoplasm.',
      'Animal cells synthesize a callose-pectin middle lamella prior to telophase.',
    ],
    correctIndex: 1,
    rationale:
      'Because plant cells are encased in rigid cellulosic walls, a microtubule-guided phragmoplast directs Golgi-derived pectin/hemicellulose vesicles to the cell equator to assemble a centrifugal cell plate.',
  },

  // Molecular Genetics Deck
  {
    id: 'q-gen-1',
    deckId: 'deck-genetics',
    discipline: 'Molecular Genetics',
    prompt:
      'During semiconservative DNA replication, which enzyme synthesizes the short RNA primers required by DNA Polymerase III to initiate each Okazaki fragment?',
    options: [
      'DNA Ligase',
      'DNA Topoisomerase II',
      'DNA Primase (specialized RNA polymerase)',
      '3\'-to-5\' Exonuclease',
    ],
    correctIndex: 2,
    rationale:
      'Replicative DNA polymerases cannot initiate strand synthesis de novo; DNA Primase deposits an ~8–12 nucleotide RNA primer providing the mandatory free 3\'-OH group.',
  },
  {
    id: 'q-gen-2',
    deckId: 'deck-genetics',
    discipline: 'Molecular Genetics',
    prompt:
      'In the CRISPR-Cas9 genome editing system, what sequence motif must immediately follow the 20-nucleotide target protospacer on the non-target DNA strand for Streptococcus pyogenes Cas9 cleavage?',
    options: [
      '5\'-TATA-3\'',
      '5\'-NGG-3\' Protospacer Adjacent Motif (PAM)',
      '5\'-AAUAAA-3\' polyadenylation signal',
      '5\'-GT-AG-3\' splice donor',
    ],
    correctIndex: 1,
    rationale:
      'SpCas9 scans duplex DNA for the 5\'-NGG-3\' PAM sequence before melting the adjacent DNA duplex to test complementarity with the sgRNA spacer sequence.',
  },
  {
    id: 'q-gen-3',
    deckId: 'deck-genetics',
    discipline: 'Molecular Genetics',
    prompt:
      'How does enzymatic acetylation of N-terminal lysine residues on core histone tails promote active gene transcription?',
    options: [
      'It adds bulky negative methyl groups to cytosine bases at CpG islands.',
      'It neutralizes the positive charge of lysine, weakening electrostatic attraction to negatively charged DNA phosphate backbones.',
      'It covalently cross-links H1 linker histones to nuclear lamins.',
      'It recruits RNase H to degrade nascent pre-mRNA transcripts.',
    ],
    correctIndex: 1,
    rationale:
      'Histone acetyltransferases (HATs) neutralize positive epsilon-amino charges on lysine residues, relaxing nucleosome compaction into transcriptionally accessible euchromatin and creating docking sites for bromodomain activators.',
  },
  {
    id: 'q-gen-4',
    deckId: 'deck-genetics',
    discipline: 'Molecular Genetics',
    prompt:
      'Which enzyme relieves positive supercoiling torsional strain accumulated ahead of the advancing DNA helicase at a replication fork?',
    options: [
      'DNA Topoisomerase (e.g., DNA Gyrase)',
      'Telomerase reverse transcriptase',
      'Single-strand binding protein (SSB)',
      'Peptidyl transferase ribozyme',
    ],
    correctIndex: 0,
    rationale:
      'Unwinding duplex DNA generates positive supercoils ahead of the fork; Type II topoisomerases cleave both strands transiently, pass an intact duplex segment through, and reseal to relax torsional stress.',
  },
  {
    id: 'q-gen-5',
    deckId: 'deck-genetics',
    discipline: 'Microbiology',
    prompt:
      'Which mechanism of prokaryotic horizontal gene transfer involves bacteriophage-mediated accidental packaging and transfer of host bacterial chromosomal DNA?',
    options: [
      'Natural competence transformation',
      'F-pilus conjugation',
      'Generalized or specialized transduction',
      'Transposon retrotransposition',
    ],
    correctIndex: 2,
    rationale:
      'Transduction occurs when a bacteriophage packages bacterial chromosomal fragments (generalized) or adjacent host genes upon imprecise prophage excision (specialized) and injects them into a new bacterial recipient.',
  },

  // Physiology & Immunology Deck
  {
    id: 'q-phys-1',
    deckId: 'deck-physiology',
    discipline: 'Human Physiology',
    prompt:
      'Which segment of the human nephron establishes the hyperosmotic renal medullary gradient by actively pumping Na+, K+, and 2Cl- out of the lumen while remaining impermeable to water?',
    options: [
      'Thin descending limb of the Loop of Henle',
      'Thick ascending limb of the Loop of Henle',
      'Proximal convoluted tubule',
      'Glomerular Bowman\'s capsule',
    ],
    correctIndex: 1,
    rationale:
      'The thick ascending limb expresses apical NKCC2 cotransporters and lacks aquaporin water channels, separating solute reabsorption from water to drive the countercurrent multiplier.',
  },
  {
    id: 'q-phys-2',
    deckId: 'deck-physiology',
    discipline: 'Human Physiology',
    prompt:
      'During chemical synaptic transmission, influx of which ion into the presynaptic bouton directly triggers synaptotagmin-mediated SNARE vesicle fusion?',
    options: [
      'Extracellular K+',
      'Extracellular Ca2+',
      'Intracellular Cl-',
      'Intracellular Mg2+',
    ],
    correctIndex: 1,
    rationale:
      'Presynaptic depolarization opens voltage-gated P/Q- and N-type Ca2+ channels; rising cytosolic [Ca2+] binds synaptotagmin C2 domains, catalyzing SNARE-driven vesicle exocytosis.',
  },
  {
    id: 'q-phys-3',
    deckId: 'deck-physiology',
    discipline: 'Immunology',
    prompt:
      'When Herpes Simplex Virus 1 expresses ICP47 to block TAP peptide transporters and prevent MHC Class I surface assembly, which host immune cell is uniquely specialized to detect and lyse this "missing-self" target?',
    options: [
      'IgE-secreting plasma cell',
      'Natural Killer (NK) cell',
      'CD4+ Th2 helper lymphocyte',
      'Basophil granulocyte',
    ],
    correctIndex: 1,
    rationale:
      'NK cells express inhibitory KIR receptors that recognize normal self MHC-I levels. Virus-induced loss of surface MHC-I removes this inhibitory brake, permitting activating receptors to trigger NK-cell cytotoxicity.',
  },
  {
    id: 'q-phys-4',
    deckId: 'deck-physiology',
    discipline: 'Human Physiology',
    prompt:
      'How does selective constriction of the efferent glomerular arteriole by moderate levels of Angiotensin II preserve Glomerular Filtration Rate (GFR) during mild volume depletion?',
    options: [
      'It reduces glomerular capillary hydrostatic pressure below Bowman\'s capsular pressure.',
      'It increases downstream resistance, raising glomerular capillary hydrostatic pressure (P_GC) upstream.',
      'It widens podocyte slit diaphragms to permit albumin filtration.',
      'It inhibits proximal tubule sodium reabsorption.',
    ],
    correctIndex: 1,
    rationale:
      'Constricting the outflow vessel (efferent arteriole) dams blood inside the glomerular capillary tuft, increasing P_GC and maintaining net filtration pressure even as total renal blood flow declines.',
  },
  {
    id: 'q-phys-5',
    deckId: 'deck-physiology',
    discipline: 'Immunology',
    prompt:
      'Which cytosolic innate immune pathway detects aberrant viral or damaged-mitochondrial double-stranded DNA to synthesize the second messenger cGAMP?',
    options: [
      'cGAS-STING pathway',
      'Complement C3b opsonization',
      'Somatic hypermutation',
      'B-cell receptor class switching',
    ],
    correctIndex: 0,
    rationale:
      'Cyclic GMP-AMP synthase (cGAS) binds cytosolic dsDNA and catalyzes 2\'3\'-cGAMP synthesis, activating ER-resident STING to phosphorylate TBK1/IRF3 and induce Type I interferons.',
  },

  // Comprehensive Exam Deck
  {
    id: 'q-comp-1',
    deckId: 'deck-comprehensive',
    discipline: 'Biochemistry',
    prompt:
      'In Michaelis-Menten enzyme kinetics, how does a pure competitive inhibitor alter apparent Km and Vmax on a Lineweaver-Burk double-reciprocal analysis?',
    options: [
      'Increases apparent Km while Vmax remains unchanged',
      'Decreases Vmax while Km remains unchanged',
      'Decreases both Km and Vmax proportionately',
      'Increases Vmax by stabilizing the enzyme-substrate complex',
    ],
    correctIndex: 0,
    rationale:
      'A competitive inhibitor binds reversibly to the free active site, competing with substrate. Sufficiently high [S] outcompetes the inhibitor so Vmax is unchanged, whereas more substrate is required to achieve half-maximal velocity (higher apparent Km).',
  },
  {
    id: 'q-comp-2',
    deckId: 'deck-comprehensive',
    discipline: 'Virology',
    prompt:
      'Which historical experiment utilized Bacteriophage T4 (and T2) labeled differentially with 32P and 35S isotopes to prove that DNA, rather than protein, transmits hereditary genetic information?',
    options: [
      'Meselson-Stahl density gradient centrifugation (1958)',
      'Hershey-Chase Waring blender experiment (1952)',
      'Nirenberg-Matthaei poly-U cell-free translation (1961)',
      'Stanley crystallization of Tobacco Mosaic Virus (1935)',
    ],
    correctIndex: 1,
    rationale:
      'Alfred Hershey and Martha Chase labeled phage DNA with 32P and protein coats with 35S, demonstrating that 32P entered Escherichia coli cells and directed progeny virion synthesis while 35S remained in extracellular sheared ghosts.',
  },
  {
    id: 'q-comp-3',
    deckId: 'deck-comprehensive',
    discipline: 'Microbiology',
    prompt:
      'Why do beta-lactam antibiotics such as penicillin exhibit selective bactericidal toxicity against dividing bacteria without harming human host cells?',
    options: [
      'They selectively inhibit bacterial 70S ribosomal peptidyl transferase.',
      'They covalently acylate transpeptidases (penicillin-binding proteins) that cross-link bacterial peptidoglycan walls, a structure absent in eukaryotes.',
      'They chelate cholesterol specifically from Gram-positive membranes.',
      'They cleave circular bacterial plasmids via CRISPR endonucleases.',
    ],
    correctIndex: 1,
    rationale:
      'Beta-lactams structurally mimic the D-Ala-D-Ala terminus of peptidoglycan pentapeptides, irreversibly inhibiting transpeptidase cross-linking and causing osmotic lysis in growing bacteria.',
  },
  {
    id: 'q-comp-4',
    deckId: 'deck-comprehensive',
    discipline: 'Botany',
    prompt:
      'In which subcompartment of the chloroplast does RuBisCO catalyze the carboxylation of ribulose-1,5-bisphosphate (RuBP) during the Calvin-Benson cycle?',
    options: [
      'Thylakoid lumen',
      'Intermembrane space',
      'Chloroplast stroma',
      'Granal appressed lipid core',
    ],
    correctIndex: 2,
    rationale:
      'Light reactions pump protons into the thylakoid lumen, alkalinizing the surrounding stroma (pH ~8) and increasing Mg2+ concentration—conditions that activate stromal RuBisCO for carbon fixation.',
  },
  {
    id: 'q-comp-5',
    deckId: 'deck-comprehensive',
    discipline: 'Human Physiology',
    prompt:
      'What biophysical property of myelinated axons enables saltatory conduction to achieve velocities up to 120 m/s with minimal ATP expenditure?',
    options: [
      'Continuous propagation of voltage-gated Na+ channels beneath every nanometer of myelin',
      'High membrane electrical resistance and low capacitance across internodes, confining regenerative Na+ currents to Nodes of Ranvier',
      'Gap-junction electrical synapses embedded within Schwann cell nuclei',
      'Passive diffusion of acetylcholine along the axoplasm',
    ],
    correctIndex: 1,
    rationale:
      'Multilayered lipid myelin increases transmembrane resistance and decreases capacitance, allowing local depolarizing current to spread electrotonically with minimal decay from one Node of Ranvier to the next.',
  },
  {
    id: 'q-comp-6',
    deckId: 'deck-comprehensive',
    discipline: 'Virology',
    prompt:
      'Which virus family utilizes RNA-dependent DNA synthesis in reverse transcription inside an icosahedral core, yet packages a partially double-stranded circular DNA genome in mature extracellular virions?',
    options: [
      'Retroviridae (e.g., HIV-1)',
      'Hepadnaviridae (e.g., Hepatitis B Virus)',
      'Adenoviridae (e.g., Adenovirus 5)',
      'Filoviridae (e.g., Zaire Ebolavirus)',
    ],
    correctIndex: 1,
    rationale:
      'Hepadnaviruses belong to Baltimore Group VII (dsDNA-RT): they replicate via a pregenomic RNA intermediate reverse-transcribed back into relaxed circular DNA prior to virion egress.',
  },
];
