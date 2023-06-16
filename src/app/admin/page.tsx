import { getServerSession } from "next-auth"

import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
import { Metadata } from "next"
import ContentContainer from "../design-system/ContentContainer"
import OrdersTable from "./components/OrdersTable/OrdersTable"
import Header from "./components/Header"
import prisma from "@/infra/database/prisma"
import Order from "@/models/Order"
import User from "@/models/User"

export const metadata: Metadata = {
  title: "Minha Conta",
  description:
    "Bem-vindo à nossa loja online onde você encontrará uma ampla variedade de produtos cuidadosamente selecionados para atender às suas necessidades e desejos.",
}

export default async function MyAccount() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/login")
  }

  const user = await prisma.user.findFirst({
    where: {
      email: session?.user?.email,
    },
    include: {
      orders: {
        include: {
          products: true,
        },
      },
    },
  })

  if (user?.role !== "admin") {
    redirect("/restricted-access")
  }

  const orders = (
    await prisma.order.findMany({
      include: {
        products: true,
        user: true,
      },
    })
  ).map((order) => ({
    ...order,
    products: order.products.map((product) => ({
      ...product,
      price: Number(product.price.toFixed(2)),
    })),
  }))

  return (
    <ContentContainer>
      <Header user={user as unknown as User} />
      <h3>Pedidos</h3>
      <OrdersTable orders={orders! as unknown as Order[]} />
    </ContentContainer>
  )
}
