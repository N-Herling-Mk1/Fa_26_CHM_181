/* Lecture slide decks: one entry per chapter deck. Shared by the hub (index.html) and the
   viewer (slides/viewer.html?d=<key>). Files live in slides/decks/<file>.pdf and <file>.pptx.
   The PDF is a LibreOffice render of the .pptx with hidden slides included; the .pptx is the original.
   quiz: path (from the repo root) of that chapter's deck quiz, or null. */
window.SLIDE_DECKS = [
  {
    key: "ch01", chapter: "Ch. 1", title: "Matter, Energy, and Measurement", file: "181.1_Ch_1_2026",
    slides: 75, hidden: 16, pdfMB: 4.1, pptxMB: 11.6, quiz: null,
    topics: ["Course intro", "Classifying matter", "Physical & chemical properties", "Energy & work", "Units & uncertainty", "Sig figs", "Dimensional analysis"],
  },
  {
    key: "ch02", chapter: "Ch. 2", title: "Atoms, Molecules, and Ions", file: "181.2_Ch_2_2026",
    slides: 82, hidden: 22, pdfMB: 5.0, pptxMB: 14.7, quiz: null,
    topics: ["Dalton's theory", "Electron & Millikan", "Radioactivity", "Isotopes & atomic weight", "Periodic table", "Formulas", "Ions", "Bond types"],
  },
  {
    key: "ch03", chapter: "Ch. 3", title: "Chemical Reactions and Stoichiometry", file: "181.3_Ch_3_2026",
    slides: 64, hidden: 15, pdfMB: 3.2, pptxMB: 4.3, quiz: null,
    topics: ["Molecular weight", "Percent composition", "The mole", "Balancing equations", "Limiting reactants", "Empirical formulas"],
  },
  {
    key: "ch04", chapter: "Ch. 4", title: "Reactions in Aqueous Solutions", file: "181.4_Ch_4_2026",
    slides: 87, hidden: 35, pdfMB: 3.6, pptxMB: 13.3, quiz: null,
    topics: ["Solvation", "Electrolytes & solubility", "Precipitation", "Net ionic equations", "Acids & bases", "Molarity", "Redox & activity series"],
  },
  {
    key: "ch06", chapter: "Ch. 6", title: "Electronic Structure of Atoms", file: "181.6_Ch_6_2026",
    slides: 138, hidden: 26, pdfMB: 7.0, pptxMB: 11.1, quiz: null,
    topics: ["Light & waves", "Quantization", "Wave–particle duality", "Uncertainty", "Bohr model", "Quantum numbers", "Aufbau & spin", "Configurations"],
  },
  {
    key: "ch07", chapter: "Ch. 7", title: "Periodic Properties of the Elements", file: "181.7_Ch_7_2026",
    slides: 78, hidden: 5, pdfMB: 3.2, pptxMB: 6.7, quiz: null,
    topics: ["Periodic table", "Effective nuclear charge", "Atomic & ionic size", "Ionization energy", "Electron affinity", "Metals / nonmetals"],
  },
  {
    key: "ch08", chapter: "Ch. 8", title: "Introduction to Chemical Bonding", file: "181.8_Ch_8_2026",
    slides: 89, hidden: 17, pdfMB: 4.3, pptxMB: 5.1, quiz: "quizzes/quiz02-ch08-chemical-bonding/index.html",
    topics: ["Lewis symbols & octet", "Ionic bonding", "Born–Haber", "Covalent bonding", "Polarity", "Formal charge", "Resonance", "Bond enthalpies"],
  },
  {
    key: "ch09", chapter: "Ch. 9", title: "Molecular Geometry and Bonding Theories", file: "181.9_Ch_9_2026",
    slides: 97, hidden: 19, pdfMB: 3.1, pptxMB: 14.3, quiz: "quizzes/quiz03-ch09-molecular-geometry/index.html",
    topics: ["VSEPR", "Molecular geometries", "Polarity", "Valence bond theory", "Hybrid orbitals", "σ / π bonds", "MO theory"],
  },
  {
    key: "ch10", chapter: "Ch. 10", title: "Gases", file: "181.10_Ch_10_2025",
    slides: 69, hidden: 21, pdfMB: 3.2, pptxMB: 6.1, quiz: "quizzes/quiz04-ch10-gases/index.html",
    topics: ["Pressure", "Boyle / Charles / Avogadro", "STP", "Ideal gas law", "Gas density", "Dalton", "Kinetic-molecular theory", "Effusion", "Real gases"],
  },
  {
    key: "ch11", chapter: "Ch. 11", title: "Liquids, Solids, and Intermolecular Forces", file: "181.11_Ch_11_2025",
    slides: 62, hidden: 16, pdfMB: 2.6, pptxMB: 7.2, quiz: "quizzes/quiz05-ch11-liquids-solids/index.html",
    topics: ["Dispersion", "Dipole–dipole", "Hydrogen bonding", "Ion–dipole", "Heating curves", "Calorimetry", "Vapor pressure", "Phase diagrams"],
  },
];
