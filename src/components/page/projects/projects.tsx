import React from "react";
import { Link } from "gatsby";

import Section from "@components/section-wrapper";

import ProjectCardGrid from "./project-card-grid";
import SeeMoreLink from "@components/see-more-link";

const Projects = () => {
  return (
    <Section
      title="Projects"
      description={
        <>
          Here's a glimpse of some projects I worked on. Personal projects can
          all be found on my{" "}
          <a
            className="link"
            href="https://github.com/yjcyun"
            rel="noopener noreferrer"
            target="_blank"
          >
            Github
          </a>
          .
        </>
      }
    >
      <ProjectCardGrid />
    </Section>
  );
};

export default Projects;
