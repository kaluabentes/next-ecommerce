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

export const ContentGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rem(16)};
  width: 100%;

  ${mediaQuery(css`
    gap: ${rem(28)};
  `)}
`

export const Title = styled.h3`
  margin: 0 0 ${rem(28)} 0;
  font-size: ${rem(18)};
  font-weight: 600;
`
