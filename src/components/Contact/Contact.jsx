import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.text}>
          <div className={styles.titleWrapper}>
            <h2>Get In Touch</h2>
            <div className={styles.titleUnderline} />
          </div>
          <p>
            I'm currently open to new opportunities. Whether you have a question,
            a project idea, or just want to say hi — my inbox is always open!
          </p>
        </div>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
            <a href="mailto:vigneshambeeru9@gmail.com">vigneshambeeru9@gmail.com</a>
          </li>
          <li className={styles.link}>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
            <a
              href="https://www.linkedin.com/in/vignesh-ambeeru/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/vignesh-ambeeru
            </a>
          </li>
          <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
            <a
              href="https://github.com/Ambeeru-Vignesh"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/Ambeeru-Vignesh
            </a>
          </li>
          <li className={styles.link}>
            <img src={getImageUrl("contact/twitter.png")} alt="X / Twitter icon" />
            <a
              href="https://x.com/A_Vignesh_05"
              target="_blank"
              rel="noopener noreferrer"
            >
              x.com/A_Vignesh_05
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.divider} />
      <div className={styles.footerNote}>
        <p>
          Made with <span className={styles.heart}>❤</span> by{" "}
          <strong>Vignesh Ambeeru</strong>
        </p>
      </div>
    </footer>
  );
};
