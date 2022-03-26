import * as React from "react";
import Layout from "../components/layout";
import ProjectCardGrid from "../components/project-card-grid";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <p>
        I do frontend stuff and this where I show my work and some other things.
        My life consists of coding and dogs. You can reach out to me on{" "}
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
    </Layout>
  );
};

export default IndexPage;
