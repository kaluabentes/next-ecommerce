import { ReactNode } from "react"
import { Container } from "./Card.styles"

interface CardProps {
  children: ReactNode
}

export default function Card({ children }: CardProps) {
  return <Container>{children}</Container>
}
