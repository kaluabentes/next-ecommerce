import Order from "./Order"

export default interface User {
  id?: string
  name?: string
  email?: string
  phone?: string
  orders?: Order[]
  orderId?: string
}
