"use client"

import Button from "@/components/Button"
import useShowOnScroll from "@/hooks/useShowOnScroll"

import { BuyNowButtonBox } from "./BuyNowButton.styles"

export default function BuyNowButton() {
  const { isShow } = useShowOnScroll(1000)

  return (
    <BuyNowButtonBox $isShow={isShow}>
      <Button variant="secondary" size="lg" full>
        Compre Agora
      </Button>
    </BuyNowButtonBox>
  )
}
