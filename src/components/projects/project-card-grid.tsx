import React from "react";
import styled from "styled-components";

import ProjectCard from "./project-card";
import kismet from "@images/projects/kismet.png";

const StyledProjectCardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  margin-top: 3rem;
`;

const ProjectCardGrid = () => {
  const projects = [
    {
      title: "Kismet AI",
      description:
        "A Demand Side Platform SaaS project built using Hasura & React",
      liveLink: "https://kismet.ai",
      thumbnail: kismet,
    },
    {
      title: "Sports Inference",
      description:
        "NBA teams analysis and statistics built using Firebase & React",
      liveLink: "https://sportsinference.com",
      thumbnail: "",
    },
    {
      title: "Heather Dick",
      description: "Personal blog built using Gatsby & Strapi",
      liveLink: "https://heatherdick.ca",
      sourceLink: "https://github.com/yjcyun/heather_dick_portfolio",
      thumbnail: "",
    },
    {
      title: "Prince Dog Korea",
      description: "WIP - Dog adoption site",
      thumbnail: "",
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
