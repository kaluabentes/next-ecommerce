import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"

import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import prisma from "@/infra/database/prisma"

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

    const result = await prisma.order.update({
      where: {
        id: body.id,
      },
      data: body,
    })

    return NextResponse.json(result)
  } catch (error: any) {
    return NextResponse.json({ error: error.message })
  }
}
