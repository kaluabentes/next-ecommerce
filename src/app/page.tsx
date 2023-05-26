import collectionItems from "@/config/collectionItems"
import ProductsCarousel from "@/components/ProductsCarousel"

import BannerCarousel from "./components/BannerCarousel"
import CollectionsCarousel from "./components/CollectionsCarousel"
import { getAllProducts } from "./api/products"

export default async function Home() {
  const products = await getAllProducts([
    "slug",
    "name",
    "price",
    "fromPrice",
    "portionPrice",
    "thumb",
    "hero",
    "heroTitle",
    "heroDescription",
    "heroImage",
    "reviews",
  ])

  return (
    <>
      <BannerCarousel products={products.reverse()} />
      <CollectionsCarousel items={collectionItems} />
      <ProductsCarousel products={products} />
    </>
  )
}
