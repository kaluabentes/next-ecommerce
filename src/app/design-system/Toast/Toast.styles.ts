import mediaQuery from "@/utilities/styles/mediaQuery"
import rem from "@/utilities/styles/rem"
import styled, { css } from "styled-components"

export const Container = styled.div<{ $isOpen?: boolean }>`
  position: fixed;
  bottom: 0;
  left: 0;
  background: #333;
  color: white;
  padding: ${rem(16)};
  display: flex;
  gap: ${rem(16)};
  transition: 0.3s;
  transform: translateY(20px);
  opacity: 0;
  visibility: hidden;
  width: 100%;

  ${mediaQuery(css`
    bottom: ${rem(16)};
    left: ${rem(16)};
    border-radius: ${rem(8)};
    width: initial;
  `)}

  ${(props) =>
    props.$isOpen &&
    css`
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
    `}
`

export const IconContainer = styled.div`
  font-size: ${rem(32)};
`

export const ContentContainer = styled.div``

export const Title = styled.h3`
  margin: 0 0 ${rem(8)} 0;
  font-size: ${rem(14)};
  font-weight: 600;

  ${mediaQuery(css`
    font-size: ${rem(16)};
  `)}
`

export const Description = styled.p`
  margin: 0;
  font-size: ${rem(12)};
  color: rgba(255, 255, 255, 0.7);

  ${mediaQuery(css`
    font-size: ${rem(14)};
  `)}
`

export const CloseButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  padding: ${rem(8)};
  line-height: 0;
  font-size: ${rem(22)};
  background: transparent;
  color: white;
  outline: 0;
  border: 0;
  cursor: pointer;
`
