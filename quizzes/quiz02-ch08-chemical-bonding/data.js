/* Quiz 2 — Chapter 8: Introduction to Chemical Bonding.
 * Every question posed in the Ch. 8 lecture deck (181.8_Ch_8_2026.pptx): the YOUR TURN
 * slides, the "Example from homework / past exam" screenshots (including hidden slides and
 * the cropped-off Part C on slide 36), and the questions asked inline on content slides.
 * Plus 9 questions added while vetting (tagged "Added" in `src`): ionization-energy definition
 * and sign, Born–Haber step names / signs / lattice-energy convention, and formal-charge terms.
 *
 * Question types
 *   single  : radio buttons, one correct option
 *   multi   : checkboxes, scored right-minus-wrong per option
 *   match   : drop-down per item, scored per item (optional `unit` is appended in the panel)
 *   numeric : typed number; `answer`, optional `tol`, `unit`, `answerText`; accepts 1.5, 3/2, "1 1/2", +222
 *
 * Common fields
 *   src     : where the question comes from in the deck (shown as a tag)
 *   refs    : keys into QUIZ.refs, shown as collapsible reference figures
 *   figure  : { img, alt } shown under the prompt
 *   why     : explanation (per option, per item, or per numeric question). KaTeX: $...$, $\ce{...}$
 */
