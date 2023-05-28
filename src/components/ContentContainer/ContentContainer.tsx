"use client"

import { MouseEvent, ReactNode, Ref } from "react"

import { Container } from "./ContentContainer.styles"

interface ContentContainerProps {
  children: ReactNode
  className?: string
  componentRef?: any
  padding?: string
  margin?: string
  size?: "md" | "lg"
}

export default function ContentContainer({
  children,
  className,
  componentRef,
  padding,
  margin,
  size = "lg",
}: ContentContainerProps) {
  return (
    <Container
      ref={componentRef}
      className={className}
      $padding={padding}
      $margin={margin}
      $size={size}
    >
      {children}
    </Container>
  )
}
