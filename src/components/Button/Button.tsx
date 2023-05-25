"use client"

import { ReactNode } from "react"

import { Container } from "./Button.styles"

interface ButtonProps {
  children: ReactNode
  variant?: "primary" | "secondary"
  size?: "lg"
  full?: boolean
  onClick?: () => void
  className?: string
}

export default function Button({
  children,
  variant,
  size,
  full,
  onClick,
  className,
}: ButtonProps) {
  return (
    <Container
      className={className}
      $size={size}
      $variant={variant}
      $full={full}
      onClick={onClick}
    >
      {children}
    </Container>
  )
}
