import React from "react";

import PageTitle from "@components/page-title";
import { Section } from "@styles/shared-style";

import ProjectCardGrid from "./project-card-grid";

const Projects = () => {
  return (
    <Section>
      <PageTitle
        title="Projects"
        description={
          <>
            I do frontend stuff and this where I show my work and some other
            things. My life consists of coding and dogs. You can reach out to me
            on{" "}
            <a
              className="accent"
              href="https://github.com/yjcyun"
              rel="noopener noreferrer"
              target="_blank"
            >
              github
            </a>{" "}
            and{" "}
            <a
              className="accent"
              href="https://www.linkedin.com/in/yjcyun/"
              rel="noopener noreferrer"
              target="_blank"
            >
              linkedin
            </a>
            .
          </>
        }
      />
      <ProjectCardGrid />
    </Section>
  );
};

export default Projects;
