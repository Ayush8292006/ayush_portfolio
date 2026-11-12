import { useEffect, useState } from "react";
import { reducedMotion } from "../hooks";

/** Roles slide up through a one-line mask, one after another, once the intro has finished. */
export default function RoleRotator({ roles, interval = 2600 }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (reducedMotion()) return;
    let timer = 0;
    const start = () => {
      if (!document.documentElement.classList.contains("is-ready")) { timer = setTimeout(start, 150); return; }
      timer = setInterval(() => setI((n) => (n + 1) % roles.length), interval);
    };
    start();
    return () => { clearTimeout(timer); clearInterval(timer); };
  }, [roles, interval]);
  return (
    <span className="role-mask" aria-label={roles.join(", ")}>
      {roles.map((r, k) => (
        <span key={r} aria-hidden="true" className={`role-item ${k === i ? "is-in" : k === (i - 1 + roles.length) % roles.length ? "is-out" : ""}`}>{r}</span>
      ))}
    </span>
  );
}
