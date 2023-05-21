"use client"

import { ReactNode, useState } from "react"

import Header from "@/app/components/Header"
import { Main } from "./AppLayout.styles"
import Footer from "@/app/components/Footer"
import { GlobalStyle } from "@/app/styles/global"
import Menu from "@/app/components/Menu"

interface AppLayoutProps {
  children: ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev)
  }

  return (
    <>
      <GlobalStyle />
      <Header onMenuClick={handleMenuToggle} />
      <Menu items={[]} isOpen={isMenuOpen} onMenuToggle={handleMenuToggle} />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}
