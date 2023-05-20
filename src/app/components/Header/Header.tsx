"use client"

import BasketButton from "./BasketButton"
import { Container } from "./Header.styles"

export default function Header() {
  return (
    <Container>
      <BasketButton count={1} />
    </Container>
  )
}
