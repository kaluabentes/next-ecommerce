import { ChangeEvent } from "react"
import { Container, Error, Field, Label } from "./Input.styles"

interface InputProps {
  id?: string
  name?: string
  type?: string
  placeholder?: string
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  margin?: string
  label?: string
  error?: string
}

export default function Input({
  name,
  type,
  placeholder,
  value,
  onChange,
  margin,
  id,
  label,
  error = "Este campo é obrigatório",
}: InputProps) {
  return (
    <Container>
      {label && <Label htmlFor={id}>{label}</Label>}
      <Field
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        $margin={margin}
        $error={Boolean(error)}
      />
      {error && <Error>{error}</Error>}
    </Container>
  )
}
