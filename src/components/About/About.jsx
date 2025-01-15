import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/dev.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/frontend.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Development</h3>
              <p>
                Experienced in building highly responsive, visually appealing
                web interfaces using modern frameworks like React.js and
                Next.js, ensuring seamless user experiences across devices.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/backend.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Development</h3>
              <p>
                Specialized in developing robust APIs and scalable server-side
                applications using frameworks such as Spring Boot, Node.js, and
                Django. Proficient in working with databases like PostgreSQL,
                MySQL, MongoDB, and utilizing JDBC for efficient data access and
                management.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/devops.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Cloud & DevOps Expertise</h3>
              <p>
                Proficient in containerization and orchestration with Docker and
                Kubernetes, enabling the management of scalable cloud
                deployments on AWS. Experienced in optimizing data pipelines
                with Redis and Kafka for enhanced performance, reliability, and
                scalability.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/AI.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>AI & ML Expertise</h3>
              <p>
                AI & ML Expertise Highly skilled in building AI and ML-driven
                applications, including advanced classifiers and predictive
                models trained on large datasets. Experienced in leveraging Gen
                AI and cutting-edge machine learning frameworks to solve complex
                problems and drive innovation.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
