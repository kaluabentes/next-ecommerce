import { useRouter } from "next/router"
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react"

import Product from "@/models/Product"

export interface CheckoutState {
  cardForm: any
}

export interface CheckoutStateParam {
  cardForm?: any
}

export type Callback = (prevState: CheckoutState) => CheckoutState

const DEFAULT_ACTION_STATE = {
  setCheckout: (callback: Callback) => {},
}

const DEFAULT_VALUE_STATE = {
  cardForm: {},
}

export const CheckoutValueContext =
  createContext<CheckoutState>(DEFAULT_VALUE_STATE)
export const CheckoutActionContext = createContext(DEFAULT_ACTION_STATE)

export default function CheckoutContextProvider({
  children,
}: {
  children: ReactNode
}) {
  const [state, setState] = useState<CheckoutState>(DEFAULT_VALUE_STATE)

  return (
    <CheckoutValueContext.Provider value={state}>
      <CheckoutActionContext.Provider value={{ setCheckout: setState }}>
        {children}
      </CheckoutActionContext.Provider>
    </CheckoutValueContext.Provider>
  )
}
