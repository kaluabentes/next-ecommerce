"use client"

import { useRouter } from "next/navigation"
import CartProduct from "../CartProduct/CartProduct"
import { Box, EmptyStateBox, EmptyStateText } from "./CartProducts.styles"
import useCartContext from "@/contexts/cart/useCartContext"
import { BiCart } from "react-icons/bi"

export default function CartProducts() {
  const { cart } = useCartContext()
  const router = useRouter()

  return (
    <Box>
      {!cart.products.length && (
        <EmptyStateBox>
          <BiCart />
          <EmptyStateText>Seu carrinho de compras está vazio.</EmptyStateText>
        </EmptyStateBox>
      )}
      {cart.products.map((product) => (
        <CartProduct
          key={product?.slug}
          product={product}
          onClick={() => router.push(`/products/${product.slug}`)}
        />
      ))}
    </Box>
  )
}
