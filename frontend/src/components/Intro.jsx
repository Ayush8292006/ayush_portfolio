import { useEffect, useRef, useState } from "react";
import { reducedMotion } from "../hooks";

const WORDS = ["Frontend", "Full stack", "MERN + AI", "Ayush Kumar"];
const STEP = 760;
const OPEN_AT = 3700;   // the screen splits open onto the hero
const DONE_AT = 4800;

const markReady = () => document.documentElement.classList.add("is-ready");

/**
 * ~4.5 s cinematic first-visit intro, in the site's own dark-and-lamp palette:
 * a thin amber line draws, role words rise through a mask while a counter runs,
 * then the screen splits open onto the hero. Click / any key skips. Once per session.
 */
export default function Intro() {
  const [stage, setStage] = useState("run"); // run | open | gone
  const [word, setWord] = useState(0);
  const countRef = useRef(null);
  const barRef = useRef(null);
  const timers = useRef([]);
  const done = useRef(false);

  const open = () => {
    if (done.current) return;
    done.current = true;
    timers.current.forEach(clearTimeout);
    setStage("open");
    markReady();
    try { sessionStorage.setItem("intro-seen", "1"); } catch { /* storage unavailable */ }
    timers.current.push(setTimeout(() => setStage("gone"), DONE_AT - OPEN_AT));
  };

  useEffect(() => {
    let seen = false;
    try { seen = sessionStorage.getItem("intro-seen") === "1"; } catch { /* ignore */ }
    if (seen || reducedMotion()) { setStage("gone"); markReady(); return; }
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);
    const t = timers.current;
    WORDS.forEach((_, i) => i && t.push(setTimeout(() => setWord(i), i * STEP + 300)));
    t.push(setTimeout(open, OPEN_AT));
    const t0 = performance.now();
    let raf = requestAnimationFrame(function tick(now) {
      const k = Math.min(1, (now - t0) / (OPEN_AT - 200));
      const e = 1 - Math.pow(1 - k, 3);
      if (countRef.current) countRef.current.textContent = String(Math.round(e * 100));
      if (barRef.current) barRef.current.style.transform = `scaleX(${e})`;
      if (k < 1) raf = requestAnimationFrame(tick);
    });
    const skip = () => open();
    window.addEventListener("keydown", skip, { once: true });
    return () => { cancelAnimationFrame(raf); window.removeEventListener("keydown", skip); t.forEach(clearTimeout); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => { if (stage === "gone") document.body.style.overflow = ""; }, [stage]);
  if (stage === "gone") return null;

  return (
    <div className={`intro intro--${stage}`} onClick={open} role="presentation">
      <div className="intro-half intro-half--top" />
      <div className="intro-half intro-half--bottom" />
      <div className="intro-glow" aria-hidden="true" />
      <div className="intro-content">
        <div className="intro-words" aria-hidden="true">
          <div className="intro-mask">
            {WORDS.map((w, i) => (
              <span key={w} className={`intro-word ${i === word ? "is-in" : i < word ? "is-out" : ""} ${i === WORDS.length - 1 ? "is-name" : ""}`}>{w}</span>
            ))}
          </div>
        </div>
        <div className="intro-bar"><span ref={barRef} /></div>
        <div className="intro-foot">
          <span>Portfolio {new Date().getFullYear()}</span>
          <span className="intro-count"><span ref={countRef}>0</span>%</span>
        </div>
      </div>
      <button type="button" className="intro-skip" onClick={(e) => { e.stopPropagation(); open(); }}>Skip</button>
    </div>
  );
}
