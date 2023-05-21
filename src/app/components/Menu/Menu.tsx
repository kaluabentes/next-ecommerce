import { BiX } from "react-icons/bi"
import { Container, CloseButton } from "./Menu.styles"

interface Item {
  path: string
  label: string
}

interface MenuProps {
  items: Item
  isOpen: boolean
  onMenuToggle: () => void
}

export default function Menu({ items, isOpen, onMenuToggle }: MenuProps) {
  return (
    <Container>
      <CloseButton onClick={onMenuToggle}>
        <BiX />
      </CloseButton>
    </Container>
  )
}
