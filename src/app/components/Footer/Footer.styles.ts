import styled, { css } from "styled-components"

import rem from "@/utilities/styles/rem"
import mediaQuery from "@/utilities/styles/mediaQuery"

export const Container = styled.footer`
  background: ${(props) => props.theme.colors.greenvogue};
  color: white;
  padding: ${rem(60)} 0;
`

export const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: ${rem(32)};
  margin-bottom: ${rem(32)};

  ${mediaQuery(css`
    flex-direction: row;
    justify-content: space-between;
    gap: ${rem(62)};
  `)}
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
`

export const Title = styled.h3`
  font-size: ${rem(14)};
  font-weight: 600;
  margin: 0;
  margin-bottom: ${rem(28)};
  text-transform: uppercase;
`

export const Image = styled.img`
  height: ${rem(50)};
  margin-bottom: ${rem(32)};
  align-self: center;

  ${mediaQuery(css`
    align-self: initial;
  `)}
`

export const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${rem(14)};
`

export const MenuItem = styled.button`
  text-align: left;
  padding: 0;
  background: transparent;
  color: rgba(255, 255, 255, 0.7);
  outline: none;
  border: none;
  font-size: ${rem(14)};
  cursor: pointer;

  &:hover {
    color: white;
    text-decoration: underline;
  }
`

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${mediaQuery(css`
    gap: ${rem(16)};
    flex-direction: row;
  `)}
`

export const AppMax = styled.img`
  height: ${rem(40)};
`

export const PaymentMethods = styled.img`
  height: ${rem(40)};
`

export const PaymentTitle = styled.p`
  font-size: ${rem(14)};
  color: rgba(255, 255, 255, 0.5);
`

export const Copyright = styled.p`
  font-size: ${rem(12)};
  color: rgba(255, 255, 255, 0.5);
`

export const ChatButton = styled.button`
  height: ${rem(64)};
  width: ${rem(64)};
  background: white;
  border-radius: 50%;
  font-size: ${rem(32)};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  outline: 0;
  position: fixed;
  bottom: ${rem(10)};
  right: ${rem(10)};
  box-shadow: 0px 3px 3px 1px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  color: ${(props) => props.theme.colors.secondary};

  &:hover {
    transform: scale(1.1);
  }
`
