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
  Title,
} from "./CartProduct.styles"

interface CartProductProps {
  product: CartProductType
  onClick: () => void
  quantityAlignBottom?: boolean
  removeXPadding?: boolean
  hideQuantiy?: boolean
}

export default function CartProduct({
  product,
  onClick,
  quantityAlignBottom,
  removeXPadding,
  hideQuantiy = false,
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
        <Title onClick={onClick}>{product?.name}</Title>
        <div>
          <Price>{formatCurrency(product?.price!)}</Price>
          <FromPrice>{formatCurrency(product?.fromPrice!)}</FromPrice>
          {hideQuantiy && <div>{quantity}x</div>}
        </div>
      </Content>
      {!hideQuantiy && (
        <QuantityInput
          onRemove={() => removeProduct(product?.slug!)}
          onChange={handleQuantityChange}
          value={quantity!}
        />
      )}
    </Container>
  )
}
