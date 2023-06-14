import OrderProduct from "@/models/OrderProduct"

export default function generateDescription(products: OrderProduct[]) {
  return products
    .map((product) => `${product.quantity}x ${product.name}`)
    .join(", ")
}
