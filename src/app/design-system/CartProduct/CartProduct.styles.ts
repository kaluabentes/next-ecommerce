import QuantityInput from "@/app/design-system/QuantityInput"
import mediaQuery from "@/utilities/styles/mediaQuery"
import rem from "@/utilities/styles/rem"
import styled, { css } from "styled-components"

export const Title = styled.button`
  font-size: ${rem(14)};
  margin: 0 0 ${rem(16)} 0;
  font-weight: 500;
  background: transparent;
  border: 0;
  outline: 0;
  text-align: left;
  padding: 0;
  cursor: pointer;

  ${mediaQuery(css`
    font-size: ${rem(16)};
  `)}
`

export const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  padding: ${rem(12)};

  ${mediaQuery(css`
    width: 140px;
    height: 140px;
  `)}
`

export const Content = styled.div`
  flex: 1;
  display: flex;
  align-items: start;
  flex-direction: column;
  padding: ${rem(16)};
  padding-left: 0;

  ${mediaQuery(css`
    padding: ${rem(28)};
    padding-left: 0;
  `)}
`

export const Container = styled.div<{
  $quantityAlignBottom?: boolean
  $removeXPadding?: boolean
}>`
  display: flex;
  position: relative;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);

  & .quantity-input {
    position: absolute;
    bottom: ${rem(16)};
    right: ${(props) => (props.$removeXPadding ? "0" : rem(16))};

    ${({ $removeXPadding, $quantityAlignBottom }) =>
      mediaQuery(css`
        bottom: ${$quantityAlignBottom ? rem(28) : "50%"};
        right: ${$removeXPadding ? "0" : rem(28)};
        transform: ${$quantityAlignBottom ? "none" : "translateY(50%)"};
      `)}
  }

  ${(props) =>
    props.$removeXPadding &&
    css`
      & ${Content} {
        padding-right: 0;
      }

      & ${Image} {
        padding-left: 0;
      }
    `}
`

export const Price = styled.p`
  font-size: ${rem(18)};
  font-weight: 600;
  margin: 0;
`

export const FromPrice = styled.p`
  margin: 0;
  font-size: ${rem(12)};
  font-weight: 500;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: line-through;
`

export const Quantity = styled.p`
  margin: ${rem(10)} 0 0 0;
  font-weight: 600;
  font-size: ${rem(14)};
`
