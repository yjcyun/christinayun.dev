import React from "react";
import styled, { css } from "styled-components";

type ButtonSize = "pill" | "default";

type ButtonProps = {
  bgColor?: string;
  children: React.ReactNode;
  color?: string;
  disabled?: boolean;
  size?: ButtonSize;
  style?: React.CSSProperties;
};

const stylePillSizeButton = (size: ButtonSize) => {
  switch (size) {
    case "pill":
      return css`
        padding: 3px 10px;
        font-size: 0.8rem;
      `;

    case "default":
      return css`
        padding: 0.5rem 1.5rem;
        font-size: 1.2rem;
      `;
  }
};

const StyledButton = styled.button<{
  $size: ButtonSize;
  $color: string;
  $bgColor: string;
}>`
  ${(props) => stylePillSizeButton(props.$size)}
  color: ${(props) => props.$color};
  background: ${(props) => props.$bgColor};
  border: none;
  border-radius: 5rem;
  letter-spacing: 0.5px;

  &:hover {
    opacity: 0.8;
  }
`;

const Button = ({
  children,
  bgColor = "var(--primary)",
  color = "var(--white)",
  disabled,
  size = "default",
  style,
}: ButtonProps) => {
  return (
    <StyledButton
      disabled={disabled}
      $color={color}
      $bgColor={bgColor}
      $size={size}
      style={style}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
