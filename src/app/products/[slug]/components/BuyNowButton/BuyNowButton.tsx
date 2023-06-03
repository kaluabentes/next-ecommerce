"use client"

import Button from "@/app/design-system/Button"
import useShowOnScroll from "@/hooks/useShowOnScroll"

import { BuyNowButtonBox } from "./BuyNowButton.styles"

interface BuyNowButtonProps {
  onClick: () => void
}

export default function BuyNowButton({ onClick }: BuyNowButtonProps) {
  const { isShow } = useShowOnScroll(1000)

  return (
    <BuyNowButtonBox $isShow={isShow} onClick={onClick}>
      <Button variant="secondary" size="lg" full>
        Compre Agora
      </Button>
    </BuyNowButtonBox>
  )
}
