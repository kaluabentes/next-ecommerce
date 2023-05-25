"use client"

import Button from "@/components/Button"

import { BuyNowButtonBox } from "./BuyNowButton.styles"
import { useEffect, useState } from "react"

export default function BuyNowButton() {
  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    const handle = () => {
      if (window.scrollY > 800) {
        setIsShow(true)
        console.log(true)
      } else {
        setIsShow(false)
        console.log(false)
      }
    }

    window.addEventListener("scroll", handle)

    return () => {
      window.removeEventListener("scroll", handle)
    }
  }, [])

  console.log("isShow", isShow)

  return (
    <BuyNowButtonBox $isShow={isShow}>
      <Button variant="secondary" size="lg" full>
        Compre Agora
      </Button>
    </BuyNowButtonBox>
  )
}
