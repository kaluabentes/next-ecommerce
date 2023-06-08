import { Prisma } from "@prisma/client"

export default function createDecimal(number: number) {
  new Prisma.Decimal(number)
}
