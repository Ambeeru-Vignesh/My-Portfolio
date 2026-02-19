import React from "react";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import GitHubCalendar from "react-github-calendar";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.titleUnderline} />
      </div>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
      <div className={styles.contributions}>
        <h1>GitHub Contributions</h1>
        <GitHubCalendar
          username="Ambeeru-Vignesh"
          blockSize={17}
          blockMargin={4}
          fontSize={15}
        />
      </div>
    </section>
  );
};
