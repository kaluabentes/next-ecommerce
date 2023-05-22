import ContentContainer from "@/components/ContentContainer"
import mediaQuery from "@/utilities/styles/mediaQuery"
import rem from "@/utilities/styles/rem"
import styled, { css } from "styled-components"

export const Image = styled.img``

export const Title = styled.h2`
  font-size: ${rem(14)};
  font-weight: 600;
  color: rgba(0, 0, 0, 0.5);
  margin: 0;
`

export const Item = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: ${rem(16)};
  cursor: grab;
  border: 0;
  outline: 0;
  padding: 0;

  &:hover {
    & ${Title} {
      color: ${(props) => props.theme.colors.primary};
    }
  }

  &:last-of-type {
    padding-right: ${rem(16)};
  }
`
