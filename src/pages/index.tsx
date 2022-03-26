import * as React from "react";
import Layout from "../components/layout";
import ProjectCard from "../components/project-card";
import ProjectCardGrid from "../components/project-card-grid";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <main>
        <p>
          I do frontend stuff and this where I show my work and some other
          things. My life consists of coding and dogs. You can reach out to me
          on{" "}
          <a href="" className="accent">
            github
          </a>{" "}
          and{" "}
          <a href="" className="accent">
            linkedin
          </a>
          .
        </p>
        <ProjectCardGrid />
      </main>
    </Layout>
  );
};

export default IndexPage;
