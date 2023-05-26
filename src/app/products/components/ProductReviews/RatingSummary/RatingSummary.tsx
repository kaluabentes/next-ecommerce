import Review from "@/models/Review"

import {
  RatingBox,
  RatingCount,
  RatingItem,
  RatingProgress,
  RatingText,
} from "./RatingSummary.styles"
import { AiFillStar } from "react-icons/ai"

interface RatingSummaryProps {
  reviews: Review[]
}

const getReviewsCount = (reviews: Review[], level: number) => {
  return reviews.filter((review) => review.rating === level).length
}

const getPercent = (value: number, total: number) => {
  return (value / total) * 100
}

export default function RatingSummary({ reviews }: RatingSummaryProps) {
  return (
    <RatingBox>
      <RatingItem>
        <RatingText>5</RatingText>
        <AiFillStar />
        <RatingProgress
          $percent={`${getPercent(
            getReviewsCount(reviews, 5),
            reviews.length
          )}%`}
        />
        <RatingCount>{getReviewsCount(reviews, 5)}</RatingCount>
      </RatingItem>
      <RatingItem>
        <RatingText>4</RatingText>
        <AiFillStar />
        <RatingProgress
          $percent={`${getPercent(
            getReviewsCount(reviews, 4),
            reviews.length
          )}%`}
        />
        <RatingCount>{getReviewsCount(reviews, 4)}</RatingCount>
      </RatingItem>
      <RatingItem>
        <RatingText>3</RatingText>
        <AiFillStar />
        <RatingProgress
          $percent={`${getPercent(
            getReviewsCount(reviews, 3),
            reviews.length
          )}%`}
        />
        <RatingCount>{getReviewsCount(reviews, 3)}</RatingCount>
      </RatingItem>
      <RatingItem>
        <RatingText>2</RatingText>
        <AiFillStar />
        <RatingProgress
          $percent={`${getPercent(
            getReviewsCount(reviews, 2),
            reviews.length
          )}%`}
        />
        <RatingCount>{getReviewsCount(reviews, 2)}</RatingCount>
      </RatingItem>
      <RatingItem>
        <RatingText>1</RatingText>
        <AiFillStar />
        <RatingProgress
          $percent={`${getPercent(
            getReviewsCount(reviews, 1),
            reviews.length
          )}%`}
        />
        <RatingCount>{getReviewsCount(reviews, 1)}</RatingCount>
      </RatingItem>
    </RatingBox>
  )
}
