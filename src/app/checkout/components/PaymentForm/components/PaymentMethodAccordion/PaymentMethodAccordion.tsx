import { ReactNode } from "react"
import {
  Container,
  Content,
  Header,
  Image,
} from "./PaymentMethodAccordion.styles"

interface PaymentMethodAccordionProps {
  title?: string
  image?: string
  children?: ReactNode
}

export default function PaymentMethodAccordion({
  title,
  image,
  children,
}: PaymentMethodAccordionProps) {
  return (
    <Container>
      <Header>{title}</Header>
      <Image src={image} alt={title} />
      <Content>{children}</Content>
    </Container>
  )
}
