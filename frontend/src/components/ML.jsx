import { useMemo, useRef } from "react";
import { mlLearning } from "../data";
import { useScrollScene, range, reducedMotion } from "../hooks";
import ScrollTitle from "./ScrollTitle";

const rng = (seed) => () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
const LAYERS = [4, 6, 6, 3];
const W = 520, H = 300;
const EPOCHS = 100;

export default function ML() {
  const ref = useRef(null);
  const lossRef = useRef(null);

  const net = useMemo(() => {
    const r = rng(11);
    const nodes = LAYERS.map((n, l) =>
      Array.from({ length: n }, (_, i) => ({
        x: 40 + (l * (W - 80)) / (LAYERS.length - 1),
        y: H / 2 + (i - (n - 1) / 2) * 44,
      }))
    );
    const edges = [];
    for (let l = 0; l < LAYERS.length - 1; l++)
      nodes[l].forEach((a) => nodes[l + 1].forEach((b) => edges.push({ l, a, b, w: 0.25 + r() * 0.75 })));
    // a noisy, decaying training-loss curve
    const pts = Array.from({ length: EPOCHS + 1 }, (_, e) => {
      const loss = 0.9 * Math.exp(-e / 17) + 0.07 + (r() - 0.5) * 0.05 * Math.exp(-e / 60);
      return { x: 30 + (e / EPOCHS) * 470, y: 20 + (1 - Math.min(1, loss)) * 150, loss };
    });
    const d = pts.map((pt, i) => `${i ? "L" : "M"}${pt.x.toFixed(1)} ${pt.y.toFixed(1)}`).join(" ");
    return { nodes, edges, pts, d };
  }, []);

  useScrollScene(ref, (p, el) => {
    const rm = reducedMotion();
    const t = rm ? 1 : range(p, 0.05, 0.9);

    // forward pass: each layer's connections light up in turn, then repeat (training)
    const pass = (t * 3) % 1;               // three passes over the scroll
    const layerK = (l) => range(pass, l * 0.28, l * 0.28 + 0.3);
    el.querySelectorAll(".nn-edge").forEach((e) => {
      const l = Number(e.dataset.l);
      const w = Number(e.dataset.w);
      const learned = 0.3 + 0.7 * t;          // weights get "sharper" as training progresses
      e.style.opacity = String((0.08 + layerK(l) * 0.75 * w) * (t > 0 ? 1 : 0.3));
      e.style.strokeWidth = String(0.6 + w * learned * 1.6);
    });
    el.querySelectorAll(".nn-node").forEach((n) => {
      const l = Number(n.dataset.l);
      const k = l === 0 ? range(pass, 0, 0.1) : layerK(l - 1);
      n.style.setProperty("--k", k.toFixed(3));
    });

    // loss curve draws itself with an epoch counter
    const e = Math.round(t * EPOCHS);
    if (lossRef.current) lossRef.current.style.strokeDashoffset = String(1 - t);
    const pt = net.pts[e];
    const dot = el.querySelector(".loss-dot");
    dot.setAttribute("cx", pt.x); dot.setAttribute("cy", pt.y);
    dot.style.opacity = t > 0 ? 1 : 0;
    el.querySelector(".ml-epoch").textContent = `Epoch ${e} of ${EPOCHS}`;
    el.querySelector(".ml-loss").textContent = `Loss ${pt.loss.toFixed(3)}`;

    // topics highlight one by one
    const n = mlLearning.topics.length;
    el.querySelectorAll(".ml-topic").forEach((li, i) => li.classList.toggle("is-on", t >= i / n));
  });

  return (
    <section id="ml" className="ml" ref={ref}>
      <div className="ml-pin">
        <div className="ml-text">
          <ScrollTitle text="Next: training my own models" className="h-section h-section--night" />
          <p className="lede lede--night">{mlLearning.goal}</p>
          <p className="ml-now">What I&apos;m learning now</p>
          <ul className="ml-topics">
            {mlLearning.topics.map((t) => <li className="ml-topic" key={t}>{t}</li>)}
          </ul>
        </div>

        <div className="ml-visual" aria-hidden="true">
          <svg viewBox={`0 0 ${W} ${H}`} className="nn-svg">
            {net.edges.map((e, i) => (
              <line key={i} className="nn-edge" data-l={e.l} data-w={e.w.toFixed(2)} x1={e.a.x} y1={e.a.y} x2={e.b.x} y2={e.b.y} />
            ))}
            {net.nodes.map((layer, l) =>
              layer.map((n, i) => <circle key={`${l}-${i}`} className="nn-node" data-l={l} cx={n.x} cy={n.y} r="9" />)
            )}
            <text x="40" y={H - 6} className="nn-label" textAnchor="middle">Input</text>
            <text x={W - 40} y={H - 6} className="nn-label" textAnchor="middle">Output</text>
          </svg>

          <div className="loss">
            <div className="loss-head">
              <span className="ml-epoch">Epoch 0 of {EPOCHS}</span>
              <span className="ml-loss">Loss 0.970</span>
            </div>
            <svg viewBox="0 0 520 190" className="loss-svg">
              <line x1="30" y1="170" x2="500" y2="170" className="loss-axis" />
              <line x1="30" y1="10" x2="30" y2="170" className="loss-axis" />
              <path ref={lossRef} d={net.d} pathLength="1" className="loss-path" />
              <circle r="5" className="loss-dot" cx="30" cy="20" />
              <text x="500" y="186" textAnchor="end" className="nn-label">Training epochs</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
