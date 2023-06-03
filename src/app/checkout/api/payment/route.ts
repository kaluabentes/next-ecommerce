import mercadopago from "mercadopago"
import { NextResponse } from "next/server"

mercadopago.configurations.setAccessToken(process.env.MERCADOPAGO_ACCESS_TOKEN!)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const response = await mercadopago.payment.save(body)
    return NextResponse.json({ response: response.body })
  } catch (error: any) {
    return NextResponse.json({ error })
  }
}
