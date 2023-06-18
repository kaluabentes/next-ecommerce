import Review from "./Review"

export default interface Product {
  name?: string
  slug?: string
  thumb?: string
  price?: number
  fromPrice?: number
  portionPrice?: number
  freeShipping?: boolean
  discount?: string
  hero?: boolean
  heroTitle?: string
  heroDescription?: string
  heroImage?: string
  images?: string[]
  reviews?: Review[]
  content?: string
}
