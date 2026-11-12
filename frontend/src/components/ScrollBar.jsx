import { useRef } from "react";
import { useScrollScene } from "../hooks";

/** Thin lamp-coloured bar at the top showing how far down the page you are. */
export default function ScrollBar() {
  const ref = useRef(null);
  const probe = useRef(null);
  useScrollScene(probe, () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (ref.current) ref.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
  }, "pass");
  return (
    <>
      <span ref={probe} style={{ position: "absolute", top: 0, height: 0 }} aria-hidden="true" />
      <div className="scrollbar" aria-hidden="true"><span ref={ref} /></div>
    </>
  );
}
