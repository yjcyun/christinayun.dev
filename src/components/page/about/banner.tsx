import React from "react";
import styled from "styled-components";

const StyledAboutBanner = styled.div`
  background-color: var(--slate-000);
  width: var(--md-width);
  margin: auto;
  border-radius: 10px;
  display: flex;
  position: relative;
`;

const StyledText = styled.div`
  padding: 4rem;
`;

const StyledH1 = styled.h1`
  font-size: 3rem;

  span {
    font-family: var(--logoFF);
    color: var(--accent);
  }
`;
const StyledImageContainer = styled.div`
  width: 350px;
  height: 350px;
  background-color: var(--accent);
  border-radius: 5px;
  position: absolute;
  right: 2rem;
  top: 2rem;
`;
const AboutBanner = () => {
  return (
    <StyledAboutBanner>
      <StyledText>
        <StyledH1>
          <span>C</span>hristina
          <br />
          <span>Y</span>ujeong
          <br />
          <span>Y</span>un
        </StyledH1>
      </StyledText>
      <StyledImageContainer></StyledImageContainer>
    </StyledAboutBanner>
  );
};

export default AboutBanner;
