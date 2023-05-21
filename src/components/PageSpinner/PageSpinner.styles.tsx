import styled, { keyframes } from "styled-components"

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

export const Container = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Spinner = styled.div`
  border: 3px solid #f4f4f4;
  border-top: 3px solid ${(props) => props.theme.colors.primary};
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${spin} 0.8s linear infinite;
`
