import { ReactNode } from "react"
import { Container, Text } from "./ContactMethod.styles"

interface ContactMethodProps {
  icon: ReactNode
  text: string | ReactNode
  margin?: string
}

export default function ContactMethod({
  icon,
  text,
  margin,
}: ContactMethodProps) {
  return (
    <Container $margin={margin}>
      {icon}
      <Text>{text}</Text>
    </Container>
  )
}
