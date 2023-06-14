"use client"

import { ReactNode } from "react"

import { ButtonSpinner, Container } from "./Button.styles"

interface ButtonProps {
  children: ReactNode
  variant?: "default" | "primary" | "secondary"
  size?: "lg" | "sm"
  full?: boolean
  onClick?: () => void
  className?: string
  disabled?: boolean
  type?: "submit" | "button" | "reset"
  isLoading?: boolean
}

export default function Button({
  children,
  variant = "default",
  size,
  full,
  onClick,
  className,
  disabled,
  type,
  isLoading,
}: ButtonProps) {
  return (
    <Container
      type={type}
      className={className}
      $size={size}
      $variant={variant}
      $full={full}
      onClick={onClick}
      disabled={disabled}
    >
      {isLoading ? <ButtonSpinner /> : children}
    </Container>
  )
}
