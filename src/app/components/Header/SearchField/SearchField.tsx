import { BiSearch } from "react-icons/bi"
import {
  OuterContainer,
  Container,
  IconButton,
  Input,
  Separator,
} from "./SearchField.styles"

export default function SearchField() {
  return (
    <OuterContainer>
      <Container>
        <Input placeholder="O que está buscando?" />
        <Separator />
        <IconButton>
          <BiSearch />
        </IconButton>
      </Container>
    </OuterContainer>
  )
}
