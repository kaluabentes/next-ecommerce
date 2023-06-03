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
  border: 5px solid rgba(0, 0, 0, 0.1);
  border-top: 5px solid ${(props) => props.theme.colors.greenvogue};
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: ${spin} 0.8s linear infinite;
`
