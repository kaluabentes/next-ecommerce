import styled, { css } from "styled-components"

import rem from "@/utilities/styles/rem"

import { IconButton, IconButtonLabel } from "../Header.styles"
import mediaQuery from "@/utilities/styles/mediaQuery"

export const OuterContainer = styled(IconButton)<{ count: number }>`
  display: flex;
  align-items: center;
  font-size: ${rem(28)};

  ${mediaQuery(css`
    font-size: ${rem(32)};
  `)}
`

export const Container = styled.div`
  position: relative;
  padding-right: ${rem(9)};
  display: flex;
  align-items: center;
`

export const Counter = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-weight: 500;
  height: 18px;
  width: 18px;
  background: ${(props) => props.theme.colors.primary};
  font-size: ${rem(11)};
  position: absolute;
  right: 0px;
  top: 0px;
  color: white !important;
`
