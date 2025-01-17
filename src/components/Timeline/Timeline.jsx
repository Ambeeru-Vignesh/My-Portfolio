import React from "react";
import styles from "./Timeline.module.css";
import usf from "../../../assets/timeline/usf.png";
import mrcet from "../../../assets/timeline/mrcet.png";

export const Timeline = () => {
  const timelineData = [
    {
      institution: "TechVibrant",
      role: "Software Engineer",
      duration: "2022-Present",
      date: "18 Jul",
      description:
        "Key contributor to global SaaS products ezSCM and iFarm, serving as lead React Native developer for ezSCM. Facilitated rapid UI improvements across web and mobile platforms, culminating in the delivery of the mobile app within 2 months. Resulted in a remarkable 70% increase in mobile efficiency and bolstered web security against unauthorized access.",
      logo: usf,
    },
    {
      institution: "FYND Academy",
      role: "Full Stack Developer Trainee",
      duration: "2023",
      date: "Feb 17-May 25",
      description:
        "Completed 4-month Full Stack Developer Trainee program at Fynd Academy (Shopsense Retail Technologies Ltd.), successfully creating independent, industry-level projects using the MERN tech stack.",
      logo: mrcet,
    },
  ];

  return (
    <div className={styles["timeline-container"]}>
      <h2 className={styles.title}>Education</h2>
      <div className={styles.timeline}>
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`${styles["timeline-item"]} ${
              index % 2 === 0 ? styles.left : styles.right
            }`}
          >
            <div className={styles["timeline-date"]}>
              <div>{item.duration}</div>
              <div>{item.date}</div>
            </div>
            <div className={styles["timeline-logo"]}>
              <img src={item.logo} alt={`${item.institution} logo`} />
            </div>
            <div className={styles["timeline-content"]}>
              <div className={styles["timeline-header"]}>
                <h3 className={styles["timeline-title"]}>
                  {item.role} @
                  <span className={styles.institution}>{item.institution}</span>
                </h3>
              </div>
              <p className={styles["timeline-description"]}>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
