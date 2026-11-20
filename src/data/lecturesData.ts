import { LectureModule } from '../types/biology';

export const LECTURE_MODULES: LectureModule[] = [
  {
    id: 'lec-virology-baltimore',
    number: '01',
    title: 'Viral Replication Strategies & Baltimore Taxonomy',
    discipline: 'Virology',
    readingMinutes: 9,
    plateImage: '/src/assets/images/atlas_virology_plate_1795162823313.jpg',
    plateCaption:
      'Plate I: Comparative architecture of complex Caudoviricetes Bacteriophage T4 (left) and enveloped helical RNA virion (right).',
    summary:
      'A rigorous examination of obligate intracellular viral parasitism, capsid self-assembly, receptor-mediated tropism, and the seven Baltimore pathways converging on host ribosomal translation.',
    objectives: [
      'Differentiate viral Baltimore Classes I through VII by nucleic acid polarity and polymerase requirement.',
      'Contrast lytic versus lysogenic bacteriophage life cycles and lysogenic conversion of bacterial toxins.',
      'Explain why negative-sense and double-stranded RNA viruses must package viral RdRp within the mature virion.',
    ],
    sections: [
      {
        heading: '1. The Universal mRNA Imperative',
        prose:
          'Unlike cellular organisms, viruses lack autonomous ribosomes, transfer RNAs, and ATP-generating machinery. Consequently, every viral genome—whether double-stranded DNA, segmented negative-sense RNA, or ambisense circular DNA—must synthesize functional positive-sense mRNA recognizable by host 80S eukaryotic or 70S prokaryotic ribosomes. David Baltimore (1971) formalized viral classification around this obligate biochemical pathway.',
        keyFormulaOrPathway:
          '(-)ssRNA Virion  --[Packaged Viral RdRp]-->  (+)mRNA  --[Host Ribosome]-->  Viral Proteins',
      },
      {
        heading: '2. Polymerase Packaging & Sense Polarity',
        prose:
          'Positive-sense single-stranded RNA genomes ((+)ssRNA, Group IV, e.g., SARS-CoV-2 and Zika virus) possess the same polarity as cellular mRNA and are immediately infectious upon cytoplasmic uncoating, directly translating the viral polyprotein and RNA-dependent RNA polymerase (RdRp). Conversely, naked genomic RNA from negative-sense RNA viruses (Group V, e.g., Influenza A, Ebola, Rabies) is non-infectious if introduced alone into a cell because host cells lack RNA-dependent RNA polymerases. Group V and Group III virions must co-package functional polymerase complexes inside the capsid.',
        clinicalOrLabPearl:
          'Clinical Diagnostic Note: Retroviruses (Group VI) and Hepadnaviruses (Group VII) employ Reverse Transcriptase lacking 3\'-to-5\' exonuclease proofreading, yielding mutation frequencies ~10^-4 substitutions per nucleotide per replication cycle.',
      },
      {
        heading: '3. Envelope Biophysics & Disinfection',
        prose:
          'Enveloped virions acquire host-derived phospholipid bilayers during budding at the plasma membrane, endoplasmic reticulum, or Golgi apparatus. While lipid envelopes facilitate immune evasion and membrane fusion via Class I–III fusion glycoproteins, they render virions sensitive to organic solvents, detergents, desiccation, and gastric bile salts. Non-enveloped icosahedral capsids (e.g., Adenovirus, Poliovirus) remain stable across fecal-oral transmission.',
      },
    ],
  },
  {
    id: 'lec-cellular-bioenergetics',
    number: '02',
    title: 'Mitochondrial Bioenergetics & Chemiosmotic Coupling',
    discipline: 'Biochemistry',
    readingMinutes: 11,
    plateImage: '/src/assets/images/atlas_cell_plate_1795162823405.jpg',
    plateCaption:
      'Plate II: Eukaryotic animal cell cross-section highlighting mitochondrial cristae, rough ER, and Golgi cisternal polarity.',
    summary:
      'Quantitative analysis of redox electron transport across inner mitochondrial membrane complexes I–IV, proton-motive force thermodynamics, and rotational catalysis by F0F1-ATP synthase.',
    objectives: [
      'Trace electron flow from NADH and FADH2 through Complexes I–IV to terminal molecular oxygen.',
      'Calculate proton-motive force components (delta-pH and membrane potential delta-psi).',
      'Explain the physiological action of chemical uncouplers such as UCP1 (thermogenin) and 2,4-DNP.',
    ],
    sections: [
      {
        heading: '1. Architecture of the Inner Mitochondrial Membrane',
        prose:
          'While the outer mitochondrial membrane contains voltage-dependent anion channels (porins) permeable to solutes below ~5 kDa, the inner mitochondrial membrane is impermeable even to protons and small ions due to its high cardiolipin content (~20% of total membrane lipid). Invaginations termed cristae dramatically expand surface area to accommodate dense respiratory supercomplexes.',
        keyFormulaOrPathway:
          'NADH + H+ + 1/2 O2  -->  NAD+ + H2O   (Delta G°\' = -220 kJ/mol; ~10 H+ translocated)',
      },
      {
        heading: '2. Rotational Catalysis by F0F1-ATP Synthase',
        prose:
          'Proton translocation down the electrochemical gradient through the membrane-embedded F0 c-ring drives mechanical rotation of the asymmetric gamma-subunit stalk inside the catalytic alpha3-beta3 F1 hexamer. Paul Boyer\'s binding-change mechanism demonstrates that each beta subunit cycles sequentially through Open (O), Loose (L), and Tight (T) conformations, releasing 1 ATP per 120-degree rotation.',
        clinicalOrLabPearl:
          'Physiological Correlation: In brown adipose tissue of neonates, Uncoupling Protein 1 (thermogenin) dissipates the proton gradient as heat rather than ATP synthesis—critical for non-shivering thermogenesis.',
      },
    ],
  },
  {
    id: 'lec-plant-vascular',
    number: '03',
    title: 'Plant Vascular Physiology: Xylem Tension & Phloem Pressure-Flow',
    discipline: 'Botany',
    readingMinutes: 8,
    plateImage: '/src/assets/images/atlas_botany_plate_1795162823649.jpg',
    plateCaption:
      'Plate III: Vascular bundle cross-section illustrating lignified xylem conduits, phloem sieve elements, and chloroplast grana.',
    summary:
      'Biophysical principles governing long-distance water ascent via negative hydrostatic tension in xylem and metabolically driven sucrose translocation through living phloem sieve tubes.',
    objectives: [
      'Apply the water potential equation (Psi = Psi_s + Psi_p) to stomatal transpiration gradients.',
      'Contrast the structural anatomy of dead lignified xylem vessels with living enucleate sieve-tube elements.',
      'Explain Münch\'s pressure-flow hypothesis for source-to-sink photoassimilate partitioning.',
    ],
    sections: [
      {
        heading: '1. Soil-Plant-Atmosphere Water Potential Continuum',
        prose:
          'Water moves spontaneously along gradients of decreasing total water potential (Psi_w). Typical moist soil exhibits a water potential near -0.05 MPa, root xylem sits around -0.5 MPa, leaf mesophyll near -1.5 MPa, and dry ambient air drops below -50 MPa. Evaporation from curved cell-wall air-water menisci inside substomatal cavities generates extreme negative matric tension transmitted uninterruptedly down cohesive hydrogen-bonded water columns.',
        keyFormulaOrPathway:
          'Psi_w = Psi_s (osmotic potential) + Psi_p (hydrostatic pressure) + Psi_g (gravity)',
      },
      {
        heading: '2. Phloem Loading & Companion Cell Symbiosis',
        prose:
          'Mature angiosperm sieve-tube elements lose their nucleus, vacuole, and ribosomes to minimize hydraulic drag across perforated sieve plates. Their metabolic viability depends entirely on plasmodesmata-connected companion cells, which utilize H+-ATPase proton pumps and SUC2 H+/sucrose symporters to load sucrose against steep concentration gradients.',
        clinicalOrLabPearl:
          'Biophysical Hazard: Rapid freezing or drought can nucleate gas bubbles (cavitation/embolism) inside xylem conduits under negative pressure, breaking the water column unless bordered pits isolate the embolized vessel.',
      },
    ],
  },
  {
    id: 'lec-central-dogma',
    number: '04',
    title: 'DNA Replication Fidelity, Transcription & Epigenetic Chromatin',
    discipline: 'Molecular Genetics',
    readingMinutes: 10,
    summary:
      'Molecular choreography of semiconservative fork progression, eukaryotic RNA polymerase II pre-mRNA processing, and histone-tail epigenetic regulation.',
    objectives: [
      'Resolve the antiparallel replication fork paradox using leading and discontinuous Okazaki synthesis.',
      'Detail the three enzymatic steps of proofreading and mismatch repair.',
      'Relate histone lysine acetylation and DNA CpG methylation to euchromatin versus heterochromatin.',
    ],
    sections: [
      {
        heading: '1. Coordinated Asymmetric Fork Synthesis',
        prose:
          'Because all known DNA polymerases elongate exclusively by nucleophilic attack of a free 3\'-hydroxyl on an incoming 5\'-alpha-phosphate dNTP, only one strand (the leading strand) can elongate continuously toward the helicase-unwound fork. The antiparallel lagging strand loops through the replisome trombone model so that both polymerases advance together while synthesizing Okazaki fragments backward relative to fork movement.',
        keyFormulaOrPathway:
          'DNA(n) + dNTP  --[DNA Pol III, Mg2+]-->  DNA(n+1) + PPi  (Delta G < 0 via pyrophosphatase)',
      },
      {
        heading: '2. Chromatin Remodeling & Transcriptional Gatekeeping',
        prose:
          'In eukaryotic nuclei, 147 base pairs of DNA wrap around histone octamers (H2A, H2B, H3, H4). Histone acetyltransferases (HATs) neutralize positive lysine charges on histone tails, loosening electrostatic DNA wrapping to permit RNA Polymerase II recruitment. Conversely, CpG island hypermethylation recruits methyl-CpG-binding proteins and histone deacetylases (HDACs) to silence transcription.',
      },
    ],
  },
  {
    id: 'lec-renal-homeostasis',
    number: '05',
    title: 'Renal Physiology: Glomerular Filtration & Countercurrent Concentration',
    discipline: 'Human Physiology',
    readingMinutes: 9,
    summary:
      'Hemodynamic regulation of Glomerular Filtration Rate, segmental tubular transport, and hormonal control of extracellular fluid osmolarity via RAAS and ADH.',
    objectives: [
      'Analyze how afferent vs. efferent arteriolar tone alters net filtration pressure and GFR.',
      'Explain the countercurrent multiplier mechanism establishing the corticomedullary osmotic gradient.',
      'Trace aldosterone and vasopressin (ADH) actions on distal nephron principal cells.',
    ],
    sections: [
      {
        heading: '1. Starling Forces Across the Glomerular Barrier',
        prose:
          'The renal corpuscle filters approximately 20% of renal plasma flow. Net filtration pressure (~10–15 mmHg) equals glomerular capillary hydrostatic pressure (~55 mmHg) minus opposing Bowman\'s capsular pressure (~15 mmHg) and plasma oncotic pressure (~30 mmHg). Selective efferent arteriolar constriction by Angiotensin II preserves GFR during mild systemic hypotension.',
        keyFormulaOrPathway:
          'NFP = P_GC - P_BC - Pi_GC  (~55 - 15 - 30 = +10 mmHg)',
      },
      {
        heading: '2. Osmotic Concentration & Vasa Recta Exchange',
        prose:
          'The thick ascending limb of the Loop of Henle actively transports Na+, K+, and 2Cl- via NKCC2 cotransporters while remaining impermeable to water, diluting luminal fluid and raising medullary interstitial osmolarity up to 1,200 mOsm/L. Sluggish hairpin blood flow through the vasa recta acts as a countercurrent exchanger so oxygen reaches the deep medulla without washing out the hyperosmotic gradient.',
      },
    ],
  },
  {
    id: 'lec-antiviral-immunity',
    number: '06',
    title: 'Innate Interferon Signaling & Adaptive Antiviral Immunity',
    discipline: 'Immunology',
    readingMinutes: 8,
    summary:
      'Coordination of nucleic-acid pattern recognition receptors, Type I interferon JAK-STAT antiviral states, MHC-I antigen presentation, and cytotoxic T-cell clearance.',
    objectives: [
      'Identify intracellular viral sensors (TLR3, TLR7, RIG-I, cGAS-STING) and their ligands.',
      'Outline the paracrine Type I interferon induction of PKR and OAS/RNase L.',
      'Explain how viral MHC-I downregulation triggers Natural Killer cell missing-self cytotoxicity.',
    ],
    sections: [
      {
        heading: '1. Intracellular Nucleic Acid Sensing',
        prose:
          'Host cells detect viral invasion rapidly via endosomal Toll-like receptors (TLR3 for dsRNA, TLR7/8 for ssRNA, TLR9 for unmethylated CpG DNA) and cytosolic sensors (RIG-I/MDA5 for uncapped 5\'-triphosphate RNA; cGAS-STING for aberrant cytosolic DNA). Downstream IRF3/IRF7 phosphorylation drives transcription of Interferon-alpha and Interferon-beta.',
        keyFormulaOrPathway:
          'Cytosolic Viral DNA --> cGAS --> cGAMP --> STING --> TBK1 --> IRF3 --> IFN-beta',
      },
      {
        heading: '2. Dual Cellular Surveillance: CD8+ CTLs & NK Cells',
        prose:
          'Secreted Type I interferons upregulate MHC Class I surface expression and proteasomal subunits on neighboring uninfected cells, enhancing visibility to CD8+ cytotoxic T lymphocytes. Should a virus (e.g., HSV-1 or CMV) block TAP transporters to evade CD8+ recognition, the resulting loss of surface MHC-I removes inhibitory KIR signaling on Natural Killer (NK) cells, triggering perforin/granzyme lysis via missing-self recognition.',
      },
    ],
  },
];
