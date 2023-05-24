import mediaQuery from "@/utilities/styles/mediaQuery"
import styled, { css } from "styled-components"

export const GhostItem = styled.div`
  display: block;
  background: yellow;
  opacity: 0;

  ${mediaQuery(css`
    display: none;
  `)}
`
