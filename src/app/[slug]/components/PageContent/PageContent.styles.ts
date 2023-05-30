"use client"

import typography from "@/app/styles/typography"
import ContentContainer from "@/components/ContentContainer"
import mediaQuery from "@/utilities/styles/mediaQuery"
import rem from "@/utilities/styles/rem"
import styled, { css } from "styled-components"

export const Content = styled.div`
  ${typography}

  & p {
    color: rgba(0, 0, 0, 0.8);
  }
`

export const Title = styled.h2`
  margin: ${rem(22)} 0;
  font-size: ${rem(32)};

  ${mediaQuery(css`
    font-size: ${rem(32)};
    margin: ${rem(32)} 0;
  `)}
`
