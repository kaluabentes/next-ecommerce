import mediaQuery from "@/utilities/styles/mediaQuery"
import rem from "@/utilities/styles/rem"
import styled, { css } from "styled-components"

export const BuyNowButtonBox = styled.div<{ $isShow: boolean }>`
  padding: ${rem(10)};
  padding-bottom: ${rem(15)};
  position: fixed;
  bottom: 0;
  left: 0;
  width: calc(100% - 64px - 10px);
  z-index: 0;
  opacity: 0.2;
  visibility: hidden;
  transition: 0.3s;

  & button {
    box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.2);
  }

  ${(props) =>
    props.$isShow &&
    css`
      opacity: 1;
      visibility: visible;
    `}

  ${mediaQuery(css`
    display: none;
  `)}
`
