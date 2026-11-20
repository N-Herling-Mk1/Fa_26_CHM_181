/* Quiz 4 — Chapter 10: Gases.
 * Every question posed in the Ch. 10 lecture deck (181.10_Ch_10_2025.pptx): the YOUR TURN
 * slides, every "Example from homework / past exam" screenshot (21 hidden slides included),
 * the worked examples (asked as questions), and the follow-ups posed on slides 27 and 42.
 * Multi-part homework items are split one part per question. The CO2-density homework item
 * appears twice in the deck (slides 29 and 35) and is asked once here.
 * Field reference: quizzes/quiz02-ch08-chemical-bonding/data.js.
 */
(function () {
  const R = String.raw;
  const PV = R`$PV = nRT$, $R = 0.08206\ \mathrm{L\,atm\,mol^{-1}\,K^{-1}}$`;
  const S3 = 0.006, S2 = 0.02;

  const AIR = R`<em>Questions 10–13 of the exam:</em> assume that air consists of (approximately) 80% $\ce{N2}$ and 20% $\ce{O2}$ by mole. Disregard all other components (water vapor, $\ce{CO2}$, etc.).`;
  const BULBS = R`<em>Questions 15–18 of the exam:</em> consider the apparatus shown. The container on the left is 22.4 L in volume and contains 1.0 atm of $\ce{N2}$ at 273 K. The container on the right is 33.6 L and contains 2.0 atm of $\ce{O2}$, also at 273 K. The valve between the two containers is opened and the gases are allowed to mix.`;
  const BULBfig = { img: "img/s44_apparatus.png", alt: "N2 bulb 22.4 L, 1.0 atm, 273 K joined by a valve to an O2 bulb 33.6 L, 2.0 atm, 273 K" };
  const BULBmol = R`At 273 K and 1 atm, 22.4 L is 1 mol. Left: 22.4 L at 1.0 atm = 1.0 mol $\ce{N2}$. Right: 33.6 L at 2.0 atm = $1.5 \times 2 = 3.0$ mol $\ce{O2}$.`;
  const FLASK = R`Ammonia and hydrogen chloride react to form solid ammonium chloride: $\ce{NH3(g) + HCl(g) -> NH4Cl(s)}$. Two 2.50 L flasks at 30.0 °C are connected by a stopcock, as shown. One flask contains 5.80 g $\ce{NH3(g)}$, and the other contains 4.80 g $\ce{HCl(g)}$. When the stopcock is opened, the gases react until one is completely consumed.`;
  const FLASKfig = { img: "img/s46_flasks.png", alt: "Two flasks, NH3(g) and HCl(g), joined by a stopcock" };
  const FLASKmol = R`$n(\ce{NH3}) = 5.80/17.03 = 0.341$ mol; $n(\ce{HCl}) = 4.80/36.46 = 0.132$ mol. The reaction is 1 : 1, so HCl is limiting and $0.341 - 0.132 = 0.209$ mol $\ce{NH3}$ remains.`;
  const N2CYL = R`Large amounts of nitrogen gas are used in the manufacture of ammonia, principally for use in fertilizers. Suppose 120.00 kg of $\ce{N2(g)}$ is stored in a 1400.0 L metal cylinder at 290 °C.`;
  const N2n = R`$n = 120{,}000/28.014 = 4283.6$ mol, $T = 563.15$ K.`;
  const TANK = R`A 2500 mL gas tank is filled with nitrogen ($\ce{N2}$) to a 5.0 atm pressure at 27 °C.`;
  const HEAR = R`Consider two gas samples, He (4 g/mol) and Ar (40 g/mol), at the same temperature and pressure, with the number of He atoms equal to the number of Ar atoms.`;
  const ELE = R`<em>Questions 1 and 2 of the exam:</em> consider a 5,000 kg circus elephant named Steve. Steve is balancing on one leg, as shown in the figure.`;
  const ELEfig = { img: "img/s07_elephant.png", alt: "Cartoon elephant balancing on one leg on a small platform" };
  const PISTON = { img: "img/s24_piston.png", alt: "Gas particles in a cylinder with a movable piston" };
  const MBgases = { img: "img/s54_mb_gases.png", alt: "Speed distributions: curve A peaks near 260 m/s and is tall and narrow; curve B peaks near 450 m/s and is broad" };

  window.QUIZ = {
    id: "chem181-quiz04-ch10-gases",
    course: "CHEM 181",
    title: "Quiz 4 — Ch. 10: Gases",
    scoring: "Every question is worth 1 point. Single-choice and numeric questions are all or nothing; the select-all question scores right-minus-wrong per option. Typed numeric answers accept the value within its significant figures (scientific notation: 3.8e-4 or 3.8x10^-4). An unanswered question scores 0.",
    toolsNote: R`Tools: ${PV}. STP = 273 K and 1 atm, where 1 mol of any ideal gas occupies 22.4 L. $1\ \text{atm} = 760\ \text{torr} = 101.325$ kPa. $u_\text{rms} = \sqrt{3RT/\mathcal{M}}$ with $R = 8.314$ J/(mol·K) and $\mathcal{M}$ in kg/mol. Tags show the source slide; "hidden" means hidden in the slideshow.`,
    questions: [
      // ===================================================== Pressure (1–4)
      {
        n: 1, points: 1, type: "single", src: "Slide 7 · past exam Q1",
        prompt: ELE, figure: ELEfig, prompt2: "What is the elephant's weight?",
        options: [
          { text: "5000 kg", correct: false, why: R`That is the mass. Weight is a force, measured in newtons.` },
          { text: "50,000 lbs", correct: false, why: R`5000 kg is about 11,000 lb, and pounds are not the SI force unit this question uses.` },
          { text: "5000 N", correct: false, why: R`Forgets $g$: $w = mg$, not $m$.` },
          { text: "50,000 N", correct: true, why: R`$w = mg = 5000\ \text{kg} \times 10\ \text{m/s}^2 = 50{,}000$ N.` },
        ],
      },
      {
        n: 2, points: 1, type: "single", src: "Slide 7 · past exam Q2",
        prompt: ELE, figure: ELEfig, prompt2: R`The approximate area of the bottom of the elephant's foot is 0.2 m². What is the approximate pressure experienced by the ground underneath the foot Steve the elephant is balancing on?`,
        options: [
          { text: R`$2.5 \times 10^{5}$ Pa`, correct: true, why: R`$P = F/A = 5 \times 10^{4}\ \text{N} / 0.2\ \text{m}^2 = 2.5 \times 10^{5}$ Pa, about 2.5 atm.` },
          { text: R`$2.5 \times 10^{6}$ Pa`, correct: false, why: R`Ten times too large.` },
          { text: R`$2.5 \times 10^{7}$ Pa`, correct: false, why: R`100 times too large.` },
          { text: R`$2.5 \times 10^{8}$ Pa`, correct: false, why: R`1000 times too large.` },
        ],
      },
      {
        n: 3, points: 1, type: "single", src: "Slide 9 · homework",
        prompt: R`What would be the height of the column in a barometer if the external pressure was 101 kPa and water ($d = 1.00\ \text{g/cm}^3$) was used in place of mercury (height of the column = 0.760 m)?`,
        figure: { img: "img/s09_barometer.png", alt: "Mercury barometer: vacuum above a column of height h, atmosphere pressing on the dish" },
        options: [
          { text: "0.0558 m", correct: false, why: R`That is $0.760/13.6$: the ratio applied the wrong way. A less dense liquid needs a <em>taller</em> column.` },
          { text: "0.103 m", correct: false, why: R`Off by a factor of 100 (density left in g/cm³ against Pa).` },
          { text: "0.760 m", correct: false, why: R`That is the mercury column. Water is 13.6 times less dense.` },
          { text: "10.3 m", correct: true, why: R`$P = dgh$, so $h = \dfrac{P}{dg} = \dfrac{1.01 \times 10^{5}\ \text{Pa}}{(1000\ \text{kg/m}^3)(9.81\ \text{m/s}^2)} = 10.3$ m. Equivalently $0.760 \times 13.6 = 10.3$ m.` },
          { text: R`$1.03 \times 10^{4}$ m`, correct: false, why: R`Density left in g/cm³ (1.00) instead of 1000 kg/m³.` },
        ],
      },
      // ===================================================== Gas laws (4–9)
      {
        n: 4, points: 1, type: "single", src: "Slide 13 · YOUR TURN · hidden",
        prompt: R`What happens to the pressure of a gas in a closed container if you double its volume while its temperature is held constant?`,
        options: [
          { text: "The pressure increases by 100%", correct: false, why: R`Pressure falls on expansion.` },
          { text: "The pressure increases by 200%", correct: false, why: R`Pressure falls on expansion.` },
          { text: "The pressure decreases by 50%", correct: true, why: R`Boyle: $P_2 = P_1 V_1/V_2 = P_1/2$, a 50% decrease.` },
          { text: "The pressure decreases by 25%", correct: false, why: R`That would be $V_2 = \tfrac43 V_1$.` },
        ],
      },
      {
        n: 5, points: 1, type: "single", src: "Slide 15 · YOUR TURN",
        prompt: R`The temperature of a gas is lowered from 100 °C to 50 °C (at constant pressure). Does the volume decrease to half its initial value?`,
        options: [
          { text: "Yes: the temperature halves, so the volume halves.", correct: false, why: R`Charles's law uses <em>absolute</em> temperature. Halving the Celsius number does not halve $T$.` },
          { text: "No: 100 °C → 50 °C is 373 K → 323 K, so the volume drops only to 323/373 = 87% of its initial value.", correct: true, why: R`$V_2/V_1 = T_2/T_1 = 323/373 = 0.866$, a 13% decrease, not 50%.` },
          { text: "No: at constant pressure the volume does not depend on temperature.", correct: false, why: R`At constant $P$ and $n$, $V \propto T$ (Charles).` },
        ],
      },
      {
        n: 6, points: 1, type: "single", src: "Slide 19 · past exam Q3",
        prompt: R`What is the volume occupied by 3 moles of helium at standard pressure and temperature?`,
        options: [
          { text: R`3 m³`, correct: false, why: R`Not a molar-volume result.` },
          { text: "22.4 L", correct: false, why: R`That is one mole.` },
          { text: "67.2 L", correct: true, why: R`$3 \times 22.4\ \text{L} = 67.2$ L.` },
          { text: R`67.2 m³`, correct: false, why: R`Right number, wrong unit: 67.2 L = 0.0672 m³.` },
        ],
      },
      {
        n: 7, points: 1, type: "single", src: "Slide 19 · past exam Q4",
        prompt: R`What is the volume occupied by 0.500 moles of air at 0 °C and 760 torr?`,
        options: [
          { text: R`0.0112 m³`, correct: true, why: R`0 °C and 760 torr is STP. $0.500 \times 22.4 = 11.2\ \text{L} = 0.0112\ \text{m}^3$ (1 m³ = 1000 L).` },
          { text: R`0.0224 m³`, correct: false, why: R`That is one mole.` },
          { text: R`11.2 m³`, correct: false, why: R`11.2 is right in <em>liters</em>, not m³.` },
          { text: R`22.4 m³`, correct: false, why: R`Wrong amount and wrong unit.` },
        ],
      },
      {
        n: 8, points: 1, type: "single", src: "Slide 20 · past exam Q5 · hidden",
        prompt: R`What is the pressure exerted by 42 grams of nitrogen gas ($\ce{N2}$) at 0 °C in a closed 22.4 L container?`,
        options: [
          { text: "1.0 atm", correct: false, why: R`That would be 1 mol (28 g).` },
          { text: "1.5 atm", correct: true, why: R`$42/28 = 1.5$ mol. At 0 °C, 1 mol in 22.4 L is 1 atm, so 1.5 mol is 1.5 atm.` },
          { text: "3.0 atm", correct: false, why: R`Treats $\ce{N2}$ as 14 g/mol (atomic N).` },
          { text: "3.0 bar", correct: false, why: R`Same error, plus 1 bar ≈ 1 atm only approximately.` },
        ],
      },
      {
        n: 9, points: 1, type: "single", src: "Slide 20 · past exam Q6 · hidden",
        prompt: R`An 11.2 L gas cylinder is used to store $\ce{H2(g)}$ at a pressure of 5.0 atm and a temperature of 0 °C. What is the mass of hydrogen stored in the cylinder?`,
        options: [
          { text: "2.5 g", correct: false, why: R`That is the number of moles, not grams.` },
          { text: "5.0 g", correct: true, why: R`11.2 L at 0 °C, 1 atm is ½ mol; at 5.0 atm it holds $5 \times ½ = 2.5$ mol. $2.5 \times 2.0\ \text{g/mol} = 5.0$ g.` },
          { text: "2.5 kg", correct: false, why: R`Factor-of-1000 error.` },
          { text: "10 kg", correct: false, why: R`Far too large.` },
        ],
      },
      {
        n: 10, points: 1, type: "single", src: "Slide 21 · YOUR TURN · hidden",
        prompt: R`Assume that the volume of a classroom is 672 m³ (roughly 8.8 meters on a side, cubed). Approximately, how many moles of air does the room contain?`,
        options: [
          { text: "3 mol", correct: false, why: R`Off by 10,000.` },
          { text: "300 mol", correct: false, why: R`Off by 100.` },
          { text: "30,000 mol", correct: true, why: R`$672\ \text{m}^3 = 672{,}000$ L. $672{,}000/22.4 = 30{,}000$ mol (STP approximation).` },
          { text: "3,000,000 mol", correct: false, why: R`Off by 100.` },
        ],
      },
      // ===================================================== Ideal gas law (11–23)
      {
        n: 11, points: 1, type: "single", src: "Slide 24 · past exam Q7",
        prompt: R`What will happen to the pressure of an ideal gas if it is allowed to expand to twice its initial volume, while the temperature is kept constant?`,
        options: [
          { text: "Pressure will not change", correct: false, why: R`$P \propto 1/V$ at fixed $n$, $T$.` },
          { text: "New pressure will be one half of the initial pressure", correct: true, why: R`Boyle: $P_2 = P_1 V_1 / (2V_1) = P_1/2$.` },
          { text: "Pressure will increase by 1 atm", correct: false, why: R`Gas laws are proportional, not additive.` },
          { text: "Pressure will double", correct: false, why: R`That would be compression to half the volume.` },
        ],
      },
      {
        n: 12, points: 1, type: "single", src: "Slide 24 · past exam Q8",
        prompt: R`An experiment starts with an ideal-gas sample in a sealed container with a movable piston at initial volume $V_0$, initial temperature 200 K and initial pressure 1 atm. In the experiment, the temperature is increased to 400 K, while the pressure is increased to 2 atm. What will the final volume be equal to?`,
        figure: PISTON,
        options: [
          { text: R`$\tfrac12 V_0$`, correct: false, why: R`Accounts for the pressure only.` },
          { text: R`$V_0$`, correct: true, why: R`$V \propto T/P$: $V = V_0 \times \dfrac{400}{200} \times \dfrac{1}{2} = V_0$. The two changes cancel.` },
          { text: R`$2V_0$`, correct: false, why: R`Accounts for the temperature only.` },
          { text: R`$4V_0$`, correct: false, why: R`Multiplies by the pressure ratio instead of dividing.` },
        ],
      },
      {
        n: 13, points: 1, type: "single", src: "Slide 24 · past exam Q9",
        prompt: R`(Same piston as the previous question.) What if temperature is increased by a factor of 2, while pressure is increased by a factor of 4?`,
        options: [
          { text: R`$\tfrac12 V_0$`, correct: true, why: R`$V = V_0 \times 2 / 4 = V_0/2$.` },
          { text: R`$V_0$`, correct: false, why: R`The factors no longer cancel.` },
          { text: R`$2V_0$`, correct: false, why: R`Inverts the ratio.` },
          { text: R`$4V_0$`, correct: false, why: R`Multiplies instead of divides by the pressure factor.` },
        ],
      },
      {
        n: 14, points: 1, type: "single", src: "Slide 25 · homework · hidden",
        prompt: R`A sample of gas (24.2 g) initially at 1.00 atm was compressed from 8.00 L to 2.00 L at constant temperature. After the compression, the gas pressure was ________ atm.`,
        options: [
          { text: "2.00", correct: false, why: R`That is the final volume.` },
          { text: "16.0", correct: false, why: R`Not $P_1V_1/V_2$.` },
          { text: "8.00", correct: false, why: R`That is the initial volume.` },
          { text: "4.00", correct: true, why: R`Boyle: $P_2 = (1.00)(8.00)/(2.00) = 4.00$ atm. The mass is not needed.` },
          { text: "1.00", correct: false, why: R`Pressure must rise on compression.` },
        ],
      },
      {
        n: 15, points: 1, type: "single", src: "Slide 25 · homework · hidden",
        prompt: R`A sample of a gas (5.0 mol) at 1.0 atm is expanded at constant temperature from 10 L to 15 L. The final pressure is ________ atm.`,
        options: [
          { text: "3.3", correct: false, why: R`Not $P_1V_1/V_2$.` },
          { text: "15", correct: false, why: R`That is the final volume.` },
          { text: "0.67", correct: true, why: R`$P_2 = (1.0)(10)/(15) = 0.67$ atm.` },
          { text: "1.5", correct: false, why: R`That is $V_2/V_1$; pressure falls on expansion.` },
          { text: "7.5", correct: false, why: R`Multiplies by the moles; $n$ cancels.` },
        ],
      },
      {
        n: 16, points: 1, type: "single", src: "Slide 26 · homework",
        prompt: R`A sample of a gas (1.50 mol) is contained in a 15.0 L cylinder. The temperature is increased from 100 °C to 150 °C. The ratio of final pressure to initial pressure $\left[\dfrac{P_2}{P_1}\right]$ is ________.`,
        options: [
          { text: "1.00", correct: false, why: R`Pressure rises with $T$ at fixed $V$.` },
          { text: "1.50", correct: false, why: R`150/100 in °C. Use kelvin.` },
          { text: "0.667", correct: false, why: R`100/150 in °C: inverted and in the wrong units.` },
          { text: "1.13", correct: true, why: R`$P_2/P_1 = T_2/T_1 = 423/373 = 1.13$.` },
          { text: "0.882", correct: false, why: R`$T_1/T_2$, inverted.` },
        ],
      },
      {
        n: 17, points: 1, type: "single", src: "Slide 27 · example",
        prompt: R`1.8 L of nitrogen react with hydrogen according to the reaction $\ce{N2 + 3H2 -> 2NH3}$. How many liters of hydrogen are needed for this reaction (same $T$ and $P$)?`,
        options: [
          { text: "0.60 L", correct: false, why: R`Divides by 3 instead of multiplying.` },
          { text: "1.0 L", correct: false, why: R`Not a ratio from the equation.` },
          { text: "1.8 L", correct: false, why: R`Treats the ratio as 1 : 1.` },
          { text: "3.6 L", correct: false, why: R`That is the ammonia volume (2 : 1).` },
          { text: "5.4 L", correct: true, why: R`At fixed $T$, $P$, volume ∝ moles: $3 \times 1.8 = 5.4$ L $\ce{H2}$.` },
        ],
      },
      {
        n: 18, points: 1, type: "numeric", src: "Slide 27 · follow-up",
        prompt: R`Follow-up: 1.8 L of $\ce{N2}$ reacts completely with hydrogen ($\ce{N2 + 3H2 -> 2NH3}$). How many liters of ammonia will be produced at the same temperature and pressure?`,
        answer: 3.6, rtol: S2, unit: "L", answerText: "3.6",
        why: R`$2 \times 1.8 = 3.6$ L $\ce{NH3}$. Gas volumes combine in the ratio of the coefficients.`,
      },
      {
        n: 19, points: 1, type: "single", src: "Slide 28 · homework",
        prompt: R`If 50.75 g of a gas occupies 10.0 L at STP, 129.3 g of the gas will occupy ________ L at STP.`,
        options: [
          { text: "50.8", correct: false, why: R`That is the first mass.` },
          { text: "12.9", correct: false, why: R`The second mass divided by 10.` },
          { text: "5.08", correct: false, why: R`Not a volume ratio.` },
          { text: "25.5", correct: true, why: R`$V \propto m$ at fixed $T$, $P$: $10.0 \times 129.3/50.75 = 25.5$ L.` },
          { text: "3.92", correct: false, why: R`The ratio inverted.` },
        ],
      },
      {
        n: 20, points: 1, type: "single", src: "Slides 29, 35 · homework (29 hidden)",
        prompt: R`The volume of a sample of gas (2.49 g) was 752 mL at 1.98 atm and 62 °C. The gas is ________.`,
        options: [
          { text: "Ne", correct: false, why: R`20.2 g/mol.` },
          { text: R`$\ce{NO2}$`, correct: true, why: R`$\mathcal{M} = \dfrac{mRT}{PV} = \dfrac{(2.49)(0.08206)(335)}{(1.98)(0.752)} = 46.0$ g/mol: $\ce{NO2}$.` },
          { text: R`$\ce{SO3}$`, correct: false, why: R`80.1 g/mol.` },
          { text: R`$\ce{SO2}$`, correct: false, why: R`64.1 g/mol.` },
          { text: R`$\ce{NH3}$`, correct: false, why: R`17.0 g/mol.` },
        ],
      },
      {
        n: 21, points: 1, type: "single", src: "Slide 30 · homework",
        prompt: R`Imagine that the reaction $\ce{2CO(g) + O2(g) -> 2CO2(g)}$ occurs in a container that has a piston that moves to maintain a constant pressure when the reaction occurs at constant temperature. Which of the following statements describes how the volume of the container changes due to the reaction?`,
        options: [
          { text: "The volume increases by 50%.", correct: false, why: R`That would be 2 → 3 mol of gas.` },
          { text: "The volume increases by 33%.", correct: false, why: R`Gas moles decrease.` },
          { text: "The volume remains constant.", correct: false, why: R`$V \propto n$ at fixed $T$, $P$.` },
          { text: "The volume decreases by 33%.", correct: true, why: R`3 mol gas → 2 mol gas, so $V_2/V_1 = 2/3$: a 33% decrease.` },
          { text: "The volume decreases by 50%.", correct: false, why: R`That would be 2 → 1 mol.` },
        ],
      },
      {
        n: 22, points: 1, type: "single", src: "Slide 31 · homework",
        prompt: R`The reaction of 50 mL of $\ce{Cl2}$ gas with 50 mL of $\ce{C2H4}$ gas via the equation $\ce{Cl2(g) + C2H4(g) -> C2H4Cl2(g)}$ will produce a total of ________ mL of products if pressure and temperature are kept constant.`,
        options: [
          { text: "150", correct: false, why: R`More than the reactants.` },
          { text: "25", correct: false, why: R`That would be a 2 : 1 ratio.` },
          { text: "125", correct: false, why: R`No such ratio.` },
          { text: "50", correct: true, why: R`1 : 1 : 1 by volume: 50 mL + 50 mL → 50 mL of product.` },
          { text: "100", correct: false, why: R`Adds the reactant volumes; two molecules become one.` },
        ],
      },
      {
        n: 23, points: 1, type: "numeric", src: "Slide 32 · homework · hidden",
        prompt: R`Nitrogen and hydrogen gases react to form ammonia gas via $\ce{N2(g) + 3H2(g) -> 2NH3(g)}$. At a certain temperature and pressure, 1.5 L of $\ce{N2}$ reacts with 4.5 L of $\ce{H2}$. If all the $\ce{N2}$ and $\ce{H2}$ are consumed, what volume of $\ce{NH3}$, at the same temperature and pressure, will be produced? Express your answer using two significant figures.`,
        answer: 3.0, rtol: S2, unit: "L", answerText: "3.0",
        why: R`1.5 : 4.5 is exactly 1 : 3, so both are consumed. $V(\ce{NH3}) = 2 \times 1.5 = 3.0$ L.`,
      },
      {
        n: 24, points: 1, type: "numeric", src: "Slide 34 · example",
        prompt: R`How many grams of $\ce{CO2}$ are there in 10.0 L of the gas at 0 °C and 1.00 atm pressure?`,
        answer: 19.635, rtol: S3, unit: "g", answerText: "19.6",
        why: R`This is STP: $n = 10.0/22.4 = 0.446$ mol (or $PV/RT$). Mass $= 0.446 \times 44.0 = 19.6$ g.`,
      },
      {
        n: 25, points: 1, type: "single", src: "Slide 37 · YOUR TURN",
        prompt: R`Under the same temperature and pressure, which gas has the highest density?`,
        options: [
          { text: "water vapor", correct: false, why: R`18 g/mol, the lightest listed.` },
          { text: R`$\ce{O2}$`, correct: false, why: R`32 g/mol.` },
          { text: R`$\ce{N2}$`, correct: false, why: R`28 g/mol.` },
          { text: R`$\ce{CO2}$`, correct: true, why: R`$d = \dfrac{P\mathcal{M}}{RT}$: at fixed $T$, $P$, density is proportional to molar mass. $\ce{CO2}$ (44 g/mol) is heaviest.` },
          { text: "air", correct: false, why: R`About 29 g/mol.` },
        ],
      },
      // ===================================================== Dalton (26–37)
      {
        n: 26, points: 1, type: "single", src: "Slide 39 · YOUR TURN · hidden",
        prompt: R`How does the partial pressure exerted by $\ce{N2}$ gas change when some $\ce{O2}$ is added to the same container? The temperature and volume are kept constant.`,
        options: [
          { text: R`The partial pressure of $\ce{N2}$ increases when $\ce{O2}$ is added`, correct: false, why: R`Nothing about the $\ce{N2}$ changed.` },
          { text: R`The partial pressure of $\ce{N2}$ decreases when $\ce{O2}$ is added`, correct: false, why: R`Its <em>mole fraction</em> drops, but the total pressure rises by the same factor.` },
          { text: R`The partial pressure of $\ce{N2}$ does not change when $\ce{O2}$ is added`, correct: true, why: R`$P_{\ce{N2}} = n_{\ce{N2}}RT/V$; $n$, $T$ and $V$ for $\ce{N2}$ are unchanged. Ideal gases do not notice each other.` },
        ],
      },
      {
        n: 27, points: 1, type: "single", src: "Slide 40 · YOUR TURN · hidden",
        prompt: R`The same experiment: some $\ce{O2}$ is added to the container with $\ce{N2}$ gas in it, while the temperature and volume are kept constant. What happens to the total pressure?`,
        options: [
          { text: "The total pressure increases when O₂ is added", correct: true, why: R`Dalton: $P_\text{tot} = P_{\ce{N2}} + P_{\ce{O2}}$, and $P_{\ce{O2}}$ went from 0 to something positive.` },
          { text: "The total pressure decreases when O₂ is added", correct: false, why: R`Adding gas at fixed $V$, $T$ cannot lower the pressure.` },
          { text: "The total pressure does not change when O₂ is added", correct: false, why: R`Only the $\ce{N2}$ partial pressure stays the same.` },
        ],
      },
      {
        n: 28, points: 1, type: "single", src: "Slide 42 · homework",
        prompt: R`10.0 grams of argon and 20.0 grams of neon are placed in a 1175.0 mL container at 25.5 °C. The partial pressure of neon is ________ atm.`,
        options: [
          { text: "20.7", correct: true, why: R`$n_\text{Ne} = 20.0/20.18 = 0.991$ mol. $P = (0.991)(0.08206)(298.65)/1.175 = 20.7$ atm.` },
          { text: "24.8", correct: false, why: R`Not $n_\text{Ne}RT/V$.` },
          { text: "50.8", correct: false, why: R`Too large.` },
          { text: "1.77", correct: false, why: R`Off by about a factor of 12.` },
          { text: "5.21", correct: false, why: R`Close to the argon partial pressure (5.22 atm).` },
        ],
      },
      {
        n: 29, points: 1, type: "numeric", src: "Slide 42 · follow-up",
        prompt: R`Follow-up (same container: 10.0 g Ar and 20.0 g Ne in 1175.0 mL at 25.5 °C): what is the partial pressure of Ar?`,
        answer: 5.2209, rtol: S3, unit: "atm", answerText: "5.22",
        why: R`$n_\text{Ar} = 10.0/39.95 = 0.250$ mol. $P_\text{Ar} = (0.250)(0.08206)(298.65)/1.175 = 5.22$ atm.`,
      },
      {
        n: 30, points: 1, type: "numeric", src: "Slide 42 · follow-up",
        prompt: R`Follow-up: what is the total pressure in that container?`,
        answer: 25.891, rtol: S3, unit: "atm", answerText: "25.9",
        why: R`Dalton: $P = 20.7 + 5.22 = 25.9$ atm.`,
      },
      {
        n: 31, points: 1, type: "single", src: "Slide 43 · past exam Q10",
        prompt: AIR, prompt2: "Under the STP conditions, what is the partial pressure of oxygen in the atmosphere?",
        options: [
          { text: "0 atm", correct: false, why: R`There is oxygen in air.` },
          { text: "0.2 atm", correct: true, why: R`$P_{\ce{O2}} = \chi_{\ce{O2}} P_\text{tot} = 0.2 \times 1\ \text{atm}$.` },
          { text: "0.8 atm", correct: false, why: R`That is nitrogen's partial pressure.` },
          { text: "1 atm", correct: false, why: R`That is the total.` },
        ],
      },
      {
        n: 32, points: 1, type: "single", src: "Slide 43 · past exam Q11",
        prompt: AIR, prompt2: R`Under the STP conditions, what is the mass of $\ce{O2}$ in 22.4 L of air?`,
        options: [
          { text: "6.4 g", correct: true, why: R`22.4 L at STP is 1 mol of air, of which 0.2 mol is $\ce{O2}$: $0.2 \times 32 = 6.4$ g.` },
          { text: "16 g", correct: false, why: R`Uses atomic O (16 g/mol) for a whole mole.` },
          { text: "25.6 g", correct: false, why: R`That is 0.8 mol × 32: the $\ce{N2}$ fraction with the $\ce{O2}$ mass.` },
          { text: "32 g", correct: false, why: R`That is a full mole of $\ce{O2}$.` },
        ],
      },
      {
        n: 33, points: 1, type: "single", src: "Slide 43 · past exam Q12",
        prompt: AIR, prompt2: R`Under the STP conditions, what is the mass of $\ce{N2}$ in 22.4 L of air?`,
        options: [
          { text: "5.6 g", correct: false, why: R`That is 0.2 mol × 28: the $\ce{O2}$ fraction.` },
          { text: "14 g", correct: false, why: R`Uses atomic N.` },
          { text: "22.4 g", correct: true, why: R`$0.8\ \text{mol} \times 28\ \text{g/mol} = 22.4$ g. (The match with 22.4 L is a coincidence.)` },
          { text: "28 g", correct: false, why: R`That is a full mole of $\ce{N2}$.` },
        ],
      },
      {
        n: 34, points: 1, type: "single", src: "Slide 43 · past exam Q13",
        prompt: AIR, prompt2: "What is the approximate mass of 1 mole of air, i.e. its molar mass?",
        options: [
          { text: "28 g/mol", correct: false, why: R`That is pure $\ce{N2}$.` },
          { text: "29 g/mol", correct: true, why: R`$6.4 + 22.4 = 28.8 \approx 29$ g/mol.` },
          { text: "30 g/mol", correct: false, why: R`Rounds 28.8 the wrong way.` },
          { text: "32 g/mol", correct: false, why: R`That is pure $\ce{O2}$.` },
        ],
      },
      {
        n: 35, points: 1, type: "single", src: "Slide 44 · past exam Q15",
        prompt: BULBS, figure: BULBfig, prompt2: R`What is the mole fraction of $\ce{N2}$ in the resulting mixture?`,
        options: [
          { text: "0.25", correct: true, why: BULBmol + R` $\chi_{\ce{N2}} = 1.0/(1.0 + 3.0) = 0.25$.` },
          { text: "0.40", correct: false, why: R`That is the $\ce{N2}$ volume fraction, 22.4/56.0, not its mole fraction.` },
          { text: "0.60", correct: false, why: R`That is the $\ce{O2}$ volume fraction.` },
          { text: "0.75", correct: false, why: R`That is $\chi_{\ce{O2}}$.` },
        ],
      },
      {
        n: 36, points: 1, type: "single", src: "Slide 44 · past exam Q16",
        prompt: BULBS, figure: BULBfig, prompt2: R`What is the partial pressure of $\ce{N2}$ in the resulting mixture?`,
        options: [
          { text: "0.25 atm", correct: false, why: R`That is the mole fraction, not the pressure.` },
          { text: "0.40 atm", correct: true, why: R`$\ce{N2}$ expands from 22.4 L to 56.0 L, a factor of 2.5: $1.0/2.5 = 0.40$ atm.` },
          { text: "0.60 atm", correct: false, why: R`Uses the $\ce{O2}$ volume fraction.` },
          { text: "1.0 atm", correct: false, why: R`The $\ce{N2}$ now fills both bulbs, so its pressure falls.` },
        ],
      },
      {
        n: 37, points: 1, type: "single", src: "Slide 45 · past exam Q17",
        prompt: BULBS, figure: BULBfig, prompt2: R`What is the partial pressure of $\ce{O2}$ in the resulting mixture?`,
        options: [
          { text: "0.40 atm", correct: false, why: R`That is $\ce{N2}$.` },
          { text: "0.60 atm", correct: false, why: R`Not $P_1V_1/V_2$ for $\ce{O2}$.` },
          { text: "1.2 atm", correct: true, why: R`$P_{\ce{O2}} = 2.0 \times 33.6/56.0 = 1.2$ atm.` },
          { text: "2.0 atm", correct: false, why: R`The $\ce{O2}$ expands into the extra 22.4 L.` },
        ],
      },
      {
        n: 38, points: 1, type: "single", src: "Slide 45 · past exam Q18",
        prompt: BULBS, figure: BULBfig, prompt2: "What is the total pressure of the resulting mixture?",
        options: [
          { text: "1.0 atm", correct: false, why: R`Too low.` },
          { text: "1.6 atm", correct: true, why: R`$0.40 + 1.2 = 1.6$ atm. Check: 4.0 mol in 56.0 L at 273 K is $4.0/2.5 = 1.6$ atm.` },
          { text: "2.0 atm", correct: false, why: R`That is the initial $\ce{O2}$ pressure.` },
          { text: "3.0 atm", correct: false, why: R`Adds the initial pressures; pressures add only in the same volume.` },
        ],
      },
      // ===================================================== NH3 + HCl (39–41)
      {
        n: 39, points: 1, type: "single", src: "Slide 46 · homework Part A",
        prompt: FLASK, figure: FLASKfig, prompt2: "Which gas will remain in the system after the reaction is complete?",
        options: [
          { text: R`$\ce{NH3}$`, correct: true, why: FLASKmol },
          { text: "HCl", correct: false, why: R`HCl is limiting (0.132 mol against 0.341 mol $\ce{NH3}$).` },
        ],
      },
      {
        n: 40, points: 1, type: "numeric", src: "Slide 46 · homework Part B",
        prompt: FLASK, figure: FLASKfig, prompt2: "What will be the final pressure of the system after the reaction is complete? (Neglect the volume of the ammonium chloride formed.)",
        answer: 1.03929, rtol: S3, unit: "atm", answerText: "1.04",
        why: FLASKmol + R` $P = \dfrac{(0.209)(0.08206)(303.15)}{2 \times 2.50} = 1.04$ atm.`,
      },
      {
        n: 41, points: 1, type: "numeric", src: "Slide 46 · homework Part C",
        prompt: FLASK, figure: FLASKfig, prompt2: "What mass of ammonium chloride will be formed?",
        answer: 7.0423, rtol: S3, unit: "g", answerText: "7.04",
        why: R`$n(\ce{NH4Cl}) = n(\ce{HCl}) = 0.132$ mol; $0.1317 \times 53.49 = 7.04$ g.`,
      },
      // ===================================================== KMT (42–49)
      {
        n: 42, points: 1, type: "single", src: "Slide 51 · homework · hidden",
        prompt: R`The root-mean-square speed of CO at 113 °C is ________ m/s.`,
        options: [
          { text: "317", correct: false, why: R`Uses 113 (°C) instead of 386 K.` },
          { text: "58.3", correct: false, why: R`A units slip; $\mathcal{M}$ must be in kg/mol.` },
          { text: "993", correct: false, why: R`Too fast for 28 g/mol at 386 K.` },
          { text: "586", correct: true, why: R`$u_\text{rms} = \sqrt{3(8.314)(386)/0.028} = 586$ m/s.` },
          { text: "31.5", correct: false, why: R`A units slip (g vs kg, or °C vs K).` },
        ],
      },
      {
        n: 43, points: 1, type: "single", src: "Slide 52 · YOUR TURN",
        prompt: R`Consider three gases, all at room temperature: $\ce{N2}$, $\ce{H2}$, and $\ce{O2}$. List the gases in order of increasing average speed.`,
        options: [
          { text: R`$\ce{O2 < N2 < H2}$`, correct: true, why: R`Speed $\propto 1/\sqrt{\mathcal{M}}$: $\ce{O2}$ (32) slowest, then $\ce{N2}$ (28), then $\ce{H2}$ (2) fastest.` },
          { text: R`$\ce{O2 < H2 < N2}$`, correct: false, why: R`$\ce{H2}$ is the lightest, so it is fastest.` },
          { text: R`$\ce{H2 < O2 < N2}$`, correct: false, why: R`$\ce{H2}$ is fastest, not slowest.` },
          { text: R`$\ce{H2 < N2 < O2}$`, correct: false, why: R`This is decreasing speed.` },
          { text: R`$\ce{N2 < O2 < H2}$`, correct: false, why: R`$\ce{O2}$ is heavier than $\ce{N2}$, so slower.` },
          { text: R`$\ce{N2 < H2 < O2}$`, correct: false, why: R`$\ce{H2}$ is fastest.` },
        ],
      },
      {
        n: 44, points: 1, type: "single", src: "Slide 54 · YOUR TURN",
        prompt: R`Consider a mixture of two gases, A and B. The graph shows their speed distributions. Which gas has the larger molar mass?`,
        figure: MBgases,
        options: [
          { text: R`$\mathcal{M}_A > \mathcal{M}_B$`, correct: true, why: R`In a mixture both gases share one $T$. A peaks at lower speed with a narrower spread, so its molecules are heavier.` },
          { text: R`$\mathcal{M}_A < \mathcal{M}_B$`, correct: false, why: R`The lighter gas is the faster, broader curve, which is B.` },
          { text: R`$\mathcal{M}_A = \mathcal{M}_B$`, correct: false, why: R`Same mass at the same $T$ would give identical curves.` },
        ],
      },
      {
        n: 45, points: 1, type: "single", src: "Slide 55 · YOUR TURN",
        prompt: R`Consider the speed distributions of the same gas at two different temperatures, $T_A$ and $T_B$. Which temperature is higher?`,
        figure: { img: "img/s55_mb_temps.png", alt: "Speed distributions: T_A tall and narrow near 260 m/s; T_B broad near 450 m/s" },
        options: [
          { text: R`$T_A > T_B$`, correct: false, why: R`$T_A$ is the slower, narrower curve.` },
          { text: R`$T_A < T_B$`, correct: true, why: R`Same gas, so the faster, broader distribution ($T_B$) is the hotter one.` },
          { text: R`$T_A = T_B$`, correct: false, why: R`Same gas at the same $T$ would give one curve.` },
        ],
      },
      {
        n: 46, points: 1, type: "single", src: "Slide 56 · past exam · hidden",
        prompt: R`Consider a mixture of nitrogen ($\ce{N2}$) and krypton (Kr). The graph shows speed distributions A and B, corresponding to the two components of the mixture at a certain temperature (it is up to you to figure out which curve corresponds to which gas). Curve A has a maximum at 260 m/s, while curve B peaks at 450 m/s. What is the <strong>most probable</strong> speed of $\ce{N2}$ molecules in this mixture?`,
        figure: MBgases,
        options: [
          { text: "260 m/s", correct: false, why: R`Curve A is the heavier gas, Kr (83.8 g/mol).` },
          { text: "Slightly larger than 260 m/s", correct: false, why: R`Distractor: neither curve's peak shifts.` },
          { text: "450 m/s", correct: true, why: R`$\ce{N2}$ (28 g/mol) is lighter than Kr, so it is the faster curve B. The most probable speed is the peak: 450 m/s.` },
          { text: "Slightly larger than 450 m/s", correct: false, why: R`The most probable speed is the peak itself. (The average and rms speeds are slightly larger, which is the trap.)` },
        ],
      },
      {
        n: 47, points: 1, type: "single", src: "Slide 58 · YOUR TURN",
        prompt: R`Consider three gases, all at room temperature: $\ce{N2}$, $\ce{H2}$, and $\ce{O2}$. List the gases in order of increasing rate of effusion.`,
        options: [
          { text: R`$\ce{N2 < O2 < H2}$`, correct: false, why: R`$\ce{O2}$ is heavier, so it effuses slower than $\ce{N2}$.` },
          { text: R`$\ce{N2 < H2 < O2}$`, correct: false, why: R`$\ce{H2}$ is fastest.` },
          { text: R`$\ce{H2 < O2 < N2}$`, correct: false, why: R`$\ce{H2}$ is fastest, not slowest.` },
          { text: R`$\ce{O2 < H2 < N2}$`, correct: false, why: R`$\ce{H2}$ is fastest.` },
          { text: R`$\ce{O2 < N2 < H2}$`, correct: true, why: R`Graham: rate $\propto 1/\sqrt{\mathcal{M}}$. Same order as the average speeds.` },
        ],
      },
      {
        n: 48, points: 1, type: "single", src: "Slide 59 · YOUR TURN",
        prompt: R`Consider three gases, all at room temperature: $\ce{N2}$, $\ce{H2}$, and $\ce{O2}$. List the gases in order of increasing rate of diffusion.`,
        options: [
          { text: R`$\ce{N2 < O2 < H2}$`, correct: false, why: R`$\ce{O2}$ diffuses slower than $\ce{N2}$.` },
          { text: R`$\ce{N2 < H2 < O2}$`, correct: false, why: R`$\ce{H2}$ is fastest.` },
          { text: R`$\ce{H2 < O2 < N2}$`, correct: false, why: R`Reversed.` },
          { text: R`$\ce{O2 < H2 < N2}$`, correct: false, why: R`$\ce{H2}$ is fastest.` },
          { text: R`$\ce{O2 < N2 < H2}$`, correct: true, why: R`Lighter molecules move faster and so diffuse faster: the same order as effusion.` },
        ],
      },
      {
        n: 49, points: 1, type: "numeric", src: "Slide 60 · example 1 · hidden",
        prompt: TANK, prompt2: R`How many moles of $\ce{N2}$ does the tank contain? (two significant figures)`,
        answer: 0.50752, rtol: S2, unit: "mol", answerText: "0.51",
        why: R`$n = \dfrac{PV}{RT} = \dfrac{(5.0)(2.500)}{(0.08206)(300.15)} = 0.51$ mol.`,
      },
      {
        n: 50, points: 1, type: "numeric", src: "Slide 61 · example 2 · hidden",
        prompt: TANK, prompt2: R`How many grams of $\ce{N2}$ does the tank contain? (two significant figures)`,
        answer: 14.218, rtol: S2, unit: "g", answerText: "14",
        why: R`$0.5075\ \text{mol} \times 28.01\ \text{g/mol} = 14$ g.`,
      },
      {
        n: 51, points: 1, type: "multi", src: "Slide 62 · key concepts",
        prompt: HEAR, prompt2: "Select every statement that is true. The two containers …",
        options: [
          { text: "have the same number of moles of gas", correct: true, why: R`Equal numbers of atoms means equal moles.` },
          { text: "have the same volume", correct: true, why: R`Same $n$, $T$, $P$ gives the same $V = nRT/P$ (Avogadro).` },
          { text: "have the same mass of gas", correct: false, why: R`Ar atoms are 10 times heavier, so the Ar sample has 10 times the mass.` },
          { text: "have the same density of gas", correct: false, why: R`Same volume, 10 times the mass: Ar is 10 times denser.` },
          { text: "contain atoms with the same average kinetic energy", correct: true, why: R`Average KE $= \tfrac32 kT$ depends only on temperature.` },
          { text: "contain atoms with the same average speed", correct: false, why: R`Same KE with 10 times the mass: He is $\sqrt{10} \approx 3.2$ times faster.` },
        ],
      },
      // ===================================================== Real gases (52–56)
      {
        n: 52, points: 1, type: "single", src: "Slide 66 · YOUR TURN · hidden",
        prompt: R`Under which conditions do you expect helium gas to deviate most from ideal behavior?`,
        options: [
          { text: "100 K and 1 atm", correct: false, why: R`Cold, but low pressure.` },
          { text: "100 K and 5 atm", correct: true, why: R`Deviations grow at low $T$ (attractions matter) and high $P$ (molecular volume matters). This is the coldest, densest choice.` },
          { text: "300 K and 2 atm", correct: false, why: R`Warmer and less dense than 100 K, 5 atm.` },
          { text: "Helium is a noble gas. It never deviates from ideal.", correct: false, why: R`He is close to ideal but still has finite size and weak dispersion attractions; it even liquefies at 4 K.` },
        ],
      },
      {
        n: 53, points: 1, type: "numeric", src: "Slide 68 · homework Part A · hidden",
        prompt: N2CYL, prompt2: "Calculate the pressure of the gas, assuming ideal-gas behavior. Express your answer in atmospheres to three significant figures.",
        answer: 141.39, rtol: S3, unit: "atm", answerText: "141",
        why: N2n + R` $P = \dfrac{(4283.6)(0.08206)(563.15)}{1400.0} = 141$ atm.`,
      },
      {
        n: 54, points: 1, type: "numeric", src: "Slide 68 · homework Part B · hidden",
        prompt: N2CYL, prompt2: R`Given that for $\ce{N2}$, $a = 1.39\ \mathrm{L^2\,atm/mol^2}$ and $b = 0.0391\ \mathrm{L/mol}$, calculate the pressure of the gas according to the van der Waals equation. Express your answer in atmospheres to three significant figures.`,
        answer: 147.59, rtol: S3, unit: "atm", answerText: "148",
        why: N2n + R` $P = \dfrac{nRT}{V - nb} - \dfrac{an^2}{V^2}$: $nb = 167.5$ L, so the first term is $197{,}950/1232.5 = 160.6$ atm; $an^2/V^2 = 13.0$ atm. $P = 160.6 - 13.0 = 148$ atm.`,
      },
      {
        n: 55, points: 1, type: "single", src: "Slide 68 · homework Part C · hidden",
        prompt: N2CYL, prompt2: "Under the conditions of this problem, which correction dominates, the one for finite volume of gas molecules or the one for attractive interactions?",
        options: [
          { text: "correction for finite volume", correct: true, why: R`The volume term raises $P$ by $160.6 - 141.4 = +19.2$ atm; the attraction term lowers it by 13.0 atm. Net: real $P$ is above ideal.` },
          { text: "correction for attractive interactions", correct: false, why: R`13.0 atm is smaller than the +19.2 atm volume correction. The slide's notes: volume correction increases pressure, attractions decrease it.` },
          { text: "neither of them", correct: false, why: R`They are 19.2 and 13.0 atm; they do not cancel.` },
        ],
      },
      {
        n: 56, points: 1, type: "numeric", src: "Slide 69 · homework · hidden",
        prompt: R`To derive the ideal gas equation, we assume that the volume of the gas atoms or molecules can be neglected. Given the atomic radius of radon, 1.5 Å, and knowing that a sphere has a volume of $4\pi r^3/3$, calculate the fraction of space that Rn atoms occupy in a sample of radon at STP. Express your answer to two significant figures.`,
        answer: 3.798e-4, rtol: S2, unit: "", answerText: R`$3.8 \times 10^{-4}$`,
        why: R`Take 1 mol: $V_\text{sample} = 22.4\ \text{L} = 0.0224\ \text{m}^3$. $V_\text{atoms} = N_A \cdot \tfrac43\pi r^3 = (6.02 \times 10^{23})\tfrac43\pi(1.5 \times 10^{-10}\ \text{m})^3 = 8.51 \times 10^{-6}\ \text{m}^3$. Ratio $= 3.8 \times 10^{-4}$.`,
      },
    ],
  };
})();
