import mediaQuery from "@/utilities/styles/mediaQuery"
import rem from "@/utilities/styles/rem"
import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog"
import styled, { css } from "styled-components"

export const Wrapper = styled.div`
  & [data-reach-dialog-overlay] {
    z-index: 200;
  }
`

export const Container = styled(Dialog)<{ $size?: "sm" | "md" | "lg" }>`
  margin: ${rem(16)} auto;
  padding: ${rem(16)};
  width: 91%;
  border-radius: ${rem(8)};
  position: relative;

  ${mediaQuery(css`
    margin: ${rem(76)} auto;
    padding: ${rem(28)};
    width: 100%;
  `)}

  ${(props) =>
    props.$size === "sm" &&
    css`
      max-width: ${rem(400)};
    `}

    ${(props) =>
    props.$size === "md" &&
    css`
      max-width: ${rem(600)};
    `}

    ${(props) =>
    props.$size === "lg" &&
    css`
      max-width: ${rem(800)};
    `}
`

export const CloseButton = styled.button`
  background: transparent;
  padding: 0;
  cursor: pointer;
  outline: 0;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  top: 0;
  padding: ${rem(6)};
  font-size: ${rem(28)};
  color: rgba(0, 0, 0, 0.3);

  &:hover {
    color: rgba(0, 0, 0, 0.4);
  }
`
