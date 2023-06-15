"use client"

import Modal from "@/app/design-system/Modal/Modal"
import { Title } from "./OrderDetailModal.styles"
import Order from "@/models/Order"
import CartProduct from "@/app/design-system/CartProduct/CartProduct"
import {
  OrderDetailItem,
  OrderDetailItemLabel,
  OrderDetailItemValue,
  YourOrderItem,
  YourOrderItemLabel,
  YourOrderItemValue,
  YourOrderTitle,
} from "@/app/design-system/ProductReceipt/ProductReceipt.styles"
import formatCurrency from "@/utilities/number/formatCurrency"
import Button from "@/app/design-system/Button"
import Badge from "@/app/design-system/Badge"
import formatDate from "@/utilities/date/formatDate"
import { useRouter } from "next/navigation"
import {
  paymentStatusVariant,
  paymentsStatusText,
  statusText,
  statusVariant,
} from "@/app/common/constants"

interface OrderDetailModalProps {
  isOpen: boolean
  onClose: () => void
  order: Order
  total: number
}

const createWhatsappLink = (phone: string) =>
  `https://api.whatsapp.com/send?phone=${phone}&text=Seja%20muito%20bem-vindo%20%C3%A0%20Kalux!%20Estamos%20felizes%20por%20ter%20voc%C3%AA%20conosco,%20seu%20pedido%20foi%20recebido%20com%20%C3%AAxito,%20ap%C3%B3s%20a%20confirma%C3%A7%C3%A3o%20do%20pagamento%20o%20pedido%20entrar%C3%A1%20em%20processamento%20que%20levar%C3%A1%20em%20torno%20de%201%20a%203%20dias,%20ap%C3%B3s%20este%20per%C3%ADodo%20fique%20atento%20aos%20canais%20de%20comunica%C3%A7%C3%A3o,%20pois%20estaremos%20enviando%20o%20c%C3%B3digo%20de%20rastreio%20do%20seu%20pedido.%20Um%20abra%C3%A7o!`

export default function OrderDetailModal({
  isOpen,
  onClose,
  order,
  total,
}: OrderDetailModalProps) {
  const router = useRouter()

  return (
    <Modal size="md" isOpen={isOpen} onClose={onClose}>
      <Title>Detalhes do pedido</Title>
      <OrderDetailItem>
        <OrderDetailItemLabel>Data de transação</OrderDetailItemLabel>
        <OrderDetailItemValue>
          {formatDate(order?.createdAt!)}
        </OrderDetailItemValue>
      </OrderDetailItem>
      <OrderDetailItem>
        <OrderDetailItemLabel>Nome do cliente</OrderDetailItemLabel>
        <OrderDetailItemValue>{order?.user?.name}</OrderDetailItemValue>
      </OrderDetailItem>
      <OrderDetailItem>
        <OrderDetailItemLabel>Email</OrderDetailItemLabel>
        <OrderDetailItemValue>{order?.user?.email}</OrderDetailItemValue>
      </OrderDetailItem>
      <OrderDetailItem>
        <OrderDetailItemLabel>Telefone</OrderDetailItemLabel>
        <OrderDetailItemValue>
          <a
            href={createWhatsappLink(order?.user?.phone!)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {order?.user?.phone}
          </a>
        </OrderDetailItemValue>
      </OrderDetailItem>
      <OrderDetailItem>
        <OrderDetailItemLabel>Código de rastreio</OrderDetailItemLabel>
        <OrderDetailItemValue>
          {order?.trackingCode ? (
            <Badge size="lg" variant="gray">
              {order?.trackingCode}
            </Badge>
          ) : (
            "----"
          )}
        </OrderDetailItemValue>
      </OrderDetailItem>
      <OrderDetailItem>
        <OrderDetailItemLabel>Estado do pedido</OrderDetailItemLabel>
        <OrderDetailItemValue>
          <Badge variant={statusVariant[order?.status!]}>
            {statusText[order?.status!]}
          </Badge>
        </OrderDetailItemValue>
      </OrderDetailItem>
      <OrderDetailItem>
        <OrderDetailItemLabel>Método de pagamento</OrderDetailItemLabel>
        <OrderDetailItemValue>{order?.paymentMethod}</OrderDetailItemValue>
      </OrderDetailItem>
      <OrderDetailItem>
        <OrderDetailItemLabel>Estado do pagamento</OrderDetailItemLabel>
        <OrderDetailItemValue>
          <Badge variant={paymentStatusVariant[order?.paymentStatus!]}>
            {paymentsStatusText[order?.paymentStatus!]}
          </Badge>
        </OrderDetailItemValue>
      </OrderDetailItem>
      <OrderDetailItem>
        <OrderDetailItemLabel>CEP</OrderDetailItemLabel>
        <OrderDetailItemValue>{order?.zipcode}</OrderDetailItemValue>
      </OrderDetailItem>
      <OrderDetailItem>
        <OrderDetailItemLabel>Estado</OrderDetailItemLabel>
        <OrderDetailItemValue>{order?.state}</OrderDetailItemValue>
      </OrderDetailItem>
      <OrderDetailItem>
        <OrderDetailItemLabel>Bairro</OrderDetailItemLabel>
        <OrderDetailItemValue>{order?.neighborhood}</OrderDetailItemValue>
      </OrderDetailItem>
      <OrderDetailItem>
        <OrderDetailItemLabel>Rua</OrderDetailItemLabel>
        <OrderDetailItemValue>{order?.street}</OrderDetailItemValue>
      </OrderDetailItem>
      <OrderDetailItem>
        <OrderDetailItemLabel>Número</OrderDetailItemLabel>
        <OrderDetailItemValue>{order?.number}</OrderDetailItemValue>
      </OrderDetailItem>
      {order?.complement && (
        <OrderDetailItem>
          <OrderDetailItemLabel>Complemento</OrderDetailItemLabel>
          <OrderDetailItemValue>{order?.complement}</OrderDetailItemValue>
        </OrderDetailItem>
      )}
      <YourOrderTitle>Seu Pedido</YourOrderTitle>
      {order?.products?.map((product) => (
        <CartProduct
          onClick={() => router.push(`/products/${product.slug}`)}
          key={product.id}
          product={product}
          removeXPadding
          hideQuantityInput
        />
      ))}
      <YourOrderItem>
        <YourOrderItemLabel>Total</YourOrderItemLabel>
        <YourOrderItemValue>
          {total && formatCurrency(total)}
        </YourOrderItemValue>
      </YourOrderItem>
    </Modal>
  )
}
