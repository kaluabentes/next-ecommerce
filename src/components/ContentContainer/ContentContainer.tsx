"use client"

import { MouseEvent, ReactNode, Ref } from "react"

import { Container } from "./ContentContainer.styles"

interface ContentContainerProps {
  children: ReactNode
  className?: string
  componentRef?: any
  padding?: string
}

export default function ContentContainer({
  children,
  className,
  componentRef,
  padding,
}: ContentContainerProps) {
  return (
    <Container ref={componentRef} className={className} $padding={padding}>
      {children}
    </Container>
  )
}
