import { Metadata } from "next"

import ContentContainer from "@/components/ContentContainer"
import { Title } from "../[slug]/components/PageContent/PageContent.styles"
import ShippingItemsResume from "./components/ShippingItemsResume"
import { ContentGrid, Grid } from "./components/utils"
import ShippingForm from "./components/ShippingForm"
import PaymentForm from "./components/PaymentForm"

export const metadata: Metadata = {
  title: "Finalize sua compra",
  description:
    "Bem-vindo à nossa loja online onde você encontrará uma ampla variedade de produtos cuidadosamente selecionados para atender às suas necessidades e desejos.",
}

export default function Cart() {
  return (
    <ContentContainer>
      <Title>Finalize sua compra</Title>
      <Grid>
        <ContentGrid>
          <ShippingForm />
          <PaymentForm />
        </ContentGrid>
        <ShippingItemsResume />
      </Grid>
    </ContentContainer>
  )
}
