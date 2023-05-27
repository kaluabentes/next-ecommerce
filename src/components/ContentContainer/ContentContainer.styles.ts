import mediaQuery from "@/utilities/styles/mediaQuery"
import rem from "@/utilities/styles/rem"
import styled, { css } from "styled-components"

export const Container = styled.div<{
  $padding?: string
  $margin?: string
}>`
  max-width: 1400px;
  padding: 0 ${rem(16)};
  margin-left: auto;
  margin-right: auto;

  ${mediaQuery(css`
    padding: 0 ${rem(40)};
  `)}

  ${(props) =>
    props.$padding &&
    css`
      padding: ${props.$padding};
    `}
`
