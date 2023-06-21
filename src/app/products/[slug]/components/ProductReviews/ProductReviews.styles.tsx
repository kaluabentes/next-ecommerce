import mediaQuery from "@/utilities/styles/mediaQuery"
import rem from "@/utilities/styles/rem"
import styled, { css } from "styled-components"

export const HeaderBox = styled.div`
  padding: ${rem(16)};
  background-color: white;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.05);
  border-radius: ${rem(8)};
  margin-top: ${rem(22)};
  margin-bottom: ${rem(32)};

  ${mediaQuery(css`
    padding: ${rem(32)};
  `)}
`

export const Title = styled.h3`
  margin: 0;
  font-size: ${rem(22)};
  margin-bottom: ${rem(42)};
  text-align: center;

  ${mediaQuery(css`
    font-size: ${rem(22)};
  `)}0
`

export const RatingBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${rem(42)};
  flex-direction: column;
  gap: ${rem(12)};

  ${mediaQuery(css`
    margin-bottom: 0;
  `)}
`

export const Rating = styled.div`
  min-height: ${rem(100)};
  min-width: ${rem(100)};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 8px solid yellowgreen;
  border-radius: 50%;
  font-size: ${rem(32)};
  font-weight: 700;
  color: yellowgreen;
`

export const MaxContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;

  & button {
    width: 100%;

    ${mediaQuery(css`
      width: initial;
    `)}
  }
`

export const RatingGrid = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 700px;

  ${mediaQuery(css`
    flex-direction: row;

    & div {
      flex: 1;
    }
  `)}
`

export const ReviewsGrid = styled.div`
  columns: 5 250px;
  column-gap: ${rem(18)};
`

export const ReviewContent = styled.div`
  padding: ${rem(16)};
  display: flex;
  flex-direction: column;
  gap: ${rem(16)};
`

export const ReviewItem = styled.article`
  flex: 1;
  background: white;
  overflow: hidden;
  background-color: white;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.05);
  border-radius: ${rem(8)};
  min-width: 250px;
  margin-bottom: ${rem(18)};
`

export const ReviewItemImage = styled.img`
  width: 100%;
`

export const ReviewItemUsername = styled.h3`
  margin: 0;
`

export const ReviewItemComment = styled.p`
  margin: 0;
  line-height: 1.4;
`
