import React, { ReactNode } from "react"
import { Body, Container, Head, Html, Img, Link } from "@react-email/components"
import Fonts from "./Fonts"

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

interface OrderConfirmProps {
  children: ReactNode
}

export default function OrderConfirm({ children }: OrderConfirmProps) {
  return (
    <Html>
      <Head>
        <Fonts />
      </Head>
      <Body style={body}>
        <Container style={logoContainer}>
          <Link href="https://kaluxshop.vercel.app" target="_blank">
            <Img
              style={logo}
              src="https://kaluxshop.vercel.app/logo.png"
              alt="Kalux Logo"
              height="42px"
            />
          </Link>
        </Container>
        <Container style={receiptContainer}>{children}</Container>
      </Body>
    </Html>
  )
}
