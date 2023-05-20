import rem from "@/utilities/styles/rem"
import styled from "styled-components"

export const Container = styled.button`
  padding: 0;
  font-size: ${rem(32)};
  background: transparent;
  color: white;
  border: 0;
  outline: 0;
  cursor: pointer;
  position: relative;
  padding-right: 9px;
`

export const Counter = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-weight: 500;
  height: 18px;
  width: 18px;
  background: #00c95d;
  font-size: ${rem(11)};
  position: absolute;
  right: 0px;
  top: 0px;
`
