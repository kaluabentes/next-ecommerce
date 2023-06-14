import { PrismaAdapter } from "@next-auth/prisma-adapter"
import Login from "@root/emails/login"
import NextAuth from "next-auth/next"
import { Resend } from "resend"
import EmailProvider from "next-auth/providers/email"
import prisma from "@/infra/database/prisma"

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: {},
      from: process.env.EMAIL_FROM,
      sendVerificationRequest: (params: any) => {
        const { identifier, url } = params

        const resend = new Resend(process.env.RESEND_API_KEY!)

        resend.sendEmail({
          to: identifier,
          from: process.env.EMAIL_FROM!,
          subject: "Kalux: Conectar a sua conta",
          react: Login({
            url,
          }),
        })
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
