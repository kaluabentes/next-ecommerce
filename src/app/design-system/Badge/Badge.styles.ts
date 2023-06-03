import rem from "@/utilities/styles/rem"
import styled, { css } from "styled-components"

export const Container = styled.span<{
  $variant?: "secundary" | "greenvogue" | "primary"
  $margin?: string
}>`
  margin: 0;
  font-size: ${rem(12)};
  display: inline-block;
  color: white;
  padding: ${rem(5)} ${rem(10)};
  border-radius: ${rem(5)};
  font-weight: 600;
  display: inline-block;

  ${(props) =>
    props.$variant === "secundary" &&
    css`
      background: ${(props) => props.theme.colors.secundary};
    `}

  ${(props) =>
    props.$variant === "greenvogue" &&
    css`
      background: ${(props) => props.theme.colors.greenvogue};
    `}

    ${(props) =>
    props.$variant === "primary" &&
    css`
      background: ${(props) => props.theme.colors.primary};
    `}

    ${(props) =>
    props.$margin &&
    css`
      margin: ${props.$margin};
    `}
`
