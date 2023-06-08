import { CartProduct } from "@/contexts/cart/CartContextProvider"
import prisma from "@/infra/database/prisma"
import { Prisma, User } from "@prisma/client"

export default async function createUser({
  shippingInfo,
  orderId,
}: {
  shippingInfo: any
  orderId: string
}) {
  const existingUser = await prisma.user.findFirst({
    where: {
      email: shippingInfo.email,
    },
  })

  if (existingUser) {
    return prisma.user.update({
      where: {
        id: existingUser.id,
      },
      data: {
        ...existingUser,
        ...shippingInfo,
        orders: {
          connect: [{ id: orderId }],
        },
      },
    })
  }

  return prisma.user.create({
    data: {
      ...shippingInfo,
      orders: {
        connect: [{ id: orderId }],
      },
    },
  })
}
