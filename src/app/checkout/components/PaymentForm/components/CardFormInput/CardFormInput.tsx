import { Error, Label } from "@/app/design-system/Input/Input.styles"

import { Input } from "./CardFormInput.styles"

interface CardFormInputProps {
  id: string
  label: string
  error?: string
}

export default function CardFormInput({
  id,
  label,
  error,
}: CardFormInputProps) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input $error={Boolean(error)} id={id} className="container" />
      {error && <Error>{error}</Error>}
    </div>
  )
}
