import rem from "@/utilities/styles/rem"
import styled, { css } from "styled-components"

export const Container = styled.nav<{ $removeBottomPadding?: boolean }>`
  display: flex;
  gap: ${rem(10)};
  padding: ${rem(22)} 0;

  ${(props) =>
    props.$removeBottomPadding &&
    css`
      padding-bottom: 0;
    `}

  & svg {
    font-size: ${rem(22)};

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
  cursor: pointer;
  color: rgba(0, 0, 0, 0.5);

  &:hover {
    text-decoration: underline;
  }

  ${(props) =>
    props.$current &&
    css`
      opacity: 1;
      font-weight: 600;
      cursor: initial;
      color: rgba(0, 0, 0, 0.8);

      &:hover {
        text-decoration: none;
      }
    `}
`
