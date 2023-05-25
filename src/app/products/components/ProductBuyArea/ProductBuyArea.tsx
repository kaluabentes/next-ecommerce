"use client"

import Product from "@/models/Product"
import {
  AppMax,
  Container,
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

interface ProductBuyAreaProps {
  product: Product
}

export default function ProductBuyArea({ product }: ProductBuyAreaProps) {
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
      <DiscountFlag $static>-50%</DiscountFlag>
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
      <ShippingBox>
        <TbTruckDelivery />
        <ShippingGroup>
          <ShippingTitle>FRETE GRÁTIS</ShippingTitle>
          <ShippingText>
            Compre sem preocupação, o frete é por nossa conta.
          </ShippingText>
        </ShippingGroup>
      </ShippingBox>
      <Button variant="secondary" size="lg" full>
        Comprar agora
      </Button>
      <PaymentMethodBox>
        <PaymentTitle>Pagamento seguro com</PaymentTitle>
        <AppMax src="/appmax.png" />
        <PaymentMethods src="/payment-methods.png" />
      </PaymentMethodBox>
    </Container>
  )
}
