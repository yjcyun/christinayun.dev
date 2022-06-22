import React from "react";
import styled, { css } from "styled-components";

type ButtonSize = "small" | "default";
type ButtonType = "primary" | "secondary" | "pill";
type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  size?: ButtonSize;
  style?: React.CSSProperties;
  type?: ButtonType;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const getButtonTypeStyle = (type: ButtonType, size: string) => {
  switch (type) {
    case "pill":
      return css`
        padding: 3px 10px;
        font-size: 0.8rem;
        border-radius: 3px;
        background-color: ${({ theme }) => theme.background2};
        color: ${({ theme }) => theme.text4};
      `;
    case "primary":
      return css`
        padding: 0.5rem 1rem;
        font-size: ${size === "default" ? "1.2rem" : "1rem"};
        border: 1px solid var(--slate-600);
        background-color: var(--slate-600);
        color: var(--slate-100);
      `;
    case "secondary":
      return css`
        padding: 0.5rem 1rem;
        font-size: ${size === "default" ? "1.2rem" : "1rem"};
        border: 1px solid var(--slate-600);
        background-color: transparent;
        color: ${({ theme }) => theme.text1};
      `;
  }
};

const StyledButton = styled.button<{
  $size: ButtonSize;
  $type: ButtonType;
}>`
  border: none;
  letter-spacing: 0.5px;
  white-space: nowrap;

  ${(props) => getButtonTypeStyle(props.$type, props.$size)}

  &:hover {
    opacity: 0.8;
  }
`;

const Button = ({
  children,
  disabled,
  size = "default",
  style,
  type = "primary",
  onClick,
}: ButtonProps) => {
  return (
    <StyledButton
      disabled={disabled}
      $size={size}
      style={style}
      $type={type}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
