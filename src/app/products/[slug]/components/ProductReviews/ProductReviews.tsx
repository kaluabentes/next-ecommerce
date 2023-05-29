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
import getAverage from "@/utilities/number/getAverage"

interface ProductReviewsProps {
  reviews: Review[]
}

export default function ProductReviews({ reviews }: ProductReviewsProps) {
  const averageRating = getAverage(reviews.map((r) => r.rating))

  return (
    <>
      <HeaderBox>
        <MaxContainer>
          <Title>Avaliação dos Clientes</Title>
          <RatingGrid>
            <RatingBox>
              <Rating>{averageRating}</Rating>
              <ReviewStars rating={averageRating} />
            </RatingBox>
            <RatingSummary reviews={reviews} />
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
