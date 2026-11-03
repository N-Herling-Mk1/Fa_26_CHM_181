/* Quiz engine: renders window.QUIZ, grades immediately, explains every option
 * in the side panel. Reused by every quiz page in this repo. */
(function () {
  "use strict";
  const QZ = window.QUIZ;
  const $ = (s, el = document) => el.querySelector(s);
  const el = (tag, attrs = {}, html) => {
    const e = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === "class") e.className = v; else if (k in e && k !== "list") e[k] = v; else e.setAttribute(k, v);
    }
    if (html !== undefined) e.innerHTML = html;
    return e;
  };
  const fmt = (x) => (Math.round(x * 100) / 100).toFixed(2).replace(/\.00$/, "").replace(/(\.\d)0$/, "$1");
  const isPhoto = (q) => !!q.photos;

  // ---------------- state (persisted per quiz in localStorage) ----------------
  const KEY = "quiz-state:" + QZ.id;
  let state = { answers: {}, graded: {}, peek: {}, current: 1 };
  try { const s = JSON.parse(localStorage.getItem(KEY)); if (s && s.answers) state = Object.assign(state, s); } catch (e) {}
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} };

  const answerOf = (q) => {
    const a = state.answers[q.n];
    if (q.type === "multi") return Array.isArray(a) ? a : [];
    if (q.type === "match") return a && typeof a === "object" ? a : {};
    return typeof a === "number" ? a : null;
  };
  const isAnswered = (q) => {
    const a = answerOf(q);
    if (q.type === "multi") return a.length > 0;
    if (q.type === "match") return q.items.some((_, i) => a[i]);
    return a !== null;
  };

  // ---------------- scoring ----------------
  // multi: right-minus-wrong over all options, floored at 0 (matches the original quiz's scores)
  function score(q) {
    if (!isAnswered(q)) return 0;          // unanswered questions earn nothing
    const a = answerOf(q);
    if (q.type === "single") return a !== null && q.options[a].correct ? q.points : 0;
    if (q.type === "match") {
      const right = q.items.filter((it, i) => a[i] === it.answer).length;
      return (q.points * right) / q.items.length;
    }
    const n = q.options.length;
    let right = 0;
    q.options.forEach((o, i) => { if (a.includes(i) === !!o.correct) right++; });
    const wrong = n - right;
    return Math.max(0, (q.points * (right - wrong)) / n);
  }
  const verdict = (q) => {
    const s = score(q);
    return s >= q.points - 1e-9 ? "ok" : s > 1e-9 ? "part" : "bad";
  };

  // ---------------- rendering ----------------
  const quizEl = $("#quiz");
  const cards = {};

  function renderIntro() {
    const box = el("div", { class: "intro" });
    box.innerHTML = `<p><strong>${QZ.course}</strong> · ${QZ.questions.length} questions · ${QZ.questions.filter(q => !q.bonus).reduce((t, q) => t + q.points, 0)} points + bonus.</p>
      <p>Answer, then press <strong>Check</strong> on any question (or <strong>Grade all</strong>) for immediate grading. The panel explains why each option is right or wrong.</p>
      <p>${QZ.scoring}</p>${QZ.toolsNote ? `<p>${QZ.toolsNote}</p>` : ""}`;
    quizEl.appendChild(box);
  }

  function renderQuestion(q) {
    const card = el("section", { class: "q", id: "q" + q.n, "aria-labelledby": "qh" + q.n });
    const title = q.title || `Question ${q.n}`;
    const ptsLabel = `${fmt(q.points)} point${q.points === 1 ? "" : "s"}`;
    card.innerHTML = `<div class="q-head"><h2 id="qh${q.n}">${title} <span class="pts">(${ptsLabel})</span></h2><span class="status"></span></div>`;
    const body = el("div", { class: "q-body" });
    body.appendChild(el("div", { class: "prompt" }, q.prompt));
    if (q.figure) {
      const f = el("div", { class: "figure" });
      f.appendChild(el("img", { src: q.figure.img, alt: q.figure.alt || "", loading: "lazy" }));
      body.appendChild(f);
    }
    if (q.prompt2) body.appendChild(el("div", { class: "prompt" }, q.prompt2));

    if (q.type === "match") {
      const grid = el("div", { class: "match" });
      const a = answerOf(q);
      q.items.forEach((it, i) => {
        const sel = el("select", { "aria-label": it.label });
        sel.appendChild(el("option", { value: "" }, "--"));
        q.choices.forEach((c) => sel.appendChild(el("option", { value: c }, c)));
        sel.value = a[i] || "";
        sel.addEventListener("change", () => {
          const cur = Object.assign({}, answerOf(q)); cur[i] = sel.value; state.answers[q.n] = cur;
          ungrade(q); save(); refresh(q);
        });
        grid.appendChild(sel);
        grid.appendChild(el("div", {}, it.label));
      });
      body.appendChild(grid);
      const list = el("ol", { class: "match-choices" });
      q.choices.forEach((c) => list.appendChild(el("li", {}, c)));
      body.appendChild(list);
    } else {
      const ul = el("ul", { class: "opts", role: q.type === "single" ? "radiogroup" : "group" });
      q.options.forEach((o, i) => {
        const li = el("li", { class: "opt" });
        const id = `q${q.n}o${i}`;
        const input = el("input", { type: q.type === "single" ? "radio" : "checkbox", name: "q" + q.n, id, value: i });
        const label = el("label", { htmlFor: id });
        if (o.img) {
          const img = el("img", { src: o.img, alt: o.alt || "", loading: "lazy" });
          if (isPhoto(q)) img.className = "photo";
          label.appendChild(img);
        } else {
          label.appendChild(el("span", { class: "otext" }, o.text));
        }
        input.addEventListener("change", () => {
          if (q.type === "single") state.answers[q.n] = i;
          else {
            const cur = new Set(answerOf(q));
            input.checked ? cur.add(i) : cur.delete(i);
            state.answers[q.n] = [...cur].sort((x, y) => x - y);
          }
          ungrade(q); save(); refresh(q);
        });
        li.append(input, label, el("span", { class: "mark", "aria-hidden": "true" }));
        ul.appendChild(li);
      });
      body.appendChild(ul);
    }

    const foot = el("div", { class: "q-foot" });
    const check = el("button", { class: "btn small primary", type: "button" }, "Check");
    check.addEventListener("click", () => { grade(q); setCurrent(q.n, true); });
    const explain = el("button", { class: "btn small", type: "button" }, "Explain");
    explain.addEventListener("click", () => { setCurrent(q.n, true); openPanel(); });
    foot.append(check, explain, el("span", { class: "result", "aria-live": "polite" }));
    body.appendChild(foot);
    card.appendChild(body);
    card.addEventListener("click", (ev) => { if (!ev.target.closest("button")) setCurrent(q.n, false); });
    quizEl.appendChild(card);
    cards[q.n] = card;
    refresh(q);
  }

  function refresh(q) {
    const card = cards[q.n];
    const a = answerOf(q);
    const graded = !!state.graded[q.n];
    card.classList.toggle("graded", graded);
    if (q.type === "match") {
      card.querySelectorAll("select").forEach((s, i) => {
        s.value = a[i] || "";
        s.classList.toggle("right", graded && a[i] === q.items[i].answer);
        s.classList.toggle("wrong", graded && a[i] !== q.items[i].answer);
      });
    } else {
      card.querySelectorAll(".opt").forEach((li, i) => {
        const chosen = q.type === "multi" ? a.includes(i) : a === i;
        li.querySelector("input").checked = chosen;
        li.classList.toggle("sel", chosen);
        const o = q.options[i];
        const ok = chosen === !!o.correct;
        li.classList.toggle("keyed", graded && !!o.correct);
        li.classList.toggle("right", graded && chosen && ok);
        li.classList.toggle("wrong", graded && !ok);
      });
    }
    const status = $(".status", card);
    const res = $(".result", card);
    status.className = "status";
    res.className = "result";
    if (graded) {
      const v = verdict(q);
      status.textContent = v === "ok" ? "Correct" : v === "part" ? "Partially correct" : "Incorrect";
      status.classList.add(v);
      res.textContent = `Score: ${fmt(score(q))} / ${fmt(q.points)}`;
      res.classList.add("show", v);
    } else {
      status.textContent = isAnswered(q) ? "Saved" : "";
    }
    updateTop();
    if (state.current === q.n) renderPanel();
    else updateMap();
  }

  // ---------------- grading ----------------
  function grade(q) { state.graded[q.n] = true; save(); refresh(q); }
  function ungrade(q) { if (state.graded[q.n]) { delete state.graded[q.n]; } }
  function gradeAll() {
    QZ.questions.forEach((q) => { state.graded[q.n] = true; });
    save(); QZ.questions.forEach(refresh); renderPanel();
  }
  function resetAll() {
    if (!confirmReset()) return;
    state = { answers: {}, graded: {}, peek: {}, current: 1 };
    save(); QZ.questions.forEach(refresh); setCurrent(1, true);
  }
  // inline two-step confirm instead of window.confirm (no blocking dialogs)
  let resetArmed = 0;
  function confirmReset() {
    const b = $("#btn-reset");
    if (Date.now() - resetArmed < 3000) { b.textContent = "Reset"; resetArmed = 0; return true; }
    resetArmed = Date.now(); b.textContent = "Click again to reset";
    setTimeout(() => { if (resetArmed && Date.now() - resetArmed >= 3000) { b.textContent = "Reset"; resetArmed = 0; } }, 3100);
    return false;
  }

  function updateTop() {
    const qs = QZ.questions;
    const answered = qs.filter(isAnswered).length;
    $("#prog-text").textContent = `${answered} / ${qs.length} answered`;
    $("#prog-bar").style.width = (100 * answered) / qs.length + "%";
    const gradedQs = qs.filter((q) => state.graded[q.n]);
    const box = $("#scorebox");
    if (!gradedQs.length) { box.textContent = "Not graded"; box.classList.remove("done"); return; }
    const total = qs.filter((q) => !q.bonus).reduce((t, q) => t + q.points, 0);
    const got = gradedQs.reduce((t, q) => t + score(q), 0);
    const all = gradedQs.length === qs.length;
    box.textContent = `${all ? "Score" : "Graded so far"}: ${fmt(got)} / ${fmt(total)}` + (all ? ` (${Math.round((100 * got) / total)}%)` : ` · ${gradedQs.length} checked`);
    box.classList.toggle("done", all);
  }

  // ---------------- side panel ----------------
  const panel = $("#panel");
  const pbody = $("#panel-body");
  function updateMap() {
    const map = $("#qmap");
    if (!map.childElementCount) {
      QZ.questions.forEach((q) => {
        const b = el("button", { type: "button", title: q.title || `Question ${q.n}` }, q.bonus ? "B" : String(q.n));
        b.addEventListener("click", () => setCurrent(q.n, true));
        map.appendChild(b);
      });
    }
    [...map.children].forEach((b, i) => {
      const q = QZ.questions[i];
      b.className = "";
      if (state.graded[q.n]) b.classList.add(verdict(q));
      else if (isAnswered(q)) b.classList.add("answered");
      if (state.current === q.n) b.classList.add("current");
    });
  }

  function optLabel(q, o) {
    if (o.img) return `<img src="${o.img}" alt="${(o.alt || "").replace(/"/g, "&quot;")}"${isPhoto(q) ? ' class="photo"' : ""}>`;
    return o.text;
  }

  function renderPanel() {
    updateMap();
    const q = QZ.questions.find((x) => x.n === state.current) || QZ.questions[0];
    const graded = !!state.graded[q.n];
    const peek = !!state.peek[q.n];
    let h = `<h4>${q.title || "Question " + q.n}</h4>`;
    if (!graded && !peek) {
      h += `<div class="panel-empty"><p>Not checked yet. Check the question to grade it and see why each option is right or wrong, or peek at the explanation without grading.</p>
        <div class="btns"><button class="btn small primary" data-act="check">Check this question</button><button class="btn small" data-act="peek">Peek</button></div></div>`;
    } else {
      const a = answerOf(q);
      h += graded
        ? `<div class="sub">Score ${fmt(score(q))} / ${fmt(q.points)}${q.bonus ? " (bonus)" : ""} · ${q.type === "multi" ? "right-minus-wrong per option" : q.type === "match" ? "per item" : "all or nothing"}</div>`
        : `<div class="sub">Peeking: answer key shown, not graded.</div>`;
      if (q.type === "match") {
        q.items.forEach((it, i) => {
          const ok = a[i] === it.answer;
          const cls = graded ? (ok ? "right" : "wrong") : "peek";
          h += `<div class="ex ${cls}"><div class="what"><strong>${it.label}</strong> → ${it.answer} bond${it.answer === "1" ? "" : "s"}</div>
            <div class="chips">${graded ? `<span class="chip">You: ${a[i] || "—"}</span><span class="chip ${ok ? "v-right" : "v-wrong"}">${ok ? "✓ right" : "✗ wrong"}</span>` : ""}</div>
            <div class="why">${it.why}</div></div>`;
        });
      } else {
        q.options.forEach((o, i) => {
          const chosen = q.type === "multi" ? a.includes(i) : a === i;
          const ok = chosen === !!o.correct;
          const cls = graded ? (ok ? "right" : "wrong") : "peek";
          const keyChip = q.type === "multi"
            ? (o.correct ? `<span class="chip key-yes">Key: select</span>` : `<span class="chip key-no">Key: leave blank</span>`)
            : (o.correct ? `<span class="chip key-yes">Correct answer</span>` : `<span class="chip key-no">Incorrect</span>`);
          const youChip = graded ? `<span class="chip">You: ${chosen ? "selected" : "not selected"}</span><span class="chip ${ok ? "v-right" : "v-wrong"}">${ok ? "✓ right" : "✗ wrong"}</span>` : "";
          h += `<div class="ex ${cls}"><div class="what">${optLabel(q, o)}</div><div class="chips">${keyChip}${youChip}</div><div class="why">${o.why}</div></div>`;
        });
      }
      if (q.note) h += `<div class="note">${q.note}</div>`;
    }
    const idx = QZ.questions.indexOf(q);
    h += `<div class="panel-nav"><button class="btn small" data-act="prev" ${idx === 0 ? "disabled" : ""}>◀ Previous</button><button class="btn small" data-act="goto">Go to question</button><button class="btn small" data-act="next" ${idx === QZ.questions.length - 1 ? "disabled" : ""}>Next ▶</button></div>`;
    pbody.innerHTML = h;
    typeset(pbody);
  }

  pbody.addEventListener("click", (ev) => {
    const b = ev.target.closest("button[data-act]");
    if (!b) return;
    const q = QZ.questions.find((x) => x.n === state.current);
    const idx = QZ.questions.indexOf(q);
    const act = b.dataset.act;
    if (act === "check") grade(q);
    else if (act === "peek") { state.peek[q.n] = true; save(); renderPanel(); }
    else if (act === "prev") setCurrent(QZ.questions[idx - 1].n, true);
    else if (act === "next") setCurrent(QZ.questions[idx + 1].n, true);
    else if (act === "goto") { cards[q.n].scrollIntoView({ block: "start" }); closePanelMobile(); }
  });

  function setCurrent(n, scroll) {
    const prev = state.current;
    state.current = n; save();
    if (cards[prev]) cards[prev].classList.remove("active");
    cards[n].classList.add("active");
    renderPanel();
    if (scroll && window.matchMedia("(min-width: 1001px)").matches) cards[n].scrollIntoView({ block: "start" });
    panel.scrollTop = 0;
  }

  const openPanel = () => panel.classList.add("open");
  const closePanelMobile = () => panel.classList.remove("open");

  function typeset(root) {
    if (window.renderMathInElement) {
      try {
        window.renderMathInElement(root, {
          delimiters: [{ left: "$", right: "$", display: false }],
          throwOnError: false,
        });
      } catch (e) {}
    }
  }

  // ---------------- boot ----------------
  document.title = `${QZ.title} · ${QZ.course}`;
  $("#quiz-title").textContent = QZ.title;
  renderIntro();
  QZ.questions.forEach(renderQuestion);
  $("#btn-grade").addEventListener("click", gradeAll);
  $("#btn-reset").addEventListener("click", resetAll);
  $("#btn-panel").addEventListener("click", () => panel.classList.toggle("open"));
  $("#btn-close-panel").addEventListener("click", closePanelMobile);
  typeset(quizEl);
  setCurrent(state.current || 1, false);
  updateTop();
})();
