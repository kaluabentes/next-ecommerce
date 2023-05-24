import { DiscountFlag } from "@/components/ProductCard/ProductCard.styles"
import mediaQuery from "@/utilities/styles/mediaQuery"
import rem from "@/utilities/styles/rem"
import styled, { css } from "styled-components"

export const Container = styled.div`
  flex: 0 0 100%;
  min-width: 0;
  margin: 0 28px 0 28px;
  background: ${(props) => props.theme.colors.greenvogue};
  color: white;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
  border-radius: ${rem(12)};
  display: flex;
  flex-direction: column-reverse;
  padding: ${rem(32)} ${rem(16)};
  position: relative;
  overflow: hidden;
  align-items: start;

  ${mediaQuery(css`
    flex-direction: row;
    padding: ${rem(32)} ${rem(40)};
  `)}
`

export const ContentGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 780px;
  z-index: 20;

  ${mediaQuery(css`
    align-items: start;
  `)}
`

export const Title = styled.h2`
  margin: 0;
  text-align: center;
  font-size: ${rem(32)};
  margin-bottom: ${rem(22)};
  font-weight: 600;

  ${mediaQuery(css`
    text-align: left;
    font-size: ${rem(56)};
  `)}
`

export const Description = styled.p`
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.5em;
  text-align: center;
  margin: 0;
  margin-bottom: ${rem(40)};
  font-weight: 500;

  ${mediaQuery(css`
    text-align: left;
    font-size: ${rem(18)};
  `)}
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  flex: 1;
  z-index: 20;
  margin-bottom: ${rem(16)};

  ${mediaQuery(css`
    margin-bottom: 0;
  `)}
`

export const Image = styled.img`
  height: ${rem(300)};
  width: 100%;
  object-fit: contain;

  ${mediaQuery(css`
    height: ${rem(400)};
  `)}
`

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: ${rem(32)};
  position: relative;
`

export const Price = styled.p`
  margin: 0 0 0 0;
  font-size: ${rem(56)};
  font-weight: 500;
`

export const FromPrice = styled.p`
  margin: 0 0 ${rem(16)} 0;
  font-size: ${rem(22)};
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: line-through;
`

export const DiscountFlagHero = styled(DiscountFlag)`
  position: static;
  font-size: ${rem(16)};
  margin-bottom: ${rem(6)};
`
