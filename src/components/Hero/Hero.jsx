import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Vignesh</h1>
        <p className={styles.description}>
          I’m a full-stack software engineer with 2+ years of experience
          crafting responsive front-end interfaces and scalable back-end
          systems. Proficient in <b>Java</b>, <b>Spring Boot</b>,{" "}
          <b>React.js</b>, <b>Next.js</b>,<b>Node.js</b>, <b>SQL</b>, and{" "}
          <b>MongoDB</b>, I deliver seamless user experiences and
          high-performance APIs. Skilled in <b>Docker</b>, <b>Kubernetes</b>,
          and <b>AWS</b>, I optimize workflows with <b>Redis</b> and{" "}
          <b>Kafka</b>. I’ve built advanced AI/ML-driven applications,
          leveraging <b>Gen AI</b> and large datasets to tackle complex
          challenges. Passionate about innovation and collaboration, I thrive in
          agile environments, creating impactful solutions.
        </p>
        <div class="button-container">
          <a
            href="https://drive.google.com/file/d/1nd9KrMYEFjkNxEYnNNWtsZiEGT5ja1RA/view?usp=sharing"
            className={styles.contactBtn}
          >
            Resume
          </a>
          <a href="mailto:vigneshvj53@email.com" className={styles.contactBtn}>
            Contact
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/hero.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
