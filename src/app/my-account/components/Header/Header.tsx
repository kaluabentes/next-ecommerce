"use client"

import { signOut } from "next-auth/react"

import { Title } from "@/app/[slug]/components/PageContent/PageContent.styles"
import { ButtonGrid, Container } from "./Header.styles"
import Button from "@/app/design-system/Button"
import { useState } from "react"

interface HeaderProps {
  name?: string
}

export default function Header({ name }: HeaderProps) {
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  return (
    <Container>
      <Title>Olá, {name}</Title>
      <ButtonGrid>
        <Button>Editar perfil</Button>
        <Button
          isLoading={isLoggingOut}
          onClick={() => {
            setIsLoggingOut(true)
            signOut()
          }}
        >
          Sair
        </Button>
      </ButtonGrid>
    </Container>
  )
}
