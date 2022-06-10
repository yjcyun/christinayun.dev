import React from "react";
import styled, { css } from "styled-components";

type ButtonSize = "small" | "default";
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
  bgColor: string,
  size: string
) => {
  switch (type) {
    case "pill":
      return css`
        padding: 3px 10px;
        font-size: 0.8rem;
        border-radius: 3px;
        background-color: var(--slate-000);
        color: var(--slate-400);
      `;

    case "primary":
      return css`
        padding: 0.5rem 1.5rem;
        font-size: 1.2rem;
        background-color: var(--slate-700);
      `;

    case "secondary":
      return css`
        padding: 0.5rem 1rem;
        font-size: ${size === "default" ? "1.2rem" : "1rem"};
        border: 1px solid ${bgColor};
        background-color: ${bgColor};
      `;

    case "tertiary":
      return css`
        padding: 0.5rem 1rem;
        font-size: ${size === "default" ? "1.2rem" : "1rem"};
        border: 1px solid var(--slate-600);
        background-color: transparent;
      `;
  }
};

const StyledButton = styled.button<{
  $color: string;
  $bgColor: string;
  $size: ButtonSize;
  $type: ButtonType;
}>`
  color: ${(props) => props.$color};
  background-color: ${(props) => props.$bgColor};
  border: none;
  letter-spacing: 0.5px;
  white-space: nowrap;
  ${(props) => getButtonTypeStyle(props.$type, props.$bgColor, props.$size)}

  &:hover {
    opacity: 0.8;
  }
`;

const Button = ({
  children,
  bgColor = "inherit",
  color = "var(--white)",
  disabled,
  size = "default",
  style,
  type = "primary",
}: ButtonProps) => {
  return (
    <StyledButton
      disabled={disabled}
      $color={color}
      $bgColor={bgColor}
      $size={size}
      style={style}
      $type={type}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
