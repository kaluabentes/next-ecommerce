import collectionItems from "@/config/collectionItems"
import ProductsCarousel from "@/components/ProductsCarousel"

import BannerCarousel from "./components/BannerCarousel"
import CollectionsCarousel from "./components/CollectionsCarousel"
import { getAllProducts } from "./api/products"

export default function Home() {
  const products = getAllProducts([
    "slug",
    "name",
    "price",
    "fromPrice",
    "portionPrice",
    "thumb",
    "reviews",
  ])

  return (
    <>
      <BannerCarousel />
      <CollectionsCarousel items={collectionItems} />
      <ProductsCarousel products={products} />
    </>
  )
}
