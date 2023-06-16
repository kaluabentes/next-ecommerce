import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"

import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import prisma from "@/infra/database/prisma"
import { Resend } from "resend"
import TrackingCode from "@root/emails/tracking-code"

const APP_URL = process.env.APP_URL!

export async function PATCH(request: Request) {
  try {
    const body = await request.json()
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ error: "Your are not logged in" })
    }

    const user = await prisma.user.findFirst({
      where: {
        email: session.user?.email,
      },
    })

    if (user?.role !== "admin") {
      return NextResponse.json({ error: "You don't have permissions" })
    }

    const olderOorder = await prisma.order.findFirst({
      where: {
        id: body.id,
      },
    })
    const order = await prisma.order.update({
      where: {
        id: body.id,
      },
      data: body,
      include: {
        user: true,
        products: true,
      },
    })

    if (body.trackingCode !== olderOorder?.trackingCode) {
      const resend = new Resend(process.env.RESEND_API_KEY!)
      console.log("passando por aqui")
      resend.sendEmail({
        to: order.user?.email!,
        from: process.env.EMAIL_FROM!,
        subject: "Kalux: Código de rastreio disponível",
        react: TrackingCode({
          trackingCode: order.trackingCode!,
          products: order.products.map((product) => ({
            ...product,
            price: Number(product.price.toFixed(2)),
          })),
        }),
      })
    }

    return NextResponse.json(order)
  } catch (error: any) {
    return NextResponse.json({ error: error.message })
  }
}
