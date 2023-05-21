import ContentContainer from "@/components/ContentContainer"
import rem from "@/utilities/styles/rem"
import styled, { css } from "styled-components"

export const Container = styled(ContentContainer)`
  overflow: hidden;
  position: relative;
  margin-top: ${rem(16)};
`

export const EmblaContainer = styled.div`
  display: flex;
`

export const Image = styled.img`
  flex: 0 0 100%;
  min-width: 0;
  margin: 0 28px 0 28px;

  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
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
      background: ${props.theme.colors.primary};
      border-color: rgba(0, 0, 0, 0);
      transform: scale(1.2);
    `}
`
