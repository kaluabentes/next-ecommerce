import mediaQuery from "@/utilities/styles/mediaQuery"
import rem from "@/utilities/styles/rem"
import styled, { css } from "styled-components"

export const Container = styled.div`
  padding: ${rem(16)};
  background-color: white;
  box-shadow: 0px 3px 3px 0.05px rgba(0, 0, 0, 0.05);
  border-radius: ${rem(8)};
  flex: 1;
  width: 100%;

  ${mediaQuery(css`
    display: flex;
    flex-direction: row-reverse;
    justify-content: start;
  `)}
`

export const ActiveImageBox = styled.div`
  width: 100%;
  margin-bottom: ${rem(16)};
  display: flex;
  align-items: stretch;

  ${mediaQuery(css`
    margin-left: ${rem(16)};
    margin-bottom: 0;
  `)}
`

export const ActiveImage = styled.img`
  width: 100%;
  object-fit: contain;
`

export const ThumbsBox = styled.div`
  display: flex;
  gap: ${rem(10)};
  overflow-x: auto;
  padding-bottom: ${rem(12)};

  ${mediaQuery(css`
    flex-direction: column;
    width: initial;
    overflow-x: initial;
  `)}
`

export const ThumbButton = styled.button<{ $isActive?: boolean }>`
  display: flex;
  outline: 0;
  border: 0;
  padding: 0;
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: ${rem(6)};
  overflow: hidden;
  min-width: 80px;

  ${(props) =>
    props.$isActive &&
    css`
      border: 2px solid ${(props) => props.theme.colors.primary};
    `}
`

export const ThumbImage = styled.img`
  height: 80px;
  width: 80px;
  min-width: 80px;
  object-fit: contain;
`
