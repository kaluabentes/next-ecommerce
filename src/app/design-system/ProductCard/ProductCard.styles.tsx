import rem from "@/utilities/styles/rem"
import styled, { css } from "styled-components"

export const Image = styled.img`
  height: 228px;
  width: 100%;
  object-fit: cover;
  margin-bottom: ${rem(16)};
`

export const Title = styled.h3`
  font-size: ${rem(16)};
  font-weight: 600;
  color: rgba(0, 0, 0, 0.8);
  margin: 0;
  line-height: 1.6em;
  margin-bottom: ${rem(16)};
`

export const Item = styled.button`
  cursor: pointer;
  border: 0;
  outline: 0;
  transition: 0.3s;
  min-width: 268px;
  max-width: 268px;
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: white;
  padding: ${rem(20)};
  border-radius: ${rem(12)};
  box-shadow: 0px 3px 3px 1px rgba(0, 0, 0, 0.05);
  position: relative;

  &:hover {
    transform: perspective(1px) scale(1.03);
  }
`

export const DiscountFlag = styled.div<{ $static?: boolean }>`
  font-weight: 600;
  font-size: ${rem(12)};
  background: ${(props) => props.theme.colors.blue};
  color: white;
  padding: ${rem(2)} ${rem(4)};
  border-radius: ${rem(4)};
  position: ${(props) => (props.$static ? "static" : "absolute")};
  left: ${rem(20)};
  top: ${rem(20)};
  display: inline-block;
`

export const FromText = styled.p`
  margin: 0;
  font-size: ${rem(12)};
  font-weight: 600;
  margin-bottom: ${rem(4)};
  color: ${(props) => props.theme.colors.secondary};
`

export const PriceSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${rem(6)};
  margin-bottom: ${rem(8)};
`

export const Price = styled.p`
  margin: 0;
  font-size: ${rem(22)};
  font-weight: 600;
  color: ${(props) => props.theme.colors.secondary};
`

export const FromPrice = styled.p`
  margin: 0;
  font-size: ${rem(14)};
  text-decoration: line-through;
  color: rgba(0, 0, 0, 0.5);
`

export const PortionPrice = styled.p`
  margin: 0;
  color: rgba(0, 0, 0, 0.6);
  font-size: ${rem(12)};
  margin-bottom: ${rem(8)};
  font-weight: 500;

  & .portion-price {
    font-weight: 700;
  }
`

export const ReviewContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${rem(6)};
`

export const ReviewRating = styled.div`
  font-size: ${rem(14)};
  font-weight: 600;
  color: rgba(0, 0, 0, 0.8);
`
