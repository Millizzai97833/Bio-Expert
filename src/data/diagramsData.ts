import { BiologyDiagram } from '../types/biology';

export const BIOLOGY_DIAGRAMS: BiologyDiagram[] = [
  {
    id: 'eukaryotic-cell',
    title: 'Eukaryotic Animal Cell Ultrastructure',
    discipline: 'Cell Biology',
    subtitle: 'Organellar compartmentalization, endomembrane trafficking, and bioenergetics',
    svgType: 'eukaryotic-cell',
    plateImage: '/src/assets/images/atlas_cell_plate_1795162823405.jpg',
    description:
      'Interactive cross-sectional schematic illustrating the nucleus, endomembrane system, semiautonomous mitochondria, and cytoskeletal organization. Select any numbered marker to inspect structural ultrastructure and biochemical function.',
    hotspots: [
      {
        id: 'nucleus',
        number: 1,
        label: 'Nucleus & Nuclear Envelope',
        x: 47,
        y: 45,
        role: 'Genomic Storage & Transcription Hub',
        structureDetail:
          'Enclosed by a double phospholipid bilayer perforated by nuclear pore complexes; houses chromatin fibers and the rRNA-synthesizing nucleolus.',
      },
      {
        id: 'rough-er',
        number: 2,
        label: 'Rough Endoplasmic Reticulum',
        x: 34,
        y: 34,
        role: 'Secretory Protein Synthesis & Folding',
        structureDetail:
          'Flattened cisternae continuous with the outer nuclear membrane studded with 80S ribosomes mediating co-translational translocation and N-glycosylation.',
      },
      {
        id: 'mitochondrion',
        number: 3,
        label: 'Mitochondrion',
        x: 73,
        y: 30,
        role: 'Oxidative Phosphorylation & ATP Synthesis',
        structureDetail:
          'Double-membraned organelle with folded inner cristae housing Electron Transport Chain complexes I–IV and F0F1-ATP synthase.',
      },
      {
        id: 'golgi',
        number: 4,
        label: 'Golgi Apparatus',
        x: 68,
        y: 66,
        role: 'Post-Translational Sorting & Glycosylation',
        structureDetail:
          'Polarized cis-to-trans cisternal stack modifying ER-derived glycoproteins and directing vesicles to lysosomes or the plasma membrane.',
      },
      {
        id: 'lysosome',
        number: 5,
        label: 'Lysosome',
        x: 26,
        y: 66,
        role: 'Acid Hydrolase Digestion & Autophagy',
        structureDetail:
          'Single-membrane vesicle maintained at pH ~4.8 by V-type H+-ATPase pumps for degrading endocytosed cargo and senescent organelles.',
      },
      {
        id: 'centrosome',
        number: 6,
        label: 'Centrosome (Centriole Pair)',
        x: 56,
        y: 23,
        role: 'Microtubule Organizing Center (MTOC)',
        structureDetail:
          'Orthogonal pair of 9x3 microtubule triplet centrioles nucleating cytoplasmic microtubules and mitotic spindle poles.',
      },
      {
        id: 'plasma-membrane',
        number: 7,
        label: 'Plasma Membrane',
        x: 88,
        y: 50,
        role: 'Selective Permeability & Signal Transduction',
        structureDetail:
          'Fluid mosaic phospholipid bilayer stabilized by cholesterol, embedded with ion channels, GPCRs, and cell-adhesion glycoproteins.',
      },
    ],
  },
  {
    id: 'virion-comparison',
    title: 'Bacteriophage T4 vs. Enveloped Retrovirus',
    discipline: 'Virology',
    subtitle: 'Comparative viral architecture: complex tailed dsDNA phage and lipid-enveloped ssRNA virion',
    svgType: 'virion-comparison',
    plateImage: '/src/assets/images/atlas_virology_plate_1795162823313.jpg',
    description:
      'Side-by-side structural comparison of prokaryotic-infecting Bacteriophage T4 (left) and an enveloped eukaryotic RNA virion (right), highlighting capsid geometry, nucleic acid packaging, and receptor-binding apparatus.',
    hotspots: [
      {
        id: 'phage-head',
        number: 1,
        label: 'Prolate Icosahedral Capsid Head',
        x: 27,
        y: 20,
        role: 'High-Pressure dsDNA Packaging',
        structureDetail:
          'Composed of gp23/gp24 capsomeres housing 169 kb linear dsDNA packed at near-crystalline density (~500 mg/mL).',
      },
      {
        id: 'phage-sheath',
        number: 2,
        label: 'Contractile Tail Sheath',
        x: 27,
        y: 48,
        role: 'Mechanical Genome Injection',
        structureDetail:
          'Helical protein assembly around a rigid hollow tail tube; contracts to half its extended length to puncture the bacterial cell envelope.',
      },
      {
        id: 'tail-fibers',
        number: 3,
        label: 'Long Tail Fibers & Baseplate',
        x: 16,
        y: 74,
        role: 'Host Receptor Recognition (OmpC / LPS)',
        structureDetail:
          'Six hinged sensory fibers reversibly scan Escherichia coli outer-membrane receptors before triggering irreversible baseplate conformational locking.',
      },
      {
        id: 'spike-glycoprotein',
        number: 4,
        label: 'Trimeric Spike Glycoprotein',
        x: 73,
        y: 19,
        role: 'Host Receptor Attachment & Fusion',
        structureDetail:
          'Class I viral fusion trimers embedded in the lipid envelope; mediates high-affinity receptor engagement and membrane merging.',
      },
      {
        id: 'lipid-envelope',
        number: 5,
        label: 'Host-Derived Lipid Bilayer Envelope',
        x: 86,
        y: 44,
        role: 'Immune Camouflage & Environmental Sensitivity',
        structureDetail:
          'Acquired during budding from host plasma or ER membranes; renders enveloped virions susceptible to detergents, desiccation, and bile salts.',
      },
      {
        id: 'rna-core',
        number: 6,
        label: 'Ribonucleoprotein Genome & Polymerase',
        x: 73,
        y: 51,
        role: 'Genetic Blueprint & Viral Enzyme Cargo',
        structureDetail:
          'Single-stranded RNA complexed with nucleocapsid proteins alongside virally encoded polymerase (RdRp or Reverse Transcriptase).',
      },
    ],
  },
  {
    id: 'chloroplast',
    title: 'Chloroplast & Photosynthetic Apparatus',
    discipline: 'Botany',
    subtitle: 'Thylakoid light-reaction membranes and stromal Calvin-Benson carbon fixation',
    svgType: 'chloroplast',
    plateImage: '/src/assets/images/atlas_botany_plate_1795162823649.jpg',
    description:
      'Architectural cross-section of a plant mesophyll chloroplast showing double envelope membranes, stacked granal thylakoids, stromal lamellae, and circular plastid DNA.',
    hotspots: [
      {
        id: 'outer-membrane',
        number: 1,
        label: 'Double Envelope Membranes',
        x: 18,
        y: 35,
        role: 'Metabolite Transport & Endosymbiotic Boundary',
        structureDetail:
          'Porin-permeable outer membrane and selectively permeable inner membrane containing TOC/TIC protein import translocons.',
      },
      {
        id: 'granum',
        number: 2,
        label: 'Granum (Stacked Thylakoid Discs)',
        x: 43,
        y: 47,
        role: 'Light-Dependent Photophosphorylation',
        structureDetail:
          'Appressed membrane discs enriched in Photosystem II and LHCII antenna complexes that split H2O and evolve O2.',
      },
      {
        id: 'stroma-lamellae',
        number: 3,
        label: 'Stromal Lamellae & ATP Synthase',
        x: 61,
        y: 48,
        role: 'Photosystem I & Chemiosmotic ATP Synthesis',
        structureDetail:
          'Unstacked thylakoid bridges enriched in Photosystem I and CF0CF1-ATP synthase projecting into the stroma.',
      },
      {
        id: 'stroma',
        number: 4,
        label: 'Chloroplast Stroma (RuBisCO Matrix)',
        x: 52,
        y: 25,
        role: 'Calvin-Benson Cycle Carbon Fixation',
        structureDetail:
          'Alkaline protein-dense matrix (pH ~8.0 in light) housing RuBisCO to fix CO2 onto RuBP into triose phosphates.',
      },
      {
        id: 'plastid-dna',
        number: 5,
        label: 'Circular Plastid DNA & 70S Ribosomes',
        x: 75,
        y: 62,
        role: 'Semiautonomous Organellar Gene Expression',
        structureDetail:
          'Multiple copies of ~120–160 kb circular DNA encoding core photosystem subunits and prokaryotic-type 70S ribosomes.',
      },
    ],
  },
  {
    id: 'nephron',
    title: 'Human Nephron & Countercurrent System',
    discipline: 'Human Physiology',
    subtitle: 'Renal ultrafiltration, tubular reabsorption, and medullary osmotic concentration',
    svgType: 'nephron',
    description:
      'Functional schematic of a juxtamedullary nephron detailing hemodynamic filtration pressures in the renal corpuscle and segmental solute transport along the renal tubule.',
    hotspots: [
      {
        id: 'glomerulus',
        number: 1,
        label: 'Glomerulus & Bowman\'s Capsule',
        x: 20,
        y: 30,
        role: 'High-Pressure Plasma Ultrafiltration',
        structureDetail:
          'Fenestrated capillary tuft fed by afferent arteriole and drained by higher-resistance efferent arteriole; generates ~180 L/day of protein-free filtrate.',
      },
      {
        id: 'pct',
        number: 2,
        label: 'Proximal Convoluted Tubule (PCT)',
        x: 39,
        y: 26,
        role: 'Iso-osmotic Bulk Reabsorption (65–70%)',
        structureDetail:
          'Dense apical brush-border microvilli and basolateral Na+/K+-ATPase reclaim ~100% of filtered glucose/amino acids and ~65% of Na+/H2O.',
      },
      {
        id: 'loop-henle',
        number: 3,
        label: 'Loop of Henle (Descending & Ascending)',
        x: 50,
        y: 74,
        role: 'Countercurrent Multiplier Osmotic Gradient',
        structureDetail:
          'Thin descending limb is AQP1-water-permeable; thick ascending limb is water-impermeable and actively pumps Na+-K+-2Cl- into the renal medulla.',
      },
      {
        id: 'dct',
        number: 4,
        label: 'Distal Convoluted Tubule & Macula Densa',
        x: 66,
        y: 26,
        role: 'Tubuloglomerular Feedback & Ca2+/Na+ Tuning',
        structureDetail:
          'PTH-sensitive Ca2+ reabsorption and aldosterone-responsive fine regulation; macula densa senses luminal NaCl delivery.',
      },
      {
        id: 'collecting-duct',
        number: 5,
        label: 'Collecting Duct',
        x: 82,
        y: 55,
        role: 'ADH/Vasopressin-Regulated Water Conservation',
        structureDetail:
          'Vasopressin triggers insertion of Aquaporin-2 channels into principal cell apical membranes to produce hyperosmotic urine up to 1200 mOsm/L.',
      },
    ],
  },
  {
    id: 'dna-replication',
    title: 'Semiconservative DNA Replication Fork',
    discipline: 'Molecular Genetics',
    subtitle: 'Bidirectional unwinding, leading-strand continuity, and lagging Okazaki synthesis',
    svgType: 'dna-replication',
    description:
      'Molecular topology of an active replication fork showing enzymatic coordination between helicase unwinding, RNA priming, and antiparallel 5\'-to-3\' polymerization.',
    hotspots: [
      {
        id: 'helicase-node',
        number: 1,
        label: 'Replicative DNA Helicase',
        x: 42,
        y: 50,
        role: 'ATP-Driven Duplex Unwinding',
        structureDetail:
          'Hexameric ring translocating along the template strand, separating complementary hydrogen-bonded bases ahead of polymerases.',
      },
      {
        id: 'topoisomerase',
        number: 2,
        label: 'Topoisomerase II (DNA Gyrase)',
        x: 20,
        y: 50,
        role: 'Relief of Positive Supercoiling',
        structureDetail:
          'Introduces transient double-strand breaks ahead of the fork to prevent torsional overwinding of the parental helix.',
      },
      {
        id: 'leading-strand',
        number: 3,
        label: 'Leading Strand (Continuous 5\' -> 3\')',
        x: 72,
        y: 28,
        role: 'Uninterrupted Synthesis Toward Fork',
        structureDetail:
          'Synthesized continuously from a single RNA primer by DNA Polymerase tracking in the exact direction of fork progression.',
      },
      {
        id: 'lagging-strand',
        number: 4,
        label: 'Lagging Strand & Okazaki Fragments',
        x: 68,
        y: 72,
        role: 'Discontinuous Synthesis Away From Fork',
        structureDetail:
          'Synthesized in 100–200 nt (eukaryote) or 1,000–2,000 nt (prokaryote) fragments initiated repeatedly by DNA Primase.',
      },
      {
        id: 'ligase-node',
        number: 5,
        label: 'DNA Ligase',
        x: 86,
        y: 72,
        role: 'Phosphodiester Nick Sealing',
        structureDetail:
          'Catalyzes ATP- or NAD+-dependent covalent joining of the 3\'-OH and 5\'-phosphate groups after RNA primer replacement.',
      },
    ],
  },
  {
    id: 'motor-neuron',
    title: 'Myelinated Motor Neuron & Chemical Synapse',
    discipline: 'Human Physiology',
    subtitle: 'Saltatory action potential propagation and Ca2+-triggered neurotransmitter exocytosis',
    svgType: 'motor-neuron',
    description:
      'Structural neurobiology diagram tracing signal integration from dendritic postsynaptic potentials across the axon hillock, saltatory Ranvier conduction, to the presynaptic terminal.',
    hotspots: [
      {
        id: 'dendrites',
        number: 1,
        label: 'Dendritic Arbor & Soma',
        x: 18,
        y: 42,
        role: 'Graded Postsynaptic Integration',
        structureDetail:
          'Receptive branched processes summing excitatory (EPSP) and inhibitory (IPSP) graded currents across the cell body.',
      },
      {
        id: 'axon-hillock',
        number: 2,
        label: 'Axon Hillock (Initial Segment)',
        x: 33,
        y: 50,
        role: 'Action Potential Threshold Trigger Zone',
        structureDetail:
          'High density of voltage-gated Na+ channels; initiates an all-or-none action potential if summation reaches ~ -55 mV.',
      },
      {
        id: 'myelin-sheath',
        number: 3,
        label: 'Myelin Sheath & Node of Ranvier',
        x: 56,
        y: 50,
        role: 'Saltatory Conduction Acceleration',
        structureDetail:
          'Lipid-rich Schwann cell (PNS) or oligodendrocyte (CNS) wrappings insulate internodes, forcing depolarization to leap between Nodes of Ranvier.',
      },
      {
        id: 'axon-terminal',
        number: 4,
        label: 'Presynaptic Bouton & Synaptic Vesicles',
        x: 84,
        y: 50,
        role: 'SNARE-Mediated Neurotransmitter Release',
        structureDetail:
          'Voltage-gated Ca2+ influx activates synaptotagmin, docking vesicles for exocytosis across the 30 nm synaptic cleft.',
      },
    ],
  },
];
