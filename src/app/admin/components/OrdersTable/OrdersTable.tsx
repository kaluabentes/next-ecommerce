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
import { ButtonGrid } from "../Header/Header.styles"
import EditOrderModal from "../EditOrderModal"
import { statusText, statusVariant } from "@/app/common/constants"

interface OrdersTableProps {
  orders: Order[]
}

export default function OrdersTable({ orders }: OrdersTableProps) {
  const [detailOrder, setDetailOrder] = useState<Order | undefined>()
  const [editOrder, setEditOrder] = useState<Order | undefined>()

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
            <TableRow key={order.id}>
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
                <ButtonGrid>
                  <Button onClick={() => setDetailOrder(order)} size="sm">
                    Detalhes
                  </Button>
                  <Button onClick={() => setEditOrder(order)} size="sm">
                    Editar
                  </Button>
                </ButtonGrid>
              </TableData>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <OrderDetailModal
        order={detailOrder!}
        isOpen={Boolean(detailOrder)}
        onClose={() => setDetailOrder(undefined)}
        total={
          detailOrder?.products?.reduce(
            (prev, curr) => prev + curr?.quantity! * curr?.price!,
            0
          )!
        }
      />
      <EditOrderModal
        isOpen={Boolean(editOrder)}
        onClose={() => setEditOrder(undefined)}
        order={editOrder!}
      />
    </TableContainer>
  )
}
