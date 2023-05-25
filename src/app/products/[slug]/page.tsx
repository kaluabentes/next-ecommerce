import { getAllProducts, getProductBySlug } from "@/app/api/products"
import Product from "@/models/Product"
import PhotoGallery from "../components/PhotoGallery"
import createKey from "@/utilities/array/createKey"
import { Image } from "../components/PhotoGallery/PhotoGallery"
import ContentContainer from "@/components/ContentContainer"

export async function generateStaticParams() {
  const products = getAllProducts(["slug"])

  return products.map((product) => ({
    slug: product.slug,
  }))
}

export default function ProductPage({ params }: any) {
  const { slug } = params
  const product = getProductBySlug(slug, "*")
  const images = product.images?.map((img, index) => ({
    src: img,
    alt: `${product.name} ${createKey(index)}`,
  }))

  return (
    <ContentContainer>
      <PhotoGallery images={images as Image[]} />
    </ContentContainer>
  )
}
