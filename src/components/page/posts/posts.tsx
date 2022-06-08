import React from "react";
import { Link } from "gatsby";

import Section from "@components/section-wrapper";
import List from "@components/posts/list";

import { HomePostListQuery } from "@graphql-types";
import SeeMoreLink from "@components/see-more-link";

const Posts = (props: HomePostListQuery) => {
  return (
    <Section
      title="Posts"
      description="These are components I've created and some snippets I want to keep
    around for future reference."
    >
      <List {...props} />
    </Section>
  );
};

export default Posts;
