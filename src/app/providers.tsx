"use client"

import { ReactNode } from "react"
import { ThemeProvider } from "styled-components"

import theme from "./styles/theme"
import CartContextProvider from "@/contexts/cart/CartContextProvider"
import ToastContextProvider from "./design-system/Toast/context/ToastContextProvider"
import { SessionProvider } from "next-auth/react"

interface ProvidersProps {
  children: ReactNode
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <SessionProvider>
      <ThemeProvider theme={theme}>
        <ToastContextProvider>
          <CartContextProvider>{children}</CartContextProvider>
        </ToastContextProvider>
      </ThemeProvider>
    </SessionProvider>
  )
}
