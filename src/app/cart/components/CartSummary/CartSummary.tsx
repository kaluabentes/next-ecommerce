"use client"

import Badge from "@/components/Badge"
import {
  Container,
  EconomyText,
  Title,
  TotalContainer,
  TotalLabel,
  TotalValue,
} from "./CartSummary.styles"
import Button from "@/components/Button"
import rem from "@/utilities/styles/rem"

export default function CartSummary() {
  return (
    <Container>
      <Title>Resumo</Title>
      <TotalContainer>
        <TotalLabel>Total</TotalLabel>
        <TotalValue>R$ 250,00</TotalValue>
      </TotalContainer>
      <EconomyText>Você economizou R$ 40,00</EconomyText>
      <Badge variant="greenvogue" margin={`0 0 ${rem(28)} 0`}>
        Pague no PIX ou Cartão e receba 3 dias antes
      </Badge>
      <Button variant="secondary" full>
        Finalizar Compra
      </Button>
    </Container>
  )
}