(function () {
  const R = String.raw;
  const FC = R`$\mathrm{FC} = V - N - B$`;
  const DH = R`$\Delta H = \sum D(\text{bonds broken}) - \sum D(\text{bonds formed})$`;

  window.QUIZ = {
    id: "chem181-quiz02-ch08-bonding",
    course: "CHEM 181",
    title: "Quiz 2 — Ch. 8: Chemical Bonding",
    scoring: "Every question is worth 1 point. Single-choice and numeric questions are all or nothing; match questions are scored per item. An unanswered question scores 0.",
    toolsNote: R`Tools: ${FC} (Q34 asks what each term means). ${DH}. Tags show the source slide; "hidden" means the slide is hidden in the deck's slideshow. Reference tables open from the drawers under each prompt.`,
    refs: {
      pt: { label: "Periodic table (from the deck)", img: "img/ref_periodic_table.png", alt: "Periodic table" },
      en: { label: "Pauling electronegativities (from the deck)", img: "img/ref_electronegativity.png", alt: "Electronegativity periodic table" },
      bonds: { label: "Table 8.3 — Average bond enthalpies, kJ/mol (from the deck)", img: "img/ref_bond_enthalpies.png", alt: "Average bond enthalpy table" },
    },
    questions: [
      // ================================================================ Energetics
      {
        n: 1, points: 1, type: "single", src: "Slide 5 · past exam",
        prompt: R`Consider the dissociation reaction of the oxygen molecule: $\ce{O2 -> O + O}$. Indicate the correct sign of the reaction enthalpy ($\Delta H$) and state whether the reaction is endothermic or exothermic.`,
        options: [
          { text: R`$\Delta H > 0$, the reaction is endothermic`, correct: true,
            why: R`Breaking a bond always takes energy: $\Delta H = +D(\ce{O=O}) \approx +495$ kJ/mol. Heat absorbed, so endothermic.` },
          { text: R`$\Delta H < 0$, the reaction is endothermic`, correct: false,
            why: R`Self-contradictory: endothermic means heat is absorbed, which is $\Delta H > 0$.` },
          { text: R`$\Delta H > 0$, the reaction is exothermic`, correct: false,
            why: R`Self-contradictory: exothermic means heat is released, which is $\Delta H < 0$.` },
          { text: R`$\Delta H < 0$, the reaction is exothermic`, correct: false,
            why: R`That describes bond <em>formation</em> ($\ce{O + O -> O2}$), the reverse reaction.` },
        ],
      },
      {
        n: 2, points: 1, type: "single", src: "Slide 6 · YOUR TURN",
        prompt: R`In the reaction $\ce{KCl(s) -> K+(g) + Cl-(g)}$, is energy released or absorbed?`,
        options: [
          { text: "Energy is released (this reaction is exothermic)", correct: false,
            why: R`Releasing energy happens in the reverse direction, when gaseous ions condense into the lattice.` },
          { text: "Energy is absorbed (this reaction is endothermic)", correct: true,
            why: R`Pulling oppositely charged ions apart against Coulomb attraction costs energy. This is exactly the lattice energy: about $+701$ kJ/mol for KCl (slide 42).` },
          { text: "Neither. The separation of ions does not cause a change in energy", correct: false,
            why: R`Coulomb potential energy $\propto q_+q_-/r$ changes as $r$ grows, so separating ions changes the energy.` },
          { text: "Not enough information", correct: false,
            why: R`The sign follows from electrostatics alone; no numbers are needed.` },
        ],
      },
      {
        n: 3, points: 1, type: "single", src: "Added · supports slides 7, 38",
        prompt: R`Which of the following is the definition of <strong>ionization energy</strong>?`,
        options: [
          { text: R`The energy required to remove an electron from a gaseous atom or ion in its ground state, e.g. $\ce{Na(g) -> Na+(g) + e-}$`, correct: true,
            why: R`That is the definition. "Gaseous" matters: the atom must be isolated, so no lattice or solvent energy is mixed in. The first ionization energy $IE_1$ removes the first electron, $IE_2$ the next, and so on.` },
          { text: R`The energy change when a gaseous atom gains an electron, e.g. $\ce{Cl(g) + e- -> Cl-(g)}$`, correct: false,
            why: R`That is the <strong>electron affinity</strong>: an electron is added, not removed (step 4 in the KF Born–Haber cycle, Q23).` },
          { text: R`The energy required to completely separate one mole of a solid ionic compound into its gaseous ions`, correct: false,
            why: R`That is the <strong>lattice energy</strong> (slide 39), e.g. $\ce{NaCl(s) -> Na+(g) + Cl-(g)}$, $+788$ kJ/mol.` },
          { text: R`The energy required to break one mole of a bond in the gas phase`, correct: false,
            why: R`That is the <strong>bond enthalpy</strong> (slide 68): it splits atoms apart, not an electron off an atom.` },
          { text: R`The energy required to remove an electron from an atom in the solid metal`, correct: false,
            why: R`Removing an electron from a bulk solid is the <em>work function</em> (photoelectric effect), not the ionization energy, which is defined for isolated gaseous atoms.` },
        ],
      },
      {
        n: 4, points: 1, type: "single", src: "Added · supports slides 7, 38",
        prompt: R`True or false: ionization energy is always positive.`,
        options: [
          { text: "True", correct: true,
            why: R`The nucleus attracts every electron, so pulling one off always takes energy: $IE > 0$ (Na: $+496$; Cl: $+1251$ kJ/mol). Successive ionization energies rise further, $IE_1 < IE_2 < \dots$, because each electron leaves an increasingly positive ion. This is why "a metal losing an electron" (Q5) is endothermic.` },
          { text: "False", correct: false,
            why: R`No neutral atom or cation releases energy when it loses an electron. Do not confuse this with <strong>electron affinity</strong>, which <em>can</em> have either sign (Cl: $-349$ kJ/mol releases energy; adding a second electron to $\ce{O-}$ costs energy, on the order of $+800$ kJ/mol).` },
        ],
        note: R`Fine print: the statement holds for atoms and cations, which is what the definition covers. A gas-phase dianion like $\ce{O^2-}$ is not bound at all (its second electron leaves on its own), which is why $\ce{O^2-}$ only exists stabilized inside a lattice. That is beyond this course.`,
      },
      {
        n: 5, points: 1, type: "single", src: "Slide 7 · homework · hidden",
        prompt: R`When a metal loses an electron, the process is exothermic.`,
        options: [
          { text: "True", correct: false,
            why: R`Removing an electron from any gaseous atom requires energy: the ionization energy is always positive (Na: $+496$ kJ/mol).` },
          { text: "False", correct: true,
            why: R`Ionization is endothermic. Metals lose electrons <em>relatively easily</em> (low IE), but it is never energetically downhill on its own; the payoff comes later, from lattice formation (Born–Haber).` },
        ],
      },

      // ================================================================ Lewis symbols, octet rule
      {
        n: 6, points: 1, type: "single", src: "Slide 11 · YOUR TURN",
        prompt: R`Which of these Lewis symbols for Cl is/are correct?`,
        figure: { img: "img/s11_cl_symbols.png", alt: "Three Lewis symbols for Cl labeled (a), (b), (c)" },
        options: [
          { text: "Structure (a) is correct, (b) and (c) are incorrect", correct: false, why: R`(b) is also correct: it has 7 dots too.` },
          { text: "Structures (a) and (b) are correct, (c) is incorrect", correct: true,
            why: R`Cl is $[\ce{Ne}]3s^2 3p^5$: 7 valence e$^-$, so 3 pairs + 1 single dot. Which side the single dot sits on does not matter, so (a) and (b) are both fine. (c) shows only 5 dots.` },
          { text: "Structure (b) is correct, (a) and (c) are incorrect", correct: false, why: R`(a) has 7 dots (3 pairs + 1); dot placement around the symbol is arbitrary.` },
          { text: "Structure (c) is correct, (a) and (b) are incorrect", correct: false, why: R`(c) has $2 + 1 + 1 + 1 = 5$ dots, but Cl has 7 valence electrons.` },
          { text: "All three structures are incorrect", correct: false, why: R`(a) and (b) each show 7 valence electrons, as they should.` },
        ],
      },
      {
        n: 7, points: 1, type: "single", src: "Slide 12 · posed on slide",
        prompt: R`The octet rule: atoms tend to gain, lose, or share electrons until surrounded by eight valence electrons. <strong>Why eight</strong> (and not, for example, four)?`,
        options: [
          { text: R`Eight electrons fill the valence $ns$ and $np$ subshells ($2 + 6$), giving the noble-gas configuration`, correct: true,
            why: R`One $s$ orbital + three $p$ orbitals, 2 e$^-$ each: $ns^2np^6$. For H and He the valence shell is only $1s$, so the "octet" is a duet (slide 22: octet means full valence shell).` },
          { text: "Every electron shell can hold exactly eight electrons", correct: false,
            why: R`Shell $n$ holds $2n^2$: 2, 8, 18, 32. Only $n = 2$ holds exactly 8.` },
          { text: "The valence shell has eight orbitals", correct: false,
            why: R`$s + p$ is 4 orbitals; each holds 2 electrons, which is where 8 comes from.` },
          { text: "Atoms always prefer an even number of electrons", correct: false,
            why: R`Radicals like $\ce{NO}$ (slide 84) exist with odd counts, and evenness alone would not single out 8.` },
        ],
      },
      {
        n: 8, points: 1, type: "single", src: "Slide 13 · homework", refs: ["pt"],
        prompt: R`Which of the following has eight valence electrons?`,
        options: [
          { text: R`$\ce{Kr}$`, correct: false, why: R`True on its own ($4s^24p^6$), but not the best answer: the others also have 8.` },
          { text: R`$\ce{Na+}$`, correct: false, why: R`$[\ce{He}]2s^22p^6$: 8 in the outer shell, but so do the others.` },
          { text: R`$\ce{Ti^4+}$`, correct: false, why: R`Ti loses $4s^2$ and $3d^2$ to reach $[\ce{Ar}]$: outer shell $3s^23p^6$ = 8. Also true, but not the only one.` },
          { text: R`$\ce{Cl-}$`, correct: false, why: R`$[\ce{Ne}]3s^23p^6$ = 8, but not the only one.` },
          { text: "all of the above", correct: true, why: R`All four end up isoelectronic with a noble gas, each with an $ns^2np^6$ outer shell.` },
        ],
      },
      {
        n: 9, points: 1, type: "single", src: "Slide 14 · homework", refs: ["pt"],
        prompt: R`Based on the octet rule, magnesium most likely forms a ________ ion.`,
        options: [
          { text: R`$\ce{Mg^6-}$`, correct: false, why: R`Gaining 6 electrons to reach $3s^23p^6$ is far costlier than losing 2.` },
          { text: R`$\ce{Mg^6+}$`, correct: false, why: R`After losing $3s^2$, Mg is $[\ce{Ne}]$; removing core $2p$ electrons is enormously expensive.` },
          { text: R`$\ce{Mg^2-}$`, correct: false, why: R`Mg is a metal (group 2); it loses electrons, it does not gain them.` },
          { text: R`$\ce{Mg^2+}$`, correct: true, why: R`Mg: $[\ce{Ne}]3s^2$. Losing both $3s$ electrons leaves the Ne octet $2s^22p^6$.` },
          { text: R`$\ce{Mg-}$`, correct: false, why: R`Neither a noble-gas configuration nor the direction a metal goes.` },
        ],
      },
      {
        n: 10, points: 1, type: "single", src: "Slide 15 · homework · hidden", refs: ["pt"],
        prompt: R`The ________ ion has a noble gas electron configuration.`,
        options: [
          { text: R`$\ce{Mg^2+}$`, correct: true, why: R`12 − 2 = 10 electrons: $1s^22s^22p^6$, the Ne configuration.` },
          { text: R`$\ce{Be}$`, correct: false, why: R`Neutral Be is not an ion, and $1s^22s^2$ is not a noble-gas configuration.` },
          { text: R`$\ce{Li^2-}$`, correct: false, why: R`3 + 2 = 5 electrons: $1s^22s^22p^1$ (isoelectronic with B, not a noble gas).` },
          { text: R`$\ce{Be^3+}$`, correct: false, why: R`4 − 3 = 1 electron: $1s^1$ (like H, not He).` },
          { text: R`$\ce{Mg^2-}$`, correct: false, why: R`12 + 2 = 14 electrons: $[\ce{Ne}]3s^23p^2$ (like Si).` },
        ],
      },

      // ================================================================ Covalent bonding
      {
        n: 11, points: 1, type: "single", src: "Slide 17 · posed on slide",
        prompt: R`Without electrons, two positively charged nuclei repel each other. What happens if electron density (negative charge) is concentrated predominantly <em>between</em> the two nuclei?`,
        options: [
          { text: "Both nuclei are attracted toward that negative charge, i.e. toward each other; this balances the nuclear repulsion and gives a stable bond", correct: true,
            why: R`That is the covalent bond on slide 17: the shared density acts as electrostatic glue, and the equilibrium separation is the bond length.` },
          { text: "The nuclei repel each other more strongly", correct: false, why: R`Nucleus–nucleus repulsion depends only on their charges and separation; the electrons add attraction.` },
          { text: "The electrons repel both nuclei, pushing them apart", correct: false, why: R`Electrons and nuclei have opposite charges, so they attract.` },
          { text: "Nothing changes; only the nuclei determine bonding", correct: false, why: R`The electron distribution is what makes the bond.` },
        ],
      },
      {
        n: 12, points: 1, type: "single", src: "Slide 23 · homework", refs: ["pt"],
        prompt: R`How many hydrogen atoms must bond to silicon to give it an octet of valence electrons?`,
        options: [
          { text: "1", correct: false, why: R`Si would have $4 + 1 = 5$ electrons around it.` },
          { text: "2", correct: false, why: R`$4 + 2 = 6$: not an octet.` },
          { text: "3", correct: false, why: R`$4 + 3 = 7$: one short.` },
          { text: "4", correct: true, why: R`Si is group 4A (14): 4 valence e$^-$, so it needs $8 - 4 = 4$ more. $\ce{SiH4}$, like $\ce{CH4}$.` },
          { text: "5", correct: false, why: R`Would give 9 electrons.` },
        ],
      },
      {
        n: 13, points: 1, type: "match", src: "Slide 25 · homework & exam template", refs: ["pt"],
        prompt: R`The slide is a template for several homework and exam questions: "What is the maximum number of <em>single / double / triple</em> bonds that a <em>hydrogen / oxygen / carbon</em> atom can form?" Answer all versions, with nitrogen added, using the valence rule (each atom's formal charge is zero).`,
        choices: ["0", "1", "2", "3", "4"],
        items: [
          { label: "Hydrogen — single bonds", answer: "1", why: R`H has one electron and needs one more for its duet: one bond, ever.` },
          { label: "Hydrogen — double bonds", answer: "0", why: R`A double bond needs 2 shared pairs; H can share only one.` },
          { label: "Hydrogen — triple bonds", answer: "0", why: R`Same reason: one bond total.` },
          { label: "Oxygen — single bonds", answer: "2", why: R`O needs $8 - 6 = 2$ electrons: two single bonds ($\ce{H2O}$).` },
          { label: "Oxygen — double bonds", answer: "1", why: R`Two bonds' worth of capacity = one double bond ($\ce{O=C=O}$).` },
          { label: "Oxygen — triple bonds", answer: "0", why: R`A triple bond is three bonds; neutral O makes two. (O <em>can</em> carry a triple bond with formal charge $+1$, as in $\ce{CO}$, Q41 — which is why the zero-formal-charge condition is stated.)` },
          { label: "Nitrogen — single bonds", answer: "3", why: R`$V = 5$: $N + B = 5$ and $N + 2B = 8$ give $B = 3$, $N = 2$. Three single bonds and one lone pair ($\ce{NH3}$): $\mathrm{FC} = 5 - 2 - 3 = 0$.` },
          { label: "Nitrogen — double bonds", answer: "1", why: R`One double bond uses 2 of N's 3 bonds; the third is a single bond ($\ce{H-N=N-H}$): $\mathrm{FC} = 5 - 2 - 3 = 0$. Two double bonds would be $B = 4$, $N = 0$: $\mathrm{FC} = 5 - 0 - 4 = +1$ as on the central N of azide, $[\ce{N=N=N}]^-$).` },
          { label: "Nitrogen — triple bonds", answer: "1", why: R`A triple bond uses all 3 bonds, leaving one lone pair ($\ce{N#N}$, $\ce{HC#N}$): $\mathrm{FC} = 5 - 2 - 3 = 0$.` },
          { label: "Carbon — single bonds", answer: "4", why: R`C needs $8 - 4 = 4$: four single bonds ($\ce{CH4}$).` },
          { label: "Carbon — double bonds", answer: "2", why: R`4 bonds = two double bonds ($\ce{CO2}$, allene).` },
          { label: "Carbon — triple bonds", answer: "1", why: R`A triple bond uses 3 of C's 4 bonds; the 4th is a single bond ($\ce{HC#CH}$, $\ce{HCN}$).` },
        ],
      },
      {
        n: 14, points: 1, type: "single", src: "Slide 26 · homework",
        prompt: R`Based on the description of covalent bonding given previously, do you expect the $\ce{H-H}$ bond in $\ce{H2+}$ to be weaker or stronger than the $\ce{H-H}$ bond in $\ce{H2}$?`,
        options: [
          { text: R`The $\ce{H-H}$ bond in $\ce{H2+}$ is weaker than the $\ce{H-H}$ bond in $\ce{H2}$.`, correct: true,
            why: R`$\ce{H2+}$ has one shared electron instead of two: 2 electrons = 1 bond, so 1 electron = $\tfrac{1}{2}$ bond. Less density between the nuclei, weaker bond (measured: about 256 vs 436 kJ/mol).` },
          { text: R`The $\ce{H-H}$ bond in $\ce{H2+}$ is stronger than the $\ce{H-H}$ bond in $\ce{H2}$.`, correct: false,
            why: R`Removing a bonding electron lowers the bond order from 1 to $\tfrac12$, which weakens the bond.` },
        ],
      },

      // ================================================================ Ions
      {
        n: 15, points: 1, type: "single", src: "Slide 29 · past exam (a)", refs: ["pt"],
        prompt: R`Write the condensed electron configuration of $\ce{O^2+}$.`,
        options: [
          { text: R`$[\ce{He}]\,2s^2 2p^2$`, correct: true, why: R`O is $[\ce{He}]2s^22p^4$. A cation loses its highest-energy electrons first, the $2p$: remove 2 to get $2s^22p^2$.` },
          { text: R`$[\ce{He}]\,2s^2 2p^6$`, correct: false, why: R`That is $\ce{O^2-}$ (two electrons <em>added</em>).` },
          { text: R`$[\ce{He}]\,2s^2 2p^4$`, correct: false, why: R`That is neutral O.` },
          { text: R`$[\ce{He}]\,2p^4$`, correct: false, why: R`Removes the $2s$ pair instead of $2p$ electrons. The $2s$ is lower in energy.` },
          { text: R`$[\ce{Ne}]$`, correct: false, why: R`That is $\ce{O^2-}$ again, written with the noble-gas core.` },
        ],
      },
      {
        n: 16, points: 1, type: "single", src: "Slide 29 · past exam (b)", refs: ["pt"],
        prompt: R`Write the condensed electron configuration of $\ce{Fe^3+}$.`,
        options: [
          { text: R`$[\ce{Ar}]\,4s^2 3d^3$`, correct: false, why: R`The slide's "Wrong" answer: it removes $3d$ electrons first. Transition metals lose $4s$ before $3d$.` },
          { text: R`$[\ce{Ar}]\,3d^5$`, correct: true, why: R`Fe: $[\ce{Ar}]4s^23d^6$. Remove both $4s$ electrons, then one $3d$: $3d^5$. In the cation the $3d$ drops below $4s$ (slides 30–31).` },
          { text: R`$[\ce{Ar}]\,4s^1 3d^4$`, correct: false, why: R`Wrong order: the $4s$ empties completely before any $3d$ electron leaves.` },
          { text: R`$[\ce{Ar}]\,3d^6$`, correct: false, why: R`That is $\ce{Fe^2+}$ (only the two $4s$ electrons removed).` },
          { text: R`$[\ce{Ar}]\,4s^2 3d^6$`, correct: false, why: R`That is neutral Fe.` },
        ],
      },
      {
        n: 17, points: 1, type: "single", src: "Slide 32 · homework · hidden", refs: ["pt"],
        prompt: R`What is the electron configuration for the $\ce{Co^2+}$ ion?`,
        options: [
          { text: R`$[\ce{Ne}]\,3s^2 3p^{10}$`, correct: false, why: R`Impossible: a $p$ subshell holds at most 6.` },
          { text: R`$[\ce{Ar}]\,3d^7$`, correct: true, why: R`Co: $[\ce{Ar}]4s^23d^7$. Remove the two $4s$ electrons: $[\ce{Ar}]3d^7$ (25 electrons).` },
          { text: R`$[\ce{Ar}]\,3d^5$`, correct: false, why: R`Only 23 electrons; that is $\ce{Co^4+}$ (or $\ce{Fe^3+}$).` },
          { text: R`$[\ce{Ar}]\,4s^1 3d^6$`, correct: false, why: R`Right count, wrong order: $4s$ empties before $3d$.` },
          { text: R`$[\ce{Ar}]\,4s^2 3d^9$`, correct: false, why: R`29 electrons: that is more than neutral Co (27).` },
        ],
      },
      {
        n: 18, points: 1, type: "single", src: "Slide 33 · homework · hidden", refs: ["pt"],
        prompt: R`The electron configuration of the $\ce{P^3-}$ ion is ________.`,
        options: [
          { text: R`$[\ce{Ne}]\,3s^2 3p^2$`, correct: false, why: R`14 electrons: that is $\ce{P+}$ (an electron removed, not three added).` },
          { text: R`$[\ce{Kr}]\,3s^2 2p^6$`, correct: false, why: R`Nonsense: the $[\ce{Kr}]$ core already contains $n = 2$ and 3 shells.` },
          { text: R`$[\ce{Ar}]\,3s^2 3p^2$`, correct: false, why: R`Double-counts the third shell: $[\ce{Ar}]$ already includes $3s^23p^6$.` },
          { text: R`$[\ce{Ar}]\,3s^2 3p^6$`, correct: false, why: R`Same core error: this would be 26 electrons.` },
          { text: R`$[\ce{Ne}]\,3s^2 3p^6$`, correct: true, why: R`P: $[\ce{Ne}]3s^23p^3$. Add 3 electrons: $3p^6$. 18 electrons, isoelectronic with Ar.` },
        ],
      },
      {
        n: 19, points: 1, type: "single", src: "Slide 34 · YOUR TURN · hidden", refs: ["pt"],
        prompt: R`Which element forms a 3+ ion that has the electron configuration $[\ce{Kr}]\,4d^6$?`,
        options: [
          { text: "Fe", correct: false, why: R`$\ce{Fe^3+}$ is $[\ce{Ar}]3d^5$: wrong core and wrong $d$ count.` },
          { text: "Co", correct: false, why: R`$\ce{Co^3+}$ is $[\ce{Ar}]3d^6$: right $d^6$, but period 4 has an Ar core, not Kr.` },
          { text: "Pd", correct: false, why: R`Pd has 46 electrons; $\ce{Pd^3+}$ has 43 = $[\ce{Kr}]4d^7$.` },
          { text: "Rh", correct: true, why: R`A $[\ce{Kr}]$ core puts it in period 5. $36 + 6 = 42$ electrons in the ion, so $Z = 42 + 3 = 45$: Rh. (Rh $[\ce{Kr}]5s^24d^7$ loses $5s^2$ then one $4d$.)` },
        ],
      },
      {
        n: 20, points: 1, type: "single", src: "Slide 36 · homework Part A · hidden",
        prompt: R`Using Lewis symbols, diagram the reaction between magnesium and oxygen atoms to give the ionic substance $\ce{MgO}$.`,
        options: [
          { img: "img/s36_opt1.png", alt: "Mg gives one electron to O, giving Mg+ and O-", correct: false,
            why: R`Only one electron moves, giving $\ce{Mg+}$ and an O with 7 electrons. Mg has 2 valence electrons and O needs 2.` },
          { img: "img/s36_opt2.png", alt: "One arrow Mg to O, one arrow O back to Mg; Mg2+ keeps two dots", correct: false,
            why: R`One arrow runs from O back to Mg, so the product shows Mg still holding 2 dots and O with only 6. The charges written do not match the electrons drawn.` },
          { img: "img/s36_opt3.png", alt: "Both Mg electrons go to O, giving Mg2+ and O2- with 8 dots", correct: true,
            why: R`Both Mg electrons go to O: $\ce{Mg^2+}$ with no valence dots, and $[\ce{O}]^{2-}$ with a full octet (8 dots).` },
          { img: "img/s36_opt4.png", alt: "Electrons shared, Mg::O", correct: false,
            why: R`Shows electron <em>sharing</em> (a covalent double bond), and the arrows point toward Mg. MgO is ionic: a metal (low IE) transfers electrons to a nonmetal.` },
        ],
      },
      {
        n: 21, points: 1, type: "numeric", src: "Slide 36 · homework Part B · hidden",
        prompt: R`For the formation of $\ce{MgO}$ from Mg and O atoms: how many electrons are transferred?`,
        unit: "electrons", answer: 2,
        why: R`Mg ($[\ce{Ne}]3s^2$) gives up both $3s$ electrons and O ($2s^22p^4$) takes both: $\ce{Mg^2+}$ and $\ce{O^2-}$, each with a noble-gas configuration.`,
      },
      {
        n: 22, points: 1, type: "single", src: "Slide 36 · homework Part C (cropped off the slide)",
        prompt: R`Which atom loses electrons in the reaction?`,
        options: [
          { text: "Mg", correct: true, why: R`The metal, with the low ionization energy, loses electrons to become $\ce{Mg^2+}$.` },
          { text: "O", correct: false, why: R`O gains electrons (it is the electron acceptor, becoming $\ce{O^2-}$).` },
          { text: "Both", correct: false, why: R`In an electron transfer, one atom's loss is the other's gain.` },
          { text: "Neither — the electrons are shared", correct: false, why: R`Sharing describes covalent bonding; MgO is ionic.` },
        ],
      },

      // ================================================================ Born–Haber / lattice energy
      {
        n: 23, points: 1, type: "single", src: "Slide 40 · homework",
        prompt: R`The diagram is the Born–Haber cycle for the formation of crystalline potassium fluoride. Which energy change corresponds to the electron affinity of fluorine?`,
        figure: { img: "img/s40_bornhaber_kf.png", alt: "Born-Haber cycle for KF with steps numbered 1 to 6" },
        options: [
          { text: "4", correct: true, why: R`Step 4: $\ce{K+(g) + e- + F(g) -> K+(g) + F-(g)}$. F picks up the electron: electron affinity, downhill (exothermic).` },
          { text: "6", correct: false, why: R`Step 6: $\ce{K(s) + 1/2F2(g) -> KF(s)}$, the enthalpy of formation $\Delta H_f^\circ$ of KF.` },
          { text: "1", correct: false, why: R`Step 1: $\ce{K(s) -> K(g)}$, sublimation of potassium.` },
          { text: "5", correct: false, why: R`Step 5: $\ce{K+(g) + F-(g) -> KF(s)}$, the lattice-forming step (−lattice energy).` },
          { text: "2", correct: false, why: R`Step 2: $\ce{1/2F2(g) -> F(g)}$, half the F–F bond enthalpy.` },
        ],
        note: R`Step 3 (not offered) is the first ionization energy of K: $\ce{K(g) -> K+(g) + e-}$.`,
      },

      {
        n: 24, points: 1, type: "match", src: "Added · slide 40 diagram",
        prompt: R`Name each numbered step of the Born–Haber cycle for crystalline potassium fluoride.`,
        figure: { img: "img/s40_bornhaber_kf.png", alt: "Born-Haber cycle for KF with steps numbered 1 to 6" },
        choices: ["Sublimation", "Bond dissociation (half)", "Ionization energy", "Electron affinity", "Lattice energy (solid forms)", "Enthalpy of formation"],
        items: [
          { label: "Step 1", answer: "Sublimation", why: R`$\ce{K(s) -> K(g)}$: solid metal to gaseous atoms. Endothermic.` },
          { label: "Step 2", answer: "Bond dissociation (half)", why: R`$\ce{1/2F2(g) -> F(g)}$: half a mole of F–F bonds broken, $\tfrac12 D(\ce{F-F}) = \tfrac12(155) \approx 78$ kJ/mol. Endothermic.` },
          { label: "Step 3", answer: "Ionization energy", why: R`$\ce{K(g) -> K+(g) + e-}$: first ionization energy of K ($+419$ kJ/mol). Endothermic.` },
          { label: "Step 4", answer: "Electron affinity", why: R`$\ce{F(g) + e- -> F-(g)}$: electron affinity of F ($-328$ kJ/mol). Exothermic.` },
          { label: "Step 5", answer: "Lattice energy (solid forms)", why: R`$\ce{K+(g) + F-(g) -> KF(s)}$: the gaseous ions condense into the crystal, releasing the lattice energy. Strongly exothermic.` },
          { label: "Step 6", answer: "Enthalpy of formation", why: R`$\ce{K(s) + 1/2F2(g) -> KF(s)}$: the one-step route from the elements in their standard states, $\Delta H_f^\circ(\ce{KF})$. It equals the sum of steps 1–5.` },
        ],
      },
      {
        n: 25, points: 1, type: "match", src: "Added · slides 38–39 (NaCl)",
        prompt: R`Name the process each equation represents in the Born–Haber cycle for $\ce{NaCl}$ (slide 38).`,
        choices: ["Sublimation", "Bond dissociation (half)", "Ionization energy", "Electron affinity", "Lattice energy (solid forms)", "Enthalpy of formation"],
        items: [
          { label: R`$\ce{Na+(g) + Cl-(g) -> NaCl(s)}$`, answer: "Lattice energy (solid forms)", why: R`Gaseous ions → solid lattice. On slide 39 this step is $\Delta H = -\Delta H_\text{lattice} = -788$ kJ/mol.` },
          { label: R`$\ce{Na(s) -> Na(g)}$`, answer: "Sublimation", why: R`Solid → gas, same element, no electrons moved.` },
          { label: R`$\ce{Na(s) + 1/2Cl2(g) -> NaCl(s)}$`, answer: "Enthalpy of formation", why: R`Elements in standard states → one mole of compound: $\Delta H_f^\circ(\ce{NaCl}) = -411$ kJ/mol.` },
          { label: R`$\ce{Cl(g) + e- -> Cl-(g)}$`, answer: "Electron affinity", why: R`An electron is <em>added</em> to a gaseous atom: $-349$ kJ/mol.` },
          { label: R`$\ce{1/2Cl2(g) -> Cl(g)}$`, answer: "Bond dissociation (half)", why: R`Half a mole of Cl–Cl bonds broken: $\tfrac12(242) = 121$ kJ/mol.` },
          { label: R`$\ce{Na(g) -> Na+(g) + e-}$`, answer: "Ionization energy", why: R`An electron is <em>removed</em> from a gaseous atom: $IE_1 = +496$ kJ/mol.` },
        ],
        note: R`Cycle check: $107 + 121 + 496 - 349 - 788 = -413 \approx -411$ kJ/mol $= \Delta H_f^\circ$. The 2 kJ/mol gap is rounding in the tabulated values.`,
      },
      {
        n: 26, points: 1, type: "match", src: "Added · slide 38",
        prompt: R`For each component of the Born–Haber cycle, written in the direction it runs when the salt forms from its elements, is the step endothermic or exothermic?`,
        choices: ["endothermic", "exothermic"],
        items: [
          { label: "Sublimation of the metal", answer: "endothermic", why: R`Metallic bonding must be overcome to free the atoms (Na: $+107$).` },
          { label: "Bond dissociation of the nonmetal", answer: "endothermic", why: R`Bond enthalpies are always positive (slide 68).` },
          { label: "Ionization of the metal", answer: "endothermic", why: R`Ionization energy is always positive (Q4). Slide 38: "very endothermic."` },
          { label: "Electron affinity of the nonmetal", answer: "exothermic", why: R`For Cl and F, gaining an electron releases energy (Cl: $-349$). Slide 38 says "usually": a second added electron, as for $\ce{O^2-}$, costs energy.` },
          { label: "Lattice formation from gaseous ions", answer: "exothermic", why: R`Opposite charges coming together release energy. Slide 38: "very exothermic."` },
          { label: "Overall formation from the elements", answer: "exothermic", why: R`Slide 38: the formation of salts from the elements is exothermic overall, because the lattice term outweighs the endothermic steps.` },
        ],
      },
      {
        n: 27, points: 1, type: "single", src: "Added · slide 39",
        prompt: R`Slide 39 defines the lattice energy of $\ce{NaCl}$ through $\ce{NaCl(s) -> Na+(g) + Cl-(g)}$, $\Delta H_\text{lattice} = +788$ kJ/mol. In the Born–Haber cycle, which runs in the direction of forming the solid, the lattice step appears as:`,
        options: [
          { text: R`$\ce{Na+(g) + Cl-(g) -> NaCl(s)}$, $\Delta H = -788$ kJ/mol`, correct: true,
            why: R`Same process, reversed, so the sign flips: $\Delta H = -\Delta H_\text{lattice}$. The definition is the energy required to <em>separate</em> the solid (positive); the cycle uses the energy <em>released</em> when the solid forms.` },
          { text: R`$\ce{Na+(g) + Cl-(g) -> NaCl(s)}$, $\Delta H = +788$ kJ/mol`, correct: false,
            why: R`Right direction, wrong sign: forming the lattice releases energy.` },
          { text: R`$\ce{NaCl(s) -> Na+(g) + Cl-(g)}$, $\Delta H = -788$ kJ/mol`, correct: false,
            why: R`Separating the ions costs energy, so this direction is $+788$.` },
          { text: R`$\ce{Na(s) + 1/2Cl2(g) -> NaCl(s)}$, $\Delta H = -788$ kJ/mol`, correct: false,
            why: R`That equation is the enthalpy of formation ($-411$ kJ/mol), which starts from the elements, not the gaseous ions.` },
        ],
      },
      // ================================================================ Polarity
      {
        n: 28, points: 1, type: "single", src: "Slide 49 · homework", refs: ["en"],
        prompt: R`Of the molecules below, the bond in ________ is the most polar.`,
        options: [
          { text: R`$\ce{H2}$`, correct: false, why: R`Identical atoms: $\Delta\chi = 0$, nonpolar.` },
          { text: R`$\ce{HBr}$`, correct: false, why: R`$\Delta\chi = 2.8 - 2.1 = 0.7$.` },
          { text: R`$\ce{HF}$`, correct: true, why: R`$\Delta\chi = 4.0 - 2.1 = 1.9$, the largest. Matches the dipole table on slide 48 (HF 1.82 D).` },
          { text: R`$\ce{HCl}$`, correct: false, why: R`$\Delta\chi = 3.0 - 2.1 = 0.9$.` },
          { text: R`$\ce{HI}$`, correct: false, why: R`$\Delta\chi = 2.5 - 2.1 = 0.4$, the least polar of the hydrogen halides.` },
        ],
      },
      {
        n: 29, points: 1, type: "single", src: "Slide 50 · past exam · hidden", refs: ["en"],
        prompt: R`Predict which of the following molecules has the largest dipole moment:`,
        options: [
          { text: R`$\ce{LiF}$`, correct: true, why: R`Largest electronegativity difference: $\Delta\chi = 4.0 - 1.0 = 3.0$. This is the expected answer at this level.` },
          { text: R`$\ce{F2}$`, correct: false, why: R`Homonuclear: $\Delta\chi = 0$, so $\mu = 0$.` },
          { text: R`$\ce{NaCl}$`, correct: false, why: R`$\Delta\chi = 3.0 - 0.9 = 2.1$, smaller than LiF's 3.0.` },
          { text: R`$\ce{NO}$`, correct: false, why: R`$\Delta\chi = 3.5 - 3.0 = 0.5$, barely polar (measured about 0.16 D).` },
        ],
        note: R`Caveat: $\mu = Qr$, and bond length matters too. Measured gas-phase dipoles are about 6.3 D for LiF and 9.0 D for NaCl, because the NaCl bond is much longer (2.36 vs 1.56 Å). The exam's intended reasoning is $\Delta\chi$ alone, which gives LiF.`,
      },
      {
        n: 30, points: 1, type: "single", src: "Slide 51 · homework · hidden", refs: ["en"],
        prompt: R`In the molecule below, which atom has the largest partial negative charge?`,
        figure: { img: "img/s51_cfclbri.svg", alt: "Lewis structure of CFClBrI: central C single-bonded to Cl (top), F (left), Br (right) and I (bottom); each halogen has three lone pairs" },
        options: [
          { text: "F", correct: true, why: R`F is the most electronegative atom (4.0), and its bond to C has the largest $\Delta\chi$ (1.5), so it pulls the most electron density.` },
          { text: "Cl", correct: false, why: R`Cl is 3.0: partial negative, but less than F.` },
          { text: "Br", correct: false, why: R`Br is 2.8: only slightly more electronegative than C.` },
          { text: "I", correct: false, why: R`I is 2.5, the same as C: the C–I bond is essentially nonpolar.` },
          { text: "C", correct: false, why: R`C is bonded to four atoms that are as or more electronegative, so it carries partial <em>positive</em> charge.` },
        ],
      },

      // ================================================================ Lewis structures of polyatomics
      {
        n: 31, points: 1, type: "single", src: "Slide 58 · homework · hidden",
        prompt: R`The Lewis structure of $\ce{PF3}$ shows that the central phosphorus atom has ________ nonbonding and ________ bonding electron pair(s).`,
        options: [
          { text: "3, 3", correct: false, why: R`3 lone pairs + 3 bonds would put 12 electrons on P.` },
          { text: "1, 2", correct: false, why: R`P bonds to all three F atoms: 3 bonding pairs.` },
          { text: "1, 3", correct: true, why: R`Valence e$^-$: $5 + 3(7) = 26$. Three P–F bonds use 6, the F octets use 18, and the last 2 go on P as a lone pair. P: 1 nonbonding pair + 3 bonding pairs = 8.` },
          { text: "2, 2", correct: false, why: R`Ignores the third F.` },
          { text: "3, 1", correct: false, why: R`Reverses the counts.` },
        ],
      },
      {
        n: 32, points: 1, type: "match", src: "Slide 61 · examples (\"use valence rules!\")",
        prompt: R`Use the valence rules (H: 1 bond, C: 4, N: 3) to draw each molecule, then give the bond between the two central atoms.`,
        choices: ["single", "double", "triple"],
        items: [
          { label: R`$\ce{N2H4}$ (H$_2$N–NH$_2$): N–N bond`, answer: "single", why: R`Each N: 2 H + 1 N = 3 bonds, plus one lone pair.` },
          { label: R`$\ce{N2H2}$ (HN=NH): N–N bond`, answer: "double", why: R`Each N has 1 H, so it needs 2 more bonds to the other N: $\ce{H-N=N-H}$, one lone pair per N.` },
          { label: R`$\ce{N2}$: N–N bond`, answer: "triple", why: R`No H, so all 3 bonds go to the partner: $\ce{N#N}$, one lone pair each.` },
          { label: R`$\ce{C2H6}$: C–C bond`, answer: "single", why: R`Each C: 3 H + 1 C = 4.` },
          { label: R`$\ce{C2H4}$: C–C bond`, answer: "double", why: R`Each C: 2 H + 2 to C = 4.` },
          { label: R`$\ce{C2H2}$: C–C bond`, answer: "triple", why: R`Each C: 1 H + 3 to C = 4.` },
        ],
      },

      // ================================================================ Formal charge
      {
        n: 33, points: 1, type: "single", src: "Added · slide 63",
        prompt: R`Which statement is the definition of <strong>formal charge</strong>?`,
        options: [
          { text: "The charge an atom would have if all of the electrons in its covalent bonds were shared equally between the bonded atoms", correct: true,
            why: R`Slide 63, word for word. Equal sharing means each atom is assigned half of every bond, which is where the $B$ term (one electron per bond) comes from.` },
          { text: "The actual partial charge on an atom, caused by unequal sharing of bonding electrons", correct: false,
            why: R`That is a partial charge ($\delta^+$/$\delta^-$, slide 46), set by electronegativity. Formal charge deliberately ignores electronegativity and splits every bond evenly.` },
          { text: "The charge an atom would have if every bonding pair went entirely to the more electronegative atom", correct: false,
            why: R`That is the oxidation number, the opposite extreme from formal charge (all-or-nothing instead of equal sharing).` },
          { text: "The overall charge of the molecule or ion", correct: false,
            why: R`That is the <em>sum</em> of the formal charges (slide 65), not the formal charge of one atom.` },
          { text: "The number of bonds an atom makes minus its number of lone pairs", correct: false,
            why: R`Not a defined quantity, and it never uses the atom's valence electron count, which formal charge depends on.` },
        ],
      },
      {
        n: 34, points: 1, type: "match", src: "Added · slide 63",
        prompt: R`Formal charge: $\mathrm{FC} = V - N - B$. What does each symbol stand for?`,
        choices: ["valence electrons of the neutral free atom", "nonbonding electrons on the atom (counted as electrons)", "number of bonds to the atom (= half its bonding electrons)", "number of lone pairs on the atom", "total bonding electrons around the atom", "electrons needed for an octet (8)"],
        items: [
          { label: R`$V$`, answer: "valence electrons of the neutral free atom", why: R`The group number for main-group atoms: C 4, N 5, O 6, F 7. It is a property of the element, not of the structure.` },
          { label: R`$N$`, answer: "nonbonding electrons on the atom (counted as electrons)", why: R`Count every lone-pair <em>electron</em>, all of which belong to the atom: 2 lone pairs means $N = 4$, not 2. Slide 63: "all non-bonding electrons assigned to the atom."` },
          { label: R`$B$`, answer: "number of bonds to the atom (= half its bonding electrons)", why: R`Slide 63 writes this as $\tfrac12$(bonding electrons): each bond is shared equally, so the atom gets 1 electron per bond. A double bond counts 2, a triple bond 3.` },
        ],
        note: R`The two traps: counting lone <em>pairs</em> instead of lone-pair electrons for $N$, and using all bonding electrons instead of half for $B$. Either one shifts the formal charge by a whole number.`,
      },
      {
        n: 35, points: 1, type: "match", src: "Added · slide 63 example",
        prompt: R`Take one oxygen atom in $\ce{O=C=O}$ (double bond to C, 2 lone pairs). Fill in each term of $\mathrm{FC} = V - N - B$.`,
        choices: ["0", "1", "2", "3", "4", "5", "6", "7", "8"],
        items: [
          { label: R`$V$`, answer: "6", why: R`O is in group 6A: 6 valence electrons.` },
          { label: R`$N$`, answer: "4", why: R`2 lone pairs = 4 nonbonding electrons.` },
          { label: R`$B$`, answer: "2", why: R`One double bond = 2 bonds (4 shared electrons, half of them assigned to O).` },
          { label: R`$\mathrm{FC}$`, answer: "0", why: R`$6 - 4 - 2 = 0$, matching slide 63's table (valence 6, electrons assigned 6).` },
        ],
      },
      {
        n: 36, points: 1, type: "match", src: "Slide 63 · HW example",
        prompt: R`Assign the formal charge of every atom in the two Lewis structures of $\ce{CO2}$: (1) $\ce{O=C=O}$, each O with 2 lone pairs; (2) $\ce{O-C#O}$, the single-bonded O with 3 lone pairs and the triple-bonded O with 1.`,
        choices: ["−2", "−1", "0", "+1", "+2"],
        items: [
          { label: R`Structure 1: each O`, answer: "0", why: R`$6 - 4 - 2 = 0$.` },
          { label: R`Structure 1: C`, answer: "0", why: R`$4 - 0 - 4 = 0$.` },
          { label: R`Structure 2: single-bonded O`, answer: "−1", why: R`$6 - 6 - 1 = -1$.` },
          { label: R`Structure 2: C`, answer: "0", why: R`$4 - 0 - 4 = 0$.` },
          { label: R`Structure 2: triple-bonded O`, answer: "+1", why: R`$6 - 2 - 3 = +1$.` },
        ],
        note: R`Check: the formal charges in each structure add up to 0, the overall charge.`,
      },
      {
        n: 37, points: 1, type: "single", src: "Slides 63–64 · posed on slide",
        prompt: R`Which Lewis structure of $\ce{CO2}$ is dominant (preferred)?`,
        options: [
          { text: R`$\ce{O=C=O}$ (formal charges $0, 0, 0$)`, correct: true, why: R`All formal charges are zero, the closest possible to zero.` },
          { text: R`$\ce{O-C#O}$ (formal charges $-1, 0, +1$)`, correct: false, why: R`Separates charge and puts $+1$ on an electronegative O. Less favorable.` },
          { text: "Both contribute equally", correct: false, why: R`They are not equivalent; the one with zero formal charges dominates.` },
        ],
      },
      {
        n: 38, points: 1, type: "single", src: "Slide 65 · example", refs: ["en"],
        prompt: R`Three Lewis structures can be drawn for the thiocyanate ion, $\ce{NCS-}$. Which one is dominant?`,
        options: [
          { img: "img/s65_ncs1.png", alt: "N single bonded to C, C triple bonded to S", correct: false,
            why: R`Formal charges N $-2$, C 0, S $+1$: farthest from zero.` },
          { img: "img/s65_ncs2.png", alt: "N double bonded to C, C double bonded to S", correct: true,
            why: R`Formal charges N $-1$, C 0, S 0. Ties the third structure for "closest to zero," and wins the tie-breaker: the $-1$ sits on N, which is more electronegative than S (3.0 vs 2.5).` },
          { img: "img/s65_ncs3.png", alt: "N triple bonded to C, C single bonded to S", correct: false,
            why: R`Formal charges N 0, C 0, S $-1$: just as close to zero, but the negative charge is on the less electronegative S.` },
        ],
        note: R`Each structure's formal charges sum to $-1$, the ion's charge.`,
      },
      {
        n: 39, points: 1, type: "numeric", src: "Slide 66 · homework",
        prompt: R`The formal charge on nitrogen in $\ce{NO3-}$ is ________, where the Lewis structure of the ion is:`,
        figure: { img: "img/s66_no3.png", alt: "Nitrate: N double bonded to one O and single bonded to two O" },
        answer: 1, answerText: "+1",
        why: R`N: $5 - 0 - 4 = +1$ (no lone pairs, 4 bonds). Double-bonded O: $6 - 4 - 2 = 0$. Each single-bonded O: $6 - 6 - 1 = -1$. Sum: $0 + 1 - 1 - 1 = -1$, the ion's charge.`,
      },

      // ================================================================ Bond enthalpies
      {
        n: 40, points: 1, type: "single", src: "Slide 69 · homework",
        prompt: R`Using the table of average bond energies below, the $\Delta H$ for the reaction is ________ kJ.`,
        figure: { img: "img/s69_reaction.png", alt: "HC≡CH + 2 HI gives ICH2CH2I, with a table of bond energies" },
        options: [
          { text: "−160", correct: false, why: R`Does not follow from the table: the correct bond count gives $-217$.` },
          { text: "+160", correct: false, why: R`Wrong sign: the bonds formed (2480) outweigh the bonds broken (2263).` },
          { text: "−217", correct: true, why: R`Broken: $2(\ce{C-H}) + \ce{C#C} + 2(\ce{H-I}) = 2(413) + 839 + 2(299) = 2263$. Formed: $4(\ce{C-H}) + \ce{C-C} + 2(\ce{C-I}) = 4(413) + 348 + 2(240) = 2480$. $\Delta H = 2263 - 2480 = -217$ kJ.` },
          { text: "+63", correct: false, why: R`Wrong sign: the bonds formed outweigh the bonds broken, so $\Delta H < 0$.` },
          { text: "−63", correct: false, why: R`Right sign, wrong size: $2263 - 2480 = -217$.` },
        ],
        note: R`Shortcut: two C–H bonds appear on both sides and cancel, leaving $839 + 598 - (2\cdot413 + 348 + 480) = -217$.`,
      },
      {
        n: 41, points: 1, type: "single", src: "Slide 71 · YOUR TURN",
        prompt: R`Each bond length in $\ce{CO2}$ ($\ce{O=C=O}$) is 1.24 Å. The bond in carbon monoxide, $\ce{CO}$, is 1.13 Å. Does $\ce{CO}$ have a single, double, or triple bond between C and O?`,
        options: [
          { text: "Single", correct: false, why: R`A single bond would be <em>longer</em> than the 1.24 Å double bond, not shorter.` },
          { text: "Double", correct: false, why: R`The double bond is the 1.24 Å one in $\ce{CO2}$; CO is shorter.` },
          { text: "Triple", correct: true, why: R`Shorter than a C=O double bond means a higher bond order: $\ce{C#O}$, with a lone pair on each atom (FC: C $-1$, O $+1$). Strongest bond in the table: 1072 kJ/mol.` },
        ],
      },
      {
        n: 42, points: 1, type: "match", src: "Slide 72 · part A",
        prompt: R`Does $\ce{N2}$ have a single, double, or triple bond? What about $\ce{H2}$, $\ce{O2}$, and $\ce{H2O}$ (each O–H)?`,
        choices: ["single", "double", "triple"],
        items: [
          { label: R`$\ce{N2}$`, answer: "triple", why: R`N needs 3 electrons: $\ce{N#N}$, 941 kJ/mol.` },
          { label: R`$\ce{H2}$`, answer: "single", why: R`H forms one bond: H–H, 436 kJ/mol.` },
          { label: R`$\ce{O2}$`, answer: "double", why: R`O needs 2: $\ce{O=O}$, 495 kJ/mol.` },
          { label: R`$\ce{H2O}$ (each O–H)`, answer: "single", why: R`H can only form a single bond. O makes two of them: 463 kJ/mol each.` },
        ],
      },
      {
        n: 43, points: 1, type: "numeric", src: "Slides 72–73 · part B", refs: ["bonds"],
        prompt: R`Use bond enthalpies to find $\Delta H$ for $\ce{N2 + O2 -> 2NO}$. Hint: assume NO has a double bond.`,
        unit: "kJ/mol", answer: 222, tol: 1, answerText: "+222",
        why: R`Broken: $\ce{N#N} + \ce{O=O} = 941 + 495 = 1436$. Formed: $2(\ce{N=O}) = 2(607) = 1214$. $\Delta H = 1436 - 1214 = +222$ kJ/mol: endothermic.`,
      },
      {
        n: 44, points: 1, type: "numeric", src: "Slides 72, 74 · part B", refs: ["bonds"],
        prompt: R`Use bond enthalpies to find $\Delta H$ for $\ce{2H2 + O2 -> 2H2O}$.`,
        unit: "kJ/mol", answer: -485, tol: 1, answerText: "−485",
        why: R`Broken: 2 $\ce{H2}$ molecules × 1 H–H bond each, plus 1 O=O: $2(436) + 495 = 1367$. Formed: 2 $\ce{H2O}$ molecules × 2 O–H bonds each ($\ce{H-O-H}$) = 4 O–H bonds: $4(463) = 1852$. $\Delta H = 1367 - 1852 = -485$ kJ/mol: exothermic.`,
      },
      {
        n: 45, points: 1, type: "match", src: "Slide 72 · part B",
        prompt: R`Are the following reactions endothermic or exothermic?`,
        choices: ["endothermic", "exothermic"],
        items: [
          { label: R`$\ce{N2 + O2 -> 2NO}$`, answer: "endothermic", why: R`$\Delta H = +222$ kJ/mol $> 0$: breaking $\ce{N#N}$ and $\ce{O=O}$ costs 1436, but forming two $\ce{N=O}$ returns only 1214.` },
          { label: R`$\ce{2H2 + O2 -> 2H2O}$`, answer: "exothermic", why: R`$\Delta H = -485$ kJ/mol $< 0$: four strong O–H bonds release more than the H–H and O=O bonds cost.` },
        ],
      },

      // ================================================================ Resonance
      {
        n: 46, points: 1, type: "match", src: "Slide 77 · homework · hidden",
        prompt: R`What are the formal charges in these two resonance structures of ozone?`,
        figure: { img: "img/s77_o3_pair.png", alt: "Two resonance structures of ozone" },
        choices: ["−2", "−1", "0", "+1", "+2"],
        items: [
          { label: "Structure 1: left O (single bond, 3 lone pairs)", answer: "−1", why: R`$6 - 6 - 1 = -1$.` },
          { label: "Structure 1: central O", answer: "+1", why: R`One lone pair, three bonds: $6 - 2 - 3 = +1$.` },
          { label: "Structure 1: right O (double bond, 2 lone pairs)", answer: "0", why: R`$6 - 4 - 2 = 0$.` },
          { label: "Structure 2: left O (double bond)", answer: "0", why: R`Mirror image of structure 1: $6 - 4 - 2 = 0$.` },
          { label: "Structure 2: central O", answer: "+1", why: R`$6 - 2 - 3 = +1$.` },
          { label: "Structure 2: right O (single bond)", answer: "−1", why: R`$6 - 6 - 1 = -1$.` },
        ],
      },
      {
        n: 47, points: 1, type: "numeric", src: "Slide 79 · past exam (a), adapted",
        prompt: R`The exam asks you to draw the two resonance Lewis structures of ozone, showing all bonds and non-bonding pairs. Check your drawing: how many <strong>non-bonding (lone) pairs</strong> does each resonance structure have in total?`,
        unit: "lone pairs", answer: 6,
        why: R`$3 \times 6 = 18$ valence electrons = 9 pairs. The single + double bond use 3 pairs, leaving 6 lone pairs: 3 on the single-bonded O, 2 on the double-bonded O, 1 on the central O.`,
      },
      {
        n: 48, points: 1, type: "numeric", src: "Slide 79 · past exam (b)",
        prompt: R`What is the bond order of each of the O–O bonds in $\ce{O3}$?`,
        answer: 1.5, answerText: R`$1\tfrac{1}{2}$ (1.5)`,
        why: R`Averaging the two resonance structures, each O–O bond is single in one and double in the other: $(1 + 2)/2 = 1.5$. Equivalently, 3 bonding pairs spread over 2 bonds.`,
      },
      {
        n: 49, points: 1, type: "single", src: "Slide 79 · past exam (c)",
        prompt: R`State whether each O–O bond in $\ce{O3}$ is LONGER or SHORTER than the O–O bond in $\ce{O2}$ ($\ce{O=O}$).`,
        options: [
          { text: "LONGER", correct: true, why: R`Bond order 1.5 < 2, so the bond is weaker and longer. Measured: 1.278 Å in $\ce{O3}$ (slide 76) vs 1.21 Å in $\ce{O2}$.` },
          { text: "SHORTER", correct: false, why: R`Shorter would require a bond order above 2.` },
        ],
      },
      {
        n: 50, points: 1, type: "single", src: "Slide 80 · homework",
        prompt: R`Resonance structures differ by ________.`,
        options: [
          { text: "number of atoms only", correct: false, why: R`Same molecule, so same atoms.` },
          { text: "placement of electrons only", correct: true, why: R`The atoms stay fixed (same skeleton, same connectivity); only the bonding and lone-pair electrons move.` },
          { text: "number of electrons only", correct: false, why: R`Every resonance structure has the same total of valence electrons.` },
          { text: "placement of atoms only", correct: false, why: R`Moving atoms gives a different molecule (an isomer), not a resonance structure.` },
          { text: "number and placement of electrons", correct: false, why: R`The number never changes.` },
        ],
      },
      {
        n: 51, points: 1, type: "single", src: "Slide 82 · homework Part A · hidden",
        prompt: R`The $\ce{C-C}$ bonds in benzene are all the same length and correspond to typical single $\ce{C-C}$ bond lengths.`,
        options: [
          { text: "true", correct: false, why: R`The first half is true (all six are equal); the second half is false.` },
          { text: "false", correct: true, why: R`Each C–C is single in one resonance structure and double in the other: bond order 1.5. Measured 1.39 Å, between C–C (1.54 Å) and C=C (1.34 Å).` },
        ],
      },
      {
        n: 52, points: 1, type: "single", src: "Slide 82 · homework Part B · hidden",
        prompt: R`The $\ce{C-C}$ bond in acetylene, $\ce{HCCH}$, is longer than the average $\ce{C-C}$ bond length in benzene.`,
        options: [
          { text: "true", correct: false, why: R`A higher bond order is a shorter bond.` },
          { text: "false", correct: true, why: R`Acetylene is $\ce{H-C#C-H}$: bond order 3 (about 1.20 Å) vs benzene's 1.5 (1.39 Å). The triple bond is shorter.` },
        ],
      },

      // ================================================================ Octet violations
      {
        n: 53, points: 1, type: "single", src: "Slide 84 · posed on slide",
        prompt: R`Two possible Lewis structures for the radical $\ce{NO}$ (nitric oxide) are shown below. Which one is dominant?`,
        options: [
          { img: "img/s84_no1.png", alt: "N with one lone pair and a single electron, double bonded to O with two lone pairs", correct: true,
            why: R`N: $5 - 3 - 2 = 0$; O: $6 - 4 - 2 = 0$. All formal charges are zero, so this structure dominates (the unpaired electron sits on N).` },
          { img: "img/s84_no2.png", alt: "N with two lone pairs, double bonded to O with one lone pair and a single electron", correct: false,
            why: R`N: $5 - 4 - 2 = -1$; O: $6 - 3 - 2 = +1$. Charge separation, with $+1$ on the more electronegative O.` },
        ],
        note: R`NO has 11 valence electrons, an odd number, so no structure can give every atom an octet.`,
      },
      {
        n: 54, points: 1, type: "single", src: "Slide 87 · YOUR TURN · hidden",
        prompt: R`The O—O bonds in ozone can be described as "one-and-a-half bonds." Does this suggest that each of the bonds in ozone is longer or shorter than the bond in $\ce{O2}$?`,
        options: [
          { text: "Longer", correct: true, why: R`$\ce{O2}$ is a double bond (order 2); 1.5 < 2 means weaker and longer.` },
          { text: "Shorter", correct: false, why: R`Lower bond order means longer, not shorter.` },
        ],
      },
      {
        n: 55, points: 1, type: "single", src: "Slide 88 · homework · hidden",
        prompt: R`In which of the molecules below is the carbon-carbon distance the shortest?`,
        options: [
          { text: R`$\ce{H-C#C-H}$`, correct: true, why: R`The only C≡C triple bond: highest bond order, shortest (≈1.20 Å).` },
          { text: R`$\ce{H2C=C=CH2}$`, correct: false, why: R`Two C=C double bonds (≈1.31 Å): still longer than a triple.` },
          { text: R`$\ce{H2C=CH2}$`, correct: false, why: R`One C=C (≈1.34 Å).` },
          { text: R`$\ce{H3C-CH2-CH3}$`, correct: false, why: R`C–C single bonds (≈1.53 Å).` },
          { text: R`$\ce{H3C-CH3}$`, correct: false, why: R`C–C single bond (≈1.54 Å), the longest here.` },
        ],
      },
      {
        n: 56, points: 1, type: "single", src: "Slide 89 · homework · hidden", refs: ["bonds"],
        prompt: R`Of the bonds C–N, C=N, and C≡N, the C–N bond is ________.`,
        options: [
          { text: "weakest/longest", correct: true, why: R`Lowest bond order: 293 kJ/mol vs 615 (C=N) and 891 (C≡N). Weaker bonds are longer (slide 70).` },
          { text: "intermediate in both strength and length", correct: false, why: R`That is C=N.` },
          { text: "weakest/shortest", correct: false, why: R`Strength and length go opposite ways: weakest means longest.` },
          { text: "strongest/longest", correct: false, why: R`Strongest and longest don't go together; this also misidentifies the strongest.` },
          { text: "strongest/shortest", correct: false, why: R`That is C≡N.` },
        ],
      },
    ],
  };
})();
