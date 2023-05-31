"use client"

import { useState } from "react"
import {
  ActiveImage,
  ActiveImageBox,
  Container,
  ThumbButton,
  ThumbImage,
  ThumbsBox,
} from "./PhotoGallery.styles"

export interface Image {
  src: string
  alt: string
}

interface PhotoGalleryProps {
  images: Image[]
}

export default function PhotoGallery({ images }: PhotoGalleryProps) {
  const [activeImage, setActiveImage] = useState(0)

  return (
    <Container>
      <ActiveImageBox>
        <ActiveImage
          src={images[activeImage].src}
          alt={images[activeImage].alt}
        />
      </ActiveImageBox>
      <ThumbsBox>
        {images.map((image, index) => (
          <ThumbButton
            $isActive={activeImage === index}
            onClick={() => setActiveImage(index)}
            key={image.src}
          >
            <ThumbImage src={image.src} alt={image.alt} />
          </ThumbButton>
        ))}
      </ThumbsBox>
    </Container>
  )
}
