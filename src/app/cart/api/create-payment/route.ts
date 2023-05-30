import { NextApiRequest } from "next"
import { NextResponse } from "next/server"
import mercadopago from "mercadopago"

import { CartProduct } from "@/contexts/cart/CartContextProvider"
import Product from "@/models/Product"

mercadopago.configure({
  access_token: process.env.MERCADOPAGO_ACCESS_TOKEN!,
})

interface CreatePaymentRequest extends Request {
  body: {
    products: Product[]
  }
}

export async function POST(request: CreatePaymentRequest) {
  const body = await request.json()

  const preferences = {
    items: body.products.map((product: CartProduct) => ({
      title: product.name,
      unit_price: product.price,
      quantity: product.quantity,
    })),
  }

  const payment = await mercadopago.preferences.create(preferences)

  return NextResponse.json({ paymentId: payment.body.id })
}
