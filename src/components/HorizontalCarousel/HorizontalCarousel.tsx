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
  margin?: string
  padding?: string
  title?: string
}

export const CLASS_NAME = "horizontal-carousel"

export default function HorizontalCarousel({
  children,
  justifyContent,
  gap,
  margin,
  padding,
  title,
}: HorizontalCarouselProps) {
  return (
    <>
      {title && (
        <ContentContainer padding={padding}>
          <SectionTitle>{title}</SectionTitle>
        </ContentContainer>
      )}
      <Container $margin={margin} padding={padding}>
        <InnerContainer $justifyContent={justifyContent} $gap={gap}>
          {children}
        </InnerContainer>
      </Container>
    </>
  )
}
