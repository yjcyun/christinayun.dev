import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { Headings, Blockquote, Codeblock } from "./src/components/mdx";

const components = {
  h2: Headings.h2,
  blockquote: Blockquote,
  pre: Codeblock,
};

export const wrapMDX = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>;
};
