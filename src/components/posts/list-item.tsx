import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { device } from "@constants/device";
import { GetDevBlogMdxQuery } from "@pages/blog";

const StyledTitle = styled.h3`
  font-weight: 600;
  font-size: 1.5rem;
`;

const StyledListItem = styled.li`
  padding: 0.7rem 0;

  &:not(:last-child) {
    border-bottom: 1px solid var(--slate-700);
  }

  &:hover ${StyledTitle} {
    color: ${(props) => props.theme.accentColor};
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  @media ${device.tabletS} {
    flex-direction: row;
  }
`;

const StyledDate = styled.div`
  color: var(--slate-500);
`;

type ListItemProps =
  GetDevBlogMdxQuery["blogMdx"]["nodes"][number]["frontmatter"];

const ListItem = ({ title, description, date, slug }: ListItemProps) => {
  return (
    <StyledListItem>
      <StyledLink to={`/posts/${slug}`}>
        <div>
          <StyledTitle>{title}</StyledTitle>
          <p>{description}</p>
        </div>
        <StyledDate>{date}</StyledDate>
      </StyledLink>
    </StyledListItem>
  );
};

export default ListItem;
