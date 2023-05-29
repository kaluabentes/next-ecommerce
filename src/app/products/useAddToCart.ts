import { useCartContext } from "@/contexts/cart"
import Product from "@/models/Product"
import { useRouter } from "next/navigation"

export default function useAddToCart() {
  const { cart, setCart } = useCartContext()
  const router = useRouter()

  const addToCart = (product: Product) => {
    setCart({
      ...cart,
      products: [...cart.products, product],
    })

    router.push("/cart")
  }

  return {
    addToCart,
  }
}
