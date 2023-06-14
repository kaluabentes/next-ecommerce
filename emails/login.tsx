import React from "react"
import { Heading, Img, Text, Button } from "@react-email/components"
import OrderProduct from "../src/models/OrderProduct"
import DefaultLayout from "../src/emails/layouts/DefaultLayout"

const logo = {
  margin: "0 auto",
}

const check = {
  ...logo,
  marginBottom: "16px",
}

const title = {
  textAlign: "center" as const,
  fontSize: "24px",
  margin: "0px",
  marginBottom: "16px",
}

const textValue = {
  fontSize: "14px",
  color: "#777",
  margin: "0px",
}

const description = {
  ...textValue,
  textAlign: "center" as const,
  marginBottom: "22px",
}

const button = {
  backgroundColor: "#042c62",
  color: "#ffffff",
  borderRadius: "6px",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "100%",
  padding: "12px 0px",
  fontWeight: 600,
}

interface LoginProps {
  url?: string
}

export default function Login({ url }: LoginProps) {
  return (
    <DefaultLayout>
      <Heading style={title}>Conectar a sua conta</Heading>
      <Text style={description}>
        Para logar na sua conta clique no botão abaixo
      </Text>
      <Button href={url} target="_blank" style={button} pY={12} pX={0}>
        Entrar
      </Button>
    </DefaultLayout>
  )
}
