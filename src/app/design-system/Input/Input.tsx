import { ChangeEvent, forwardRef } from "react"
import { Container, Error, Field, Label } from "./Input.styles"

interface InputProps {
  id?: string
  name?: string
  type?: string
  placeholder?: string
  value?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  margin?: string
  label?: string
  error?: string
}

const Input = forwardRef(
  (
    {
      name,
      type,
      placeholder,
      value,
      onChange,
      margin,
      id,
      label,
      error,
    }: InputProps,
    ref
  ) => (
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
        ref={ref as any}
      />
      {error && <Error>{error}</Error>}
    </Container>
  )
)

export default Input
