import * as React from "react";
import Layout from "@components/layout/layout";
import PageTitle from "@components/page-title";
import ProjectCardGrid from "@components/projects/project-card-grid";
import About from "@components/about/about";
import Projects from "@components/projects/projects";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <About />
      <Projects />
    </Layout>
  );
};

export default IndexPage;
