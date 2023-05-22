"use client"

import HorizontalCarousel from "@/components/HorizontalCarousel"
import { Item, Image, Title } from "./CollectionsCarousel.styles"

interface Item {
  title: string
  image: string
}

interface CollectionsCarouselProps {
  items: Item[]
}

export default function CollectionsCarousel({
  items,
}: CollectionsCarouselProps) {
  return (
    <HorizontalCarousel>
      {items.map((item) => (
        <Item>
          <Image src={item.image} alt={item.title} />
          <Title>{item.title}</Title>
        </Item>
      ))}
    </HorizontalCarousel>
  )
}
