import rem from "@/utilities/styles/rem"
import styled, { css } from "styled-components"

export const Container = styled.span<{
  $variant?: "secondary" | "blue" | "primary" | "gray"
  $margin?: string
  $size?: "lg" | "md"
}>`
  margin: 0;
  font-size: ${rem(12)} !important;
  display: inline-block;
  color: white;
  padding: 0 ${rem(8)};
  border-radius: ${rem(5)};
  font-weight: 600;
  display: inline-flex;
  height: ${rem(22)};
  align-items: center;

  ${(props) =>
    props.$variant === "secondary" &&
    css`
      background: ${(props) => props.theme.colors.secondary};
    `}

  ${(props) =>
    props.$variant === "blue" &&
    css`
      background: ${(props) => props.theme.colors.blue};
    `}

    ${(props) =>
    props.$variant === "primary" &&
    css`
      background: ${(props) => props.theme.colors.primary};
    `}

    ${(props) =>
    props.$variant === "gray" &&
    css`
      background: ${(props) => props.theme.colors.gray};
      color: rgba(0, 0, 0, 0.8);
    `}

    ${(props) =>
    props.$margin &&
    css`
      margin: ${props.$margin};
    `}

    ${(props) =>
    props.$size === "lg" &&
    css`
      font-size: ${rem(16)} !important;
      height: ${rem(32)};
      padding: 0 ${rem(12)};
      font-weight: 700;
    `}
`
