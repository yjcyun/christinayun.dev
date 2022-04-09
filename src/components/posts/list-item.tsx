import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { device } from "@constants/device";

interface ListItemProps {
  title: string;
  date?: any;
  slug?: string | null | undefined;
}

const StyledListItem = styled.article`
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 0.7rem 0;
  color: var(--light-cyan);

  &:not(:last-child) {
    border-bottom: var(--border);
  }

  a:hover {
    color: var(--neon-green);
  }

  @media ${device.tabletS} {
    flex-direction: row;
  }
`;

const ListItem = ({ title, date, slug }: ListItemProps) => {
  return (
    <StyledListItem>
      <Link to={`/posts/${slug}`}>{title}</Link>
      <div>{date}</div>
    </StyledListItem>
  );
};

export default ListItem;
