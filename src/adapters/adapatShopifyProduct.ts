import Product from "@/models/Product"
import ShopifyProduct from "@/models/ShopifyProduct"

export default function adaptShopifyProduct({
  id,
  title,
  handle,
  featuredImage,
  images,
  descriptionHtml,
  variants,
}: ShopifyProduct): Product {
  return {
    id,
    name: title,
    slug: handle,
    thumb: featuredImage.url,
    price: 99.9,
    fromPrice: 199.9,
    images: images.edges.map((edge) => edge.node.url),
    reviews: [],
    content: descriptionHtml,
    variants: variants.edges.map((edge) => edge.node),
  }
}
