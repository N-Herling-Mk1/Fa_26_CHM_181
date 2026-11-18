/* Quiz 3 — Chapter 9: Molecular Geometry and Bonding Theories.
 * Every question posed in the Ch. 9 lecture deck (181.9_Ch_9_2026.pptx): the YOUR TURN and
 * "Example" slides, every "Example from homework / past exam" screenshot (19 hidden slides
 * included), and questions asked inline on content slides (why 104.5°, does He2 exist, is O2
 * paramagnetic). Multi-part homework items are split one part per question. Typed homework
 * answers (formulas, electron counts, bond lengths) are numeric or multiple-choice here.
 * Field reference: quizzes/quiz02-ch08-chemical-bonding/data.js.
 */
(function () {
  const R = String.raw;
  const BO = R`$\text{BO} = \tfrac12(\text{bonding} - \text{antibonding electrons})$`;
  const GEOS = ["linear", "trigonal planar", "tetrahedral", "trigonal bipyramidal", "octahedral"];

  window.QUIZ = {
    id: "chem181-quiz03-ch09-geometry",
    course: "CHEM 181",
    title: "Quiz 3 — Ch. 9: Molecular Geometry & Bonding Theories",
    scoring: "Every question is worth 1 point. Single-choice and numeric questions are all or nothing; match questions score per item; the select-all question scores right-minus-wrong per option. An unanswered question scores 0.",
    toolsNote: R`VSEPR: count electron domains (a double or triple bond counts as one domain) → electron-domain geometry → keep only the bonded atoms → molecular geometry. Hybridization: 2 domains $sp$, 3 $sp^2$, 4 $sp^3$, 5 $sp^3d$, 6 $sp^3d^2$. MO theory: ${BO}. Tags show the source slide; "hidden" means hidden in the slideshow.`,
    refs: {
      shapes: { label: "Electron-domain shapes and angles", img: "img/ref_vsepr_shapes.png", alt: "Linear, trigonal planar, tetrahedral, trigonal bipyramidal and octahedral shapes with angles" },
      en: { label: "Pauling electronegativities", img: "img/ref_electronegativity.png", alt: "Electronegativity periodic table" },
    },
    questions: [
      // ===================================================== Electron domains & VSEPR (1–4)
      {
        n: 1, points: 1, type: "single", src: "Slides 6–7 · YOUR TURN · hidden",
        prompt: R`Suppose an $\ce{AB3}$ molecule has the Lewis structure shown. Does this structure follow the octet rule?`,
        figure: { img: "img/s06_ab3.png", alt: "A double-bonded to one B and single-bonded to two B, with one lone pair on A" },
        options: [
          { text: "No, there are 10 electrons around A.", correct: true, why: R`Count every electron A is surrounded by: double bond 4 + two single bonds 4 + lone pair 2 = 10. That is an expanded octet.` },
          { text: "Yes, there are 8 electrons around A.", correct: false, why: R`Counting the double bond as 2 electrons instead of 4 gives 8; it shares 4.` },
          { text: "Yes, there are three bonds and one electron pair around A.", correct: false, why: R`Counts bonds, not electrons. One of the three bonds is double.` },
          { text: "Yes, there are four bonds around A.", correct: false, why: R`Four bonds would be 8 electrons, but A also has a lone pair: 10.` },
        ],
      },
      {
        n: 2, points: 1, type: "single", src: "Slide 15 · YOUR TURN · hidden",
        prompt: R`For four electron domains, which electron geometry is more preferable: tetrahedral or square-planar?`,
        figure: { img: "img/s15_tet_vs_sqpl.png", alt: "Ball-and-stick models: tetrahedral and square planar" },
        options: [
          { text: "Impossible to tell: the angles between domains depend on the specific molecule.", correct: false, why: R`VSEPR gives one answer for four domains: the arrangement that spreads them farthest apart.` },
          { text: "Square-planar: Different atomic orbitals tend to be arranged at right angles with respect to each other.", correct: false, why: R`$p$ orbitals are at 90°, but VSEPR is about electron-pair repulsion, not native orbital angles (slide 42: they do not fit).` },
          { text: "Tetrahedral: It results in larger angles between the electron domains and therefore weaker electron repulsion.", correct: true, why: R`Tetrahedral puts every pair of domains 109.5° apart; square planar has 90° neighbors. Larger separation = less repulsion = lower energy.` },
          { text: "Tetrahedral, because it results in greater electron repulsion.", correct: false, why: R`Right geometry, backwards reason: the preferred arrangement <em>minimizes</em> repulsion.` },
        ],
      },
      {
        n: 3, points: 1, type: "single", src: "Slide 17 · homework Part E", refs: ["shapes"],
        prompt: R`Select the electron-domain geometry for a molecule with two bonding domains and two nonbonding domains.`,
        options: GEOS.map((g) => ({ text: g[0].toUpperCase() + g.slice(1), correct: g === "tetrahedral",
          why: g === "tetrahedral" ? R`2 + 2 = 4 electron domains. Electron-domain geometry counts lone pairs too, so 4 domains = tetrahedral.` : R`That corresponds to ${{ linear: 2, "trigonal planar": 3, "trigonal bipyramidal": 5, octahedral: 6 }[g]} domains; here there are 4.` })),
      },
      {
        n: 4, points: 1, type: "single", src: "Slide 17 · homework Part F", refs: ["shapes"],
        prompt: R`Select the molecular geometry for a molecule with two bonding domains and two nonbonding domains.`,
        options: [
          { text: "Linear", correct: false, why: R`Linear needs 2 domains total (or 5 with 3 equatorial lone pairs).` },
          { text: "Bent", correct: true, why: R`Tetrahedral domains, but only 2 hold atoms: the bonded atoms form a bent shape, like $\ce{H2O}$ (104.5°).` },
          { text: "Trigonal planar", correct: false, why: R`Needs 3 bonded atoms and no lone pairs.` },
          { text: "Square planar", correct: false, why: R`That is 4 bonding + 2 nonbonding domains (6 total), as in $\ce{XeF4}$.` },
          { text: "Tetrahedral", correct: false, why: R`That is the electron-domain geometry; the molecular geometry ignores the lone pairs.` },
          { text: "Trigonal pyramidal", correct: false, why: R`3 bonding + 1 nonbonding, as in $\ce{NH3}$.` },
          { text: "Square pyramidal", correct: false, why: R`5 bonding + 1 nonbonding (6 domains), as in $\ce{BrF5}$.` },
        ],
      },

      // ===================================================== Bond angles (5–12)
      {
        n: 5, points: 1, type: "single", src: "Slide 21 · example",
        prompt: R`Eyedrops for dry eyes usually contain poly(vinyl alcohol), based on the unstable molecule <em>vinyl alcohol</em> (shown). Predict the approximate value of the <strong>H–O–C</strong> bond angle.`,
        figure: { img: "img/s21_vinyl_alcohol.png", alt: "Vinyl alcohol: H–O–C(H)=C(H)–H with two lone pairs on O" },
        options: [
          { text: R`Slightly smaller than 109.5°`, correct: true, why: R`O has 4 domains (2 bonds, 2 lone pairs): tetrahedral, ideal 109.5°. The larger lone pairs compress the H–O–C angle a little.` },
          { text: R`Exactly 109.5°`, correct: false, why: R`Exactly 109.5° needs 4 equivalent bonding domains ($\ce{CH4}$).` },
          { text: R`Slightly larger than 109.5°`, correct: false, why: R`Lone pairs compress bond angles; they do not open them.` },
          { text: R`About 120°`, correct: false, why: R`120° is for 3 domains; O here has 4.` },
          { text: R`About 90°`, correct: false, why: R`That would be bonding through unhybridized $p$ orbitals, which VSEPR rejects.` },
        ],
      },
      {
        n: 6, points: 1, type: "single", src: "Slide 22 · example",
        prompt: R`For the same vinyl alcohol molecule, predict the approximate value of the <strong>O–C=C</strong> bond angle.`,
        figure: { img: "img/s21_vinyl_alcohol.png", alt: "Vinyl alcohol structure" },
        options: [
          { text: R`Slightly smaller than 120°`, correct: false, why: R`The C=C domain is the larger one, so the angles next to it open, not close.` },
          { text: R`Exactly 120°`, correct: false, why: R`Exact only if all three domains were equivalent.` },
          { text: R`Slightly greater than 120°`, correct: true, why: R`The middle C has 3 bonding domains (two single, one double): trigonal planar, 120°. The bulkier C=C domain pushes the angles adjacent to it, including O–C=C, slightly above 120°.` },
          { text: R`About 109.5°`, correct: false, why: R`That is 4 domains; this carbon has 3.` },
          { text: R`About 180°`, correct: false, why: R`That is 2 domains ($sp$ carbon).` },
        ],
      },
      {
        n: 7, points: 1, type: "single", src: "Slide 23 · past exam Q11", refs: ["shapes"],
        prompt: R`In questions 7–9, consider the molecule of nitrous acid, HONO. Its Lewis structure is shown.<br><br>What is the electron-domain geometry about the first O atom in H<u>O</u>NO?`,
        figure: { img: "img/s23_hono.png", alt: "H–O–N=O with two lone pairs on the first O, one on N and two on the last O" },
        options: [
          { text: "(a) Linear", correct: false, why: R`Needs 2 domains.` },
          { text: "(b) Bent", correct: false, why: R`A molecular geometry, not an electron-domain geometry.` },
          { text: "(c) Tetrahedral", correct: true, why: R`That O has 2 bonds (to H and N) + 2 lone pairs = 4 domains.` },
          { text: "(d) Trigonal pyramidal", correct: false, why: R`A molecular geometry (3 bonds + 1 lone pair).` },
        ],
      },
      {
        n: 8, points: 1, type: "single", src: "Slide 23 · past exam Q12", refs: ["shapes"],
        prompt: R`What is the molecular geometry about the first O atom in H<u>O</u>NO?`,
        figure: { img: "img/s23_hono.png", alt: "HONO Lewis structure" },
        options: [
          { text: "(a) Linear", correct: false, why: R`Lone pairs bend the H–O–N unit.` },
          { text: "(b) Bent", correct: true, why: R`4 tetrahedral domains, 2 of them lone pairs: the atoms around O form a bent shape.` },
          { text: "(c) Tetrahedral", correct: false, why: R`That is the electron-domain geometry.` },
          { text: "(d) Trigonal pyramidal", correct: false, why: R`Needs 3 bonded atoms around O.` },
        ],
      },
      {
        n: 9, points: 1, type: "single", src: "Slide 23 · past exam Q13",
        prompt: R`What is the approximate value of the H–O–N angle in HONO?`,
        figure: { img: "img/s23_hono.png", alt: "HONO Lewis structure" },
        options: [
          { text: R`(a) Slightly smaller than 109.5°`, correct: true, why: R`Tetrahedral domains (109.5°), compressed by the two lone pairs, as in water.` },
          { text: R`(b) 109.5°`, correct: false, why: R`Lone pairs make the bond angle smaller than the ideal tetrahedral value.` },
          { text: R`(c) Slightly smaller than 120°`, correct: false, why: R`That is for 3 domains with a lone pair (the N atom here, not the O).` },
          { text: R`(d) 180°`, correct: false, why: R`Linear needs 2 domains.` },
        ],
      },
      {
        n: 10, points: 1, type: "match", src: "Slide 24 · homework · hidden",
        prompt: R`Give approximate values for the indicated bond angles in the molecule shown.`,
        figure: { img: "img/s24_angles.png", alt: "H3C–C≡N: angle 7 is C–C≡N at the middle carbon, angle 8 is H–C–C at the CH3 carbon" },
        choices: ["90°", "109.5°", "120°", "180°"],
        items: [
          { label: "Angle 7 (C–C≡N)", answer: "180°", why: R`The middle C has 2 domains (C–C single, C≡N triple): linear.` },
          { label: "Angle 8 (H–C–C)", answer: "109.5°", why: R`The $\ce{CH3}$ carbon has 4 single bonds: tetrahedral.` },
        ],
      },
      {
        n: 11, points: 1, type: "single", src: "Slide 25 · homework Part A · hidden",
        prompt: R`The molecule called <em>diazene</em> has the formula $\ce{N2H2}$ and the Lewis structure $\ce{H-N=N-H}$ (one lone pair on each N). Do you expect diazene to be a linear molecule (all four atoms on the same line)?`,
        figure: { img: "img/s25_diazene.png", alt: "Diazene drawn with bent H–N=N–H and a lone pair on each N" },
        options: [
          { text: "Diazene is a linear molecule.", correct: false, why: R`Each N has 3 domains (H, N, lone pair): trigonal planar, so the H–N=N angle is about 120°, not 180°.` },
          { text: "Diazene is not a linear molecule.", correct: true, why: R`Each N: single bond to H + double bond to N + lone pair = 3 domains, $sp^2$. The H–N=N angles are near 120°, so the atoms zig-zag.` },
        ],
      },
      {
        n: 12, points: 1, type: "single", src: "Slide 25 · homework Part B · hidden",
        prompt: R`Do you expect diazene to be planar (all four atoms in the same plane)?`,
        figure: { img: "img/s25_diazene.png", alt: "Diazene structure" },
        options: [
          { text: "Diazene is a planar molecule.", correct: true, why: R`The N=N $\pi$ bond requires the two N $p$ orbitals to stay parallel, which locks both H atoms in the plane (cis or trans, both planar), as in ethylene.` },
          { text: "Diazene is not a planar molecule.", correct: false, why: R`Twisting about N=N would break the $\pi$ overlap, so the molecule stays flat.` },
        ],
      },

      // ===================================================== Beyond the octet (13–15)
      {
        n: 13, points: 1, type: "single", src: "Slide 30 · homework · hidden", refs: ["shapes"],
        prompt: R`An $\ce{AB6}$ molecule has no lone pairs of electrons on the A atom. What is its molecular geometry?`,
        options: [
          { text: "linear", correct: false, why: R`2 domains.` },
          { text: "tetrahedral", correct: false, why: R`4 domains.` },
          { text: "octahedral", correct: true, why: R`6 bonding domains, no lone pairs: octahedral, all angles 90° ($\ce{SF6}$).` },
          { text: "trigonal planar", correct: false, why: R`3 domains.` },
          { text: "trigonal bipyramidal", correct: false, why: R`5 domains.` },
        ],
      },
      {
        n: 14, points: 1, type: "single", src: "Slide 31 · homework Part B", refs: ["shapes"],
        prompt: R`An $\ce{AB4}$ molecule has two lone pairs of electrons on the A atom (in addition to the four B atoms). What is the electron-domain geometry around the A atom?`,
        options: ["T-shaped", "square planar", "square pyramidal", "linear", "trigonal pyramidal", "trigonal bipyramidal", "bent", "tetrahedral", "trigonal planar", "octahedral", "seesaw"].map((t) => ({
          text: t, correct: t === "octahedral",
          why: t === "octahedral" ? R`4 bonds + 2 lone pairs = 6 electron domains: octahedral.`
            : t === "square planar" ? R`That is the molecular geometry (next question), not the electron-domain geometry.`
            : ["T-shaped", "square pyramidal", "trigonal pyramidal", "bent", "seesaw"].includes(t) ? R`A molecular geometry, not an electron-domain geometry.`
            : R`Wrong domain count; there are 6 domains here.`,
        })),
      },
      {
        n: 15, points: 1, type: "single", src: "Slide 31 · homework Part C", refs: ["shapes"],
        prompt: R`For the $\ce{AB4}$ molecule in the previous question, predict the molecular geometry.`,
        options: ["linear", "square planar", "tetrahedral", "square pyramidal", "trigonal bipyramidal", "trigonal pyramidal", "T-shaped", "seesaw", "trigonal planar", "bent", "octahedral"].map((t) => ({
          text: t, correct: t === "square planar",
          why: t === "square planar" ? R`In an octahedron all 6 positions are equivalent; the two lone pairs go opposite each other (180° apart) to minimize repulsion, leaving the 4 B atoms in a square plane ($\ce{XeF4}$).`
            : t === "octahedral" ? R`That is the electron-domain geometry; the molecular geometry ignores the 2 lone pairs.`
            : t === "seesaw" ? R`Seesaw is 4 bonds + 1 lone pair (5 domains, $\ce{SF4}$).`
            : t === "tetrahedral" ? R`Tetrahedral $\ce{AB4}$ has no lone pairs (4 domains).`
            : R`Does not match 4 bonding + 2 nonbonding domains.`,
        })),
      },

      // ===================================================== Polarity (16–17)
      {
        n: 16, points: 1, type: "single", src: "Slides 35–36 · YOUR TURN · hidden", refs: ["en"],
        prompt: R`The molecule $\ce{O=C=S}$ is linear and has a Lewis structure analogous to that of $\ce{CO2}$. Would you expect this molecule to be polar?`,
        options: [
          { text: R`a. Yes, because OCS has different elements than in $\ce{CO2}$.`, correct: false, why: R`Different elements alone do not guarantee polarity; the bond dipoles must fail to cancel.` },
          { text: "b. No, because OCS is linear.", correct: false, why: R`Linear only guarantees cancellation when the two bond dipoles are equal ($\ce{CO2}$).` },
          { text: "c. Yes, because O and S have different electronegativities, and CO and CS bond dipoles do not cancel each other.", correct: true, why: R`O (3.5) vs S (2.5): the C=O dipole (Δχ = 1.0) is much larger than the C=S dipole (Δχ = 0). Pointing in opposite directions, they leave a net dipole toward O.` },
          { text: "d. No, because O and S have similar electronegativities, and CO and CS bond dipoles cancel each other.", correct: false, why: R`3.5 vs 2.5 is not similar.` },
        ],
      },
      {
        n: 17, points: 1, type: "multi", src: "Slide 37 · homework", refs: ["en"],
        prompt: R`Which of these have nonzero dipole moments? Select all that apply.`,
        options: [
          { img: "img/s37_dcb_ortho.png", alt: "ortho-dichlorobenzene: Cl on adjacent carbons", correct: true, why: R`<em>ortho</em>: the two C–Cl dipoles are 60° apart and add to a net dipole.` },
          { img: "img/s37_dcb_meta.png", alt: "meta-dichlorobenzene: Cl separated by one carbon", correct: true, why: R`<em>meta</em>: 120° apart, a smaller but nonzero net dipole.` },
          { img: "img/s37_dcb_para.png", alt: "para-dichlorobenzene: Cl on opposite carbons", correct: false, why: R`<em>para</em>: the C–Cl dipoles point in exactly opposite directions and cancel: $\mu = 0$.` },
          { img: "img/s37_ch2f2.png", alt: "Difluoromethane CH2F2 ball-and-stick model", correct: true, why: R`Difluoromethane is tetrahedral with both F on one side: the C–F dipoles add (toward the F side).` },
        ],
      },

      // ===================================================== Valence bond theory (18–22)
      {
        n: 18, points: 1, type: "single", src: "Slide 40 · homework · hidden",
        prompt: R`Which sketch illustrates the overlap between the $2s$ orbital on one atom and the $2p_z$ orbital on the other atom?`,
        options: [
          { img: "img/s40_sketch1.png", alt: "Two spheres overlapping", correct: false, why: R`Two spherical orbitals: $s$ with $s$.` },
          { img: "img/s40_sketch2.png", alt: "A dumbbell p orbital overlapping end-on with a sphere", correct: true, why: R`A two-lobed $2p_z$ on the left overlaps head-on with a spherical $2s$ on the right: an $s$–$p$ $\sigma$ overlap.` },
          { img: "img/s40_sketch3.png", alt: "Two dumbbell p orbitals overlapping end-on", correct: false, why: R`Both atoms contribute two-lobed $p$ orbitals: $2p_z$ with $2p_z$ end-on.` },
        ],
      },
      {
        n: 19, points: 1, type: "numeric", src: "Slide 41 · from homework",
        prompt: R`From the potential-energy curve for $\ce{H2}$, what is the bond length in $\ce{H2}$?`,
        figure: { img: "img/s41_h2_curve.png", alt: "Energy versus H–H distance for H2: minimum of −436 kJ/mol at 0.74 Å" },
        unit: "Å", answer: 0.74, tol: 0.005,
        why: R`The bond length is the distance at the energy minimum, where attraction and repulsion balance: 0.74 Å.`,
      },
      {
        n: 20, points: 1, type: "numeric", src: "Slide 41 · from homework",
        prompt: R`From the same curve, what is the bond enthalpy (bond energy) of $\ce{H2}$?`,
        figure: { img: "img/s41_h2_curve.png", alt: "Energy versus H–H distance for H2" },
        unit: "kJ/mol", answer: 436, tol: 1,
        why: R`The well depth is $-436$ kJ/mol relative to separated atoms. Bond enthalpy is the energy needed to break the bond, so it is reported as positive: $+436$ kJ/mol (Table 8.3).`,
      },
      {
        n: 21, points: 1, type: "single", src: "Slide 42 · posed on slide (answer: slide 51)",
        prompt: R`Oxygen is $1s^22s^22p^4$. If it bonded with two of its $2p$ orbitals, which are at 90° to each other, the H–O–H angle would be 90°. Why then is the bond angle in $\ce{H2O}$ 104.5°?`,
        options: [
          { text: R`O is $sp^3$ hybridized: its four hybrid orbitals point to the corners of a tetrahedron (109.5°); two hold the O–H bonds and two the lone pairs, which compress the angle to 104.5°.`, correct: true, why: R`Slide 51. Four electron domains need four equivalent directional orbitals, $sp^3$; lone-pair repulsion takes 109.5° down to 104.5°.` },
          { text: R`The $2p$ orbitals are actually at 104.5° to each other.`, correct: false, why: R`The three $2p$ orbitals are along the $x$, $y$, $z$ axes: exactly 90°.` },
          { text: R`The lone pairs push the bonds apart, widening 90° to 104.5°.`, correct: false, why: R`Lone pairs <em>compress</em> bond angles. The starting point is the 109.5° of $sp^3$ hybrids, not 90°.` },
          { text: R`O is $sp^2$ hybridized, so the angle is close to 120°.`, correct: false, why: R`O has 4 domains (2 bonds + 2 lone pairs): $sp^3$, not $sp^2$.` },
        ],
      },
      {
        n: 22, points: 1, type: "single", src: "Slides 49–50 · example",
        prompt: R`How many unhybridized $2p$ orbitals remain on an atom in an $sp^3$ hybridized state?`,
        options: [
          { text: "a. One", correct: false, why: R`That is $sp^2$ (one $p$ left over).` },
          { text: "b. Two", correct: false, why: R`That is $sp$ (two $p$ left over).` },
          { text: "c. Three", correct: false, why: R`That would be no hybridization of the $p$ set at all.` },
          { text: "d. Zero", correct: true, why: R`$sp^3$ uses the $2s$ and all three $2p$ orbitals: $1 + 3 = 4$ hybrids, nothing left over.` },
        ],
      },

      // ===================================================== Hybridization (23–25)
      {
        n: 23, points: 1, type: "match", src: "Slide 53 · homework",
        prompt: R`What is the hybridization of the carbon atoms in the allene molecule, $\ce{H2C=C=CH2}$?`,
        choices: ["sp³d²", "sp³", "sp²", "sp", "sp³d"],
        items: [
          { label: "Terminal carbons ($\\ce{CH2}$)", answer: "sp²", why: R`Each terminal C: 2 C–H + 1 C=C = 3 domains, trigonal planar, $sp^2$. (The homework question.)` },
          { label: "Central carbon", answer: "sp", why: R`Two C=C double bonds = 2 domains, linear, $sp$ (the slide's annotation). Its two leftover $p$ orbitals are perpendicular, which twists the two $\ce{CH2}$ ends 90° apart.` },
        ],
      },
      {
        n: 24, points: 1, type: "single", src: "Slide 54 · homework Part C",
        prompt: R`What hybrid orbitals should be constructed on the N atom to make the N–H bonds in $\ce{NH3}$? (Measured H–N–H angle: 107°.)`,
        options: [
          { text: R`$sp^2$`, correct: false, why: R`$sp^2$ gives 3 domains at 120°; N has 4.` },
          { text: R`$sp^3$`, correct: true, why: R`N: 3 bonds + 1 lone pair = 4 domains → $sp^3$. The lone pair compresses 109.5° to 107°.` },
          { text: R`$sp$`, correct: false, why: R`$sp$ gives 2 domains at 180°.` },
          { text: "none of the above", correct: false, why: R`4 tetrahedral domains require $sp^3$ hybrids.` },
        ],
      },
      {
        n: 25, points: 1, type: "single", src: "Slide 54 · homework Part D",
        prompt: R`What valence orbitals, if any, remain unhybridized on the N atom in $\ce{NH3}$?`,
        options: [
          { text: "none", correct: true, why: R`$sp^3$ uses all four valence orbitals ($2s$ + three $2p$).` },
          { text: R`$2s$`, correct: false, why: R`The $2s$ is one of the four orbitals mixed into $sp^3$.` },
          { text: R`$2p$`, correct: false, why: R`All three $2p$ orbitals are used in $sp^3$.` },
          { text: R`$1s$`, correct: false, why: R`$1s$ is a core orbital, not a valence orbital; it never takes part.` },
        ],
      },

      // ===================================================== σ and π bonds (26–31)
      {
        n: 26, points: 1, type: "single", src: "Slide 59 · homework",
        prompt: R`The $\pi$ bond in ethylene, $\ce{H2C=CH2}$, results from the overlap of ________.`,
        options: [
          { text: "sp hybrid orbitals", correct: false, why: R`Ethylene carbons are $sp^2$, and hybrids form $\sigma$ bonds.` },
          { text: "p atomic orbitals", correct: true, why: R`Each $sp^2$ carbon keeps one unhybridized $2p$ orbital perpendicular to the molecular plane; their sideways overlap is the $\pi$ bond.` },
          { text: R`sp$^3$ hybrid orbitals`, correct: false, why: R`$sp^3$ carbons make only single bonds.` },
          { text: "s atomic orbitals", correct: false, why: R`$s$ orbitals are spherical and cannot overlap sideways.` },
          { text: R`sp$^2$ hybrid orbitals`, correct: false, why: R`The $sp^2$ hybrids form the C–C and C–H $\sigma$ bonds, not the $\pi$ bond.` },
        ],
      },
      {
        n: 27, points: 1, type: "single", src: "Slide 61 · homework",
        prompt: R`A typical double bond consists of ________ sigma bond(s) and ________ pi bond(s).`,
        options: [
          { text: "2, 1", correct: false, why: R`A multiple bond never has more than one $\sigma$.` },
          { text: "0, 2", correct: false, why: R`Every bond starts with one $\sigma$.` },
          { text: "1, 1", correct: true, why: R`Slide 58: double bond = one $\sigma$ + one $\pi$.` },
          { text: "1, 2", correct: false, why: R`That is a triple bond.` },
          { text: "1, 3", correct: false, why: R`Not possible.` },
        ],
      },
      {
        n: 28, points: 1, type: "single", src: "Slide 62 · past exam Q14 · hidden",
        prompt: R`Consider the acetylene molecule HCCH. This molecule is linear and its Lewis structure is $\ce{H-C#C-H}$. What is the hybridization state of each of the carbon atoms in HCCH?`,
        options: [
          { text: R`(a) $sp$`, correct: true, why: R`Each C: C–H + C≡C = 2 domains, linear, $sp$. Two leftover $p$ orbitals form the two $\pi$ bonds.` },
          { text: R`(b) $sp^2$`, correct: false, why: R`$sp^2$ needs 3 domains (ethylene).` },
          { text: R`(c) $sp^3$`, correct: false, why: R`$sp^3$ needs 4 domains (ethane).` },
          { text: R`(d) $sp^4$`, correct: false, why: R`Does not exist: there are only three $p$ orbitals.` },
        ],
      },
      {
        n: 29, points: 1, type: "single", src: "Slide 62 · past exam Q15 · hidden",
        prompt: R`How many sigma ($\sigma$) and how many pi ($\pi$) bonds are there in the entire HCCH molecule?`,
        options: [
          { text: "(a) 1 sigma and 4 pi", correct: false, why: R`There are three bonds, so three $\sigma$.` },
          { text: "(b) 2 sigma and 3 pi", correct: false, why: R`Misses the C–C $\sigma$.` },
          { text: "(c) 3 sigma and 2 pi", correct: true, why: R`2 C–H $\sigma$ + the C≡C (1 $\sigma$ + 2 $\pi$) = 3 $\sigma$, 2 $\pi$.` },
          { text: "(d) 4 sigma and 1 pi", correct: false, why: R`A triple bond has 2 $\pi$, not 1.` },
        ],
      },
      {
        n: 30, points: 1, type: "single", src: "Slide 63 · homework",
        prompt: R`There are ________ $\sigma$ and ________ $\pi$ bonds in the $\ce{H2C=C=CH2}$ molecule.`,
        options: [
          { text: "6, 4", correct: false, why: R`Each double bond has only one $\pi$.` },
          { text: "2, 2", correct: false, why: R`Forgets the 4 C–H $\sigma$ bonds.` },
          { text: "2, 6", correct: false, why: R`Not possible with 6 bonds total.` },
          { text: "6, 2", correct: true, why: R`4 C–H + 2 C=C: each bond has one $\sigma$ = 6 $\sigma$; each double bond adds one $\pi$ = 2 $\pi$.` },
          { text: "4, 2", correct: false, why: R`Forgets the $\sigma$ components of the two C=C bonds.` },
        ],
      },
      {
        n: 31, points: 1, type: "single", src: "Slide 66 · past exam · hidden",
        prompt: R`Shown in the left figure are the carbon orbitals participating in the sigma bonds within the ethylene ($\ce{C2H4}$) molecule. The right figure shows the carbon orbitals participating in the pi bonding between the two carbon atoms. Identify which carbon atomic orbitals are responsible for the sigma and pi bonding in ethylene.`,
        figure: { img: "img/s66_ethylene_orbitals.png", alt: "Left: carbon hybrid orbitals forming sigma bonds to H and C. Right: parallel p orbitals above and below the C–C axis." },
        options: [
          { text: R`(a) $sp^2$ hybrids for both sigma and pi bonds shown`, correct: false, why: R`Hybrids lie in the plane and form only $\sigma$ bonds.` },
          { text: R`(b) $sp^3$ hybrids for both sigma and pi bonds shown`, correct: false, why: R`Ethylene carbons have 3 domains, not 4.` },
          { text: R`(c) $sp^2$ hybrids for sigma bonds and unhybridized $2p$ for the pi bond`, correct: true, why: R`3 domains per C → $sp^2$ for the two C–H and the C–C $\sigma$; the leftover $2p$ on each C overlaps sideways for the $\pi$.` },
          { text: R`(d) $sp^3$ hybrids for sigma bonds and unhybridized $2p$ for the pi bond`, correct: false, why: R`$sp^3$ leaves no $2p$ orbital unhybridized (Q22).` },
        ],
      },

      // ===================================================== Furan (32–36)
      {
        n: 32, points: 1, type: "single", src: "Slide 67 · homework Part A",
        prompt: R`The molecule shown is called <em>furan</em>. In shorthand it is drawn as a five-membered ring with O at the top and two C=C double bonds; the full Lewis structure is shown. What is the molecular formula for furan?`,
        figure: { img: "img/s67_furan.png", alt: "Furan Lewis structure: ring of four C and one O, two C=C, each C bonded to one H, two lone pairs on O" },
        options: [
          { text: R`$\ce{C4H4O}$`, correct: true, why: R`Four ring carbons, each with one H, plus one O.` },
          { text: R`$\ce{C5H5O}$`, correct: false, why: R`The ring has 5 atoms, but one of them is O: 4 carbons.` },
          { text: R`$\ce{C4H8O}$`, correct: false, why: R`That is tetrahydrofuran (no double bonds, two H per carbon).` },
          { text: R`$\ce{C4H4O2}$`, correct: false, why: R`There is only one O.` },
        ],
      },
      {
        n: 33, points: 1, type: "numeric", src: "Slide 67 · homework Part B",
        prompt: R`How many valence electrons are there in the furan molecule?`,
        figure: { img: "img/s67_furan.png", alt: "Furan Lewis structure" },
        unit: "electrons", answer: 26,
        why: R`$4(4) + 4(1) + 6 = 16 + 4 + 6 = 26$ (C, H, O).`,
      },
      {
        n: 34, points: 1, type: "single", src: "Slide 68 · homework Part C",
        prompt: R`What is the hybridization at each of the carbon atoms in furan?`,
        figure: { img: "img/s67_furan.png", alt: "Furan Lewis structure" },
        options: [
          { text: R`All four carbons are $sp^2$`, correct: true, why: R`Every carbon makes one double bond and two single bonds (to C/O and H): 3 domains each → $sp^2$.` },
          { text: R`All four carbons are $sp^3$`, correct: false, why: R`Each carbon has only 3 domains.` },
          { text: R`The two carbons bonded to O are $sp^3$; the other two are $sp^2$`, correct: false, why: R`Every carbon is in a C=C double bond, so all are $sp^2$.` },
          { text: R`All four carbons are $sp$`, correct: false, why: R`$sp$ needs 2 domains (two double bonds or a triple bond).` },
          { text: R`Two are $sp^2$ and two are $sp^3d$`, correct: false, why: R`Carbon never uses $d$ orbitals; it cannot exceed an octet.` },
        ],
      },
      {
        n: 35, points: 1, type: "numeric", src: "Slide 69 · homework Part D",
        prompt: R`How many electrons are in the $\pi$ system of the furan molecule?`,
        figure: { img: "img/s67_furan.png", alt: "Furan Lewis structure" },
        unit: "electrons", answer: 6,
        why: R`The two C=C $\pi$ bonds give 4 electrons. The planar ring's O is $sp^2$, and one of its lone pairs sits in an unhybridized $p$ orbital parallel to the carbon $p$ orbitals, adding 2: $4 + 2 = 6$ $\pi$ electrons, the same count as benzene.`,
        note: R`Counting only the two C=C $\pi$ bonds gives 4. That misses the O lone pair in the $p$ orbital, which overlaps with the carbon $p$ orbitals and is part of the delocalized $\pi$ system.`,
      },
      {
        n: 36, points: 1, type: "single", src: "Slide 69 · homework Part E",
        prompt: R`The C–C–C bond angles in furan are much smaller than those in benzene. The likely reason is which of the following?`,
        options: [
          { text: "The hybridization of the carbon atoms in furan is different from that in benzene.", correct: false, why: R`Both are $sp^2$ (Q34).` },
          { text: "Furan does not have another resonance structure equivalent to the one above.", correct: false, why: R`Resonance affects bond lengths and stability, not the ring's angle sum.` },
          { text: "The atoms in a five-membered ring are forced to adopt smaller angles than in a six-membered ring.", correct: true, why: R`Interior angles of a planar ring sum to $(n-2)\cdot180°$: about 108° each for a pentagon vs 120° for a hexagon. Geometry, not hybridization.` },
        ],
      },

      // ===================================================== N2H4 vs N2 (37–38)
      {
        n: 37, points: 1, type: "single", src: "Slide 70 · homework Part C · hidden",
        prompt: R`What is the hybridization of the nitrogen atoms in $\ce{N2H4}$?`,
        figure: { img: "img/s70_n2h4.png", alt: "Hydrazine H2N–NH2 with one lone pair on each N" },
        options: [
          { text: R`$sp$`, correct: false, why: R`Needs 2 domains.` },
          { text: R`$sp^2$`, correct: false, why: R`Needs 3 domains.` },
          { text: R`$sp^3$`, correct: true, why: R`Each N: 2 N–H + 1 N–N + 1 lone pair = 4 domains → $sp^3$.` },
          { text: R`$sp^3d$`, correct: false, why: R`N cannot exceed an octet.` },
          { text: R`$sp^3d^2$`, correct: false, why: R`N cannot exceed an octet.` },
        ],
      },
      {
        n: 38, points: 1, type: "single", src: "Slide 70 · homework Part D · hidden",
        prompt: R`Which molecule has a stronger N–N bond?`,
        figure: { img: "img/s70_n2.png", alt: "N≡N with one lone pair on each N" },
        options: [
          { text: R`$\ce{N2}$`, correct: true, why: R`$\ce{N#N}$ is a triple bond (1 $\sigma$ + 2 $\pi$, 941 kJ/mol) vs the $\ce{N-N}$ single bond in hydrazine (163 kJ/mol).` },
          { text: R`$\ce{N2H4}$`, correct: false, why: R`Hydrazine's N–N is a single bond, the weakest of the three N–N bond types.` },
        ],
      },

      // ===================================================== Hybrid vs molecular orbitals (39)
      {
        n: 39, points: 1, type: "single", src: "Slide 73 · homework",
        prompt: R`If you combine two atomic orbitals on <em>two different</em> atoms to make a new orbital, or on <em>only one</em> atom to make a new orbital, is a hybrid orbital or a molecular orbital formed?`,
        options: [
          { text: "Combining two atomic orbitals on two different atoms or two atomic orbitals on a single atom both form a hybrid orbital.", correct: false, why: R`Combining across two atoms gives an MO.` },
          { text: "Combining two atomic orbitals on two different atoms or two atomic orbitals on a single atom both form a molecular orbital.", correct: false, why: R`Mixing on one atom gives hybrids, which still belong to that atom.` },
          { text: "Combining two atomic orbitals on two different atoms forms a molecular orbital, while combining two atomic orbitals on a single atom forms a hybrid orbital.", correct: true, why: R`Hybrids mix orbitals of the <em>same</em> atom (slide 43); MOs combine orbitals of <em>different</em> atoms and belong to the whole molecule (slide 78).` },
          { text: "Combining two atomic orbitals on two different atoms forms a hybrid orbital, while combining two atomic orbitals on a single atom forms a molecular orbital.", correct: false, why: R`Exactly reversed.` },
        ],
      },

      // ===================================================== MO theory: H2, He2, Li2, Be2 (40–44)
      {
        n: 40, points: 1, type: "single", src: "Slide 80 · homework",
        prompt: R`If you add an extra electron to the $\ce{H2}$ molecule to make $\ce{H2-}$, is the bonding in that molecular anion stronger, weaker, or the same as in neutral $\ce{H2}$?`,
        figure: { img: "img/s81_h2_mo.png", alt: "MO diagram for H2: sigma 1s filled with two electrons, sigma* 1s empty" },
        options: [
          { text: "Stronger", correct: false, why: R`The extra electron goes into the antibonding $\sigma^*_{1s}$, which weakens the bond.` },
          { text: "Weaker", correct: true, why: R`$\ce{H2-}$: $\sigma_{1s}^2\sigma_{1s}^{*1}$. $\text{BO} = \tfrac12(2 - 1) = \tfrac12$, compared with 1 in $\ce{H2}$.` },
          { text: "The same", correct: false, why: R`The bond order changes from 1 to 0.5.` },
        ],
      },
      {
        n: 41, points: 1, type: "single", src: "Slides 81–82 · homework",
        prompt: R`Suppose one electron in $\ce{H2}$ is excited from the $\sigma_{1s}$ MO to the $\sigma^*_{1s}$ MO. Would you expect the H atoms to remain bonded to each other, or would the molecule fall apart?`,
        figure: { img: "img/s81_h2_mo.png", alt: "MO diagram for H2" },
        options: [
          { text: "a. Remain bonded, as the bond order remains the same.", correct: false, why: R`Moving an electron from bonding to antibonding changes the bond order.` },
          { text: "b. Fall apart, as the bond order decreases from 1 to 0.5.", correct: false, why: R`That would be removing one bonding electron with nothing added to $\sigma^*$.` },
          { text: "c. Remain bonded, as the bond order changes from 1 to 1.5.", correct: false, why: R`Antibonding occupancy lowers, not raises, the bond order.` },
          { text: "d. Fall apart as the bond order changes from 1 to 0.", correct: true, why: R`Excited state $\sigma_{1s}^1\sigma_{1s}^{*1}$: $\text{BO} = \tfrac12(1 - 1) = 0$. No net bond.` },
        ],
      },
      {
        n: 42, points: 1, type: "single", src: "Slide 83 · posed on slide",
        prompt: R`Does $\ce{He2}$ exist? Use the MO diagram to decide.`,
        options: [
          { text: R`No: $\sigma_{1s}^2\sigma_{1s}^{*2}$ gives a bond order of 0.`, correct: true, why: R`4 electrons fill both the bonding and antibonding MOs: $\tfrac12(2 - 2) = 0$. There is no He–He bond.` },
          { text: R`Yes: the bond order is 1, like $\ce{H2}$.`, correct: false, why: R`$\ce{H2}$ has 2 electrons, both bonding; $\ce{He2}$ adds 2 antibonding electrons.` },
          { text: R`Yes: the bond order is 0.5.`, correct: false, why: R`That is $\ce{He2+}$ (3 electrons).` },
          { text: R`Yes: noble gases form stable diatomic molecules.`, correct: false, why: R`They do not; their filled shells give zero net bonding.` },
        ],
      },
      {
        n: 43, points: 1, type: "numeric", src: "Slide 85 · past exam",
        prompt: R`Using the MO diagram for $\ce{Li2}$ (shown) as a starting point, sketch the diagram for $\ce{Li2-}$ and predict its bond order.`,
        figure: { img: "img/s84_li2_mo.png", alt: "MO diagram for Li2: sigma 1s and sigma* 1s filled, sigma 2s filled, sigma* 2s empty" },
        answer: 0.5, answerText: R`$\tfrac12$`,
        why: R`$\ce{Li2-}$ has 7 electrons: $\sigma_{1s}^2\sigma_{1s}^{*2}\sigma_{2s}^2\sigma_{2s}^{*1}$. Including core electrons: $\tfrac12(4 - 3) = \tfrac12$. Valence only: $\tfrac12(2 - 1) = \tfrac12$. The core pairs cancel, so both ways agree.`,
      },
      {
        n: 44, points: 1, type: "single", src: "Slide 86 · example",
        prompt: R`Would you expect $\ce{Be2+}$ to have a stable bond?`,
        options: [
          { text: "a. No, because the bond order is 0", correct: false, why: R`That is neutral $\ce{Be2}$ (8 electrons, $\sigma_{2s}^{*2}$).` },
          { text: "b. Yes, because the bond order is 0.5", correct: true, why: R`$\ce{Be2+}$: $2(4) - 1 = 7$ electrons, $\sigma_{1s}^2\sigma_{1s}^{*2}\sigma_{2s}^2\sigma_{2s}^{*1}$. $\text{BO} = \tfrac12(4 - 3) = 0.5 > 0$: a weak but real bond.` },
          { text: "c. Yes, because the bond order is 1", correct: false, why: R`That would need the $\sigma^*_{2s}$ empty ($\ce{Be2^2+}$, 6 electrons).` },
          { text: "d. Yes, because the bond order is 1.5", correct: false, why: R`Not possible with 7 electrons in these MOs.` },
        ],
      },

      // ===================================================== MOs from p orbitals (45–48)
      {
        n: 45, points: 1, type: "match", src: "Slide 90 · homework",
        prompt: R`The sketches show the atomic orbital wave functions (with phases: blue and red are opposite signs) used to construct some of the MOs of a homonuclear diatomic molecule. For each sketch, determine the MO that will result from mixing the atomic orbital wave functions as drawn.`,
        figure: { img: "img/s90_sketches.png", alt: "(a) blue s and red s; (b) two p orbitals end-on, each blue-left red-right; (c) two p orbitals side by side, both red on top" },
        choices: ["σ2s", "σ*2s", "σ*2p", "π2p", "π*2p"],
        items: [
          { label: "(a)", answer: "σ*2s", why: R`Two $s$ orbitals of <em>opposite</em> phase (blue + red): antibonding, $\sigma^*_{2s}$.` },
          { label: "(b)", answer: "σ*2p", why: R`End-on $p$ orbitals; the lobes facing each other are red and blue (opposite): antibonding, $\sigma^*_{2p}$.` },
          { label: "(c)", answer: "π2p", why: R`Side-by-side $p$ orbitals with matching phases (red with red on top): bonding, $\pi_{2p}$.` },
        ],
      },
      {
        n: 46, points: 1, type: "single", src: "Slide 91 · past exam Q17",
        prompt: R`Consider a diatomic molecule such as $\ce{O2}$. The overlap between the three $2p$ orbitals on one atom and the three $2p$ orbitals on the other gives six MOs (3 + 3 = 6). How many are sigma and how many are pi in character? (Count $\sigma$ and $\sigma^*$ as sigma; $\pi$ and $\pi^*$ as pi.)`,
        options: [
          { text: "(a) 2 sigma and 4 pi", correct: true, why: R`The end-on $2p_z$ pair gives $\sigma_{2p}$ + $\sigma^*_{2p}$ (2). The sideways $2p_x$ and $2p_y$ pairs give 2 $\pi$ + 2 $\pi^*$ (4).` },
          { text: "(b) 3 sigma and 3 pi", correct: false, why: R`Only one $p$ orientation points along the bond axis.` },
          { text: "(c) 4 sigma and 2 pi", correct: false, why: R`Reversed: two orientations overlap sideways.` },
          { text: "(d) 5 sigma and 1 pi", correct: false, why: R`Not consistent with three perpendicular $p$ orbitals.` },
        ],
      },
      {
        n: 47, points: 1, type: "single", src: "Slide 91 · past exam Q18",
        prompt: R`Three of the six possible combinations of the $2p$ orbitals belonging to the neighboring atoms are sketched. The white and grey lobes correspond to opposite signs of the wavefunctions. In the order shown, what molecular orbitals do these combinations result in?`,
        figure: { img: "img/s91_sketches.png", alt: "Left: end-on p orbitals with white lobes overlapping; middle: side-by-side p orbitals with opposite shading facing; right: side-by-side p orbitals with matching shading" },
        options: [
          { text: R`(a) $\sigma_{2p}$, $\pi_{2p}$, $\pi^*_{2p}$`, correct: false, why: R`The middle and right are swapped: the middle pair has opposite shading facing each other.` },
          { text: R`(b) $\sigma_{2p}$, $\pi^*_{2p}$, $\pi_{2p}$`, correct: true, why: R`Left: end-on, white meets white → bonding $\sigma_{2p}$. Middle: side-by-side, grey top on one, white top on the other → $\pi^*_{2p}$. Right: grey with grey on top → bonding $\pi_{2p}$.` },
          { text: R`(c) $\sigma^*_{2p}$, $\pi_{2p}$, $\pi^*_{2p}$`, correct: false, why: R`The end-on pair overlaps same-sign (white–white): bonding.` },
          { text: R`(d) $\sigma^*_{2p}$, $\pi^*_{2p}$, $\pi_{2p}$`, correct: false, why: R`The first sketch is bonding, not antibonding.` },
        ],
      },
      {
        n: 48, points: 1, type: "single", src: "Slide 92 · homework · hidden",
        prompt: R`According to MO theory, overlap of two $p$ atomic orbitals produces ________.`,
        options: [
          { text: R`one $\pi$ MO and one $\pi^*$ MO <u>or</u> one $\sigma$ MO and one $\sigma^*$ MO`, correct: true, why: R`Two AOs in, two MOs out (one bonding, one antibonding). Sideways overlap gives $\pi/\pi^*$; end-on gives $\sigma/\sigma^*$.` },
          { text: R`one $\pi^*$ MO and one $\sigma^*$ MO`, correct: false, why: R`Every overlap gives one bonding and one antibonding MO.` },
          { text: R`two $\pi$ MOs, two $\pi^*$ MOs, one $\sigma$ MO, and one $\sigma^*$ MO`, correct: false, why: R`That is from <em>all six</em> $2p$ orbitals (three per atom), not two.` },
          { text: R`one $\pi$ MO and one $\sigma^*$ MO`, correct: false, why: R`One pair of orbitals overlaps in one way only (end-on or sideways).` },
          { text: R`one $\pi$ MO and one $\sigma$ MO`, correct: false, why: R`Mixes overlap types and leaves out the antibonding MO.` },
        ],
      },

      // ===================================================== Magnetism, NO (49–54)
      {
        n: 49, points: 1, type: "single", src: "Slide 93 · posed on slide",
        prompt: R`Is oxygen ($\ce{O2}$) paramagnetic or diamagnetic?`,
        options: [
          { text: "Paramagnetic", correct: true, why: R`12 valence electrons: $\sigma_{2s}^2\sigma_{2s}^{*2}\sigma_{2p}^2\pi_{2p}^4\pi_{2p}^{*2}$. The two $\pi^*$ electrons occupy the two degenerate $\pi^*$ orbitals with parallel spins (Hund's rule): 2 unpaired electrons. Liquid $\ce{O2}$ sticks to a magnet; Lewis structures cannot predict this.` },
          { text: "Diamagnetic", correct: false, why: R`The Lewis structure $\ce{O=O}$ pairs every electron, but the MO diagram leaves two unpaired electrons in $\pi^*$.` },
        ],
      },
      {
        n: 50, points: 1, type: "match", src: "Slide 95 · homework",
        prompt: R`Using the MO diagram for NO (shown for neutral NO), predict the N–O bond order in each species.`,
        figure: { img: "img/s95_no_mo.png", alt: "MO diagram for NO: one electron in pi* 2p" },
        choices: ["1", "1.5", "2", "2.5", "3"],
        items: [
          { label: R`$\ce{NO}$`, answer: "2.5", why: R`11 valence electrons; bonding 8 ($\sigma_{2s}^2\sigma_{2p}^2\pi_{2p}^4$), antibonding 3 ($\sigma_{2s}^{*2}\pi_{2p}^{*1}$). $\tfrac12(8 - 3) = 2.5$; the slide counts only the $2p$ set: $\tfrac12(6 - 1)$.` },
          { label: R`$\ce{NO+}$`, answer: "3", why: R`Remove the $\pi^*$ electron: $\tfrac12(6 - 0) = 3$.` },
          { label: R`$\ce{NO-}$`, answer: "2", why: R`Add a second $\pi^*$ electron: $\tfrac12(6 - 2) = 2$.` },
        ],
      },
      {
        n: 51, points: 1, type: "single", src: "Slide 95 · homework",
        prompt: R`Predict the order of the N–O bond strength in NO, $\ce{NO+}$, and $\ce{NO-}$.`,
        figure: { img: "img/s95_no_mo.png", alt: "MO diagram for NO" },
        options: [
          { text: R`$\ce{NO+} > \ce{NO} > \ce{NO-}$`, correct: true, why: R`Bond strength follows bond order: 3 > 2.5 > 2.` },
          { text: R`$\ce{NO-} > \ce{NO} > \ce{NO+}$`, correct: false, why: R`Adding electrons here fills <em>antibonding</em> $\pi^*$, weakening the bond.` },
          { text: R`$\ce{NO} > \ce{NO+} > \ce{NO-}$`, correct: false, why: R`Removing NO's $\pi^*$ electron strengthens the bond.` },
          { text: R`All three are equal`, correct: false, why: R`The $\pi^*$ population differs: 0, 1, 2.` },
        ],
      },
      {
        n: 52, points: 1, type: "match", src: "Slide 96 · homework",
        prompt: R`Sort each species as diamagnetic (all electrons paired) or paramagnetic (unpaired electrons).`,
        figure: { img: "img/s95_no_mo.png", alt: "MO diagram for NO" },
        choices: ["diamagnetic", "paramagnetic"],
        items: [
          { label: R`$\ce{NO-}$`, answer: "paramagnetic", why: R`Two $\pi^*$ electrons in two degenerate orbitals: one each, parallel spins (Hund's rule), like $\ce{O2}$.` },
          { label: R`$\ce{NO}$`, answer: "paramagnetic", why: R`One $\pi^*$ electron: unpaired (11 valence electrons, an odd number).` },
          { label: R`$\ce{NO+}$`, answer: "diamagnetic", why: R`$\pi^*$ is empty; every occupied MO is doubly filled (like $\ce{N2}$).` },
        ],
      },
      {
        n: 53, points: 1, type: "single", src: "Slide 97 · homework Part D · hidden",
        prompt: R`With what neutral homonuclear diatomic molecule is the $\ce{NO+}$ ion isoelectronic (same number of electrons)?`,
        options: [
          { text: R`$\ce{N2}$`, correct: true, why: R`$\ce{NO+}$: $7 + 8 - 1 = 14$ electrons; $\ce{N2}$: $2(7) = 14$. Both have bond order 3.` },
          { text: R`$\ce{O2}$`, correct: false, why: R`$\ce{O2}$ has 16 electrons.` },
          { text: R`$\ce{C2}$`, correct: false, why: R`$\ce{C2}$ has 12 electrons.` },
          { text: R`$\ce{F2}$`, correct: false, why: R`$\ce{F2}$ has 18 electrons.` },
        ],
      },
      {
        n: 54, points: 1, type: "single", src: "Slide 97 · homework Part E · hidden",
        prompt: R`With what neutral homonuclear diatomic molecule is the $\ce{NO-}$ ion isoelectronic?`,
        options: [
          { text: R`$\ce{N2}$`, correct: false, why: R`$\ce{N2}$ has 14 electrons.` },
          { text: R`$\ce{O2}$`, correct: true, why: R`$\ce{NO-}$: $7 + 8 + 1 = 16$ electrons, same as $\ce{O2}$. Both: bond order 2, two unpaired $\pi^*$ electrons.` },
          { text: R`$\ce{C2}$`, correct: false, why: R`$\ce{C2}$ has 12 electrons.` },
          { text: R`$\ce{F2}$`, correct: false, why: R`$\ce{F2}$ has 18 electrons.` },
        ],
      },
    ],
  };
})();
