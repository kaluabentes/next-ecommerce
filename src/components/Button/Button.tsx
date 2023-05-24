import { ReactNode } from "react"

import { Container } from "./Button.styles"

interface ButtonProps {
  children: ReactNode
  variant?: "primary" | "secondary"
  size?: "lg"
}

export default function Button({ children, variant, size }: ButtonProps) {
  return (
    <Container $size={size} $variant={variant}>
      {children}
    </Container>
  )
}
