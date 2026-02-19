import React from "react";
import styles from "./Timeline.module.css";
import usf from "../../../assets/timeline/usf.png";
import mrcet from "../../../assets/timeline/mrcet.png";

export const Timeline = () => {
  const timelineData = [
    {
      institution: "University Of South Florida",
      role: "Masters of Science in Computer Science",
      duration: "2023-2025",
      date: "Aug, 2023 - Aug, 2025",
      description:
        "Pursuing my Master of Science in Computer Science at the University of South Florida, I have developed a strong foundation in systems, algorithms, and artificial intelligence through rigorous coursework, including Operating Systems, Computer Architecture, Computer Vision, Trustworthy AI Systems, and Security in Machine Learning. These courses have equipped me with the technical expertise and problem-solving skills to design efficient, secure, and innovative solutions for real-world challenges in computing and AI.",
      logo: usf,
    },
    {
      institution:
        "Malla Reddy College of Engineering and Technology (Affiliated to JNTUH)",
      role: "Bachelor of Technology in Computer Science and Engineering",
      duration: "2017-2021",
      date: "July, 2017 - July, 2021",
      description:
        "I graduated with First Class with Distinction, building a solid foundation in core computer science disciplines. During my undergraduate studies, I excelled in key areas such as Machine Learning, Cloud Computing, Artificial Intelligence, Distributed Systems, Data Structures and Algorithms. My academic journey was enriched by practical experience through hands-on projects, lab work, and seminars, equipping me with the skills and analytical mindset needed to tackle real-world challenges and succeed in advanced research and development.",
      logo: mrcet,
    },
  ];

  return (
    <div>
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>Education</h2>
        <div className={styles.titleUnderline} />
      </div>
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
