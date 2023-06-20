"use client"

import Product from "@/models/Product"
import getAverage from "@/utilities/number/getAverage"
import ReviewStars from "@/app/design-system/ReviewStars/ReviewStars"
import {
  FromPrice,
  FromText,
  PortionPrice,
  Price,
  PriceContainer,
  ReviewContainer,
  ReviewRating,
} from "@/app/design-system/ProductCard/ProductCard.styles"
import formatCurrency from "@/utilities/number/formatCurrency"
import { TbTruckDelivery } from "react-icons/tb"
import Button from "@/app/design-system/Button"
import { useRouter } from "next/navigation"
import Badge from "@/app/design-system/Badge"
import rem from "@/utilities/styles/rem"
import useCartContext from "@/contexts/cart/useCartContext"
import BuyNowButton from "../BuyNowButton/BuyNowButton"

import {
  AppMax,
  BuyButtonContainer,
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
import QuantityInput from "@/app/design-system/QuantityInput"
import { useState } from "react"

interface ProductBuyAreaProps {
  product: Product
  fixed?: boolean
}

export default function ProductBuyArea({ product }: ProductBuyAreaProps) {
  const [quantity, setQuantity] = useState(1)
  const { cart, incrementQuantity, addProduct } = useCartContext()
  const router = useRouter()
  const reviewsAverage = getAverage(product.reviews?.map((r) => r.rating)!)

  const handleBuyNow = () => {
    const existingProduct = cart.products.find(
      (cartProduct) => cartProduct.slug === product.slug
    )

    if (existingProduct) {
      incrementQuantity(product.slug!, quantity)
    } else {
      addProduct(product, quantity)
    }

    setTimeout(() => {
      router.push("/cart")
    }, 1000)
  }

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
      <Badge variant="blue" margin={`0 0 ${rem(10)} 0`}>
        {product.discount}
      </Badge>
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
      <Badge variant="primary" margin={`0 0 ${rem(32)} 0`}>
        Economia de {formatCurrency(product.fromPrice! - product.price!)}
      </Badge>
      <ShippingBox>
        <TbTruckDelivery />
        <ShippingGroup>
          <ShippingTitle>Frete Grátis</ShippingTitle>
          <ShippingText>Prazo de entrega de 15 á 30 dias úteis</ShippingText>
        </ShippingGroup>
      </ShippingBox>
      <BuyButtonContainer>
        <QuantityInput
          onChange={(value) => setQuantity(value)}
          value={quantity}
          size="lg"
          hideTrash
        />
        <Button
          className="buy-now"
          variant="secondary"
          size="lg"
          onClick={handleBuyNow}
          full
        >
          Comprar agora
        </Button>
      </BuyButtonContainer>
      <BuyNowButton onClick={handleBuyNow} />
    </Container>
  )
}
