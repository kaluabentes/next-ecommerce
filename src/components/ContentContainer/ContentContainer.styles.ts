import mediaQuery from "@/utilities/styles/mediaQuery"
import rem from "@/utilities/styles/rem"
import styled, { css } from "styled-components"

export const Container = styled.div`
  max-width: 1400px;
  padding: 0 ${rem(16)};
  margin: 0 auto;

  ${mediaQuery(css`
    padding: 0 ${rem(40)};
  `)}
`
