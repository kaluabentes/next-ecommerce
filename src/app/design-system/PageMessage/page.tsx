"use client"

import { BiCheckCircle } from "react-icons/bi"
import PageMessage from "./PageMessage"

export default function PageMessagePage() {
  return (
    <PageMessage
      icon={<BiCheckCircle />}
      title="Obrigado por seu pedido!"
      description="A confirmação do pedido foi enviada para kaluanbentes@gmail.com"
    />
  )
}
