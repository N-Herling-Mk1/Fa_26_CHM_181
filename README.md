# CHEM 181 Study Hub

Static study site for CHEM 181 (General Chemistry I): a navigation page plus one page per quiz or set of chapter notes. Plain HTML, CSS and JavaScript, no build step. It works when opened straight from disk (`file://`) or served with GitHub Pages.

## Layout

```
index.html                         splash page: one button per lecture-deck quiz (edit DECKS / OTHERS)
assets/img/                        tab icon: favicon-32.png, favicon.ico (16/32/48), apple-touch-icon.png, icon-512.png
assets/
  css/hub.css                      navigation page styles
  css/quiz.css                     quiz page styles (Brightspace-like layout)
  js/quiz-engine.js                shared quiz renderer, grader and explanation panel
  vendor/katex/                    KaTeX 0.16 + mhchem + auto-render, bundled for offline use (MIT)
quizzes/
  quiz01-lewis-structures/
    index.html                     quiz page
    data.js                        questions, answer key, explanations for every option
    img/                           structure images cropped from the original quiz
  quiz02-ch08-chemical-bonding/
    index.html                     quiz page
    data.js                        56 questions (47 from the Ch. 8 lecture deck + 9 added), keys, explanations
    img/                           figures and option images cropped from the deck, plus reference tables
```

## Quiz features

- Questions are drawn in the original format: checkboxes, radio buttons, drop-downs and typed numeric answers, with the original structure drawings.
- Deck quizzes tag each question with its source slide (hidden slides are marked) and can attach collapsible reference figures (periodic table, electronegativities, bond enthalpies).
- **Check** grades one question right away; **Grade all** grades everything. The top bar shows progress and the total score.
- The side panel (a drawer on narrow screens) lists every option with the key, your choice, ✓/✗, and why. **Peek** shows the key without grading.
- Multi-select questions use right-minus-wrong scoring per option, which reproduces the original quiz's partial scores (for example $(6-1)/7 = 0.714$).
- Answers persist in `localStorage` per quiz, and **Reset** clears them.

## Adding a quiz

1. Copy `quizzes/quiz01-lewis-structures/` to a new folder.
2. Rewrite `data.js`. Question types are `single`, `multi`, `match` and `numeric` (`answer`, optional `tol`, `unit`; accepts `1.5`, `3/2`, `1 1/2`). The field reference is at the top of `quizzes/quiz02-ch08-chemical-bonding/data.js`. Math goes in `$...$`, and chemical formulas in `\ce{...}`.
3. Give the quiz a unique `id`, then add an entry to `DECKS` in the root `index.html` with the same `id`, the question count as `total`, and its `href`. The card shows saved progress from that `id`.

## Hosting on GitHub Pages

Settings → Pages → Deploy from branch → `main` / root. The `.nojekyll` file makes Pages serve the files as they are.
