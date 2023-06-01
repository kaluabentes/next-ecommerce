import { ReactNode } from "react"
import { Container } from "./Card.styles"

interface CardProps {
  children: ReactNode
  className?: string
}

export default function Card({ children, className }: CardProps) {
  return <Container className={className}>{children}</Container>
}
