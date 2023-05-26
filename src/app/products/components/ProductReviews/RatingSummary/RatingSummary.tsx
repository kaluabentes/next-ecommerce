import Review from "@/models/Review"

import {
  RatingBox,
  RatingCount,
  RatingItem,
  RatingProgress,
  RatingText,
} from "./RatingSummary.styles"
import { AiFillStar } from "react-icons/ai"

export default function RatingSummary() {
  return (
    <RatingBox>
      <RatingItem>
        <RatingText>5</RatingText>
        <AiFillStar />
        <RatingProgress $percent="90%" />
        <RatingCount>145</RatingCount>
      </RatingItem>
      <RatingItem>
        <RatingText>4</RatingText>
        <AiFillStar />
        <RatingProgress $percent="20%" />
        <RatingCount>17</RatingCount>
      </RatingItem>
      <RatingItem>
        <RatingText>3</RatingText>
        <AiFillStar />
        <RatingProgress $percent="0%" />
        <RatingCount>0</RatingCount>
      </RatingItem>
      <RatingItem>
        <RatingText>2</RatingText>
        <AiFillStar />
        <RatingProgress $percent="0%" />
        <RatingCount>0</RatingCount>
      </RatingItem>
      <RatingItem>
        <RatingText>1</RatingText>
        <AiFillStar />
        <RatingProgress $percent="0%" />
        <RatingCount>0</RatingCount>
      </RatingItem>
    </RatingBox>
  )
}
