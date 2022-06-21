import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/palenight";
import styled from "styled-components";

const StyledPre = styled.pre`
  margin: 1rem 0;
  font-family: Consolas, Liberation Mono, Courier New, monospace;
  background-color: var(--slate-700);
  overflow-x: auto;
  padding: 1rem 1.25rem;
  line-height: 1.7rem;
  font-size: 1.1rem;
`;

export const StyledLines = styled.div`
  display: table-row;
`;

export const StyledLineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1.3rem;
  user-select: none;
  opacity: 0.5;
`;

export const StyledLineContent = styled.span`
  display: table-cell;
  width: 100%;
`;

export const Codeblock = ({ children }) => {
  const className = children.props.className;
  const language = className.replace(/language-/, "");

  return (
    <Highlight
      {...defaultProps}
      code={children.props.children.trim()}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <StyledPre className={className} style={style}>
          <code>
            {tokens.map((line, i) => (
              <StyledLines {...getLineProps({ line, key: i })}>
                <StyledLineNo>{i + 1}</StyledLineNo>
                <StyledLineContent>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </StyledLineContent>
              </StyledLines>
            ))}
          </code>
        </StyledPre>
      )}
    </Highlight>
  );
};
