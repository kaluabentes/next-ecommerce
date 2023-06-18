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
      response: {
        status: paymentStatus,
        status_detail: paymentStatusDetail,
        id: paymentId,
      },
    } = await mercadopago.payment.save(paymentInfo)

    if (paymentStatus === "rejected") {
      return NextResponse.json({
        paymentStatus,
        paymentStatusDetail,
        paymentId,
      })
    }

    const order = await createOrder({
      paymentStatus: paymentStatus,
      status: orderInfo.status,
      paymentMethod: orderInfo.paymentMethod,
      zipcode: shippingInfo.zipcode,
      state: shippingInfo.state,
      city: shippingInfo.city,
      neighborhood: shippingInfo.neighborhood,
      street: shippingInfo.street,
      number: shippingInfo.number,
      complement: shippingInfo.complement,
      products: orderInfo.products,
    })

    const user = await createUser({
      email: shippingInfo.email,
      name: shippingInfo.name,
      phone: shippingInfo.phone,
      orderId: order.id,
    })

    const emailPayload = {
      from: process.env.EMAIL_FROM!,
      react: OrderConfirm({
        paymentMethod: order.paymentMethod,
        transactionDate: order.createdAt.toISOString(),
        products: order.products.map((product) => ({
          ...product,
          price: Number(product.price.toFixed(2)),
        })),
        total: order?.products?.reduce(
          (prev, curr) =>
            prev + curr?.quantity! * Number(curr?.price!.toFixed(2)),
          0
        ),
      }),
    }

    await resend.sendEmail({
      ...emailPayload,
      to: "kaluanbentes@gmail.com",
      subject: "Droptron: Você recebeu um novo pedido",
    })

    await resend.sendEmail({
      ...emailPayload,
      to: user.email!,
      subject: "Kalux: Obrigado pelo seu pedido",
    })

    return NextResponse.json({
      paymentStatus,
      paymentStatusDetail,
      paymentId,
      user,
      order,
    })
  } catch (error: any) {
    return NextResponse.json({ error: error.message })
  }
}
