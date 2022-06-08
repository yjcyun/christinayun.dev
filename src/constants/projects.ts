import kismet from "@images/projects/kismet.png";
import sportsInference from "@images/projects/sports-inference.png";
import heatherDick from "@images/projects/heather-dick.png";
import React from "react";

export const projects = [
  {
    title: "Kismet AI",
    description:
      "A Demand Side Platform SaaS project built using Hasura & React",
    liveLink: "https://kismet.ai",
    thumbnail: kismet,
    featured: true,
    tags: ["React", "Hasura", "GraphQL"],
  },
  {
    title: "Sports Inference",
    description:
      "NBA teams analysis and statistics built using Firebase & React",
    liveLink: "https://sportsinference.com",
    thumbnail: sportsInference,
    featured: true,
    tags: ["React", "Firebase"],
  },
  {
    title: "Heather Dick",
    description: "Personal blog built using Gatsby & Strapi",
    liveLink: "https://heatherdick.ca",
    sourceLink: "https://github.com/yjcyun/heather_dick_portfolio",
    thumbnail: heatherDick,
    featured: true,
    tags: ["Gatsby", "Stripe"],
  },
];
