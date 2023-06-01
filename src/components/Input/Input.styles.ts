import rem from "@/utilities/styles/rem"
import styled, { css } from "styled-components"

export const Container = styled.div``

export const Field = styled.input<{ $margin?: string }>`
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
`

export const Label = styled.label`
  display: block;
  margin: 0 0 ${rem(8)} 0;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
  font-size: ${rem(16)};
`
