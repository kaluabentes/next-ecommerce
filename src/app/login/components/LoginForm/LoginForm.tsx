"use client"

import * as Yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { signIn } from "next-auth/react"
import { useState } from "react"

import Input from "@/app/design-system/Input"
import { Container, Text, Title } from "./LoginForm.styles"
import Button from "@/app/design-system/Button"
import ContentContainer from "@/app/design-system/ContentContainer"

const signinSchema = Yup.object({
  email: Yup.string()
    .email("Email inválido")
    .required("Este campo é obrigatório"),
})

interface SignInData {
  email: string
}

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInData>({
    resolver: yupResolver(signinSchema),
  })

  const handleSubmitCallback = (data: SignInData) => {
    setIsLoading(true)
    signIn("email", {
      email: data.email,
      callbackUrl: "/login/success",
    })
  }

  return (
    <form onClick={handleSubmit(handleSubmitCallback)}>
      <ContentContainer>
        <Container>
          <Title>Entrar</Title>
          <Text>
            Para fazer o seu login digite o seu email utilizado no checkout
          </Text>
          <Input
            placeholder="Digite seu email"
            {...register("email")}
            error={errors.email?.message}
          />
          <Button variant="primary" full isLoading={isLoading} type="submit">
            Continuar
          </Button>
        </Container>
      </ContentContainer>
    </form>
  )
}
