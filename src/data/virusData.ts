import { VirusMonograph } from '../types/biology';

export const VIRUS_MONOGRAPHS: VirusMonograph[] = [
  {
    id: 'sars-cov-2',
    name: 'SARS-CoV-2',
    scientificName: 'Severe acute respiratory syndrome-related coronavirus 2',
    family: 'Coronaviridae',
    genus: 'Betacoronavirus',
    baltimoreGroup: 'Group IV ((+)ssRNA)',
    genomeType: 'Linear non-segmented (+)ssRNA, 5\'-capped & 3\'-polyadenylated',
    genomeSizeKb: '29.9 kb',
    capsidSymmetry: 'Helical nucleocapsid within pleomorphic lipid envelope',
    enveloped: true,
    hostRange: 'Humans, chiropteran reservoirs, mustelids, felines',
    entryReceptor: 'ACE2 (Angiotensin-Converting Enzyme 2) + TMPRSS2 serine protease priming',
    replicationSite: 'Cytoplasmic double-membrane vesicles (DMVs) derived from host ER',
    incubationPeriod: '2–14 days (median 3–5 days across Omicron sublineages)',
    transmissionRoute: 'Respiratory aerosols and droplets',
    pathogenesis:
      'Spike (S) glycoprotein S1 RBD binds alveolar type II pneumocyte ACE2 receptors; viral non-structural proteins suppress host interferon-I signaling while dysregulated macrophage activation can precipitate acute respiratory distress syndrome (ARDS).',
    clinicalPresentation:
      'Upper/lower respiratory tract infection, fever, anosmia, viral pneumonia, coagulopathy, and post-acute sequelae.',
    prophylaxisAndTherapy:
      'mRNA/adenoviral/protein-subunit S vaccines; nirmatrelvir-ritonavir (Mpro protease inhibitor), remdesivir (RdRp inhibitor).',
    researchLandmark:
      'Contains a proofreading 3\'-to-5\' exoribonuclease (nsp14-ExoN) unique among RNA viruses, stabilizing its exceptionally large ~30 kb RNA genome.',
  },
  {
    id: 'hiv-1',
    name: 'HIV-1 (Human Immunodeficiency Virus)',
    scientificName: 'Human immunodeficiency virus 1',
    family: 'Retroviridae',
    genus: 'Lentivirus',
    baltimoreGroup: 'Group VI (ssRNA-RT)',
    genomeType: 'Diploid dimeric (+)ssRNA reverse-transcribed to dsDNA provirus',
    genomeSizeKb: '9.7 kb (x2 copies)',
    capsidSymmetry: 'Conical (fullerene-cone) p24 capsid core',
    enveloped: true,
    hostRange: 'Homo sapiens (zoonotic origin: Pan troglodytes SIVcpz)',
    entryReceptor: 'CD4 primary receptor + CCR5 or CXCR4 chemokine co-receptor',
    replicationSite: 'Cytoplasmic reverse transcription; nuclear proviral integration',
    incubationPeriod: '2–4 weeks (acute retroviral syndrome); 8–10 years untreated to AIDS',
    transmissionRoute: 'Parenteral blood exposure, sexual mucosal contact, perinatal vertical',
    pathogenesis:
      'Viral integrase inserts proviral cDNA into host CD4+ T-helper lymphocyte and macrophage chromatin. Chronic immune activation, pyroptosis of bystander T cells, and gut-associated lymphoid depletion progressively collapse cell-mediated immunity.',
    clinicalPresentation:
      'Acute mononucleosis-like seroconversion followed by clinical latency and eventual opportunistic infections (Pneumocystis jirovecii, Kaposi sarcoma) at CD4 < 200 cells/µL.',
    prophylaxisAndTherapy:
      'Combination antiretroviral therapy (ART: integrase strand-transfer inhibitors, NRTIs, NNRTIs, protease inhibitors) and PrEP.',
    researchLandmark:
      'Discovery of error-prone reverse transcription elucidated rapid intra-host antigenic drift and env gp120 glycan shielding.',
  },
  {
    id: 'influenza-a',
    name: 'Influenza A Virus (H1N1)',
    scientificName: 'Alphainfluenzavirus influenzae',
    family: 'Orthomyxoviridae',
    genus: 'Alphainfluenzavirus',
    baltimoreGroup: 'Group V ((-)ssRNA)',
    genomeType: '8 segmented negative-sense ssRNA ribonucleoprotein complexes',
    genomeSizeKb: '13.5 kb (8 segments)',
    capsidSymmetry: 'Helical RNP segments inside spherical/filamentous envelope',
    enveloped: true,
    hostRange: 'Aquatic waterfowl (primary reservoir), swine, humans, equids',
    entryReceptor: 'Alpha-2,6 (human) or Alpha-2,3 (avian) sialic acid glycoconjugates',
    replicationSite: 'Host cell nucleus (unusual for RNA viruses; cap-snatching)',
    incubationPeriod: '1–4 days (mean 2 days)',
    transmissionRoute: 'Respiratory droplets, aerosols, and fomites',
    pathogenesis:
      'Hemagglutinin (HA) mediates endosomal pH-triggered membrane fusion; viral PB2/PA polymerase snatches 5\'-m7G caps from host pre-mRNA in the nucleus. Neuraminidase (NA) cleaves terminal sialic acids to release progeny virions.',
    clinicalPresentation:
      'Abrupt high fever, myalgia, non-productive cough, tracheobronchitis, and predisposition to secondary bacterial pneumonia.',
    prophylaxisAndTherapy:
      'Annual quadrivalent HA/NA vaccines; neuraminidase inhibitors (oseltamivir) and PA endonuclease inhibitor (baloxavir marboxil).',
    researchLandmark:
      'Segmented genome permits genetic reassortment (antigenic shift) in co-infected porcine hosts, driving historical pandemics (1918, 2009).',
  },
  {
    id: 'bacteriophage-t4',
    name: 'Bacteriophage T4',
    scientificName: 'Tequatrovirus T4',
    family: 'Straboviridae (formerly Myoviridae)',
    genus: 'Tequatrovirus',
    baltimoreGroup: 'Group I (dsDNA)',
    genomeType: 'Linear circularly permuted, terminally redundant dsDNA (glucosylated hmC)',
    genomeSizeKb: '168.9 kb',
    capsidSymmetry: 'Prolate icosahedral head + contractile helical tail + 6 long tail fibers',
    enveloped: false,
    hostRange: 'Escherichia coli (enterobacteria)',
    entryReceptor: 'E. coli OmpC outer-membrane porin and lipopolysaccharide core',
    replicationSite: 'Prokaryotic cytoplasm (strictly lytic)',
    incubationPeriod: '22–25 minute eclipse/latent period at 37 °C',
    transmissionRoute: 'Aqueous diffusion and bacterial lysis burst (~150–200 virions/cell)',
    pathogenesis:
      'Tail sheath contracts, driving the hollow tail tube through the outer membrane and peptidoglycan layer via tail-associated lysozyme. Phage DNA rapidly degrades host chromosome and hijacks bacterial RNA polymerase.',
    clinicalPresentation:
      'Non-pathogenic to humans; causes rapid lytic clearance of susceptible E. coli populations.',
    prophylaxisAndTherapy:
      'Investigated in bacteriophage therapy cocktails against antibiotic-resistant Gram-negative enteric infections.',
    researchLandmark:
      'Hershey-Chase 1952 Waring blender experiment (32P-DNA vs 35S-protein) and Crick-Brenner frameshift mutagenesis used T4 to prove DNA is genetic material and codons are non-overlapping triplets.',
  },
  {
    id: 'ebola-virus',
    name: 'Zaire Ebolavirus',
    scientificName: 'Orthoebolavirus zairense',
    family: 'Filoviridae',
    genus: 'Orthoebolavirus',
    baltimoreGroup: 'Group V ((-)ssRNA)',
    genomeType: 'Linear non-segmented negative-sense ssRNA',
    genomeSizeKb: '18.9 kb',
    capsidSymmetry: 'Filamentous helical nucleocapsid (often U-shaped or shepherd-crook)',
    enveloped: true,
    hostRange: 'Pteropodid fruit bats (suspected reservoir), primates, humans',
    entryReceptor: 'Macropinocytosis uptake -> endosomal NPC1 (Niemann-Pick C1) cholesterol transporter',
    replicationSite: 'Host cytoplasm (viral inclusion bodies)',
    incubationPeriod: '2–21 days (mean 8–10 days)',
    transmissionRoute: 'Direct contact with blood, secretions, or tissues of infected individuals',
    pathogenesis:
      'VP24 and VP35 proteins potently antagonize STAT1 and RIG-I interferon pathways. Extensive infection of dendritic cells, monocytes, and vascular endothelium triggers massive cytokine storm, lymphocyte apoptosis, and disseminated intravascular coagulation.',
    clinicalPresentation:
      'Abrupt fever, severe asthenia, gastrointestinal fluid loss, hepatocellular necrosis, and hemorrhagic diathesis.',
    prophylaxisAndTherapy:
      'rVSV-ZEBOV live-attenuated recombinant vaccine; monoclonal antibody cocktails (atoltivimab/maftivimab/odesivimab, ansuvimab).',
    researchLandmark:
      'Elucidation of endosomal cathepsin cleavage followed by NPC1 binding revealed an obligate intracellular receptor checkpoint for filovirus fusion.',
  },
  {
    id: 'rabies-lyssavirus',
    name: 'Rabies Lyssavirus',
    scientificName: 'Lyssavirus rabies',
    family: 'Rhabdoviridae',
    genus: 'Lyssavirus',
    baltimoreGroup: 'Group V ((-)ssRNA)',
    genomeType: 'Linear non-segmented negative-sense ssRNA encoding 5 structural proteins',
    genomeSizeKb: '11.9 kb',
    capsidSymmetry: 'Bullet-shaped helical ribonucleoprotein core',
    enveloped: true,
    hostRange: 'All warm-blooded mammals (canids, chiroptera, mesocarnivores, humans)',
    entryReceptor: 'Nicotinic acetylcholine receptor (nAChR), NCAM, and p75NTR at neuromuscular junctions',
    replicationSite: 'Neuronal cytoplasm (Negri body eosinophilic inclusions)',
    incubationPeriod: '20–90 days typical (varies by wound proximity to CNS)',
    transmissionRoute: 'Saliva inoculation via bite or mucosal scratch',
    pathogenesis:
      'Enters peripheral motor or sensory axons and hijacks dynein motor complexes for retrograde axonal transport (~50–100 mm/day) to spinal dorsal root ganglia and brainstem, evading peripheral immune recognition.',
    clinicalPresentation:
      'Prodromal paresthesia followed by acute encephalomyelitis (hydrophobia, aerophobia, autonomic instability) or paralytic syndrome.',
    prophylaxisAndTherapy:
      'Immediate wound cleansing + Rabies Immune Globulin (RIG) + inactivated cell-culture vaccine series as post-exposure prophylaxis (PEP).',
    researchLandmark:
      'Louis Pasteur\'s 1885 serial attenuation in rabbit spinal cords established the foundation of post-exposure immunization.',
  },
  {
    id: 'tobacco-mosaic-virus',
    name: 'Tobacco Mosaic Virus (TMV)',
    scientificName: 'Tobamovirus tabaci',
    family: 'Virgaviridae',
    genus: 'Tobamovirus',
    baltimoreGroup: 'Group IV ((+)ssRNA)',
    genomeType: 'Linear positive-sense ssRNA',
    genomeSizeKb: '6.4 kb',
    capsidSymmetry: 'Rigid helical rod (300 nm x 18 nm; 2,130 identical coat subunits)',
    enveloped: false,
    hostRange: 'Solanaceae plants (Nicotiana tabacum, Solanum lycopersicum, Capsicum)',
    entryReceptor: 'Mechanical entry via micro-wounds; cell-to-cell movement via plasmodesmata',
    replicationSite: 'Plant cytoplasm (ER-associated viral replication factories)',
    incubationPeriod: '7–14 days to systemic foliar mottling',
    transmissionRoute: 'Mechanical contact, contaminated agricultural tools, and seed coats',
    pathogenesis:
      'Coat protein self-assembles around the RNA origin-of-assembly sequence; viral 30 kDa movement protein dilates plasmodesmal channels to transport viral RNA-protein complexes systemically through phloem.',
    clinicalPresentation:
      'Chlorotic mosaic mottling, leaf curling, stunted vegetative growth, and reduced photosynthetic yield.',
    prophylaxisAndTherapy:
      'Resistant cultivars (Tm-2^2 and N resistance genes), thermal tool sanitation, and strict phytosanitary isolation.',
    researchLandmark:
      'First virus ever identified (Ivanovsky 1892, Beijerinck 1898) and first macromolecular pathogen crystallized by Wendell Stanley in 1935.',
  },
  {
    id: 'hepatitis-b',
    name: 'Hepatitis B Virus (HBV)',
    scientificName: 'Orthohepadnavirus hominoidei',
    family: 'Hepadnaviridae',
    genus: 'Orthohepadnavirus',
    baltimoreGroup: 'Group VII (dsDNA-RT)',
    genomeType: 'Relaxed circular partially double-stranded DNA (rcDNA) converted to nuclear cccDNA',
    genomeSizeKb: '3.2 kb',
    capsidSymmetry: 'Icosahedral core (HBcAg) within lipid envelope bearing HBsAg',
    enveloped: true,
    hostRange: 'Humans and higher primates (strict hepatotropism)',
    entryReceptor: 'NTCP (Sodium taurocholate cotransporting polypeptide) on hepatocyte basolateral membrane',
    replicationSite: 'Nucleus (cccDNA transcription) & cytoplasm (reverse transcription of pgRNA)',
    incubationPeriod: '45–160 days (mean 90 days)',
    transmissionRoute: 'Perinatal, parenteral bloodborne, and sexual exposure',
    pathogenesis:
      'Nuclear covalently closed circular DNA (cccDNA) acts as a stable chromatinized minichromosome producing pregenomic RNA, which is reverse-transcribed inside nascent capsids. Hepatocellular injury is mediated primarily by host CD8+ CTL clearance rather than direct viral cytopathicity.',
    clinicalPresentation:
      'Acute icteric hepatitis; chronic persistence predisposes to cirrhosis and hepatocellular carcinoma.',
    prophylaxisAndTherapy:
      'Recombinant HBsAg subunit vaccine (first cancer-preventing vaccine); nucleos(t)ide analogues (tenofovir, entecavir) and pegylated IFN-alpha.',
    researchLandmark:
      'Illustrates extreme genomic economy: 4 overlapping open reading frames maximize protein coding from a 3.2 kb genome.',
  },
  {
    id: 'variola-virus',
    name: 'Variola Virus (Smallpox)',
    scientificName: 'Orthopoxvirus variola',
    family: 'Poxviridae',
    genus: 'Orthopoxvirus',
    baltimoreGroup: 'Group I (dsDNA)',
    genomeType: 'Linear dsDNA with covalently closed hairpin termini',
    genomeSizeKb: '186 kb',
    capsidSymmetry: 'Complex brick-shaped virion with biconcave core and lateral bodies',
    enveloped: true,
    hostRange: 'Strictly Homo sapiens (no animal reservoir)',
    entryReceptor: 'Cell-surface glycosaminoglycans and macropinocytosis/fusion complex',
    replicationSite: 'Host cytoplasm exclusively (viral factories / Guarnieri bodies)',
    incubationPeriod: '10–14 days',
    transmissionRoute: 'Respiratory droplets and variola scabs',
    pathogenesis:
      'Unlike virtually all other DNA viruses, poxviruses encode their own complete cytoplasmic transcription, capping, and DNA replication machinery, plus secreted virokines (cytokine decoys) neutralizing TNF and IL-1beta.',
    clinicalPresentation:
      'High fever prodrome followed by synchronous centrifugal deep-seated vesiculopustular exanthem.',
    prophylaxisAndTherapy:
      'Eradicated globally in 1980 via Vaccinia cross-immunization; tecovirimat (VP37 egress inhibitor) stockpiled for biodefense.',
    researchLandmark:
      'Only human infectious disease completely eradicated worldwide through coordinated ring vaccination and surveillance.',
  },
  {
    id: 'adenovirus-5',
    name: 'Human Adenovirus 5',
    scientificName: 'Human mastadenovirus C',
    family: 'Adenoviridae',
    genus: 'Mastadenovirus',
    baltimoreGroup: 'Group I (dsDNA)',
    genomeType: 'Linear dsDNA with covalently bound 5\'-terminal protein',
    genomeSizeKb: '35.9 kb',
    capsidSymmetry: 'Non-enveloped icosahedral (252 capsomeres) with 12 vertex fiber spikes',
    enveloped: false,
    hostRange: 'Humans (respiratory, ocular, and enteric mucosa)',
    entryReceptor: 'CAR (Coxsackievirus and Adenovirus Receptor) + alpha-v integrins',
    replicationSite: 'Host nucleus',
    incubationPeriod: '2–14 days',
    transmissionRoute: 'Respiratory droplets, fecal-oral, and inadequately chlorinated water',
    pathogenesis:
      'Immediate-early E1A proteins displace Rb from E2F to drive quiescent host cells into S-phase; E1B-55K inactivates p53 to prevent premature apoptosis during viral DNA synthesis.',
    clinicalPresentation:
      'Pharyngoconjunctival fever, acute respiratory disease, and gastroenteritis.',
    prophylaxisAndTherapy:
      'Supportive care; cidofovir in severe immunocompromised dissemination; live oral Ad4/Ad7 military vaccines.',
    researchLandmark:
      'Discovery of split genes and mRNA splicing (1977, Sharp & Roberts) arose directly from studying Adenovirus hexon mRNA-DNA hybrids.',
  },
  {
    id: 'hsv-1',
    name: 'Herpes Simplex Virus 1 (HSV-1)',
    scientificName: 'Simplexvirus humanalpha1',
    family: 'Orthoherpesviridae',
    genus: 'Simplexvirus',
    baltimoreGroup: 'Group I (dsDNA)',
    genomeType: 'Linear dsDNA (UL and US unique segments flanked by inverted repeats)',
    genomeSizeKb: '152 kb',
    capsidSymmetry: 'Icosahedral T=16 capsid surrounded by amorphous tegument and lipid envelope',
    enveloped: true,
    hostRange: 'Humans (mucosal epithelium and sensory ganglia)',
    entryReceptor: 'Nectin-1, HVEM, and heparan sulfate proteoglycans',
    replicationSite: 'Host nucleus (lytic epithelial replication & neuronal latency)',
    incubationPeriod: '2–12 days',
    transmissionRoute: 'Direct mucocutaneous contact with oral secretions',
    pathogenesis:
      'Establishes lifelong latent episomal persistence in trigeminal ganglion sensory neurons expressing only Latency-Associated Transcripts (LATs). ICP47 blocks TAP peptide transport to evade MHC-I CTL recognition.',
    clinicalPresentation:
      'Recurrent orolabial vesicular lesions, herpetic keratitis, and rare sporadic viral encephalitis.',
    prophylaxisAndTherapy:
      'Nucleoside analogues (acyclovir, valacyclovir) selectively phosphorylated by viral thymidine kinase.',
    researchLandmark:
      'Acyclovir demonstrated selective viral enzyme activation (Gertrude Elion, Nobel Prize 1988), pioneering rational antiviral pharmacology.',
  },
  {
    id: 'zika-virus',
    name: 'Zika Virus',
    scientificName: 'Orthoflavivirus zikaense',
    family: 'Flaviviridae',
    genus: 'Orthoflavivirus',
    baltimoreGroup: 'Group IV ((+)ssRNA)',
    genomeType: 'Linear single-ORF (+)ssRNA translated into a single polyprotein',
    genomeSizeKb: '10.8 kb',
    capsidSymmetry: 'Icosahedral herringbone E-protein lattice on host-derived envelope',
    enveloped: true,
    hostRange: 'Primates, humans, Aedes aegypti and Aedes albopictus vectors',
    entryReceptor: 'AXL, TIM-1, and DC-SIGN phosphatidylserine/glycan attachment factors',
    replicationSite: 'ER-invaginated cytoplasmic replication packets',
    incubationPeriod: '3–14 days',
    transmissionRoute: 'Aedes mosquito bite, transplacental vertical, sexual, and transfusion',
    pathogenesis:
      'Crosses the placental trophoblast barrier and exhibits high tropism for fetal cortical neural progenitor cells (NPCs), inducing mitotic spindle dysregulation, cell-cycle arrest, and caspase-3-mediated apoptosis.',
    clinicalPresentation:
      'Mild maculopapular rash, arthralgia, conjunctivitis in adults; congenital Zika syndrome (microcephaly, intracranial calcifications) in fetal infection.',
    prophylaxisAndTherapy:
      'Vector control, insect repellents, and pregnancy travel precautions; multiple vaccine candidates under clinical evaluation.',
    researchLandmark:
      '3D cerebral organoid models rapidly proved causal neurotropism of Zika virus for SOX2+ neural progenitors.',
  },
];
