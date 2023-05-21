import styled, { css } from "styled-components"

import rem from "@/utilities/styles/rem"

import { IconButton } from "../Header.styles"

export const Container = styled(IconButton)<{ count: number }>`
  padding-right: 9px;
  position: relative;

  ${(props) =>
    props.count > 0 &&
    css`
      color: white;
    `}
`

export const Counter = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-weight: 500;
  height: 18px;
  width: 18px;
  background: #00c95d;
  font-size: ${rem(11)};
  position: absolute;
  right: 0px;
  top: 0px;
`
