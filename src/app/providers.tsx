"use client"

import { ReactNode } from "react"
import { ThemeProvider } from "styled-components"

import theme from "./styles/theme"
import CartContextProvider from "@/contexts/cart/CartContextProvider"

interface ProvidersProps {
  children: ReactNode
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider theme={theme}>
      <CartContextProvider>{children}</CartContextProvider>
    </ThemeProvider>
  )
}
