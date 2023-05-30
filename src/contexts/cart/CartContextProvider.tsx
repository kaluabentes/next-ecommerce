import { useRouter } from "next/router"
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react"

import Product from "@/models/Product"

export interface CartProduct extends Product {
  quantity?: number
}

export interface CartState {
  products: CartProduct[]
  isReady: boolean
}

export interface CartStateParam {
  products?: CartProduct[]
  isReady?: boolean
}

type Callback = (prevState: CartState) => CartState

const DEFAULT_ACTION_STATE = {
  setCart: (callback: Callback) => {},
}

const DEFAULT_VALUE_STATE = {
  products: [],
  isReady: false,
}

export const CartValueContext = createContext<CartState>(DEFAULT_VALUE_STATE)
export const CartActionContext = createContext(DEFAULT_ACTION_STATE)

export default function CartContextProvider({
  children,
}: {
  children: ReactNode
}) {
  const [state, setState] = useState<CartState>(DEFAULT_VALUE_STATE)

  if (process.env.NODE_ENV === "development") {
    console.log("cart state", state)
  }

  const mutateState = (callback: Callback) => {
    setState((prev: CartState) => {
      const newState = callback(prev)

      localStorage.setItem(`kalux.cart`, JSON.stringify(newState))

      return newState
    })
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
