import { useRef } from "react";
import { useScrollScene, range, reducedMotion } from "../hooks";

/**
 * Scrubbed reveal: opacity and offset follow the scroll position
 * (scroll back up and it rewinds), instead of a one-off timed entrance.
 */
export default function ScrollFade({ as: Tag = "div", children, className = "", from = 0.04, to = 0.22, shift = 48, ...rest }) {
  const ref = useRef(null);
  useScrollScene(ref, (p, el) => {
    const k = reducedMotion() ? 1 : range(p, from, to);
    el.style.opacity = String(0.08 + k * 0.92);
    el.style.transform = `translate3d(0, ${(1 - k) * shift}px, 0)`;
  }, "pass");
  return <Tag ref={ref} className={`scroll-fade ${className}`} {...rest}>{children}</Tag>;
}
