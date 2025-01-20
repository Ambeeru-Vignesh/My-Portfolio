import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:vigneshvj53@email.com">vigneshvj53@email.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/vignesh-ambeeru/">
            linkedin.com/vignesh-ambeeru
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/Ambeeru-Vignesh">
            github.com/vignesh-ambeeru
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/twitter.png")} alt="twitter icon" />
          <a href="https://x.com/A_Vignesh_05"> x.com/vignesh-ambeeru</a>
        </li>
      </ul>
    </footer>
  );
};
