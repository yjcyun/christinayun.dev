import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/github";
import styled from "styled-components";

const StyledPre = styled.pre`
  margin: 1rem 0;
  font-family: Consolas, Liberation Mono, Courier New, monospace;
  background-color: rgb(241, 245, 249);
  overflow-x: auto;
  padding: 1rem 1.25rem;
  line-height: 1.25rem;
`;

export const Codeblock = ({
  children: {
    props: { children, className },
  },
}) => {
  const language = className.replace(/language-/, "");

  return (
    <Highlight
      {...defaultProps}
      code={children.trim()}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <StyledPre className={className} style={style}>
          <code>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </code>
        </StyledPre>
      )}
    </Highlight>
  );
};
