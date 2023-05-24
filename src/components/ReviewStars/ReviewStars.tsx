import range from "@/utilities/array/range"

import { Container, Star, StarBox, StarContainer } from "./ReviewStars.styles"
import isFloat from "@/utilities/number/isFloat"
import { Fragment } from "react"

interface ReviewsStarsProps {
  rating: number
}

export default function ReviewStars({ rating }: ReviewsStarsProps) {
  if (isFloat(rating)) {
    const [leftNumber, rightNumber] = String(rating).split(".")

    return (
      <Container>
        {range(Number(leftNumber)).map((n) => (
          <Star $isFilled key={n} />
        ))}
        {range(5 - Number(leftNumber)).map((n) => (
          <Fragment key={n}>
            <StarContainer>
              <Star />
              <StarBox $progress={`${rightNumber}0%`}>
                <Star $isFilled />
              </StarBox>
            </StarContainer>
          </Fragment>
        ))}
      </Container>
    )
  }

  return (
    <Container>
      {range(rating).map((n) => (
        <Star $isFilled key={n} />
      ))}
      {range(5 - rating).map((n) => (
        <Star key={n} />
      ))}
    </Container>
  )
}
