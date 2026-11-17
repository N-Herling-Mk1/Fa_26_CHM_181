/* Practice Exam — CHEM 181 Mid-term exam #3, November 15, 2023 (form D), with the answer key.
 * All 29 multiple-choice questions, verbatim, in exam order. Keys are the circled answers on the
 * key; each was re-derived, and any place where the intended answer and the real molecule
 * differ is called out in the explanation.
 *
 * Reference figures are the exam's own information pages (periodic table, Pauling
 * electronegativities, VSEPR shapes, average bond enthalpies). Field reference:
 * quizzes/quiz02-ch08-chemical-bonding/data.js.
 */
(function () {
  const R = String.raw;

  window.QUIZ = {
    id: "chem181-exam03-mt3-f23-formD",
    course: "CHEM 181",
    title: "Practice Exam — Mid-term #3 (Fall 2023, form D)",
    scoring: "29 multiple-choice questions, 1 point each, all or nothing, as on the exam. An unanswered question scores 0.",
    toolsNote: R`The exam's information pages open from the drawers under each question: periodic table, electronegativities, VSEPR shapes and angles, average bond enthalpies. $\mathrm{FC} = V - N - B$; $\Delta H = \sum D(\text{broken}) - \sum D(\text{formed})$; bond order $= \tfrac12(\text{bonding} - \text{antibonding electrons})$.`,
    refs: {
      pt: { label: "Periodic table (exam p. 1)", img: "img/ref_periodic_table.png", alt: "Periodic table" },
      en: { label: "Electronegativities, Pauling scale (exam p. 1)", img: "img/ref_electronegativity.png", alt: "Electronegativity values" },
      shapes: { label: "Geometric shapes and their angles (exam p. 2)", img: "img/ref_vsepr_shapes.png", alt: "Linear, trigonal planar, tetrahedral, trigonal bipyramidal and octahedral shapes with angles" },
      bonds: { label: "Average bond enthalpies, kJ/mol (exam p. 2)", img: "img/ref_bond_enthalpies.png", alt: "Average bond enthalpy table" },
    },
    questions: [
      // ===================================================== Energetics (1–3)
      {
        n: 1, points: 1, type: "single", src: "Exam Q1", refs: ["bonds"],
        prompt: R`Consider the dissociation of methane into carbon and hydrogen atoms:<span class="eq">$\ce{CH4(g) -> C(g) + 4H(g)}$</span>Indicate the correct sign of the reaction's $\Delta H$ and state whether the heat is absorbed or released in this reaction.`,
        options: [
          { text: R`(A) $\Delta H > 0$, heat is absorbed`, correct: true, why: R`All four C–H bonds break and none form: $\Delta H = 4(413) = +1652$ kJ/mol. Bond breaking always absorbs energy.` },
          { text: R`(B) $\Delta H < 0$, heat is absorbed`, correct: false, why: R`Contradictory: absorbed heat means $\Delta H > 0$.` },
          { text: R`(C) $\Delta H > 0$, heat is released`, correct: false, why: R`Contradictory: released heat means $\Delta H < 0$.` },
          { text: R`(D) $\Delta H < 0$, heat is released`, correct: false, why: R`That describes forming bonds (the reverse reaction).` },
          { text: R`(E) $\Delta H = 0$, heat is neither released nor absorbed.`, correct: false, why: R`Four bonds break, so energy must go in.` },
        ],
      },
      {
        n: 2, points: 1, type: "single", src: "Exam Q2", refs: ["bonds"],
        prompt: R`Using the bond enthalpies from the table on page 2, calculate $\Delta H$ of the reaction<span class="eq">$\ce{2H2(g) + O2(g) -> 2H2O(g)}$</span>`,
        options: [
          { text: R`(A) $-834$ kJ/mol`, correct: false, why: R`Not what the table gives. Broken: 1367; formed: 1852.` },
          { text: R`(B) $-485$ kJ/mol`, correct: true, why: R`Broken: $2(\ce{H-H}) + \ce{O=O} = 2(436) + 495 = 1367$. Formed: 2 $\ce{H2O}$ × 2 O–H = 4 O–H, $4(463) = 1852$. $\Delta H = 1367 - 1852 = -485$ kJ/mol.` },
          { text: R`(C) $5$ kJ/mol`, correct: false, why: R`Not what the table gives; the reaction is strongly exothermic.` },
          { text: R`(D) $485$ kJ/mol`, correct: false, why: R`Right size, wrong sign: it is $\sum D(\text{broken}) - \sum D(\text{formed})$, not the reverse.` },
          { text: R`(E) $834$ kJ/mol`, correct: false, why: R`Wrong sign and size.` },
        ],
      },
      {
        n: 3, points: 1, type: "single", src: "Exam Q3", refs: ["bonds"],
        prompt: R`Using the bond enthalpies from the table on page 2, calculate $\Delta H$ of the reaction<span class="eq">$\ce{N2(g) + O2(g) -> 2NO(g)}$</span>(the NO molecule has a double bond).`,
        options: [
          { text: R`(A) $-222$ kJ/mol`, correct: false, why: R`Right size, wrong sign: $\sum D(\text{broken}) - \sum D(\text{formed})$.` },
          { text: R`(B) $-829$ kJ/mol`, correct: false, why: R`Not what the table gives.` },
          { text: R`(C) $-93$ kJ/mol`, correct: false, why: R`Not what the table gives.` },
          { text: R`(D) $829$ kJ/mol`, correct: false, why: R`Not what the table gives.` },
          { text: R`(E) $222$ kJ/mol`, correct: true, why: R`Broken: $\ce{N#N} + \ce{O=O} = 941 + 495 = 1436$. Formed: $2(\ce{N=O}) = 2(607) = 1214$. $\Delta H = 1436 - 1214 = +222$ kJ/mol (endothermic).` },
        ],
      },

      // ===================================================== Ions, polarity, octets (4–10)
      {
        n: 4, points: 1, type: "single", src: "Exam Q4", refs: ["pt"],
        prompt: R`What is the electron configuration of the Iron(III) cation, $\ce{Fe^3+}$?`,
        options: [
          { text: R`(A) $[\ce{Ar}]\,4s^2 3d^6$`, correct: false, why: R`That is neutral Fe (26 electrons).` },
          { text: R`(B) $[\ce{Ar}]\,4s^2 3d^3$`, correct: false, why: R`Removes $3d$ electrons first. Transition metals lose $4s$ before $3d$.` },
          { text: R`(C) $[\ce{Ar}]\,3d^5$`, correct: true, why: R`Fe: $[\ce{Ar}]4s^23d^6$. Remove both $4s$, then one $3d$: $[\ce{Ar}]3d^5$ (23 electrons).` },
          { text: R`(D) $[\ce{Ar}]\,4s^2 4p^3$`, correct: false, why: R`33 electrons, that is As. No $3d$ at all.` },
          { text: R`(E) $[\ce{Ar}]\,4s^2 4p^6$`, correct: false, why: R`Not a valid ground state: it skips the $3d$ subshell entirely.` },
        ],
      },
      {
        n: 5, points: 1, type: "single", src: "Exam Q5", refs: ["en"],
        prompt: R`Which of the following molecules has the largest dipole moment?`,
        options: [
          { text: R`(A) $\ce{I2}$`, correct: false, why: R`Homonuclear: $\Delta\chi = 0$, $\mu = 0$.` },
          { text: R`(B) $\ce{HI}$`, correct: false, why: R`$\Delta\chi = 2.5 - 2.1 = 0.4$ (0.44 D).` },
          { text: R`(C) $\ce{HBr}$`, correct: false, why: R`$\Delta\chi = 2.8 - 2.1 = 0.7$ (0.82 D).` },
          { text: R`(D) $\ce{HF}$`, correct: true, why: R`$\Delta\chi = 4.0 - 2.1 = 1.9$, the largest; measured 1.82 D.` },
          { text: R`(E) $\ce{H2}$`, correct: false, why: R`Homonuclear: $\mu = 0$.` },
        ],
      },
      {
        n: 6, points: 1, type: "single", src: "Exam Q6", refs: ["en"],
        prompt: R`Which of the following bonds is most polar?`,
        options: [
          { text: "(A) I-I", correct: false, why: R`$\Delta\chi = 0$.` },
          { text: "(B) H-I", correct: false, why: R`$\Delta\chi = 0.4$.` },
          { text: "(C) H-Br", correct: false, why: R`$\Delta\chi = 0.7$.` },
          { text: "(D) H-F", correct: true, why: R`$\Delta\chi = 1.9$, the largest difference.` },
          { text: "(E) H-H", correct: false, why: R`$\Delta\chi = 0$.` },
        ],
      },
      {
        n: 7, points: 1, type: "single", src: "Exam Q7", refs: ["pt"],
        prompt: R`How many hydrogen atoms must phosphorous (P) bind to in order to achieve an octet of valence electrons?`,
        options: [
          { text: "(A) 1", correct: false, why: R`$5 + 1 = 6$.` },
          { text: "(B) 2", correct: false, why: R`$5 + 2 = 7$.` },
          { text: "(C) 3", correct: true, why: R`P is group 5A: 5 valence electrons, needs $8 - 5 = 3$. $\ce{PH3}$ (3 bonds + 1 lone pair), like $\ce{NH3}$.` },
          { text: "(D) 4", correct: false, why: R`$\ce{PH4}$ would need a $+1$ charge ($\ce{PH4+}$) to keep an octet.` },
          { text: "(E) 5", correct: false, why: R`10 electrons around P: an expanded octet, not an octet.` },
        ],
      },
      {
        n: 8, points: 1, type: "single", src: "Exam Q8",
        prompt: R`What is the maximum number of triple bonds that a nitrogen atom can form?`,
        options: [
          { text: "(A) 0", correct: false, why: R`$\ce{N#N}$ and $\ce{HC#N}$ both have N in a triple bond.` },
          { text: "(B) 1", correct: true, why: R`Neutral N makes 3 bonds ($N + B = 5$, $N + 2B = 8 \Rightarrow B = 3$). One triple bond uses all three; a second would need $B = 6$.` },
          { text: "(C) 2", correct: false, why: R`Two triple bonds = 6 bonds = 12 shared electrons around N.` },
          { text: "(D) 3", correct: false, why: R`Far past an octet.` },
          { text: "(E) 4", correct: false, why: R`Far past an octet.` },
        ],
      },
      {
        n: 9, points: 1, type: "single", src: "Exam Q9",
        prompt: R`The Lewis structure of water is shown on the right. Calculate the formal charge on the oxygen atom and compare it to its oxidation state.`,
        figure: { img: "img/q09_water.png", alt: "Lewis structure of water: O with two lone pairs bonded to two H" },
        options: [
          { text: R`(A) Formal charge $= 0$, Oxidation state $= 0$`, correct: false, why: R`The formal charge is right; the oxidation state is not.` },
          { text: R`(B) Formal charge $= -2$, Oxidation state $= -2$`, correct: false, why: R`Formal charge splits each bond equally: O keeps 1 electron per bond, not 2.` },
          { text: R`(C) Formal charge $= 0$, Oxidation state $= -2$`, correct: true, why: R`$\mathrm{FC} = 6 - 4 - 2 = 0$ (bonds shared equally). Oxidation state gives <em>all</em> bonding electrons to the more electronegative O: $6 - (4 + 4) = -2$ (each H is $+1$).` },
          { text: R`(D) Formal charge $= -2$, Oxidation state $= 0$`, correct: false, why: R`Swaps the two: the oxidation state is $-2$, the formal charge 0.` },
          { text: R`(E) Formal charge $= +2$, Oxidation state $= -2$`, correct: false, why: R`$6 - 4 - 2 = 0$, not $+2$.` },
        ],
      },
      {
        n: 10, points: 1, type: "single", src: "Exam Q10",
        prompt: R`On scratch paper, draw the Lewis structure of ammonia ($\ce{NH3}$). How many lone valence electron pairs does $\ce{NH3}$ have?`,
        options: [
          { text: "(A) 0", correct: false, why: R`8 valence electrons, only 6 in bonds.` },
          { text: "(B) 1", correct: true, why: R`$5 + 3(1) = 8$ valence electrons. Three N–H bonds use 6; the last 2 are one lone pair on N.` },
          { text: "(C) 2", correct: false, why: R`That is water (O has 6 valence electrons, 2 bonds).` },
          { text: "(D) 3", correct: false, why: R`Would need 12 electrons.` },
          { text: "(E) 4", correct: false, why: R`Would need 14 electrons.` },
        ],
      },

      // ===================================================== Hydrogen peroxide (11–14)
      {
        n: 11, points: 1, type: "single", src: "Exam Q11 (Q11–14: H₂O₂)", refs: ["shapes"],
        prompt: R`In questions 11–14, consider the molecule of hydrogen peroxide, $\ce{H2O2}$. Its Lewis structure is shown on the right.<br><br>What is the electron-domain geometry about each of the oxygen atoms in hydrogen peroxide?`,
        figure: { img: "img/q11_h2o2.png", alt: "Lewis structure H–O–O–H with two lone pairs on each O" },
        options: [
          { text: "(A) Linear", correct: false, why: R`Linear needs 2 electron domains.` },
          { text: "(B) Bent", correct: false, why: R`Bent is a <em>molecular</em> geometry, not an electron-domain geometry.` },
          { text: "(C) Trigonal planar", correct: false, why: R`That needs 3 electron domains.` },
          { text: "(D) Tetrahedral", correct: true, why: R`Each O has 2 bonds (to H and to O) + 2 lone pairs = 4 electron domains: tetrahedral.` },
          { text: "(E) Trigonal pyramidal", correct: false, why: R`A molecular geometry (4 domains, 1 lone pair), not an electron-domain geometry.` },
        ],
      },
      {
        n: 12, points: 1, type: "single", src: "Exam Q12", refs: ["shapes"],
        prompt: R`What is the molecular geometry about each of the oxygen atoms in hydrogen peroxide?`,
        figure: { img: "img/q11_h2o2.png", alt: "Lewis structure H–O–O–H with two lone pairs on each O" },
        options: [
          { text: "(A) Linear", correct: false, why: R`Lone pairs bend the two bonds away from 180°.` },
          { text: "(B) Bent", correct: true, why: R`4 domains, 2 of them lone pairs: the 2 atoms around O form a bent shape, as in water.` },
          { text: "(C) Trigonal planar", correct: false, why: R`Needs 3 bonded atoms around O.` },
          { text: "(D) Tetrahedral", correct: false, why: R`That is the electron-domain geometry; molecular geometry counts only atoms.` },
          { text: "(E) Trigonal pyramidal", correct: false, why: R`Needs 3 bonded atoms + 1 lone pair (like $\ce{NH3}$).` },
        ],
      },
      {
        n: 13, points: 1, type: "single", src: "Exam Q13", refs: ["shapes"],
        prompt: R`What is the approximate value of the H–O–O bond angle in hydrogen peroxide?`,
        figure: { img: "img/q11_h2o2.png", alt: "Lewis structure H–O–O–H with two lone pairs on each O" },
        options: [
          { text: R`(A) Approximately 90°`, correct: false, why: R`90° is not a tetrahedral-based angle in VSEPR.` },
          { text: R`(B) Slightly less than 109.5°`, correct: true, why: R`Tetrahedral electron domains, and the two lone pairs repel more strongly than bonding pairs, squeezing the bond angle below 109.5° (as in water, 104.5°).` },
          { text: R`(C) 109.5° exactly`, correct: false, why: R`Exactly 109.5° requires 4 identical bonding domains ($\ce{CH4}$); lone pairs compress it.` },
          { text: R`(D) Slightly less than 120°`, correct: false, why: R`That is for 3 electron domains with a lone pair ($sp^2$, e.g. $\ce{SO2}$).` },
          { text: R`(E) 120° exactly`, correct: false, why: R`Trigonal planar angle; O here has 4 domains.` },
        ],
        note: R`Fine print: the VSEPR answer is (B). The measured gas-phase H–O–O angle is only about 95° (about 102° in the crystal), smaller than VSEPR predicts, so in reality (A) is not far off. The exam tests the VSEPR prediction.`,
      },
      {
        n: 14, points: 1, type: "single", src: "Exam Q14",
        prompt: R`What is the hybridization state of each of the oxygen atoms in hydrogen peroxide?`,
        figure: { img: "img/q11_h2o2.png", alt: "Lewis structure H–O–O–H with two lone pairs on each O" },
        options: [
          { text: R`(A) $sp$`, correct: false, why: R`$sp$ gives 2 domains.` },
          { text: R`(B) $sp^2$`, correct: false, why: R`$sp^2$ gives 3 domains.` },
          { text: R`(C) $sp^3$`, correct: true, why: R`4 electron domains need 4 hybrid orbitals: one $s$ + three $p$ = $sp^3$.` },
          { text: R`(D) $sp^4$`, correct: false, why: R`Does not exist: there are only three $p$ orbitals.` },
          { text: "(E) No hybridization", correct: false, why: R`In this model, 4 tetrahedral domains require $sp^3$ hybrids.` },
        ],
      },

      // ===================================================== Ketene (15–18)
      {
        n: 15, points: 1, type: "single", src: "Exam Q15 (Q15–18: ketene)",
        prompt: R`In questions 15–20, consider the molecule of ketene, $\ce{H2CCO}$. Its Lewis structure is shown on the right.<br><br>How many sigma ($\sigma$) and how many pi ($\pi$) bonds are there in the ketene molecule?`,
        figure: { img: "img/q15_ketene.png", alt: "Ketene: H2C=C=O with two lone pairs on O" },
        options: [
          { text: R`(A) 2 sigma and 4 pi bonds`, correct: false, why: R`Every bond has exactly one $\sigma$; there are 4 bonds, so 4 $\sigma$.` },
          { text: R`(B) 4 sigma and 2 pi bonds`, correct: true, why: R`Bonds: 2 C–H, 1 C=C, 1 C=O. One $\sigma$ in each = 4 $\sigma$; each double bond adds one $\pi$ = 2 $\pi$.` },
          { text: R`(C) 4 sigma and 4 pi bonds`, correct: false, why: R`A double bond is $1\sigma + 1\pi$, not $1\sigma + 2\pi$.` },
          { text: R`(D) 2 sigma and 2 pi bonds`, correct: false, why: R`Forgets the two C–H $\sigma$ bonds.` },
          { text: R`(E) 4 sigma and 0 pi bonds`, correct: false, why: R`Each double bond contains a $\pi$ bond.` },
        ],
      },
      {
        n: 16, points: 1, type: "single", src: "Exam Q16",
        prompt: R`What is the hybridization state of the left carbon atom in the above ketene structure?`,
        figure: { img: "img/q15_ketene.png", alt: "Ketene: H2C=C=O with two lone pairs on O" },
        options: [
          { text: R`(A) $sp$`, correct: false, why: R`That is the right carbon (2 domains).` },
          { text: R`(B) $sp^2$`, correct: true, why: R`Left C: 2 C–H + 1 C=C = 3 electron domains (a double bond counts once), trigonal planar, $sp^2$. Its leftover $p$ orbital forms the C=C $\pi$ bond.` },
          { text: R`(C) $sp^3$`, correct: false, why: R`$sp^3$ needs 4 domains (4 single bonds).` },
          { text: R`(D) $sp^4$`, correct: false, why: R`Does not exist.` },
          { text: "(E) No hybridization", correct: false, why: R`3 domains at 120° require $sp^2$.` },
        ],
      },
      {
        n: 17, points: 1, type: "single", src: "Exam Q17",
        prompt: R`What is the hybridization state of the right carbon atom in the above ketene structure?`,
        figure: { img: "img/q15_ketene.png", alt: "Ketene: H2C=C=O with two lone pairs on O" },
        options: [
          { text: R`(A) $sp$`, correct: true, why: R`Right C: C=C and C=O = 2 electron domains, linear (180°), $sp$. Two leftover $p$ orbitals form the two $\pi$ bonds.` },
          { text: R`(B) $sp^2$`, correct: false, why: R`That is the left carbon (3 domains).` },
          { text: R`(C) $sp^3$`, correct: false, why: R`Needs 4 domains.` },
          { text: R`(D) $sp^4$`, correct: false, why: R`Does not exist.` },
          { text: "(E) No hybridization", correct: false, why: R`Two domains at 180° require $sp$.` },
        ],
      },
      {
        n: 18, points: 1, type: "single", src: "Exam Q18",
        prompt: R`Which orbital(s) of the right carbon atom are involved in pi bonding in ketene?`,
        figure: { img: "img/q15_ketene.png", alt: "Ketene: H2C=C=O with two lone pairs on O" },
        options: [
          { text: R`(A) $2s$`, correct: false, why: R`The $2s$ is used up in the $sp$ hybrids.` },
          { text: R`(B) $2p$`, correct: true, why: R`$\pi$ bonds come from side-on overlap of <em>unhybridized</em> $p$ orbitals. The $sp$ carbon keeps two $2p$ orbitals, perpendicular to each other: one $\pi$ to C, one to O.` },
          { text: R`(C) $sp$ hybrids`, correct: false, why: R`Hybrid orbitals form the $\sigma$ bonds (and hold lone pairs), not $\pi$ bonds.` },
          { text: R`(D) $sp^2$ hybrids`, correct: false, why: R`This carbon is $sp$, and hybrids make $\sigma$ bonds anyway.` },
          { text: R`(E) $sp^3$ hybrids`, correct: false, why: R`Not this carbon's hybridization, and hybrids make $\sigma$ bonds.` },
        ],
      },

      // ===================================================== Benzene (19–20)
      {
        n: 19, points: 1, type: "single", src: "Exam Q19",
        prompt: R`The Lewis structures of benzene are shown on the right. What is the order of each of the C-C bonds in benzene?`,
        figure: { img: "img/q19_benzene.png", alt: "Two resonance structures of benzene" },
        options: [
          { text: "(A) 1", correct: false, why: R`Each bond is double in one of the two resonance structures.` },
          { text: "(B) 1.5", correct: true, why: R`Each C–C is single in one structure and double in the other: $(1 + 2)/2 = 1.5$. All six bonds are identical (1.39 Å).` },
          { text: "(C) 2", correct: false, why: R`Only half the bonds are double in any one structure.` },
          { text: "(D) 6", correct: false, why: R`6 is the number of C–C bonds, not their order.` },
          { text: "(E) Three of the bonds have a bond order of 1 and the other three have a bond order of 2.", correct: false, why: R`That describes one resonance structure. The real molecule is the average: all six bonds are equal.` },
        ],
      },
      {
        n: 20, points: 1, type: "single", src: "Exam Q20", refs: ["bonds"],
        prompt: R`The enthalpy of a typical C–C single bond is 348 kJ/mol, that of a C=C double bond is 614 kJ/mol, and that of a C≡C triple bond is 839 kJ/mol. Based on this information, which of the following is the best prediction for the bond enthalpy of each of the C-C bonds in benzene? The Lewis structures are given in the previous question.`,
        figure: { img: "img/q19_benzene.png", alt: "Two resonance structures of benzene" },
        options: [
          { text: "(A) 348 kJ/mol", correct: false, why: R`That is a pure single bond; benzene's bonds are order 1.5.` },
          { text: "(B) 481 kJ/mol", correct: true, why: R`Bond order 1.5, halfway between single and double: $(348 + 614)/2 = 481$ kJ/mol.` },
          { text: "(C) 614 kJ/mol", correct: false, why: R`That is a pure double bond.` },
          { text: "(D) 839 kJ/mol", correct: false, why: R`That is a triple bond; benzene has none.` },
          { text: "(E) Three of the bonds are 348 kJ/mol and the other three are 614 kJ/mol", correct: false, why: R`Resonance makes all six bonds equivalent.` },
        ],
        note: R`The real value is somewhat higher than 481 because resonance stabilizes benzene beyond the simple average. The question asks for the best prediction from the given data.`,
      },

      // ===================================================== Polarity of furan (21)
      {
        n: 21, points: 1, type: "single", src: "Exam Q21", refs: ["en"],
        prompt: R`Consider the molecule of furan. Its Lewis structure is shown. Is furan polar? If yes, consider which side of the molecule has partial negative charge and which – partial positive, and indicate the direction of the dipole moment (←, ↑, →, or ↓) given the orientation of the molecule as shown. Reminder: molecular dipole moment goes from the positive to negative charge.`,
        figure: { img: "img/q21_furan.png", alt: "Furan: five-membered ring with O at the bottom, four C–H at the top and sides" },
        options: [
          { text: "(A) Polar, the dipole vector points up ↑.", correct: false, why: R`Up points toward the carbons, the positive side.` },
          { text: "(B) Polar, the dipole vector points to the right →.", correct: false, why: R`The molecule is left–right symmetric, so the horizontal components cancel.` },
          { text: "(C) Polar, the dipole vector points down ↓.", correct: true, why: R`O (3.5) is far more electronegative than C (2.5), so the bottom of the ring carries $\delta^-$. Left and right C–O dipoles cancel horizontally and add vertically: from + (top) to − (O at the bottom), pointing down.` },
          { text: "(D) Polar, the dipole vector points to the left ←.", correct: false, why: R`Left–right symmetry cancels any horizontal component.` },
          { text: "(E) Non-polar, zero dipole moment.", correct: false, why: R`The O is on one side only, so the C–O dipoles do not cancel.` },
        ],
      },

      // ===================================================== NO radical (22–23)
      {
        n: 22, points: 1, type: "single", src: "Exam Q22",
        prompt: R`Consider two possible Lewis structures of the nitric oxide (NO) radical given below. What are the formal charges for each of the atoms in each structure? (Listed as N, O.)`,
        figure: { img: "img/q22_no_structures.png", alt: "Structure 1: N with a lone pair and single electron, double-bonded to O with two lone pairs. Structure 2: N with two lone pairs, double-bonded to O with one lone pair and a single electron." },
        options: [
          { text: R`(A) Structure 1: $0,\ 0$ · Structure 2: $-1,\ +1$`, correct: true, why: R`Structure 1: N $5 - 3 - 2 = 0$, O $6 - 4 - 2 = 0$. Structure 2: N $5 - 4 - 2 = -1$, O $6 - 3 - 2 = +1$.` },
          { text: R`(B) Structure 1: $0,\ 0$ · Structure 2: $+1,\ -1$`, correct: false, why: R`Structure 2 has 4 nonbonding electrons on N and 3 on O, so N is $-1$ and O is $+1$, not the reverse.` },
          { text: R`(C) Structure 1: $-1,\ +1$ · Structure 2: $0,\ 0$`, correct: false, why: R`Swaps the two structures.` },
          { text: R`(D) Structure 1: $+1,\ -1$ · Structure 2: $0,\ 0$`, correct: false, why: R`Structure 1 has 3 nonbonding electrons on N and 4 on O: both formal charges are 0.` },
          { text: R`(E) Structure 1: $+1,\ -1$ · Structure 2: $-1,\ +1$`, correct: false, why: R`Structure 1 is $0, 0$.` },
        ],
      },
      {
        n: 23, points: 1, type: "single", src: "Exam Q23",
        prompt: R`Based on the formal charges in the previous question, which of these two structures is most important? Choose among these four possible answers:`,
        figure: { img: "img/q22_no_structures.png", alt: "The two NO structures from question 22" },
        options: [
          { text: "(A) Structure 1", correct: true, why: R`All formal charges zero. Structure 2 separates charge and puts $+1$ on the more electronegative O.` },
          { text: "(B) Structure 2", correct: false, why: R`Has formal charges $-1/+1$, with the positive charge on O. Less favorable.` },
          { text: "(C) Both are equally important", correct: false, why: R`They are not equivalent: different formal charges.` },
          { text: "(D) Neither one is correct because they both violate the octet rule", correct: false, why: R`NO has 11 valence electrons; with an odd count, an octet on every atom is impossible. Violating the octet is unavoidable, so formal charge decides between the structures.` },
        ],
      },

      // ===================================================== MO sketches (24–26)
      {
        n: 24, points: 1, type: "single", src: "Exam Q24 (Q24–26: MO sketches)",
        prompt: R`In questions 24–26, consider the following sketches (1–8) representing different molecular orbitals (MOs) that can be obtained by combining the $s$ and $p$ atomic orbitals on two different atoms.<br><br>Which sketches correspond to anti-bonding MOs? Name all anti-bonding combinations shown.`,
        figure: { img: "img/q24_mo_sketches.png", alt: "Eight MO sketches: (1) s+s same sign, (2) s+p same sign, (3) side-by-side p opposite sign, (4) end-on p opposite sign, (5) s+s opposite sign, (6) s+p opposite sign, (7) side-by-side p same sign, (8) end-on p same sign" },
        options: [
          { text: "(A) 1, 5", correct: false, why: R`(1) has two same-sign (white) $s$ lobes overlapping: bonding. Only (5) is antibonding here.` },
          { text: "(B) 1, 2, 4, 5, 6, 8", correct: false, why: R`Mixes bonding (1, 2, 8) with antibonding. Check whether the overlapping lobes have the same or opposite shading.` },
          { text: "(C) 3, 7", correct: false, why: R`Those are the two $\pi$ combinations; only (3) is antibonding.` },
          { text: "(D) 3, 4, 5, 6", correct: true, why: R`Antibonding = the lobes that overlap have <em>opposite</em> signs (white meets grey), leaving a node between the nuclei: (3) $\pi^*$, (4) $\sigma^*_{2p}$, (5) $\sigma^*_s$, (6) $s$–$p$ $\sigma^*$.` },
          { text: "(E) 1, 2, 7, 8", correct: false, why: R`Those are the <em>bonding</em> combinations (same-sign overlap).` },
        ],
      },
      {
        n: 25, points: 1, type: "single", src: "Exam Q25",
        prompt: R`Which of the above sketches correspond to pi MOs, including both bonding and anti-bonding orbitals? Name all pi MOs shown.`,
        figure: { img: "img/q24_mo_sketches.png", alt: "The eight MO sketches from question 24" },
        options: [
          { text: "(A) 1, 7, 8", correct: false, why: R`(1) and (8) lie along the internuclear axis: $\sigma$.` },
          { text: "(B) 1, 2, 4, 5, 6, 8", correct: false, why: R`Those are all the $\sigma$ MOs.` },
          { text: "(C) 3, 7", correct: true, why: R`$\pi$ = side-by-side overlap of parallel $p$ orbitals, with density above and below the axis: (7) bonding $\pi$, (3) antibonding $\pi^*$.` },
          { text: "(D) 3, 4, 5, 6", correct: false, why: R`That is the antibonding set; (4), (5), (6) are $\sigma$-type.` },
          { text: "(E) 1, 2, 7, 8", correct: false, why: R`That is the bonding set.` },
        ],
      },
      {
        n: 26, points: 1, type: "single", src: "Exam Q26",
        prompt: R`Which one of the above sketches corresponds to a $\sigma^*_{2p}$ molecular orbital?`,
        figure: { img: "img/q24_mo_sketches.png", alt: "The eight MO sketches from question 24" },
        options: [
          { text: "(A) 3", correct: false, why: R`(3) is side-on: $\pi^*_{2p}$.` },
          { text: "(B) 4", correct: true, why: R`End-on $p$–$p$ overlap (along the axis) with opposite-sign lobes meeting in the middle: $\sigma^*_{2p}$.` },
          { text: "(C) 6", correct: false, why: R`(6) combines an $s$ and a $p$ orbital, not two $2p$.` },
          { text: "(D) 7", correct: false, why: R`(7) is the bonding $\pi_{2p}$.` },
          { text: "(E) 8", correct: false, why: R`(8) is end-on with same-sign overlap: the bonding $\sigma_{2p}$.` },
        ],
      },

      // ===================================================== F2+ MO diagram (27–29)
      {
        n: 27, points: 1, type: "single", src: "Exam Q27 (Q27–29: F₂⁺)",
        prompt: R`Shown below is an unpopulated MO diagram for homonuclear diatomic molecules or ions. IMPORTANT: This diagram includes only valence orbitals.<br><br>In questions 27–29, consider specifically the $\ce{F2+}$ molecular cation. Complete the diagram (on scratch paper) by indicating the electron populations for all valence molecular orbitals, then answer:<br><br>What is the bond order in $\ce{F2+}$?`,
        figure: { img: "img/q27_mo_diagram.svg", alt: "Empty valence MO diagram: sigma 2s, sigma* 2s, sigma 2p, two pi 2p, two pi* 2p, sigma* 2p, between atomic 2s and 2p levels" },
        options: [
          { text: "(A) 0", correct: false, why: R`That would need equal bonding and antibonding electrons.` },
          { text: "(B) 0.5", correct: false, why: R`Not what the electron count gives.` },
          { text: "(C) 1", correct: false, why: R`That is neutral $\ce{F2}$ (14 valence electrons, $\pi^{*4}$).` },
          { text: "(D) 1.5", correct: true, why: R`Valence electrons: $2(7) - 1 = 13$. Fill: $\sigma_{2s}^2\,\sigma_{2s}^{*2}\,\sigma_{2p}^2\,\pi_{2p}^4\,\pi_{2p}^{*3}$. Bonding $= 2 + 2 + 4 = 8$, antibonding $= 2 + 3 = 5$. BO $= (8 - 5)/2 = 1.5$.` },
          { text: "(E) 2", correct: false, why: R`That is $\ce{O2}$ (12 valence electrons).` },
        ],
        note: R`Removing an electron from $\ce{F2}$ takes it from an <em>antibonding</em> $\pi^*$ orbital, so $\ce{F2+}$ has a stronger, shorter bond than $\ce{F2}$ (BO 1.5 vs 1).`,
      },
      {
        n: 28, points: 1, type: "single", src: "Exam Q28",
        prompt: R`Name the highest-energy molecular orbital in $\ce{F2+}$ occupied by at least one electron.`,
        figure: { img: "img/q27_mo_diagram.svg", alt: "Empty valence MO diagram (same as question 27)" },
        options: [
          { text: R`(A) $\sigma^*_{2s}$`, correct: false, why: R`Filled, but far below the $2p$-derived MOs.` },
          { text: R`(B) $\sigma_{2p}$`, correct: false, why: R`Filled; the two $\pi_{2p}$ and $\pi^*_{2p}$ sets lie above it.` },
          { text: R`(C) $\pi_{2p}$`, correct: false, why: R`Filled (4 electrons), but the $\pi^*_{2p}$ above it is also occupied.` },
          { text: R`(D) $\pi^*_{2p}$`, correct: true, why: R`The 13th electron sits in $\pi^*_{2p}$ ($\pi^{*3}$). The $\sigma^*_{2p}$ above it is empty.` },
          { text: R`(E) $\sigma^*_{2p}$`, correct: false, why: R`Empty: filling it would take 15–16 valence electrons.` },
        ],
      },
      {
        n: 29, points: 1, type: "single", src: "Exam Q29",
        prompt: R`Referring back to the 8 sketches on the previous page, which sketch represents the $\sigma^*_{2p}$ molecular orbital in $\ce{F2+}$?`,
        figure: { img: "img/q24_mo_sketches.png", alt: "The eight MO sketches from question 24" },
        options: [
          { text: "(A) 2", correct: false, why: R`(2) mixes $s$ and $p$ and is bonding.` },
          { text: "(B) 3", correct: false, why: R`(3) is $\pi^*_{2p}$.` },
          { text: "(C) 4", correct: true, why: R`Same answer as Q26: end-on $p$–$p$, opposite-sign overlap. (It is empty in $\ce{F2+}$, but the question only asks which sketch it is.)` },
          { text: "(D) 7", correct: false, why: R`(7) is bonding $\pi_{2p}$.` },
          { text: "(E) 8", correct: false, why: R`(8) is bonding $\sigma_{2p}$.` },
        ],
      },
    ],
  };
})();
