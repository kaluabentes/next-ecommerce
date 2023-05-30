import mediaQuery from "@/utilities/styles/mediaQuery"
import rem from "@/utilities/styles/rem"
import styled, { css } from "styled-components"

export const Container = styled.div`
  display: flex;
  height: ${rem(32)};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: ${rem(6)};
`

export const Button = styled.button`
  border: 0;
  outline: 0;
  background: transparent;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.6);

  &:hover {
    color: rgba(0, 0, 0, 0.9);
  }
`

export const Quantity = styled.p`
  padding: 0 ${rem(8)};
  display: flex;
  align-items: center;
  margin: 0;
  font-weight: 500;
`
