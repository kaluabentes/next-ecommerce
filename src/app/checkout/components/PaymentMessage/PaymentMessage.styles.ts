import Card from "@/app/design-system/Card"
import rem from "@/utilities/styles/rem"
import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${rem(32)};
`

export const Container = styled(Card)`
  padding: ${rem(40)};
  max-width: ${rem(600)};
`
