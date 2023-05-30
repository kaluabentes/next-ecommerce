import { Metadata } from "next"

import ContentContainer from "@/components/ContentContainer"
import { Title } from "../[slug]/components/PageContent/PageContent.styles"
import { Grid } from "./components/utils"
import CartProducts from "./components/CartProducts/CartProducts"
import CartSummary from "./components/CartSummary/CartSummary"

export const metadata: Metadata = {
  title: "Bem-vindo à Kalux - Sua Loja Online de Variedades",
  description:
    "Bem-vindo à nossa loja online onde você encontrará uma ampla variedade de produtos cuidadosamente selecionados para atender às suas necessidades e desejos.",
}

export default function Cart() {
  return (
    <ContentContainer>
      <Title>Meu carrinho</Title>
      <Grid>
        <CartProducts />
        <CartSummary />
      </Grid>
    </ContentContainer>
  )
}
