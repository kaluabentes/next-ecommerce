"use client"

import HorizontalCarousel from "@/app/design-system/HorizontalCarousel"
import { Item, Image, Title } from "./CollectionsCarousel.styles"
import rem from "@/utilities/styles/rem"
import createKey from "@/utilities/array/createKey"

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
    <HorizontalCarousel margin={`0 0 ${rem(16)} 0`}>
      {items.map((item, index) => (
        <Item key={createKey(index)}>
          <Image src={item.image} alt={item.title} />
          <Title>{item.title}</Title>
        </Item>
      ))}
    </HorizontalCarousel>
  )
}
