"use client"

import HorizontalCarousel from "@/components/HorizontalCarousel"
import { GhostItem } from "./ProductsCarousel.styles"
import Product from "@/models/Product"
import ProductCard from "@/components/ProductCard/ProductCard"
import { useRouter } from "next/navigation"

interface ProductsCarouselProps {
  products: Product[]
  title: string
}

export default function ProductsCarousel({
  products,
  title,
}: ProductsCarouselProps) {
  const router = useRouter()

  return (
    <HorizontalCarousel title={title} justifyContent="flex-start" gap={16}>
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
