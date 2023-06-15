import mediaQuery from "@/utilities/styles/mediaQuery"
import rem from "@/utilities/styles/rem"
import styled, { css } from "styled-components"

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  padding: ${rem(16)} 0 0 0;
  gap: ${rem(16)};

  & h2 {
    margin: 0;
  }

  ${mediaQuery(css`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `)}
`

export const ButtonGrid = styled.div`
  display: flex;
  gap: ${rem(8)};
  width: 100%;

  & button {
    width: 100%;
  }

  ${mediaQuery(css`
    width: initial;
  `)}
`
