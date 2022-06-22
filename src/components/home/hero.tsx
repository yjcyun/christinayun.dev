import React from "react";
import styled from "styled-components";

import { device } from "@constants/device";

const StyledHero = styled.div`
  margin-bottom: 5rem;
`;

const StyledH1 = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 2.5rem;

  @media ${device.tablet} {
    font-size: 3.5rem;
  }
`;

const StyledDesc = styled.p`
  margin-top: 1.5rem;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.text};
  font-size: 1.1rem;

  @media ${device.tablet} {
    font-size: 1.3rem;
  }
`;

const Hero = () => {
  return (
    <StyledHero>
      <StyledH1>Christina Yujeong Yun</StyledH1>
      <StyledDesc>
        I am a frontend developer based in Toronto. In my free time, I continue
        my studies in JavaScript, learn backend and AWS. My goal is to write
        useful apps and continue making beautiful websites while expanding my
        knowledge in software engineering.
      </StyledDesc>
    </StyledHero>
  );
};

export default Hero;
