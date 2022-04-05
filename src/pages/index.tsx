import * as React from "react";
import Layout from "../components/layout/layout";
import PageTitle from "../components/page-title";
import ProjectCardGrid from "../components/projects/project-card-grid";

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
    </Layout>
  );
};

export default IndexPage;
