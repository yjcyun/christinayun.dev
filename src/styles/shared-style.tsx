import styled, { css } from "styled-components";

export const navList = css`
  display: flex;
  gap: 2rem;

  a {
    font-size: 1.15rem;

    &.active {
      text-decoration: underline;
    }
  }
`;

export const Section = styled.section<{ smallMargin?: boolean }>`
  margin-bottom: ${(props) => (props.smallMargin ? "3rem" : "5rem")};
`;
