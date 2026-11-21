import { useRef } from "react";
import { toolLines, toolkit } from "../data";
import { useScrollScene, reducedMotion } from "../hooks";
import ScrollFade from "./ScrollFade";
import ScrollTitle from "./ScrollTitle";

export default function Toolkit() {
  const ref = useRef(null);
  useScrollScene(ref, (p, el) => {
    const k = reducedMotion() ? 0.5 : p;
    const rows = el.querySelectorAll(".tool-line");
    if (rows[0]) rows[0].style.transform = `translate3d(${-k * 38}%, 0, 0)`;
    if (rows[1]) rows[1].style.transform = `translate3d(${-38 + k * 38}%, 0, 0)`;
  }, "pass");

  return (
    <section id="toolkit" className="section toolkit" ref={ref}>
      <ScrollTitle text="What I work with" />
      <div className="tool-lines" aria-hidden="true">
        {toolLines.map((line, i) => (
          <p className="tool-line" key={i}>
            {[...line, ...line].map((t, j) => (
              <span key={j}>{t}<i className="tool-sep">/</i></span>
            ))}
          </p>
        ))}
      </div>
      <dl className="tool-grid">
        {toolkit.map((g) => (
          <ScrollFade className="tool-group" key={g.group} from={0.1} to={0.32} shift={28}>
            <dt className="tool-group-head">
              <span>{g.group}</span>
              {g.badge && <span className="tool-badge">{g.badge}</span>}
            </dt>
            <dd className="tool-pills">
              {g.items.map((item) => (
                <span className="tool-pill" key={item}>{item}</span>
              ))}
            </dd>
          </ScrollFade>
        ))}
      </dl>
    </section>
  );
}
