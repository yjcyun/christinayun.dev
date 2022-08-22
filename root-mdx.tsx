import React from "react";
import { MDXProvider } from "@mdx-js/react";
import {
  Headings,
  Blockquote,
  Codeblock,
  InlineCode,
  ExternalLink,
} from "./src/components/mdx";

const components = {
  blockquote: Blockquote,
  pre: Codeblock,
  inlineCode: InlineCode,
  h2: Headings.h2,
  h3: Headings.h3,
  a: ExternalLink,
};

export const wrapMDX = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>;
};
