import Card from "@/app/design-system/Card"
import mediaQuery from "@/utilities/styles/mediaQuery"
import rem from "@/utilities/styles/rem"
import styled, { css } from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${rem(16)};

  ${mediaQuery(css`
    margin-top: ${rem(32)};
  `)}
`

export const Container = styled(Card)`
  padding: ${rem(16)};
  max-width: ${rem(600)};

  ${mediaQuery(css`
    padding: ${rem(32)};
  `)}
`

export const ContentBox = styled.div<{ $receipt?: boolean }>`
  ${(props) =>
    props.$receipt &&
    css`
      border-bottom: 1px solid rgba(0, 0, 0, 0.09);
      padding-bottom: ${rem(16)};
    `}
`
