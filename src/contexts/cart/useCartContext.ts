import { useContext } from "react"
import {
  CartActionContext,
  CartProduct,
  CartState,
  CartValueContext,
} from "./CartContextProvider"
import Product from "@/models/Product"

export default function useCartContext(): {
  cart: CartState
  totalProductsAmount: number
  addProduct: (product: Product) => void
  changeQuantity: (slug: string, value: number) => void
  incrementQuantity: (slug: string) => void
  decrementQuantity: (slug: string) => void
  removeProduct: (slug: string) => void
} {
  const { setCart } = useContext(CartActionContext)
  const cart = useContext(CartValueContext)
  const totalProductsAmount = cart.products.reduce(
    (prev, curr) => prev + (curr?.quantity || 0),
    0
  )

  if (!setCart || !cart) {
    throw new Error("Wrap CartContextProvider in the root component")
  }

  const addProduct = (product: Product) => {
    setCart((prevCart) => ({
      ...prevCart,
      products: [...prevCart.products, { ...product, quantity: 1 }],
    }))
  }

  const changeQuantity = (slug: string, value: number) => {
    setCart((prevCart) => ({
      ...prevCart,
      products: prevCart.products.map((cartProduct: CartProduct) => {
        if (cartProduct.slug === slug) {
          return {
            ...cartProduct,
            quantity: value,
          }
        }

        return cartProduct
      }) as CartProduct[],
    }))
  }

  const incrementQuantity = (slug: string) => {
    setCart((prevCart) => ({
      ...prevCart,
      products: prevCart.products.map((cartProduct: CartProduct) => {
        if (cartProduct.slug === slug) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity! + 1,
          }
        }

        return cartProduct
      }) as CartProduct[],
    }))
  }

  const decrementQuantity = (slug: string) => {
    setCart((prevCart) => ({
      ...prevCart,
      products: prevCart.products.map((cartProduct: CartProduct) => {
        if (cartProduct.slug === slug) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity! - 1,
          }
        }

        return cartProduct
      }) as CartProduct[],
    }))
  }

  const removeProduct = (slug: string) => {
    setCart((prevCart) => ({
      ...prevCart,
      products: prevCart.products.filter((product) => product.slug !== slug),
    }))
  }

  return {
    cart,
    totalProductsAmount,
    addProduct,
    incrementQuantity,
    decrementQuantity,
    changeQuantity,
    removeProduct,
  }
}
