import { useEffect, useState } from "react"

import formatCurrency from "@/utilities/number/formatCurrency"
import QuantityInput from "@/app/design-system/QuantityInput"
import { CartProduct as CartProductType } from "@/contexts/cart/CartContextProvider"
import useCartContext from "@/contexts/cart/useCartContext"

import {
  Container,
  Content,
  FromPrice,
  Image,
  Price,
  Quantity,
  Title,
} from "./CartProduct.styles"

interface CartProductProps {
  product: CartProductType
  onClick?: () => void
  quantityAlignBottom?: boolean
  removeXPadding?: boolean
  hideQuantityInput?: boolean
}

export default function CartProduct({
  product,
  onClick,
  quantityAlignBottom,
  removeXPadding,
  hideQuantityInput = false,
}: CartProductProps) {
  const { changeQuantity, removeProduct } = useCartContext()
  const [quantity, setQuantity] = useState(product?.quantity)

  const handleQuantityChange = (value: number) => {
    setQuantity(value)
    changeQuantity(product.slug!, value)
  }

  return (
    <Container
      $quantityAlignBottom={quantityAlignBottom}
      $removeXPadding={removeXPadding}
    >
      <Image src={product?.thumb} alt={product?.name} />
      <Content>
        <Title type="button" onClick={onClick}>
          {product?.name}
        </Title>
        <div>
          <Price>{formatCurrency(product?.price!)}</Price>
          {!hideQuantityInput && product?.fromPrice && (
            <FromPrice>{formatCurrency(product?.fromPrice!)}</FromPrice>
          )}
          {hideQuantityInput && <Quantity>{quantity}x</Quantity>}
        </div>
      </Content>
      {!hideQuantityInput && (
        <QuantityInput
          onRemove={() => removeProduct(product?.slug!)}
          onChange={handleQuantityChange}
          value={quantity!}
        />
      )}
    </Container>
  )
}
