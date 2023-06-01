import Card from "@/components/Card"
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

export const Title = styled.h3`
  margin: 0 0 ${rem(28)} 0;
  font-size: ${rem(18)};
  font-weight: 600;
`

export const InputsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rem(18)};
`

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: ${rem(16)};

  ${mediaQuery(css`
    grid-template-columns: repeat(2, 1fr);
    gap: ${rem(28)};
  `)}
`
