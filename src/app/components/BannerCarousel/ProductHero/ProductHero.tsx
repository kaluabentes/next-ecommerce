import Product from "@/models/Product"
import {
  Container,
  ContentGroup,
  Description,
  Image,
  ImageContainer,
  Title,
} from "./ProductHero.styles"
import Button from "@/components/Button"

interface ProductHeroProps {
  product: Product
}

export default function ProductHero({ product }: ProductHeroProps) {
  return (
    <Container>
      <ContentGroup>
        <Title>{product.heroTitle}</Title>
        <Description>{product.heroDescription}</Description>
        <Button variant="secondary" size="lg">
          Ver mais detalhes
        </Button>
      </ContentGroup>
      <ImageContainer>
        <Image src={product.heroImage} alt={product.name} />
      </ImageContainer>
    </Container>
  )
}
