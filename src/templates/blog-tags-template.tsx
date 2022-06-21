import React from "react";
import { graphql, PageProps } from "gatsby";
import { FiMinus } from "react-icons/fi";

import { GetDevBlogMdxQuery } from "@pages/blog";

import Layout from "@components/layout/layout";
import BackLink from "@components/ui/back-link";
import PageTitle from "@components/ui/page-title";
import Seo from "@components/ui/seo";
import Grid from "@components/ui/grid";
import BlogCard from "@components/ui/cards/blog-card";

type GetBlogTagsQuery = {
  tag: string;
};

const BlogTagsTemplate = (
  props: PageProps<GetDevBlogMdxQuery, GetBlogTagsQuery>
) => {
  const {
    data: {
      blogMdx: { nodes: devPosts },
    },
  } = props;

  const {
    pageContext: { tag },
  } = props;

  return (
    <Layout>
      <Seo title={`Blog Posts on ${tag}`} />
      <BackLink to="blog" label="blog posts" />
      <PageTitle
        title={
          <>
            Tagged Posts <FiMinus /> "{tag}"
          </>
        }
      />
      <Grid grid={2}>
        {devPosts.map(({ frontmatter, id }) => (
          <BlogCard {...frontmatter} key={id} />
        ))}
      </Grid>
    </Layout>
  );
};

export const query = graphql`
  query GetTaggedBlogPostsMdx($tag: String) {
    blogMdx: allMdx(
      filter: {
        fileAbsolutePath: { regex: "/dev-blog/" }
        frontmatter: { tags: { eq: $tag } }
      }
    ) {
      nodes {
        frontmatter {
          description
          date(formatString: "MMMM YYYY")
          title
          slug
          tags
        }
        id
      }
    }
  }
`;

export default BlogTagsTemplate;
