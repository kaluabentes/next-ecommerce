import rem from "@/utilities/styles/rem"
import styled from "styled-components"

export const OuterContainer = styled.div`
  flex: 1;
`

export const Container = styled.div`
  display: flex;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  overflow: hidden;
  margin-top: ${rem(16)};
  align-items: center;
  max-width: 1000px;

  @media (min-width: ${(props) => props.theme.breakpoints.large}) {
    margin-top: 0;
  }
`

export const Input = styled.input`
  flex: 1;
  padding: 0 ${rem(16)} 0 ${rem(24)};
  height: 42px;
  border: 0;
  outline: 0;
  width: 100px;
`

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 0;
  outline: 0;
  font-size: ${rem(28)};
  padding: 0 ${rem(12)};
  color: #323232;
  cursor: pointer;
`

export const Separator = styled.div`
  height: 30px;
  width: 1px;
  background: rgba(0, 0, 0, 0.1);
`
