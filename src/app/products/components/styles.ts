"use client"

import mediaQuery from "@/utilities/styles/mediaQuery"
import rem from "@/utilities/styles/rem"
import styled, { css } from "styled-components"

export const ProductInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rem(16)};
  padding: ${rem(16)} 0;

  ${mediaQuery(css`
    flex-direction: row;
    align-items: start;
    gap: ${rem(32)};
    padding: ${rem(32)} 0;
  `)}
`
