import React from "react";
import styled from "styled-components";
import Button from "@components/ui/button";

const StyledHero = styled.div`
  background-color: var(--slate-800);
  padding: 40px;
`;

const StyledH1 = styled.h1`
  color: var(--accent);
  font-size: 4rem;
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
        My name is Christina Yun, and I am a Frontend Developer in Toronto🍁. I
        have a BSc in Biological Science and a Diploma in Veterinary Technology.
        I spend most of day studying JavaScript, playing with React, learning
        new tools, and drinking tea☕.
      </StyledDesc>
      <Button>About me</Button>
    </StyledHero>
  );
};

export default Hero;
