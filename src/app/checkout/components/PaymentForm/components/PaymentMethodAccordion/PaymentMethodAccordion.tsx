import {
  Container,
  Content,
  Header,
  Image,
} from "./PaymentMethodAccordion.styles"

export default function PaymentMethodAccordion({ title, image, children }) {
  return (
    <Container>
      <Header>{title}</Header>
      <Image src={image} alt={title} />
      <Content>{children}</Content>
    </Container>
  )
}
