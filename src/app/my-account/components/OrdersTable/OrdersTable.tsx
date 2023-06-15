"use client"

import Button from "@/app/design-system/Button"
import Table, {
  TableBody,
  TableContainer,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/design-system/Table"
import OrderDetailModal from "../OrderDetailModal"
import Order from "@/models/Order"
import formatDate from "@/utilities/date/formatDate"
import generateDescription from "@/app/products/lib/generateDescription"
import Badge from "@/app/design-system/Badge"
import subWord from "@/utilities/string/subString"
import { useState } from "react"

interface OrdersTableProps {
  orders: Order[]
}

interface Key {
  [key: string]: string
}

export const statusText: Key = {
  processing: "Processando",
  waiting_payment: "Aguardando pagamento",
  delivery: "Está a caminho",
}

interface KeyVariant {
  [key: string]: "primary" | "blue" | "secondary"
}

export const statusVariant: KeyVariant = {
  processing: "blue",
  waiting_payment: "primary",
  delivery: "secondary",
}

export default function OrdersTable({ orders }: OrdersTableProps) {
  const [activeOrder, setActiveOrder] = useState<Order | undefined>()

  return (
    <TableContainer>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Data de transação</TableHead>
            <TableHead>Produtos</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead>Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow>
              <TableData>{order.id}</TableData>
              <TableData>{formatDate(order.createdAt!)}</TableData>
              <TableData>
                {subWord(generateDescription(order.products!), 0, 5)}
              </TableData>
              <TableData>
                <Badge variant={statusVariant[order.status!]}>
                  {statusText[order.status!]}
                </Badge>
              </TableData>
              <TableData>
                <Button onClick={() => setActiveOrder(order)} size="sm">
                  Detalhes
                </Button>
              </TableData>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <OrderDetailModal
        order={activeOrder!}
        isOpen={Boolean(activeOrder)}
        onClose={() => setActiveOrder(undefined)}
        total={
          activeOrder?.products?.reduce(
            (prev, curr) => prev + curr?.quantity! * curr?.price!,
            0
          )!
        }
      />
    </TableContainer>
  )
}
