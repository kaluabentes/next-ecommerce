import { ReactNode } from "react"
import {
  Container,
  InnerContainer,
  SectionTitle,
} from "./HorizontalCarousel.styles"
import ContentContainer from "../ContentContainer"

interface HorizontalCarouselProps {
  children: ReactNode
  justifyContent?: string
  gap?: number
  title?: string
  margin?: string
}

export const CLASS_NAME = "horizontal-carousel"

export default function HorizontalCarousel({
  children,
  justifyContent,
  gap,
  title,
  margin,
}: HorizontalCarouselProps) {
  return (
    <>
      {title && <SectionTitle>{title}</SectionTitle>}
      <Container $margin={margin}>
        <InnerContainer $justifyContent={justifyContent} $gap={gap}>
          {children}
        </InnerContainer>
      </Container>
    </>
  )
}
