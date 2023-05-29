import rem from "@/utilities/styles/rem"
import styled from "styled-components"

export const Title = styled.h3`
  margin: 0 0 ${rem(16)} 0;
`

export const Result = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & svg {
    font-size: ${rem(62)};
    color: ${(props) => props.theme.colors.secondary};
    margin-bottom: ${rem(16)};
  }
`

export const ResultTitle = styled.h3`
  margin: 0 0 ${rem(16)} 0;
  text-align: center;
  color: ${(props) => props.theme.colors.primary};
  font-weight: 500;
  font-size: ${rem(18)};
`

export const SpinnerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${rem(32)};
`
