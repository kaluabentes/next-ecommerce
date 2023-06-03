"use client"

import { ReactNode } from "react"
import CheckoutContextProvider from "./contexts/checkout/CheckoutContextProvider"

interface CheckoutProvidersProps {
  children: ReactNode
}

export default function CheckoutProviders({
  children,
}: CheckoutProvidersProps) {
  return <CheckoutContextProvider>{children}</CheckoutContextProvider>
}
