import { ReactNode } from "react"

import { Container } from "./Button.styles"

interface ButtonProps {
  children: ReactNode
  variant?: "primary" | "secondary"
  size?: "lg"
  full?: boolean
  onClick?: () => void
}

export default function Button({
  children,
  variant,
  size,
  full,
  onClick,
}: ButtonProps) {
  return (
    <Container $size={size} $variant={variant} $full={full} onClick={onClick}>
      {children}
    </Container>
  )
}
