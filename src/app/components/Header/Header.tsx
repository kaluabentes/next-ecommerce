"use client"

import { BiMap, BiMenu, BiUser } from "react-icons/bi"
import { useMediaQuery } from "react-responsive"
import ContentContainer from "@/components/ContentContainer"

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
import { RiTruckLine } from "react-icons/ri"
import { TbTruckDelivery } from "react-icons/tb"

interface HeaderProps {
  onMenuClick: () => void
}

export default function Header({ onMenuClick }: HeaderProps) {
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
            <Logo src="/logo.svg" alt="Droptron" />
          </LogoContainer>
          {isLargeScreen && isMounted && <SearchField />}
          <IconGroup>
            <IconButton>
              <BiUser />
              {isLargeScreen && isMounted && (
                <IconButtonLabel>Minha conta</IconButtonLabel>
              )}
            </IconButton>
            <IconButton>
              <TbTruckDelivery />
              {isLargeScreen && isMounted && (
                <IconButtonLabel>Rastrear pedido</IconButtonLabel>
              )}
            </IconButton>
            <BasketButton count={1} />
          </IconGroup>
        </TopContainer>
        {!isLargeScreen && isMounted && <SearchField />}
      </ContentContainer>
    </Container>
  )
}
