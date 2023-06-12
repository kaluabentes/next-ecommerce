import { ReactNode } from "react"
import { Container } from "./Card.styles"

interface CardProps {
  children: ReactNode
  className?: string
  as?: string
}

export default function Card({ children, className, as }: CardProps) {
  return (
    <Container as={as} className={className}>
      {children}
    </Container>
  )
}
