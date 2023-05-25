import {
  DiscountFlag,
  FromPrice,
  PortionPrice,
  Price,
} from "@/components/ProductCard/ProductCard.styles"
import mediaQuery from "@/utilities/styles/mediaQuery"
import rem from "@/utilities/styles/rem"
import styled, { css } from "styled-components"

export const Container = styled.div<{ $fixed?: boolean }>`
  padding: ${rem(16)};
  background-color: white;
  box-shadow: 0px 3px 3px 0.05px rgba(0, 0, 0, 0.05);
  border-radius: ${rem(8)};

  & ${DiscountFlag} {
    margin-bottom: ${rem(16)};
  }

  & ${Price} {
    font-size: ${rem(32)};
  }

  & ${FromPrice} {
    font-size: ${rem(18)};
  }

  & ${PortionPrice} {
    margin-bottom: ${rem(32)};
  }

  & button {
    margin-bottom: ${rem(32)};
  }

  ${mediaQuery(css`
    padding: ${rem(32)};

    & ${Price} {
      font-size: ${rem(38)};
    }
  `)}

  ${(props) =>
    props.$fixed &&
    css`
      position: fixed;
    `}
`

export const Title = styled.h2`
  margin: 0;
  line-height: 1.3em;
  font-size: ${rem(28)};
  margin-bottom: ${rem(16)};

  ${mediaQuery(css`
    font-size: ${rem(42)};
  `)}
`

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(0, 0, 0, 0.1);
  margin: ${rem(16)} 0;
`

export const ShippingBox = styled.div`
  display: flex;
  align-items: center;
  padding: ${rem(16)};
  gap: ${rem(12)};
  border-radius: ${rem(8)};
  box-shadow: 0px 3px 3px 1px rgba(0, 0, 0, 0.05);
  margin-bottom: ${rem(16)};

  & svg {
    font-size: ${rem(80)};
    height: ${rem(50)};
    width: ${rem(50)};
    color: ${(props) => props.theme.colors.secondary};
  }
`

export const ShippingGroup = styled.div``

export const ShippingTitle = styled.h3`
  font-size: ${rem(16)};
  color: ${(props) => props.theme.colors.greenvogue};
  margin: 0 0 ${rem(4)} 0;
`

export const ShippingText = styled.p`
  font-size: ${rem(12)};
  color: rgba(0, 0, 0, 0.6);
  margin: 0;
`

export const PaymentTitle = styled.p`
  margin: 0 0 ${rem(4)} 0;
  font-size: ${rem(12)};
  color: rgba(0, 0, 0, 0.6);
`

export const PaymentMethodBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const AppMax = styled.img`
  height: 50px;
`

export const PaymentMethods = styled.img`
  width: 100%;
  max-width: ${rem(350)};
`
