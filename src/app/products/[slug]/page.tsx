import { getAllProducts, getProductBySlug } from "@/app/api/products"
import Product from "@/models/Product"
import PhotoGallery from "../components/PhotoGallery"
import createKey from "@/utilities/array/createKey"
import { Image } from "../components/PhotoGallery/PhotoGallery"
import ContentContainer from "@/components/ContentContainer"
import ProductBuyArea from "../components/ProductBuyArea"
import { ProductInfoBox } from "../components/styles"

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
      <ProductInfoBox>
        <PhotoGallery images={images as Image[]} />
        <ProductBuyArea product={product} />
      </ProductInfoBox>
    </ContentContainer>
  )
}
