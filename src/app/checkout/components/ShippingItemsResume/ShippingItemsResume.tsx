"use client"

import {
  Title,
  TotalContainer,
  TotalLabel,
  TotalValue,
} from "@/app/cart/components/CartSummary/CartSummary.styles"
import { Container, SummaryBox } from "./ShippingItemsResume.styles"
import formatCurrency from "@/utilities/number/formatCurrency"
import rem from "@/utilities/styles/rem"
import useCartContext from "@/contexts/cart/useCartContext"
import Product from "@/models/Product"
import CartProduct from "@/app/cart/components/CartProduct/CartProduct"
import { useRouter } from "next/navigation"
import Button from "@/components/Button"

interface ShippingItemsResumeProps {}

export default function ShippingItemsResume({}: ShippingItemsResumeProps) {
  const router = useRouter()
  const { totalProductsPrice, totalEconomyPrice, cart } = useCartContext()

  return (
    <Container>
      <Title>Seu Pedido</Title>
      {cart.products.map((product) => (
        <CartProduct
          key={product?.slug}
          product={product}
          onClick={() => router.push(`/products/${product.slug}`)}
          quantityAlignBottom
        />
      ))}
      <SummaryBox>
        <TotalContainer>
          <TotalLabel>Frete</TotalLabel>
          <TotalValue $fontSize={rem(16)}>Grátis</TotalValue>
        </TotalContainer>
        <TotalContainer>
          <TotalLabel>Você economizou</TotalLabel>
          <TotalValue $fontSize={rem(16)}>
            {formatCurrency(totalEconomyPrice)}
          </TotalValue>
        </TotalContainer>
        <TotalContainer>
          <TotalLabel>Total</TotalLabel>
          <TotalValue>{formatCurrency(totalProductsPrice)}</TotalValue>
        </TotalContainer>
        <Button variant="secondary" full>
          Confirmar
        </Button>
      </SummaryBox>
    </Container>
  )
}
