import collectionItems from "@/config/collectionItems"
import ProductsCarousel from "@/components/ProductsCarousel"

import BannerCarousel from "./components/BannerCarousel"
import CollectionsCarousel from "./components/CollectionsCarousel"
import { getAllProducts } from "./api/products"

const BANNER_ITEMS = [
  {
    src: "/banner-carousel/carousel-item-1.jpg",
  },
  {
    src: "/banner-carousel/carousel-item-2.jpg",
  },
  {
    src: "/banner-carousel/carousel-item-3.jpg",
  },
]

export default function Home() {
  const products = getAllProducts([
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
      <BannerCarousel items={BANNER_ITEMS} />
      <CollectionsCarousel items={collectionItems} />
      <ProductsCarousel products={products} />
      <BannerCarousel products={products.reverse()} />
    </>
  )
}
