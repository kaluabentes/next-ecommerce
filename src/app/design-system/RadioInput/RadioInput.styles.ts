import rem from "@/utilities/styles/rem"
import styled, { css } from "styled-components"

export const Box = styled.label`
  display: flex;
  align-items: start;
  gap: ${rem(10)};
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

export const Text = styled.div`
  margin-top: ${rem(4)};
`

export const Container = styled.div<{ $checked?: boolean }>`
  height: ${rem(25)};
  width: ${rem(25)};
  background: rgba(0, 0, 0, 0.09);
  border-radius: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.$checked &&
    css`
      background: ${(props) => props.theme.colors.primary};

      &::after {
        content: "";
        display: block;
        height: ${rem(10)};
        width: ${rem(10)};
        background: white;
        border-radius: 50%;
      }
    `}
`

export const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`
