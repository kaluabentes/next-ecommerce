import { ReactNode } from "react"
import "@reach/dialog/styles.css"
import { CloseButton, Container } from "./Modal.styles"
import { BiX } from "react-icons/bi"

interface ModalProps {
  size?: "sm" | "md" | "lg"
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

export default function Modal({
  size = "sm",
  isOpen,
  onClose,
  children,
}: ModalProps) {
  return (
    <Container isOpen={isOpen} $size={size} onDismiss={onClose}>
      <CloseButton onClick={onClose}>
        <BiX />
      </CloseButton>
      {children}
    </Container>
  )
}
