# CHEM 181 Study Hub

Static study site for CHEM 181 (General Chemistry I): a navigation page plus one page per quiz or set of chapter notes. Plain HTML, CSS and JavaScript, no build step. It works when opened straight from disk (`file://`) or served with GitHub Pages.

## Layout

```
index.html                         navigation page (edit the MODULES list to add chapters)
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
```

## Quiz features

- Questions are drawn in the original quiz's format: checkboxes, radio buttons and drop-downs, with the original structure drawings.
- **Check** grades one question right away; **Grade all** grades everything. The top bar shows progress and the total score.
- The side panel (a drawer on narrow screens) lists every option with the key, your choice, ✓/✗, and why. **Peek** shows the key without grading.
- Multi-select questions use right-minus-wrong scoring per option, which reproduces the original quiz's partial scores (for example $(6-1)/7 = 0.714$).
- Answers persist in `localStorage` per quiz, and **Reset** clears them.

## Adding a quiz

1. Copy `quizzes/quiz01-lewis-structures/` to a new folder.
2. Rewrite `data.js`. Question types are `single`, `multi` and `match`, and the field reference is at the top of the file. Math goes in `$...$`, and chemical formulas in `\ce{...}`.
3. Add the entry to `MODULES` in the root `index.html` and set its `href`.

## Hosting on GitHub Pages

Settings → Pages → Deploy from branch → `main` / root. The `.nojekyll` file makes Pages serve the files as they are.
