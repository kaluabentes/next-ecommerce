import mercadopago from "mercadopago"
import { NextResponse } from "next/server"
import createUser from "./createUser"
import createOrder from "./createOrder"

mercadopago.configurations.setAccessToken(process.env.MERCADOPAGO_ACCESS_TOKEN!)

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

    return NextResponse.json({ status, status_detail, id, user, order })
  } catch (error: any) {
    return NextResponse.json({ error: error.message })
  }
}
