"use client"

import { ReactNode, useEffect, useState } from "react"

import Header from "@/app/components/Header"
import { Main } from "./AppLayout.styles"
import Footer from "@/app/components/Footer"
import { GlobalStyle } from "@/app/styles/global"
import Menu from "@/app/components/Menu"
import PageSpinner from "@/components/PageSpinner"
import menuItems from "@/config/menuItems"
import Benefits from "@/app/components/Benefits"
import benefitItems from "@/config/benefitItems"
import { useRouter } from "next/navigation"

interface AppLayoutProps {
  children: ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  const router = useRouter()

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isReady, setIsReady] = useState(false)

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev)
  }

  useEffect(() => {
    setIsReady(true)
  }, [])

  return (
    <>
      <GlobalStyle />
      {isReady ? (
        <>
          <Header onMenuClick={handleMenuToggle} />
          <Menu
            items={menuItems}
            isOpen={isMenuOpen}
            onMenuToggle={handleMenuToggle}
            onNavClick={(path: string) => router.push(path)}
          />
          <Main>{children}</Main>
          <Benefits items={benefitItems} />
          <Footer />
        </>
      ) : (
        <PageSpinner />
      )}
    </>
  )
}
