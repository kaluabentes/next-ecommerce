"use client"

import Product from "@/models/Product"
import {
  AppMax,
  Container,
  EconomyPrice,
  PaymentMethodBox,
  PaymentMethods,
  PaymentTitle,
  Separator,
  ShippingBox,
  ShippingGroup,
  ShippingText,
  ShippingTitle,
  Title,
} from "./ProductBuyArea.styles"
import getAverage from "@/utilities/number/getAverage"
import ReviewStars from "@/components/ReviewStars/ReviewStars"
import {
  DiscountFlag,
  FromPrice,
  FromText,
  PortionPrice,
  Price,
  PriceContainer,
  ReviewContainer,
  ReviewRating,
} from "@/components/ProductCard/ProductCard.styles"
import formatCurrency from "@/utilities/number/formatCurrency"
import { TbTruckDelivery } from "react-icons/tb"
import Button from "@/components/Button"
import { useState } from "react"
import useShowOnScroll from "@/hooks/useShowOnScroll"

interface ProductBuyAreaProps {
  product: Product
  fixed?: boolean
}

export default function ProductBuyArea({
  product,
  fixed,
}: ProductBuyAreaProps) {
  const { isShow } = useShowOnScroll(940)
  const reviewsAverage = getAverage(product.reviews?.map((r) => r.rating)!)

  return (
    <Container>
      <Title>{product.name}</Title>
      <ReviewContainer>
        <ReviewRating>
          {reviewsAverage === 5 ? "5.0" : reviewsAverage}
        </ReviewRating>
        <ReviewStars rating={reviewsAverage} />
      </ReviewContainer>
      <Separator />
      <DiscountFlag $static>{product.discount}</DiscountFlag>
      <FromText>A partir de</FromText>
      <PriceContainer>
        <Price>{formatCurrency(product.price!)}</Price>
        <FromPrice>{formatCurrency(product.fromPrice!)}</FromPrice>
      </PriceContainer>
      <PortionPrice>
        em até <strong>12x</strong> de{" "}
        <span className="portion-price">
          {formatCurrency(product.portionPrice!)}
        </span>
      </PortionPrice>
      <EconomyPrice>
        Economia de {formatCurrency(product.economyPrice!)}
      </EconomyPrice>
      <ShippingBox>
        <TbTruckDelivery />
        <ShippingGroup>
          <ShippingTitle>Prazo de entrega entre 15 a 30 dias</ShippingTitle>
          <ShippingText>
            Compre sem preocupação, o frete é por nossa conta.
          </ShippingText>
        </ShippingGroup>
      </ShippingBox>
      <Button className="buy-now" variant="secondary" size="lg" full>
        Comprar agora
      </Button>
      <PaymentMethodBox>
        <PaymentTitle>Pagamento seguro com</PaymentTitle>
        <AppMax src="/mercado-pago-logo.png" alt="Logo da AppMax" />
        <PaymentMethods
          src="/payment-methods.png"
          alt="Métodos de Pagamentos Aceitos"
        />
      </PaymentMethodBox>
    </Container>
  )
}