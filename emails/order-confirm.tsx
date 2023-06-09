import React from "react"
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Text,
  Hr,
  Font,
  Section,
  Column,
  Button,
} from "@react-email/components"
import Fonts from "./fonts"

const body = {
  backgroundColor: "#f0f2f5",
  fontFamily:
    'Poppins, -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  paddingBottom: "32px",
}

const receiptContainer = {
  backgroundColor: "#ffffff",
  padding: "32px",
  borderRadius: "8px",
}

const logoContainer = {
  padding: "32px 0px",
}

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

export default function OrderConfirm() {
  return (
    <Html>
      <Head>
        <Fonts />
      </Head>
      <Body style={body}>
        <Container style={logoContainer}>
          <Link href="https://kaluxshop.com.br" target="_blank">
            <Img
              style={logo}
              src="https://kaluxshop.vercel.app/logo.png"
              alt="Kalux Logo"
              height="42px"
            />
          </Link>
        </Container>
        <Container style={receiptContainer}>
          <Img
            style={check}
            src="https://kaluxshop.vercel.app/check.png"
            alt="Kalux Logo"
            height="100px"
          />
          <Heading style={title}>Obrigado pelo seu pedido!</Heading>
          <Text style={description}>
            O seu pedido foi recebido. Em breve enviaremos o código de rastreio
            via email e em Minha Conta. Lembrando que o prazo para o
            processamento do pedido é de 1 a 3 dias úteis.
          </Text>
          <Hr style={separator} />
          <Text style={textLabel}>Data de transação</Text>
          <Text style={textValue}>Quinta, 8 de Junho, 2023 ás 18:51</Text>
          <Hr style={separator} />
          <Text style={textLabel}>Método de pagamento</Text>
          <Text style={textValue}>Cartão de Crédito</Text>
          <Hr style={separator} />
          <Text style={textLabel}>Forma de entrega</Text>
          <Text style={textValue}>Entrega padrão (15 a 30 dias úteis)</Text>
          <Hr style={separator} />
          <Text style={textLabel}>Seu pedido</Text>
          <Section>
            <Column style={{ width: "136px" }}>
              <Img
                style={productImage}
                src="https://kaluxshop.vercel.app/products/garrafa-termica-inteligente/photo-14.png"
              />
            </Column>
            <Column>
              <Text style={productTitle}>
                Garrafa Térmica Inteligente 500ML
              </Text>
              <Text style={productPrice}>R$ 99.9</Text>
              <Text style={productQuantity}>1x</Text>
            </Column>
          </Section>
          <Hr style={separator} />
          <Section style={{ marginBottom: "10px" }}>
            <Column align="left">
              <Text style={yourOrderLabel}>Total</Text>
            </Column>
            <Column align="right">
              <Text style={yourOrderValue}>R$ 99,90</Text>
            </Column>
          </Section>
          <Button
            href="https://kaluxshop.com.br/my-account"
            target="_blank"
            style={button}
            pY={12}
            pX={0}
          >
            Ir para Minha Conta
          </Button>
        </Container>
      </Body>
    </Html>
  )
}
