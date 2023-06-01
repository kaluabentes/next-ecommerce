"use client"

import mediaQuery from "@/utilities/styles/mediaQuery"
import rem from "@/utilities/styles/rem"
import styled, { css } from "styled-components"

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rem(16)};
  justify-content: start;
  align-items: start;

  ${mediaQuery(css`
    flex-direction: row;
    gap: ${rem(28)};
  `)}
`
