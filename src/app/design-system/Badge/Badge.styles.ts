import rem from "@/utilities/styles/rem"
import styled, { css } from "styled-components"

export const Container = styled.span<{
  $variant?: "secondary" | "blue" | "primary"
  $margin?: string
}>`
  margin: 0;
  font-size: ${rem(12)};
  display: inline-block;
  color: white;
  padding: ${rem(2)} ${rem(8)};
  border-radius: ${rem(5)};
  font-weight: 600;
  display: inline-flex;

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
    props.$margin &&
    css`
      margin: ${props.$margin};
    `}
`
