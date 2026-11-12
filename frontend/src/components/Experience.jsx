import { useRef } from "react";
import { experience } from "../data";
import { useScrollScene, range, reducedMotion } from "../hooks";
import ScrollFade from "./ScrollFade";
import ScrollTitle from "./ScrollTitle";

export default function Experience() {
  const ref = useRef(null);
  useScrollScene(ref, (p, el) => {
    el.style.setProperty("--line", reducedMotion() ? 1 : range(p, 0.15, 0.6).toFixed(4));
  }, "pass");

  return (
    <section id="experience" className="section exp" ref={ref}>
      <ScrollTitle text="Where I've worked" />
      <ol className="exp-list">
        {experience.map((job) => (
          <ScrollFade as="li" className="exp-item" key={job.org} from={0.08} to={0.3}>
            <p className="exp-period">{job.period}</p>
            <div className="exp-body">
              <h3 className="exp-role">{job.role} at {job.org}</h3>
              <p className="exp-note">{job.note}</p>
              <ul className="exp-points">
                {job.points.map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
            </div>
          </ScrollFade>
        ))}
      </ol>
    </section>
  );
}
