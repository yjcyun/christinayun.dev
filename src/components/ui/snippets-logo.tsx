import React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";

const StyledImgContainer = styled.div`
  background: ${({ theme }) => theme.logo};
  border-radius: 50%;
  padding: 0.5rem;
`;

type SnippetsLogoProps = {
  image: ImageDataLike;
  alt: string;
  size?: "small" | "large";
};

const SnippetsLogo = ({ image, alt, size = "large" }: SnippetsLogoProps) => {
  return (
    <StyledImgContainer>
      <GatsbyImage
        image={getImage(image)!}
        alt={alt!}
        style={size === "small" ? { width: "30px" } : undefined}
      />
    </StyledImgContainer>
  );
};

export default SnippetsLogo;
