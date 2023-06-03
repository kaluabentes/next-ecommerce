import Card from "@/app/design-system/Card"
import mediaQuery from "@/utilities/styles/mediaQuery"
import rem from "@/utilities/styles/rem"
import styled, { css } from "styled-components"

export const Container = styled(Card)`
  width: 100%;
  position: sticky;
  left: 0;
  top: 0;

  ${mediaQuery(css`
    max-width: 470px;
  `)}

  & h3 {
    padding: 0;
    margin: 0;
    font-size: ${rem(18)};
    font-weight: 600;
  }
`

export const SummaryBox = styled.div`
  padding: ${rem(16)};

  ${mediaQuery(css`
    padding: ${rem(28)};
  `)}
`
