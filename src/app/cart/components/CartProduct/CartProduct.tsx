import Product from "@/models/Product"
import {
  Container,
  Content,
  FromPrice,
  Image,
  Price,
  Title,
} from "./CartProduct.styles"
import formatCurrency from "@/utilities/number/formatCurrency"
import QuantityInput from "@/components/QuantityInput"

interface CartProductProps {
  product: Product
  onClick: () => void
}

export default function CartProduct({ product, onClick }: CartProductProps) {
  return (
    <Container onClick={onClick}>
      <Image src={product.thumb} alt={product.name} />
      <Content>
        <Title>{product.name}</Title>
        <Price>{formatCurrency(product.price!)}</Price>
        <FromPrice>{formatCurrency(product.fromPrice!)}</FromPrice>
      </Content>
      <QuantityInput value={10} />
    </Container>
  )
}
