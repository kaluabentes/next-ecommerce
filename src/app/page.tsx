import { Metadata } from "next"

import collectionItems from "@/config/collectionItems"
import ProductsCarousel from "@/components/ProductsCarousel"

import BannerCarousel from "./components/BannerCarousel"
import CollectionsCarousel from "./components/CollectionsCarousel"
import { getAllProducts } from "./content/products"
import ContentContainer from "@/components/ContentContainer"

export const metadata: Metadata = {
  title: "Bem-vindo à Kalux - Sua Loja Online de Variedades",
  description:
    "Bem-vindo à nossa loja online onde você encontrará uma ampla variedade de produtos cuidadosamente selecionados para atender às suas necessidades e desejos.",
}

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
    "discount",
  ])

  return (
    <ContentContainer>
      <BannerCarousel products={products.reverse()} />
      <CollectionsCarousel items={collectionItems} />
      <ProductsCarousel title="Ofertas da semana" products={products} />
    </ContentContainer>
  )
}
