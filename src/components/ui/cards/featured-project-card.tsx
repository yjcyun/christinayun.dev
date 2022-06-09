import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const StyledCardImg = styled.img`
  width: 100%;
`;

interface FeaturedProjectCardProps {
  src: string;
  alt: string;
  to: string;
}

const FeaturedProjectCard = ({ src, alt, to }: FeaturedProjectCardProps) => {
  return (
    <Link to={to}>
      <StyledCardImg src={src} alt={alt} />
    </Link>
  );
};

export default FeaturedProjectCard;
