import { useMemo, useRef } from "react";
import { aiDemo } from "../data";
import { useScrollScene, range, reducedMotion } from "../hooks";
import ScrollTitle from "./ScrollTitle";

// Deterministic pseudo-random numbers so the diagram looks the same on every visit
const rng = (seed) => () => ((seed = (seed * 16807) % 2147483647) / 2147483647);

const BARS = 40;
const QUERY = { x: 160, y: 365 };
const NODES = [
  { id: "interstellar", label: "Interstellar", x: 470, y: 318, kind: "seed" },
  { id: "nolan", label: "C. Nolan", x: 575, y: 262 },
  { id: "inception", label: "Inception", x: 392, y: 268 },
  { id: "scifi", label: "Hard sci-fi", x: 380, y: 392 },
  { id: "space", label: "Space", x: 560, y: 352 },
  { id: "martian", label: "The Martian", x: 575, y: 470, kind: "answer" },
  { id: "arrival", label: "Arrival", x: 405, y: 492, kind: "answer" },
  { id: "gravity", label: "Gravity", x: 492, y: 418, kind: "answer" },
];
const EDGES = [
  ["interstellar", "nolan", false],
  ["nolan", "inception", false],
  ["interstellar", "scifi", true],
  ["interstellar", "space", true],
  ["scifi", "arrival", true],
  ["space", "martian", true],
  ["space", "gravity", true],
  ["scifi", "martian", false],
];
const byId = Object.fromEntries(NODES.map((n) => [n.id, n]));

// phases of the pinned scroll, in order
const PHASES = [
  [0.02, 0.16], // type the question
  [0.16, 0.32], // embedding bars
  [0.32, 0.52], // vector search
  [0.52, 0.74], // graph walk
  [0.74, 0.95], // answer
];

