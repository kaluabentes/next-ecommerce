import { getAllProducts, getProductBySlug } from "@/app/api/products"
import PhotoGallery from "../components/PhotoGallery"
import createKey from "@/utilities/array/createKey"
import { Image } from "../components/PhotoGallery/PhotoGallery"
import ContentContainer from "@/components/ContentContainer"
import ProductBuyArea from "../components/ProductBuyArea"
import { Grid, PageBox } from "../components/components"
import ProductDescription from "../components/ProductDescription"
import Button from "@/components/Button"
import { useEffect, useState } from "react"
import BuyNowButton from "../components/BuyNowButton/BuyNowButton"

export async function generateStaticParams() {
  const products = getAllProducts(["slug"])

  return products.map((product) => ({
    slug: product.slug,
  }))
}

export default async function ProductPage({ params }: any) {
  const { slug } = params
  const product = await getProductBySlug(slug, "*")
  const images = product.images?.map((img, index) => ({
    src: img,
    alt: `${product.name} ${createKey(index)}`,
  }))

  return (
    <ContentContainer>
      <PageBox>
        <Grid>
          <PhotoGallery images={images as Image[]} />
          <ProductBuyArea product={product} />
        </Grid>
        <Grid>
          <ProductDescription content={product.content!} />
          <ProductBuyArea fixed product={product} />
        </Grid>
      </PageBox>
      <BuyNowButton />
    </ContentContainer>
  )
}
