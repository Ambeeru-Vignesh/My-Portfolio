import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import Particle from "./components/Particles/Particle";
import { Projects } from "./components/Projects/Projects";
import { Timeline } from "./components/Timeline/Timeline";

function App() {
  return (
    <div className={styles.App}>
      <Particle />
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
