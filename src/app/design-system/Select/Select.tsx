import { ChangeEvent, ReactNode, forwardRef } from "react"
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
  children?: ReactNode
  error?: string
  disabled?: Boolean
}

const Select = forwardRef(
  (
    {
      name,
      placeholder,
      value,
      onChange,
      margin,
      id,
      label,
      children,
      disabled,
      error,
    }: InputProps,
    ref
  ) => (
    <Container>
      {label && <Label htmlFor={id}>{label}</Label>}
      <Field
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        $margin={margin}
        $error={Boolean(error)}
        disabled={Boolean(disabled)}
        ref={ref as any}
      >
        {children}
      </Field>
      {error && <Error>{error}</Error>}
    </Container>
  )
)

export default Select
