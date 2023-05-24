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
      <ProductsCarousel
        items={products.map((product: any) => ({
          title: product.name,
          image: product.thumb,
          price: product.price,
          fromPrice: product.fromPrice,
          portionPrice: product.portionPrice,
          slug: product.slug,
          reviews: product.reviews,
        }))}
      />
    </>
  )
}
