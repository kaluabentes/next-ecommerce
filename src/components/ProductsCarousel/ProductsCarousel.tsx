"use client"

import HorizontalCarousel from "@/components/HorizontalCarousel"
import { GhostItem } from "./ProductsCarousel.styles"
import Product from "@/models/Product"
import ProductCard from "@/components/ProductCard/ProductCard"

interface ProductsCarouselProps {
  products: Product[]
}

export default function ProductsCarousel({ products }: ProductsCarouselProps) {
  return (
    <HorizontalCarousel
      title="Ofertas da semana"
      justifyContent="flex-start"
      gap={16}
    >
      {products.map((product: Product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
      <GhostItem>.</GhostItem>
    </HorizontalCarousel>
  )
}
