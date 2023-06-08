import OrderProduct from "./OrderProduct"

export default interface Order {
  id?: string
  createdAt?: string
  trackingCode?: string
  paymentMethod?: string
  paymentStatus?: string
  products?: OrderProduct[]
}
