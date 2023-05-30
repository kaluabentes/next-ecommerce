import { useRouter } from "next/router"
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react"

import Product from "@/models/Product"

interface CartState {
  products: Product[]
  isReady: boolean
}

interface CartStateParam {
  products?: Product[]
  isReady?: boolean
}

const DEFAULT_ACTION_STATE = {
  setCart: (cart: CartStateParam) => {},
}

const DEFAULT_VALUE_STATE = {
  products: [],
  isReady: false,
}

export const CartValueContext = createContext<CartState>(DEFAULT_VALUE_STATE)
export const CartActionContext = createContext(DEFAULT_ACTION_STATE)

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<CartState>(DEFAULT_VALUE_STATE)

  if (process.env.NODE_ENV === "development") {
    console.log("cart state", state)
  }

  const mutateState = (newState: CartStateParam) => {
    localStorage.setItem(`kalux.cart`, JSON.stringify(newState))
    setState(newState as CartState)
  }

  useEffect(() => {
    const localState = localStorage.getItem(`kalux.cart`)

    if (localState) {
      setState({
        ...JSON.parse(localState),
        isReady: true,
      })
    } else {
      setState((prevState) => ({
        ...prevState,
        isReady: true,
      }))
    }
  }, [])

  return (
    <CartValueContext.Provider value={state}>
      <CartActionContext.Provider value={{ setCart: mutateState }}>
        {children}
      </CartActionContext.Provider>
    </CartValueContext.Provider>
  )
}

export const useCartContext = (): {
  setCart: (state: CartStateParam) => void
  cart: CartState
} => {
  const { setCart } = useContext(CartActionContext)
  const cart = useContext(CartValueContext)

  if (!setCart || !cart) {
    throw new Error("Wrap CartContextProvider in the root component")
  }

  return { setCart, cart }
}
