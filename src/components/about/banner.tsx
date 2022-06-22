import { device } from "@constants/device";
import useTheme from "@hooks/useTheme";
import React from "react";
import styled from "styled-components";

const StyledAboutBanner = styled.div`
  background-color: ${(props) => props.theme.bannerBackground};
  max-width: var(--md-width);
  margin: auto;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: -1;
  padding: 2rem;
  flex-direction: column-reverse;

  @media ${device.tabletS} {
    flex-direction: row;
  }
`;

const StyledText = styled.div``;

const StyledH1 = styled.h1`
  font-size: 2rem;
  margin-top: 2rem;

  span {
    font-family: var(--logoFF);
    color: ${(props) => props.theme.accentColor};
  }

  @media ${device.mobileS} {
    font-size: 2.5rem;
  }

  @media ${device.tabletS} {
    margin-top: 0;
  }

  @media ${device.tablet} {
    font-size: 3rem;
  }
`;

const StyledImageContainer = styled.div`
  background-color: ${(props) => props.theme.accentColor};
  border-radius: 5px;
  max-width: 200px;
  width: 100%;
  height: 200px;
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
