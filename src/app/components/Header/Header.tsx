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
      <TopContainer>
        <IconButton onClick={onMenuClick}>
          <BiMenu />
        </IconButton>
        <LogoContainer>
          <Logo src="/droptron.svg" />
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
            <BiMap />
            {isLargeScreen && isMounted && (
              <IconButtonLabel>Rastrear pedido</IconButtonLabel>
            )}
          </IconButton>
          <BasketButton count={1} />
        </IconGroup>
      </TopContainer>
      {!isLargeScreen && isMounted && <SearchField />}
    </Container>
  )
}
