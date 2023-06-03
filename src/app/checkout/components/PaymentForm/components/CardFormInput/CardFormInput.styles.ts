import styled, { css } from "styled-components"

import rem from "@/utilities/styles/rem"

export const Input = styled.div<{ $error?: boolean }>`
  height: 40px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  padding: 0 ${rem(16)};
  border-radius: ${rem(6)};

  ${(props) =>
    props.$error &&
    css`
      outline: 2px solid ${(props) => props.theme.colors.danger};
    `}
`
