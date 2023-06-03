import rem from "@/utilities/styles/rem"
import styled, { css } from "styled-components"

export const Container = styled.div<{ $margin?: string }>`
  display: flex;
  align-items: start;
  gap: ${rem(10)};

  & svg {
    font-size: ${rem(22)};
    color: ${(props) => props.theme.colors.secondary};
  }

  ${(props) =>
    props.$margin &&
    css`
      margin: ${props.$margin};
    `}
`

export const Text = styled.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
  font-size: ${rem(14)};
  font-weight: 400;
  line-height: 1.3em;
`
