import mediaQuery from "@/utilities/styles/mediaQuery"
import rem from "@/utilities/styles/rem"
import styled, { css } from "styled-components"

export const Container = styled.div`
  padding: ${rem(16)};
  background-color: white;
  max-width: ${rem(758)};
  box-shadow: 0px 3px 3px 0.05px rgba(0, 0, 0, 0.05);
  border-radius: ${rem(8)};

  ${mediaQuery(css`
    display: flex;
    flex-direction: row-reverse;
    justify-content: start;
    min-width: ${rem(758)};
  `)}
`

export const ActiveImageBox = styled.div`
  width: 100%;
  margin-bottom: ${rem(16)};
  display: flex;
  align-items: stretch;
  max-width: 640px;

  ${mediaQuery(css`
    margin-left: ${rem(16)};
    margin-bottom: 0;
  `)}
`

export const ActiveImage = styled.img`
  width: 100%;
  max-width: 640px;
  object-fit: contain;
`

export const ThumbsBox = styled.div`
  display: flex;
  gap: ${rem(10)};
  overflow-x: auto;
  width: 100%;
  padding-bottom: ${rem(12)};

  ${mediaQuery(css`
    flex-direction: column;
    width: initial;
  `)}
`

export const ThumbButton = styled.button`
  display: flex;
  outline: 0;
  border: 0;
  height: 70px;
  width: 70px;
  min-width: 70px;
  padding: 0;
  cursor: pointer;
`

export const ThumbImage = styled.img`
  height: 70px;
  width: 70px;
  min-width: 70px;
  object-fit: contain;
`
