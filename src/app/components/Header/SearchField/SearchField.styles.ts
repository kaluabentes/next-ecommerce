import rem from "@/utilities/styles/rem"
import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  margin-top: ${rem(16)};
  align-items: center;
`

export const Input = styled.input`
  flex: 1;
  padding: 0 ${rem(16)} 0 ${rem(24)};
  height: 42px;
  border: 0;
  outline: 0;
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
  color: ${(props) => props.theme.colors.secondary};
`

export const Separator = styled.div`
  height: 30px;
  width: 1px;
  background: rgba(0, 0, 0, 0.1);
`
