import rem from "@/utilities/styles/rem"
import styled, { css } from "styled-components"
import { commonInputStyles } from "../Input/Input.styles"

export const Container = styled.div``

export const Field = styled.select<{ $margin?: string; $error?: boolean }>`
  ${commonInputStyles}
`

export const Label = styled.label`
  display: block;
  margin: 0 0 ${rem(8)} 0;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
  font-size: ${rem(16)};
`
