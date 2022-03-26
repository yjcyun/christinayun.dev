import React from "react";
import styled from "styled-components";

interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
}

const StyledButton = styled.button`
  background-color: ${(props) =>
    props.disabled ? "rgb(229 231 235)" : "white"};
  border: 1px solid #333;
  padding: 0.5rem 0.75rem;
  border-radius: 3px;
  font-size: 1rem;
  font-family: monospace;
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};

  &:first-of-type {
    margin-right: 0.5rem;
  }
`;

const Button = ({ children, disabled }: ButtonProps) => {
  return <StyledButton disabled={disabled}>{children}</StyledButton>;
};

export default Button;
