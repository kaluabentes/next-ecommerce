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
import useCartContext from "@/contexts/cart/useCartContext"
import formatCurrency from "@/utilities/number/formatCurrency"

export default function CartSummary() {
  const { totalProductsAmount, totalProductsPrice, totalEconomyPrice } =
    useCartContext()

  return (
    <Container>
      <Title>Resumo</Title>
      <TotalContainer>
        <TotalLabel>Total</TotalLabel>
        <TotalValue>{formatCurrency(totalProductsPrice)}</TotalValue>
      </TotalContainer>
      <EconomyText>
        Você economizou {formatCurrency(totalEconomyPrice)} + Frete Grátis
      </EconomyText>
      <Badge variant="greenvogue" margin={`0 0 ${rem(28)} 0`}>
        Pague no PIX ou Cartão e receba 3 dias antes
      </Badge>
      <Button variant="secondary" disabled={!totalProductsAmount} full>
        Finalizar Compra
      </Button>
    </Container>
  )
}
