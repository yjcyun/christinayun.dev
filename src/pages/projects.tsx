import React from "react";

import Layout from "@components/layout/layout";
import PageTitle from "@components/ui/page-title";

import ProjectCardGrid from "@components/page/projects/project-card-grid";

const PostsPage = () => {
  return (
    <Layout>
      <PageTitle
        title="Projects"
        description="These are some of the projects that I’ve made. Open source projects have Github link so feel free to check out the source code if you like the live site."
      />
      <ProjectCardGrid all />
    </Layout>
  );
};

export default PostsPage;
