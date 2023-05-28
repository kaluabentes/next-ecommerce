import typography from "@/app/styles/typography"
import mediaQuery from "@/utilities/styles/mediaQuery"
import rem from "@/utilities/styles/rem"
import { css, styled } from "styled-components"

export const Container = styled.div`
  padding: ${rem(16)};
  background-color: white;
  box-shadow: 0px 3px 3px 0.05px rgba(0, 0, 0, 0.05);
  border-radius: ${rem(8)};
  display: flex;
  flex-direction: column;
  max-width: ${rem(758)};

  ${typography}

  ${mediaQuery(css`
    padding: ${rem(32)};
  `)}
`
