import React from "react";
import styled, { css } from "styled-components";

type ButtonSize = "small" | "default";

interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  size?: ButtonSize;
  style?: React.CSSProperties;
}

const getButtonSize = (size: ButtonSize) => {
  switch (size) {
    case "small":
      return css`
        background: var(--dark-grayish-blue);
        padding: 5px 7px;
        border: 1px solid var(--neon-green);
        border-radius: 3px;
        color: var(--neon-green);
        font-size: 0.9rem;

        &:hover {
          box-shadow: 0px 0px 10px var(--neon-green);
        }
      `;
    default:
      return css`
        background: var(--dark-navy);
        padding: 1rem;
        border: 1px solid var(--light-cyan);
        border-radius: 5px;
        color: inherit;
        letter-spacing: 1px;
        text-transform: uppercase;

        &:hover {
          background: var(--dark-grayish-blue);
        }
      `;
  }
};

const StyledButton = styled.button<{ size: ButtonSize }>`
  ${(props) => getButtonSize(props.size)}
`;

const Button = ({
  children,
  disabled,
  size = "default",
  style,
}: ButtonProps) => {
  return (
    <StyledButton disabled={disabled} size={size} style={style}>
      {children}
    </StyledButton>
  );
};

export default Button;
