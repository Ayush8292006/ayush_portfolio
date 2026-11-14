import Nav from "./components/Nav";
import Intro from "./components/Intro";
import ScrollBar from "./components/ScrollBar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Experience from "./components/Experience";
import Toolkit from "./components/Toolkit";
import Practice from "./components/Practice";
import Contact from "./components/Contact";
import GenAI from "./components/GenAI";
import ML from "./components/ML";
import { useRelayout } from "./hooks";

export default function App() {
  useRelayout();
  return (
    <>
      <Intro />
      <ScrollBar />
      <Nav />
      <main>
        <Hero />
        <div className="night">
          <Work />
          <GenAI />
          <ML />
        </div>
        <div className="paper">
          <Experience />
          <Toolkit />
          <Practice />
        </div>
        <Contact />
      </main>
    </>
  );
}
