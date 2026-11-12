import { useRef } from "react";
import { leetcode, education } from "../data";
import { useScrollScene, range, reducedMotion } from "../hooks";
import ScrollFade from "./ScrollFade";
import ScrollTitle from "./ScrollTitle";

export default function Practice() {
  const ref = useRef(null);
  const total = leetcode.easy + leetcode.medium + leetcode.hard;
  useScrollScene(ref, (p, el) => {
    el.style.setProperty("--fill", reducedMotion() ? 1 : range(p, 0.15, 0.45).toFixed(4));
  }, "pass");

  const parts = [
    { key: "easy", label: "Easy", n: leetcode.easy },
    { key: "medium", label: "Medium", n: leetcode.medium },
    { key: "hard", label: "Hard", n: leetcode.hard },
  ];

  return (
    <section id="practice" className="section practice" ref={ref}>
      <div className="practice-dsa">
        <ScrollTitle text={`${leetcode.solved} problems solved, in C++`} />
        <ScrollFade as="p" className="lede">Data structures and algorithms on LeetCode — dynamic programming, graphs, greedy, trees and heaps.</ScrollFade>
        <div className="dsa-bar" role="img" aria-label={`Easy ${leetcode.easy}, medium ${leetcode.medium}, hard ${leetcode.hard}`}>
          {parts.map((s) => (
            <span key={s.key} className={`dsa-seg dsa-seg--${s.key}`} style={{ flexGrow: s.n / total }} />
          ))}
        </div>
        <ul className="dsa-legend">
          {parts.map((s) => (
            <li key={s.key}><span className={`dot dot--${s.key}`} />{s.label} <strong>{s.n}</strong></li>
          ))}
        </ul>
        <a href={leetcode.url} target="_blank" rel="noreferrer" className="u-link">See my LeetCode profile</a>
      </div>

      <div className="practice-edu">
        <ScrollFade as="h2" className="h-section h-section--sm">Education</ScrollFade>
        <ol className="edu-list">
          {education.map((e) => (
            <ScrollFade as="li" className="edu-item" key={e.school} from={0.1} to={0.3} shift={24}>
              <p className="edu-period">{e.period}</p>
              <div>
                <h3 className="edu-school">{e.school}</h3>
                <p className="edu-detail">{e.detail}</p>
              </div>
            </ScrollFade>
          ))}
        </ol>
      </div>
    </section>
  );
}
