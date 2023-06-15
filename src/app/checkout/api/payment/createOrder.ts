import { CartProduct } from "@/contexts/cart/CartContextProvider"
import Order from "@/models/Order"
import { Prisma } from "@prisma/client"

import prisma from "@/infra/database/prisma"

export default async function createOrder({
  paymentStatus,
  status,
  paymentMethod,
  zipcode,
  state,
  city,
  neighborhood,
  street,
  number,
  complement,
  products,
}: Order) {
  return prisma.order.create({
    include: {
      products: true,
      user: true,
    },
    data: {
      paymentStatus,
      status,
      paymentMethod: paymentMethod!,
      zipcode: zipcode!,
      state: state!,
      city: city!,
      neighborhood: neighborhood!,
      street: street!,
      number: number!,
      complement: complement!,
      products: {
        create: products?.map((product: CartProduct) => ({
          name: product.name!,
          slug: product.slug!,
          price: new Prisma.Decimal(product.price!)!,
          quantity: product.quantity!,
          thumb: product.thumb!,
        })),
      },
    },
  })
}
