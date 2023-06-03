import { ChangeEvent, ReactNode } from "react"
import { Container, Field, Label } from "./Select.styles"
import { Error } from "../Input/Input.styles"

interface InputProps {
  id?: string
  name?: string
  placeholder?: string
  value?: string
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void
  margin?: string
  label?: string
  children: ReactNode
  error?: string
}

export default function Select({
  name,
  placeholder,
  value,
  onChange,
  margin,
  id,
  label,
  children,
  error = "Este campo é obrigatório",
}: InputProps) {
  return (
    <Container>
      {label && <Label htmlFor={id}>{label}</Label>}
      <Field
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        $margin={margin}
        $error={error}
      >
        {children}
      </Field>
      {error && <Error>{error}</Error>}
    </Container>
  )
}
