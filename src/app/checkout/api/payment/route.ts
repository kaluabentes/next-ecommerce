import mercadopago from "mercadopago"
import { NextResponse } from "next/server"

mercadopago.configurations.setAccessToken(process.env.MERCADOPAGO_ACCESS_TOKEN!)

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const { paymentInfo } = body

    const {
      response: { status, status_detail, id },
    } = await mercadopago.payment.save(paymentInfo)

    return NextResponse.json({ status, status_detail, id })
  } catch (error: any) {
    return NextResponse.json({ error: error.message })
  }
}
