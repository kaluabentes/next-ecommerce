import { useContext } from "react"

import {
  Callback,
  CheckoutActionContext,
  CheckoutValueContext,
} from "./CheckoutContextProvider"

interface CartContextApi {
  checkout: any
  setCheckout: (callback: Callback) => void
}

export default function useCartContext(): CartContextApi {
  const { setCheckout } = useContext(CheckoutActionContext)
  const checkout = useContext(CheckoutValueContext)

  return {
    setCheckout,
    checkout,
  }
}
