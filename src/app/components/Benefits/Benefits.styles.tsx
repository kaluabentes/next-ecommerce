import styled, { css } from "styled-components"

import rem from "@/utilities/styles/rem"
import ContentContainer from "@/app/design-system/ContentContainer"
import mediaQuery from "@/utilities/styles/mediaQuery"

export const Container = styled(ContentContainer)`
  display: flex;
  flex-direction: column;
  gap: ${rem(32)};
  padding-top: ${rem(32)} !important;
  padding-bottom: ${rem(32)} !important;

  ${mediaQuery(css`
    flex-direction: row;
  `)}
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  & svg {
    font-size: ${rem(80)};
    margin: 0 0 ${rem(16)} 0;
    color: ${(props) => props.theme.colors.secondary};
  }
`

export const Title = styled.h3`
  margin: 0 0 ${rem(16)} 0;
  color: ${(props) => props.theme.colors.greenvogue};
`

export const Description = styled.p`
  margin: 0;
  color: rgba(0, 0, 0, 0.5);
  font-size: ${rem(14)};
  line-height: 1.5em;
  font-weight: 500;
`
