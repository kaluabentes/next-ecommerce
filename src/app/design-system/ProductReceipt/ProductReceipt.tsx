"use client"

import OrderProduct from "@/models/OrderProduct"
import { ReactNode } from "react"
import {
  Container,
  OrderDetailItem,
  OrderDetailItemLabel,
  OrderDetailItemValue,
  YourOrderItem,
  YourOrderItemLabel,
  YourOrderItemValue,
  YourOrderTitle,
} from "./ProductReceipt.styles"
import CartProduct from "../CartProduct/CartProduct"
import formatCurrency from "@/utilities/number/formatCurrency"
import Button from "../Button"
import formatDate from "@/utilities/date/formatDate"

interface ProductReceiptProps {
  transactionDate?: string
  paymentMethod?: string
  shippingMethod?: string
  products?: OrderProduct[]
  total?: number
  action?: ReactNode
}

export default function ProductReceipt({
  transactionDate = "2023-06-08T07:41:11.890Z",
  paymentMethod = "Cartão de crédito",
  shippingMethod = "Entrega padrão (15-30 dias úteis)",
  products = [
    {
      name: "Garrafa Térmica Inteligente 500ML",
      price: 99.9,
      quantity: 9,
      thumb: "/products/garrafa-termica-inteligente/photo-14.png",
    },
  ],
  total = 2022.5,
  action = <Button variant="primary">Ir para Minha Conta</Button>,
}: ProductReceiptProps) {
  return (
    <Container>
      <OrderDetailItem>
        <OrderDetailItemLabel>Data da transação</OrderDetailItemLabel>
        <OrderDetailItemValue>
          {formatDate(transactionDate)}
        </OrderDetailItemValue>
      </OrderDetailItem>
      <OrderDetailItem>
        <OrderDetailItemLabel>Método de pagamento</OrderDetailItemLabel>
        <OrderDetailItemValue>{paymentMethod}</OrderDetailItemValue>
      </OrderDetailItem>
      <OrderDetailItem>
        <OrderDetailItemLabel>Método de entrega</OrderDetailItemLabel>
        <OrderDetailItemValue>{shippingMethod}</OrderDetailItemValue>
      </OrderDetailItem>
      <YourOrderTitle>Seu Pedido</YourOrderTitle>
      {products.map((product) => (
        <CartProduct
          key={product.id}
          product={product}
          removeXPadding
          hideQuantityInput
        />
      ))}
      <YourOrderItem>
        <YourOrderItemLabel>Total</YourOrderItemLabel>
        <YourOrderItemValue>{formatCurrency(total)}</YourOrderItemValue>
      </YourOrderItem>
      {action}
    </Container>
  )
}
