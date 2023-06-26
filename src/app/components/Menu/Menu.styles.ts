import mediaQuery from "@/utilities/styles/mediaQuery"
import rem from "@/utilities/styles/rem"
import styled, { css } from "styled-components"

export const Container = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  background: white;
  height: 100%;
  top: 0;
  width: 220px;
  left: -220px;
  opacity: 0;
  visibility: hidden;
  transition: 0.3s;
  z-index: 200;

  ${(props) =>
    props.$isOpen &&
    css`
      left: 0;
      opacity: 1;
      visibility: visible;
    `}

  ${mediaQuery(css`
    left: 0;
    opacity: 1;
    visibility: visible;
    position: static;
    width: 100%;
    display: flex;
    justify-content: center;
    box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.05);
  `)}
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

  ${mediaQuery(css`
    display: none;
  `)}
`

export const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;

  ${mediaQuery(css`
    flex-direction: row;
  `)}
`

export const MenuItem = styled.button<{
  $isDropdownTrigger?: boolean
  $isOpen?: boolean
  $isSub?: boolean
}>`
  background: transparent;
  outline: 0;
  border: 0;
  padding: ${rem(16)};
  font-size: ${rem(12)};
  color: ${(props) => props.theme.colors.gray800};
  font-weight: 700;
  text-align: left;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1.7px;

  ${(props) =>
    props.$isDropdownTrigger &&
    css`
      display: flex;
      justify-content: space-between;
      align-items: center;

      ${mediaQuery(css`
        gap: ${rem(12)};
      `)}
    `}

  ${(props) =>
    props.$isOpen &&
    css`
      color: rgba(0, 0, 0, 0.9);
    `}

  ${(props) =>
    props.$isSub &&
    css`
      font-weight: 600;
      color: rgba(0, 0, 0, 0.9);
      text-indent: 10px;
    `}

  ${mediaQuery(css`
    border-bottom: none;
  `)}

  & svg {
    font-size: ${rem(20)};
  }
`

export const DropdownMenu = styled.div<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  display: none;
  z-index: 100;

  ${(props) =>
    props.$isOpen &&
    css`
      display: block;

      ${mediaQuery(css`
        position: absolute;
        width: 100%;
        margin-top: 48px;
        left: 0;
        box-shadow: 0px 3px 3px 1px rgba(0, 0, 0, 0.07);
        background: white;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border: none;
      `)}
    `}
`

export const Overlay = styled.button<{ $isOpen: boolean }>`
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  z-index: 150;
  padding: 0;
  outline: 0;
  border: 0;
  opacity: 0.2;
  visibility: hidden;
  transition: 0.3s;

  ${(props) =>
    props.$isOpen &&
    css`
      opacity: 1;
      visibility: visible;
    `}
`

export const Wrapper = styled.div`
  position: relative;
`
