import rem from "@/utilities/styles/rem"
import styled, { css } from "styled-components"

export const Container = styled.div<{
  $variant?: "error" | "info" | "success"
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${rem(16)};

  & svg {
    font-size: ${rem(122)};
    color: ${(props) => props.theme.colors.secondary};
  }

  ${(props) =>
    props.$variant === "info" &&
    css`
      & svg {
        color: ${(props) => props.theme.colors.blue};
      }
    `}

  ${(props) =>
    props.$variant === "error" &&
    css`
      & svg {
        color: ${(props) => props.theme.colors.danger};
      }
    `}

    ${(props) =>
    props.$variant === "success" &&
    css`
      & svg {
        color: ${(props) => props.theme.colors.secondary};
      }
    `}
`

export const Title = styled.h2`
  margin: 0;
  text-align: center;
`

export const Description = styled.p`
  margin: 0;
  color: rgba(0, 0, 0, 0.5);
  text-align: center;
  line-height: 1.5rem;
  font-weight: 500;
  font-size: ${rem(14)};
`
