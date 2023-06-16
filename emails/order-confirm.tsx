import React from "react"
import {
  Heading,
  Img,
  Text,
  Hr,
  Section,
  Column,
  Button,
} from "@react-email/components"
import OrderProduct from "../src/models/OrderProduct"
import formatDate from "../src/utilities/date/formatDate"
import DefaultLayout from "../src/emails/layouts/DefaultLayout"
import formatCurrency from "../src/utilities/number/formatCurrency"
import ProductList from "../src/emails/components/ProductList"

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

const textLabel = {
  fontSize: "16px",
  fontWeight: 600,
  margin: "0px",
  marginBottom: "6px",
}

const description = {
  ...textValue,
  textAlign: "center" as const,
}

const separator = {
  margin: "16px 0",
}

const yourOrderLabel = {
  ...textLabel,
  fontWeight: 500,
}

const yourOrderValue = {
  ...textLabel,
  fontWeight: 600,
  fontSize: "22px",
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

interface OrderConfirmProps {
  transactionDate?: string
  paymentMethod?: string
  shippingMethod?: string
  products?: OrderProduct[]
  total?: number
}

export default function OrderConfirm({
  transactionDate = "2023-06-08T07:41:11.890Z",
  paymentMethod = "Cartão de crédito",
  shippingMethod = "Entrega padrão (15-30 dias úteis)",
  products = [
    {
      id: "abc",
      name: "Garrafa Térmica Inteligente 500ML",
      price: 99.9,
      quantity: 9,
      thumb: "/products/garrafa-termica-inteligente/photo-14.png",
    },
    {
      id: "dfe",
      name: "Garrafa Térmica Inteligente 500ML",
      price: 99.9,
      quantity: 9,
      thumb: "/products/garrafa-termica-inteligente/photo-14.png",
    },
  ],
  total = 2022.5,
}: OrderConfirmProps) {
  return (
    <DefaultLayout>
      <Img
        style={check}
        src="https://kaluxshop.vercel.app/check.png"
        alt="Kalux Logo"
        height="100px"
      />
      <Heading style={title}>Obrigado pelo seu pedido!</Heading>
      <Text style={description}>
        O seu pedido foi recebido. Em breve enviaremos o código de rastreio via
        email e em Minha Conta. Lembrando que o prazo para o processamento do
        pedido é de 1 a 3 dias úteis.
      </Text>
      <Hr style={separator} />
      <Text style={textLabel}>Data de transação</Text>
      <Text style={textValue}>{formatDate(transactionDate)}</Text>
      <Hr style={separator} />
      <Text style={textLabel}>Método de pagamento</Text>
      <Text style={textValue}>{paymentMethod}</Text>
      <Hr style={separator} />
      <Text style={textLabel}>Forma de entrega</Text>
      <Text style={textValue}>{shippingMethod}</Text>
      <Hr style={separator} />
      <ProductList products={products} />
      <Section style={{ marginBottom: "10px" }}>
        <Column align="left">
          <Text style={yourOrderLabel}>Total</Text>
        </Column>
        <Column align="right">
          <Text style={yourOrderValue}>{formatCurrency(total)}</Text>
        </Column>
      </Section>
      <Button
        href="https://kaluxshop.vercel.app/my-account"
        target="_blank"
        style={button}
        pY={12}
        pX={0}
      >
        Ir para Minha Conta
      </Button>
    </DefaultLayout>
  )
}
