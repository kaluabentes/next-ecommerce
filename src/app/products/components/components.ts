"use client"

import mediaQuery from "@/utilities/styles/mediaQuery"
import rem from "@/utilities/styles/rem"
import styled, { css } from "styled-components"

export const PageBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${rem(16)} 0;
  gap: ${rem(16)};

  ${mediaQuery(css`
    padding: ${rem(32)} 0;
    gap: ${rem(32)};
  `)}
`

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rem(16)};

  ${mediaQuery(css`
    flex-direction: row;
    align-items: start;
    gap: ${rem(32)};
  `)}
`
