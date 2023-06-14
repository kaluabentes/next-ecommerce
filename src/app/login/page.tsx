import { getServerSession } from "next-auth"

import LoginForm from "./components/LoginForm"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Conecte-se a sua conta",
  description:
    "Bem-vindo à nossa loja online onde você encontrará uma ampla variedade de produtos cuidadosamente selecionados para atender às suas necessidades e desejos.",
}

export default async function Login() {
  const session = await getServerSession(authOptions)

  if (session) {
    redirect("/my-account")
  }

  return <LoginForm />
}
