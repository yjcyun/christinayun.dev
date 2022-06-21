import React from "react";
import Layout from "@components/layout/layout";
import PageTitle from "@components/ui/page-title";
import Seo from "@components/ui/seo";
import SnippetCard from "@components/ui/cards/snippet-card";

const Snippets = () => {
  return (
    <Layout>
      <Seo title="Code Snippets" />
      <PageTitle title="Snippets" />
      <SnippetCard title="how to do that" slug="/how-to-do-that" />
    </Layout>
  );
};

export default Snippets;
