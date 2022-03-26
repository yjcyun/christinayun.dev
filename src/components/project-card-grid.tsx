import React from "react";
import styled from "styled-components";
import ProjectCard from "./project-card";

const StyledProjectCardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  margin-top: 2rem;
`;

const ProjectCardGrid = () => {
  const projects = [
    {
      title: "Kismet AI",
      description:
        "A Demand Side Platform SaaS project built using Hasura & React",
      liveLink: "https://kismet.ai",
    },
    {
      title: "Sports Inference",
      description:
        "NBA teams analysis and statistics built using Firebase & React",
      liveLink: "https://sportsinference.com",
    },
    {
      title: "Heather Dick",
      description: "Personal blog built using Gatsby & Strapi",
      liveLink: "https://heatherdick.ca",
    },
    {
      title: "Prince Dog Korea",
      description: "WIP - Dog adoption site",
    },
  ];

  return (
    <StyledProjectCardGrid>
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </StyledProjectCardGrid>
  );
};

export default ProjectCardGrid;
