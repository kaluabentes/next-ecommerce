import styled, { css } from "styled-components"

import rem from "@/utilities/styles/rem"

import { IconButton } from "../Header.styles"

export const OuterContainer = styled(IconButton)<{ count: number }>`
  display: flex;
  align-items: center;

  &:hover {
    color: white;
  }

  ${(props) =>
    props.count > 0 &&
    css`
      color: white;
    `}
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
  background: ${(props) => props.theme.colors.secondary};
  font-size: ${rem(11)};
  position: absolute;
  right: 0px;
  top: 0px;
`
