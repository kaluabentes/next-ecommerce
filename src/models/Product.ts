import Review from "./Review"

export default interface Product {
  name?: string
  slug?: string
  price?: number
  fromPrice?: number
  portionPrice?: number
  freeShipping?: number
  thumb?: string
  images?: string[]
  reviews?: Review[]
}
