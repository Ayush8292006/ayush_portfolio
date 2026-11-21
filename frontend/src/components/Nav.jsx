import { profile } from "../data";

export default function Nav() {
  return (
    <header className="nav">
      <a href="#top" className="nav-name">{profile.name}</a>
      <nav className="nav-links" aria-label="Sections">
        <a href="#work">Work</a>
        <a href="#ai" className="hide-sm">AI</a>
        <a href="#experience" className="hide-sm">Experience</a>
        <a href="#toolkit" className="hide-sm">Skills</a>
        <a href="#contact">Contact</a>
        <a href={profile.resume} target="_blank" rel="noreferrer">Résumé</a>
      </nav>
    </header>
  );
}
