import { getAllProducts, getProductBySlug } from "@/app/content/products"
import PhotoGallery from "./components/PhotoGallery"
import createKey from "@/utilities/array/createKey"
import { Image } from "./components/PhotoGallery/PhotoGallery"
import ContentContainer from "@/components/ContentContainer"
import ProductBuyArea from "./components/ProductBuyArea"
import {
  ContentGrid,
  Grid,
  PageBox,
  ShowOnlyInLarge,
  ShowOnlyInSmall,
} from "./components/utils"
import ProductDescription from "./components/ProductDescription"
import Breadcrumbs, { BreadcrumbItem } from "@/components/Breadcrumbs"
import ProductReviews from "./components/ProductReviews"
import ProductsCarousel from "@/components/ProductsCarousel"

interface ProductPageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  const products = await getAllProducts(["slug"])

  return products.map((product) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = params

  const product = await getProductBySlug(slug)

  return {
    title: product.name,
    description: product.heroDescription,
    openGraph: {
      images: [product.thumb],
    },
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = params
  const products = await getAllProducts()
  const product = await getProductBySlug(slug, "*")
  const filteredProducts = products.filter((p) => p.slug !== product.slug)
  const images = product.images?.map((img, index) => ({
    src: img,
    alt: `${product.name} ${createKey(index)}`,
  }))

  const breadcrumbs: BreadcrumbItem[] = [
    {
      path: "/",
      title: "Página inicial",
    },
    {
      path: "/products",
      title: "Todos os produtos",
    },
    {
      title: product.name!,
    },
  ]

  return (
    <ContentContainer>
      <PageBox>
        <Breadcrumbs items={breadcrumbs} />
        <Grid>
          <ContentGrid>
            <PhotoGallery images={images as Image[]} />
            <ShowOnlyInSmall>
              <ProductBuyArea product={product} />
            </ShowOnlyInSmall>
            <ProductDescription content={product.content!} />
          </ContentGrid>
          <ShowOnlyInLarge>
            <ProductBuyArea product={product} />
          </ShowOnlyInLarge>
        </Grid>
        <ProductsCarousel
          title="Você também pode gostar"
          products={filteredProducts}
          padding="0px"
          margin="0px"
        />
        <ProductReviews reviews={product.reviews!} />
      </PageBox>
    </ContentContainer>
  )
}
