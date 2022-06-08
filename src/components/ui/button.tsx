import React from "react";
import styled, { css } from "styled-components";

type ButtonSize = "pill" | "default";
type ButtonType = "primary" | "secondary" | "tertiary" | "pill";
type ButtonProps = {
  bgColor?: string;
  children: React.ReactNode;
  color?: string;
  disabled?: boolean;
  size?: ButtonSize;
  style?: React.CSSProperties;
  type?: ButtonType;
};

const getButtonTypeStyle = (
  type: ButtonType,
  color: string,
  bgColor: string
) => {
  switch (type) {
    case "pill":
      return css`
        padding: 3px 10px;
        font-size: 0.8rem;
        border-radius: 5rem;
        background-color: var(--primary);
      `;

    case "primary":
      return css`
        padding: 0.5rem 1.5rem;
        font-size: 1.2rem;
        border-radius: 5rem;
      `;

    case "secondary":
      return css`
        padding: 0.5rem 1rem;
        font-size: 1.2rem;
        border-radius: 5px;
        border: 2px solid ${bgColor};
        background-color: ${bgColor};
      `;

    case "tertiary":
      return css`
        padding: 0.5rem 1rem;
        font-size: 1.2rem;
        border-radius: 5px;
        border: 2px solid var(--white-2);
        background-color: transparent;
      `;
  }
};

const StyledButton = styled.button<{
  $color: string;
  $bgColor: string;
  $type: ButtonType;
}>`
  color: ${(props) => props.$color};
  background-color: ${(props) => props.$bgColor};
  border: none;
  letter-spacing: 0.5px;
  ${(props) => getButtonTypeStyle(props.$type, props.$color, props.$bgColor)}

  &:hover {
    opacity: 0.8;
  }
`;

const Button = ({
  children,
  bgColor = "inherit",
  color = "var(--white)",
  disabled,
  style,
  type = "primary",
}: ButtonProps) => {
  return (
    <StyledButton
      disabled={disabled}
      $color={color}
      $bgColor={bgColor}
      style={style}
      $type={type}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
