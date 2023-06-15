"use client"

import * as Yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { signIn, useSession } from "next-auth/react"
import { useState } from "react"

import Input from "@/app/design-system/Input"
import { Container, Text, Title } from "./LoginForm.styles"
import Button from "@/app/design-system/Button"
import ContentContainer from "@/app/design-system/ContentContainer"
import { useRouter } from "next/navigation"
import PageMessage from "@/app/design-system/PageMessage"
import { BiCheckCircle } from "react-icons/bi"

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
  const [isSent, setIsSent] = useState(false)
  const { data: session } = useSession()
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<SignInData>({
    resolver: yupResolver(signinSchema),
  })

  const handleSubmitCallback = async (data: SignInData) => {
    setIsLoading(true)
    await signIn("email", {
      email: data.email,
      redirect: false,
      callbackUrl: "/my-account",
    })
    setIsSent(true)
    setIsLoading(false)
  }

  return (
    <ContentContainer>
      <Container>
        {isSent && (
          <PageMessage
            icon={<BiCheckCircle />}
            title="Verifique seu email"
            description={`Para conectar a sua conta por favor verifique sua caixa de entrada, enviamos um email contendo o link para você logar na sua conta.`}
            variant="success"
          />
        )}
        {!isSent && (
          <form onSubmit={handleSubmit(handleSubmitCallback)}>
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
          </form>
        )}
      </Container>
    </ContentContainer>
  )
}
