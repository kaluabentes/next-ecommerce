import ContentContainer from "@/components/ContentContainer"
import { Title } from "../[slug]/components/PageContent/PageContent.styles"
import { Grid } from "./components/utils"
import { useCartContext } from "@/contexts/cart"
import CartProduct from "./components/CartProduct/CartProduct"
import CartProducts from "./components/CartProducts/CartProducts"
import CartSummary from "./components/CartSummary/CartSummary"

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
