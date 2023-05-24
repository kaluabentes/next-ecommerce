"use client"

import HorizontalCarousel from "@/components/HorizontalCarousel"
import { AiFillStar } from "react-icons/ai"
import {
  Item,
  Image,
  Title,
  GhostItem,
  DiscountFlag,
  FromText,
  PriceContainer,
  Price,
  FromPrice,
  PortionPrice,
  ReviewContainer,
  ReviewIconContainer,
  ReviewRating,
  PriceSection,
} from "./ProductsCarousel.styles"
import ContentContainer from "../ContentContainer"
import Review from "@/app/models/Review"
import range from "@/utilities/array/range"
import getAverage from "@/utilities/number/getAverage"
import ReviewStars from "../ReviewStars/ReviewStars"
import formatCurrency from "@/utilities/number/formatCurrency"

interface Item {
  title: string
  image: string
  price: number
  fromPrice: number
  portionPrice: number
  slug: string
  reviews: Review[]
}

interface ProductsCarouselProps {
  items: Item[]
}

export default function ProductsCarousel({ items }: ProductsCarouselProps) {
  const renderItem = (item: Item) => {
    const reviewsAverage = getAverage(item.reviews.map((r) => r.rating))

    console.log("reviewsAverage", reviewsAverage)

    return (
      <Item key={item.slug}>
        <DiscountFlag>-50%</DiscountFlag>
        <Image src={item.image} alt={item.title} />
        <Title>{item.title}</Title>
        <PriceSection>
          <FromText>A partir de</FromText>
          <PriceContainer>
            <Price>{formatCurrency(item.price)}</Price>
            <FromPrice>{formatCurrency(item.fromPrice)}</FromPrice>
          </PriceContainer>
          <PortionPrice>
            em até <strong>12x</strong> de{" "}
            <span className="portion-price">
              {formatCurrency(item.portionPrice)}
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

  return (
    <HorizontalCarousel
      title="Ofertas da semana"
      justifyContent="flex-start"
      gap={16}
    >
      {items.map(renderItem)}
      <GhostItem>.</GhostItem>
    </HorizontalCarousel>
  )
}
