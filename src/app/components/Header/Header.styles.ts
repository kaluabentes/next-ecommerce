import styled, { css } from "styled-components"

import rem from "@/utilities/styles/rem"
import mediaQuery from "@/utilities/styles/mediaQuery"

export const Container = styled.header`
  padding: ${rem(16)} 0;
  background: white;
  color: white;
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.07);

  ${mediaQuery(css`
    padding: ${rem(28)} 0;
  `)}
`

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const IconButtonLabel = styled.p`
  margin: 0;
  font-size: ${rem(14)};
  font-weight: 600;
`

export const IconButton = styled.button`
  padding: 0;
  font-size: ${rem(28)};
  background: transparent;
  border: 0;
  outline: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${rem(8)};
  color: ${(props) => props.theme.colors.gray800};

  & svg {
    color: ${(props) => props.theme.colors.gray800};
  }

  &:hover {
    color: #000;
  }

  ${mediaQuery(css`
    font-size: ${rem(32)};
  `)}
`

export const IconGroup = styled.div`
  display: flex;
  gap: ${rem(10)};

  ${mediaQuery(css`
    gap: ${rem(22)};
    margin-left: ${rem(32)};
  `)}
`

export const LogoContainer = styled.h1`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  margin-left: ${rem(16)};
  margin-right: ${rem(32)};
  flex: 1;

  ${mediaQuery(css`
    flex: initial;
    margin-left: 0;
  `)}

  & a {
    display: flex;
    align-items: center;
  }
`

export const Logo = styled.img`
  height: 32px;

  ${mediaQuery(css`
    height: 42px;
  `)}
`