export default function GenAI() {
  const ref = useRef(null);

  const { bars, dots, nearest } = useMemo(() => {
    const r = rng(7);
    const bars = Array.from({ length: BARS }, () => 0.2 + r() * 0.8);
    const dots = Array.from({ length: 46 }, () => ({ x: 34 + r() * 252, y: 226 + r() * 290 }));
    const nearest = dots
      .map((d, i) => ({ i, d: Math.hypot(d.x - QUERY.x, d.y - QUERY.y) }))
      .sort((a, b) => a.d - b.d)
      .slice(0, 5)
      .map((n) => n.i);
    return { bars, dots, nearest };
  }, []);

  useScrollScene(ref, (p, el) => {
    const rm = reducedMotion();
    const [q, e, s, g, a] = PHASES.map(([x, y]) => (rm ? 1 : range(p, x, y)));

    // 1 — question types itself
    const qText = el.querySelector(".ai-q-text");
    qText.textContent = aiDemo.question.slice(0, Math.round(q * aiDemo.question.length));
    el.querySelector(".ai-q-caret").style.opacity = q > 0 && q < 1 ? 1 : 0;

    // 2 — embedding bars grow left to right
    el.querySelectorAll(".ai-bar").forEach((b, i) => {
      const k = range(e, (i / BARS) * 0.7, (i / BARS) * 0.7 + 0.3);
      b.style.transform = `scaleY(${k})`;
    });

    // 3 — the query lands in vector space, nearest neighbours link up
    el.querySelector(".ai-query").style.opacity = s > 0 ? 1 : 0;
    el.querySelector(".ai-query").style.transform = `scale(${0.4 + s * 0.6})`;
    el.querySelectorAll(".ai-nn").forEach((l, i) => {
      const k = range(s, 0.2 + i * 0.12, 0.45 + i * 0.12);
      l.style.strokeDashoffset = String(1 - k);
    });
    el.querySelectorAll(".ai-dot").forEach((d) => {
      const rank = Number(d.dataset.rank);
      d.classList.toggle("is-hit", rank >= 0 && s > 0.45 + rank * 0.12);
    });

    // 4 — graph edges draw one after another
    el.querySelectorAll(".ai-edge").forEach((l, i) => {
      const k = range(g, (i / EDGES.length) * 0.75, (i / EDGES.length) * 0.75 + 0.25);
      l.style.strokeDashoffset = String(1 - k);
    });
    el.querySelectorAll(".ai-node").forEach((n) => {
      const order = Number(n.dataset.order);
      n.classList.toggle("is-on", g > order);
      n.classList.toggle("is-answer", n.dataset.kind === "answer" && a > 0.05);
    });

    // 5 — grounded answer types out
    el.querySelector(".ai-answer-text").textContent = aiDemo.answer.slice(0, Math.round(a * aiDemo.answer.length));
    el.querySelector(".ai-answer").classList.toggle("is-on", a > 0);

    // step list on the left
    const vals = [(q + e) / 2, s, g, a];
    const active = p < PHASES[2][0] ? 0 : p < PHASES[3][0] ? 1 : p < PHASES[4][0] ? 2 : 3;
    el.querySelectorAll(".ai-step").forEach((st, i) => {
      st.classList.toggle("is-active", i === active);
      st.classList.toggle("is-done", i < active);
      st.style.setProperty("--k", vals[i].toFixed(3));
    });
  });

  // when each node lights up during the graph walk (0..1 of phase g)
  const nodeOrder = { interstellar: 0, nolan: 0.1, inception: 0.2, scifi: 0.28, space: 0.38, arrival: 0.5, martian: 0.62, gravity: 0.72 };

  return (
    <section id="ai" className="genai" ref={ref}>
      <div className="genai-pin">
        <div className="genai-text">
          <ScrollTitle text="How my AI apps find answers" className="h-section h-section--night" />
          <p className="lede lede--night">Keep scrolling to run MovieMind&apos;s GraphRAG pipeline — the same retrieval pattern I use in every GenAI app I build.</p>
          <ol className="ai-steps">
            {aiDemo.steps.map((st, i) => (
              <li className="ai-step" key={st.title}>
                <span className="ai-step-n">{i + 1}</span>
                <div>
                  <h3>{st.title}</h3>
                  <p>{st.text}</p>
                  <span className="ai-step-bar"><span /></span>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="genai-visual">
          <svg viewBox="0 0 640 560" className="ai-svg" role="img" aria-label="Diagram: a question is embedded, matched in Pinecone, expanded through a Neo4j graph and answered by Gemini">
            {/* question */}
            <rect x="10" y="10" width="620" height="58" rx="12" className="ai-box ai-box--q" />
            <text x="32" y="46" className="ai-q">
              <tspan className="ai-q-text" />
              <tspan className="ai-q-caret">▍</tspan>
            </text>

            {/* embedding */}
            <text x="10" y="102" className="ai-label">Embedding</text>
            {bars.map((h, i) => (
              <rect key={i} className="ai-bar" x={10 + i * 15.5} y={170 - h * 56} width="10" height={h * 56} rx="2" />
            ))}

            {/* vector space */}
            <rect x="10" y="196" width="300" height="350" rx="12" className="ai-box" />
            <text x="28" y="222" className="ai-label">Vector search in Pinecone</text>
            {nearest.map((di, i) => (
              <line key={i} className="ai-nn" pathLength="1" x1={QUERY.x} y1={QUERY.y} x2={dots[di].x} y2={dots[di].y} />
            ))}
            {dots.map((d, i) => (
              <circle key={i} className="ai-dot" data-rank={nearest.indexOf(i)} cx={d.x} cy={d.y} r="4.2" />
            ))}
            <g className="ai-query" style={{ transformOrigin: `${QUERY.x}px ${QUERY.y}px` }}>
              <circle cx={QUERY.x} cy={QUERY.y} r="16" className="ai-query-halo" />
              <circle cx={QUERY.x} cy={QUERY.y} r="7" className="ai-query-core" />
            </g>

            {/* knowledge graph */}
            <rect x="330" y="196" width="300" height="350" rx="12" className="ai-box" />
            <text x="348" y="222" className="ai-label">Graph walk in Neo4j</text>
            {EDGES.map(([f, t, hot], i) => (
              <line key={i} className={`ai-edge ${hot ? "is-hot" : ""}`} pathLength="1"
                x1={byId[f].x} y1={byId[f].y} x2={byId[t].x} y2={byId[t].y} />
            ))}
            {NODES.map((n) => (
              <g key={n.id} className="ai-node" data-kind={n.kind || ""} data-order={nodeOrder[n.id]}>
                <circle cx={n.x} cy={n.y} r={n.kind === "seed" ? 11 : 8} />
                <text x={n.x} y={n.y - 16} textAnchor="middle">{n.label}</text>
              </g>
            ))}
          </svg>

          <div className="ai-answer">
            <span className="ai-answer-from">Gemini, grounded in the graph</span>
            <p className="ai-answer-text" />
          </div>
        </div>
      </div>
    </section>
  );
}
