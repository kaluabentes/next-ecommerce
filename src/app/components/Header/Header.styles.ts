import styled, { css } from "styled-components"

import rem from "@/utilities/styles/rem"
import mediaQuery from "@/utilities/styles/mediaQuery"

export const Container = styled.header`
  padding: ${rem(16)} 0;
  background: ${(props) => props.theme.colors.primary};
  background: linear-gradient(
    180deg,
    ${(props) => props.theme.colors.midnight} 0%,
    ${(props) => props.theme.colors.greenvogue} 100%
  );
  color: white;

  ${mediaQuery(css`
    padding: ${rem(28)} ${rem(16)};
  `)}
`

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const IconButtonLabel = styled.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
  font-size: ${rem(14)};
  font-weight: 500;
`

export const IconButton = styled.button`
  padding: 0;
  font-size: ${rem(28)};
  background: transparent;
  color: rgba(255, 255, 255, 0.7);
  border: 0;
  outline: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${rem(4)};

  &:hover {
    color: white;

    & p {
      color: white;
    }
  }

  ${mediaQuery(css`
    font-size: ${rem(32)};
  `)}
`

export const IconGroup = styled.div`
  display: flex;
  gap: ${rem(6)};

  ${mediaQuery(css`
    gap: ${rem(16)};
    margin-left: ${rem(32)};
  `)}
`

export const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: ${rem(16)};
  margin-right: ${rem(32)};
  flex: 1;

  ${mediaQuery(css`
    flex: initial;
    margin-left: 0;
  `)}
`

export const Logo = styled.img`
  height: 40px;
`
