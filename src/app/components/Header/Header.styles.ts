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

export const IconButton = styled.button``

export const Logo = styled.image``
