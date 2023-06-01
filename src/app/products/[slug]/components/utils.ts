"use client"

import mediaQuery from "@/utilities/styles/mediaQuery"
import rem from "@/utilities/styles/rem"
import styled, { css } from "styled-components"

export const ProductCarouselWrapper = styled.div`
  & [class^="ContentContainer"] {
    padding-left: 0;
    padding-right: 0;
  }
`

export const PageBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${rem(16)} 0;

  ${mediaQuery(css`
    padding: 0;
  `)}
`

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rem(16)};

  margin-bottom: ${rem(32)};

  ${mediaQuery(css`
    flex-direction: row;
    align-items: start;
    gap: ${rem(22)};
  `)}
`

export const ContentGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rem(22)};
  min-width: 60%;
`

export const ShowOnlyInSmall = styled.div`
  display: block;
  width: 100%;

  ${mediaQuery(css`
    display: none;
  `)}
`

export const ShowOnlyInLarge = styled.div`
  display: none;
  align-self: stretch;
  width: 100%;

  ${mediaQuery(css`
    display: block;
  `)}
`
