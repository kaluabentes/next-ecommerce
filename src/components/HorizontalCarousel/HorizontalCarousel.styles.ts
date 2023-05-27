import { css, styled } from "styled-components"
import ContentContainer from "../ContentContainer"
import rem from "@/utilities/styles/rem"

export const Container = styled(ContentContainer)<{
  $margin?: string
}>`
  overflow-y: hidden;
  overflow-x: auto;
  padding-top: ${rem(16)};
  padding-bottom: ${rem(16)};

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
