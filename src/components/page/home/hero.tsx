import React from "react";
import styled from "styled-components";
import Button from "@components/ui/button";
import { device } from "@constants/device";
import { Link } from "gatsby";

const StyledHero = styled.div`
  background-color: var(--slate-800);
  padding: 1rem;

  @media ${device.tablet} {
    padding: 4rem;
  } ;
`;

const StyledH1 = styled.h1`
  color: var(--accent);
  font-size: 2.5rem;

  @media ${device.tablet} {
    font-size: 4rem;
  }
`;

const StyledDesc = styled.p`
  margin-top: 1.5rem;
  margin-bottom: 2rem;
  max-width: 600px;
  color: var(--slate-400);
`;

const Hero = () => {
  return (
    <StyledHero>
      <StyledH1>Christina Yujeong Yun</StyledH1>
      <StyledDesc>
        My name is Christina Yun, and I am a frontend developer based in
        Toronto. In my free time, I continue my studies in JavaScript, learn
        backend and AWS. My goal is to write useful apps and continue making
        beautiful websites while expanding my knowledge in software engineering.
      </StyledDesc>
      <Link to="/about">
        <Button>About me</Button>
      </Link>
    </StyledHero>
  );
};

export default Hero;
