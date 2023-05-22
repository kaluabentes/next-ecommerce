import { styled } from "styled-components"
import ContentContainer from "../ContentContainer"
import rem from "@/utilities/styles/rem"

export const Container = styled(ContentContainer)`
  overflow-y: hidden;
  overflow-x: auto;
  padding-top: ${rem(32)};
  padding-bottom: ${rem(32)};
`

export const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${rem(32)};
`
