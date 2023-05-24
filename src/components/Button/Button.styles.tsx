import rem from "@/utilities/styles/rem"
import styled, { css } from "styled-components"

export const Container = styled.button<{
  $variant?: "primary" | "secondary"
  $size?: "lg"
}>`
  height: ${rem(40)};
  padding: 0 ${rem(16)};
  border-radius: ${rem(6)};
  background: white;
  outline: 0;
  border: 0;
  font-weight: 600;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;

  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.3);
  }

  ${(props) =>
    props.$variant &&
    props.$variant === "primary" &&
    css`
      background: ${props.theme.colors.primary};
      color: white;
      border-color: ${props.theme.colors.primary};

      &:hover {
        background: ${props.theme.colors.primaryVariant};
      }
    `};

  ${(props) =>
    props.$variant &&
    props.$variant === "secondary" &&
    css`
      background: ${props.theme.colors.secondary};
      color: white;
      border-color: ${props.theme.colors.secondary};

      &:hover {
        background: ${props.theme.colors.secondaryVariant};
      }
    `};

  ${(props) =>
    props.$size &&
    props.$size === "lg" &&
    css`
      font-size: ${rem(18)};
      height: ${rem(48)};
      padding: 0 ${rem(24)};
    `};
`
