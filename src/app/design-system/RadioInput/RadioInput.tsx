import { ReactNode } from "react"
import { Box, Container, Input, Text } from "./RadioInput.styles"

interface RadioInputProps {
  isChecked?: boolean
  onChange?: () => void
  text?: ReactNode | string
}

export default function RadioInput({
  isChecked = false,
  onChange,
  text,
}: RadioInputProps) {
  return (
    <Box>
      <Container $checked={isChecked}>
        <Input type="radio" checked={isChecked} onChange={onChange} />
      </Container>
      {text && <Text>{text}</Text>}
    </Box>
  )
}
