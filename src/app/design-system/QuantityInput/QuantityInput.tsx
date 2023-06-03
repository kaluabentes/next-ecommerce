import { BiMinus, BiPlus, BiTrash } from "react-icons/bi"
import { Button, Container, Quantity } from "./QuantityInput.styles"
import { MouseEvent, useEffect, useState } from "react"

interface QuantityInputProps {
  value: number
  className?: string
  onChange: (nextValue: number) => void
  onRemove: () => void
}

export default function QuantityInput({
  value,
  onChange,
  onRemove,
  className,
}: QuantityInputProps) {
  const handleSubtract = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()

    const nextValue = value - 1

    if (nextValue <= 0) {
      return
    }

    onChange(nextValue)
  }

  const handleAdd = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()

    const nextValue = value + 1
    onChange(nextValue)
  }

  return (
    <Container className={["quantity-input", className].join(" ")}>
      <Button onClick={value === 1 ? onRemove : handleSubtract}>
        {value === 1 ? <BiTrash /> : <BiMinus />}
      </Button>
      <Quantity>{value}</Quantity>
      <Button onClick={handleAdd}>
        <BiPlus />
      </Button>
    </Container>
  )
}
