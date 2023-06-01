import QuantityInput from "@/components/QuantityInput"
import mediaQuery from "@/utilities/styles/mediaQuery"
import rem from "@/utilities/styles/rem"
import styled, { css } from "styled-components"

export const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  & .quantity-input {
    position: absolute;
    bottom: ${rem(16)};
    right: ${rem(16)};

    ${mediaQuery(css`
      bottom: 50%;
      right: ${rem(28)};
      transform: translateY(50%);
    `)}
  }
`

export const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  padding: ${rem(16)};

  ${mediaQuery(css`
    padding: ${rem(28)};
    width: 160px;
    height: 160px;
  `)}
`

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

export const Content = styled.div`
  flex: 1;
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: start;
  padding: ${rem(16)};
  padding-left: 0;

  ${mediaQuery(css`
    padding: ${rem(28)};
    padding-left: 0;
  `)}
`
