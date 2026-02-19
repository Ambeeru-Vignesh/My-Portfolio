import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <p className={styles.greeting}>Hello, World 👋</p>
        <h1 className={styles.title}>I'm Vignesh Ambeeru</h1>
        <p className={styles.description}>
          Senior Full-Stack Engineer with 5 years of experience building secure, scalable enterprise applications.
          Proficient in <b>Java</b>, <b>Spring Boot</b>, <b>Python</b>, <b>Node.js</b>, <b>React.js</b>, and <b>Angular</b>.
          I specialize in <b>Generative AI</b>, <b>RAG</b>, and <b>Vector Databases</b>, and I architect cloud-native systems on <b>AWS</b> with <b>Docker</b>, <b>Kubernetes</b>, <b>Kafka</b>, and <b>Redis</b>.
        </p>
        <div className={styles.buttonContainer}>
          <a
            href="https://drive.google.com/file/d/1RZbskDmHWJAmvmtKXZbKtJ7Hf5hI6Z7L/view?usp=drive_link"
            className={styles.contactBtn}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
          <a href="mailto:vigneshambeeru9@gmail.com" className={styles.contactBtnOutline}>
            Contact Me
          </a>
        </div>
      </div>
      <div className={styles.heroImgWrapper}>
        <img
          src={getImageUrl("hero/hero.png")}
          alt="Hero image of me"
          className={styles.heroImg}
        />
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
