import { GetArchivedProjectsMdxQuery } from "@pages/archive";
import React from "react";
import styled, { css } from "styled-components";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { device } from "@constants/device";

const hideInMobile = (props: string | undefined) => css`
  display: ${props === "desktop" || props === "mobileL"
    ? "none"
    : "table-cell"};

  @media ${device.mobileL} {
    display: ${props === "desktop" ? "none" : "table-cell"};
  }

  @media ${device.tablet} {
    display: table-cell;
  }
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 3rem;
`;

const StyledThead = styled.thead`
  background-color: var(--slate-850);
`;

const StyledTH = styled.th<{ $align?: "right"; $display?: string }>`
  text-align: ${(props) => props.$align ?? "left"};
  padding: 0.75rem 0;
  padding-right: ${(props) => (props.$align ? "2rem" : 0)};
  ${(props) => hideInMobile(props.$display)}
`;

const StyledTR = styled.tr`
  &:not(:last-child) {
    border-bottom: 1px solid var(--slate-700);
  }
`;

const StyledTD = styled.td<{ $display?: string }>`
  padding: 0.75rem 0;
  ${(props) => hideInMobile(props.$display)}
`;

const StyledTag = styled.span`
  font-size: 0.8rem;
  background: var(--slate-700);
  border-radius: 3px;
  padding: 1px 3px;

  &:not(:last-child) {
    margin-right: 5px;
  }
`;

type TableProps = {
  data: GetArchivedProjectsMdxQuery["projectsMdx"]["nodes"];
};

const Table = ({ data }: TableProps) => {
  return (
    <StyledTable>
      <StyledThead>
        <tr>
          <StyledTH style={{ paddingLeft: "1rem" }}>Name</StyledTH>
          <StyledTH $display="desktop">Stacks</StyledTH>
          <StyledTH $align="right" $display="mobileL">
            Date
          </StyledTH>
          <StyledTH $align="right" colSpan={2} style={{ textAlign: "right" }}>
            Links
          </StyledTH>
        </tr>
      </StyledThead>
      <tbody>
        {data.map(({ frontmatter, id }) => {
          const { title, tags, date, liveLink, sourceLink } = frontmatter;
          return (
            <StyledTR key={id}>
              <StyledTD style={{ paddingLeft: "1rem" }}>{title}</StyledTD>
              <StyledTD $display="desktop">
                {tags?.map((tag) => (
                  <StyledTag key={tag}>{tag}</StyledTag>
                ))}
              </StyledTD>
              <StyledTD
                style={{ textAlign: "right", paddingRight: "2rem" }}
                $display="mobileL"
              >
                {date}
              </StyledTD>
              <StyledTD style={{ paddingRight: "0.3rem" }}>
                <StyledLinks
                  href={liveLink}
                  style={{ justifyContent: "center" }}
                >
                  <FiExternalLink />
                </StyledLinks>
              </StyledTD>
              <StyledTD>
                {sourceLink && (
                  <StyledLinks href={sourceLink}>
                    <FiGithub />
                  </StyledLinks>
                )}
              </StyledTD>
            </StyledTR>
          );
        })}
      </tbody>
    </StyledTable>
  );
};

export default Table;

const StyledLinks = styled.a`
  font-size: 1.3rem;
  display: flex;
`;
