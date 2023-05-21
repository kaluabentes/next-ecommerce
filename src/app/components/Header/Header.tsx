"use client"

import { BiMap, BiMenu, BiUser } from "react-icons/bi"
import BasketButton from "./BasketButton"
import {
  TopContainer,
  IconButton,
  IconGroup,
  Logo,
  LogoContainer,
  Container,
} from "./Header.styles"
import SearchField from "./SearchField"

export default function Header() {
  return (
    <Container>
      <TopContainer>
        <IconButton>
          <BiMenu />
        </IconButton>
        <LogoContainer>
          <Logo src="/droptron.svg" />
        </LogoContainer>
        <IconGroup>
          <IconButton>
            <BiUser />
          </IconButton>
          <IconButton>
            <BiMap />
          </IconButton>
          <BasketButton count={1} />
        </IconGroup>
      </TopContainer>
      <SearchField />
    </Container>
  )
}
