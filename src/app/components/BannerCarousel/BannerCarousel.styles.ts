import ContentContainer from "@/app/design-system/ContentContainer"
import mediaQuery from "@/utilities/styles/mediaQuery"
import rem from "@/utilities/styles/rem"
import styled, { css } from "styled-components"

export const Container = styled.div`
  overflow: hidden;
  position: relative;
  margin-top: ${rem(16)};

  ${mediaQuery(css`
    margin-top: ${rem(28)};
  `)}
`

export const EmblaContainer = styled.div`
  display: flex;
`

export const Image = styled.img`
  flex: 0 0 100%;
  min-width: 0;
  margin: 0 28px 0 28px;
  border-radius: ${rem(12)};
`

export const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  bottom: 0;
  left: 0;
  padding: ${rem(16)};
  gap: ${rem(12)};
`

export const Dot = styled.button<{ $isActive: boolean }>`
  height: 10px;
  width: 10px;
  background: transparent;
  border: 0;
  outline: 0;
  transition: 0.5s;
  background: transparent;
  border-radius: 50%;
  cursor: pointer;
  padding: 0;
  background: rgba(0, 0, 0, 0.2);

  ${(props) =>
    props.$isActive &&
    css`
      background: rgba(0, 0, 0, 0.3);
      border-color: rgba(0, 0, 0, 0);
      transform: scale(1.2);
    `}
`
