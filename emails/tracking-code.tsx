import React from "react"
import { Heading, Img, Text, Button, Section } from "@react-email/components"
import DefaultLayout from "../src/emails/layouts/DefaultLayout"
import OrderProduct from "../src/models/OrderProduct"
import ProductList from "../src/emails/components/ProductList"

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

const description = {
  ...textValue,
  textAlign: "center" as const,
  marginBottom: "22px",
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

const trackingCodeStyle = {
  fontSize: "22px",
  fontWeight: 600,
  padding: "16px",
  background: "rgb(240, 242, 245)",
  borderRadius: "8px",
  marginTop: "0",
}

const trackingCodeBox = {
  textAlign: "center",
}

interface TrackingCodeProps {
  trackingCode?: string
  products?: OrderProduct[]
}

export default function TrackingCode({
  trackingCode = "PC123456789BR, PC123456789BR",
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
}: TrackingCodeProps) {
  return (
    <DefaultLayout>
      <Heading style={title}>Código de rastreio disponível</Heading>
      <Text style={description}>
        Confira abaixo o seu código de rastreio, para acompanhar o estado do seu
        pedido use o código em Rastrear Pedido.
      </Text>
      <Section style={trackingCodeBox as any}>
        <Text style={trackingCodeStyle}>{trackingCode}</Text>
      </Section>
      <ProductList products={products} />
      <Button
        href="https://kaluxshop.vercel.app/track-order"
        target="_blank"
        style={button}
        pY={12}
        pX={0}
      >
        Rastrear Pedido
      </Button>
    </DefaultLayout>
  )
}
