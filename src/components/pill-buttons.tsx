import React from "react";
import styled from "styled-components";

interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
}

const StyledPillButton = styled.button`
  background-color: ${(props) =>
    props.disabled ? "rgb(229 231 235)" : "white"};
  border: 1px solid #333;
  padding: 0.1rem 0.3rem;
  border-radius: 3px;
  font-size: 1rem;
  font-family: monospace;
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};

  &:not():first-of-type {
    margin-left: 0.5rem;
  }
`;

const PillButton = ({ children, disabled }: ButtonProps) => {
  return <StyledPillButton disabled={disabled}>{children}</StyledPillButton>;
};

export default PillButton;
