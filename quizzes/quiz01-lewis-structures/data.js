/* Quiz 1 — Lewis Structures: questions, answer key, and per-option explanations.
 *
 * Question types
 *   single : radio buttons, one correct option
 *   multi  : checkboxes, scored right-minus-wrong per option (as on the original quiz)
 *   match  : drop-down per item, scored per item
 *
 * Option fields
 *   text | img (+ alt)   what is shown
 *   correct              true = should be selected
 *   why                  explanation shown in the side panel (KaTeX: $...$, $\ce{...}$)
 */
(function () {
  const R = String.raw;
  const FC = R`$\mathrm{FC} = V - N - B$`;

  window.QUIZ = {
    id: "chem181-quiz01-lewis",
    course: "CHEM 181",
    title: "Quiz 1 — Lewis Structures",
    scoring: "Multi-select questions are scored right-minus-wrong per option, as on the original quiz: each option is worth 1/n of the points, a wrong option subtracts 1/n, and the floor is 0. An unanswered question scores 0.",
    toolsNote: R`Formal charge: ${FC}, where $V$ = valence electrons, $N$ = nonbonding electrons, $B$ = bonds. Central atom (this quiz): bonded to more than one atom, or either atom of a diatomic.`,
    questions: [
      // ------------------------------------------------------------------ Q1
      {
        n: 1, points: 0.25, type: "single",
        prompt: R`An atom can have only <u>one</u> of the following: an incomplete octet, a full octet, or an expanded octet.`,
        options: [
          { text: "True", correct: true,
            why: R`For a given atom in a given structure, the electron count is below 8, exactly 8, or above 8, so the three cases are mutually exclusive (B in $\ce{BF3}$ has 6; S in $\ce{SF6}$ has 12).` },
          { text: "False", correct: false,
            why: R`Only true for an <em>element</em> across different compounds (S has 8 in $\ce{H2S}$ and 12 in $\ce{SF6}$). A single atom in one structure can only be in one state.` },
        ],
      },
      // ------------------------------------------------------------------ Q2
      {
        n: 2, points: 0.25, type: "single",
        prompt: R`<p>I understand that an atom having a full octet in a molecule refers to the original electron configuration of the atom and whether it then has a full shell <em>after</em> it gets electrons from sharing bonds with other atoms.</p>
<p>Remember, carbon has 4 valence electrons. The reason CH<sub>4</sub> forms is that each H atom shares its 1 electron with carbon. Carbon now has 4+1+1+1+1=8 = full shell = octet</p>
<p>Hydrogen, which has 1 valence electron only needs 1 more electron to get a "duet" since it will be full with 2 electrons in the 1s orbital. This is why hydrogen can ONLY EVER form ONE bond and never has lone pairs.</p>`,
        options: [
          { text: "True", correct: true,
            why: R`Correct intro-level Lewis theory: C in $\ce{CH4}$ has $4 + 4(1) = 8$; H goes $1s^1 \to 1s^2$, a full duet, so one bond and no lone pairs.` },
          { text: "False", correct: false,
            why: R`The exceptions (hydride $\ce{H-}$ with a lone pair; bridging H in diborane) are beyond this course, so the statement is accepted as true.` },
        ],
      },
      // ------------------------------------------------------------------ Q3
      {
        n: 3, points: 0.25, type: "match",
        prompt: R`Assuming formal charges are zero, one can predict how many bonds an atom will make based on its group. Match the following group number with the number of bonds it will typically make.`,
        choices: ["1", "2", "3", "4"],
        items: [
          { label: "Group 6", answer: "2", why: R`6 valence e$^-$: needs $8 - 6 = 2$ more, so 2 bonds (O in $\ce{H2O}$).` },
          { label: "Group 5", answer: "3", why: R`5 valence e$^-$: $8 - 5 = 3$ bonds (N in $\ce{NH3}$).` },
          { label: "Group 7", answer: "1", why: R`7 valence e$^-$: $8 - 7 = 1$ bond (F in $\ce{HF}$).` },
          { label: "Group 4", answer: "4", why: R`4 valence e$^-$: $8 - 4 = 4$ bonds (C in $\ce{CH4}$).` },
        ],
      },
      // ------------------------------------------------------------------ Q4
      {
        n: 4, points: 0.25, type: "multi",
        prompt: R`<p>For the purposes of this assignment, we will call an atom a <strong>central atom</strong> if either:</p>
<ol><li>It is bonded to more than one other atom <strong>OR</strong></li><li>It is in a diatomic molecule.</li></ol>
<p>In the following examples anything in <span style="color:#d0021b">red</span> is considered a central atom.</p><p>Examples:</p>`,
        figure: { img: "img/p04_1.png", alt: "Example structures with central atoms in red" },
        prompt2: "Which of the following are central atoms? Select all that apply.",
        options: [
          { img: "img/q04_1.png", alt: "C and N, in cyanide", correct: true, why: R`$\ce{CN-}$ is diatomic, so both atoms are central.` },
          { img: "img/q04_2.png", alt: "C and O, in methanol", correct: true, why: R`C is bonded to 4 atoms; O is bonded to 2 (C and H). Both central.` },
          { img: "img/q04_3.png", alt: "C and O, in carbon dioxide", correct: false, why: R`Each O in $\ce{CO2}$ is bonded only to C, so only C is central.` },
          { img: "img/q04_4.png", alt: "C in methane", correct: true, why: R`C is bonded to 4 H.` },
          { img: "img/q04_5.png", alt: "C and O, in carbon monoxide", correct: true, why: R`$\ce{CO}$ is diatomic, so both atoms are central.` },
          { img: "img/q04_6.png", alt: "C and N, in hydrogen cyanide", correct: false, why: R`In $\ce{HCN}$, N is bonded only to C, so only C is central.` },
        ],
      },
      // ------------------------------------------------------------------ Q5
      {
        n: 5, points: 1, type: "multi",
        prompt: R`Which of the following has a central atom with a full octet? (Choose all that apply.)`,
        options: [
          { img: "img/q05_1.png", alt: "Benzene resonance structures", correct: true, why: R`Each C has 3 bonds, one of them double: 8 e$^-$.` },
          { img: "img/q05_2.png", alt: "NO", correct: true, why: R`Diatomic, so O counts as central, and O has 8 e$^-$ (N has only 7).` },
          { img: "img/q05_3.png", alt: "ClF5", correct: false, why: R`Cl: 5 bonds + 1 lone pair = 12 e$^-$ (expanded). The F atoms are terminal, not central.` },
          { img: "img/q05_4.png", alt: "B(CH3)3", correct: false, why: R`<strong>Graded key: leave unchecked.</strong> The key treats B as the central atom, and B has only 6 e$^-$. Under the quiz's literal definition, each $\ce{CH3}$ carbon is also central (bonded to 4 atoms) with 8 e$^-$, so checking it is defensible, but the key marks it wrong.` },
          { img: "img/q05_5.png", alt: "NC–CN (cyanogen)", correct: true, why: R`Each C: triple + single bond $= 6 + 2 = 8$ e$^-$.` },
          { text: "None of the items shown", correct: false, why: R`Four options qualify.` },
          { img: "img/q05_7.png", alt: "ClNO2 resonance structures", correct: true, why: R`N has 4 bonds = 8 e$^-$ in both resonance forms.` },
        ],
        note: R`Q5 and Q7 reuse the same molecules: $\ce{NO}$ and $\ce{B(CH3)3}$ each have an incomplete main central atom (N and B).`,
      },
      // ------------------------------------------------------------------ Q6
      {
        n: 6, points: 1, type: "multi",
        prompt: R`Which of the following has a central atom with an expanded octet? (Check all that apply)`,
        options: [
          { img: "img/q06_1.png", alt: "Br2", correct: false, why: R`Each Br: 1 bond + 3 lone pairs = 8.` },
          { img: "img/q06_2.png", alt: "HBr", correct: false, why: R`H has 2, Br has 8.` },
          { img: "img/q06_3.png", alt: "HNO2", correct: false, why: R`N: double + single bond + lone pair = 8; O(H): 2 bonds + 2 lone pairs = 8.` },
          { img: "img/q06_4.png", alt: "Oxalate resonance structures", correct: false, why: R`Each C: 4 bonds = 8.` },
          { img: "img/q06_5.png", alt: "BH4-", correct: false, why: R`B: 4 bonds = <strong>8, full, not expanded</strong>. The extra electron from the negative charge lets B form a fourth bond and reach exactly 8.` },
          { img: "img/q06_6.png", alt: "Azide N3-", correct: false, why: R`Middle N: 2 double bonds = 8.` },
          { text: "None of the items shown", correct: true, why: R`No central atom here has more than 8 e$^-$.` },
        ],
      },
      // ------------------------------------------------------------------ Q7
      {
        n: 7, points: 1, type: "multi",
        prompt: R`Which of the following has a central atom with an incomplete octet? (Check all that apply)`,
        options: [
          { img: "img/q07_1.png", alt: "NC–CN", correct: false, why: R`Each C has 8.` },
          { img: "img/q07_2.png", alt: "B(CH3)3", correct: true, why: R`B: 3 bonds, no lone pair $\Rightarrow$ 6 e$^-$.` },
          { img: "img/q07_3.png", alt: "ClNO2 resonance structures", correct: false, why: R`N: 4 bonds $\Rightarrow$ 8 e$^-$ (full, as in Q5).` },
          { img: "img/q07_4.png", alt: "ClF5", correct: false, why: R`Cl has 12 (expanded, not incomplete).` },
          { text: "None of the items shown", correct: false, why: R`Two options qualify.` },
          { img: "img/q07_6.png", alt: "NO", correct: true, why: R`N: double bond + lone pair + 1 unpaired e$^-$ $= 4 + 2 + 1 = 7$ (a radical).` },
          { img: "img/q07_7.png", alt: "Benzene", correct: false, why: R`Each C has 8.` },
        ],
      },
      // ------------------------------------------------------------------ Q8
      {
        n: 8, points: 2, type: "multi",
        prompt: R`For which of the following does the molecule have 32 valence electrons? (Check all that apply)`,
        options: [
          { text: "None of the items shown", correct: false, why: R`$\ce{CF4}$ and $\ce{POCl3}$ both have 32.` },
          { img: "img/q08_2.png", alt: "CH2F2", correct: false, why: R`$4 + 2(1) + 2(7) = 20$.` },
          { img: "img/q08_3.png", alt: "CF4", correct: true, why: R`$4 + 4(7) = 32$.` },
          { img: "img/q08_4.png", alt: "SO3", correct: false, why: R`$6 + 3(6) = 24$.` },
          { img: "img/q08_5.png", alt: "SF4", correct: false, why: R`$6 + 4(7) = 34$.` },
          { img: "img/q08_6.png", alt: "ClF3", correct: false, why: R`$7 + 3(7) = 28$.` },
          { img: "img/q08_7.png", alt: "POCl3", correct: true, why: R`$5 + 6 + 3(7) = 32$.` },
        ],
      },
      // ------------------------------------------------------------------ Q9
      {
        n: 9, points: 1, type: "multi",
        prompt: R`Which of the following molecules has a central atom with a formal charge of 0? (Choose all that apply.)`,
        options: [
          { img: "img/q09_1.png", alt: "CH3F", correct: true, why: R`C: $4 - 0 - 4 = 0$.` },
          { img: "img/q09_2.png", alt: "C2H2Cl2 isomers", correct: true, why: R`Each C in all three isomers: $4 - 0 - 4 = 0$.` },
          { img: "img/q09_3.png", alt: "KrF2", correct: true, why: R`Kr: $8 - 6 - 2 = 0$.` },
          { img: "img/q09_4.png", alt: "SiCl6 2-", correct: false, why: R`Si: $4 - 0 - 6 = -2$.` },
          { img: "img/q09_5.png", alt: "ClF2-", correct: false, why: R`Cl: $7 - 6 - 2 = -1$.` },
          { img: "img/q09_6.png", alt: "Ozone resonance structures", correct: false, why: R`Middle O: $6 - 2 - 3 = +1$.` },
          { text: "None of the items shown", correct: false, why: R`Three options qualify.` },
        ],
        note: R`Using ${FC} on the central atom. In each ion the charge sits on the central atom; the terminal atoms are not central.`,
      },
      // ------------------------------------------------------------------ Q10
      {
        n: 10, points: 1, type: "multi",
        prompt: R`Which of the following has a central atom with a formal charge of +1? (Choose all that apply)`,
        options: [
          { text: "None of the items shown", correct: false, why: R`$\ce{ClNO2}$ qualifies.` },
          { img: "img/q10_2.png", alt: "NC–CN", correct: false, why: R`Each C: $4 - 0 - 4 = 0$.` },
          { img: "img/q10_3.png", alt: "ClF5", correct: false, why: R`Cl: $7 - 2 - 5 = 0$.` },
          { img: "img/q10_4.png", alt: "B(CH3)3", correct: false, why: R`B: $3 - 0 - 3 = 0$; each C: $4 - 0 - 4 = 0$.` },
          { img: "img/q10_5.png", alt: "Benzene", correct: false, why: R`Each C: $4 - 0 - 4 = 0$.` },
          { img: "img/q10_6.png", alt: "ClNO2 resonance structures", correct: true, why: R`N: $5 - 0 - 4 = +1$. The molecule is neutral because the singly bonded O is $6 - 6 - 1 = -1$.` },
          { img: "img/q10_7.png", alt: "NO", correct: false, why: R`N: $5 - 3 - 2 = 0$ (one lone pair + the unpaired e$^-$); O: $6 - 4 - 2 = 0$.` },
        ],
      },
      // ------------------------------------------------------------------ Q11
      {
        n: 11, points: 1, type: "multi",
        prompt: R`Which of the following has a central atom with a formal charge of -1? (Check all that apply)`,
        options: [
          { img: "img/q11_1.png", alt: "BH4-", correct: true, why: R`B: $3 - 0 - 4 = -1$.` },
          { img: "img/q11_2.png", alt: "Oxalate resonance structures", correct: false, why: R`Each C: $4 - 0 - 4 = 0$. The $2-$ charge sits on terminal O atoms.` },
          { text: "None of the items shown", correct: false, why: R`$\ce{BH4-}$ qualifies.` },
          { img: "img/q11_4.png", alt: "HNO2", correct: false, why: R`N: $5 - 2 - 3 = 0$; O(H): $6 - 4 - 2 = 0$.` },
          { img: "img/q11_5.png", alt: "Br2", correct: false, why: R`Each Br: $7 - 6 - 1 = 0$.` },
          { img: "img/q11_6.png", alt: "HBr", correct: false, why: R`H: $1 - 0 - 1 = 0$; Br: $7 - 6 - 1 = 0$.` },
          { img: "img/q11_7.png", alt: "Azide N3-", correct: false, why: R`The trap: the ion is $-1$ overall, but the middle N is $5 - 0 - 4 = +1$. Each terminal N is $-1$, but terminal atoms are not central.` },
        ],
      },
      // ------------------------------------------------------------------ Q12
      {
        n: 12, points: 1, type: "multi",
        prompt: R`Which of the following has an overall charge of -1? Select all that apply.`,
        options: [
          { img: "img/q12_1.png", alt: "Acetate resonance structures", correct: true, why: R`$\ce{CH3COO-}$: overall $-1$.` },
          { text: "None of the items shown", correct: false, why: R`Acetate qualifies.` },
          { img: "img/q12_3.png", alt: "AlCl3", correct: false, why: R`Neutral (Al has an incomplete octet, but the molecule carries no charge).` },
          { img: "img/q12_4.png", alt: "Phosphate resonance structures", correct: false, why: R`$\ce{PO4^3-}$: $-3$.` },
          { img: "img/q12_5.png", alt: "SeO2", correct: false, why: R`Neutral.` },
          { img: "img/q12_6.png", alt: "PH3", correct: false, why: R`Neutral.` },
          { img: "img/q12_7.png", alt: "CH3NH2", correct: false, why: R`Neutral.` },
        ],
      },
      // ------------------------------------------------------------------ Q13
      {
        n: 13, points: 1, type: "multi",
        prompt: R`Which of the following has an overall charge of zero? Select all that apply.`,
        options: [
          { img: "img/q13_1.png", alt: "PCl4-", correct: false, why: R`The bracket shows a $-1$ charge.` },
          { img: "img/q13_2.png", alt: "SeCl4", correct: true, why: R`Neutral molecule.` },
          { img: "img/q13_3.png", alt: "SO2", correct: true, why: R`Neutral molecule.` },
          { img: "img/q13_4.png", alt: "OF2", correct: true, why: R`Neutral molecule.` },
          { img: "img/q13_5.png", alt: "CS2", correct: true, why: R`Neutral molecule.` },
          { img: "img/q13_6.png", alt: "C2H4", correct: true, why: R`Neutral molecule.` },
          { text: "None of the items shown", correct: false, why: R`Five options qualify.` },
        ],
      },
      // ------------------------------------------------------------------ Q14
      {
        n: 14, points: 1, type: "multi",
        prompt: R`Which of the following is a polyatomic ion? (Check all that apply)`,
        options: [
          { text: "None of the items shown", correct: false, why: R`$\ce{NH4+}$ qualifies.` },
          { img: "img/q14_2.png", alt: "N2F4", correct: false, why: R`Neutral.` },
          { img: "img/q14_3.png", alt: "NH4+", correct: true, why: R`Ammonium, $\ce{NH4+}$: a polyatomic ion.` },
          { img: "img/q14_4.png", alt: "Nitromethane resonance structures", correct: false, why: R`The trap: brackets here are resonance brackets with no charge. N is $+1$ and the singly bonded O is $-1$, so $\ce{CH3NO2}$ is neutral.` },
          { img: "img/q14_5.png", alt: "BeF2", correct: false, why: R`Neutral.` },
          { img: "img/q14_6.png", alt: "CH4", correct: false, why: R`Neutral.` },
          { img: "img/q14_7.png", alt: "H2O", correct: false, why: R`Neutral.` },
        ],
      },
      // ------------------------------------------------------------------ Q15
      {
        n: 15, points: 1, type: "multi",
        prompt: R`What is wrong with this structure of propane, C<sub>3</sub>H<sub>8</sub>?`,
        figure: { img: "img/p15_1.png", alt: "Propane drawn with a C=C double bond" },
        options: [
          { text: "The double bond should be between a carbon and a hydrogen.", correct: false, why: R`H forms only one bond.` },
          { text: "Propane must contain a three-carbon ring.", correct: false, why: R`Propane is a chain; a ring would be cyclopropane, $\ce{C3H6}$.` },
          { text: "It has too many valence electrons.", correct: true, why: R`Needs $3(4) + 8(1) = 20$. The drawing has 8 C–H + 1 C–C + 1 C=C = 11 bonds = 22 e$^-$. The double bond is the extra pair.` },
          { text: "At least one carbon has an expanded octet.", correct: true, why: R`Left C: 3 C–H + C=C = 5 bonds = 10 e$^-$; middle C: C=C + C–C + 2 C–H = 10 e$^-$. Period-2 C cannot exceed 8.` },
        ],
      },
      // ------------------------------------------------------------------ Q16
      {
        n: 16, points: 1, type: "single",
        prompt: R`What is wrong with this structure of nitrogen dioxide, NO<sub>2</sub>?`,
        figure: { img: "img/p16_1.png", alt: "O=N=O with two lone pairs on each O" },
        options: [
          { text: "It has an incorrect number of valence electrons.", correct: true, why: R`Neutral $\ce{NO2}$ needs $5 + 2(6) = 17$. The drawing has 2 double bonds (8) + 4 lone pairs (8) = 16: the unpaired electron on N is missing.` },
          { text: "Nitrogen can only make single bonds.", correct: false, why: R`N forms double and triple bonds routinely.` },
          { text: "Oxygen should be used as the central atom.", correct: false, why: R`The less electronegative N belongs in the center.` },
          { text: R`The structure does not indicate that NO<sub>2</sub> has a positive charge.`, correct: false, why: R`Nitrogen dioxide is neutral. The 16-electron drawing is really the nitronium ion $\ce{NO2+}$, which is the point: the count is wrong for $\ce{NO2}$.` },
        ],
      },
      // ------------------------------------------------------------------ Q17
      {
        n: 17, points: 1, type: "single",
        prompt: R`What is wrong with this structure of the phosphate ion (PO<sub>4</sub><sup>3−</sup>)?`,
        figure: { img: "img/p17_1.png", alt: "Phosphate drawn with four P=O double bonds" },
        options: [
          { text: "Negative formal charges should be placed on more electronegative atoms.", correct: true, why: R`P: $5 - 0 - 8 = -3$; each O: $6 - 4 - 2 = 0$. The whole $3-$ sits on P, the least electronegative atom. Better: one P=O and three P–O$^-$ (P $= 0$, three O $= -1$).` },
          { text: "It has the incorrect number of valence electrons.", correct: false, why: R`Needs $5 + 4(6) + 3 = 32$; drawing has 16 (bonds) + 16 (lone pairs) = 32.` },
          { text: "There should be a lone pair on the phosphorous.", correct: false, why: R`That would add electrons beyond 32.` },
          { text: "One of the oxygens should be used as a central atom.", correct: false, why: R`P is the central atom.` },
          { text: "The phosphorous atom has an expanded octet.", correct: false, why: R`True as a description, but allowed: P is in period 3. The fault is where the charge sits.` },
        ],
      },
      // ------------------------------------------------------------------ Q18
      {
        n: 18, points: 1, type: "multi",
        prompt: R`What is wrong with this structure of ethane, C<sub>2</sub>H<sub>6</sub>?<br><br>Select all that apply.`,
        figure: { img: "img/p18_1.png", alt: "Ethane drawn with a hydrogen between the carbons" },
        options: [
          { text: "There is a hydrogen with more than two valence electrons.", correct: true, why: R`Middle H: double bond (4) + single bond (2) + lone pair (2) = 8.` },
          { text: "There is a hydrogen making more than one bond.", correct: true, why: R`It makes 3 bonds (C=H and H–C).` },
          { text: "There is a hydrogen drawn as a central atom.", correct: true, why: R`It is bonded to 2 atoms.` },
          { text: "There is a hydrogen with a lone pair.", correct: true, why: R`The pair drawn under it. Correct structure: $\ce{H3C-CH3}$.` },
        ],
      },
      // ------------------------------------------------------------------ Q19
      {
        n: 19, points: 1, type: "multi",
        prompt: R`What is wrong with this structure of methylamine, CH<sub>5</sub>N?<br><br>Select all that apply.`,
        figure: { img: "img/p19_1.png", alt: "Methylamine drawn with a hydrogen between N and C" },
        options: [
          { text: "There is a hydrogen with more than two valence electrons.", correct: true, why: R`Middle H: N–H + H=C + lone pair = 8 e$^-$.` },
          { text: "There is a hydrogen making more than one bond.", correct: true, why: R`3 bonds.` },
          { text: "There is a hydrogen being used as a central atom.", correct: true, why: R`Bonded to 2 atoms.` },
          { text: "There is a hydrogen with a lone pair.", correct: true, why: R`Drawn under it. (Also unlisted: N has 3 bonds and no lone pair, only 6 e$^-$. Correct: $\ce{H3C-NH2}$.)` },
        ],
      },
      // ------------------------------------------------------------------ Q20
      {
        n: 20, points: 1, type: "multi",
        prompt: R`Which of the following are not possible Lewis structures? Select all that apply.`,
        options: [
          { img: "img/q20_1.png", alt: ":N=O: with one unpaired electron on each atom", correct: true, why: R`Bonds 4 + nonbonding 6 = 10, not 11.` },
          { img: "img/q20_2.png", alt: "N=O with two lone pairs on each atom", correct: true, why: R`4 + 8 = 12 (that is $\ce{NO-}$, but no charge is shown).` },
          { img: "img/q20_3.png", alt: ":N=O with two lone pairs on O and an unpaired electron on N", correct: false, why: R`4 + 7 = 11 = $5 + 6$. Valid: N has 7 (radical), O has 8.` },
          { img: "img/q20_4.png", alt: ":N≡O:", correct: true, why: R`6 + 4 = 10 (that is $\ce{NO+}$, but no charge is shown).` },
        ],
        note: R`Neutral $\ce{NO}$ must have $5 + 6 = 11$ valence electrons.`,
      },
      // ------------------------------------------------------------------ Q21
      {
        n: 21, points: 1, type: "multi",
        prompt: R`Which of the following are not possible Lewis structures? Select all that apply.`,
        options: [
          { img: "img/q21_1.png", alt: "[:N≡C–O:]- with three lone pairs on O", correct: false, why: R`$8 + 2 + 6 = 16$; N, C, O all have 8. Valid.` },
          { img: "img/q21_2.png", alt: "[:N=C=O:]- with three lone pairs on O", correct: true, why: R`Count is 16, but N has 6 and O has 10. Period-2 O cannot expand.` },
          { img: "img/q21_3.png", alt: "[:N=C=O]- with two lone pairs on O", correct: true, why: R`Only $8 + 2 + 4 = 14$ e$^-$; N has 6.` },
          { img: "img/q21_4.png", alt: "[:N≡C=O]-", correct: true, why: R`Count is 16, but C has 5 bonds = 10 e$^-$.` },
        ],
        note: R`Cyanate $\ce{OCN-}$ needs $5 + 4 + 6 + 1 = 16$. A correct count is necessary but not sufficient: every period-2 atom must also stay at 8.`,
      },
      // ------------------------------------------------------------------ Q22
      {
        n: 22, points: 1, type: "multi",
        prompt: R`What is wrong with this structure of phosphoric acid, H<sub>3</sub>PO<sub>4</sub>?<br><br>Select all that apply.`,
        figure: { img: "img/p22_1.png", alt: "Phosphoric acid drawn with an H–H bond" },
        options: [
          { text: "At least one atom has an incomplete octet, and it shouldn't.", correct: false, why: R`Every O has 8; P has 12. No atom is short.` },
          { text: "At least one atom that cannot expand its octet (or duet) has an expanded octet (or duet).", correct: true, why: R`The H bonded to both O and H has 4 e$^-$.` },
          { text: "Incorrect valence count", correct: true, why: R`Needs $3(1) + 5 + 4(6) = 32$. Drawing: 18 bonding + 16 nonbonding = 34.` },
          { text: "At least one hydrogen is making more than one bond, or a hydrogen has a lone pair.", correct: true, why: R`That same H makes 2 bonds.` },
          { text: "Formal charges are minimized, but a negative formal charge could be placed on a more-electronegative atom or a positive formal charge could be placed on a less-electronegative atom.", correct: false, why: R`Premise false: P ($5 - 0 - 6 = -1$) and the middle H ($1 - 0 - 2 = -1$) carry charge, so charges are not minimized.` },
        ],
        note: R`P with 12 e$^-$ is allowed (period 3). Correct structure: one P=O and three P–O–H, all formal charges 0.`,
      },
      // ------------------------------------------------------------------ Q23
      {
        n: 23, points: 1, type: "multi",
        prompt: R`What is wrong with this structure of pyrrole, C<sub>4</sub>H<sub>5</sub>N?<br><br>Select ALL that apply.`,
        figure: { img: "img/p23_1.png", alt: "Pyrrole drawn with N+ and a C- lone pair" },
        options: [
          { text: "At least one atom has an incomplete octet, and it shouldn't.", correct: false, why: R`N has 8, every C has 8, every H has 2.` },
          { text: "Formal charges are not minimized.", correct: true, why: R`N: $5 - 0 - 4 = +1$; bottom-right C: $4 - 2 - 3 = -1$. An all-zero structure exists (real pyrrole: N with 3 single bonds + a lone pair, two C=C on the carbon side).` },
          { text: "Formal charges are minimized, but a negative formal charge could be placed on a more-electronegative atom or a positive formal charge could be placed on a less-electronegative atom.", correct: false, why: R`Premise false: the charges can be removed entirely. (They are also misplaced, but this option is for unavoidable charges, as in Q17.)` },
          { text: "At least one atom that cannot expand its octet (or duet) has an expanded octet (or duet).", correct: false, why: R`No atom exceeds its limit.` },
        ],
        note: R`Decision rule: first ask whether any arrangement makes the charges smaller ("not minimized"). Only if not, ask whether the unavoidable charges sit on the right atoms.`,
      },
      // ------------------------------------------------------------------ Q24
      {
        n: 24, points: 1, type: "multi",
        prompt: R`What is wrong with this structure of acetate, C<sub>2</sub>H<sub>3</sub>O<sub>2</sub><sup>−</sup>?<br><br>Select all that apply.`,
        figure: { img: "img/p24_1.png", alt: "Acetate drawn with C+ and two O-" },
        options: [
          { text: "At least one atom that can not expand its octet (or duet) has an expanded octet (or duet).", correct: false, why: R`Carboxyl C has 6; the other C and both O have 8; each H has 2.` },
          { text: "Formal charges are minimized, but a negative formal charge could be placed on a more-electronegative atom or a positive formal charge could be placed on a less-electronegative atom.", correct: false, why: R`Premise false: the charges can be made smaller.` },
          { text: "At least one hydrogen is making more than one bond, or a hydrogen has a lone pair.", correct: false, why: R`Each H has exactly 1 bond.` },
          { text: "At least one atom has an incomplete octet, and it shouldn't.", correct: true, why: R`Carboxyl C: 3 single bonds, no lone pair $\Rightarrow$ 6 e$^-$.` },
          { text: "Formal charges are not minimized.", correct: true, why: R`C $= 4 - 0 - 3 = +1$; each O $= 6 - 6 - 1 = -1$. Moving one O lone pair into C=O gives C $= 0$, that O $= 0$, other O $= -1$.` },
        ],
        note: R`Count is fine: $2(4) + 3(1) + 2(6) + 1 = 24$.`,
      },
      // ------------------------------------------------------------------ Q25
      {
        n: 25, points: 1, type: "single",
        prompt: R`Which of the following is the best Lewis structure?<br><br>Hint: Formal Charge!`,
        options: [
          { text: "all of these structures are equally stable", correct: false, why: R`Their formal charges differ, so they are not equally stable.` },
          { img: "img/q25_1.png", alt: "N=N=O", correct: false, why: R`End N: $5 - 4 - 2 = -1$; middle N: $+1$; O: $0$. Same size as N≡N–O, but the $-1$ is on the less electronegative N.` },
          { img: "img/q25_2.png", alt: "N≡N–O", correct: true, why: R`End N: $5 - 2 - 3 = 0$; middle N: $+1$; O: $6 - 6 - 1 = -1$. The $-1$ is on O, the most electronegative atom.` },
          { img: "img/q25_3.png", alt: "N–N≡O", correct: false, why: R`End N: $5 - 6 - 1 = -2$; O: $6 - 2 - 3 = +1$. Largest charges, and $+$ on O.` },
        ],
      },
      // ------------------------------------------------------------------ Q26
      {
        n: 26, points: 1, type: "single",
        prompt: R`Which of the following is the best Lewis structure?<br><br>Hint: Formal Charge!`,
        options: [
          { img: "img/q26_1.png", alt: "[S=C=N]-", correct: true, why: R`S: $6 - 4 - 2 = 0$; C: $0$; N: $5 - 4 - 2 = -1$. The $-1$ is on N (3.0), more electronegative than S (2.6).` },
          { img: "img/q26_2.png", alt: "[S≡C–N]-", correct: false, why: R`S: $6 - 2 - 3 = +1$; N: $5 - 6 - 1 = -2$.` },
          { text: "all of these structures are equally stable", correct: false, why: R`Formal charges differ.` },
          { img: "img/q26_3.png", alt: "[S–C≡N]-", correct: false, why: R`S: $6 - 6 - 1 = -1$; N: $0$. Ties S=C=N on size, but the $-1$ is on the less electronegative S.` },
        ],
      },
      // ------------------------------------------------------------------ Q27
      {
        n: 27, points: 1, type: "multi",
        prompt: R`Which of these are NOT <em>equivalent</em> to the following structure?`,
        figure: { img: "img/q27a_1.png", alt: "Carbonate: one C=O and two C–O-, overall 2-" },
        prompt2: "Check all that apply",
        options: [
          { img: "img/q27a_2.png", alt: "Three C=O double bonds, lone pair on C, 4-", correct: true, why: R`Overall $4-$ (26 e$^-$, wrong count), and C has 3 double bonds + a lone pair = 14 e$^-$.` },
          { img: "img/q27a_3.png", alt: "O=C–O-, single-bonded bottom O-", correct: false, why: R`One C=O and two C–O$^-$: the reference with the double bond moved. Valid resonance form.` },
          { img: "img/q27b_1.png", alt: "Two double bonds and one single, C-", correct: true, why: R`C has 5 bonds = 10 e$^-$ (FC $4 - 0 - 5 = -1$). Period-2 C cannot exceed 8.` },
          { img: "img/q27b_2.png", alt: "Three double bonds, 2- on C", correct: true, why: R`C has 6 bonds = 12 e$^-$ (FC $= -2$). Impossible.` },
          { text: "none of the above", correct: false, why: R`Four options are not equivalent.` },
          { img: "img/q27b_3.png", alt: "All single bonds, C+", correct: true, why: R`Count (24) and net charge ($+1 - 3 = -2$) work, but C has only 6 e$^-$ and the charge pattern differs from the reference.` },
          { img: "img/q27c_1.png", alt: "O-–C=O, single-bonded bottom O-", correct: false, why: R`Double bond moved to the right O. Valid resonance form.` },
        ],
        note: R`Reference: carbonate, $4 + 3(6) + 2 = 24$ e$^-$; C $= 0$, O(=) $= 0$, each O(–) $= -1$. Equivalent = same 24 e$^-$, same $2-$, C at exactly 8, same charge pattern.`,
      },
      // ------------------------------------------------------------------ Q28
      {
        n: 28, points: 1, bonus: true, type: "single", photos: true,
        title: "Question 28 (Bonus)",
        prompt: R`Which of these is your class mascot?`,
        options: [
          { img: "img/q28a_1.png", alt: "Chestnut horse with a white blaze", correct: false, why: R`Not the mascot.` },
          { img: "img/q28a_2.png", alt: "Tabby cat peeking out of a wooden box", correct: true, why: R`The class mascot. This answer earned the bonus point (26 / 25).` },
          { img: "img/q28b_1.png", alt: "Plush unicorn", correct: false, why: R`Not the mascot.` },
          { img: "img/q28b_2.png", alt: "Plush blue dragon", correct: false, why: R`Not the mascot.` },
          { img: "img/q28b_3.png", alt: "Bay horse in a halter", correct: false, why: R`Not the mascot.` },
        ],
      },
    ],
  };
})();
