import styled, { css } from "styled-components"
import { AiFillStar } from "react-icons/ai"
import rem from "@/utilities/styles/rem"

export const Container = styled.div`
  display: flex;
`

export const StarBox = styled.div<{
  $progress?: string
}>`
  ${(props) =>
    props.$progress &&
    css`
      position: absolute;
      z-index: 200;
      overflow: hidden;
      width: ${props.$progress};
      line-height: 0;
      left: 0;
      top: 0;
    `}
`

export const Star = styled(AiFillStar)<{
  $isFilled?: boolean
}>`
  color: rgba(0, 0, 0, 0.15);
  font-size: ${rem(18)};
  position: relative;
  z-index: 100;

  ${(props) =>
    props.$isFilled &&
    css`
      color: ${(props) => props.theme.colors.secondaryVariant};
    `}
`

export const StarContainer = styled.div`
  position: relative;
  width: 18px;
`
