import { useContext } from "react"

import {
  Callback,
  CheckoutActionContext,
  CheckoutState,
  CheckoutValueContext,
} from "./CheckoutContextProvider"

interface CheckoutContextApi {
  checkout: CheckoutState
  setCheckout: (callback: Callback) => void
}

export default function useCheckoutContext(): CheckoutContextApi {
  const { setCheckout } = useContext(CheckoutActionContext)
  const checkout = useContext<CheckoutState>(CheckoutValueContext)

  return {
    setCheckout,
    checkout,
  }
}
