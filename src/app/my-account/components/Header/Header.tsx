"use client"

import { signOut } from "next-auth/react"

import { Title } from "@/app/[slug]/components/PageContent/PageContent.styles"
import { ButtonGrid, Container } from "./Header.styles"
import Button from "@/app/design-system/Button"
import { useState } from "react"
import EditProfileModal from "../EditProfileModal"
import User from "@/models/User"

interface HeaderProps {
  user?: User
}

export default function Header({ user }: HeaderProps) {
  const [isLoggingOut, setIsLoggingOut] = useState(false)
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false)

  return (
    <Container>
      <Title>Olá, {user?.name}</Title>
      <ButtonGrid>
        <Button onClick={() => setIsEditProfileOpen(true)}>
          Editar perfil
        </Button>
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
      <EditProfileModal
        user={user!}
        isOpen={isEditProfileOpen}
        onClose={() => setIsEditProfileOpen(false)}
      />
    </Container>
  )
}
