import React from "react";
import styled from "styled-components";

const StyledSection = styled.div`
  margin: 3rem 0;
`;

const StyledH2 = styled.h2`
  color: var(--accent);
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const StyledP = styled.p`
  font-size: 1.2rem;
  line-height: 2;
  margin: 1.5rem 0;
  color: var(--slate-400);
`;

const StyledUl = styled.ul`
  margin-left: 2rem;
`;

const StyledLi = styled.li`
  font-size: 1.2rem;
  margin: 5px 0;
  color: var(--slate-400);
  list-style: disc;
`;

type SectionProps = {
  title: string;
  paragraphs?: string[];
  list?: string[];
};

const Section = ({ title, paragraphs, list }: SectionProps) => {
  return (
    <StyledSection>
      <StyledH2>{title}</StyledH2>
      {paragraphs?.map((para) => (
        <StyledP>{para}</StyledP>
      ))}
      {list && (
        <StyledUl>
          {list?.map((li) => (
            <StyledLi key={li}>{li}</StyledLi>
          ))}
        </StyledUl>
      )}
    </StyledSection>
  );
};

export default Section;
