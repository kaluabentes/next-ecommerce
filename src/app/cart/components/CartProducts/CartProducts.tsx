"use client"

import { useRouter } from "next/navigation"
import CartProduct from "../CartProduct/CartProduct"
import { Box } from "./CartProducts.styles"
import { useCartContext } from "@/contexts/cart"

export default function CartProducts() {
  const { cart } = useCartContext()
  const router = useRouter()

  return (
    <Box>
      {cart.products.map((product) => (
        <CartProduct
          key={product.slug}
          product={product}
          onClick={() => router.push(`/products/${product.slug}`)}
        />
      ))}
    </Box>
  )
}
