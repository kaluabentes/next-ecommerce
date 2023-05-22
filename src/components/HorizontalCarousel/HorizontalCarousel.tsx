import { ReactNode } from "react"
import { Container, InnerContainer } from "./HorizontalCarousel.styles"

interface HorizontalCarouselProps {
  children: ReactNode
}

export const CLASS_NAME = "horizontal-carousel"

export default function HorizontalCarousel({
  children,
}: HorizontalCarouselProps) {
  return (
    <Container>
      <InnerContainer>{children}</InnerContainer>
    </Container>
  )
}
