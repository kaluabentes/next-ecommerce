import { ReactNode } from "react"

import { Container } from "./Button.styles"

interface ButtonProps {
  children: ReactNode
  variant?: "primary" | "secondary"
  size?: "lg"
  full?: boolean
}

export default function Button({ children, variant, size, full }: ButtonProps) {
  return (
    <Container $size={size} $variant={variant} $full={full}>
      {children}
    </Container>
  )
}
