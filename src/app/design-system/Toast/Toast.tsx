"use client"

import { ReactNode, useEffect } from "react"
import {
  CloseButton,
  Container,
  ContentContainer,
  Description,
  IconContainer,
  Title,
} from "./Toast.styles"
import { ToastStateParam } from "./context/ToastContextProvider"
import { BiX } from "react-icons/bi"

interface ToastProps extends ToastStateParam {
  onClose: () => void
}

export default function Toast({
  icon,
  title,
  description,
  isOpen,
  onClose,
}: ToastProps) {
  return (
    <Container $isOpen={isOpen}>
      <CloseButton onClick={onClose}>
        <BiX />
      </CloseButton>
      <IconContainer>{icon}</IconContainer>
      <ContentContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </ContentContainer>
    </Container>
  )
}
