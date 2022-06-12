import React from "react";
import { graphql, PageProps } from "gatsby";
import { FiMinus } from "react-icons/fi";

import Layout from "@components/layout/layout";
import BackLink from "@components/ui/back-link";
import PageTitle from "@components/ui/page-title";
import PostsGrid from "@components/page/posts/posts-grid";
import { GetDevBlogMdxQuery } from "@pages/blog";

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
      <BackLink to="blog" label="blog posts" />
      <PageTitle
        title={
          <>
            Tagged Posts <FiMinus /> "{tag}"
          </>
        }
      />
      <PostsGrid data={devPosts} />
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
