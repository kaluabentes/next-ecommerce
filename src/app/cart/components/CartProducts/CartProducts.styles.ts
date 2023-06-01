"use client"

import mediaQuery from "@/utilities/styles/mediaQuery"
import rem from "@/utilities/styles/rem"
import styled, { css } from "styled-components"

export const Box = styled.div`
  box-shadow: 0px 3px 3px 1px rgba(0, 0, 0, 0.05);
  background-color: white;
  border-radius: ${rem(8)};
  overflow: hidden;
  width: 100%;
`

export const EmptyStateBox = styled.div`
  padding: ${rem(28)};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & svg {
    font-size: ${rem(120)};
    margin-bottom: ${rem(16)};
    color: rgba(0, 0, 0, 0.3);
  }
`

export const EmptyStateText = styled.p`
  margin: 0;
  font-weight: 500;
  text-align: center;
`
