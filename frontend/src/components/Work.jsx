import { useRef } from "react";
import { projects } from "../data";
import { useScrollScene } from "../hooks";
import ScrollTitle from "./ScrollTitle";

const isDesktop = () => window.matchMedia("(min-width: 960px)").matches;
const domain = (url) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");

/**
 * Pinned horizontal gallery on desktop: scrolling down moves the projects sideways,
 * each screenshot sits in a browser window that swings into place as it reaches the centre.
 * On small screens it's a vertical list where each window tilts in as you scroll.
 */
export default function Work() {
  const sceneRef = useRef(null);
  const trackRef = useRef(null);
  const barRef = useRef(null);
  const countRef = useRef(null);
  const size = useRef({ vw: 0, dist: 0 });

  useScrollScene(sceneRef, (p, el, vh, vw) => {
    const track = trackRef.current;
    if (!track) return;
    const desktop = isDesktop();
    if (!desktop) {
      if (size.current.vw !== -1) {
        el.style.height = "";
        track.style.transform = "";
        size.current.vw = -1;
      }
    } else {
      if (size.current.vw !== vw) {
        const dist = Math.max(0, track.scrollWidth - vw);
        size.current = { vw, dist };
        el.style.height = `${dist + vh}px`;
      }
      track.style.transform = `translate3d(${-p * size.current.dist}px, 0, 0)`;
      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
    }

    let current = 0;
    track.querySelectorAll(".work-panel").forEach((panel, i) => {
      const r = panel.getBoundingClientRect();
      // -1 … 0 … 1: how far the panel is from the centre of the screen
      const off = desktop
        ? Math.max(-1, Math.min(1, (r.left + r.width / 2 - vw / 2) / vw))
        : Math.max(-1, Math.min(1, (r.top + r.height / 2 - vh / 2) / vh));
      const browser = panel.querySelector(".browser");
      const ghost = panel.querySelector(".work-ghost");
      const text = panel.querySelector(".work-text");
      const a = Math.abs(off);
      if (browser) {
        browser.style.transform = desktop
          ? `perspective(1400px) rotateY(${off * -22}deg) rotateZ(${off * -2}deg) scale(${1 - a * 0.14})`
          : `perspective(1000px) rotateX(${off * 18}deg) scale(${1 - a * 0.08})`;
      }
      if (ghost) {
        ghost.style.transform = `translate3d(${off * (desktop ? 24 : 0)}%, ${desktop ? 0 : off * 40}px, 0)`;
        ghost.style.opacity = String(0.6 * (1 - Math.min(1, a * 1.8)));
      }
      if (text) {
        text.style.opacity = desktop ? String(1 - Math.min(1, a * 2.4)) : "1";
        text.style.transform = `translate3d(${desktop ? off * 50 : 0}px, ${desktop ? 0 : a * 40}px, 0)`;
      }
      if (desktop && r.left < vw * 0.5) current = i;
    });
    if (countRef.current) countRef.current.textContent = `${current + 1} / ${projects.length}`;
  });

  return (
    <section id="work" className="work" ref={sceneRef}>
      <div className="work-pin">
        <div className="work-track" ref={trackRef}>
          <div className="work-intro">
            <ScrollTitle text="Things I've built" from={0} span={0.12} />
            <p className="lede">Five MERN and AI projects, all live. Open them, try them, read the code.</p>
          </div>
          {projects.map((p) => (
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
                <h3 className="work-title">{p.title}</h3>
                <p className="work-what">{p.what}</p>
                <p className="work-detail">{p.detail}</p>
                <ul className="work-stack">
                  {p.stack.split(", ").map((t) => <li key={t}>{t}</li>)}
                </ul>
                <div className="work-links">
                  <a href={p.live} target="_blank" rel="noreferrer" className="btn btn--ink">Open live site</a>
                  <a href={p.code} target="_blank" rel="noreferrer" className="u-link">Read the code</a>
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
