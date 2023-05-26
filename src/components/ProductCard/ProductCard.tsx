"use client"

import Product from "@/models/Product"
import {
  Item,
  Image,
  Title,
  DiscountFlag,
  FromText,
  PriceContainer,
  Price,
  FromPrice,
  PortionPrice,
  ReviewContainer,
  ReviewRating,
  PriceSection,
} from "./ProductCard.styles"
import formatCurrency from "@/utilities/number/formatCurrency"
import getAverage from "@/utilities/number/getAverage"
import ReviewStars from "@/components/ReviewStars/ReviewStars"

interface ProductCardProps {
  product: Product
  onClick: () => void
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  const reviewsAverage = getAverage(product.reviews?.map((r) => r.rating)!)

  return (
    <Item key={product.slug} onClick={onClick}>
      <DiscountFlag>{product.discount}</DiscountFlag>
      <Image src={product.thumb} alt={product.name} />
      <Title>{product.name}</Title>
      <PriceSection>
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
        <ReviewContainer>
          <ReviewRating>
            {reviewsAverage === 5 ? "5.0" : reviewsAverage}
          </ReviewRating>
          <ReviewStars rating={reviewsAverage} />
        </ReviewContainer>
      </PriceSection>
    </Item>
  )
}
