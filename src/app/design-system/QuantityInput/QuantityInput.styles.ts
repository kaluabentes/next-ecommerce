import mediaQuery from "@/utilities/styles/mediaQuery"
import rem from "@/utilities/styles/rem"
import styled, { css } from "styled-components"

export const Container = styled.div<{ $size?: "lg" }>`
  display: flex;
  height: ${rem(32)};
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: ${rem(6)};

  ${(props) =>
    props.$size === "lg" &&
    css`
      height: ${rem(48)};
    `}
`

export const Button = styled.button<{ $hideTrash?: boolean; $value?: number }>`
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

  ${(props) =>
    props.$hideTrash &&
    props.$value === 1 &&
    css`
      opacity: 0.5;
    `}
`

export const Quantity = styled.p`
  padding: 0 ${rem(8)};
  display: flex;
  align-items: center;
  margin: 0;
  font-weight: 500;
`
