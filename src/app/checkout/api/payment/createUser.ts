import prisma from "@/infra/database/prisma"
import User from "@/models/User"

export default async function createUser({
  email,
  name,
  phone,
  orderId,
}: User) {
  const existingUser = await prisma.user.findFirst({
    where: {
      email,
    },
  })

  if (existingUser) {
    return prisma.user.update({
      where: {
        id: existingUser.id,
      },
      data: {
        email: email || existingUser.email,
        name: name || existingUser.name,
        phone: phone || existingUser.phone,
        orders: {
          connect: [{ id: orderId }],
        },
      },
    })
  }

  return prisma.user.create({
    data: {
      email,
      name: name!,
      phone: phone!,
      orders: {
        connect: [{ id: orderId }],
      },
    },
  })
}
