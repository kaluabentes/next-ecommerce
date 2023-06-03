import Card from "@/app/design-system/Card"
import mediaQuery from "@/utilities/styles/mediaQuery"
import rem from "@/utilities/styles/rem"
import styled, { css } from "styled-components"

export const Container = styled(Card)`
  padding: ${rem(16)};
  width: 100%;

  ${mediaQuery(css`
    padding: ${rem(28)};
  `)}
`

export const CardGrid = styled.div``

export const PaymentMethodContainer = styled.button``

export const PaymentMethodRadio = styled.input``

export const PaymentMethodLabel = styled.p``
