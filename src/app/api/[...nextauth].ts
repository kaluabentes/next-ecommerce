import NextAuth, { NextAuthOptions } from "next-auth"
import EmailProvider from "next-auth/providers/email"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { Resend } from "resend"

import prisma from "@/infra/database/prisma"
import sendVerificationRequest from "@/infra/next-auth/sendVerificationRequest"

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: {},
      from: process.env.EMAIL_FROM,
      sendVerificationRequest: () => {
        const resend = new Resend(process.env.RESEND_API_KEY!)

        // resend.sendEmail({
        //   ...emailPayload,
        //   to: user.email!,
        //   subject: "Kalux: Obrigado pelo seu pedido",
        // })
      },
    }),
  ],
  pages: {
    verifyRequest: "/auth/verify-request",
    signIn: "/auth/signin",
  },
}

export default NextAuth(authOptions)
