import rem from "@/utilities/styles/rem"
import styled, { css } from "styled-components"

export const Container = styled.nav`
  display: flex;
  gap: ${rem(10)};

  & svg {
    font-size: ${rem(22)};
    color: ${(props) => props.theme.colors.secondary};

    &:last-of-type {
      display: none;
    }
  }
`

export const Item = styled.button<{ $current?: boolean }>`
  background: transparent;
  padding: 0;
  margin: 0;
  outline: 0;
  border: 0;
  font-size: ${rem(14)};
  font-weight: 500;
  color: ${(props) => props.theme.colors.greenvogue};
  opacity: 0.7;
  cursor: pointer;

  ${(props) =>
    props.$current &&
    css`
      opacity: 1;
      font-weight: 600;
      cursor: initial;
    `}
`
