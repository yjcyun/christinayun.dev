import React from "react";

import Layout from "@components/layout/layout";
import PageTitle from "@components/page-title";

import ProjectCardGrid from "@components/projects/project-card-grid";

const PostsPage = () => {
  return (
    <Layout>
      <PageTitle title="Projects" />
      <ProjectCardGrid all />
    </Layout>
  );
};

export default PostsPage;
