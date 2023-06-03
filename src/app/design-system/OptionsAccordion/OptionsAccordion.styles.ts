import rem from "@/utilities/styles/rem"
import styled, { css } from "styled-components"

export const Container = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: ${rem(8)};
  overflow: hidden;
  width: 100%;
`

export const Item = styled.div``

export const Image = styled.img``

export const Header = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  & > label {
    padding: ${rem(16)};
  }

  & b {
    font-weight: 700;
  }
`

export const Content = styled.div<{ $isActive?: boolean }>`
  padding: ${rem(16)};
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: none;

  ${(props) =>
    props.$isActive &&
    css`
      display: block;
    `}
`
