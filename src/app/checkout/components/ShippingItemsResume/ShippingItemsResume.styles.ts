import Card from "@/components/Card"
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
    padding: ${rem(16)};
    margin: 0;
    font-size: ${rem(18)};
    font-weight: 600;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    ${mediaQuery(css`
      padding: ${rem(28)};
    `)}
  }
`

export const SummaryBox = styled.div`
  padding: ${rem(16)};

  ${mediaQuery(css`
    padding: ${rem(28)};
  `)}
`
