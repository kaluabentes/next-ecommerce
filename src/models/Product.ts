import Review from "./Review"

export default interface Product {
  id?: string
  name?: string
  slug?: string
  thumb?: string
  price?: number
  fromPrice?: number
  images?: string[]
  reviews?: Review[]
  content?: string
  variants?: {
    sku: string
    title: string
    compareAtPrice: string
    price: string
  }[]
}
