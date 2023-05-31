import Order from "./Order"

export default interface User {
  id?: string
  name?: string
  email?: string
  phone?: string
  zipcode?: string
  state?: string
  city?: string
  neighborhood?: string
  street?: string
  number?: string
  complement?: string
  orders?: Order[]
}
