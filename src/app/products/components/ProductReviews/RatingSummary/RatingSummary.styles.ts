import rem from "@/utilities/styles/rem"
import styled, { css } from "styled-components"

export const RatingBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rem(0)};

  & svg {
    color: yellowgreen;
    font-size: ${rem(22)};
  }
`

export const RatingItem = styled.div`
  display: flex;
  gap: ${rem(10)};
  align-items: center;
  max-height: ${rem(28)};
`

export const RatingText = styled.p`
  margin: 0;
  width: ${rem(13)};
  text-align: center;
  font-size: ${rem(14)};
`

export const RatingProgress = styled.div<{ $percent: string }>`
  width: 100%;
  background: rgba(0, 0, 0, 0.15);
  height: ${rem(8)};
  border-radius: ${rem(8)};
  position: relative;
  overflow: hidden;

  ${(props) =>
    props.$percent &&
    css`
      &::after {
        content: "";
        position: absolute;
        height: ${rem(8)};
        width: ${props.$percent};
        border-radius: ${rem(8)};
        background: yellowgreen;
      }
    `}
`

export const RatingCount = styled.p`
  margin: 0;
  width: 34px;
  font-size: ${rem(14)};
  color: rgba(0, 0, 0, 0.7);
`
