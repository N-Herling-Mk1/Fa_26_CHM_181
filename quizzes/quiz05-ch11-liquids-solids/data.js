/* Quiz 5 — Chapter 11: Liquids, Solids, and Intermolecular Forces.
 * Every question posed in the Ch. 11 lecture deck (181.11_Ch_11_2025.pptx): the YOUR TURN
 * slides, every "Example from homework / past exam" screenshot (16 hidden slides included),
 * the worked examples (asked as questions), the slide-18 graph question and the follow-up on
 * slide 45. Multi-part items are split one part per question. Slides 61 and 62 are the same
 * question and are asked once.
 * Field reference: quizzes/quiz02-ch08-chemical-bonding/data.js.
 */
(function () {
  const R = String.raw;
  const S3 = 0.006, S2 = 0.02;
  const IMF = R`Intermolecular forces, weakest to strongest: dispersion < dipole–dipole < hydrogen bonding < ion–dipole < ion–ion. Hydrogen bonding needs H bonded to N, O or F on one molecule and a lone pair on N, O or F on the other.`;

  const DCE = R`Two isomers of the planar compound 1,2-dichloroethylene are shown, along with their melting and boiling points.`;
  const DCEfig = { img: "img/s15_dce_isomers.png", alt: "cis-1,2-dichloroethylene (both Cl on the same side) and trans (Cl on opposite sides)" };
  const CUP = R`Suppose a reaction between two aqueous solutions occurring in a coffee-cup calorimeter causes the measured temperature to decrease.`;
  const BOMB = R`A bomb calorimeter contains 100 mL (100 g) of water. A known reaction releases 6000 J of energy and increases the temperature by 10 °C. For water, $c_p = 4.184$ J/(g·K).`;
  const ICE = R`Calculate the enthalpy change (heat) needed to convert 1.00 mol of ice at –25 °C (point A) to steam at 125 °C (point F). Specific heats: ice 2.03 J/(g·K), liquid water 4.18 J/(g·K), steam 1.84 J/(g·K). $\Delta H_\text{fus} = 6.01$ kJ/mol, $\Delta H_\text{vap} = 40.67$ kJ/mol.`;
  const PD1 = { img: "img/s54_phase_torr.png", alt: "Phase diagram, P in torr vs T in °C, regions w (upper left), x (upper middle), y (lower right), triple point z near 0 °C and 400 torr" };
  const VP = { img: "img/s52_vapor_pressure.png", alt: "Vapor pressure vs temperature for diethyl ether (bp 34.6 °C), ethanol (78.3 °C), water (100 °C) and ethylene glycol" };

  window.QUIZ = {
    id: "chem181-quiz05-ch11-liquids-solids",
    course: "CHEM 181",
    title: "Quiz 5 — Ch. 11: Liquids, Solids & Intermolecular Forces",
    scoring: "Every question is worth 1 point. Single-choice and numeric questions are all or nothing; the match question scores per item; the select-all question scores right-minus-wrong per option. An unanswered question scores 0.",
    toolsNote: R`${IMF} Heat: $q = mc_p\Delta T$ within one phase, $q = n\Delta H$ for a phase change. Boiling point: vapor pressure = external pressure; normal boiling point at 760 torr. Tags show the source slide; "hidden" means hidden in the slideshow.`,
    questions: [
      // ===================================================== Dispersion & dipole forces (1–6)
      {
        n: 1, points: 1, type: "single", src: "Slide 11 · past exam Q21 · hidden",
        prompt: R`Which of the following substances do you expect to have the highest boiling point?`,
        options: [
          { text: R`$\ce{F2}$`, correct: false, why: R`Fewest electrons, least polarizable: lowest bp (85 K).` },
          { text: R`$\ce{Cl2}$`, correct: false, why: R`bp 239 K.` },
          { text: R`$\ce{Br2}$`, correct: false, why: R`bp 332 K.` },
          { text: R`$\ce{I2}$`, correct: true, why: R`All four are nonpolar, so only dispersion acts. $\ce{I2}$ has the most electrons and is the most polarizable: bp 457 K.` },
        ],
      },
      {
        n: 2, points: 1, type: "single", src: "Slide 14 · homework",
        prompt: R`Based on molecular mass and dipole moment of the five compounds in the table below, which should have the highest boiling point?
          <table class="data"><tr><th>Substance</th><th>Molecular mass (amu)</th><th>Dipole moment (D)</th></tr>
          <tr><td>Propane, $\ce{CH3CH2CH3}$</td><td>44</td><td>0.1</td></tr>
          <tr><td>Dimethylether, $\ce{CH3OCH3}$</td><td>46</td><td>1.3</td></tr>
          <tr><td>Methylchloride, $\ce{CH3Cl}$</td><td>50</td><td>1.9</td></tr>
          <tr><td>Acetaldehyde, $\ce{CH3CHO}$</td><td>44</td><td>2.7</td></tr>
          <tr><td>Acetonitrile, $\ce{CH3CN}$</td><td>41</td><td>3.9</td></tr></table>`,
        options: [
          { text: R`$\ce{CH3CH2CH3}$`, correct: false, why: R`Nearly nonpolar (0.1 D): lowest bp of the set.` },
          { text: R`$\ce{CH3OCH3}$`, correct: false, why: R`Moderately polar (1.3 D).` },
          { text: R`$\ce{CH3Cl}$`, correct: false, why: R`Heaviest, but 1.9 D; the masses are too close for mass to decide.` },
          { text: R`$\ce{CH3CHO}$`, correct: false, why: R`2.7 D, second most polar.` },
          { text: R`$\ce{CH3CN}$`, correct: true, why: R`With masses nearly equal (41–50 amu), dispersion forces are similar, so the largest dipole (3.9 D) gives the strongest dipole–dipole forces and the highest bp (355 K).` },
        ],
      },
      {
        n: 3, points: 1, type: "single", src: "Slide 15 · homework Part A",
        prompt: DCE, figure: DCEfig, prompt2: "Which of the two isomers will have the stronger dipole–dipole forces?",
        options: [
          { text: "cis isomer", correct: true, why: R`In the cis isomer both C–Cl bond dipoles point to the same side, so they add: a net dipole. In the trans isomer they point opposite ways and cancel.` },
          { text: "trans isomer", correct: false, why: R`The trans isomer is nonpolar: its two C–Cl dipoles cancel.` },
        ],
      },
      {
        n: 4, points: 1, type: "single", src: "Slide 15 · homework Part B",
        prompt: DCE, figure: DCEfig, prompt2: "One isomer has a boiling point of 60.3 °C and the other 47.5 °C. Which isomer has a boiling point of 60.3 °C?",
        options: [
          { text: "cis isomer", correct: true, why: R`Same mass and electrons, so dispersion is about equal. The polar cis isomer adds dipole–dipole forces and boils higher.` },
          { text: "trans isomer", correct: false, why: R`Nonpolar trans has only dispersion: it is the 47.5 °C isomer.` },
        ],
      },
      {
        n: 5, points: 1, type: "single", src: "Slide 17 · homework",
        prompt: R`Of the following substances, only ________ has London dispersion forces as its <u>only</u> intermolecular force.`,
        options: [
          { text: "HCl", correct: false, why: R`Polar: dipole–dipole as well.` },
          { text: R`$\ce{C4H9OH}$`, correct: false, why: R`O–H: hydrogen bonding.` },
          { text: R`$\ce{CH4}$`, correct: true, why: R`Tetrahedral and symmetric, with nearly nonpolar C–H bonds: no net dipole, so dispersion only.` },
          { text: R`$\ce{F2S}$`, correct: false, why: R`$\ce{SF2}$ is bent (two lone pairs on S), so it is polar.` },
          { text: R`$\ce{PH3}$`, correct: false, why: R`Trigonal pyramidal with a lone pair: slightly polar.` },
        ],
      },
      {
        n: 6, points: 1, type: "single", src: "Slide 17 · homework",
        prompt: R`What is the predominant intermolecular force in $\ce{CS2}$?`,
        options: [
          { text: "dipole-dipole attraction", correct: false, why: R`$\ce{CS2}$ is linear like $\ce{CO2}$; its bond dipoles cancel.` },
          { text: "ionic bonding", correct: false, why: R`$\ce{CS2}$ is a molecular compound.` },
          { text: "London-dispersion forces", correct: true, why: R`Linear, nonpolar molecule: dispersion only (and fairly strong, since S is polarizable).` },
          { text: "hydrogen bonding", correct: false, why: R`No hydrogen at all.` },
          { text: "ion-dipole attraction", correct: false, why: R`No ions.` },
        ],
      },
      // ===================================================== Hydrogen bonding (7–14)
      {
        n: 7, points: 1, type: "single", src: "Slide 18 · posed on slide · hidden",
        prompt: R`The graph shows boiling points of the group 4A–7A hydrides. Why are the period-2 hydrides $\ce{H2O}$, HF and $\ce{NH3}$ far above the trend of their heavier group members, while $\ce{CH4}$ is not?`,
        figure: { img: "img/s18_hydride_bp.png", alt: "Boiling point vs molecular weight for group 4A–7A hydrides; H2O, HF and NH3 lie far above their group trends; CH4 is lowest" },
        options: [
          { text: R`$\ce{H2O}$, HF and $\ce{NH3}$ form hydrogen bonds (H on N, O, F); C–H is not polar enough, so $\ce{CH4}$ follows the dispersion trend.`, correct: true, why: R`Hydrogen bonding needs a strongly polar bond to H. Only N, O and F qualify, so only the period-2 members of groups 5A–7A jump up.` },
          { text: "The period-2 hydrides are the heaviest in their groups, so they have the strongest dispersion forces.", correct: false, why: R`They are the <em>lightest</em>. By dispersion alone they would boil lowest, which is what $\ce{CH4}$ does.` },
          { text: R`$\ce{H2O}$, HF and $\ce{NH3}$ are ionic.`, correct: false, why: R`They are molecular; the attraction is an intermolecular hydrogen bond, not an ionic bond.` },
          { text: R`Period-2 atoms are the most polarizable in their groups.`, correct: false, why: R`Polarizability grows down a group; period-2 atoms are the least polarizable.` },
        ],
      },
      {
        n: 8, points: 1, type: "single", src: "Slide 22 · homework",
        prompt: R`What major type of attractive interaction must be overcome for water to evaporate?`,
        options: [
          { text: "hydrogen bonds", correct: true, why: R`Water molecules hold each other through O–H···O hydrogen bonds; evaporation breaks them (the covalent O–H bonds stay intact).` },
          { text: "ion-dipole interaction", correct: false, why: R`Pure water has (essentially) no ions.` },
          { text: "dispersion forces", correct: false, why: R`Present but minor for small $\ce{H2O}$.` },
          { text: "dipole-dipole interaction", correct: false, why: R`Hydrogen bonding is the specific, much stronger dipole–dipole force here; the "major" one is the H-bond.` },
        ],
      },
      {
        n: 9, points: 1, type: "single", src: "Slide 22 · homework",
        prompt: R`Which one of the following substances will <u>not</u> have hydrogen bonding as one of its intermolecular forces?`,
        options: [
          { text: R`$\ce{CH3CH2OH}$ (ethanol)`, correct: false, why: R`O–H bond: hydrogen bonds.` },
          { text: R`$\ce{H2N-NH2}$ (hydrazine)`, correct: false, why: R`N–H bonds and N lone pairs: hydrogen bonds.` },
          { text: R`$\ce{CH3NH2}$ (methylamine)`, correct: false, why: R`N–H bonds: hydrogen bonds.` },
          { text: R`$\ce{H-O-O-H}$ (hydrogen peroxide)`, correct: false, why: R`O–H bonds: hydrogen bonds.` },
          { text: R`$\ce{CH3C(O)CH3}$ (acetone)`, correct: true, why: R`Every H is on carbon. The C=O oxygen can <em>accept</em> an H-bond from another molecule (e.g. water), but pure acetone has no H on N, O or F to donate.` },
        ],
      },
      {
        n: 10, points: 1, type: "multi", src: "Slide 23 · discuss · hidden",
        prompt: R`In which of these substances is hydrogen bonding likely to play an important role in determining physical properties? Select all that apply.`,
        options: [
          { text: R`methane, $\ce{CH4}$`, correct: false, why: R`No H on N, O or F.` },
          { text: R`hydrazine, $\ce{H2NNH2}$`, correct: true, why: R`N–H bonds plus a lone pair on each N: hydrogen bonds.` },
          { text: R`methyl fluoride, $\ce{CH3F}$`, correct: false, why: R`Contains F, but the H atoms are on C (carbon makes four bonds; F makes one). No H–F bond.` },
          { text: R`hydrogen sulfide, $\ce{H2S}$`, correct: false, why: R`S is not electronegative enough.` },
        ],
      },
      {
        n: 11, points: 1, type: "single", src: "Slide 24 · past exam Q23 · hidden",
        prompt: R`Which of the following pairs of molecules do you expect to NOT form hydrogen bonds?`,
        options: [
          { text: R`$\ce{H2O - H2O}$`, correct: false, why: R`O–H: classic hydrogen bonding.` },
          { text: R`$\ce{H2S - H2S}$`, correct: true, why: R`S–H bonds are only weakly polar; S is not N, O or F.` },
          { text: R`$\ce{NH3 - NH3}$`, correct: false, why: R`N–H: hydrogen bonds.` },
          { text: R`$\ce{HF - HF}$`, correct: false, why: R`H–F: hydrogen bonds.` },
        ],
      },
      {
        n: 12, points: 1, type: "single", src: "Slide 26 · past exam Q24",
        prompt: R`Compare the freezing of water and the freezing of methane. Which one of the following is correct?`,
        options: [
          { text: "Solid water is less dense than liquid water; solid methane is more dense than liquid methane.", correct: true, why: R`Ice's hydrogen-bonded lattice holds molecules farther apart than in the liquid (ice floats). Methane, with only dispersion forces, packs more tightly as a solid, like most substances.` },
          { text: "Solid water is more dense than liquid water; solid methane is less dense than liquid methane.", correct: false, why: R`Both halves reversed.` },
          { text: "Solid water is less dense than liquid water; solid methane is less dense than liquid methane.", correct: false, why: R`Water's behavior is the exception, caused by H-bonding; methane is normal.` },
          { text: "Solid water is more dense than liquid water; solid methane is more dense than liquid methane.", correct: false, why: R`Ice floats.` },
        ],
      },
      {
        n: 13, points: 1, type: "single", src: "Slide 27 · example",
        prompt: R`List the substances $\ce{H2O}$, CO, HF, and Ne in order of increasing boiling point.`,
        options: [
          { text: R`$\ce{Ne < CO < HF < H2O}$`, correct: true, why: R`Ne: dispersion only. CO: slightly polar, dipole–dipole + dispersion. HF and $\ce{H2O}$: hydrogen bonds, one per HF and two per $\ce{H2O}$. Actual bps: 27, 83, 293, 373 K.` },
          { text: R`$\ce{Ne < CO < H2O < HF}$`, correct: false, why: R`$\ce{H2O}$ forms two H-bonds per molecule, HF only one in its chains: water boils higher.` },
          { text: R`$\ce{CO < Ne < HF < H2O}$`, correct: false, why: R`CO is heavier and polar; it boils above Ne.` },
          { text: R`$\ce{HF < H2O < CO < Ne}$`, correct: false, why: R`Reversed.` },
        ],
      },
      {
        n: 14, points: 1, type: "single", src: "Slide 28 · past exam Q26 · hidden",
        prompt: R`Consider $\ce{H2O}$, $\ce{I2}$, HF, and Ne. List the substances in order of increasing boiling points.`,
        options: [
          { text: R`$\ce{I2 < Ne < H2O < HF}$`, correct: false, why: R`$\ce{I2}$ (254 electrons) has far stronger dispersion than Ne.` },
          { text: R`$\ce{Ne < I2 < H2O < HF}$`, correct: false, why: R`$\ce{H2O}$ boils above HF.` },
          { text: R`$\ce{Ne < I2 < HF < H2O}$`, correct: true, why: R`The exam's intended answer: Ne (dispersion, few electrons) < $\ce{I2}$ (dispersion only) < HF (one H-bond) < $\ce{H2O}$ (two H-bonds).` },
          { text: R`$\ce{I2 < HF < H2O < Ne}$`, correct: false, why: R`Ne has the weakest forces and is lowest.` },
        ],
        note: R`<strong>Key caveat.</strong> The real normal boiling point of $\ce{I2}$ is 184 °C (457 K), <em>above</em> HF (293 K) and water (373 K). The true order is $\ce{Ne < HF < H2O < I2}$, which is not among the options. The exam keys (c) on the reasoning "H-bonding beats dispersion", which fails for a molecule as large and polarizable as $\ce{I2}$. Know (c) for the exam, but do not generalize that hydrogen bonding always beats dispersion.`,
      },
      {
        n: 15, points: 1, type: "single", src: "Slide 29 · past exam Q25",
        prompt: R`What is the main interaction responsible for the solubility of ionic solids in water?`,
        options: [
          { text: "Ion – dispersion forces", correct: false, why: R`Weak; would not compete with the lattice energy.` },
          { text: "Dispersion – dispersion forces", correct: false, why: R`Present everywhere, but not what dissolves salts.` },
          { text: "Ion – dipole forces", correct: true, why: R`Water dipoles surround each ion: the δ⁻ O ends face cations, the δ⁺ H ends face anions.` },
          { text: "Dipole – dipole forces", correct: false, why: R`Ions are charges, not dipoles.` },
        ],
      },
      // ===================================================== Phase changes & heat (16–25)
      {
        n: 16, points: 1, type: "single", src: "Slide 34 · past exam Q29",
        prompt: R`When ice melts at 0 °C …`,
        options: [
          { text: "Heat is absorbed and the temperature rises.", correct: false, why: R`During a phase change the temperature is constant (the flat segment of the heating curve).` },
          { text: "No heat is absorbed, but the temperature rises.", correct: false, why: R`Melting needs $\Delta H_\text{fus}$, and $T$ is constant.` },
          { text: "Heat is absorbed, but the temperature stays constant.", correct: true, why: R`The heat breaks intermolecular attractions in the solid ($\Delta H_\text{fus}$) instead of raising $T$.` },
          { text: "No heat is absorbed and the temperature stays constant.", correct: false, why: R`Melting is endothermic: 6.01 kJ/mol for ice.` },
        ],
      },
      {
        n: 17, points: 1, type: "single", src: "Slide 36 · example similar to past exams",
        prompt: R`500 J of heat is transferred to equal-mass samples of the following substances, all at the same initial temperature: water ($c_p = 4.2$ J/(g·°C)), iron (0.45 J/(g·K)), copper (0.39 J/(g·K)), aluminum (0.90 J/(g·K)). Which sample will reach the highest final temperature?`,
        options: [
          { text: "Water", correct: false, why: R`Largest $c_p$: the <em>smallest</em> temperature rise.` },
          { text: "Iron", correct: false, why: R`0.45 is low but not the lowest.` },
          { text: "Copper", correct: true, why: R`$\Delta T = q/(mc_p)$: same $q$ and $m$, so the smallest $c_p$ (0.39) gives the largest $\Delta T$.` },
          { text: "Aluminum", correct: false, why: R`0.90 J/(g·K): twice copper's.` },
        ],
      },
      {
        n: 18, points: 1, type: "numeric", src: "Slide 37 · example",
        prompt: R`How much heat is needed to evaporate 2 mol (36 g) of water? ($\Delta H_\text{vap} = 40.7$ kJ/mol)`,
        answer: 81.4, rtol: S3, unit: "kJ", answerText: "81.4",
        why: R`During boiling the temperature is constant, so only the phase-change term counts: $q = n\Delta H_\text{vap} = (2\ \text{mol})(40.7\ \text{kJ/mol}) = 81.4$ kJ.`,
      },
      {
        n: 19, points: 1, type: "numeric", src: "Slides 38–39 · example (similar to homework)",
        prompt: ICE, figure: { img: "img/s38_heating_curve.png", alt: "Heating curve for water: A (ice at –25 °C) to B (0 °C), plateau B–C melting, C to D (100 °C), plateau D–E vaporization, E to F (steam at 125 °C)" },
        prompt2: "Total heat, A → F (three significant figures):",
        answer: 55.95, rtol: S3, unit: "kJ", answerText: "56.0",
        why: R`Sum the five steps (18.0 g):<br>A→B ice: $(18.0)(2.03)(25) = 0.91$ kJ<br>B→C melt: $(1.00)(6.01) = 6.01$ kJ<br>C→D water: $(18.0)(4.18)(100) = 7.52$ kJ<br>D→E boil: $(1.00)(40.67) = 40.7$ kJ<br>E→F steam: $(18.0)(1.84)(25) = 0.83$ kJ<br>Total $= 56.0$ kJ. Vaporization dominates.`,
      },
      {
        n: 20, points: 1, type: "single", src: "Slide 40 · past exam Q27 · hidden",
        prompt: R`How much heat is needed to heat 1.0 mol (18 g) of water from 10 °C to 100 °C? (At sea level, water boils at 100 °C. In this experiment, as soon as the boiling point is reached, the heat is turned off, so that no heat is used for evaporation.)`,
        options: [
          { text: "75 J", correct: false, why: R`That is the molar heat capacity (J/(mol·K)), not a heat.` },
          { text: "380 J", correct: false, why: R`Off by a factor of 18 (uses 1 g).` },
          { text: "6.8 kJ", correct: true, why: R`$q = mc_p\Delta T = (18)(4.184)(90) = 6800$ J $= 6.8$ kJ.` },
          { text: "68 kJ", correct: false, why: R`Ten times too large.` },
        ],
      },
      {
        n: 21, points: 1, type: "single", src: "Slide 40 · past exam Q28 · hidden",
        prompt: R`Suppose now that in the previous experiment once the temperature of water reaches 100 °C the heat supply continues uninterrupted until the water (the entire 1.0 mol of it) is turned to water vapor. What is the total amount of heat needed in this case, starting from 10 °C? ($\Delta H_\text{vap} = 40.67$ kJ/mol)`,
        options: [
          { text: "47 J", correct: false, why: R`Units: kJ, not J.` },
          { text: "47 kJ", correct: true, why: R`$6.8 + (1.0)(40.67) = 47$ kJ.` },
          { text: "71 kJ", correct: false, why: R`Not a sum of the two steps.` },
          { text: "110 kJ", correct: false, why: R`Far too large.` },
        ],
      },
      // ===================================================== Calorimetry (21–26)
      {
        n: 22, points: 1, type: "single", src: "Slide 44 · example (1/4)",
        prompt: CUP, prompt2: "This means:",
        options: [
          { text: "Heat is released from the reaction to surroundings", correct: false, why: R`Released heat would warm the water.` },
          { text: "Heat is absorbed by the reaction from surroundings", correct: true, why: R`The water (surroundings) cools because the reaction (system) draws heat out of it.` },
        ],
      },
      {
        n: 23, points: 1, type: "single", src: "Slide 44 · example (2/4)",
        prompt: CUP, prompt2: "This means that the reaction is:",
        options: [
          { text: "Endothermic", correct: true, why: R`Heat flows into the system.` },
          { text: "Exothermic", correct: false, why: R`An exothermic reaction would raise the temperature.` },
        ],
      },
      {
        n: 24, points: 1, type: "single", src: "Slide 44 · example (3/4)",
        prompt: CUP, prompt2: "And:",
        options: [
          { text: R`$\Delta H_\text{rxn} > 0$`, correct: true, why: R`Endothermic at constant pressure: $\Delta H = q_p > 0$.` },
          { text: R`$\Delta H_\text{rxn} < 0$`, correct: false, why: R`That is exothermic.` },
        ],
      },
      {
        n: 25, points: 1, type: "single", src: "Slide 44 · example (4/4)",
        prompt: CUP, prompt2: "And:",
        options: [
          { text: "The products have lower energy than the reactants", correct: false, why: R`That is an exothermic reaction.` },
          { text: "The products have higher energy than the reactants", correct: true, why: R`$\Delta H = H_\text{products} - H_\text{reactants} > 0$.` },
        ],
      },
      {
        n: 26, points: 1, type: "numeric", src: "Slide 45 · example · hidden",
        prompt: BOMB, prompt2: "How much heat is absorbed by the body of the calorimeter (not by the water)?",
        answer: 1816, rtol: 0.003, unit: "J", answerText: "1816",
        why: R`Water absorbs $c_p m\Delta T = (4.184)(100)(10) = 4184$ J. The rest goes into the calorimeter body: $6000 - 4184 = 1816$ J.`,
      },
      {
        n: 27, points: 1, type: "numeric", src: "Slide 45 · follow-up · hidden",
        prompt: BOMB, prompt2: "Follow-up: what is the heat capacity of the calorimeter itself?",
        answer: 181.6, rtol: 0.003, unit: "J/K", answerText: "181.6",
        why: R`The body absorbed 1816 J and warmed 10 K: $C = q/\Delta T = 1816/10 = 181.6$ J/K.`,
      },
      // ===================================================== Vapor pressure & phase diagrams (27–37)
      {
        n: 28, points: 1, type: "single", src: "Slide 48 · homework · hidden",
        prompt: R`Why do you think ionic liquids have lower vapor pressures than most room-temperature molecular liquids?`,
        options: [
          { text: "Because ions in ionic liquids have lower kinetic energy than molecules in molecular solvents.", correct: false, why: R`At the same $T$ the average kinetic energy is the same.` },
          { text: "Because ion-ion interparticle attractive forces are extremely strong relative to the forces operating in most molecular solvents.", correct: true, why: R`Few particles have enough energy to escape attractions that strong, so the vapor pressure is tiny.` },
          { text: "Because ions in ionic liquids have lower potential energy than molecules in molecular solvents.", correct: false, why: R`Vague, and not the reason: what matters is how strongly particles are held, i.e. the attractive forces.` },
          { text: "Because ions with like charges in the vapor phase experience strong repulsive forces.", correct: false, why: R`The vapor is dilute; vapor pressure is controlled by escaping the liquid.` },
        ],
      },
      {
        n: 29, points: 1, type: "single", src: "Slide 50 · past exam Q33",
        prompt: R`When you boil pure ethanol bubbles form inside the liquid, similar to the boiling of water. What do the bubbles in boiling ethanol consist of?`,
        options: [
          { text: "Air", correct: false, why: R`Dissolved air leaves early as small bubbles on heating; boiling bubbles are something else.` },
          { text: "Water", correct: false, why: R`The liquid is pure ethanol.` },
          { text: R`$\ce{CO2}$`, correct: false, why: R`Boiling is a physical change; ethanol does not decompose.` },
          { text: "Ethanol", correct: true, why: R`Boiling is vaporization throughout the liquid: the bubbles are ethanol vapor whose pressure equals the external pressure.` },
        ],
      },
      {
        n: 30, points: 1, type: "single", src: "Slide 52 · homework",
        prompt: R`Based on the figure, the boiling point of water under an external pressure of 0.724 atm is ________ °C.`,
        figure: VP,
        options: [
          { text: "60", correct: false, why: R`Water's vapor pressure at 60 °C is only about 150 torr.` },
          { text: "70", correct: false, why: R`About 230 torr at 70 °C.` },
          { text: "40", correct: false, why: R`About 55 torr at 40 °C.` },
          { text: "90", correct: true, why: R`$0.724 \times 760 = 550$ torr. Read across at 550 torr to the water curve: about 90 °C.` },
          { text: "80", correct: false, why: R`About 355 torr at 80 °C.` },
        ],
      },
      {
        n: 31, points: 1, type: "single", src: "Slide 53 · past exam Q32 · hidden",
        prompt: R`The standard boiling point of water is 100 °C, while that of mercury is 356.7 °C. Given this information, which of the vapor pressure curves given correspond to water and which to mercury?`,
        figure: { img: "img/s53_vp_curves.png", alt: "Vapor pressure curves A, B, C, D crossing the 760 mmHg line near 40, 100, 200 and 357 °C" },
        options: [
          { text: "A for water, B for mercury", correct: false, why: R`A crosses 760 mmHg near 40 °C.` },
          { text: "B for water, C for mercury", correct: false, why: R`C crosses near 200 °C.` },
          { text: "B for water, D for mercury", correct: true, why: R`The normal boiling point is where a curve crosses 760 mmHg (dashed line): B at about 100 °C, D at about 357 °C.` },
          { text: "C for water, D for mercury", correct: false, why: R`C boils near 200 °C, not 100 °C.` },
        ],
      },
      {
        n: 32, points: 1, type: "single", src: "Slide 54 · homework",
        prompt: R`The phase diagram of a substance is shown. The area labeled ________ indicates the gas phase for the substance.`,
        figure: PD1,
        options: [
          { text: "w", correct: false, why: R`Upper left (low $T$, high $P$): solid.` },
          { text: "x", correct: false, why: R`Above the vapor-pressure curve, right of the melting line: liquid.` },
          { text: "y", correct: true, why: R`Below the vapor-pressure and sublimation curves (high $T$, low $P$): gas.` },
          { text: "z", correct: false, why: R`z marks a point, the triple point, not an area.` },
        ],
      },
      {
        n: 33, points: 1, type: "single", src: "Slide 55 · homework",
        prompt: R`According to the phase diagram shown, the normal melting point of this substance is ________ °C.`,
        figure: PD1,
        options: [
          { text: "38", correct: false, why: R`Past the end of the liquid–gas curve drawn; not on the solid–liquid line.` },
          { text: "-13", correct: false, why: R`Below the triple point.` },
          { text: "0", correct: true, why: R`Go up to 760 torr and across to the solid–liquid line (w/x boundary): it is essentially vertical at 0 °C.` },
          { text: "29", correct: false, why: R`About where the liquid–gas curve reaches 760 torr: that is the normal <em>boiling</em> point, not the melting point.` },
          { text: "10", correct: false, why: R`Inside the liquid region at 760 torr.` },
        ],
      },
      {
        n: 34, points: 1, type: "single", src: "Slide 56 · homework · hidden",
        prompt: R`The phase diagram of a substance is given. This substance is a ________ at 10 °C and 1.0 atm.`,
        figure: { img: "img/s56_phase_atm.png", alt: "Phase diagram, P in atm vs T in °C; solid–liquid line slopes right from the triple point z near 10 °C, 0.55 atm" },
        options: [
          { text: "supercritical fluid", correct: false, why: R`No critical point is near; that would be at high $T$ and $P$.` },
          { text: "gas", correct: false, why: R`1.0 atm at 10 °C is well above the sublimation/vapor curve.` },
          { text: "crystal", correct: false, why: R`Not a phase region label on a phase diagram.` },
          { text: "liquid", correct: false, why: R`At 1.0 atm the melting line sits at about 14 °C, so 10 °C is still left of it.` },
          { text: "solid", correct: true, why: R`The solid–liquid line slopes to the right: at 1.0 atm it is near 14 °C, so (10 °C, 1.0 atm) lies in region w, the solid.` },
        ],
      },
      {
        n: 35, points: 1, type: "numeric", src: "Slide 57 · YOUR TURN · hidden",
        prompt: R`Use the figure to estimate the boiling point of diethyl ether under an external pressure of 0.80 atm.`,
        figure: { img: "img/s57_ether.png", alt: "Vapor pressure vs temperature for diethyl ether, ethanol, water and ethylene glycol" },
        answer: 26, tol: 3, unit: "°C", answerText: "≈ 26",
        why: R`$0.80 \times 760 = 608$ torr. Across to the diethyl ether curve and down: about 26 °C (±3 accepted for a graph reading).`,
      },
      {
        n: 36, points: 1, type: "single", src: "Slide 58 · YOUR TURN · hidden",
        prompt: R`When water boils, what are the bubbles composed of?`,
        options: [
          { text: "Oxygen", correct: false, why: R`Boiling does not decompose water.` },
          { text: "Water", correct: true, why: R`Water vapor. (Deck notes: answer b.)` },
          { text: "Carbon dioxide", correct: false, why: R`Dissolved gases escape early, but the boiling bubbles are vapor.` },
          { text: "Other impurities", correct: false, why: R`Pure water boils too.` },
        ],
      },
      {
        n: 37, points: 1, type: "match", src: "Slide 60 · homework",
        prompt: R`As the intermolecular <u>attractive forces between molecules increase in magnitude</u>, do you expect each of the following to increase or decrease in magnitude?`,
        choices: ["Increase", "Decrease"],
        items: [
          { label: "boiling point", answer: "Increase", why: R`More energy needed to separate molecules into the vapor.` },
          { label: "vapor pressure", answer: "Decrease", why: R`Fewer molecules escape the liquid at a given $T$. The only one that decreases.` },
          { label: "surface tension", answer: "Increase", why: R`Surface molecules are pulled inward more strongly.` },
          { label: "heat of vaporization", answer: "Increase", why: R`It measures exactly the attractions overcome.` },
          { label: "freezing point", answer: "Increase", why: R`Stronger attractions hold the solid together to higher $T$.` },
          { label: "critical temperature", answer: "Increase", why: R`The gas can be liquefied at higher $T$.` },
          { label: "viscosity", answer: "Increase", why: R`Molecules slide past each other less easily.` },
        ],
      },
      {
        n: 38, points: 1, type: "single", src: "Slides 61–62 · YOUR TURN · hidden",
        prompt: R`Which compound do you think is more volatile at 25 °C: $\ce{CCl4}$ or $\ce{CBr4}$?`,
        options: [
          { text: R`$\ce{CBr4}$, because dispersion forces between its molecules are greater than in $\ce{CCl4}$`, correct: false, why: R`Greater dispersion forces make it <em>less</em> volatile.` },
          { text: R`$\ce{CBr4}$, because polar forces between its molecules are smaller than in $\ce{CCl4}$`, correct: false, why: R`Both are tetrahedral and nonpolar; there are no polar forces to compare.` },
          { text: R`$\ce{CCl4}$, because polar forces between its molecules are greater than in $\ce{CBr4}$`, correct: false, why: R`Right compound, wrong reason: $\ce{CCl4}$ is nonpolar.` },
          { text: R`$\ce{CCl4}$, because dispersion forces between its molecules are smaller than in $\ce{CBr4}$`, correct: true, why: R`Both are nonpolar. Cl is smaller and less polarizable than Br, so $\ce{CCl4}$ has weaker dispersion forces and a higher vapor pressure. (Deck notes: answer d.)` },
        ],
      },
    ],
  };
})();
