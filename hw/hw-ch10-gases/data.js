/* Homework — Chapter 10: Gases (Mastering Chemistry problems, transcribed from screenshots).
 *
 * One entry per answerable part. Problems keep their homework number; parts are titled
 * "Problem N · Part X" and labelled "NX" in the question map. `src` is the screenshot file.
 *
 * HW-specific fields (see assets/js/quiz-engine.js)
 *   unlock      : true for parts captured from the "_star" (unlock) screenshots; shows a ★ badge
 *   pending     : true when the answer is not available yet (stem not captured, part still locked);
 *                 the part is shown but not answerable, graded or counted
 *   pendingNote : what is missing / how to finish it
 *   mapLabel    : label on the question-map button (e.g. "2B")
 *   rtol        : relative tolerance for numeric answers (0.006 ≈ 3 sig figs, 0.02 ≈ 2 sig figs)
 *
 * Mastering randomizes numbers per student: every answer here is computed from the values
 * shown in these screenshots. When a pending part is unlocked, replace `pending`/`pendingNote`
 * with `type`, `answer` (or `options`) and `why`, and bump `total` for this HW in the root index.html.
 */
(function () {
  const R = String.raw;
  const RG = R`$R = 0.08206\ \mathrm{L\,atm\,mol^{-1}\,K^{-1}}$`;
  const stem = (t) => `<span class="stem">${t}</span>`;
  const part = (p, t) => `<span class="part">Part ${p}</span>${t}`;
  const S3 = 0.006, S2 = 0.02;

  // shared stems
  const P2 = stem(R`The typical atmospheric pressure on top of Mt. Logan (19,551 ft) is about 356 torr. Convert this pressure to the following units.`);
  const P2why = R`$356\ \text{torr} \times \dfrac{1\ \text{atm}}{760\ \text{torr}} = 0.468\ \text{atm}$. Then $1\ \text{atm} = 760\ \text{mm Hg} = 101{,}325\ \text{Pa} = 1.01325\ \text{bar} = 14.696\ \text{psi}$.`;
  const P6 = stem(R`You have a sample of gas in a container with a movable piston, such as the one in the drawing.`);
  const P6fig = { img: "img/p06_piston.png", alt: "Gas particles in a cylinder under a movable piston" };
  const P7 = stem(R`Imagine that the reaction $\ce{2CO(g) + O2(g) -> 2CO2(g)}$ occurs in a container that has a piston that moves to maintain a constant pressure when the reaction occurs at constant temperature.`);
  const P8 = stem(R`Nitrogen and hydrogen gases react to form ammonia gas via the following reaction: <span class="eq">$\ce{N2(g) + 3H2(g) -> 2NH3(g)}$</span>At a certain temperature and pressure, 1.7 L of $\ce{N2}$ reacts with 5.1 L of $\ce{H2}$.`);
  const P10a = stem(R`Ammonia, $\ce{NH3(g)}$, and hydrogen chloride, $\ce{HCl(g)}$, react to form solid ammonium chloride, $\ce{NH4Cl(s)}$: <span class="eq">$\ce{NH3(g) + HCl(g) -> NH4Cl(s)}$</span>Two 3.00 L flasks at 35.0 °C are connected by a stopcock, as shown in the drawing.`);
  const P10b = stem(R`One flask contains 5.00 g $\ce{NH3(g)}$, and the other contains 4.40 g $\ce{HCl(g)}$. When the stopcock is opened, the gases react until one is completely consumed.`);
  const P10fig = { img: "img/p10_flasks.png", alt: "Two flasks, NH3(g) and HCl(g), joined by a stopcock" };
  const P10mol = R`$n(\ce{NH3}) = 5.00/17.03 = 0.2936$ mol; $n(\ce{HCl}) = 4.40/36.46 = 0.1207$ mol. The reaction is 1 : 1, so HCl runs out and $0.2936 - 0.1207 = 0.1729$ mol $\ce{NH3}$ is left.`;
  const P11 = stem(R`To derive the ideal gas equation, we assume that the volume of the gas atoms or molecules can be neglected.`);
  const P12 = stem(R`<em>Problem stem not captured in the screenshots (Part A and Part C only; Parts B, D, E were still locked).</em>`);
  const P20 = stem(R`The drawing below represents a mixture of three different gases.`);
  const P20fig = { img: "img/p20_mixture.png", alt: "Box with 5 blue, 3 yellow and 2 red gas particles" };
  const P21 = stem(R`Consider the apparatus shown in the drawing.`);
  const P21fig = { img: "img/p21_apparatus.png", alt: "N2 bulb (2.0 L, 1.0 atm, 25 °C) joined by a valve to an O2 bulb (3.0 L, 2.0 atm, 25 °C)" };
  const P22 = stem(R`A mixture containing 0.768 mol $\ce{He(g)}$, 0.253 mol $\ce{Ne(g)}$, and 0.120 mol $\ce{Ar(g)}$ is confined in a 10.00-L vessel at 25 °C.`);
  const P22k = R`Each gas fills the whole vessel: $P_i = n_i \dfrac{RT}{V}$, with $\dfrac{RT}{V} = \dfrac{(0.08206)(298.15)}{10.00} = 2.447$ atm/mol.`;
  const P29 = stem(R`Large amounts of nitrogen gas are used in the manufacture of ammonia, principally for use in fertilizers. Suppose 110.00 kg of $\ce{N2(g)}$ is stored in a 1400.0 L metal cylinder at 290 °C.`);
  const P29n = R`$n = 110{,}000\ \text{g} / 28.014\ \text{g/mol} = 3926.6$ mol, $T = 563.15$ K.`;
  const P30 = stem(R`The metabolic oxidation of glucose, $\ce{C6H12O6}$, in our bodies produces $\ce{CO2}$, which is expelled from our lungs as a gas: <span class="eq">$\ce{C6H12O6(aq) + 6O2(g) -> 6CO2(g) + 6H2O(l)}$</span>`);
  const P34 = stem(R`<em>Problem stem not captured (screenshots 33_a and 33_b — a tank of oxygen; this is a different problem from 33_, which is a single Part A).</em>`);

  window.QUIZ = {
    id: "chem181-hw-ch10-gases",
    course: "CHEM 181",
    title: "Homework — Ch. 10: Gases",
    unitName: "parts",
    scoring: "Every part is worth 1 point. Multiple-choice parts are all or nothing; typed numeric parts accept the answer within its significant figures (the tolerance is shown in the panel); the ranking part is scored per item. Scientific notation can be typed as 4.75e4 or 4.75x10^4.",
    toolsNote: R`Constants: ${RG} $= 8.314\ \mathrm{J\,mol^{-1}\,K^{-1}}$; $1\ \text{atm} = 760\ \text{torr} = 101{,}325\ \text{Pa} = 1.01325\ \text{bar} = 14.70\ \text{psi}$; STP = 273.15 K and 1 atm, molar volume 22.4 L.`,
    introNote: R`Mastering randomizes the numbers per student: answers are computed from the values shown in these screenshots. Parts marked <b>★ Unlock</b> came from the unlock screenshots. Pending parts (striped in the map) are shown without an answer until they are worked or unlocked.`,
    questions: [
      // ================================================================ 1 — pressure as force/area
      {
        n: 1, mapLabel: "1", points: 1, type: "single", title: "Problem 1", src: "1_",
        prompt: R`A gas at a pressure of 10.0 Pa exerts a force of ________ N on an area of 5.5 m².`,
        options: [
          { text: "0.55", correct: false, why: R`That is $A/P$ (5.5/10.0), upside down and dimensionally m³/N, not N.` },
          { text: "18", correct: false, why: R`Not a combination of 10.0 and 5.5 that gives newtons.` },
          { text: "55", correct: true, why: R`$P = F/A$, so $F = PA = (10.0\ \mathrm{N/m^2})(5.5\ \mathrm{m^2}) = 55$ N (1 Pa = 1 N/m²).` },
          { text: "1.8", correct: false, why: R`That is $P/A$ (10.0/5.5); force is pressure <em>times</em> area.` },
          { text: "5.5", correct: false, why: R`That is just the area.` },
        ],
      },
      // ================================================================ 2 — unit conversions
      {
        n: 2, mapLabel: "2A", points: 1, type: "numeric", title: "Problem 2 · Part A", src: "2_a",
        prompt: P2, prompt2: part("A", "atm — express your answer in atmospheres to three significant figures."),
        answer: 0.468421, rtol: S3, unit: "atm", answerText: "0.468", why: P2why,
      },
      {
        n: 3, mapLabel: "2B", points: 1, type: "numeric", title: "Problem 2 · Part B", src: "2_b",
        prompt: P2, prompt2: part("B", "mm Hg — express your answer in millimeters of mercury to three significant figures."),
        answer: 356, rtol: S3, unit: "mm Hg", answerText: "356",
        why: R`1 torr = 1 mm Hg (by definition, to better than 1 part in $10^6$), so 356 torr = 356 mm Hg.`,
      },
      {
        n: 4, mapLabel: "2C", points: 1, type: "numeric", title: "Problem 2 · Part C", src: "2_c",
        prompt: P2, prompt2: part("C", "pascals — express your answer in pascals to three significant figures."),
        answer: 47462.76, rtol: S3, unit: "Pa", answerText: R`$4.75 \times 10^{4}$`,
        why: R`$0.46842\ \text{atm} \times 101{,}325\ \text{Pa/atm} = 4.75 \times 10^{4}$ Pa.`,
      },
      {
        n: 5, mapLabel: "2D", points: 1, type: "numeric", title: "Problem 2 · Part D", src: "2_d",
        prompt: P2, prompt2: part("D", "bars — express your answer in bars to three significant figures."),
        answer: 0.474628, rtol: S3, unit: "bar", answerText: "0.475",
        why: R`$1\ \text{bar} = 10^5$ Pa, so $47{,}463\ \text{Pa} = 0.475$ bar (equivalently $0.46842 \times 1.01325$).`,
      },
      {
        n: 6, mapLabel: "2E", points: 1, type: "numeric", title: "Problem 2 · Part E", src: "2_e",
        prompt: P2, prompt2: part("E", "psi — express your answer in pounds per square inch to three significant figures."),
        answer: 6.88387, rtol: S3, unit: "psi", answerText: "6.88",
        why: R`$0.46842\ \text{atm} \times 14.696\ \text{psi/atm} = 6.88$ psi.`,
      },
      // ================================================================ 3–5 — gas laws
      {
        n: 7, mapLabel: "3", points: 1, type: "single", title: "Problem 3", src: "3_",
        prompt: R`A sample of gas (24.2 g) initially at 3.00 atm was compressed from 8.00 L to 2.00 L at constant temperature. After the compression, the gas pressure was ________ atm.`,
        options: [
          { text: "8.00", correct: false, why: R`That is the initial volume, not a pressure.` },
          { text: "2.00", correct: false, why: R`That is the final volume.` },
          { text: "16.0", correct: false, why: R`$P_1V_1/V_2 = 3.00 \times 8.00/2.00 = 12.0$, not 16.0.` },
          { text: "4.00", correct: false, why: R`That is the volume ratio 8.00/2.00 alone, without multiplying by the starting 3.00 atm.` },
          { text: "12.0", correct: true, why: R`Boyle's law: $P_2 = P_1 V_1/V_2 = (3.00)(8.00)/(2.00) = 12.0$ atm. The mass (24.2 g) is not needed.` },
        ],
      },
      {
        n: 8, mapLabel: "4", points: 1, type: "single", title: "Problem 4", src: "4_",
        prompt: R`A sample of a gas (5.0 mol) at 1.0 atm is expanded at constant temperature from 10 L to 15 L. The final pressure is ________ atm.`,
        options: [
          { text: "1.5", correct: false, why: R`That is $V_2/V_1$: pressure goes the other way, it falls on expansion.` },
          { text: "7.5", correct: false, why: R`Multiplies by the moles; $n$ is constant and cancels.` },
          { text: "15", correct: false, why: R`That is the final volume.` },
          { text: "3.3", correct: false, why: R`Not $P_1V_1/V_2$.` },
          { text: "0.67", correct: true, why: R`Boyle's law: $P_2 = (1.0)(10)/(15) = 0.67$ atm.` },
        ],
      },
      {
        n: 9, mapLabel: "5", points: 1, type: "single", title: "Problem 5", src: "5_",
        prompt: R`A sample of a gas (1.50 mol) is contained in a 15.0 L cylinder. The temperature is increased from 100 °C to 150 °C. The ratio of final pressure to initial pressure $\left[\dfrac{P_2}{P_1}\right]$ is ________.`,
        options: [
          { text: "0.882", correct: false, why: R`That is $T_1/T_2$, inverted: heating at constant volume raises the pressure.` },
          { text: "1.50", correct: false, why: R`That is $150/100$ in °C. Gas laws need kelvin.` },
          { text: "0.667", correct: false, why: R`That is $100/150$ in °C, both inverted and in the wrong units.` },
          { text: "1.00", correct: false, why: R`Pressure changes with temperature at fixed $V$ and $n$.` },
          { text: "1.13", correct: true, why: R`Gay-Lussac (fixed $V$, $n$): $P_2/P_1 = T_2/T_1 = 423.15/373.15 = 1.13$.` },
        ],
      },
      // ================================================================ 6 — piston drawings
      {
        n: 10, mapLabel: "6A", points: 1, type: "single", title: "Problem 6 · Part A", src: "6_a",
        prompt: P6, figure: P6fig,
        prompt2: part("A", R`Identify the drawing of the container to show what it might look like if the temperature of the gas is increased from 300 to 500 K while the pressure is kept constant.`),
        options: [
          { img: "img/p06a_o1.png", alt: "Gas column halves", correct: false, why: R`Volume halves. That would need cooling (or doubling the pressure), not heating.` },
          { img: "img/p06a_o2.png", alt: "Gas column grows by about 5/3", correct: true, why: R`Charles's law: $V_2 = V_1 \cdot 500/300 = 1.67\,V_1$. The piston rises to about 5/3 of its starting height.` },
          { img: "img/p06a_o3.png", alt: "Gas column unchanged", correct: false, why: R`At constant $P$ the volume must change with $T$.` },
          { img: "img/p06a_o4.png", alt: "Gas column shrinks to about 1/3", correct: false, why: R`Volume shrinks. Heating at constant pressure expands the gas.` },
        ],
      },
      {
        n: 11, mapLabel: "6B", points: 1, type: "single", title: "Problem 6 · Part B", src: "6_b",
        prompt: P6, figure: P6fig,
        prompt2: part("B", R`Identify the drawing of the container to show what it might look like if the external pressure on the piston is increased from 1.0 to 2.0 atm while the temperature is kept constant.`),
        options: [
          { img: "img/p06b_o1.png", alt: "Gas column unchanged", correct: false, why: R`Doubling the external pressure must change the volume.` },
          { img: "img/p06b_o2.png", alt: "Gas column grows by about 5/3", correct: false, why: R`The gas expands. Higher external pressure compresses it.` },
          { img: "img/p06b_o3.png", alt: "Gas column grows slightly", correct: false, why: R`Still an expansion.` },
          { img: "img/p06b_o4.png", alt: "Gas column halves", correct: true, why: R`Boyle's law: $V_2 = V_1 \cdot 1.0/2.0 = V_1/2$. The piston drops to half its height.` },
        ],
      },
      {
        n: 12, mapLabel: "6C", points: 1, type: "single", title: "Problem 6 · Part C", src: "6_c",
        prompt: P6, figure: P6fig,
        prompt2: part("C", R`Identify the drawing of the container to show what it might look like if the temperature of the gas decreases from 300 to 200 K while the pressure is kept constant. (Assume that the gas does not liquefy.)`),
        options: [
          { img: "img/p06c_o1.png", alt: "Gas column shrinks to about 2/3", correct: true, why: R`Charles's law: $V_2 = V_1 \cdot 200/300 = 0.67\,V_1$. The piston drops to 2/3 of its height.` },
          { img: "img/p06c_o2.png", alt: "Gas column shrinks to about 1/3", correct: false, why: R`Too far: that is $V_1/3$, which would need 100 K.` },
          { img: "img/p06c_o3.png", alt: "Gas column unchanged", correct: false, why: R`At constant $P$ the volume must follow $T$.` },
          { img: "img/p06c_o4.png", alt: "Gas column grows", correct: false, why: R`Expansion. Cooling contracts the gas.` },
        ],
      },
      // ================================================================ 7 — reaction at constant P
      {
        n: 13, mapLabel: "7A", points: 1, type: "single", title: "Problem 7 · Part A", src: "7, 7_a",
        prompt: P7, prompt2: part("A", "Which of the following statements describes how the volume of the container changes due to the reaction?"),
        options: [
          { text: "The volume increases by 50%.", correct: false, why: R`That would be 2 mol of gas becoming 3, the reverse reaction.` },
          { text: "The volume increases by 33%.", correct: false, why: R`The gas moles go down, not up.` },
          { text: "The volume remains constant.", correct: false, why: R`At constant $T$ and $P$, $V \propto n_\text{gas}$, and $n_\text{gas}$ changes.` },
          { text: "The volume decreases by 33%.", correct: true, why: R`3 mol of gas ($\ce{2CO + O2}$) become 2 mol ($\ce{2CO2}$). Avogadro: $V_2/V_1 = 2/3$, a 33% decrease.` },
          { text: "The volume decreases by 50%.", correct: false, why: R`That would be 2 mol → 1 mol.` },
        ],
      },
      // ================================================================ 8 — combining volumes
      {
        n: 14, mapLabel: "8A", points: 1, type: "numeric", title: "Problem 8 · Part A", src: "8_, 8_a",
        prompt: P8, prompt2: part("A", R`If all the $\ce{N2}$ and $\ce{H2}$ are consumed, what volume of $\ce{NH3}$, at the same temperature and pressure, will be produced? Express your answer using two significant figures.`),
        answer: 3.4, rtol: S2, unit: "L", answerText: "3.4",
        why: R`At the same $T$ and $P$, volumes combine like moles. 1.7 L $\ce{N2}$ : 5.1 L $\ce{H2}$ is exactly 1 : 3, so both are used up and $V(\ce{NH3}) = 2 \times 1.7 = 3.4$ L.`,
      },
      // ================================================================ 9
      {
        n: 15, mapLabel: "9", points: 1, type: "single", title: "Problem 9", src: "9_",
        prompt: R`If 50.75 g of a gas occupies 10.0 L at STP, 129.3 g of the gas will occupy ________ L at STP.`,
        options: [
          { text: "50.8", correct: false, why: R`That is the first mass, not a volume.` },
          { text: "25.5", correct: true, why: R`At fixed $T$, $P$: $V \propto n \propto m$. $V = 10.0 \times 129.3/50.75 = 25.5$ L.` },
          { text: "5.08", correct: false, why: R`Not a ratio of the given numbers that gives volume.` },
          { text: "3.92", correct: false, why: R`That is $10.0 \times 50.75/129.3$, the ratio inverted: more gas takes more room.` },
          { text: "12.9", correct: false, why: R`That is the second mass divided by 10.` },
        ],
      },
      // ================================================================ 10 — NH3 + HCl flasks
      {
        n: 16, mapLabel: "10A", points: 1, type: "single", title: "Problem 10 · Part A", src: "10_, 10_a",
        prompt: P10a, figure: P10fig, prompt2: P10b + part("A", "Which gas will remain in the system after the reaction is complete?"),
        options: [
          { text: R`$\ce{NH3}$`, correct: true, why: P10mol },
          { text: R`$\ce{HCl}$`, correct: false, why: R`HCl is the limiting reactant (0.1207 mol against 0.2936 mol $\ce{NH3}$ in a 1 : 1 reaction), so it is used up.` },
        ],
      },
      {
        n: 17, mapLabel: "10B", points: 1, type: "numeric", title: "Problem 10 · Part B", src: "10_b",
        prompt: P10a, figure: P10fig, prompt2: P10b + part("B", R`What will be the final pressure of the system after the reaction is complete? (Neglect the volume of the ammonium chloride formed.)`),
        answer: 0.72864, rtol: S3, unit: "atm", answerText: "0.729",
        why: P10mol + R` The leftover $\ce{NH3}$ fills both flasks, $V = 6.00$ L, at $T = 308.15$ K: $P = \dfrac{(0.1729)(0.08206)(308.15)}{6.00} = 0.729$ atm.`,
      },
      {
        n: 18, mapLabel: "10C", points: 1, type: "numeric", title: "Problem 10 · Part C", src: "10_c",
        prompt: P10a, figure: P10fig, prompt2: P10b + part("C", "What mass of ammonium chloride will be formed?"),
        answer: 6.4554, rtol: S3, unit: "g", answerText: "6.46",
        why: R`Moles of $\ce{NH4Cl}$ = moles of limiting HCl = 0.1207 mol. $m = 0.1207 \times 53.49\ \text{g/mol} = 6.46$ g.`,
      },
      // ================================================================ 11 — excluded volume
      {
        n: 19, mapLabel: "11A", points: 1, type: "numeric", title: "Problem 11 · Part A", src: "11_, 11_a",
        prompt: P11, prompt2: part("A", R`Given the atomic radius of radon, 1.5 Å, and knowing that a sphere has a volume of $4\pi r^3/3$, calculate the fraction of space that Rn atoms occupy in a sample of radon at STP. Express your answer to two significant figures. ($V_\text{atoms}/V_\text{sample}$)`),
        answer: 3.798e-4, rtol: S2, unit: "", answerText: R`$3.8 \times 10^{-4}$`,
        why: R`One atom: $V = \tfrac{4}{3}\pi(1.5 \times 10^{-8}\ \text{cm})^3 = 1.41 \times 10^{-23}\ \text{cm}^3$. One mole of atoms: $6.022 \times 10^{23} \times 1.41 \times 10^{-23} = 8.51\ \text{cm}^3$. One mole of gas at STP occupies $22.4\ \text{L} = 22{,}400\ \text{cm}^3$. Fraction $= 8.51/22{,}400 = 3.8 \times 10^{-4}$, small enough that neglecting it is justified.`,
      },
      // ================================================================ 12 — unlock problem
      {
        n: 20, mapLabel: "12A", points: 1, type: "single", title: "Problem 12 · Part A", src: "12_star", unlock: true,
        prompt: P12, prompt2: part("A", "What conditions are represented by the abbreviation STP?"),
        options: [
          { text: "STP stands for standard temperature, 298.15 K, and standard pressure, 1 atm.", correct: false, why: R`298.15 K (25 °C) is the thermochemical standard temperature, not STP.` },
          { text: "STP stands for standard temperature, 0 K, and standard pressure, 0 atm.", correct: false, why: R`0 K and 0 atm are absolute zero and vacuum, not reference conditions.` },
          { text: "STP stands for standard temperature, 273 K, and standard pressure, 1 atm.", correct: true, why: R`STP = 0 °C (273.15 K) and 1 atm, where 1 mol of ideal gas occupies 22.4 L.` },
          { text: "STP stands for standard temperature, 298 K, and standard pressure, 0 atm.", correct: false, why: R`Wrong temperature and zero pressure.` },
        ],
      },
      {
        n: 21, mapLabel: "12C", points: 1, title: "Problem 12 · Part C", src: "12_b_star", unlock: true, pending: true,
        prompt: P12, prompt2: part("C", R`How does the volume of the $\ce{O2}$ gas change when the gases mix? Express your answer in liters to two significant figures. $\Delta V_{\ce{O2}} = V_{\ce{O2},\text{final}} - V_{\ce{O2},\text{initial}}$`),
        pendingNote: R`The stem (container volumes) was not captured. If it is the same N<sub>2</sub>/O<sub>2</sub> apparatus as Problem 21 (O<sub>2</sub> bulb 3.0 L, total 5.0 L), each gas expands into the whole apparatus and $\Delta V_{\ce{O2}} = 5.0 - 3.0 = +2.0$ L. Confirm against the stem before trusting that.`,
      },
      // ================================================================ 13–19 — ideal gas law, Dalton
      {
        n: 22, mapLabel: "13A", points: 1, type: "single", title: "Problem 13 · Part A", src: "13_",
        prompt: R`The molar volume of a gas at STP is ________ L.`,
        options: [
          { text: "62.36", correct: false, why: R`That is $R$ in L·torr/(mol·K).` },
          { text: "14.7", correct: false, why: R`That is 1 atm in psi.` },
          { text: "0.08206", correct: false, why: R`That is $R$ in L·atm/(mol·K).` },
          { text: "22.4", correct: true, why: R`$V = RT/P = (0.08206)(273.15)/(1) = 22.4$ L/mol.` },
          { text: "1.00", correct: false, why: R`No gas law gives 1 L/mol at STP.` },
        ],
      },
      {
        n: 23, mapLabel: "14A", points: 1, type: "single", title: "Problem 14 · Part A", src: "14_",
        prompt: R`The volume of 0.43 mol of an ideal gas at 365 torr and 97 °C is ________ L.`,
        options: [
          { text: "0.024", correct: false, why: R`Not $nRT/P$ in consistent units.` },
          { text: "7.1", correct: false, why: R`Uses 97 (°C) instead of 370 K.` },
          { text: "27", correct: true, why: R`$P = 365/760 = 0.4803$ atm, $T = 370.15$ K. $V = nRT/P = (0.43)(0.08206)(370.15)/0.4803 = 27$ L.` },
          { text: "0.054", correct: false, why: R`Not $nRT/P$ in consistent units; convert 365 torr to 0.480 atm.` },
          { text: "11", correct: false, why: R`Not consistent with $nRT/P$.` },
        ],
      },
      {
        n: 24, mapLabel: "15A", points: 1, type: "single", title: "Problem 15 · Part A", src: "15_",
        prompt: R`The reaction of 50 mL of $\ce{Cl2}$ gas with 50 mL of $\ce{C2H4}$ gas via the equation <span class="eq">$\ce{Cl2(g) + C2H4(g) -> C2H4Cl2(g)}$</span>will produce a total of ________ mL of products if pressure and temperature are kept constant.`,
        options: [
          { text: "100", correct: false, why: R`That adds the reactant volumes; two gas molecules combine into one.` },
          { text: "150", correct: false, why: R`More than the reactants; gas moles decrease here.` },
          { text: "125", correct: false, why: R`Not a 1 : 1 : 1 result.` },
          { text: "50", correct: true, why: R`1 : 1 : 1 by volume at fixed $T$, $P$. 50 mL + 50 mL react completely to give 50 mL $\ce{C2H4Cl2}$.` },
          { text: "25", correct: false, why: R`That would be a 2 : 1 product ratio.` },
        ],
      },
      {
        n: 25, mapLabel: "16A", points: 1, type: "single", title: "Problem 16 · Part A", src: "16_",
        prompt: R`The volume of a sample of gas (2.49 g) was 752 mL at 1.98 atm and 62 °C. The gas is ________.`,
        options: [
          { text: "Ne", correct: false, why: R`$M = 20.2$ g/mol, too light.` },
          { text: R`$\ce{NO2}$`, correct: true, why: R`$M = \dfrac{mRT}{PV} = \dfrac{(2.49)(0.08206)(335.15)}{(1.98)(0.752)} = 46.0$ g/mol, which matches $\ce{NO2}$ (46.01).` },
          { text: R`$\ce{NH3}$`, correct: false, why: R`$M = 17.0$ g/mol.` },
          { text: R`$\ce{SO2}$`, correct: false, why: R`$M = 64.1$ g/mol.` },
          { text: R`$\ce{SO3}$`, correct: false, why: R`$M = 80.1$ g/mol.` },
        ],
      },
      {
        n: 26, mapLabel: "17A", points: 1, type: "single", title: "Problem 17 · Part A", src: "17_",
        prompt: R`10.0 grams of argon and 20.0 grams of neon are placed in a 1045.0 mL container at 32.5 °C. The partial pressure of neon is ________ atm.`,
        options: [
          { text: "58.5", correct: false, why: R`Too large: not $n_\text{Ne}RT/V$.` },
          { text: "23.8", correct: true, why: R`$n_\text{Ne} = 20.0/20.18 = 0.991$ mol. $P_\text{Ne} = (0.991)(0.08206)(305.65)/1.045 = 23.8$ atm. The argon does not matter.` },
          { text: "28.6", correct: false, why: R`Not $n_\text{Ne}RT/V$ (for reference, the total with argon is 29.8 atm).` },
          { text: "2.53", correct: false, why: R`Off by a factor of about 10.` },
          { text: "6.00", correct: false, why: R`Close to the partial pressure of argon, not neon.` },
        ],
      },
      {
        n: 27, mapLabel: "18A", points: 1, type: "single", title: "Problem 18 · Part A", src: "18_",
        prompt: R`A mixture of Xe, Kr, and Ar has a total pressure of 6.69 atm. What is the mole fraction of Kr if the partial pressures of Xe and Ar are 1.92 atm and 2.59 atm, respectively?`,
        options: [
          { text: "0.387", correct: false, why: R`That is $\chi_\text{Ar} = 2.59/6.69$.` },
          { text: "0.275", correct: false, why: R`Not $P_\text{Kr}/P_\text{tot}$.` },
          { text: "0.287", correct: false, why: R`That is $\chi_\text{Xe} = 1.92/6.69$.` },
          { text: "0.326", correct: true, why: R`$P_\text{Kr} = 6.69 - 1.92 - 2.59 = 2.18$ atm. $\chi_\text{Kr} = 2.18/6.69 = 0.326$.` },
          { text: "0.674", correct: false, why: R`That is $1 - \chi_\text{Kr}$, the Xe + Ar fraction.` },
        ],
      },
      {
        n: 28, mapLabel: "19A", points: 1, type: "single", title: "Problem 19 · Part A", src: "19_",
        prompt: R`A mixture of He and Ne at a total pressure of 0.95 atm is found to contain 0.32 mol of He and 0.56 mol of Ne. The partial pressure of Ne is ________ atm.`,
        options: [
          { text: "1.7", correct: false, why: R`Larger than the total pressure, impossible.` },
          { text: "1.5", correct: false, why: R`Larger than the total pressure.` },
          { text: "0.35", correct: false, why: R`That is $P_\text{He} = (0.32/0.88)(0.95)$.` },
          { text: "0.60", correct: true, why: R`$\chi_\text{Ne} = 0.56/(0.32 + 0.56) = 0.636$. $P_\text{Ne} = 0.636 \times 0.95 = 0.60$ atm.` },
          { text: "1.0", correct: false, why: R`Larger than the total pressure.` },
        ],
      },
      // ================================================================ 20 — ranking (unlock)
      {
        n: 29, mapLabel: "20A", points: 1, type: "match", title: "Problem 20 · Part A", src: "20_, 20_star", unlock: true,
        prompt: P20, figure: P20fig,
        prompt2: part("A", "Rank the three components in order of decreasing partial pressure (highest = 1). No two are equivalent in this drawing."),
        choices: ["1 (highest)", "2", "3 (lowest)"],
        items: [
          { label: `"blue" gas`, answer: "1 (highest)", why: R`5 of 10 particles: $\chi = 0.5$. In one container at one $T$, $P_i = \chi_i P_\text{tot}$, so most particles means highest partial pressure.` },
          { label: `"yellow" gas`, answer: "2", why: R`3 of 10 particles: $\chi = 0.3$.` },
          { label: `"red" gas`, answer: "3 (lowest)", why: R`2 of 10 particles: $\chi = 0.2$.` },
        ],
      },
      // ================================================================ 21 — two bulbs
      {
        n: 30, mapLabel: "21A", points: 1, type: "numeric", title: "Problem 21 · Part A", src: "21_, 21_a",
        prompt: P21, figure: P21fig,
        prompt2: part("A", R`When the valve between the two containers is opened and the gases are allowed to mix, how does the volume occupied by the $\ce{N2}$ gas change? Express your answer in liters to two significant figures. $\Delta V_{\ce{N2}} = V_{\ce{N2},\text{final}} - V_{\ce{N2},\text{initial}}$`),
        answer: 3.0, rtol: S2, unit: "L", answerText: "3.0",
        why: R`A gas fills its whole container. After mixing, $\ce{N2}$ occupies both bulbs: $2.0 + 3.0 = 5.0$ L. $\Delta V_{\ce{N2}} = 5.0 - 2.0 = +3.0$ L.`,
      },
      // ================================================================ 22 — Dalton
      {
        n: 31, mapLabel: "22A", points: 1, type: "numeric", title: "Problem 22 · Part A", src: "22_, 22_a",
        prompt: P22, prompt2: part("A", "Calculate the partial pressure of He in the mixture."),
        answer: 1.87893, rtol: S3, unit: "atm", answerText: "1.88", why: P22k + R` $P_\text{He} = 0.768 \times 2.447 = 1.88$ atm.`,
      },
      {
        n: 32, mapLabel: "22B", points: 1, type: "numeric", title: "Problem 22 · Part B", src: "22_b",
        prompt: P22, prompt2: part("B", "Calculate the partial pressure of Ne in the mixture."),
        answer: 0.618972, rtol: S3, unit: "atm", answerText: "0.619", why: P22k + R` $P_\text{Ne} = 0.253 \times 2.447 = 0.619$ atm.`,
      },
      {
        n: 33, mapLabel: "22C", points: 1, type: "numeric", title: "Problem 22 · Part C", src: "22_c",
        prompt: P22, prompt2: part("C", "Calculate the partial pressure of Ar in the mixture."),
        answer: 0.293584, rtol: S3, unit: "atm", answerText: "0.294", why: P22k + R` $P_\text{Ar} = 0.120 \times 2.447 = 0.294$ atm.`,
      },
      {
        n: 34, mapLabel: "22D", points: 1, type: "numeric", title: "Problem 22 · Part D", src: "22_d",
        prompt: P22, prompt2: part("D", "Calculate the total pressure of the mixture."),
        answer: 2.79149, rtol: S3, unit: "atm", answerText: "2.79",
        why: R`Dalton: $P_\text{tot} = 1.879 + 0.619 + 0.294 = 2.79$ atm, or $(1.141\ \text{mol})(2.447) = 2.79$ atm.`,
      },
      // ================================================================ 23–28 — KMT and real gases
      {
        n: 35, mapLabel: "23", points: 1, type: "single", title: "Problem 23", src: "23_",
        prompt: R`The kinetic-molecular theory predicts that pressure rises as the temperature of a gas increases because ________.`,
        options: [
          { text: "the gas molecules collide more energetically with the wall", correct: false, why: R`True, but only half of it: faster molecules also hit more often.` },
          { text: "the gas molecules collide less frequently with the wall", correct: false, why: R`Faster molecules reach the wall more often, not less.` },
          { text: "the gas molecules collide more frequently with the wall", correct: false, why: R`True, but each collision also carries more momentum.` },
          { text: "the average kinetic energy of the gas molecules decreases", correct: false, why: R`Average KE is proportional to $T$; it increases.` },
          { text: "both the gas molecules collide more frequently with the wall and the gas molecules collide more energetically with the wall", correct: true, why: R`Higher $T$ means higher speed $u$. Collision rate $\propto u$ and momentum per hit $\propto u$, so $P \propto u^2 \propto T$. Both effects together.` },
        ],
      },
      {
        n: 36, mapLabel: "24", points: 1, type: "single", title: "Problem 24", src: "24_",
        prompt: R`According to kinetic-molecular theory, in which of the following gases will the root-mean-square speed of the molecules be the highest at 200 °C?`,
        options: [
          { text: "HCl", correct: false, why: R`$M = 36.5$ g/mol.` },
          { text: R`$\ce{H2O}$`, correct: true, why: R`$u_\text{rms} = \sqrt{3RT/M}$: at one $T$ the lightest molecule is fastest. $\ce{H2O}$ (18.0 g/mol) is the lightest listed.` },
          { text: R`$\ce{SF6}$`, correct: false, why: R`$M = 146$ g/mol, the slowest.` },
          { text: R`$\ce{Cl2}$`, correct: false, why: R`$M = 70.9$ g/mol.` },
          { text: "None. The molecules of all gases have the same root-mean-square speed at any given temperature.", correct: false, why: R`They have the same average <em>kinetic energy</em>; the speed depends on mass.` },
        ],
      },
      {
        n: 37, mapLabel: "25A", points: 1, type: "single", title: "Problem 25 · Part A", src: "25_",
        prompt: R`The root-mean-square speed of CO at 113 °C is ________ m/s.`,
        options: [
          { text: "993", correct: false, why: R`Too fast for 28 g/mol at 386 K.` },
          { text: "586", correct: true, why: R`$u_\text{rms} = \sqrt{\dfrac{3RT}{M}} = \sqrt{\dfrac{3(8.314)(386.15)}{0.02801}} = 586$ m/s. Use $R$ in J and $M$ in <b>kg</b>/mol.` },
          { text: "317", correct: false, why: R`Uses 113 (°C) instead of 386 K.` },
          { text: "31.5", correct: false, why: R`A units slip ($M$ in g/mol, or °C for $T$).` },
          { text: "58.3", correct: false, why: R`A units slip; $M$ must be in kg/mol when $R = 8.314$ J/(mol·K).` },
        ],
      },
      {
        n: 38, mapLabel: "26A", points: 1, type: "single", title: "Problem 26 · Part A", src: "26_",
        prompt: R`Arrange the following gases in order of increasing average molecular speed at 25 °C: He, $\ce{O2}$, $\ce{CO2}$, $\ce{N2}$.`,
        options: [
          { text: R`$\ce{He < N2 < O2 < CO2}$`, correct: false, why: R`This is decreasing speed (increasing mass).` },
          { text: R`$\ce{He < O2 < N2 < CO2}$`, correct: false, why: R`He is the fastest, not the slowest.` },
          { text: R`$\ce{CO2 < He < N2 < O2}$`, correct: false, why: R`He is the lightest, so it is last.` },
          { text: R`$\ce{CO2 < N2 < O2 < He}$`, correct: false, why: R`$\ce{N2}$ (28) is lighter than $\ce{O2}$ (32), so it is faster.` },
          { text: R`$\ce{CO2 < O2 < N2 < He}$`, correct: true, why: R`Speed $\propto 1/\sqrt{M}$: $\ce{CO2}$ (44) < $\ce{O2}$ (32) < $\ce{N2}$ (28) < He (4.0).` },
        ],
      },
      {
        n: 39, mapLabel: "27A", points: 1, type: "single", title: "Problem 27 · Part A", src: "27_",
        prompt: R`A real gas will behave most like an ideal gas under conditions of ________.`,
        options: [
          { text: "STP", correct: false, why: R`Fairly ideal for many gases, but not the best of the choices.` },
          { text: "low temperature and high pressure", correct: false, why: R`The worst case: molecules close together and slow, so attractions and size both matter.` },
          { text: "high temperature and low pressure", correct: true, why: R`Low $P$: molecules are far apart, so their own volume is negligible. High $T$: kinetic energy swamps attractions.` },
          { text: "high temperature and high pressure", correct: false, why: R`High pressure makes molecular volume matter.` },
          { text: "low temperature and low pressure", correct: false, why: R`Low temperature makes attractions matter.` },
        ],
      },
      {
        n: 40, mapLabel: "28A", points: 1, type: "single", title: "Problem 28 · Part A", src: "28_",
        prompt: R`The van der Waals equation for real gases recognizes that ________.`,
        options: [
          { text: "the molecular attractions between particles of gas decreases the pressure exerted by the gas", correct: false, why: R`True (the $-an^2/V^2$ term), but not the only true statement.` },
          { text: `the non-zero volumes of gas particles effectively decrease the amount of "empty space" between them`, correct: false, why: R`True (the $V - nb$ term), but not the only one.` },
          { text: "molar volumes of gases of different types are different", correct: false, why: R`True: each gas has its own $a$ and $b$, so its real molar volume differs.` },
          { text: "gas particles have non-zero volumes and interact with each other", correct: false, why: R`True, but so are the others.` },
          { text: "all of the above statements are true", correct: true, why: R`$\left(P + \dfrac{an^2}{V^2}\right)(V - nb) = nRT$ encodes every statement: attractions ($a$), finite size ($b$), and gas-specific constants.` },
        ],
      },
      // ================================================================ 29 — N2 cylinder, ideal vs vdW
      {
        n: 41, mapLabel: "29A", points: 1, type: "numeric", title: "Problem 29 · Part A", src: "29_, 29_a",
        prompt: P29, prompt2: part("A", "Calculate the pressure of the gas, assuming ideal-gas behavior. Express your answer in atmospheres to three significant figures."),
        answer: 129.607, rtol: S3, unit: "atm", answerText: R`130 ($1.30 \times 10^{2}$)`,
        why: P29n + R` $P = \dfrac{nRT}{V} = \dfrac{(3926.6)(0.08206)(563.15)}{1400.0} = 1.30 \times 10^{2}$ atm (129.6 before rounding).`,
      },
      {
        n: 42, mapLabel: "29B", points: 1, type: "numeric", title: "Problem 29 · Part B", src: "29_b",
        prompt: P29, prompt2: part("B", R`Given that for $\ce{N2}$, $a = 1.39\ \mathrm{L^2\,atm/mol^2}$ and $b = 0.0391\ \mathrm{L/mol}$, calculate the pressure of the gas according to the van der Waals equation. Express your answer in atmospheres to three significant figures.`),
        answer: 134.637, rtol: S3, unit: "atm", answerText: "135",
        why: P29n + R` $P = \dfrac{nRT}{V - nb} - \dfrac{an^2}{V^2}$. $nb = 153.5$ L, so $V - nb = 1246.5$ L and the first term is $181{,}450/1246.5 = 145.6$ atm. $an^2/V^2 = 1.39 \times (2.805)^2 = 10.9$ atm. $P = 145.6 - 10.9 = 135$ atm.`,
      },
      {
        n: 43, mapLabel: "29C", points: 1, type: "single", title: "Problem 29 · Part C", src: "29_c",
        prompt: P29, prompt2: part("C", "Under the conditions of this problem, which correction dominates, the one for finite volume of gas molecules or the one for attractive interactions?"),
        options: [
          { text: "correction for finite volume", correct: true, why: R`The $b$ term raises $P$ by $145.6 - 129.6 = +16.0$ atm; the $a$ term lowers it by 10.9 atm. Net $+5$ atm: the real pressure is above ideal, so finite volume wins at this high density and high $T$.` },
          { text: "correction for attractive interactions", correct: false, why: R`At 563 K the attraction term (10.9 atm) is smaller than the excluded-volume term (+16.0 atm). If attractions dominated, $P_\text{vdW}$ would be <em>below</em> 129.6 atm.` },
          { text: "neither of them", correct: false, why: R`The two corrections are 16.0 and 10.9 atm; they do not cancel.` },
        ],
      },
      // ================================================================ 30 — glucose
      {
        n: 44, mapLabel: "30A", points: 1, type: "numeric", title: "Problem 30 · Part A", src: "30_, 30_a",
        prompt: P30, prompt2: part("A", R`Calculate the volume of dry $\ce{CO2}$ produced at body temperature (37 °C) and 0.950 atm when 24.0 g of glucose is consumed in this reaction. Express your answer using three significant figures.`),
        answer: 21.413, rtol: S3, unit: "L", answerText: "21.4",
        why: R`$n(\text{glucose}) = 24.0/180.16 = 0.1332$ mol, so $n(\ce{CO2}) = 6 \times 0.1332 = 0.7993$ mol. $V = (0.7993)(0.08206)(310.15)/0.950 = 21.4$ L.`,
      },
      {
        n: 45, mapLabel: "30B", points: 1, type: "numeric", title: "Problem 30 · Part B", src: "30_b",
        prompt: P30, prompt2: part("B", R`Calculate the volume of oxygen you would need, at 1.00 atm and 298 K, to completely oxidize 51 g of glucose. Express your answer using three significant figures.`),
        answer: 41.534, rtol: S3, unit: "L", answerText: "41.5",
        why: R`$n(\text{glucose}) = 51/180.16 = 0.2831$ mol, so $n(\ce{O2}) = 6 \times 0.2831 = 1.699$ mol. $V = (1.699)(0.08206)(298)/1.00 = 41.5$ L.`,
      },
      // ================================================================ 31–33
      {
        n: 46, mapLabel: "31A", points: 1, type: "single", title: "Problem 31 · Part A", src: "31_",
        prompt: R`A helium balloon is filled to a volume of 26.8 L at 302 K. What will the volume of the balloon become if the balloon is heated to raise the temperature to 370 K?`,
        options: [
          { text: "0.0305", correct: false, why: R`That is $T_1/(V_1 T_2)$, not a volume.` },
          { text: "21.9", correct: false, why: R`That is $26.8 \times 302/370$, inverted: heating expands the balloon.` },
          { text: "2990000", correct: false, why: R`That multiplies everything together.` },
          { text: "0.0457", correct: false, why: R`That is $T_2/(V_1 T_1)$, not a volume.` },
          { text: "32.8", correct: true, why: R`Charles's law: $V_2 = 26.8 \times 370/302 = 32.8$ L.` },
        ],
      },
      {
        n: 47, mapLabel: "32A", points: 1, type: "single", title: "Problem 32 · Part A", src: "32_",
        prompt: R`If you increase the number of moles of an ideal gas by 5 times in a fixed volume while keeping the temperature constant, what happens to the pressure?`,
        options: [
          { text: "It is increased by a factor of 5.", correct: true, why: R`$P = nRT/V$ with $V$, $T$ fixed: $P \propto n$, so $5n$ gives $5P$.` },
          { text: "It is increased by a factor of 10.", correct: false, why: R`$P$ is linear in $n$.` },
          { text: "It is decreased by a factor of 10.", correct: false, why: R`More gas in the same box raises the pressure.` },
          { text: "It is decreased by a factor of 5.", correct: false, why: R`More gas raises the pressure.` },
          { text: "It remains the same.", correct: false, why: R`That would require $V$ to grow fivefold too.` },
        ],
      },
      {
        n: 48, mapLabel: "33A", points: 1, type: "single", title: "Problem 33 · Part A", src: "33_",
        prompt: R`How many liters of $\ce{CO2}$ gas can be produced at 30.0 °C and 1.50 atm from the reaction of 5.00 mol of $\ce{C3H8}$ and an excess of $\ce{O2}$ according to the following equation? <span class="eq">$\ce{C3H8(g) + 5O2(g) -> 3CO2(g) + 4H2O(g)}$</span>`,
        options: [
          { text: "82.9 L", correct: false, why: R`That is the volume of 5.00 mol, without the 3 : 1 ratio.` },
          { text: "27.6 L", correct: false, why: R`Divides by 3 instead of multiplying.` },
          { text: "249 L", correct: true, why: R`$n(\ce{CO2}) = 3 \times 5.00 = 15.0$ mol. $V = (15.0)(0.08206)(303.15)/1.50 = 249$ L.` },
          { text: "24.6 L", correct: false, why: R`Uses 30.0 (°C) instead of 303.15 K.` },
        ],
      },
      {
        n: 49, mapLabel: "33′A", points: 1, title: "Problem 33′ · Part A", src: "33_a", pending: true,
        prompt: P34, prompt2: part("A", R`Calculate the gas pressure inside the tank at 8 °C. Express your answer using two significant figures.`),
        pendingNote: R`Needs the mass of O<sub>2</sub> and the tank volume from the stem. Method: $n = m/32.00$, then $P = nRT/V$ with $T = 281.15$ K.`,
      },
      {
        n: 50, mapLabel: "33′B", points: 1, title: "Problem 33′ · Part B", src: "33_b", pending: true,
        prompt: P34, prompt2: part("B", R`What volume would this oxygen occupy at 25 °C and 0.93 atm? Express your answer using two significant figures.`),
        pendingNote: R`Needs the stem. Method: $V = nRT/P$ with $T = 298.15$ K and $P = 0.93$ atm (same $n$ as Part A), or $V_2 = V_1 \dfrac{P_1 T_2}{P_2 T_1}$.`,
      },
      // ================================================================ 35–36
      {
        n: 51, mapLabel: "35A", points: 1, type: "single", title: "Problem 35 · Part A", src: "35_",
        prompt: R`Two deviations of real gases from ideal gases which are treated in the van der Waals equation are finite molecular volume and non-zero molecular attractions.`,
        options: [
          { text: "True", correct: true, why: R`$b$ corrects for finite molecular volume and $a$ for intermolecular attractions.` },
          { text: "False", correct: false, why: R`Those are exactly the two vdW corrections.` },
        ],
      },
      {
        n: 52, mapLabel: "36A", points: 1, type: "single", title: "Problem 36 · Part A", src: "36_",
        prompt: R`Which one of the following gases would deviate the <u>least</u> from ideal gas behavior?`,
        options: [
          { text: R`$\ce{F2}$`, correct: false, why: R`Diatomic and more polarizable than Ne.` },
          { text: R`$\ce{CO2}$`, correct: false, why: R`Larger, with stronger dispersion forces ($a = 3.59$).` },
          { text: "Kr", correct: false, why: R`Monatomic, but large and polarizable ($a = 2.32$).` },
          { text: "Ne", correct: true, why: R`Small, monatomic, nonpolar, weakly polarizable: the smallest $a$ (0.21) and $b$ of the list, so the closest to ideal.` },
          { text: R`$\ce{CH3Cl}$`, correct: false, why: R`Polar (dipole–dipole attractions), so the largest deviation.` },
        ],
      },
    ],
  };
})();
