import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

import { device } from "@constants/device";
import useActiveId from "@hooks/useActiveId";

interface TableOfContentsProps {
  headings: { depth: number; value: string }[];
}

const StyledSticky = styled.nav`
  display: none;
  position: sticky;
  max-width: 20rem;
  top: 4rem;
  border: var(--border);
  padding: 1rem;

  @media ${device.laptopM} {
    display: block;
  }
`;

const StyledHeadingUl = styled.ul`
  margin-top: 1rem;
`;

const StyledHeadingLi = styled.li`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  letter-spacing: normal;
`;

const getHeadingDepth = (depth: number) => {
  switch (depth) {
    case 2:
      return "0px";
    case 3:
      return "1rem";
    case 4:
      return "2rem";
  }
};

const StyledLink = styled(Link)<{ $isActive: boolean; $depth: number }>`
  color: ${(props) => (props.$isActive ? "var(--accent)" : "inherit")};
  margin-left: ${(props) => getHeadingDepth(props.$depth)};
`;

const TableOfContents = ({ headings }: TableOfContentsProps) => {
  const formatUrl = (value: string) => value.replace(/\s+/g, "-").toLowerCase();

  const renderHeadings = (
    items: TableOfContentsProps["headings"],
    activeId: string
  ) => {
    return (
      <StyledHeadingUl>
        {items.map(({ value, depth }) => {
          const url = `#${formatUrl(value)}`;

          return (
            <StyledHeadingLi key={value}>
              <StyledLink
                to={url}
                $isActive={activeId === formatUrl(value)}
                $depth={depth}
              >
                {value}
              </StyledLink>
            </StyledHeadingLi>
          );
        })}
      </StyledHeadingUl>
    );
  };

  const getIds = (items: TableOfContentsProps["headings"]) => {
    return items.reduce((acc: string[], item) => {
      const url = formatUrl(item.value);

      acc.push(url);

      return acc;
    }, []);
  };

  const idList = getIds(headings);
  const activeId = useActiveId(idList);

  return (
    <aside>
      <StyledSticky>
        <h2>Table of Contents</h2>
        {renderHeadings(headings, activeId)}
      </StyledSticky>
    </aside>
  );
};

export default TableOfContents;
