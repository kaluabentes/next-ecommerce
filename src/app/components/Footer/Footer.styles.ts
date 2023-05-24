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
  font-size: ${rem(16)};
  font-weight: 600;
  margin: 0;
  margin-bottom: ${rem(32)};
`

export const Image = styled.img`
  height: ${rem(50)};
  margin-bottom: ${rem(32)};
`

export const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${rem(18)};
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
