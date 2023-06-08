import { CartProduct } from "@/contexts/cart/CartContextProvider"
import { Prisma } from "@prisma/client"

export default async function createOrder({
  orderInfo,
  paymentStatus,
}: {
  orderInfo: any
  paymentStatus: "rejected" | "approved" | "in_process"
}) {
  return prisma.order.create({
    include: {
      products: true,
    },
    data: {
      paymentStatus,
      paymentMethod: orderInfo.paymentMethod,
      products: {
        create: orderInfo.products.map((product: CartProduct) => ({
          name: product.name,
          slug: product.slug,
          price: new Prisma.Decimal(product.price!),
          quantity: product.quantity,
          thumb: product.thumb,
        })),
      },
    },
  })
}
