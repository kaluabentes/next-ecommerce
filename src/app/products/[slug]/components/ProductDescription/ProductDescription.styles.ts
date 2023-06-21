import typography from "@/app/styles/typography"
import mediaQuery from "@/utilities/styles/mediaQuery"
import rem from "@/utilities/styles/rem"
import { css, styled } from "styled-components"

export const Container = styled.div`
  padding: ${rem(16)};
  background-color: white;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.05);
  border-radius: ${rem(8)};
  display: flex;
  flex-direction: column;

  ${typography}

  & h3 {
    font-size: ${rem(28)};
    text-align: center;
  }

  & h4 {
    font-size: ${rem(18)};
    text-align: center;
  }

  ${mediaQuery(css`
    padding: ${rem(32)};
  `)}
`
