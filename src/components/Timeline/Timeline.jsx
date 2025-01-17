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
        "Pursuing my Master of Science in Computer Science at the University of South Florida, I have developed a strong foundation in systems, algorithms, and artificial intelligence through rigorous coursework, including Operating Systems, Computer Vision, Trustworthy AI Systems, and Security in Machine Learning. These courses have equipped me with the technical expertise and problem-solving skills to design efficient, secure, and innovative solutions for real-world challenges in computing and AI.",
      logo: usf,
    },
    {
      institution: "Malla Reddy College of Engineering and Technology",
      role: "Undergraduate Computer Science Student",
      duration: "2017-2021",
      date: "Jul, 2017 - July, 2021",
      description:
        "Completed 4-month Full Stack Developer Trainee program at Fynd Academy (Shopsense Retail Technologies Ltd.), successfully creating independent, industry-level projects using the MERN tech stack.",
      logo: mrcet,
    },
  ];

  return (
    <div>
      <h2 className={styles.title}>Education</h2>
      <div className={styles["timeline-container"]}>
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
                    <span className={styles.institution}>
                      {item.institution}
                    </span>
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
    </div>
  );
};
