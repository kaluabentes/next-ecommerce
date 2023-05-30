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
  disabled?: boolean
}

export default function Button({
  children,
  variant,
  size,
  full,
  onClick,
  className,
  disabled,
}: ButtonProps) {
  return (
    <Container
      className={className}
      $size={size}
      $variant={variant}
      $full={full}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Container>
  )
}
