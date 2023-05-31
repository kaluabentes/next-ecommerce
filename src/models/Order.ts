import OrderProduct from "./OrderProduct"

export default interface Order {
  id?: string
  trackingCode?: string
  paymentMethod?: string
  paymentStatus?: string
  products?: OrderProduct[]
}
