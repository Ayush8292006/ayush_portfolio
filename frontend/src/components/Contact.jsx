import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { profile, links } from "../data";
import { useScrollScene, range, reducedMotion } from "../hooks";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const empty = { name: "", email: "", message: "" };

export default function Contact() {
  const ref = useRef(null);
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  // The lamp goes off again: concrete fades back to ink as the section arrives
  useScrollScene(ref, (p, el) => {
    el.style.setProperty("--dark", reducedMotion() ? 1 : range(p, 0.02, 0.16).toFixed(4));
  }, "pass");

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      const body = encodeURIComponent(`${form.message}\n\n${form.name} (${form.email})`);
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent("Hello from your portfolio")}&body=${body}`;
      return;
    }
    setStatus("sending");
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: form.name, from_email: form.email, subject: "Portfolio message", message: form.message, to_email: profile.email,
      }, PUBLIC_KEY);
      setStatus("sent");
      setForm(empty);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="contact-inner">
        <h2 className="contact-ask">Have a role or a project in mind?</h2>
        <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a>

        <div className="contact-grid">
          <div className="contact-more">
            <p>Or call <a className="u-link" href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>. I&apos;m based in {profile.location} and reply within a day.</p>
            <ul className="contact-links">
              {links.map((l) => (
                <li key={l.label}><a className="u-link" href={l.href} target="_blank" rel="noreferrer">{l.label}</a></li>
              ))}
              <li><a className="u-link" href={profile.resume} target="_blank" rel="noreferrer">Résumé (PDF)</a></li>
            </ul>
          </div>

          <form className="contact-form" onSubmit={onSubmit}>
            <label>
              <span>Your name</span>
              <input name="name" value={form.name} onChange={onChange} required autoComplete="name" />
            </label>
            <label>
              <span>Your email</span>
              <input type="email" name="email" value={form.email} onChange={onChange} required autoComplete="email" />
            </label>
            <label className="span-2">
              <span>Message</span>
              <textarea name="message" rows="4" value={form.message} onChange={onChange} required />
            </label>
            <div className="span-2 form-foot">
              <button type="submit" className="btn btn--lamp" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : status === "sent" ? "Message sent" : "Send message"}
              </button>
              {status === "sent" && <p className="form-note">Thanks — I&apos;ll reply within a day.</p>}
              {status === "error" && <p className="form-note form-note--error">The message didn&apos;t send. Email me directly at {profile.email}.</p>}
            </div>
          </form>
        </div>

        <footer className="footer">
          <p>© {new Date().getFullYear()} {profile.name}. Designed and built by me in React.</p>
          <a href="#top" className="u-link">Back to top</a>
        </footer>
      </div>
    </section>
  );
}
