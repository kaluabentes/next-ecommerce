import mediaQuery from "@/utilities/styles/mediaQuery"
import rem from "@/utilities/styles/rem"
import styled, { css } from "styled-components"

export const Container = styled.div`
  box-shadow: 0px 3px 3px 1px rgba(0, 0, 0, 0.05);
  background-color: white;
  border-radius: ${rem(8)};
  overflow: hidden;
  padding: ${rem(16)};
  width: 100%;
  flex: 0.5;
  position: sticky;

  ${mediaQuery(css`
    padding: ${rem(28)};
    max-width: ${rem(500)};
  `)}
`

export const Title = styled.h3`
  margin: 0 0 ${rem(32)} 0;
  font-size: ${rem(22)};
`

export const TotalContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 0 0 ${rem(32)} 0;
`

export const TotalLabel = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: ${rem(18)};
`

export const TotalValue = styled.p`
  margin: 0;
  color: ${(props) => props.theme.colors.secondary};
  font-weight: 700;
  font-size: ${rem(18)};
`

export const EconomyText = styled.p`
  margin: 0 0 ${rem(8)} 0;
  font-size: ${rem(14)};
  color: ${(props) => props.theme.colors.primary};
  font-weight: 600;
`
