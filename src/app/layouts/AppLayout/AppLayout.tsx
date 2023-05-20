"use client"

import { ReactNode } from "react"

import Header from "@/app/components/Header"
import { Main } from "./AppLayout.styles"
import Footer from "@/app/components/Footer"
import { GlobalStyle } from "@/app/styles/global"

interface AppLayoutProps {
  children: ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}
