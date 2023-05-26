"use client"

import ReviewStars from "@/components/ReviewStars/ReviewStars"
import {
  Container,
  MaxContainer,
  Rating,
  RatingBox,
  RatingGrid,
  Title,
} from "./ProductReviews.styles"
import RatingSummary from "./RatingSummary"
import Button from "@/components/Button"

export default function ProductReviews() {
  return (
    <Container>
      <MaxContainer>
        <Title>Avaliação dos Clientes</Title>
        <RatingGrid>
          <RatingBox>
            <Rating>5.0</Rating>
            <ReviewStars rating={5} />
          </RatingBox>
          <RatingSummary />
        </RatingGrid>
      </MaxContainer>
    </Container>
  )
}
