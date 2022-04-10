import React from "react";
import { graphql, PageProps } from "gatsby";

import Layout from "@components/layout/layout";
import List from "@components/posts/list";

import PageTitle from "@components/page-title";
import { HomePostListQuery } from "@graphql-types";
import { Section } from "@styles/shared-style";

const Posts = (props: HomePostListQuery) => {
  return (
    <Section>
      <PageTitle
        title="Posts"
        description="These are components I've created and some snippets I want to keep
        around for future reference."
      />
      <List {...props} />
    </Section>
  );
};

export default Posts;
