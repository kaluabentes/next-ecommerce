import { BiSearch } from "react-icons/bi"
import { Container, IconButton, Input, Separator } from "./SearchField.styles"

export default function SearchField() {
  return (
    <Container>
      <Input placeholder="O que está buscando?" />
      <Separator />
      <IconButton>
        <BiSearch />
      </IconButton>
    </Container>
  )
}
