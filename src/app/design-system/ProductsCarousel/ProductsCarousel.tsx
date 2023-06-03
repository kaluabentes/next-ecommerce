"use client"

import HorizontalCarousel from "@/app/design-system/HorizontalCarousel"
import { GhostItem } from "./ProductsCarousel.styles"
import Product from "@/models/Product"
import ProductCard from "@/app/design-system/ProductCard/ProductCard"
import { useRouter } from "next/navigation"

interface ProductsCarouselProps {
  products: Product[]
  title: string
  padding?: string
  margin?: string
}

export default function ProductsCarousel({
  products,
  title,
  padding,
  margin,
}: ProductsCarouselProps) {
  const router = useRouter()

  return (
    <HorizontalCarousel
      margin={margin}
      title={title}
      justifyContent="flex-start"
      gap={16}
    >
      {products.map((product: Product) => (
        <ProductCard
          onClick={() => router.push(`/products/${product.slug}`)}
          key={product.slug}
          product={product}
        />
      ))}
      <GhostItem>.</GhostItem>
    </HorizontalCarousel>
  )
}
