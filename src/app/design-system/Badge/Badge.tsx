import { ReactNode } from "react"

import { Container } from "./Badge.styles"

interface BadgeProps {
  children: ReactNode
  variant?: "secondary" | "blue" | "primary" | "gray"
  margin?: string
  size?: "lg" | "md"
}

export default function Badge({
  children,
  variant = "primary",
  margin,
  size = "md",
}: BadgeProps) {
  return (
    <Container $size={size} $variant={variant} $margin={margin}>
      {children}
    </Container>
  )
}
