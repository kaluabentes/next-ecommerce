import rem from "@/utilities/styles/rem"
import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: white;
`

export const OrderDetailItem = styled.div`
  padding: ${rem(16)} 0;
  display: flex;
  flex-direction: column;
  gap: ${rem(16)};
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
`

export const OrderDetailItemLabel = styled.p`
  font-weight: 600;
  margin: 0;
`

export const OrderDetailItemValue = styled.p`
  margin: 0;
  font-size: ${rem(14)};
  color: rgba(0, 0, 0, 0.5);
  font-weight: 500;
`

export const YourOrderTitle = styled.h3`
  margin: ${rem(16)} 0;
  font-weight: 600;
  font-size: ${rem(16)};
`

export const YourOrderItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${rem(16)} 0;
`

export const YourOrderItemLabel = styled.p`
  margin: 0;
  font-weight: 500;
`

export const YourOrderItemValue = styled.p`
  margin: 0;
  font-size: ${rem(22)};
  font-weight: 600;
`
