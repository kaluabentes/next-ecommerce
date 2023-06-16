import { NextResponse } from "next/server"

import prisma from "@/infra/database/prisma"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const existingUser = await prisma.user.findFirst({
      where: {
        email: body.email,
      },
    })

    if (existingUser) {
      return NextResponse.json({ user: existingUser })
    }

    const user = await prisma.user.create({
      data: {
        name: "",
        phone: "",
        email: body.email,
      },
    })

    return NextResponse.json({ user })
  } catch (error: any) {
    return NextResponse.json({ error })
  }
}
