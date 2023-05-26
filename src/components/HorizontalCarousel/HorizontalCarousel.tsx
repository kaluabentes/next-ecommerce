import { ReactNode } from "react"
import {
  Container,
  InnerContainer,
  SectionTitle,
  Wrapper,
} from "./HorizontalCarousel.styles"
import ContentContainer from "../ContentContainer"

interface HorizontalCarouselProps {
  children: ReactNode
  justifyContent?: string
  gap?: number
  margin?: string
  title?: string
}

export const CLASS_NAME = "horizontal-carousel"

export default function HorizontalCarousel({
  children,
  justifyContent,
  gap,
  margin,
  title,
}: HorizontalCarouselProps) {
  return (
    <Wrapper>
      {title && (
        <ContentContainer>
          <SectionTitle>{title}</SectionTitle>
        </ContentContainer>
      )}
      <Container $margin={margin}>
        <InnerContainer $justifyContent={justifyContent} $gap={gap}>
          {children}
        </InnerContainer>
      </Container>
    </Wrapper>
  )
}
