import mercadopago from "mercadopago"
import { Resend } from "resend"
import { NextResponse } from "next/server"

import createUser from "./createUser"
import createOrder from "./createOrder"
import OrderConfirm from "@root/emails/order-confirm"

mercadopago.configurations.setAccessToken(process.env.MERCADOPAGO_ACCESS_TOKEN!)

const resend = new Resend(process.env.RESEND_API_KEY!)

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const { paymentInfo, shippingInfo, orderInfo } = body

    const {
      response: { status, status_detail, id },
    } = await mercadopago.payment.save(paymentInfo)

    const order = await createOrder({
      orderInfo,
      paymentStatus: status,
    })
    const user = await createUser({
      shippingInfo,
      orderId: order.id,
    })

    const emailPayload = {
      from: "onboarding@resend.dev",
      react: OrderConfirm({
        transactionDate: order.createdAt.toISOString(),
        products: order.products.map((product) => ({
          ...product,
          price: Number(product.price.toFixed(2)),
        })),
      }),
    }

    resend.sendEmail({
      ...emailPayload,
      to: "kaluanbentes@gmail.com",
      subject: "Droptron: Você recebeu um novo pedido",
    })

    resend.sendEmail({
      ...emailPayload,
      to: user.email!,
      subject: "Kalux: Obrigado pelo seu pedido",
    })

    return NextResponse.json({ status, status_detail, id, user, order })
  } catch (error: any) {
    return NextResponse.json({ error: error.message })
  }
}
