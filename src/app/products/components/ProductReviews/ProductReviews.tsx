"use client"

import ReviewStars from "@/components/ReviewStars/ReviewStars"
import {
  HeaderBox,
  MaxContainer,
  Rating,
  RatingBox,
  RatingGrid,
  ReviewContent,
  ReviewItem,
  ReviewItemComment,
  ReviewItemImage,
  ReviewItemUsername,
  ReviewsGrid,
  Title,
} from "./ProductReviews.styles"
import RatingSummary from "./RatingSummary"
import Button from "@/components/Button"
import Review from "@/models/Review"

interface ProductReviewsProps {
  reviews: Review[]
}

export default function ProductReviews({ reviews }: ProductReviewsProps) {
  return (
    <>
      <HeaderBox>
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
      </HeaderBox>
      <ReviewsGrid>
        {reviews.map((review) => (
          <ReviewItem>
            <ReviewItemImage src={review.image} alt={review.name} />
            <ReviewContent>
              <ReviewStars rating={review.rating} />
              <ReviewItemUsername>{review.name}</ReviewItemUsername>
              <ReviewItemComment>{review.comment}</ReviewItemComment>
            </ReviewContent>
          </ReviewItem>
        ))}
      </ReviewsGrid>
    </>
  )
}
