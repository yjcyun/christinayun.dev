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
          I do frontend stuff and this where I show my work and some other
          things.
        </>
      }
    >
      <ProjectCardGrid />
      <SeeMoreLink to="projects" />
    </Section>
  );
};

export default Projects;
