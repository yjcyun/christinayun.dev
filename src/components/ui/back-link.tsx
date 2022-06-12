import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { FiArrowLeft } from "react-icons/fi";

const StyledBackLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;

  &:hover {
    text-decoration: underline;
  }
`;

type BackLinkProps = {
  to: string;
  label: string;
};

const BackLink = ({ to, label }: BackLinkProps) => {
  return (
    <StyledBackLink to={`/${to}`}>
      <FiArrowLeft />
      Back to all {label}
    </StyledBackLink>
  );
};

export default BackLink;
