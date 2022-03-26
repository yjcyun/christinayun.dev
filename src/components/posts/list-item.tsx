import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { device } from "../../constants/device";

interface ListItemProps {
  title: string;
  date?: any;
}

const StyledListItem = styled.article`
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column-reverse;
  margin-bottom: 0.75rem;

  a:hover {
    color: var(--accent);
    font-weight: bold;
  }

  @media ${device.tabletS} {
    flex-direction: row;
  }
`;

const ListItem = ({ title, date }: ListItemProps) => {
  return (
    <StyledListItem>
      <Link to={"/"}>{title}</Link>
      <div>{date}</div>
    </StyledListItem>
  );
};

export default ListItem;
