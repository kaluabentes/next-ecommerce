import Card from "@/app/design-system/Card"
import mediaQuery from "@/utilities/styles/mediaQuery"
import rem from "@/utilities/styles/rem"
import styled, { css } from "styled-components"

export const Container = styled(Card)`
  max-width: ${rem(400)};
  padding: ${rem(18)};
  margin: ${rem(16)} auto;

  ${mediaQuery(css`
    padding: ${rem(28)};
    margin: ${rem(32)} auto;
  `)}

  & button {
    margin-top: ${rem(16)};
  }
`

export const Title = styled.h2`
  margin: 0 0 ${rem(22)} 0;
  font-size: ${rem(32)};
  font-weight: 700;
`

export const Text = styled.p`
  margin: 0 0 ${rem(16)} 0;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.5);
  line-height: 1.4rem;

  ${mediaQuery(css`
    font-size: ${rem(16)};
  `)}
`
