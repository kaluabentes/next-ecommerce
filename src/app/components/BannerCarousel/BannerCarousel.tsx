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

const DELAY = 5000

const DEFAULT_ITEMS = [
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

interface Item {
  src: string
}

interface BannerCarouselProps {
  items?: Item[]
}

export default function BannerCarousel({
  items = DEFAULT_ITEMS,
}: BannerCarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [viewportRef, embla] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: DELAY }),
  ])

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
        {items.map((item, index) => (
          <Image key={createKey(index)} src={item.src} />
        ))}
      </EmblaContainer>
      <DotContainer>
        {range(items.length).map((n, index) => (
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
