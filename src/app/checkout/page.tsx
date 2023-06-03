import { Metadata } from "next"

import ContentContainer from "@/app/design-system/ContentContainer"
import { Title } from "../[slug]/components/PageContent/PageContent.styles"
import ShippingSummary from "./components/ShippingSummary"
import { ContentGrid, Grid } from "./components/utils"
import ShippingForm from "./components/ShippingForm"
import PaymentForm from "./components/PaymentForm"
import CheckoutProviders from "./providers"

export const metadata: Metadata = {
  title: "Finalize sua compra",
  description:
    "Bem-vindo à nossa loja online onde você encontrará uma ampla variedade de produtos cuidadosamente selecionados para atender às suas necessidades e desejos.",
}

export default function Cart() {
  return (
    <CheckoutProviders>
      <ContentContainer>
        <Title>Finalize sua compra</Title>
        <Grid id="form-checkout">
          <ContentGrid>
            <ShippingForm />
            <PaymentForm />
          </ContentGrid>
          <ShippingSummary />
        </Grid>
      </ContentContainer>
    </CheckoutProviders>
  )
}
