import * as React from "react";
import Layout from "../components/layout";
import PageTitle from "../components/page-title";
import ProjectCardGrid from "../components/project-card-grid";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <PageTitle
        title="Projects"
        description={
          <>
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
          </>
        }
      />
      <ProjectCardGrid />
    </Layout>
  );
};

export default IndexPage;
