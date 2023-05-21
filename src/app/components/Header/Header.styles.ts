import styled from "styled-components"

import rem from "@/utilities/styles/rem"

export const Container = styled.header`
  padding: ${rem(16)};
  background: ${(props) => props.theme.colors.primary};
  background: linear-gradient(
    180deg,
    ${(props) => props.theme.colors.midnight} 0%,
    ${(props) => props.theme.colors.greenvogue} 100%
  );
  color: white;
`

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const IconButton = styled.button`
  padding: 0;
  font-size: ${rem(32)};
  background: transparent;
  color: rgba(255, 255, 255, 0.7);
  border: 0;
  outline: 0;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`

export const IconGroup = styled.div`
  display: flex;
  gap: ${rem(6)};
`

export const LogoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  padding-left: ${rem(16)};
`

export const Logo = styled.img`
  height: 40px;
`
