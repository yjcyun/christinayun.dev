import styled, { css } from "styled-components";

export const navList = css`
  display: flex;
  gap: 2rem;

  a {
    text-decoration: none;
    font-size: 1.15rem;

    &.active {
      text-decoration: underline;
    }
  }
`;
