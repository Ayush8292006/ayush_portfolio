import { Fragment, useRef } from "react";
import { useScrollScene, range, reducedMotion } from "../hooks";

/**
 * Heading whose letters rise into place one after another as it scrolls in.
 * Scrubbed to scroll, so it rewinds when scrolling back up.
 */
export default function ScrollTitle({ text, as: Tag = "h2", className = "h-section", from = 0.02, span = 0.2 }) {
  const ref = useRef(null);
  const words = text.split(" ");
  const total = text.replace(/ /g, "").length;

  useScrollScene(ref, (p, el) => {
    const chars = el.querySelectorAll(".ch");
    const rm = reducedMotion();
    chars.forEach((c, i) => {
      const start = from + (i / Math.max(1, total)) * span;
      const k = rm ? 1 : range(p, start, start + 0.08);
      c.style.transform = `translate3d(0, ${(1 - k) * 0.7}em, 0) rotate(${(1 - k) * 8}deg)`;
      c.style.opacity = String(k);
    });
  }, "pass");

  let n = 0;
  return (
    <Tag ref={ref} className={`scroll-title ${className}`} aria-label={text}>
      {words.map((w, wi) => (
        <Fragment key={wi}>
          <span className="w" aria-hidden="true">
            {[...w].map((ch) => <span className="ch" key={n++}>{ch}</span>)}
          </span>
          {wi < words.length - 1 && " "}
        </Fragment>
      ))}
    </Tag>
  );
}
