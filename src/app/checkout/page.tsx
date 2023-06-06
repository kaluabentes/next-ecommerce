import { Metadata } from "next"

import ContentContainer from "@/app/design-system/ContentContainer"
import { Title } from "../[slug]/components/PageContent/PageContent.styles"
import CheckoutProviders from "./providers"
import CheckoutForm from "./CheckoutForm"

export const metadata: Metadata = {
  title: "Finalize sua compra",
  description:
    "Bem-vindo à nossa loja online onde você encontrará uma ampla variedade de produtos cuidadosamente selecionados para atender às suas necessidades e desejos.",
}

export default function Checkout() {
  return (
    <CheckoutProviders>
      <ContentContainer>
        <Title>Finalize sua compra</Title>
        <CheckoutForm />
      </ContentContainer>
    </CheckoutProviders>
  )
}
