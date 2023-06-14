import { ReactNode } from "react"
import { Container, Description, Title } from "./PageMessage.styles"

interface PageMessageProps {
  icon: ReactNode
  title: string
  description: string | ReactNode
  variant?: "error" | "info" | "success"
}

export default function PageMessage({
  icon,
  title,
  description,
  variant = "info",
}: PageMessageProps) {
  return (
    <Container $variant={variant}>
      {icon}
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  )
}
