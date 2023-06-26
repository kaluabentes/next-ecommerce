import { css, styled } from "styled-components"
import ContentContainer from "../ContentContainer"
import rem from "@/utilities/styles/rem"
import mediaQuery from "@/utilities/styles/mediaQuery"

export const Container = styled.div<{
  $margin?: string
}>`
  overflow-y: hidden;
  overflow-x: auto;
  padding-top: ${rem(32)};
  padding-bottom: ${rem(32)};

  ${mediaQuery(css`
    overflow: visible;
  `)}

  ${(props) =>
    props.$margin &&
    css`
      margin: ${props.$margin};
    `}
`

export const InnerContainer = styled.div<{
  $justifyContent?: string
  $gap?: number
}>`
  display: flex;
  justify-content: ${(props) => props.$justifyContent || "space-between"};
  gap: ${(props) => (props.$gap ? rem(props.$gap) : rem(32))};
`

export const SectionTitle = styled.h2`
  margin: 0;
`
