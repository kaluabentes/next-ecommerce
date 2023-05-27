import { getAllProducts, getProductBySlug } from "@/app/api/products"
import PhotoGallery from "../components/PhotoGallery"
import createKey from "@/utilities/array/createKey"
import { Image } from "../components/PhotoGallery/PhotoGallery"
import ContentContainer from "@/components/ContentContainer"
import ProductBuyArea from "../components/ProductBuyArea"
import {
  ContentGrid,
  Grid,
  PageBox,
  ProductCarouselWrapper,
  ShowOnlyInLarge,
  ShowOnlyInSmall,
} from "../components/components"
import ProductDescription from "../components/ProductDescription"
import Button from "@/components/Button"
import { useEffect, useState } from "react"
import BuyNowButton from "../components/BuyNowButton/BuyNowButton"
import Breadcrumbs, {
  BreadcrumbItem,
} from "../components/Breadcrumbs/Breadcrumbs"
import ProductReviews from "../components/ProductReviews"
import ProductsCarousel from "@/components/ProductsCarousel"

export async function generateStaticParams() {
  const products = await getAllProducts(["slug"])

  return products.map((product) => ({
    slug: product.slug,
  }))
}

export default async function ProductPage({ params }: any) {
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
      current: true,
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
      <BuyNowButton />
    </ContentContainer>
  )
}
