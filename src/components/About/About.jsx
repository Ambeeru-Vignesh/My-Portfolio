import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.titleUnderline} />
      </div>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/dev.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/frontend.png")} alt="Cursor icon" className={styles.aboutItemIcon} />
            <div className={styles.aboutItemText}>
              <h3>Frontend Development</h3>
              <p>
                Building highly responsive, visually appealing web interfaces
                using React.js and Next.js, ensuring seamless user experiences across devices.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/backend.png")} alt="Server icon" className={styles.aboutItemIcon} />
            <div className={styles.aboutItemText}>
              <h3>Backend Development</h3>
              <p>
                Robust APIs and scalable server-side apps with Spring Boot, Node.js, and Django.
                Proficient in PostgreSQL, MySQL, MongoDB, and Redis.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/devops.png")} alt="DevOps icon" className={styles.aboutItemIcon} />
            <div className={styles.aboutItemText}>
              <h3>Cloud & DevOps</h3>
              <p>
                Containerization with Docker & Kubernetes, cloud deployments on AWS (EKS, Lambda),
                and high-throughput pipelines with Kafka and Redis.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/AI.png")} alt="AI icon" className={styles.aboutItemIcon} />
            <div className={styles.aboutItemText}>
              <h3>AI & ML Expertise</h3>
              <p>
                Building intelligent systems with Gen AI, Spring AI, RAG, and Vector Databases.
                Skilled in ML classifiers and predictive models on large datasets.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
