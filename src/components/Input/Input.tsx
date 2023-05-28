import { ChangeEvent } from "react"
import { Container } from "./Input.styles"

interface InputProps {
  id?: string
  name?: string
  type?: string
  placeholder?: string
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  margin?: string
}

export default function Input({
  name,
  type,
  placeholder,
  value,
  onChange,
  margin,
}: InputProps) {
  return (
    <Container
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      $margin={margin}
    />
  )
}
