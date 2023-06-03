import rem from "@/utilities/styles/rem"
import styled, { css } from "styled-components"

export const Container = styled.div``

export const commonInputStyles = css<{ $margin?: string; $error?: boolean }>`
  height: 40px;
  padding: 0 ${rem(16)};
  width: 100%;
  border-radius: ${rem(6)};
  border: 1px solid rgba(0, 0, 0, 0.12);

  outline-color: ${(props) => props.theme.colors.primary};

  ${(props) =>
    props.$margin &&
    css`
      margin: ${props.$margin};
    `}

  ${(props) =>
    props.$error &&
    css`
      outline: 2px solid ${(props) => props.theme.colors.danger};
    `}
`

export const Field = styled.input<{ $margin?: string; $error?: boolean }>`
  ${commonInputStyles}
`

export const Label = styled.label`
  display: block;
  margin: 0 0 ${rem(8)} 0;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
  font-size: ${rem(16)};
`

export const Error = styled.p`
  margin: ${rem(8)} 0 0 0;
  font-size: ${rem(12)};
  font-weight: 500;
  color: ${(props) => props.theme.colors.danger};
`
