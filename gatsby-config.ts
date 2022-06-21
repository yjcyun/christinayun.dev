import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Christina's Digital Space`,
    description: `Christina Yun is a JavaScript developer who works on creating useful web applications. She's passionate about design, coding, and learning.`,
    siteUrl: `https://www.christinayun.dev`,
    titleTemplate: `%s - Christina Yujeong Yun`,
    twitterUsername: `@xtina_yun`,
    image: `src/images/main-screenshot.png`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: { icon: "./src/images/android-chrome-512x512.png" },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: "./src/contents/dev-blog",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projects",
        path: "./src/contents/projects",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "snippets",
        path: "./src/contents/snippets",
      },
    },
    "gatsby-plugin-graphql-codegen",
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [`gatsby-remark-autolink-headers`],
        plugins: [`gatsby-remark-autolink-headers`],
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@components": "src/components",
          "@constants": "src/constants",
          "@graphql-types": "graphql-types",
          "@hooks": "src/hooks",
          "@images": "src/images",
          "@pages": "src/pages",
          "@posts": "content/posts",
          "@src": "src",
          "@styles": "src/styles",
          "@templates": "src/templates",
        },
        extensions: ["tsx", "ts", "png"],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `plaster`,
          `poppins\:400,600,700`,
          `spartan\:400,800`,
          `oxygen mono`,
        ],
        display: "swap",
      },
    },
  ],
};

export default config;
