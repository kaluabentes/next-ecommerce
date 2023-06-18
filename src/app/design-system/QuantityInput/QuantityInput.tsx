import { BiMinus, BiPlus, BiTrash } from "react-icons/bi"
import { Button, Container, Quantity } from "./QuantityInput.styles"
import { MouseEvent, useEffect, useState } from "react"

interface QuantityInputProps {
  value: number
  className?: string
  onChange: (nextValue: number) => void
  onRemove?: () => void
  size?: "lg"
  hideTrash?: boolean
}

export default function QuantityInput({
  value,
  onChange,
  onRemove,
  className,
  size,
  hideTrash = false,
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
    <Container className={["quantity-input", className].join(" ")} $size={size}>
      <Button
        onClick={value === 1 ? onRemove : handleSubtract}
        $hideTrash={hideTrash}
        $value={value}
      >
        {value === 1 && !hideTrash ? <BiTrash /> : <BiMinus />}
      </Button>
      <Quantity>{value}</Quantity>
      <Button onClick={handleAdd}>
        <BiPlus />
      </Button>
    </Container>
  )
}
