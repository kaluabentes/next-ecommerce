import rem from "@/utilities/styles/rem"
import styled, { css } from "styled-components"

export const Container = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  background: white;
  height: 100%;
  top: 0;
  width: 220px;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
  left: -220px;
  opacity: 0;
  visibility: hidden;
  transition: 0.3s;

  ${(props) =>
    props.$isOpen &&
    css`
      left: 0;
      opacity: 1;
      visibility: visible;
    `}
`

export const CloseButton = styled.button`
  height: 32px;
  width: 32px;
  box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.2);
  background: white;
  position: absolute;
  right: 0px;
  transform: translateX(50%);
  border-radius: 50%;
  outline: 0;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${rem(22)};
  cursor: pointer;
  top: 4px;
`

export const MenuItem = styled.button``
