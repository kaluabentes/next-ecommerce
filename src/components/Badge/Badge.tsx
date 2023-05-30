import { ReactNode } from "react"

import { Container } from "./Badge.styles"

interface BadgeProps {
  children: ReactNode
  variant?: "secundary" | "greenvogue" | "primary"
  margin?: string
}

export default function Badge({
  children,
  variant = "primary",
  margin,
}: BadgeProps) {
  return (
    <Container $variant={variant} $margin={margin}>
      {children}
    </Container>
  )
}
