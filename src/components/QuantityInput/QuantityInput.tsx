import { BiMinus, BiPlus } from "react-icons/bi"
import { Button, Container, Quantity } from "./QuantityInput.styles"
import { useEffect, useState } from "react"

interface QuantityInputProps {
  value: number
  className?: string
  onChange: (nextValue: number) => void
}

export default function QuantityInput({
  value,
  onChange,
  className,
}: QuantityInputProps) {
  const handleSubtract = () => {
    const nextValue = value - 1

    if (nextValue <= 0) {
      return
    }

    onChange(nextValue)
  }

  const handleAdd = () => {
    const nextValue = value + 1
    onChange(nextValue)
  }

  return (
    <Container className={["quantity-input", className].join(" ")}>
      <Button onClick={handleSubtract}>
        <BiMinus />
      </Button>
      <Quantity>{value}</Quantity>
      <Button onClick={handleAdd}>
        <BiPlus />
      </Button>
    </Container>
  )
}
