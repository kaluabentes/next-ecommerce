import { User } from "@prisma/client"
import OrderProduct from "./OrderProduct"

export default interface Order {
  id?: string
  createdAt?: string
  trackingCode?: string
  paymentMethod?: string
  paymentStatus?: string
  status?: string
  zipcode?: string
  state?: string
  city?: string
  neighborhood?: string
  street?: string
  number?: string
  complement?: string
  products?: OrderProduct[]
  user?: User
}
