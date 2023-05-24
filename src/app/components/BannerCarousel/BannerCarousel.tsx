"use client"

import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

import {
  Container,
  EmblaContainer,
  Image,
  Dot,
  DotContainer,
} from "./BannerCarousel.styles"
import range from "@/utilities/array/range"
import createKey from "@/utilities/array/createKey"
import Product from "@/models/Product"
import ProductHero from "./ProductHero"

const DELAY = 5000

interface Item {
  src: string
}

interface BannerCarouselProps {
  items?: Item[]
  products?: Product[]
}

export default function BannerCarousel({
  items = [],
  products = [],
}: BannerCarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [viewportRef, embla] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: DELAY }),
  ])

  const heroProducts = products.filter((product) => product.hero)

  const handleSelect = useCallback(() => {
    setSelectedIndex(embla?.selectedScrollSnap()!)
  }, [embla])

  useEffect(() => {
    embla?.on("select", handleSelect)

    return () => {
      embla?.off("select", handleSelect)
    }
  }, [embla, handleSelect])

  return (
    <Container componentRef={viewportRef}>
      <EmblaContainer>
        {heroProducts.map((product) => (
          <ProductHero product={product} />
        ))}
        {items.map((item, index) => (
          <Image key={createKey(index)} src={item.src} />
        ))}
      </EmblaContainer>
      <DotContainer>
        {range([...heroProducts, ...items].length).map((n, index) => (
          <Dot
            $isActive={selectedIndex === index}
            key={n}
            onClick={() => embla?.scrollTo(index)}
          />
        ))}
      </DotContainer>
    </Container>
  )
}
