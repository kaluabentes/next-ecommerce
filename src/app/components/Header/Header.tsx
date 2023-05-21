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

interface HeaderProps {
  onMenuClick: () => void
}

export default function Header({ onMenuClick }: HeaderProps) {
  const isLargeScreen = useMediaQuery({
    query: `(min-width: ${theme.breakpoints.large})`,
  })

  return (
    <Container>
      <TopContainer>
        <IconButton onClick={onMenuClick}>
          <BiMenu />
        </IconButton>
        <LogoContainer>
          <Logo src="/droptron.svg" />
        </LogoContainer>
        {isLargeScreen && <SearchField />}
        <IconGroup>
          <IconButton>
            <BiUser />
            {isLargeScreen && <IconButtonLabel>Minha conta</IconButtonLabel>}
          </IconButton>
          <IconButton>
            <BiMap />
            {isLargeScreen && (
              <IconButtonLabel>Rastrear pedido</IconButtonLabel>
            )}
          </IconButton>
          <BasketButton count={1} />
        </IconGroup>
      </TopContainer>
      {!isLargeScreen && <SearchField />}
    </Container>
  )
}
