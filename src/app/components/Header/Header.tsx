"use client"

import { BiMap, BiMenu, BiUser } from "react-icons/bi"
import { useMediaQuery } from "react-responsive"
import ContentContainer from "@/app/design-system/ContentContainer"
import Link from "next/link"
import { RiTruckLine } from "react-icons/ri"
import { TbTruckDelivery } from "react-icons/tb"
import { useRouter } from "next/navigation"

import BasketButton from "./BasketButton"
import {
  TopContainer,
  IconButton,
  IconGroup,
  Logo,
  LogoContainer,
  Container,
  IconButtonLabel,
} from "./Header.styles"
import SearchField from "./SearchField"
import theme from "@/app/styles/theme"
import useIsMounted from "@/hooks/useIsMounted"
import useCartContext from "@/contexts/cart/useCartContext"

interface HeaderProps {
  onMenuClick: () => void
}

export default function Header({ onMenuClick }: HeaderProps) {
  const { totalProductsQuantity } = useCartContext()
  const router = useRouter()

  const { isMounted } = useIsMounted()
  const isLargeScreen = useMediaQuery({
    query: `(min-width: ${theme.breakpoints.large})`,
  })

  return (
    <Container>
      <ContentContainer>
        <TopContainer>
          {!isLargeScreen && isMounted && (
            <IconButton onClick={onMenuClick}>
              <BiMenu />
            </IconButton>
          )}
          <LogoContainer>
            <Link href="/">
              <Logo src="/logo.svg" alt="Droptron" />
            </Link>
          </LogoContainer>
          {isLargeScreen && isMounted && <SearchField />}
          <IconGroup>
            <IconButton onClick={() => router.push("/my-account")}>
              <BiUser />
              {isLargeScreen && isMounted && (
                <IconButtonLabel>Minha conta</IconButtonLabel>
              )}
            </IconButton>
            <IconButton onClick={() => router.push("/track")}>
              <TbTruckDelivery />
              {isLargeScreen && isMounted && (
                <IconButtonLabel>Rastrear pedido</IconButtonLabel>
              )}
            </IconButton>
            <BasketButton
              onClick={() => router.push("/cart")}
              count={totalProductsQuantity}
            />
          </IconGroup>
        </TopContainer>
        {!isLargeScreen && isMounted && <SearchField />}
      </ContentContainer>
    </Container>
  )
}
