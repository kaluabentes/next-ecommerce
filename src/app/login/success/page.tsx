import { BiCheckCircle } from "react-icons/bi"

import PageMessage from "@/app/design-system/PageMessage"

export default function Login() {
  return (
    <PageMessage
      icon={<BiCheckCircle />}
      title="Obrigado por seu pedido!"
      description="A confirmação do pedido foi enviada para kaluanbentes@gmail.com"
    />
  )
}
