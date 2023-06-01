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
  position: sticky;

  ${mediaQuery(css`
    padding: ${rem(28)};
    max-width: ${rem(470)};
  `)}
`

export const Title = styled.h3`
  margin: 0 0 ${rem(28)} 0;
  font-size: ${rem(18)};
  font-weight: 600;
`

export const TotalContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 ${rem(16)} 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: ${rem(16)};

  &:last-of-type {
    border-bottom: 0;
  }
`

export const TotalLabel = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: ${rem(16)};
  color: rgba(0, 0, 0, 0.6);
`

export const TotalValue = styled.p<{ $fontSize?: string }>`
  margin: 0;
  font-weight: 600;
  font-size: ${(props) => (props.$fontSize ? props.$fontSize : rem(20))};
`

export const EconomyText = styled.p`
  margin: 0 0 ${rem(8)} 0;
  font-size: ${rem(14)};
  color: ${(props) => props.theme.colors.primary};
  font-weight: 600;
`
