"use client"

import { BiMap, BiMenu, BiUser } from "react-icons/bi"
import BasketButton from "./BasketButton"
import {
  Container,
  IconButton,
  IconGroup,
  Logo,
  LogoContainer,
} from "./Header.styles"

export default function Header() {
  return (
    <Container>
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
    </Container>
  )
}
