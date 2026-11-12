import { useEffect, useLayoutEffect } from "react";

export const clamp01 = (v) => Math.min(1, Math.max(0, v));
/** Remaps p from [a, b] to [0, 1]. */
export const range = (p, a, b) => clamp01((p - a) / (b - a));

export const reducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// One shared rAF-throttled scroll/resize loop for every scroll-driven section.
const subscribers = new Set();
let ticking = false;
const run = () => {
  ticking = false;
  const vh = window.innerHeight;
  const vw = window.innerWidth;
  subscribers.forEach((fn) => fn(vh, vw));
};
const request = () => {
  if (!ticking) {
    ticking = true;
    requestAnimationFrame(run);
  }
};
if (typeof window !== "undefined") {
  window.addEventListener("scroll", request, { passive: true });
  window.addEventListener("resize", request);
}

/**
 * Calls `onFrame(progress, el, vh, vw)` on every scroll frame.
 *
 * mode "pin":  0 when the element's top reaches the viewport top,
 *              1 when its bottom reaches the viewport bottom (for sticky scenes).
 * mode "pass": 0 when the element's top enters the bottom of the viewport,
 *              1 when its bottom leaves the top.
 *
 * Writes nothing itself and never re-renders React — callers set styles directly.
 */
export function useScrollScene(ref, onFrame, mode = "pin") {
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fn = (vh, vw) => {
      const r = el.getBoundingClientRect();
      const p =
        mode === "pin"
          ? clamp01(-r.top / Math.max(1, r.height - vh))
          : clamp01((vh - r.top) / (vh + r.height));
      onFrame(p, el, vh, vw);
    };
    subscribers.add(fn);
    fn(window.innerHeight, window.innerWidth);
    return () => subscribers.delete(fn);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, mode]);
}

/** Re-runs every scene after fonts/images change layout. */
export function useRelayout() {
  useEffect(() => {
    const t = setTimeout(request, 300);
    document.fonts?.ready.then(request);
    window.addEventListener("load", request);
    return () => {
      clearTimeout(t);
      window.removeEventListener("load", request);
    };
  }, []);
}
