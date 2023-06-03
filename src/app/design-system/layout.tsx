"use client"

import rem from "@/utilities/styles/rem"
import { ReactNode } from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${rem(200)} 0;
  max-width: ${rem(700)};
  margin: 0 auto;
`

export default function DesignSystemLayout({
  children,
}: {
  children: ReactNode
}) {
  return <Container>{children}</Container>
}
