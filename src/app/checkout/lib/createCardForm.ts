import { FormEvent } from "react"
import formConfig from "../hooks/formConfig"

interface createCardFormProps {
  mp: any
  amount: number
  onError: (error: any) => void
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
}

export default function createCardForm({
  mp,
  amount,
  onError,
  onSubmit,
}: createCardFormProps) {
  const cardForm = mp.cardForm({
    amount: amount.toFixed(2),
    iframe: true,
    form: formConfig,
    callbacks: {
      onFormMounted: (error: any) => {
        if (error) return console.warn("Form Mounted handling e: ", error)
        console.log("Form mounted")
      },
      onFormUnmounted: () => {
        console.log("Form unmounted")
      },
      onSubmit,
      onError,
    },
  })

  return cardForm
}
