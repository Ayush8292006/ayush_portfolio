import { useRef } from "react";
import { projects } from "../data";
import { useScrollScene } from "../hooks";
import ScrollTitle from "./ScrollTitle";

const isDesktop = () => window.matchMedia("(min-width: 960px)").matches;
const domain = (url) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");

/**
 * Pinned horizontal gallery on every screen size: scrolling down moves the projects sideways,
 * and each screenshot sits in a browser window that swings into place as it reaches the centre.
 */
export default function Work() {
  const sceneRef = useRef(null);
  const trackRef = useRef(null);
  const barRef = useRef(null);
  const countRef = useRef(null);
  const size = useRef({ key: "", dist: 0 });

  useScrollScene(sceneRef, (p, el, vh, vw) => {
    const track = trackRef.current;
    if (!track) return;
    const wide = isDesktop();
    // the section is as tall as the sideways distance, so scrolling down moves the row sideways
    const key = `${vw}x${vh}`;
    if (size.current.key !== key) {
      const dist = Math.max(0, track.scrollWidth - vw);
      size.current = { key, dist };
      el.style.height = `${dist + vh}px`;
    }
    track.style.transform = `translate3d(${-p * size.current.dist}px, 0, 0)`;
    if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;

    let current = 0;
    track.querySelectorAll(".work-panel").forEach((panel, i) => {
      const r = panel.getBoundingClientRect();
      // -1 … 0 … 1: how far the panel is from the centre of the screen
      const off = Math.max(-1, Math.min(1, (r.left + r.width / 2 - vw / 2) / vw));
      const a = Math.abs(off);
      const browser = panel.querySelector(".browser");
      const ghost = panel.querySelector(".work-ghost");
      const text = panel.querySelector(".work-text");
      if (browser) {
        browser.style.transform = wide
          ? `perspective(1400px) rotateY(${off * -22}deg) rotateZ(${off * -2}deg) scale(${1 - a * 0.14})`
          : `perspective(900px) rotateY(${off * -16}deg) scale(${1 - a * 0.1})`;
      }
      if (ghost) {
        ghost.style.transform = `translate3d(${off * 24}%, 0, 0)`;
        ghost.style.opacity = String(0.6 * (1 - Math.min(1, a * 1.8)));
      }
      if (text) {
        text.style.opacity = String(1 - Math.min(1, a * (wide ? 1.5 : 1.3)));
        text.style.transform = `translate3d(${off * (wide ? 50 : 30)}px, 0, 0)`;
      }
      if (r.left < vw * 0.5) current = i;
    });
    if (countRef.current) countRef.current.textContent = `${current + 1} / ${projects.length}`;
  });

  return (
    <section id="work" className="work" ref={sceneRef}>
      <div className="work-pin">
        <div className="work-track" ref={trackRef}>
          <div className="work-intro">
            <ScrollTitle text="Things I've built" from={0} span={0.12} />
            <p className="lede">Four production MERN stack and GenAI projects, all live and deployed. Keep scrolling to move through them.</p>
          </div>
          {projects.map((p, idx) => (
            <article className="work-panel" key={p.title} style={{ "--accent": p.accent }}>
              <span className="work-ghost" aria-hidden="true">{p.title}</span>
              <div className="work-visual">
                <div className="work-glow" aria-hidden="true" />
                <a className="browser" href={p.live} target="_blank" rel="noreferrer" aria-label={`Open ${p.title} live`}>
                  <span className="browser-bar">
                    <span className="browser-dots"><i /><i /><i /></span>
                    <span className="browser-url">{domain(p.live)}</span>
                  </span>
                  <img src={p.image} alt={`Screenshot of ${p.title}`} loading="lazy" />
                </a>
              </div>
              <div className="work-text">
                <p className="work-subtitle">0{idx + 1} · {p.subtitle}</p>
                <h3 className="work-title">{p.title}</h3>
                <p className="work-what">{p.what}</p>
                <p className="work-detail">{p.detail}</p>
                {p.highlights && (
                  <ul className="work-highlights">
                    {p.highlights.map((h) => <li key={h}>{h}</li>)}
                  </ul>
                )}
                <ul className="work-stack">
                  {p.stack.split(", ").map((t) => <li key={t}>{t}</li>)}
                </ul>
                <div className="work-links">
                  <a href={p.live} target="_blank" rel="noreferrer" className="btn btn--ink">Open live site ↗</a>
                  <a href={p.code} target="_blank" rel="noreferrer" className="u-link">View source code ↗</a>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="work-progress" aria-hidden="true">
          <span className="work-count" ref={countRef}>1 / {projects.length}</span>
          <span className="work-bar"><span ref={barRef} /></span>
        </div>
      </div>
    </section>
  );
}
