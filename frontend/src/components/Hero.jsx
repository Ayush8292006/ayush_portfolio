import { useEffect, useRef } from "react";
import { profile, statement } from "../data";
import { useScrollScene, range, reducedMotion } from "../hooks";
import RoleRotator from "./RoleRotator";

const Letters = ({ text, base }) =>
  [...text].map((ch, i) => <span className="lt" key={i} style={{ "--i": base + i }}>{ch}</span>);

/**
 * Cinematic pinned scene (kept short — about two screens of scrolling):
 *  push — the camera pushes in on the face, cinema bars close in, the title drifts apart
 *  a    — the shot crops down into a framed picture on the right
 *  b    — the room lights up: ink fades to concrete
 *  c    — the statement lights word by word
 * On load the lamp flickers on; film grain sits over the dark shot.
 */
export default function Hero() {
  const ref = useRef(null);
  const words = statement.split(" ");

  useScrollScene(ref, (p, el) => {
    const rm = reducedMotion();
    const push = rm ? 1 : range(p, 0, 0.3);
    const a = rm ? 1 : range(p, 0.24, 0.52);
    const b = rm ? 1 : range(p, 0.32, 0.5);
    const c = rm ? 1 : range(p, 0.5, 0.92);
    const lb = rm ? 0 : push * (1 - range(p, 0.3, 0.46));
    el.style.setProperty("--push", push.toFixed(4));
    el.style.setProperty("--a", a.toFixed(4));
    el.style.setProperty("--b", b.toFixed(4));
    el.style.setProperty("--lb", lb.toFixed(4));
    const lit = Math.round(c * words.length);
    el.querySelectorAll(".st-word").forEach((s, i) => s.classList.toggle("is-lit", i < lit));
  });

  // the shot drifts gently with the pointer
  useEffect(() => {
    if (reducedMotion() || !window.matchMedia("(pointer: fine)").matches) return;
    const el = ref.current;
    let raf = 0, tx = 0, ty = 0, x = 0, y = 0;
    const tick = () => {
      x += (tx - x) * 0.07; y += (ty - y) * 0.07;
      el.style.setProperty("--mx", x.toFixed(4));
      el.style.setProperty("--my", y.toFixed(4));
      raf = Math.abs(tx - x) + Math.abs(ty - y) > 0.001 ? requestAnimationFrame(tick) : 0;
    };
    const onMove = (e) => {
      tx = e.clientX / window.innerWidth - 0.5; ty = e.clientY / window.innerHeight - 0.5;
      if (!raf) raf = requestAnimationFrame(tick);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => { window.removeEventListener("pointermove", onMove); cancelAnimationFrame(raf); };
  }, []);

  return (
    <section id="top" className="hero" ref={ref}>
      <div className="hero-pin">
        <div className="hero-media">
          <img src={profile.deskPhoto} alt="Ayush at his desk, working late under a lamp" />
        </div>
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-leak" aria-hidden="true" />
        <div className="hero-grain" aria-hidden="true" />

        <div className="hero-copy">
          <div>
            <p className="hero-role"><RoleRotator roles={profile.roles} /></p>
            <h1 className="hero-name" aria-label={profile.name}>
              <span className="line" aria-hidden="true"><Letters text={profile.firstName} base={0} /></span>
              <span className="line line--lamp" aria-hidden="true"><Letters text={profile.lastName} base={profile.firstName.length} /></span>
            </h1>
          </div>
          <div className="hero-side">
            <p className="hero-intro">{profile.intro}</p>
            <div className="hero-actions">
              <a href="#work" className="btn btn--lamp">See my work</a>
              <a href={profile.resume} target="_blank" rel="noreferrer" className="btn btn--line">Download résumé</a>
            </div>
          </div>
        </div>

        <p className="hero-caption" aria-hidden="true">Greater Noida, late night. Another build ships.</p>
        <div className="hero-scroll" aria-hidden="true"><span>Scroll</span><i /></div>

        <div className="letterbox letterbox--top" aria-hidden="true" />
        <div className="letterbox letterbox--bottom" aria-hidden="true" />

        <p className="statement" aria-label={statement}>
          {words.map((w, i) => <span className="st-word" aria-hidden="true" key={i}>{w} </span>)}
        </p>
      </div>
    </section>
  );
}
