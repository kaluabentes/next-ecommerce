import OrderProduct from "../../models/OrderProduct"
import formatCurrency from "../../utilities/number/formatCurrency"
import { Column, Hr, Img, Section, Text } from "@react-email/components"

const textLabel = {
  fontSize: "16px",
  fontWeight: 600,
  margin: "0px",
  marginBottom: "6px",
}

const productImage = {
  height: "120px",
  width: "120px",
  marginRight: "0px !important",
}

const productTitle = {
  ...textLabel,
  fontWeight: 500,
}

const productPrice = {
  ...textLabel,
  fontSize: "18px",
  fontWeight: 600,
}

const productQuantity = {
  ...textLabel,
  fontSize: "14px",
  fontWeight: 600,
}

const separator = {
  margin: "16px 0",
}

export default function ProductList({
  products,
}: {
  products: OrderProduct[]
}) {
  return (
    <>
      <Text style={textLabel}>Seu pedido</Text>
      {products.map((product) => (
        <>
          <Section key={product.id} style={{ marginBottom: "16px" }}>
            <Column style={{ width: "136px" }}>
              <Img
                style={productImage}
                src={`https://kaluxshop.vercel.app${product.thumb}`}
              />
            </Column>
            <Column>
              <Text style={productTitle}>{product.name}</Text>
              <Text style={productPrice}>{formatCurrency(product.price!)}</Text>
              <Text style={productQuantity}>{product.quantity}x</Text>
            </Column>
          </Section>
          <Hr style={separator} />
        </>
      ))}
    </>
  )
}
